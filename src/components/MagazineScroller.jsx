"use client";

import { useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import * as pdfjsLib from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min?url";
import "./MagazineScroller.css";

// Import covers
// import cover1 from "../assets/Magazine/covers/Volume 6-Issue_1_jan-feb(cover).jpg";
// import cover2 from "../assets/Magazine/covers/Volume 6-Issue_2_mar-apr(cover).jpg";
// import cover3 from "../assets/Magazine/covers/Volume 6-Issue_3_may-jun(cover).jpg";
// import cover4 from "../assets/Magazine/covers/magzine4.jpg";
// import cover5 from "../assets/Magazine/covers/magzine5.jpg";
// import cover6 from "../assets/Magazine/covers/magzine6.jpg";

// Import PDFs
// import pdf1 from "../assets/Magazine/pdfs/Volume 6-Issue_1_jan-feb_pdf.pdf";
// import pdf2 from "../assets/Magazine/pdfs/Volume 6-Issue_2_mar-apr_pdf.pdf";
// import pdf3 from "../assets/Magazine/pdfs/Volume 6-Issue_3_may-jun_pdf.pdf";
//import pdf4 from "../../assets/Magazine/pdfs/magzine4.pdf";
//import pdf5 from "../../assets/Magazine/pdfs/magzine5.pdf";
//import pdf6 from "../../assets/Magazine/pdfs/magzine6.pdf";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

export default function BookShowcase() {
  const [bookStates, setBookStates] = useState({
    book1: "default",
    book2: "default",
    book3: "default",
    book4: "default",
    book5: "default",
    book6: "default",
  });

  const [selectedPdf, setSelectedPdf] = useState(null);
  const [pageImages, setPageImages] = useState([]);
  const [loading, setLoading] = useState(false);

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
      let newState = "default";

      if (action === "flip") {
        newState = currentState === "viewback" ? "default" : "viewback";
      } else if (action === "viewinside") {
        const book = books.find((b) => b.id === bookId);
        if (book && book.pdf) {
          setSelectedPdf(book.pdf);
        }
        return prev; // Don't change book state, just open modal
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

  const getBookClasses = (bookNumber, bookId) => {
    const state = bookStates[bookId];
    let classes = `bk-book book-${bookNumber}`;

    if (state === "default") {
      classes += " bk-bookdefault";
    } else if (state === "viewback") {
      classes += " bk-viewback";
    } else if (state === "viewinside") {
      classes += " bk-viewinside";
    }

    return classes;
  };

  const books = [
    {
      id: "book1",
      number: 1,
      title: "DSA Bootcamp",
      cover: "/Magazine/covers/Volume 6-Issue_1_jan-feb(cover).jpg",
      pdf: "/Magazine/pdfs/Volume 6-Issue_1_jan-feb_pdf.pdf",
      month: "JAN-FEB",
      spineColor: "#064491",
      backColor: "#064491",
      backText:
          "Through interactive discussions, coding exercises, and practical insights from speakers, the event provided a solid foundation in Data Structures and Algorithms.",
    },
    {
      id: "book2",
      number: 2,
      title: "OOPS Workshop",
      cover: "/Magazine/covers/Volume 6-Issue_2_mar-apr(cover).jpg",
      pdf: "/Magazine/pdfs/Volume 6-Issue_2_mar-apr_pdf.pdf",
      month: "MAR-APR",
      spineColor: "black",
      backColor: "black",
      backText:
          "The OOPS Workshop provided participants with clear insights into core concepts like inheritance, polymorphism, and encapsulation, helping them understand how object-oriented programming improves code efficiency, scalability, and reusability.",
    },
    {
      id: "book3",
      number: 3,
      title: "Javascript Bootcamp",
      cover: "/Magazine/covers/Volume 6-Issue_3_may-jun(cover).jpg",
      pdf: "/Magazine/pdfs/Volume 6-Issue_3_may-jun_pdf.pdf",
      month: "MAY-JUN",
      spineColor: "black",
      backColor: "black",
      backText:
          "The JavaScript Bootcamp introduced students to core programming concepts through interactive coding exercises, helping them build confidence and strengthen their web development skills.",
    },
    {
      id: "book4",
      number: 4,
      title: "Introduction to Quantum Computing",
      cover: "/Magazine/covers/Volume 6-Issue_4_jul-aug(cover).jpg",
      pdf: "/Magazine/pdfs/Volume 6-Issue_4_jul-aug_pdf.pdf",
      month: "JUL-AUG",
      spineColor: "black",
      backColor: "black",
      backText:
          "An advanced section of computer science that makes use of the unique rules of quantum physics to carry out computations.",
    },
    {
      id: "book5",
      number: 5,
      title: "Web Development Guide",
      cover: "/Magazine/covers/magzine5.jpg",
      pdf: "/Magazine/pdfs/Volume 5-Issue_5_sept-oct_pdf.pdf",
      
      month: "SEP-OCT",
      spineColor: "#593aaf",
      backColor: "#593aaf",
      backText:
          "Build modern, responsive web applications using the latest technologies and frameworks. From frontend design to backend architecture, master the full stack of web development skills needed in today's digital landscape.",
    },
    {
      id: "book6",
      number: 6,
      title: "AI & Machine Learning",
      cover: "/Magazine/covers/magzine6.jpg",
      pdf: "/Magazine/pdfs/Volume 5-Issue_6_nov-dec_pdf.pdf",
      
      month: "NOV-DEC",
      spineColor: "#223D96",
      backColor: "#223D96",
      backText:
          "Dive deep into artificial intelligence and machine learning concepts. Learn how to build intelligent systems that can learn, adapt, and make decisions, transforming the way we interact with technology.",
    },
  ];

  return (
      <div className="container">
        <header className="clearfix">
          <h1>DIGITAL OUTLET</h1>
        </header>
        <div className="main">
          <ul id="bk-list" className="bk-list clearfix">
            {books.map((book) => (
                <li key={book.id}>
                  <div className={getBookClasses(book.number, book.id)}>
                    <div className="bk-front">
                      <div className="bk-cover-back"></div>
                      <div className="bk-cover">
                        <img
                            src={book.cover || "/placeholder.svg"}
                            alt={`${book.title} Cover`}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                              backgroundColor: book.spineColor,
                            }}
                        />
                        <div
                            className="book-hover-icon flip-hover-icon"
                            onClick={() => handleBookAction(book.id, "flip")}
                            title="Flip book"
                        >
                          🔄
                        </div>
                        <div
                            className="book-hover-icon view-hover-icon"
                            onClick={() => handleBookAction(book.id, "viewinside")}
                            title="View inside"
                        >
                          📖
                        </div>
                      </div>
                    </div>
                    <div className="bk-page">
                      <div
                          style={{
                            width: "70%",
                            height: "80px",
                            backgroundColor: "#f8f9fa",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "14px",
                            color: "#666",
                            textAlign: "center",
                            padding: "20px",
                            borderRadius: "3px",
                          }}
                      >
                        Click "View inside" to read the PDF
                      </div>
                    </div>
                    <div className="bk-back">
                      <div
                          style={{
                            padding: "30px",
                            height: "85%",
                            display: "flex",
                            flexDirection: "column",
                            backgroundColor: book.backColor,
                            position: "relative",
                          }}
                      >
                        <div
                            className="book-hover-icon flip-hover-icon"
                            onClick={() => handleBookAction(book.id, "flip")}
                            title="Flip book"
                            style={{
                              position: "absolute",
                              top: "10px",
                              right: "10px",
                            }}
                        >
                          🔄
                        </div>
                        <h3
                            style={{
                              fontSize: "18px",
                              fontWeight: "bold",
                              marginBottom: "20px",
                              color: "white",
                              textAlign: "center",
                              borderBottom: "2px solid #ddd",
                              paddingBottom: "10px",
                            }}
                        >
                          {book.title}
                        </h3>
                        <p
                            style={{
                              color: "white",
                              fontSize: "13px",
                              lineHeight: "1.6",
                              textAlign: "justify",
                              flex: 1,
                              margin: 0,
                            }}
                        >
                          {book.backText}
                        </p>
                      </div>
                    </div>
                    <div className="bk-right"></div>
                    <div
                        className="bk-left"
                        style={{
                          backgroundColor: book.spineColor,
                        }}
                    >
                      <div className="spine-month">{book.month}</div>
                    </div>
                    <div className="bk-top"></div>
                    <div className="bk-bottom"></div>
                  </div>
                </li>
            ))}
          </ul>
        </div>

        {selectedPdf && (
            <div className="pdf-preview-modal">
              <div className="pdf-preview-content">
                <button
                    className="btn close-btn"
                    onClick={closeFlipbook}
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "20px",
                      backgroundColor: "#ff4444",
                      color: "white",
                      border: "none",
                      padding: "8px 12px",
                      borderRadius: "50%",
                      cursor: "pointer",
                      fontSize: "16px",
                      fontWeight: "bold",
                      width: "36px",
                      height: "36px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 1000,
                    }}
                >
                  ×
                </button>
                {loading ? (
                    <div style={{ textAlign: "center", margin: 40 }}>
                      Loading flipbook preview...
                    </div>
                ) : pageImages.length ? (
                    <HTMLFlipBook
                        width={600}
                        height={800}
                        size="stretch"
                        minWidth={400}
                        minHeight={500}
                        maxWidth={800}
                        maxHeight={1000}
                        style={{ margin: "0 auto" }}
                        showCover={false}
                        flippingTime={600}
                        usePortrait={false}
                        startZIndex={0}
                        autoSize={false}
                        clickEventForward={true}
                    >
                      {pageImages.map((src, idx) => (
                          <div
                              key={idx}
                              className="page"
                              style={{
                                width: "100%",
                                height: "100%",
                                background: "#fff",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "10px",
                                boxSizing: "border-box",
                              }}
                          >
                            <img
                                src={src || "/placeholder.svg"}
                                alt={`Page ${idx + 1}`}
                                style={{
                                  maxWidth: "100%",
                                  maxHeight: "100%",
                                  width: "auto",
                                  height: "auto",
                                  objectFit: "scale-down",
                                  objectPosition: "center",
                                }}
                            />
                          </div>
                      ))}
                    </HTMLFlipBook>
                ) : (
                    <div style={{ textAlign: "center", margin: 40, color: "red" }}>
                      Could not preview PDF.
                    </div>
                )}
              </div>
            </div>
        )}
      </div>
  );
}
