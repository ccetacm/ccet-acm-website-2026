"use client";

import { useState } from "react";
import styles from "./MagazineScroller.module.scss";

export default function MagazineScroller() {
  const [bookStates, setBookStates] = useState({
    book1: "cover",
    book2: "cover",
    book3: "cover",
    book4: "cover",
    book5: "cover",
    book6: "cover",
  });

  const handleBookAction = (bookId, action) => {
    setBookStates((prev) => {
      const currentState = prev[bookId];
      let newState = "cover";

      if (action === "flip") {
        // Toggle between cover and back
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

  const books = [
    {
      id: "book6",
      title: "Post-Explainable AI",
      cover: "/Magazine/covers/magazine26.jpg",
      pdf: "/Magazine/pdfs/Volume 6-Issue_6_nov-dec_2025.pdf",
      month: "NOV-DEC 2025",
      backColor: "#1a1a2e",
      backText: "Revolutionizing industries and transforming lives through Cyber Future, Green Tech, and Augmented Reality. Exploring how technology safeguards the digital world with cutting-edge insights into Cybersecurity 2025.",
    },
    {
      id: "book5",
      title: "Cyber Future",
      cover: "/Magazine/covers/magzine25.jpg",
      pdf: "/Magazine/pdfs/Volume 6-Issue_5_sept-oct_pdf.pdf",
      month: "SEP-OCT 2025",
      backColor: "#593aaf",
      backText: "Distinguished talk on AI in Cybersecurity: From insight to Foresight through Critical Thinking and Generative Information",
    },
    {
      id: "book4",
      title: "Generative AI",
      cover: "/Magazine/covers/magazine24.jpg",
      pdf: "/Magazine/pdfs/Volume 6-Issue_4_jul-aug_pdf.pdf",
      month: "JUL-AUG 2025",
      backColor: "black",
      backText: "How generative AI is transforming technology and society, covering its core concepts with real-world applications.",
    },
    {
      id: "book3",
      title: "Javascript Bootcamp",
      cover: "/Magazine/covers/magazine23.jpg",
      pdf: "/Magazine/pdfs/Volume 6-Issue_3_may-jun_pdf.pdf",
      month: "MAY-JUN 2025",
      backColor: "black",
      backText: "The JavaScript Bootcamp introduced students to core programming concepts through interactive coding exercises, helping them build confidence and strengthen their web development skills.",
    },
    {
      id: "book2",
      title: "OOPS Workshop",
      cover: "/Magazine/covers/magazine22.jpg",
      pdf: "/Magazine/pdfs/Volume 6-Issue_2_mar-apr_pdf.pdf",
      month: "MAR-APR 2025",
      backColor: "black",
      backText: "The OOPS Workshop provided participants with clear insights into core concepts like inheritance, polymorphism, and encapsulation, helping them understand how object-oriented programming improves code efficiency, scalability, and reusability.",
    },
    {
      id: "book1",
      title: "DSA Bootcamp",
      cover: "/Magazine/covers/magazine21.jpg",
      pdf: "/Magazine/pdfs/Volume 6-Issue_1_jan-feb_pdf.pdf",
      month: "JAN-FEB 2025",
      backColor: "#064491",
      backText: "Through interactive discussions, coding exercises, and practical insights from speakers, the event provided a solid foundation in Data Structures and Algorithms.",
    },
  ];

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