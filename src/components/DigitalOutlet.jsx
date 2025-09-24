import React, { useEffect, useState } from "react";
import styles from "./DigitalOutlet.module.css";
import magazines from "../data/magazinesData";

const DigitalOutlet = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  // 🎨 Canvas background animation (circuit effect)
  useEffect(() => {
    const canvas = document.getElementById("particle-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let nodes = [];

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    function createNodes() {
      nodes = [];
      for (let i = 0; i < 40; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: (Math.random() - 0.5) * 0.3,
          dy: (Math.random() - 0.5) * 0.3,
          radius: 2,
        });
      }
    }

    function drawCircuit() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.strokeStyle = "rgba(8,48,103,0.15)";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((n) => {
        ctx.fillStyle = "rgba(8,48,103,0.25)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fill();

        n.x += n.dx;
        n.y += n.dy;

        if (n.x < 0 || n.x > canvas.width) n.dx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.dy *= -1;
      });

      requestAnimationFrame(drawCircuit);
    }

    createNodes();
    drawCircuit();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  // 🔎 Filter logic
  const filteredMagazines =
    selectedFilter === "All"
      ? magazines
      : magazines.filter((mag) =>
          mag.tags.some((tag) =>
            tag.label.toLowerCase() === selectedFilter.toLowerCase()
          )
        );

  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.siteHeader}>
        <h1 className={styles.title}>DIGITAL OUTLET</h1>
        <p className={styles.subtitle}>
          Explore Our Digital Magazine Collection
        </p>
      </header>

      {/* Filter Section */}
      <section className={styles.filterSection}>
        <h2 className={styles.filterTitle}>Filter by:</h2>
        <div className={styles.filterGrid}>
          {[
            "All",
            "Blockchain",
            "Decentralization",
            "Crypto",
            "Web3",
            "AI",
            "Machine Learning",
            "Data Science",
            "Innovation",
            "Technology",
          ].map((filter) => (
            <button
              key={filter}
              className={`${styles.filterChip} ${
                selectedFilter === filter ? styles.activeChip : ""
              }`}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Background + canvas */}
      <div className={styles.animatedBg}></div>
      <canvas id="particle-canvas" className={styles.canvas}></canvas>

      {/* Magazine Wall */}
      <main>
        <section className={styles.magazineWall} aria-live="polite">
          {filteredMagazines.map((mag) => (
            <article key={mag.id} className={styles.magCard}>
              <img
                src={mag.image}
                alt={`${mag.title} cover`}
                className={styles.magCover}
              />
              <div className={styles.magFooter}>
                <div className={styles.magMeta}>
                  <h3 className={styles.magTitle}>{mag.title}</h3>
                  <p className={styles.magIssue}>{mag.issue}</p>
                </div>
                <div className={styles.magTags}>
                  {mag.tags.map((tag, idx) => (
                    <span key={idx} className={styles.tag}>
                      <i className={`fas ${tag.icon}`}></i> {tag.label}
                    </span>
                  ))}
                </div>
                <div className={styles.magActions}>
                  <button
                    className={styles.btnPreview}
                    onClick={() => window.open(mag.pdf, "_blank")}
                  >
                    <i className="fas fa-eye"></i> Preview
                  </button>

                  <a href={mag.pdf} download>
                    <button className={styles.btnDownload}>
                      <i className="fas fa-download"></i>
                      Download
                    </button>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
};

export default DigitalOutlet;
