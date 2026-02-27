import React, { useEffect, useState, useMemo } from "react";
import styles from "./DigitalOutlet.module.css";
import magazines from "../data/magazinesData";

const SORT_OPTIONS = ["By Year", "By Topic"];

const DigitalOutlet = () => {
  const [sortMode, setSortMode] = useState("By Year");
  const [activeFilter, setActiveFilter] = useState("All");

  const yearOptions = useMemo(() => {
    const years = [...new Set(magazines.map((m) => m.year).filter(Boolean))].sort(
        (a, b) => b - a
    );
    return ["All", ...years.map(String)];
  }, []);

  const topicOptions = useMemo(() => {
    const topics = [
      ...new Set(magazines.flatMap((m) => m.tags.map((t) => t.label))),
    ].sort();
    return ["All", ...topics];
  }, []);

  const handleSortChange = (mode) => {
    setSortMode(mode);
    setActiveFilter("All");
  };

  useEffect(() => {
    const canvas = document.getElementById("particle-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let nodes = [];
    let rafId;

    const resize = () => {
      const page = canvas.parentElement;
      canvas.width = page ? page.offsetWidth : window.innerWidth;
      canvas.height = page ? page.offsetHeight : window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    const init = () => {
      nodes = Array.from({ length: 36 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 0.25,
        dy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.5 + 1,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.strokeStyle = `rgba(8,48,103,${0.1 * (1 - dist / 130)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      nodes.forEach((n) => {
        ctx.fillStyle = "rgba(14,96,200,0.18)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();

        n.x += n.dx;
        n.y += n.dy;
        if (n.x < 0 || n.x > canvas.width) n.dx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.dy *= -1;
      });

      rafId = requestAnimationFrame(draw);
    };

    init();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const filteredMagazines = useMemo(() => {
    if (activeFilter === "All") return magazines;
    if (sortMode === "By Year") {
      return magazines.filter((m) => String(m.year) === activeFilter);
    }
    return magazines.filter((m) =>
        m.tags.some((t) => t.label === activeFilter)
    );
  }, [sortMode, activeFilter]);

  const groupedByYear = (mags) => {
    const groups = {};
    mags.forEach((mag) => {
      const year = mag.year ? String(mag.year) : "Unknown";
      if (!groups[year]) groups[year] = [];
      groups[year].push(mag);
    });
    return Object.entries(groups).sort(([a], [b]) => {
      if (a === "Unknown") return 1;
      if (b === "Unknown") return -1;
      return Number(b) - Number(a);
    });
  };

  const groupedByTopic = (mags) => {
    const groups = {};
    mags.forEach((mag) => {
      const topic = mag.tags?.[0]?.label || "Other";
      if (!groups[topic]) groups[topic] = [];
      groups[topic].push(mag);
    });
    return Object.entries(groups).sort(
        ([, a], [, b]) =>
            b.length - a.length ||
            a[0]?.tags?.[0]?.label?.localeCompare(
                b[0]?.tags?.[0]?.label || ""
            ) ||
            0
    );
  };

  const sections =
      sortMode === "By Year"
          ? groupedByYear(filteredMagazines)
          : groupedByTopic(filteredMagazines);

  const filterOptions =
      sortMode === "By Year" ? yearOptions : topicOptions;

  const totalCount = filteredMagazines.length;

  return (
      <div className={styles.page}>
        <div className={styles.animatedBg} aria-hidden="true" />
        <canvas id="particle-canvas" className={styles.canvas} aria-hidden="true" />

        <header className={styles.siteHeader}>
        <span className={styles.headerEyebrow}>
          <i className="fas fa-layer-group" />
          Curated Collection
        </span>
          <h1 className={styles.title}>Digital Outlet</h1>
          <p className={styles.subtitle}>
            Explore our digital magazine collection
          </p>
          <div className={styles.headerDivider}>
            <span className={styles.headerDiamond} />
          </div>
        </header>

        <section
            className={styles.filterSection}
            aria-label="Sort magazines"
        >
          <p className={styles.filterTitle}>Organise by</p>
          <div
              className={styles.sortToggle}
              role="group"
              aria-label="Sort options"
          >
            {SORT_OPTIONS.map((option) => (
                <button
                    key={option}
                    className={`${styles.sortBtn} ${
                        sortMode === option ? styles.activeSortBtn : ""
                    }`}
                    onClick={() => handleSortChange(option)}
                    aria-pressed={sortMode === option}
                >
                  <i
                      className={`fas ${
                          option === "By Topic"
                              ? "fa-tags"
                              : "fa-calendar-alt"
                      }`}
                      aria-hidden="true"
                  />
                  {option}
                </button>
            ))}
          </div>

          <div
              className={styles.chipRow}
              role="group"
              aria-label="Filter options"
          >
            {filterOptions.map((opt) => (
                <button
                    key={opt}
                    className={`${styles.chip} ${
                        activeFilter === opt ? styles.activeChip : ""
                    }`}
                    onClick={() => setActiveFilter(opt)}
                    aria-pressed={activeFilter === opt}
                >
                  {opt === "All" && (
                      <i
                          className="fas fa-border-all"
                          aria-hidden="true"
                      />
                  )}
                  {opt}
                </button>
            ))}
          </div>
        </section>

        <div className={styles.gridHeader}>
          <span className={styles.gridLabel}>Collection</span>
          <div className={styles.gridRule} />
          <span className={styles.gridCount}>
          {totalCount}{" "}
            {totalCount === 1 ? "Issue" : "Issues"}
        </span>
        </div>

        <main>
          {sections.length === 0 ? (
              <div className={styles.groupSection}>
                <div className={styles.magazineWall}>
                  <div className={styles.emptyState}>
                    <p>No issues found</p>
                    <span>
                  Try selecting a different filter
                </span>
                  </div>
                </div>
              </div>
          ) : (
              <div
                  className={
                    sortMode === "By Topic" &&
                    activeFilter === "All"
                        ? styles.flowContainer
                        : styles.stackedContainer
                  }
              >
                {sections.map(([groupName, mags]) => (
                    <section
                        key={groupName}
                        className={`${styles.groupSection} ${
                            sortMode === "By Topic" &&
                            activeFilter === "All"
                                ? styles.flowItem
                                : ""
                        }`}
                        style={
                          sortMode === "By Topic" &&
                          activeFilter === "All"
                              ? {
                                flexGrow: Math.min(
                                    mags.length,
                                    4
                                ),
                                flexBasis: `${
                                    Math.min(
                                        mags.length,
                                        4
                                    ) * 260
                                }px`,
                              }
                              : {}
                        }
                        aria-label={groupName}
                    >
                      <div className={styles.groupPanel}>
                        <div className={styles.groupHeader}>
                    <span className={styles.groupName}>
                      {groupName}
                    </span>
                          <div className={styles.groupRule} />
                          <span className={styles.groupCount}>
                      {mags.length}{" "}
                            {mags.length === 1
                                ? "Issue"
                                : "Issues"}
                    </span>
                        </div>

                        <div
                            className={styles.magazineWall}
                            aria-live="polite"
                        >
                          {mags.map((mag) => (
                              <article
                                  key={mag.id}
                                  className={styles.magCard}
                              >
                                <div
                                    className={
                                      styles.coverWrapper
                                    }
                                >
                                  <img
                                      src={mag.image}
                                      alt={`${mag.title} cover`}
                                      className={
                                        styles.magCover
                                      }
                                      loading="lazy"
                                  />
                                  <span
                                      className={
                                        styles.issueBadge
                                      }
                                  >
                            {mag.issue}
                          </span>
                                </div>

                                <div
                                    className={
                                      styles.magFooter
                                    }
                                >
                                  <div
                                      className={
                                        styles.magMeta
                                      }
                                  >
                                    <h3
                                        className={
                                          styles.magTitle
                                        }
                                    >
                                      {mag.title}
                                    </h3>
                                  </div>

                                  {mag.tags.length > 0 && (
                                      <div
                                          className={
                                            styles.magTags
                                          }
                                          aria-label="Topics"
                                      >
                                        {mag.tags.map(
                                            (tag, idx) => (
                                                <span
                                                    key={idx}
                                                    className={
                                                      styles.tag
                                                    }
                                                >
                                    <i
                                        className={`fas ${tag.icon}`}
                                        aria-hidden="true"
                                    />
                                                  {tag.label}
                                  </span>
                                            )
                                        )}
                                      </div>
                                  )}

                                  <div
                                      className={
                                        styles.magActions
                                      }
                                  >
                                    <button
                                        className={
                                          styles.btnPreview
                                        }
                                        onClick={() =>
                                            window.open(
                                                mag.pdf,
                                                "_blank"
                                            )
                                        }
                                        aria-label={`Preview ${mag.title}`}
                                    >
                                      <i
                                          className="fas fa-eye"
                                          aria-hidden="true"
                                      />
                                      Preview
                                    </button>

                                    <a
                                        href={mag.pdf}
                                        download
                                        aria-label={`Download ${mag.title}`}
                                    >
                                      <button
                                          className={
                                            styles.btnDownload
                                          }
                                      >
                                        <i
                                            className="fas fa-download"
                                            aria-hidden="true"
                                        />
                                        Download
                                      </button>
                                    </a>
                                  </div>
                                </div>
                              </article>
                          ))}
                        </div>
                      </div>
                    </section>
                ))}
              </div>
          )}
        </main>
      </div>
  );
};

export default DigitalOutlet;