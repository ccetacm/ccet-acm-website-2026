"use client";

import { useState, useEffect } from "react";
import styles from "./MagazineScroller.module.scss";

export default function MagazineScroller() {
  const [bookStates, setBookStates] = useState({});
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch magazines from API
  useEffect(() => {
    const fetchMagazines = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://ccet.acm.org/APIs/magazines.php?sort_by=display_order&sort_order=desc');
        const data = await response.json();

        if (data.success) {
          // Transform API data to match the component's expected format
          const transformedBooks = data.data.map(magazine => ({
            id: magazine.book_id,
            title: magazine.title,
            cover: magazine.cover_image,
            pdf: magazine.pdf_path,
            month: magazine.month,
            backColor: magazine.back_color,
            backText: magazine.back_text
          }));

          setBooks(transformedBooks);

          // Initialize book states
          const initialStates = {};
          transformedBooks.forEach(book => {
            initialStates[book.id] = "cover";
          });
          setBookStates(initialStates);
        } else {
          setError(data.error || 'Failed to fetch magazines');
        }
      } catch (err) {
        setError('Error connecting to server: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMagazines();
  }, []);

  const handleBookAction = (bookId, action) => {
    setBookStates((prev) => {
      const currentState = prev[bookId];
      let newState = "cover";

      if (action === "flip") {
        newState = currentState === "back" ? "cover" : "back";
      } else if (action === "openBook") {
        newState = currentState === "open" ? "cover" : "open";
      } else if (action === "viewPdf") {
        const book = books.find((b) => b.id === bookId);
        if (book && book.pdf) {
          window.open(book.pdf, '_blank');
        }
        return prev;
      }

      return {
        ...prev,
        [bookId]: newState,
      };
    });
  };

  if (loading) {
    return (
        <div className={styles.magazineContainer}>
          <header className={styles.header}>
            <h1 className={styles.title}>Digital Outlet</h1>
          </header>
          <div style={{ textAlign: 'center', padding: '50px', fontSize: '18px' }}>
            Loading magazines...
          </div>
        </div>
    );
  }

  if (error) {
    return (
        <div className={styles.magazineContainer}>
          <header className={styles.header}>
            <h1 className={styles.title}>Digital Outlet</h1>
          </header>
          <div style={{ textAlign: 'center', padding: '50px', color: 'red' }}>
            Error: {error}
          </div>
        </div>
    );
  }

  return (
      <div className={styles.magazineContainer}>
        <header className={styles.header}>
          <h1 className={styles.title}>Digital Outlet</h1>
        </header>

        <div className={styles.bookGrid}>
          {books.map((book) => (
              <div key={book.id} className={styles.bookItem}>
                {/* Book 3D Element */}
                <div className={`${styles.bookWrapper} ${
                    bookStates[book.id] === 'cover' ? styles.viewCover :
                        bookStates[book.id] === 'back' ? styles.viewBack :
                            bookStates[book.id] === 'open' ? styles.viewOpen : styles.viewCover
                }`}>
                  <div className={styles.bookContent}>
                    {/* Front Cover */}
                    <div className={styles.bookFront}>
                      <div
                          className={styles.bookCover}
                          style={{
                            backgroundImage: `url(${book.cover})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }}
                      >
                      </div>
                      <div className={styles.bookCoverBack}></div>
                    </div>

                    {/* Inside Pages */}
                    <div className={styles.bookPage}>
                      <div className={styles.insideContent}>
                        <div className={styles.pagePreview}>
                          <h3>{book.title}</h3>
                          <p>Click "Read PDF" to view the complete magazine.</p>
                          <div className={styles.previewImage}>
                            <img src={book.cover} alt={`${book.title} preview`} />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Back Cover */}
                    <div
                        className={styles.bookBack}
                        style={{ backgroundColor: book.backColor }}
                    >
                      <div className={styles.backContent}>
                        <h3>{book.title}</h3>
                        <p>{book.backText}</p>
                      </div>
                    </div>

                    {/* Book Edges */}
                    <div className={styles.bookTop}></div>
                    <div className={styles.bookRight}></div>
                    <div className={styles.bookBottom}></div>
                  </div>
                </div>

                {/* Right Side Content */}
                <div className={styles.rightSideContent}>
                  {/* Control Panel */}
                  <div className={styles.controlPanel}>
                    <div
                        className={`${styles.controlButton} ${(bookStates[book.id] === 'cover' || bookStates[book.id] === 'back') ? styles.active : ''}`}
                        onClick={() => handleBookAction(book.id, 'flip')}
                    >
                      Flip
                    </div>
                    <div
                        className={`${styles.controlButton} ${bookStates[book.id] === 'open' ? styles.active : ''}`}
                        onClick={() => handleBookAction(book.id, 'openBook')}
                    >
                      Open Book
                    </div>
                    <div
                        className={styles.controlButton}
                        onClick={() => handleBookAction(book.id, 'viewPdf')}
                    >
                      Read PDF
                    </div>
                  </div>

                  {/* Book Info */}
                  <div className={styles.bookInfo}>
                    <h3>
                      <span>{book.month}</span>
                      {book.title}
                    </h3>
                    <p>{book.backText}</p>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
  );
}