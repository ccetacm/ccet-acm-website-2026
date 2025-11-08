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
        route: "Manpreet Singh Gujral",
        title: "Principal CCET Degree Wing",
        imgSrc: "/mentors/mentor1.png",
        additionalImg: "",
        description: "With technology spreading its domain to all walks of life there is a need to upgrade the ever-widening knowledge base. CCET has risen to the occasion, and resolves to provide talented, skilled and highly competent technical human resource to the industrial society. Education is imparted at the institute in a manner so that each student realizes his responsibility of enhancing the present skills and shaping the future. In its endeavour to foster an optimum blend of self-discipline and consistency, the college provides a robust curriculum to cater to the versatile scenario of the industry. It commits to serve the society with zeal and to fulfil its societal obligations with distinction. With consistent efforts to provide the industry with apt talent, I invite the prospective potential seekers to participate in the campus recruitment program.",
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
        route: "SKSingh",
        title: "Faculty Mentor ACM, Head of CSE CCET CHD",
        imgSrc: "/mentors/mentor2.jpg",
        additionalImg: "/mentors/additionalimage.jpg",
        description: "The basic objective of CSE department is to provide students with a learning environment keeping the changing landscape of the field in mind with the objective to enable the outgoing students to take the lead role in steady and rapid advances in computing technologies. At CSE Department, students are subjected to continuous challenges by providing a flexible yet thought-provoking curriculum and learned guidance from extremely talented and experienced faculty members who are experts in their respective areas. The courses in the Computer Sc. & Engineering department are organized meticulously to provide a wide spectrum of choices to the students. I am confident that students of this college will emerge as core technological resources to the society at large. All the Best!!",
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
        title: "Faculty Mentor ACM-W, Assistant Professor CSE CCET CHD",
        route: "Sudhakar",
        additionalImg: "/mentors/sudhakar-additional.png",
        description: "Dr. Sudhakar Kumar is a leading researcher in artificial intelligence, machine learning, and computational intelligence with over 10 years of academic experience. His work spans across scalable architectures, optimization techniques, and the application of AI in cybersecurity.",
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
            { name: "Abhay Pratap Singh", img: "/teams/2025-26/abhay.jpeg" },
            { name: "Bhavya Dhiman", img: "/teams/2025-26/bhavya.jpg" },
        ],
        social: drSudhakarSocial,
        achievements: drSudhakarAchievements,
    },
];
