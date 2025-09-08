import React, { useEffect } from "react";
import styles from "./DigitalOutlet.module.css";
import magazines from "../data/magazinesData";

const DigitalOutlet = () => {
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

  return (
    <div className={styles.page}>
      {/* <Header_Hero_SocialMedia /> */}
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
          <button className={styles.filterChip}>
            <i className="fas fa-link"></i> Blockchain
          </button>
          <button className={styles.filterChip}>
            <i className="fas fa-balance-scale"></i> Decentralization
          </button>
          <button className={styles.filterChip}>
            <i className="fas fa-coins"></i> Crypto
          </button>
          <button className={styles.filterChip}>
            <i className="fas fa-globe"></i> Web3
          </button>
          <button className={styles.filterChip}>
            <i className="fas fa-robot"></i> AI
          </button>
          <button className={styles.filterChip}>
            <i className="fas fa-brain"></i> Machine Learning
          </button>
          <button className={styles.filterChip}>
            <i className="fas fa-database"></i> Data Science
          </button>
          <button className={styles.filterChip}>
            <i className="fas fa-lightbulb"></i> Innovation
          </button>
          <button className={styles.filterChip}>
            <i className="fas fa-microchip"></i> Technology
          </button>
        </div>
      </section>

      {/* Background + canvas */}
      <div className={styles.animatedBg}></div>
      <canvas id="particle-canvas" className={styles.canvas}></canvas>

      {/* Magazine Wall */}
      <main>
        <section className={styles.magazineWall} aria-live="polite">
          {magazines.map((mag) => (
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
                  <button className={styles.btnPreview}>
                    <i className="fas fa-eye"></i> Preview
                  </button>
                  <button className={styles.btnDownload}>
                    <i className="fas fa-download"></i> Download
                  </button>
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
