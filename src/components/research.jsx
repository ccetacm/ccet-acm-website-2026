"use client";

import Lottie from "lottie-react";
import researchAnimation from "../assets/Analytical Thinking Illustration.json";
import { Brain, Leaf, Zap, ArrowRight } from "lucide-react";

const researchFocusAreas = [
  { title: "Responsible AI", icon: Brain, color: "#e0edff" },
  { title: "Sustainable Computing", icon: Leaf, color: "#e6f9f0" },
  { title: "Green Technology", icon: Zap, color: "#e6f9e6" },
];

const ResearchLabIsolated = () => {
  const handleExploreResearch = () => {
    // Add your navigation logic here
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
          <Lottie animationData={researchAnimation} loop={true} />
          <button
            onClick={handleExploreResearch}
            className="research-lab-isolated-explore-btn"
          >
            Explore Our Research
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <style>{`
        .research-lab-isolated-wrapper {
          padding: 40px;
          display: flex;
          justify-content: center;
        }

        .research-lab-isolated-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-align: center;
          gap: 40px;
          background: #fff;
          border-radius: 16px;
          padding: 40px;
          max-width: 1100px;
          width: 100%;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
          border-top: 4px solid #2563eb;
        }

        .research-lab-isolated-content {
          flex: 1;
          max-width: 600px;
        }

        .research-lab-isolated-badge {
          display: inline-block;
          background: #2563eb;
          color: #fff;
          padding: 10px 20px;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 10px;
          letter-spacing: 0.8px;
          margin-bottom: 20px;
          text-transform: uppercase;
        }

        .research-lab-isolated-title {
          font-size: 38px;
          font-weight: 700;
          color: #00296b;
          line-height: 1.3;
          letter-spacing: -0.4px;
          margin-bottom: 4px;
        }

        .research-lab-isolated-title .research-lab-isolated-highlight {
          display: block;
          font-size: 18px;
          font-weight: 600;
          color: #2563eb;
          margin-top: 8px;
          letter-spacing: -0.2px;
          line-height: 1.2;
        }

        .research-lab-isolated-focus-title {
          font-size: 25px;
          font-weight: bolder;
          margin: 32px 0 16px;
          color: #00296b;
          letter-spacing: -0.1px;
          line-height: 1.3;
        }

        .research-lab-isolated-focus-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 16px;
        }

        .research-lab-isolated-focus-card {
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 16px;
          background: #fafafa;
          text-align: center;
          transition: all 0.3s ease;
        }

        .research-lab-isolated-focus-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .research-lab-isolated-icon {
          width: 40px;
          height: 40px;
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
          background: #2563eb;
          color: #fff;
          border: none;
          padding: 14px 28px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 24px;
          letter-spacing: -0.1px;
        }

        .research-lab-isolated-explore-btn:hover {
          background: #1d4ed8;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3);
        }

        .research-lab-isolated-explore-btn:active {
          transform: translateY(0);
        }

        .research-lab-isolated-animation {
          flex: 1;
          max-width: 400px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default ResearchLabIsolated;
