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

const magazines = [
  {
    id: 1,
    title: "Blockchain Basics",
    issue: "Issue 01 • Jan 2025",
    image: magzine1,
    tags: [
      { icon: "fa-link", label: "Blockchain" },
      { icon: "fa-lightbulb", label: "Innovation" },
    ],
  },
  {
    id: 2,
    title: "Crypto Insights",
    issue: "Issue 02 • Feb 2025",
    image: magzine2,
    tags: [
      { icon: "fa-coins", label: "Crypto" },
      { icon: "fa-globe", label: "Web3" },
    ],
  },
  {
    id: 3,
    title: "AI Horizons",
    issue: "Issue 03 • Mar 2025",
    image: magzine3,
    tags: [
      { icon: "fa-robot", label: "AI" },
      { icon: "fa-brain", label: "Machine Learning" },
    ],
  },
  {
    id: 4,
    title: "Data Science Digest",
    issue: "Issue 04 • Apr 2025",
    image: magzine4,
    tags: [
      { icon: "fa-database", label: "Data Science" },
      { icon: "fa-lightbulb", label: "Research" },
    ],
  },
  {
    id: 5,
    title: "Future of Web3",
    issue: "Issue 05 • May 2025",
    image: magzine5,
    tags: [
      { icon: "fa-globe", label: "Web3" },
      { icon: "fa-microchip", label: "Technology" },
    ],
  },
  {
    id: 6,
    title: "Cybersecurity Trends",
    issue: "Issue 06 • Jun 2025",
    image: magzine6,
    tags: [
      { icon: "fa-shield-alt", label: "Security" },
      { icon: "fa-microchip", label: "Technology" },
    ],
  },
  {
    id: 7,
    title: "Quantum Computing",
    issue: "Issue 07 • Jul 2025",
    image: magzine7,
    tags: [
      { icon: "fa-atom", label: "Quantum" },
      { icon: "fa-microchip", label: "Computing" },
    ],
  },
  {
    id: 8,
    title: "Innovation Spotlight",
    issue: "Issue 08 • Aug 2025",
    image: magzine8,
    tags: [
      { icon: "fa-lightbulb", label: "Ideas" },
      { icon: "fa-microchip", label: "Technology" },
    ],
  },
  {
    id: 9,
    title: "Metaverse Monthly",
    issue: "Issue 09 • Jan 2024",
    image: magzine9,
    tags: [
      { icon: "fa-vr-cardboard", label: "Metaverse" },
      { icon: "fa-globe", label: "Web3" },
    ],
  },
  {
    id: 10,
    title: "AR/VR Insights",
    issue: "Issue 10 • Feb 2024",
    image: magzine10,
    tags: [
      { icon: "fa-vr-cardboard", label: "VR" },
      { icon: "fa-eye", label: "AR" },
    ],
  },
  {
    id: 11,
    title: "5G & Beyond",
    issue: "Issue 11 • Mar 2024",
    image: magzine11,
    tags: [
      { icon: "fa-signal", label: "5G" },
      { icon: "fa-microchip", label: "Tech" },
    ],
  },
  {
    id: 12,
    title: "Edge Computing",
    issue: "Issue 12 • Apr 2024",
    image: magzine12,
    tags: [
      { icon: "fa-server", label: "Edge" },
      { icon: "fa-network-wired", label: "IoT" },
    ],
  },
  {
    id: 13,
    title: "Startups & Innovation",
    issue: "Issue 13 • May 2024",
    image: magzine13,
    tags: [
      { icon: "fa-lightbulb", label: "Startups" },
      { icon: "fa-rocket", label: "Innovation" },
    ],
  },
  {
    id: 14,
    title: "Cloud Chronicle",
    issue: "Issue 14 • June 2024",
    image: magzine14,
    tags: [
      { icon: "fa-cloud", label: "Cloud" },
      { icon: "fa-database", label: "Storage" },
    ],
  },
  {
    id: 15,
    title: "Crypto Trends",
    issue: "Issue 15 • July 2024",
    image: magzine15,
    tags: [
      { icon: "fa-coins", label: "Crypto" },
      { icon: "fa-globe", label: "Web3" },
    ],
  },
  {
    id: 16,
    title: "AI Disruptors",
    issue: "Issue 16 • Aug 2024",
    image: magzine16,
    tags: [
      { icon: "fa-brain", label: "Deep Learning" },
      { icon: "fa-robot", label: "AI" },
    ],
  },
  {
    id: 17,
    title: "Space Tech",
    issue: "Issue 17 • Sep 2024",
    image: magzine17,
    tags: [
      { icon: "fa-rocket", label: "Space" },
      { icon: "fa-satellite", label: "Satellite" },
    ],
  },
  {
    id: 18,
    title: "Smart Data",
    issue: "Issue 18 • Oct 2024",
    image: magzine18,
    tags: [
      { icon: "fa-databaser", label: "Big Data" },
      { icon: "fa-lightbulb", label: "Analytics" },
    ],
  },
  {
    id: 19,
    title: "FinTech Future",
    issue: "Issue 19 • Nov 2024",
    image: magzine19,
    tags: [
      { icon: "fa-coins", label: "FinTech" },
      { icon: "fa-credit-card", label: "Finance" },
    ],
  },
  {
    id: 20,
    title: "AI & Society",
    issue: "Issue 20 • Dec 2024",
    image: magzine20,
    tags: [
      { icon: "fa-robot", label: "AI" },
      { icon: "fa-lightbulb", label: "Ethics" },
    ],
  },
];

export default magazines;