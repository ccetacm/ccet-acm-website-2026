"use client";

import { useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import * as pdfjsLib from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min?url";
import styles from "./MagazineScroller.module.scss";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

export default function MagazineScroller() {
  const [bookStates, setBookStates] = useState({
    book1: "cover",
    book2: "cover",
    book3: "cover",
    book4: "cover",
    book5: "cover",
    book6: "cover",
  });

  const [selectedPdf, setSelectedPdf] = useState(null);
  const [pageImages, setPageImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!selectedPdf) {
      setPageImages([]);
      setLoading(false);
      return;
    }
    setLoading(true);

    const loadPdfPages = async () => {
      try {
        const loadingTask = pdfjsLib.getDocument({ url: selectedPdf });
        const pdf = await loadingTask.promise;
        const images = [];

        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
          const page = await pdf.getPage(pageNum);
          const viewport = page.getViewport({ scale: 2.0 });

          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");
          canvas.width = viewport.width;
          canvas.height = viewport.height;

          await page.render({ canvasContext: context, viewport }).promise;
          images.push(canvas.toDataURL("image/jpeg", 0.95));
        }

        setPageImages(images);
      } catch (e) {
        console.error("PDF render error:", e);
        setPageImages([]);
      }
      setLoading(false);
    };

    loadPdfPages();
  }, [selectedPdf]);

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
          setSelectedPdf(book.pdf);
        }
        return prev;
      }

      return {
        ...prev,
        [bookId]: newState,
      };
    });
  };

  const closeFlipbook = () => {
    setSelectedPdf(null);
  };

  const books = [
    {
      id: "book1",
      title: "DSA Bootcamp",
      cover: "/Magazine/covers/magazine21.jpg",
      pdf: "/Magazine/pdfs/Volume 6-Issue_1_jan-feb_pdf.pdf",
      month: "JAN-FEB",
      backColor: "#064491",
      backText: "Through interactive discussions, coding exercises, and practical insights from speakers, the event provided a solid foundation in Data Structures and Algorithms.",
    },
    {
      id: "book2",
      title: "OOPS Workshop",
      cover: "/Magazine/covers/magazine22.jpg",
      pdf: "/Magazine/pdfs/Volume 6-Issue_2_mar-apr_pdf.pdf",
      month: "MAR-APR",
      backColor: "black",
      backText: "The OOPS Workshop provided participants with clear insights into core concepts like inheritance, polymorphism, and encapsulation, helping them understand how object-oriented programming improves code efficiency, scalability, and reusability.",
    },
    {
      id: "book3",
      title: "Javascript Bootcamp",
      cover: "/Magazine/covers/magazine23.jpg",
      pdf: "/Magazine/pdfs/Volume 6-Issue_3_may-jun_pdf.pdf",
      month: "MAY-JUN",
      backColor: "black",
      backText: "The JavaScript Bootcamp introduced students to core programming concepts through interactive coding exercises, helping them build confidence and strengthen their web development skills.",
    },
    {
      id: "book4",
      title: "Introduction to Quantum Computing",
      cover: "/Magazine/covers/magazine24.jpg",
      pdf: "/Magazine/pdfs/Volume 6-Issue_4_jul-aug_pdf.pdf",
      month: "JUL-AUG",
      backColor: "black",
      backText: "An advanced section of computer science that makes use of the unique rules of quantum physics to carry out computations.",
    },
    {
      id: "book5",
      title: "Web Development Guide",
      cover: "/Magazine/covers/magzine5.jpg",
      pdf: "/Magazine/pdfs/Volume 5-Issue_5_sept-oct_pdf.pdf",
      month: "SEP-OCT",
      backColor: "#593aaf",
      backText: "Build modern, responsive web applications using the latest technologies and frameworks. From frontend design to backend architecture, master the full stack of web development skills needed in today's digital landscape.",
    },
    {
      id: "book6",
      title: "AI & Machine Learning",
      cover: "/Magazine/covers/magzine6.jpg",
      pdf: "/Magazine/pdfs/Volume 5-Issue_6_nov-dec_pdf.pdf",
      month: "NOV-DEC",
      backColor: "#223D96",
      backText: "Dive deep into artificial intelligence and machine learning concepts. Learn how to build intelligent systems that can learn, adapt, and make decisions, transforming the way we interact with technology.",
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
                          <p>Click "Read PDF" to view the complete magazine in flipbook format.</p>
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

        {/* PDF Modal */}
        {selectedPdf && (
            <div className={styles.pdfModal}>
              <div className={styles.pdfContent}>
                <button
                    className={styles.closeButton}
                    onClick={closeFlipbook}
                >
                  ×
                </button>
                {loading ? (
                    <div className={styles.loadingMessage}>
                      Loading flipbook preview...
                    </div>
                ) : pageImages.length ? (
                    <HTMLFlipBook
                        width={isMobile ? 320 : 600}
                        height={isMobile ? 480 : 800}
                        size="stretch"
                        minWidth={isMobile ? 280 : 400}
                        minHeight={isMobile ? 420 : 500}
                        maxWidth={isMobile ? 400 : 800}
                        maxHeight={isMobile ? 600 : 1000}
                        style={{ margin: "0 auto" }}
                        showCover={false}
                        flippingTime={600}
                        usePortrait={isMobile ? true : false}
                        startZIndex={1000}
                        autoSize={false}
                        clickEventForward={true}
                        swipeDistance={isMobile ? 50 : 30}
                        showPageCorners={!isMobile}
                        disableFlipByClick={isMobile}
                        mobileScrollSupport={true}
                    >
                      {pageImages.map((src, idx) => (
                          <div
                              key={idx}
                              className={styles.flipPage}
                          >
                            <img
                                src={src}
                                alt={`Page ${idx + 1}`}
                                className={styles.pageImage}
                            />
                          </div>
                      ))}
                    </HTMLFlipBook>
                ) : (
                    <div className={styles.errorMessage}>
                      Could not preview PDF.
                    </div>
                )}
              </div>
            </div>
        )}
      </div>
  );
}