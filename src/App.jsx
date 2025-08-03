// src/App.jsx
import React, { useState } from "react";
import Loader from "./components/loader";

export default function App() {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      {!showContent && <Loader onFinish={() => setShowContent(true)} />}
      <div
        id="website-content"
        className={`website-content ${
          showContent ? "website-content-visible" : "website-content-hidden"
        }`}
        style={{
          padding: 20,
          textAlign: "center",
          fontSize: "1.2em",
          color: "#333",
        }}
      >
        <h1>Welcome to your website!</h1>
        <div
          style={{
            height: 1000,
            backgroundColor: "#f0f8ff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p>More content here to test scrolling!</p>
        </div>
      </div>
    </>
  );
}
