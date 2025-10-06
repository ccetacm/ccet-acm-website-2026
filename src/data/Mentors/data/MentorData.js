import { Publications } from './Publications/index.js';
import { drSunilEducation, drSudhakarEducation } from './Education.js';
import { drSunilAchievements, drSudhakarAchievements } from './Achievements.js';
import { drSunilProjects } from './Projects.js';
import { drSunilPatents } from './Patents.js';
import { drSunilSocial, drSudhakarSocial } from './Social.js';
import { filterPublicationsForSudhakar } from './utils/publicationFilter';

export const mentorsData = [
    {
        name: "Dr. Manpreet Singh Gujral",
        title: "Principal CCET Degree Wing",
        imgSrc: "/mentors/mentor1.png",
        additionalImg: "",
        about: "Expert in Academic Leadership and Institutional Development.",
        skills: ["Administration", "Policy Making", "Faculty Development"],
        education: [],
        publications: {},
        phdTeam: [],
        btechTeam: [],
        social: {
            email: "mailto:principal@ccet.ac.in",
        },
    },
    {
        name: "Dr. Sunil K. Singh",
        title: "Faculty Mentor ACM, Head of CSE CCET CHD",
        imgSrc: "/mentors/mentor2.jpg",
        additionalImg: "/mentors/additionalimage.jpg",
        about: "Passionate about teaching and research in computer science.",
        skills: [
            "High Performance Computing",
            "Linux/Unix",
            "NLP",
            "Internet of Things",
            "Machine Learning",
            "Cyber Security",
            "Computer Architecture & Organization",
            "Computer Networks",
        ],
        education: drSunilEducation,
        publications: Publications,
        phdTeam: [],
        btechTeam: [],
        social: drSunilSocial,
        achievements: drSunilAchievements,
        projects: drSunilProjects,
        patents: drSunilPatents,
    },
    {
        name: "Dr. Sudhakar Kumar",
        title: "Faculty Sponser ACM, Assistant Professor CSE CCET CHD",
        additionalImg: "/mentors/sudhakar-additional.png",
        about:
            "Dr. Sudhakar Kumar is a leading researcher in artificial intelligence, machine learning, and computational intelligence with over 10 years of academic experience. His work spans across scalable architectures, optimization techniques, and the application of AI in cybersecurity.",
        skills: [
            "AI",
            "Machine Learning",
            "Cloud Computing",
            "Java",
            "Data Analytics",
            "Cybersecurity",
        ],
        imgSrc: "/mentors/mentor3.jpg",
        education: drSudhakarEducation,
        publications: filterPublicationsForSudhakar(Publications),
        phdTeam: [
            { name: "Satyam Kumar Sainy", img: "/mentors/team1.jpeg" },
            { name: "Naveen", img: "/mentors/team 2.jpeg" },
        ],
        btechTeam: [
            { name: "Sahil Garg", img: "/mentors/team3.png" },
            { name: "Japjot Singh Nanda", img: "/mentors/team4.png" },
        ],
        social: drSudhakarSocial,
        achievements: drSudhakarAchievements,
    },
];