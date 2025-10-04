"use client";
import React from "react";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import { Brain, Leaf, Zap, ArrowRight } from "lucide-react";

const researchFocusAreas = [
  { title: "Responsible AI", icon: Brain, color: "#e0edff" },
  { title: "Sustainable Computing", icon: Leaf, color: "#e6f9f0" },
  { title: "Green Technology", icon: Zap, color: "#e6f9e6" },
];

const ResearchLabIsolated = () => {
  const handleExploreResearch = () => {
    console.log("Exploring research...");
  };

  return (
    <div className="research-lab-isolated-wrapper">
      <div className="research-lab-isolated-card">
        {/* Left Content */}
        <div className="research-lab-isolated-content">
          <div className="research-lab-isolated-badge">RESEARCH EXCELLENCE</div>

          <h1 className="research-lab-isolated-title">
            Responsible AI & Sustainable Computing
            <span className="research-lab-isolated-highlight">
              Research Laboratory
            </span>
          </h1>

          {/* Focus Areas */}
          <h3 className="research-lab-isolated-focus-title">
            Research Focus Areas
          </h3>
          <div className="research-lab-isolated-focus-grid">
            {researchFocusAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div key={index} className="research-lab-isolated-focus-card">
                  <div
                    className="research-lab-isolated-icon"
                    style={{ backgroundColor: area.color }}
                  >
                    <IconComponent size={20} />
                  </div>
                  <p className="research-lab-isolated-focus-text">
                    {area.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Lottie Animation */}
        <div className="research-lab-isolated-animation">
          <Player
            autoplay
            loop
            src="/animations/Analytical Thinking Illustration.json"
            style={{ height: "300px", width: "300px" }}
          />
          <Link to="/research">
            <button className="research-lab-isolated-explore-btn">
              Explore Our Research
              <ArrowRight size={18} />
            </button>
          </Link>
        </div>
      </div>

      {/* --- Styles --- */}
      <style>{`
        .research-lab-isolated-wrapper {
    padding: 20px;
    display: flex;
    justify-content: center;
    background: linear-gradient(
        to bottom,
        #CAF0F875 0%,   /* light at top */
        rgba(18, 105, 115, 0.3) 100%  /* light at bottom */
    );
}


        .research-lab-isolated-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 40px;
          background: #114183CE;
          border-radius: 16px;
          padding: 40px;
          max-width: 1100px;
          width: 100%;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
          border-top: 4px solid #00296b;
          margin-top: -20px;
          text-align:center;
        }

        .research-lab-isolated-content {
          flex: 1;
          max-width: 600px;
        }

        .research-lab-isolated-badge {
          display: inline-block;
          background: #00296b;
          color: #fff;
          padding: 8px 16px;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 10px;
          letter-spacing: 0.8px;
          margin-bottom: 16px;
          text-transform: uppercase;
        }

        .research-lab-isolated-title {
          font-size: 32px;
          font-weight: 700;
          color: white;
          line-height: 1.3;
          margin-bottom: 4px;
        }

        .research-lab-isolated-title .research-lab-isolated-highlight {
          display: block;
          font-size: 18px;
          font-weight: 600;
          color: white;
          margin-top: 8px;
        }

        .research-lab-isolated-focus-title {
          font-size: 22px;
          font-weight: 700;
          margin: 28px 0 16px;
          color: white;
        }

        .research-lab-isolated-focus-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 16px;
        }

        .research-lab-isolated-focus-card {
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 14px;
          background: #fafafa;
          text-align: center;
          transition: all 0.3s ease;
          border-top: 4px solid #00296b;
        }

        .research-lab-isolated-focus-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .research-lab-isolated-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 8px;
          color: #374151;
        }

        .research-lab-isolated-focus-text {
          font-size: 14px;
          font-weight: 500;
          color: #374151;
        }

        .research-lab-isolated-explore-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #00296b;
          color: #fff;
          border: none;
          padding: 12px 24px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 20px;
        }

        .research-lab-isolated-explore-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(37, 99, 235, 0.3);
        }

        .research-lab-isolated-animation {
          flex: 1;
          max-width: 400px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* 📱 Mobile Responsiveness */
        @media (max-width: 1024px) {
          .research-lab-isolated-card {
            flex-direction: column;
            text-align: center;
            gap: 24px;
            padding: 30px;
          }

          .research-lab-isolated-content {
            max-width: 100%;
          }

          .research-lab-isolated-title {
            font-size: 26px;
          }

          .research-lab-isolated-focus-title {
            font-size: 20px;
          }

          .research-lab-isolated-animation {
            max-width: 300px;
          }
        }

        @media (max-width: 640px) {
          .research-lab-isolated-card {
            padding: 20px;
          }

          .research-lab-isolated-title {
            font-size: 22px;
          }

          .research-lab-isolated-title .research-lab-isolated-highlight {
            font-size: 16px;
          }

          .research-lab-isolated-focus-grid {
            grid-template-columns: 1fr;
          }

          .research-lab-isolated-explore-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default ResearchLabIsolated;
