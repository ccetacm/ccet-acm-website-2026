"use client";

import { useState } from "react";
import "./MagazineScroller.css";

export default function BookShowcase() {
  const [bookStates, setBookStates] = useState({
    book1: "default",
    book2: "default",
    book3: "default",
    book4: "default",
    book5: "default",
    book6: "default",
  });

  const handleBookAction = (bookId, action) => {
    setBookStates((prev) => {
      const currentState = prev[bookId];
      let newState = "default";

      if (action === "flip") {
        newState = currentState === "viewback" ? "default" : "viewback";
      } else if (action === "viewinside") {
        newState = currentState === "viewinside" ? "default" : "viewinside";
      }

      return {
        ...prev,
        [bookId]: newState,
      };
    });
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
      title: "The Art of Programming",
      cover: "/magzine1.jpg",
      pdf: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      month: "JAN-FEB",
      spineColor: "#064491", // Changed from red to yellow to match back cover
      backColor: "#064491", // Added yellow back cover background
      backText:
        "Discover the fundamental principles of programming through practical examples and real-world applications. This comprehensive guide covers everything from basic syntax to advanced algorithms, making it perfect for both beginners and experienced developers looking to enhance their skills.",
    },
    {
      id: "book2",
      number: 2,
      title: "Digital Design Mastery",
      cover: "/magzine2.jpg",
      pdf: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      month: "MAR-APR",
      spineColor: "black", // Changed from blue to plum to match back cover
      backColor: "black", // Added plum back cover background
      backText:
        "Master the art of digital design with cutting-edge techniques and industry best practices. Learn how to create stunning visual experiences that captivate audiences and drive engagement across all digital platforms.",
    },
    {
      id: "book3",
      number: 3,
      title: "Nature's Algorithms",
      cover: "/magzine3.jpg",
      pdf: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      month: "MAY-JUN",
      spineColor: "black", // Changed from green to peach to match back cover
      backColor: "black", // Added peach back cover background
      backText:
        "Explore how nature's patterns and processes inspire computational solutions. From biomimicry to evolutionary algorithms, discover how the natural world provides blueprints for solving complex technological challenges.",
    },
    {
      id: "book4",
      number: 4,
      title: "Data Science Fundamentals",
      cover: "/magzine4.jpg",
      pdf: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      month: "JUL-AUG",
      spineColor: "black", // Changed from orange to mint to match back cover
      backColor: "black", // Added mint back cover background
      backText:
        "Unlock the power of data with comprehensive coverage of statistical analysis, machine learning, and data visualization. Learn to extract meaningful insights from complex datasets and make data-driven decisions.",
    },
    {
      id: "book5",
      number: 5,
      title: "Web Development Guide",
      cover: "/magzine5.jpg",
      pdf: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      month: "SEP-OCT",
      spineColor: "#593aaf", // Changed from purple to pink to match back cover
      backColor: "#593aaf", // Added pink back cover background
      backText:
        "Build modern, responsive web applications using the latest technologies and frameworks. From frontend design to backend architecture, master the full stack of web development skills needed in today's digital landscape.",
    },
    {
      id: "book6",
      number: 6,
      title: "AI & Machine Learning",
      cover: "/magzine6.jpg",
      pdf: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      month: "NOV-DEC",
      spineColor: "#223D96", // Changed from teal to bright yellow to match back cover
      backColor: "#223D96", // Added bright yellow back cover background
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
                  {bookStates[book.id] === "viewinside" ? (
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <div
                        className="book-hover-icon close-hover-icon"
                        onClick={() => handleBookAction(book.id, "viewinside")}
                        title="Close PDF"
                        style={{
                          position: "absolute",
                          top: "10px",
                          right: "10px",
                          zIndex: 10,
                          backgroundColor: "rgba(0, 0, 0, 0.7)",
                          color: "white",
                          borderRadius: "50%",
                          width: "30px",
                          height: "30px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          fontSize: "16px",
                        }}
                      >
                        ✕
                      </div>
                      <iframe
                        src={book.pdf}
                        style={{
                          width: "100%",
                          height: "100%",
                          border: "none",
                          borderRadius: "3px",
                        }}
                        title={`${book.title} PDF`}
                      />
                    </div>
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
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
                  )}
                </div>
                <div className="bk-back">
                  <div
                    style={{
                      padding: "30px",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      backgroundColor: book.backColor,
                      position: "relative", // Added relative positioning for icon placement
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
                    backgroundColor: book.spineColor, // Applied background color to entire spine
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
    </div>
  );
}
