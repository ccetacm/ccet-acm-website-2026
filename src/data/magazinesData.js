// Import all magazine cover images
import magzine1 from "/Magazine/covers/magzine1.jpg";
import magzine2 from "/Magazine/covers/magzine2.jpg";
import magzine3 from "/Magazine/covers/magzine3.jpg";
import magzine4 from "/Magazine/covers/magzine4.jpg";
import magzine5 from "/Magazine/covers/magzine5.jpg";
import magzine6 from "/Magazine/covers/magzine6.jpg";
import magzine7 from "/Magazine/covers/magzine7.png";
import magzine8 from "/Magazine/covers/magzine8.png";
import magzine9 from "/Magazine/covers/magzine9.png";
import magzine10 from "/Magazine/covers/magzine10.png";
import magzine11 from "/Magazine/covers/magzine11.png";
import magzine12 from "/Magazine/covers/magzine12.png";
import magzine13 from "/Magazine/covers/magzine13.png";
import magzine14 from "/Magazine/covers/magzine14.png";
import magzine15 from "/Magazine/covers/magzine15.png";
import magzine16 from "/Magazine/covers/magzine16.png";
import magzine17 from "/Magazine/covers/magzine17.png";
import magzine18 from "/Magazine/covers/magzine18.png";
import magzine19 from "/Magazine/covers/magzine19.png";
import magzine20 from "/Magazine/covers/magzine20.png";
import magzine21 from "/Magazine/covers/magazine21.jpg";
import magzine22 from "/Magazine/covers/magazine22.jpg";
import magzine23 from "/Magazine/covers/magazine23.jpg";
import magzine24 from "/Magazine/covers/magazine24.jpg";

const magazines = [
  {
    id: 1,
    title: "Blockchain Basics",
    issue: "Issue 01 • Jan-Feb 2024",
    image: magzine1,
    pdf: "/Magazine/pdfs/Volume 5-Issue_1_jan-feb_pdf.pdf",
    tags: [
      { icon: "fa-link", label: "Blockchain" },
      { icon: "fa-lightbulb", label: "Innovation" },
    ],
  },
  {
    id: 2,
    title: "Crypto Insights",
    issue: "Issue 02 • Mar-Apr 2024",
    image: magzine2,
    pdf: "/Magazine/pdfs/Volume 5-Issue_2_mar-apr_pdf.pdf",

    tags: [
      { icon: "fa-coins", label: "Crypto" },
      { icon: "fa-globe", label: "Web3" },
    ],
  },
  {
    id: 3,
    title: "AI Horizons",
    issue: "Issue 03 • May-Jun 2024",
    image: magzine3,
    pdf: "/Magazine/pdfs/Volume 5-Issue_3_may-jun_pdf.pdf",

    tags: [
      { icon: "fa-robot", label: "AI" },
      { icon: "fa-brain", label: "Machine Learning" },
    ],
  },
  {
    id: 4,
    title: "Data Science Digest",
    issue: "Issue 04 • Jul-Aug 2024",
    image: magzine4,
    pdf: "/Magazine/pdfs/Volume 5-Issue_4_july-aug_pdf.pdf",

    tags: [
      { icon: "fa-database", label: "Data Science" },
      { icon: "fa-lightbulb", label: "Research" },
    ],
  },
  {
    id: 5,
    title: "Future of Web3",
    issue: "Issue 05 • Sept-Oct 2025",
    image: magzine5,
    pdf: "/Magazine/pdfs/Volume 5-Issue_5_sept-oct_pdf.pdf",
    tags: [
      { icon: "fa-globe", label: "Web3" },
      { icon: "fa-microchip", label: "Technology" },
    ],
  },
  {
    id: 6,
    title: "Cybersecurity Trends",
    issue: "Issue 06 • Nov-Dec 2024",
    image: magzine6,
    pdf: "/Magazine/pdfs/Volume 5-Issue_6_nov-dec_pdf.pdf",
    tags: [
      { icon: "fa-shield-alt", label: "Security" },
      { icon: "fa-microchip", label: "Technology" },
    ],
  },
  {
    id: 7,
    title: "Quantum Computing",
    issue: "Issue 07 • Nov-Dec 2023",
    image: magzine7,
    pdf: "/Magazine/pdfs/Volume 4-Issue_3_nov-dec_pdf.pdf",
    tags: [
      { icon: "fa-atom", label: "Quantum" },
      { icon: "fa-microchip", label: "Computing" },
    ],
  },
  {
    id: 8,
    title: "Innovation Spotlight",
    issue: "Issue 08 • Sept-Oct 2023",
    image: magzine8,
    pdf: "/Magazine/pdfs/Volume 4-Issue_2_sept-oct_pdf.pdf",
    tags: [
      { icon: "fa-lightbulb", label: "Ideas" },
      { icon: "fa-microchip", label: "Technology" },
    ],
  },
  {
    id: 9,
    title: "Metaverse Monthly",
    issue: "Issue 09 • Jul-Aug 2023",
    image: magzine9,
    pdf: "/Magazine/pdfs/Volume 4-Issue_1_july-aug_pdf.pdf",
    tags: [
      { icon: "fa-vr-cardboard", label: "Metaverse" },
      { icon: "fa-globe", label: "Web3" },
    ],
  },
  {
    id: 10,
    title: "AR/VR Insights",
    issue: "Issue 10 • May-Jun 2023",
    image: magzine10,
    pdf: "/Magazine/pdfs/Volume 3-Issue_4_may-jun_pdf.pdf",
    tags: [
      { icon: "fa-vr-cardboard", label: "VR" },
      { icon: "fa-eye", label: "AR" },
    ],
  },
  {
    id: 11,
    title: "5G & Beyond",
    issue: "Issue 11 • Mar-Apr 2023",
    image: magzine11,
    pdf: "/Magazine/pdfs/Volume 3-Issue_3_mar-apr_pdf.pdf",
    tags: [
      { icon: "fa-signal", label: "5G" },
      { icon: "fa-microchip", label: "Tech" },
    ],
  },
  {
    id: 12,
    title: "Edge Computing",
    issue: "Issue 12 • Jan-Feb 2023",
    image: magzine12,
    pdf: "/Magazine/pdfs/Volume 3-Issue_2_jan-feb_pdf.pdf",
    tags: [
      { icon: "fa-server", label: "Edge" },
      { icon: "fa-network-wired", label: "IoT" },
    ],
  },
  {
    id: 13,
    title: "Startups & Innovation",
    issue: "Issue 13 • Aug-Sept 2022",
    image: magzine13,
    pdf: "/Magazine/pdfs/Volume 3-Issue_1_aug-sept_pdf.pdf",
    tags: [
      { icon: "fa-lightbulb", label: "Startups" },
      { icon: "fa-rocket", label: "Innovation" },
    ],
  },
  {
    id: 14,
    title: "Cloud Chronicle",
    issue: "Issue 14 • Apr-May 2022",
    image: magzine14,
    pdf: "/Magazine/pdfs/Volume 2-Issue_4_apr-may_pdf.pdf",
    tags: [
      { icon: "fa-cloud", label: "Cloud" },
      { icon: "fa-database", label: "Storage" },
    ],
  },
  {
    id: 15,
    title: "Crypto Trends",
    issue: "Issue 15 • Jan-Feb 2022",
    image: magzine15,
    pdf: "/Magazine/pdfs/Volume 2-Issue_3_jan-feb_pdf.pdf",
    tags: [
      { icon: "fa-coins", label: "Crypto" },
      { icon: "fa-globe", label: "Web3" },
    ],
  },
  {
    id: 16,
    title: "AI Disruptors",
    issue: "Issue 16 • Nov-Dec 2021",
    image: magzine16,
    pdf:"/Magazine/pdfs/Volume 2-Issue_2_nov-dec_pdf.pdf",
    tags: [
      { icon: "fa-brain", label: "Deep Learning" },
      { icon: "fa-robot", label: "AI" },
    ],
  },
  {
    id: 17,
    title: "Space Tech",
    issue: "Issue 17 • Sep-Oct 2021",
    image: magzine17,
    pdf: "/Magazine/pdfs/Volume 2-Issue_1_sept-oct_pdf.pdf",
    tags: [
      { icon: "fa-rocket", label: "Space" },
      { icon: "fa-satellite", label: "Satellite" },
    ],
  },
  {
    id: 18,
    title: "Smart Data",
    issue: "Issue 18 • Jul-Aug 2021",
    image: magzine18,
    pdf: "/Magazine/pdfs/Volume 1-Issue_3_jul-aug_pdf.pdf",
    tags: [
      { icon: "fa-databaser", label: "Big Data" },
      { icon: "fa-lightbulb", label: "Analytics" },
    ],
  },
  {
    id: 19,
    title: "FinTech Future",
    issue: "Issue 19 • May-Jun 2021",
    image: magzine19,
    pdf: "/Magazine/pdfs/Volume 1-Issue_2_may-jun_pdf.pdf",
    tags: [
      { icon: "fa-coins", label: "FinTech" },
      { icon: "fa-credit-card", label: "Finance" },
    ],
  },
  {
    id: 20,
    title: "AI & Society",
    issue: "Issue 20 • Mar-Apr 2021",
    image: magzine20,
    pdf: "/Magazine/pdfs/Volume 1-Issue_1_mar-apr_pdf.pdf",
    tags: [
      { icon: "fa-robot", label: "AI" },
      { icon: "fa-lightbulb", label: "Ethics" },
    ],
  },
  {
    id: 21,
    title: "DSA",
    issue: "Issue 21 • Jan-Feb 2025",
    image: magzine21,
    pdf: "/Magazine/pdfs/Volume 6-Issue_1_jan-feb_pdf.pdf",
    tags: [
      { icon: "fa-microchip", label: "Tech" },
      { icon: "fa-lightbulb", label: "Ethics" },
    ],
  },
  {
    id: 22,
    title: "AI in Software Development",
    issue: "Issue 22 • Mar-Apr 2025",
    image: magzine22,
    pdf: "/Magazine/pdfs/Volume 6-Issue_2_mar-apr_pdf.pdf",
    tags: [
      { icon: "fa-robot", label: "AI" },
      { icon: "fa-lightbulb", label: "Ethics" },
    ],
  },
  {
    id: 23,
    title: "Javascript Bootcamp",
    issue: "Issue 23 • May-Jun 2025",
    image: magzine23,
    pdf: "/Magazine/pdfs/Volume 6-Issue_3_may-jun_pdf.pdf",
    tags: [
      { icon: "fa-globe", label: "Web3" },
      { icon: "fa-lightbulb", label: "Ethics" },
    ],
  },
  {
    id: 24,
    title: "Generative AI",
    issue: "Issue 24 • Jul-Aug 2025",
    image: magzine24,
    pdf: "/Magazine/pdfs/Volume 6-Issue_4_jul-aug_pdf.pdf",
    tags: [
      { icon: "fa-robot", label: "AI" },
      { icon: "fa-lightbulb", label: "Ethics" },
    ],
  },

];

export default magazines;
