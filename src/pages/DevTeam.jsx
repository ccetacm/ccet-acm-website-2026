import React from "react";
import { Linkedin, Github, Mail } from "lucide-react";

export default function DevTeam() {
  const teamMembers = [
    {
      id: 1,
      name: "Abhishek Mahato",
      role: "MERN DEVELOPER",
      description:
        "Skilled in applying modern web technologies to build efficient and maintainable solutions.",
      image:
        "/DevTeam/abhishek.jpg",
      linkedin: "https://www.linkedin.com/in/abhishek-mahato-86445a352",
      github: "https://github.com/GingerBaddie",
      email: "co23307@ccet.ac.in",
    },
    {
      id: 2,
      name: "Aadit Aggarwal",
      role: "MERN DEVELOPER",
      description:
        "Experienced in developing scalable web applications with a strong focus on backend architecture.",
      image:
        "/DevTeam/aadit-aggarwal.jpeg",
      linkedin: "http://www.linkedin.com/in/aaditagg",
      github: "https://github.com/Aadit-Aggarwal",
      email: "co23301@ccet.ac.in",
    },
    {
      id: 3,
      name: "Anmol Deep Singh",
      role: "FRONTEND DEVELOPER",
      description:
        "Specializes in creating responsive, accessible, and user-focused interface designs.",
      image:
        "/DevTeam/anmol.jpg",
      linkedin: "https://www.linkedin.com/in/anmol-deep-singh-9687b2395/",
      github: "https://github.com/Anmol-Deep-Singh-Coding",
      email: "co23312@ccet.ac.in",
    },
    {
      id: 4,
      name: "Lovish Tanwar",
      role: "MERN DEVELOPER",
      description:
        "Proficient in developing integrated web solutions with effective API handling",
      image:
        "/DevTeam/lovish.jpg",
      linkedin: "https://www.linkedin.com/in/lovish-tanwar-1a9282293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/Lovish7788",
      email: "co23341@ccet.ac.in",
    },
    {
      id: 5,
      name: "Leisha Gupta",
      role: "MERN DEVELOPER",
      description:
        "Demonstrates strong capability in designing clean interfaces and enhancing user experience.",
      image:
        "/DevTeam/leisha.jpg",
      linkedin: "https://www.linkedin.com/in/leisha-gupta-847b88330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/Leisha-05",
      email: "",
    },
    {
      id: 6,
      name: "Saffranpreet Kaur",
      role: "MERN DEVELOPER",
      description:
        "Focuses on backend systems and efficient database management practices.",
      image:
        "/DevTeam/saffran.jpg",
      linkedin: "http://www.linkedin.com/in/saffran-sehgal-1523b1337",
      github: "https://github.com/saffran123",
      email: "",
    },
    {
      id: 7,
      name: "Shruti",
      role: "MERN DEVELOPER",
      description:
        "Contributes to building scalable and intuitive web application interfaces.",
      image:
        "/DevTeam/shruti.jpg",
      linkedin: "https://www.linkedin.com/in/shruti-garg-415970330/",
      github: "https://github.com/halreynolds",
      email: "",
    },

    {
      id: 8,
      name: "Hardik Mittal",
      role: "MERN DEVELOPER",
      description:
        "Engaged in developing reliable web solutions through practical project experience.",
      image:
        "/DevTeam/hardik.jpg",
      linkedin: "https://www.linkedin.com/in/hardik-mittal-38879a320",
      github: "https://github.com/hardik-mittal12",
      email: "",
    },
    
   
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#e8f2ff" }}>
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h1
            className="text-4xl font-extrabold mb-4"
            style={{ color: "#1e6cff" }}
          >
           The Dev Team
          </h1>
          <p className="text-base leading-relaxed mb-2" style={{ color: "#1e6cff" }}>
            A dedicated group of developers committed to building reliable, scalable, and user-focused digital solutions through collaboration and innovation.
          </p>
          
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="bg-white p-8 flex flex-col sm:flex-row gap-6 shadow-2xl transition-all duration-500"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.10)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 20px 60px rgba(0, 0, 0, 0.25)";
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 10px 40px rgba(0, 0, 0, 0.15)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Image */}
              <div className="flex-shrink-0 mx-auto sm:mx-0"
                >
                <div className="w-40 h-40 rounded-full overflow-hidden"
                style={{boxShadow: "0 10px 40px rgba(0, 0, 0, 0.15)",}}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center sm:text-left">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">
                  {member.role}
                </p>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "#1e6cff" }}
                >
                  {member.name}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-6">
                  {member.description}
                </p>

                {/* Social Links */}
                <div className="flex gap-4 justify-center sm:justify-start">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name}'s LinkedIn`}
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                    style={{ backgroundColor: "#1e6cff" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#1557d4")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "#1e6cff")
                    }
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>

                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name}'s GitHub`}
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                    style={{ backgroundColor: "#1e6cff" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#1557d4")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "#1e6cff")
                    }
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>

                  <a
                    href={`mailto:${member.email}`}
                    aria-label={`Email ${member.name}`}
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                    style={{ backgroundColor: "#1e6cff" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#1557d4")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "#1e6cff")
                    }
                  >
                    <Mail className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
