import React, { useState, useEffect } from "react";
import styles from "./teampage.module.css";

import orcidIcon from "/teams/orcid.png";

import jaiveerImg from "/teams/2025-26/jaiveer.jpg";
import satvikImg from "/teams/2025-26/satvik.jpg";
import sanatanImg from "/teams/2025-26/sanatan.jpg";
import shivamImg from "/teams/2025-26/shivam.jpg";
import dhruvImg from "/teams/2025-26/dhruv.jpg";
import abhayImg from "/teams/2025-26/abhay.jpeg";
import aarushiImg from "/teams/2025-26/aarushi.jpeg"
import kritinImg from "/teams/2025-26/kritin.jpg";
import vanshikaImg from "/teams/2025-26/vanshika.jpg";
import sahil2Img from "/teams/2025-26/sahil.jpg";
import maanitImg from "/teams/2025-26/maanit.jpg";
import adityaImg from "/teams/2025-26/aditya.jpg";
import japjotImg from "/teams/2025-26/japjot.jpg";
import hiteshImg from "/teams/2025-26/hitesh.jpg";
import anshulImg from "/teams/2025-26/anshul.jpg";
import jasvirImg from "/teams/2025-26/jasvir.jpg";
import jasjeetImg from "/teams/2025-26/jasjeet.jpg";
import ritikaImg from "/teams/2025-26/ritika.jpg";
import samritiImg from "/teams/2025-26/samriti.jpg";
import simarImg from "/teams/2025-26/simar.jpg";
import mehakImg from "/teams/2025-26/mehak.jpg";
import khushiImg from "/teams/2025-26/khushi.jpg";
import bhavyaImg from "/teams/2025-26/bhavya.jpg";
import eshmeetImg from "/teams/2025-26/eshmeet.jpg";
import ravinaImg from "/teams/2025-26/ravina.jpg";
import aanshiImg from "/teams/2025-26/aanshi.jpg";
import bhumikaImg from "/teams/2025-26/bhumika.jpg";
import harshitaImg from "/teams/2025-26/harshita.jpg";
import sargunImg from "/teams/2025-26/sargun.jpg";
import shreyaImg from "/teams/2025-26/shreya.jpg";
import anshikaImg from "/teams/2025-26/anshika.jpg";
import cgroup25 from "/teams/2025-26/cgroup2025.jpeg";

import sahilImg from "/teams/2024-25/Sahil - 1.JPG";
import sakshamImg from "/teams/2024-25/Saksham - 1.JPG";
import samarImg from "/teams/2024-25/Samar - 1.JPG";
import shauryaImg from "/teams/2024-25/Shaurya - 1.png";
import divyanshImg from "/teams/2024-25/Divyansh - 1.JPG";
import harshitImg from "/teams/2024-25/Harshit - 1.JPG";
import ujjwalImg from "/teams/2024-25/Ujjwalthakur-1.jpeg";
import rajneeshImg from "/teams/2024-25/Rajneesh - 1.JPG";
import yuvrajImg from "/teams/2024-25/Yuvraj - 1.JPG";
import nipunImg from "/teams/2024-25/Nipun - 1.JPG";
import dikshantImg from "/teams/2024-25/Dikshant - 1.JPG";
import group24 from "/teams/2024-25/group24.png";

// acmw-2024
import ayushiImg from "/teams/2024-25/Ayushi - 1.JPG";
import simranImg from "/teams/2024-25/Simran - 1.JPG";
import janviImg from "/teams/2024-25/Janvi - 1.JPG";
import rimaImg from "/teams/2024-25/Rima - 1.JPG";
import rajImg from "/teams/2024-25/Raj - 1.JPG";
import deepikaImg from "/teams/2024-25/Deepika - 1.JPG";
import anoopImg from "/teams/2024-25/Anoop - 1.JPG";
import deependraImg from "/teams/2024-25/Deependra - 1.JPG";
import vanshikacImg from "/teams/2024-25/Vanshika - 1.JPG";
import wgroup24 from "/teams/2024-25/wgroup24.jpeg";

// Imports for ACM 2023-2024 member images
import saketImg from "/teams/2023-24/Saket - 1.png";
import kanishkImg from "/teams/2023-24/Kanishk - 1.png";
import shivam1Img from "/teams/2023-24/Shivam - 1.png";
import saksham1Img from "/teams/2023-24/Saksham - 1.png";
import kartikImg from "/teams/2023-24/Kartik - 1.png";
import tusharImg from "/teams/2023-24/Tushar - 1.png";
import manyaImg from "/teams/2023-24/Manya.jpg";
import japanImg from "/teams/2023-24/Japan - 1.png";
import utkarshImg from "/teams/2023-24/Utkarsh - 1.png";
import palavashaImg from "/teams/2023-24/Palvasha - 1.png";
import britiImg from "/teams/2023-24/Briti - 1.png";
import group23 from "/teams/2023-24/group23.jpg";

// --- Imports for ACMW 2023-24 member images ---
import aishitaImg from "/teams/2023-24/Aishita-1.jpg";
import mehakpImg from "/teams/2023-24/Mehak-1.jpg";
import vanshikabImg from "/teams/2023-24/Vanshika B-1.jpg";
import harkiranImg from "/teams/2023-24/Harkiran-1.jpg";
import ruchikaImg from "/teams/2023-24/Ruchika - 1.png";
import priyanshuImg from "/teams/2023-24/Priyanshu - 1.png";
import avneetImg from "/teams/2023-24/Avneet-1.jpg";
import simran1Img from "/teams/2023-24/Simran-1.jpg";
import ritika1Img from "/teams/2023-24/Ritika-1.jpg";
import wgroup23 from "/teams/2023-24/wgroup23.jpg";

import akashImg from "/teams/2022-23/Akash-1.svg";
import tarunImg from "/teams/2022-23/Tarun- 1.svg";
import udayImg from "/teams/2022-23/uday_1.jpg";
import mehakp2Img from "/teams/2022-23/Mehak-1.jpeg";
import aishita1Img from "/teams/2022-23/Aishita-1.svg";
import devashishImg from "/teams/2022-23/Devashish- 1.svg";
import harshit1Img from "/teams/2022-23/Harshit-1.svg";
import nirbhikImg from "/teams/2022-23/Nirbhik-1.svg";
import manrajImg from "/teams/2022-23/Manraj-1.svg";
import sidharthImg from "/teams/2022-23/Siddharth Sharma-1.svg";
import arjunImg from "/teams/2022-23/Arjun-1.svg";
import shivamKImg from "/teams/2022-23/Shivam-1.svg";
import pushkarImg from "/teams/2022-23/Pushkar-1.svg";
import cgroup22 from "/teams/2022-23/cgroup22.jpeg";
// Imports for ACMW 2022-2023 member images (adjust extensions and paths as per actual files)
import anureetImg from "/teams/2022-23/Anureet-1.svg";
import soumyaImg from "/teams/2022-23/Soumya-1.svg";
import yadviImg from "/teams/2022-23/Yadvi-1.svg";
import smritiImg from "/teams/2022-23/Smriti-1.svg";
import rinkaImg from "/teams/2022-23/Rinka-1.svg";
import siddharthkImg from "/teams/2022-23/Siddharth-1.svg";
import krishImg from "/teams/2022-23/Krish-1.svg";
import kanishk1Img from "/teams/2022-23/Kanishk- 1.svg";
import deepakImg from "/teams/2022-23/Deepak-1.jpeg";
import aishita2Img from "/teams/2022-23/Aishita-1.svg";
import vanshikab2Img from "/teams/2022-23/Vanshika-1.svg";
import vyoamImg from "/teams/2022-23/Vyoam-1.svg";
import samarthImg from "/teams/2022-23/Samarth-1.svg";
import wgroup22 from "/teams/2022-23/wgroup22.jpeg";


import chair1Img from "/teams/2021-22/chair.svg";

import membershiphair4Img from "/teams/2021-22/4membershipchair.svg";
import designhead7Img from "/teams/2021-22/7designhead.svg";


import akash2Img from "/teams/2021-22/akash.svg";
import anamikaImg from "/teams/2021-22/anamika.jpg";
import anureet2Img from "/teams/2021-22/anureet.jpg";

import DEVASHISHImg from "/teams/2021-22/DEVASHISH.jpg";

import dhritiImg from "/teams/2021-22/dhriti.jpg";
import Dipesh_SinglaImg from "/teams/2021-22/Dipesh_Singla_1.jpg";

import GopalImg from "/teams/2021-22/Gopal.jpg";

import ishitaImg from "/teams/2021-22/ishita.jpg";
import ishleenImg from "/teams/2021-22/ishleen.jpg";
import karanImg from "/teams/2021-22/karan.svg";
import kritiImg from "/teams/2021-22/kriti.jpg";
import manishaImg from "/teams/2021-22/manisha.jpg";
import navjotImg from "/teams/2021-22/navjot.jpg";
import parnitImg from "/teams/2021-22/parnit.svg";
import RISHIKAImg from "/teams/2021-22/RISHIKA.jpg";
import shreya2Img from "/teams/2021-22/shreya.jpg";
import tarunaImg from "/teams/2021-22/taruna.svg";


import aayushi_01Img from "/teams/2020-21/aayushi-01.svg";
import anshul_01Img from "/teams/2020-21/anshul-01.png.svg";
import inderpreet_01Img from "/teams/2020-21/inderpreet-01.svg";
import kriti_01Img from "/teams/2020-21/kriti-01.svg";
import manninder_01Img from "/teams/2020-21/maninder-01.svg";
import mukesh_01Img from "/teams/2020-21/mukesh-01.svg";
import muskaan_01Img from "/teams/2020-21/muskaan-01.svg";
import shriya_01Img from "/teams/2020-21/shriya-01.svg";
import sonam_01Img from "/teams/2020-21/sonam-01.svg";
import tarveen_01Img from "/teams/2020-21/tanveer-01.svg";
import uday_01Img from "/teams/2020-21/uday-01.svg";
import ayushImg from "/teams/2019-20/ayush.svg";
import keshavImg from "/teams/2019-20/keshav.svg";
import nandiniImg from "/teams/2019-20/nandini.svg";
import nehaImg from "/teams/2019-20/neha.svg";
import paritoshImg from "/teams/2019-20/paritosh.svg";
import ritika2Img from "/teams/2019-20/ritika.svg";
import tanishqImg from "/teams/2019-20/tanishq.svg";




const teamTypes = ["ACM", "ACMW"];

// 2. Define allYears at top
const allYears = [
  "2025 - 2026",
  "2024 - 2025",
  "2023 - 2024",
  "2022 - 2023",
  "2021 - 2022",
  "2020 - 2021",
  "2019 - 2020",
];

// All possible years

// Your nested teamData (add all your real years and members as needed)
const teamData = {
  ACM: {
    "2025 - 2026": {
      members: [
        {
          name: "Jaiveer Singh",
          designation: "Chairperson",
          photo: jaiveerImg,
          github: "https://github.com/JaiveerSingh7",
          linkedin: "https://www.linkedin.com/in/jaiveer-singh-481984272"
        },
        {
          name: "Satvik Pathak",
          designation: "Vice-Chairperson",
          photo: satvikImg,
          github: "https://github.com/satvikpathak",
          linkedin: "https://www.linkedin.com/in/satvik-pathak-601833331"
        },
        {
          name: "Sanatan",
          designation: "Secretary",
          photo: sanatanImg,
          github: "https://github.com/sanatan-dive",
          linkedin: "https://www.linkedin.com/in/sanatan-sharma-637605266/"
        },
        {
          name: "Shivam Vats",
          designation: "Membership Chair",
          photo: shivamImg,
          github: "https://github.com/ShivamVats1",
          linkedin: "https://www.linkedin.com/in/shivam-vats-18b708332"
        },
        {
          name: "Dhruv Bali",
          designation: "Treasurer",
          photo: dhruvImg,
          github: "https://github.com/dhruvbali14",
          linkedin: "https://www.linkedin.com/in/dhruv-bali-52717b21b"
        },
        {
          name: "Abhay",
          designation: "Webmaster",
          photo: abhayImg,
          github: "https://github.com/Abhay-1704",
          linkedin: ""
        },
        {
          name: "Aarushi",
          designation: "Design Head",
          photo: aarushiImg,
          github: "https://github.com/Aarushi-Khera",
          linkedin: "https://www.linkedin.com/in/aarushi-khera-967640291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        },
        {
          name: "Kritin",
          designation: "Executive Member head",
          photo: kritinImg,
          github: "https://github.com/Kritan05",
          linkedin: "https://www.linkedin.com/in/kritin-koundal-4aa2791b7/"
        },
        {
          name: "Vanshika Singla",
          designation: "Editorial Head",
          photo: vanshikaImg,
          github: "https://github.com/VanshikaSingla826",
          linkedin: "https://www.linkedin.com/in/vanshika-singla-27452a289"
        },
        {
          name: "Sahil Kumar",
          designation: "Social Media Manager",
          photo: sahil2Img,
          github: "https://github.com/SahilKumar-064738",
          linkedin: "https://www.linkedin.com/in/sahil-kumar-0b7aa3330"
        },
        {
          name: "Maanit",
          designation: "PR head",
          photo: maanitImg,
          github: "https://github.com/Maanitk22",
          linkedin: "http://www.linkedin.com/in/maanit-khatkar"
        },
        {
          name: "Aditya",
          designation: "Event Manager",
          photo: adityaImg,
          github: "https://github.com/adityaKrishan651",
          linkedin: "https://www.linkedin.com/in/aditya-krishan-980093212"
        },
        {
          name: "Japjot",
          designation: "Domain Director (Web & DevOps)",
          photo: japjotImg,
          github: "",
          linkedin: ""
        },
        {
          name: "Hitesh",
          designation: "Domain Director (Competitive Programming)",
          photo: hiteshImg,
          github: "",
          linkedin: ""
        },
        {
          name: "Anshul",
          designation: "Domain Director (Android)",
          photo: anshulImg,
          github: "",
          linkedin: ""
        },
        {
          name: "Jasvir",
          designation: "Marketing Head",
          photo: jasvirImg,
          github: "",
          linkedin: ""
        },
        {
          name: "Jasjeet",
          designation: "Domain Director (AI & ML)",
          photo: jasjeetImg,
          github: "",
          linkedin: ""
        },
      ]
    },
    "2024 - 2025": {
      groupPhoto: "", // Add if available, else keep empty or import similarly
      members: [
        {
          name: "Sahil Garg",
          designation: "Chairperson",
          photo: sahilImg,
          github: "https://github.com/Sahil2004",
          linkedin: "https://www.linkedin.com/in/sahil2004",
          orcid: "https://orcid.org/0009-0009-2970-5550",
        },
        {
          name: "Saksham Arora",
          designation: "Vice Chairperson",
          photo: sakshamImg,
          github: "https://github.com/sakshamaroraccet",
          linkedin: "https://www.linkedin.com/in/saksham-arora-81b344291",
          orcid: "https://orcid.org/0009-0009-2784-7395",
        },
        {
          name: "Samar Pratap Singh",
          designation: "Secretary",
          photo: samarImg,
          github: "https://github.com/samar-pratap-singh230",
          linkedin: "https://www.linkedin.com/in/samar-pratap-singh-9466ba255",
          orcid: "https://orcid.org/0009-0005-1606-0731",
        },
        {
          name: "Shaurya Katna",
          designation: "Membership Chairperson",
          photo: shauryaImg,
          github: "https://ccet.acm.org/team#",
          linkedin: "https://www.linkedin.com/in/shaurya-katna-7a1aa1253/",
          orcid: "https://ccet.acm.org/team#",
        },
        {
          name: "Divyansh Manro",
          designation: "Treasurer",
          photo: divyanshImg,
          github: "https://github.com/divyansh-manro",
          linkedin: "https://www.linkedin.com/in/divyansh-manro",
          orcid: "https://orcid.org/0009-0001-2506-3599",
        },
        {
          name: "Harshit Vashisht",
          designation: "Web Master",
          photo: harshitImg,
          github: "https://github.com/HarshitVashisht11",
          linkedin: "https://www.linkedin.com/in/harshit-vashisht-145872257",
          orcid: "https://orcid.org/0009-0009-9870-9969",
        },
        {
          name: "Ujjwal Thakur",
          designation: "Technical Head",
          photo: ujjwalImg,
          github: "https://github.com/UJJWALTHAKUR28",
          linkedin: "https://www.linkedin.com/in/ujwal-thakur-97b5a7349",
          orcid: "https://ccet.acm.org/team#",
        },
        {
          name: "Rajneesh",
          designation: "Design Head",
          photo: rajneeshImg,
          github: "https://github.com/BestCoder13",
          linkedin: "https://www.linkedin.com/in/rajneesh-kumar-5202122ab/",
          orcid: "https://orcid.org/0009-0002-1981-2343",
        },
        {
          name: "Yuvraj",
          designation: "Executive Member Head",
          photo: yuvrajImg,
          github: "https://github.com/redhuyuvraj",
          linkedin: "https://www.linkedin.com/in/yuvraj-redhu-1558a8260/",
          orcid: "https://orcid.org/0009-0003-1825-4973",
        },
        {
          name: "Nipun Singh",
          designation: "Editorial Head",
          photo: nipunImg,
          github: "https://github.com/Nipun-Singh",
          linkedin: "https://ccet.acm.org/linkedin.com/in/nipun-singh-396596246",
          orcid: "https://orcid.org/0009-0002-7227-1873",
        },
        {
          name: "Dikshant Rajput",
          designation: "Social Media Manager",
          photo: dikshantImg,
          github: "https://github.com/rajputdikshant",
          linkedin: "https://www.linkedin.com/in/dikshantrajput/",
          orcid: "https://orcid.org/0009-0005-3513-824X",
        },
        {
          name: "Jaiveer Singh",
          designation: "External PR Head",
          photo: jaiveerImg,
          github: "https://github.com/JaiveerSingh7",
          linkedin: "https://www.linkedin.com/in/jaiveer-singh-481984272",
          orcid: "https://orcid.org/0009-0008-3579-5946",
        },
        {
          name: "Jasjeet Singh",
          designation: "Event Manager",
          photo: jasjeetImg,
          github: "https://github.com/Jasjeet-Singh-S",
          linkedin: "https://www.linkedin.com/in/jasjeet-singh-8832ba27b",
          orcid: "https://orcid.org/0009-0005-1052-3125",
        },
      ],
    },
    "2023 - 2024": {
      members: [
        {
          name: "Saket Sarin",
          designation: "Chairperson",
          photo: saketImg,
          github: "https://www.github.com/saketsarin",
          linkedin: "https://www.linkedin.com/in/saketsarin",
          orcid: "https://orcid.org/0000-0002-4592-3445"
        },
        {
          name: "Kanishk Nagpal",
          designation: "Vice Chairperson",
          photo: kanishkImg,
          github: "https://github.com/kaythecosmic",
          linkedin: "https://www.linkedin.com/in/kanishk-nagpal-531153228/",
          orcid: "https://orcid.org/0000-0002-5938-2344"
        },
        {
          name: "Shivam Goyal",
          designation: "Secretary",
          photo: shivam1Img,
          github: "https://github.com/Keshav365",
          linkedin: "https://linkedin.com/in/shivam-goyal-6816b824b",
          orcid: "https://orcid.org/0009-0009-9374-7907"
        },
        {
          name: "Saksham Arora",
          designation: "Membership Chairperson",
          photo: saksham1Img,
          github: "https://github.com/sakshamaroraccet",
          linkedin: "https://www.linkedin.com/in/saksham-arora-81b344291/",
          orcid: "https://orcid.org/0009-0009-2784-7395"
        },
        {
          name: "Kartik",
          designation: "Treasurer",
          photo: kartikImg,
          github: "https://github.com/Kartikds09",
          linkedin: "https://linkedin.com/in/kartik-dalal-445ba1204",
          orcid: "https://orcid.org/0000-0002-5414-5593"
        },
        {
          name: "Tushar Singh",
          designation: "Web Master",
          photo: tusharImg,
          github: "https://github.com/tushar21103",
          linkedin: "https://www.linkedin.com/in/tushar-singh-b0b964238/",
          orcid: "https://orcid.org/0009-0002-5053-1443"
        },
        {
          name: "Manya",
          designation: "Editorial Head",
          photo: manyaImg,
          github: "https://github.com/ManyaGirdhar",
          linkedin: "https://www.linkedin.com/in/manya-78a686245",
          orcid: "https://orcid.org/0009-0006-2692-8634"
        },
        {
          name: "Japan Ajit Singh Gandhi",
          designation: "Design Head",
          photo: japanImg,
          github: "https://github.com/Japan-Gandhi",
          linkedin: "https://www.linkedin.com/in/japan-ajit-singh-gandhi-baa2bb261/",
          orcid: "https://orcid.org/0000-0001-6434-0774"
        },
        {
          name: "Utkarsh Chauhan",
          designation: "Executive Member Head",
          photo: utkarshImg,
          github: "https://github.com/uffkxrsh",
          linkedin: "https://www.linkedin.com/in/utkarsh-chauhan-710644249",
          orcid: "https://orcid.org/0009-0009-7607-7745"
        },
        {
          name: "Palvasha Bansal",
          designation: "External PR Head",
          photo: palavashaImg,
          github: "https://github.com/Palvasha123",
          linkedin: "https://www.linkedin.com/in/palvasha-bansal-0b2aa125b/",
          orcid: "https://orcid.org/0009-0005-2333-6708"
        },
        {
          name: "Briti Singla",
          designation: "Social Media Manager",
          photo: britiImg,
          github: "https://github.com/britisingla",
          linkedin: "https://www.linkedin.com/in/briti-s-b69a01233",
          orcid: "https://orcid.org/0009-0003-1059-4121"
        },
        {
          name: "Vanshika Chilkoti",
          designation: "Event Manager",
          photo: vanshikacImg,
          github: "https://github.com/vanshikachilkoti",
          linkedin: "https://www.linkedin.com/in/vanshika-chilkoti-57044226b/",
          orcid: "https://orcid.org/0009-0006-7594-8527"
        }
      ]
    },
    "2022 - 2023": {
      members: [
        {
          name: "Akash Sharma",
          designation: "Chairperson",
          photo: akashImg,
          github: "https://github.com/Akash82228",
          linkedin: "https://www.linkedin.com/in/akash-sharma-0619461b8",
          orcid: "https://orcid.org/0000-0002-5879-7353",
        },
        {
          name: "Tarun",
          designation: "Vice Chairperson",
          photo: tarunImg,
          github: "https://github.com/tarun1807",
          linkedin: "https://www.linkedin.com/in/tarun-36ba11214",
          orcid: "https://orcid.org/0000-0002-1030-8784",
        },
        {
          name: "Uday Madan",
          designation: "Secretary",
          photo: udayImg,
          github: "https://github.com/UMwarrior",
          linkedin: "https://www.linkedin.com/in/uday-madan-14753820b/",
          orcid: "https://orcid.org/0000-0003-4354-166X",
        },
        {
          name: "Mehak Preet",
          designation: "Membership Chairperson",
          photo: mehakp2Img,
          github: "https://github.com/Mehak-Preet18",
          linkedin: "https://www.linkedin.com/in/mehak18p",
          orcid: "https://orcid.org/0000-0001-8166-8210",
        },
        {
          name: "Aishita Sharma",
          designation: "Treasurer",
          photo: aishita1Img,
          github: "https://github.com/aishita2022",
          linkedin: "https://www.linkedin.com/in/aishita-sharma-30b277232",
          orcid: "https://orcid.org/0000-0002-8649-3437",
        },
        {
          name: "Devashish Gupta",
          designation: "Webmaster",
          photo: devashishImg,
          github: "https://github.com/devashish-gupta09/",
          linkedin: "https://www.linkedin.com/in/devashish-gupta-066a16200/",
          orcid: "https://orcid.org/0000-0001-5288-6577",
        },
        {
          name: "Harshit Dubey",
          designation: "Editorial Head",
          photo: harshit1Img,
          github: "https://github.com/hd2342-dubey",
          linkedin: "https://www.linkedin.com/in/harshit-dubey-bb07311b9/",
          orcid: "https://orcid.org/0000-0001-5475-9838",
        },
        {
          name: "Nirbhik Kakkar",
          designation: "Design Head",
          photo: nirbhikImg,
          github: "https://github.com/Nirbhik16",
          linkedin: "https://www.linkedin.com/in/nirbhik-kakkar-526059234",
          orcid: "https://orcid.org/0000-0001-8187-6108",
        },
        {
          name: "Manraj Singh",
          designation: "Executive Member Head",
          photo: manrajImg,
          github: "https://github.com/Manraj-Mann",
          linkedin: "https://www.linkedin.com/in/manraj-singh-5a4418209",
          orcid: "https://orcid.org/0000-0002-3077-490X",
        },
        {
          name: "Sidharth Sharma",
          designation: "External PR Head",
          photo: sidharthImg,
          github: "https://github.com/SiDiZEN",
          linkedin: "https://www.linkedin.com/in/sidharth-sharma-90670820a/",
          orcid: "",
        },
        {
          name: "Arjun Gupta",
          designation: "Social Media Manager",
          photo: arjunImg,
          github: "",
          linkedin: "https://www.linkedin.com/in/arjungupta165/",
          orcid: "",
        },
        {
          name: "Shivam Kumar",
          designation: "Event Manager",
          photo: shivamKImg,
          github: "https://github.com/shivam2003-dev",
          linkedin: "https://www.linkedin.com/in/shivam-kumar2003/",
          orcid: "",
        },
        {
          name: "Pushkar Kaushik",
          designation: "Creative Head",
          photo: pushkarImg,
          github: "",
          linkedin: "",
          orcid: "",
        },
      ],
    },
    "2021 - 2022": { members: [
        {
          name: "Muskaan Chopra",
          designation: "Chairperson",
          photo: chair1Img,
          github: "https://github.com/muskaan712",
          linkedin: "https://www.linkedin.com/in/muskaanchopra712/",
          orcid: "https://orcid.org/0000-0002-7672-9186"
        },
        {
          name: "Kriti Aggarwal",
          designation: "Vice Chairperson",
          photo: kritiImg,
          github: "https://github.com/kri14",
          linkedin: "https://www.linkedin.com/in/kriti-aggarwal-b372721a2/",
          orcid: "https://orcid.org/0000-0002-7415-0103",

        },
        {name: "Anureet Chhabra",
          designation: "Secretary",
          photo: anureet2Img,
          github:"https://github.com/anureetchhabra",
          linkedin: "https://www.linkedin.com/in/anureet-chhabra-bb86271bb/",
          orcid: "https://orcid.org/0000-0001-8123-4359"
        },
        {
          name: "Tarun",
          designation: "Membership Chairperson",
          photo: membershiphair4Img,
          github: "https://github.com/tarun1807",
          linkedin: "https://www.linkedin.com/in/tarun-36ba11214",
          orcid: "https://orcid.org/0000-0002-1030-8784"
        },
        {
          name: "Navjot Jangra",
          designation: "Treasurer",
          photo: navjotImg,
          github: "https://github.com/imnjangra",
          linkedin: "https://www.linkedin.com/in/njangra",
          orcid: "https://orcid.org/0000-0002-5012-2482/"
        },
        {
          name: "Parnit Kaur",
          designation: "Webmaster",
          photo: parnitImg,
          github: "https://github.com/Parnit-Kaur",
          linkedin: "https://www.linkedin.com/in/parnit-kaur-3972811aa/",
          orcid: "https://orcid.org/0000-0001-6034-5316"
        },
        {
          name: "Dipesh Singla",
          designation: "Editorial Head",
          photo: Dipesh_SinglaImg,
          github: "https://github.com/dipesh88",
          linkedin: "https://www.linkedin.com/in/dipesh-singla-5b92601a9",
          orcid: "https://orcid.org/0000-0002-3762-1228"
        },
        {
          name: "Ashutosh Thakur",
          designation: "Design Head",
          photo: designhead7Img,
          github: "https://github.com/Ashuthetosh",
          linkedin: "https://www.linkedin.com/in/ashuthetosh",
          orcid: "https://orcid.org/0000-0002-0998-3467"
        },
        {
          name: "Akash Sharma",
          designation: "App Master",
          photo: akash2Img,
          github: "https://github.com/Akash82228",
          linkedin: "https://www.linkedin.com/in/akash-sharma-0619461b8",
          orcid: "https://orcid.org/0000-0002-5879-7353"
        },
        {
          name: "Taruna Saini",
          designation: "Executive Member Head",
          photo: tarunaImg,
          github: "https://github.com/Taruna06",
          linkedin: "https://www.linkedin.com/in/taruna-saini-3a6497202/",
          orcid: "https://orcid.org/0000-0002-1327-9835"
        },
        {
          name: "Devashish Gupta",
          designation: "External PR Head",
          photo: DEVASHISHImg,
          github: "https://github.com/devashish-gupta09",
          linkedin: "https://www.linkedin.com/in/devashish-gupta-066a16200/",
          orcid: "https://orcid.org/0000-0001-5288-6577"
        },
        {
          name: "Karan Singh",
          designation: "Social Media Manager",
          photo: karanImg,
          github: "https://github.com/KARAN-23",
          linkedin: "https://www.linkedin.com/in/karan-singh-b7466317a/",
          orcid: "https://orcid.org/0000-0003-0271-1845"
        },

        {
          name: "Manraj Singh",
          designation: "Executive Member Head",
          photo: manrajImg,
          github: "https://github.com/Manraj-Mann",
          linkedin: "https://www.linkedin.com/in/manraj-singh-5a4418209",
          orcid: "https://orcid.org/0000-0002-3077-490X",
        },

        {
          name: "Shivam Kumar",
          designation: "Event Manager",
          photo: shivamKImg,
          github: "https://github.com/shivam2003-dev",
          linkedin: "https://www.linkedin.com/in/shivam-kumar2003/",
          orcid: "",
        },
      ], },
    "2020 - 2021": { members: [
        {
          name: "Anshul Vashisth",
          designation: "President",
          photo: anshul_01Img,
          github: "https://github.com/anshul-vashisth",
          linkedin: "https://www.linkedin.com/in/anshulvashisth",
          orcid: "https://orcid.org/0000-0001-9189-7205"
        },

        {
          name: "Inderpreet Singh",
          designation: "Vice Chairperson",
          photo: inderpreet_01Img,
          github: "https://github.com/CO18325",
          linkedin: "https://www.linkedin.com/in/inderpreet-singh-a32816169/"
        },
        {
          name: "Uday Kumar",
          designation: "Secretary",
          photo: uday_01Img,
          github: "https://github.com/udaykumarjangra",
          linkedin: "https://www.linkedin.com/in/udaykumarjangra/"
        },
        {
          name: "Muskaan Chopra",
          designation: "Membership Chairperson",
          photo: muskaan_01Img,
          github: "https://github.com/muskaan712",
          linkedin: "https://www.linkedin.com/in/muskaanchopra712"
        },
        {
          name: "Kriti Aggarwal",
          designation: "Treasurer",
          photo: kriti_01Img,
          github: "https://github.com/kri14",
          linkedin: "https://www.linkedin.com/in/kriti-aggarwal-b372721a2/"
        },
        {
          name: "Aayushi Bansal",
          designation: "Webmaster",
          photo: aayushi_01Img,
          github: "https://github.com/aayushi1499",
          linkedin: "https://www.linkedin.com/in/aayushi14/"
        },
        {
          name: "Maninder Singh",
          designation: "Design Head",
          photo: manninder_01Img,
          github: "https://github.com/co18332",
          linkedin: "https://www.linkedin.com/in/maninder-singh-8a62a21b6/"
        },
        {
          name: "Mukesh Sahani",
          designation: "Executive Member Head",
          photo: mukesh_01Img,
          github: "https://github.com/MkshSahani",
          linkedin: "https://www.linkedin.com/in/mukesh-sahani-27297318b"
        },
        {
          name: "Tanveer Singh",
          designation: "External Public Relationship Manager",
          photo: tarveen_01Img,
          github: "https://github.com/CO18353",
          linkedin: "https://www.linkedin.com/in/tanveer-singh-kochhar-81393518b/"
        },
        {
          name: "Shriya Verma",
          designation: "Editorial Head",
          photo: shriya_01Img,
          github: "https://github.com/CO18347",
          linkedin: "https://www.linkedin.com/in/shriya-verma/"
        },
        {
          name: "Sonam Garg",
          designation: "Event Manager",
          photo: sonam_01Img,
          github: "https://github.com/CO18350",
          linkedin: "https://www.linkedin.com/in/sonam-garg-4b4a0619a/"
        },

      ], },
    "2019 - 2020": { members: [
        {
          name: "Ritika Dhiman",
          designation: "Chairperson",
          photo: ritika2Img,
          github: "https://github.com/ritika99",
          linkedin: "http://linkedin.com/in/ritika-dhiman-3a6405160",
          orcid: "https://orcid.org/0000-0002-4631-1237"
        },
        {
          name: "Paritosh Singh",
          designation: "Vice Chairperson",
          photo: paritoshImg,
          github: "https://github.com/c017344",
          linkedin: "https://www.linkedin.com/in/paritoshsinghrahar/"
        },
        {
          name: "Ayush Basral",
          designation: "Secretary",
          photo: ayushImg,
          github: "https://github.com/ABasral",
          linkedin: "https://www.linkedin.com/in/ayush-basral-6a1b15147"
        },
        {
          name: "Nandini Sidana",
          designation: "Treasurer",
          photo: nandiniImg,
          github: "https://github.com/CO17339",
          linkedin: "https://www.linkedin.com/in/nandini-sidana-76b769185/"
        },
        {
          name: "Tanishq Chamola",
          designation: "Webmaster",
          photo: tanishqImg,
          github: "https://github.com/tanishqchamola",
          linkedin: "https://www.linkedin.com/in/tanishq-chamola-503702165/"
        },
        {
          name: "Neha",
          designation: "External Public Relation Manager",
          photo: nehaImg,
          github: "https://github.com/CO17341-Neha",
          linkedin: "https://www.linkedin.com/in/neha-garg-0901"
        },
        {
          name: "Keshav Tangri",
          designation: "Design Head",
          photo: keshavImg,
          github: "https://github.com/keshav1245",
          linkedin: "https://www.linkedin.com/in/keshav-t-7ab782104/"
        },
        {
          name: "Aarushi Sood",
          designation: "Executive Head",
          photo: aarushiImg,
          github: "https://github.com/co17301",
          linkedin: "https://www.linkedin.com/in/aarushi-sood-b2b11b154/"
        },

      ], },
  },
  ACMW: {
    "2025 - 2026": {
      members: [
        {
          name: "Ritika Kalia",
          designation: "Chairperson",
          photo: ritikaImg,
          github: "https://github.com/Ritikakalia1",
          linkedin: "https://www.linkedin.com/in/ritika-kalia-809984330/"
        },
        {
          name: "Samriti Sharma",
          designation: "Vice chairperson",
          photo: samritiImg,
          github: "https://github.com/SamritiSharma123",
          linkedin: "https://www.linkedin.com/in/samriti-sharma-b3a976294"
        },
        {
          name: "Simar Atwal",
          designation: "Secretary",
          photo: simarImg,
          github: "https://github.com/simaratwal05",
          linkedin: "https://www.linkedin.com/in/simaratwal"
        },
        {
          name: "Mehak Negi",
          designation: "Membership Chair",
          photo: mehakImg,
          github: "https://github.com/mehaknegi",
          linkedin: "https://www.linkedin.com/in/mehak-negi-051535304/"
        },
        {
          name: "Khushi",
          designation: "Treasurer",
          photo: khushiImg,
          github: "https://github.com/khushi519g5",
          linkedin: "https://www.linkedin.com/in/khushi-mittal-136785358"
        },
        {
          name: "Bhavya",
          designation: "Webmaster",
          photo: bhavyaImg,
          github: "https://github.com/bhavyadmn05",
          linkedin: "http://linkedin.com/in/bhavya-6a9429331"
        },
        {
          name: "Eshmeet Singh Bhachu",
          designation: "Design Head",
          photo: eshmeetImg,
          github: "https://github.com/eshmeetbhachu",
          linkedin: "https://www.linkedin.com/in/eshmeet-singh-bhachu-88785b377/"
        },
        {
          name: "Ravina Mittal",
          designation: "Executive member head",
          photo: ravinaImg,
          github: "https://github.com/RAVINAMITTAL",
          linkedin: "https://www.linkedin.com/in/ravina-mittal-399979319"
        },
        {
          name: "Aanshi Bansal",
          designation: "Editorial Head",
          photo: aanshiImg,
          github: "https://github.com/aanshib",
          linkedin: "http://linkedin.com/in/aanshi-bansal-982a57336"
        },
        {
          name: "Bhumika Bijlwan",
          designation: "Social Media Manager",
          photo: bhumikaImg,
          github: "https://github.com/bhumikabijlwan",
          linkedin: "https://www.linkedin.com/in/bhumika-bijlwan-086a87264/"
        },
        {
          name: "Harshita",
          designation: "PR head",
          photo: harshitaImg,
          github: "https://github.com/HarshiitaSharma",
          linkedin: "https://www.linkedin.com/in/harshita-sharma-b159a5282/"
        },
        {
          name: "Sargun",
          designation: "Event Manager",
          photo: sargunImg,
          github: "https://github.com/sargun12",
          linkedin: "https://www.linkedin.com/in/sargun-157950357/"
        },
        {
          name: "Shreya",
          designation: "Domain Director (Web & DevOps)",
          photo: shreyaImg,
          github: "https://github.com/Shreyaverma0407",
          linkedin: "https://www.linkedin.com/in/shreya-verma-918148360/"
        },
        {
          name: "Hitesh",
          designation: "Domain Director (Competitive Programming)",
          photo: hiteshImg,
          github: "https://github.com/HiteshSaini05",
          linkedin: "https://www.linkedin.com/in/hitesh-saini-3592a62b4/"
        },
        {
          name: "Anshul",
          designation: "Domain Director (Android)",
          photo: anshulImg,
          github: "",
          linkedin: ""
        },
        {
          name: "Anshika Goyal",
          designation: "Marketing Head",
          photo: anshikaImg,
          github: "https://github.com/Anshika2006-7",
          linkedin: "https://www.linkedin.com/in/anshika-goyal-21a267331/"
        },
        {
          name: "Jasjeet",
          designation: "Domain Director (AI & ML)",
          photo: jasjeetImg,
          github: "",
          linkedin: ""
        },
      ]
    },
    "2024 - 2025": {
      members: [
        {
          name: "Ayushi",
          designation: "Chairperson",
          photo: ayushiImg,
          github: "https://github.com/ayushim1200",
          linkedin: "https://www.linkedin.com/in/ayushi-04050526b/",
          orcid: "https://orcid.org/0009-0002-4725-6698",
        },
        {
          name: "Simran Jaggi",
          designation: "Vice Chairperson",
          photo: simranImg,
          github: "https://github.com/sjaggi1",
          linkedin: "https://www.linkedin.com/in/simran-jaggi-a62086291/",
          orcid: "https://orcid.org/0009-0001-7143-2578",
        },
        {
          name: "Vanshika Chilkoti",
          designation: "Secretary",
          photo: vanshikacImg,
          github: "https://github.com/vanshikachilkoti",
          linkedin: "https://www.linkedin.com/in/vanshika-chilkoti-57044226b/",
          orcid: "https://orcid.org/0009-0006-7594-8527",
        },
        {
          name: "Vanshika Singla",
          designation: "Membership Chairperson",
          photo: vanshikaImg,
          github: "https://github.com/VanshikaSingla826",
          linkedin: "https://www.linkedin.com/in/vanshika-singla-27452a289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          orcid: "https://orcid.org/0009-0001-0722-1290",
        },
        {
          name: "Janvi Sharma",
          designation: "Treasurer",
          photo: janviImg,
          github: "https://github.com/HAYAT1686",
          linkedin: "https://www.linkedin.com/in/j-j-33bb19325",
          orcid: "https://orcid.org/0009-0008-4010-6682",
        },
        {
          name: "Japjot Singh Nanda",
          designation: "Web Master",
          photo: japjotImg,
          github: "https://github.com/CoderJap",
          linkedin: "https://ccet.acm.org/www.linkedin.com/in/japjot-singh-nanda-374a3a288",
          orcid: "https://orcid.org/0009-0000-7356-0509",
        },
        {
          name: "Rima Kumari",
          designation: "Design Head",
          photo: rimaImg,
          github: "https://github.com/Rima-2004",
          linkedin: "https://www.linkedin.com/in/rima-kumari-739391287/",
          orcid: "https://orcid.org/0009-0008-8028-0511",
        },
        {
          name: "Raj Kanwar Singh",
          designation: "Executive Member Head",
          photo: rajImg,
          github: "https://github.com/Kanwar5714",
          linkedin: "https://www.linkedin.com/in/raj-kanwar/",
          orcid: "https://orcid.org/0009-0008-6313-7844",
        },
        {
          name: "Deepika Goyal",
          designation: "Editorial Head",
          photo: deepikaImg,
          github: "https://github.com/dee-goyal",
          linkedin: "https://www.linkedin.com/in/dee-goyal/",
          orcid: "https://orcid.org/0009-0008-9615-6654",
        },
        {
          name: "Anoop Pant",
          designation: "Social Media Manager",
          photo: anoopImg,
          github: "https://github.com/pantanoop",
          linkedin: "https://www.linkedin.com/in/anoop-pant-b3ab2a281/",
          orcid: "https://orcid.org/0009-0008-3769-0777",
        },
        {
          name: "Ravina Mittal",
          designation: "External PR Head",
          photo: ravinaImg,
          github: "https://github.com/RAVINAMITTAL",
          linkedin: "https://www.linkedin.com/in/ravina-mittal-399979319/",
          orcid: "https://orcid.org/0009-0009-6946-8836",
        },
        {
          name: "Deependra Singh",
          designation: "Event Manager",
          photo: deependraImg,
          github: "https://github.com/deependrasaharan",
          linkedin: "https://www.linkedin.com/in/deependra-singh-721252296",
          orcid: "https://orcid.org/0009-0008-4667-3418",
        },
      ],
    },
    "2023 - 2024": {
      members: [
        {
          name: "Aishita",
          designation: "Chairperson",
          photo: aishitaImg,
          github: "https://github.com/aishita2022",
          linkedin: "https://www.linkedin.com/in/aishita-sharma-30b277232",
          orcid: "https://orcid.org/0000-0002-8649-3437",
        },
        {
          name: "Mehak Preet",
          designation: "Vice Chairperson",
          photo: mehakpImg,
          github: "https://github.com/Mehak-Preet18",
          linkedin: "https://www.linkedin.com/in/mehak18p",
          orcid: "https://orcid.org/0000-0001-8166-8210/",
        },
        {
          name: "Vanshika Bhardwaj",
          designation: "Secretary",
          photo: vanshikabImg,
          github: "https://github.com/vanshikabhardwaj7",
          linkedin: "https://www.linkedin.com/in/vanshika-bhardwaj-0b2b83229/",
          orcid: "https://orcid.org/0000-0002-8015-2244",
        },
        {
          name: "Sahil Garg",
          designation: "Membership Chair",
          photo: sahilImg,
          github: "https://github.com/Sahil2004",
          linkedin: "https://www.linkedin.com/in/sahil2004",
          orcid: "https://orcid.org/0009-0009-2970-5550",
        },
        {
          name: "Harkiran Kaur",
          designation: "Treasurer",
          photo: harkiranImg,
          github: "https://github.com/HarkiranKaur20",
          linkedin: "https://ccet.acm.org/www.linkedin.com/in/harkiran-kaur-002b80261",
          orcid: "https://orcid.org/0009-0001-6988-046X",
        },
        {
          name: "Ruchika Thakur",
          designation: "Web Master",
          photo: ruchikaImg,
          github: "https://github.com/ruchika0712",
          linkedin: "https://www.linkedin.com/in/ruchika-thakur-416191194",
          orcid: "https://orcid.org/0000-0003-1034-9516",
        },
        {
          name: "Ayushi",
          designation: "Editorial Head",
          photo: ayushiImg,
          github: "https://github.com/ayushim1200",
          linkedin: "https://www.linkedin.com/in/ayushi-04050526b/",
          orcid: "https://orcid.org/0009-0002-4725-6698/",
        },
        {
          name: "Priyanshu",
          designation: "Design Head",
          photo: priyanshuImg,
          github: "https://github.com/Priyanshu792",
          linkedin: "https://ccet.acm.org/www.linkedin.com/in/priyanshu-k-4a9514214",
          orcid: "https://orcid.org/0009-0004-3201-4666",
        },
        {
          name: "Ritika Gupta",
          designation: "External PR Head",
          photo: ritika1Img,
          github: "https://github.com/RCO21350",
          linkedin: "https://www.linkedin.com/in/ritika-gupta-28b31b280",
          orcid: "https://orcid.org/0009-0004-4043-9576",
        },
        {
          name: "Avneet Kaur",
          designation: "Social Media Manager",
          photo: avneetImg,
          github: "https://github.com/avneetkaur0101",
          linkedin: "https://www.linkedin.com/in/avneet-kaur-52213a261/",
          orcid: "https://orcid.org/0000-0001-7597-9207",
        },
        {
          name: "Simran Jaggi",
          designation: "Event Manager",
          photo: simran1Img,
          github: "https://github.com/sjaggi1",
          linkedin: "https://ccet.acm.org/www.linkedin.com/in/simran-jaggi-a62086291",
          orcid: "https://orcid.org/0009-0001-7143-2578",
        },
      ],
    },
    "2022 - 2023": {
      members: [
        {
          name: "Anureet Chhabra",
          designation: "Chairperson",
          photo: anureetImg,
          github: "https://github.com/anureetchhabra",
          linkedin: "https://www.linkedin.com/in/anureet-chhabra-bb86271bb/",
          orcid: "https://orcid.org/0000-0001-8123-4359",
        },
        {
          name: "Soumya Sharma",
          designation: "Vice Chairperson",
          photo: soumyaImg,
          github: "https://github.com/SOUMYA0129",
          linkedin: "https://www.linkedin.com/in/soumya-sharma-94b3901b4/",
          orcid: "https://orcid.org/0000-0002-5875-6076",
        },
        {
          name: "Yadvi Nanda",
          designation: "Secretary",
          photo: yadviImg,
          github: "https://github.com/YadviNanda",
          linkedin: "https://www.linkedin.com/in/yadvi-nanda-b59318202/",
          orcid: "https://orcid.org/0000-0001-6828-3412",
        },
        {
          name: "Smriti Kumari",
          designation: "Treasurer",
          photo: smritiImg,
          github: "https://github.com/smriti2o",
          linkedin: "https://www.linkedin.com/in/smritikumari20/",
          orcid: "https://orcid.org/0000-0002-1672-6012",
        },
        {
          name: "Rinka",
          designation: "Membership Chair",
          photo: rinkaImg,
          github: "https://github.com/coder-84",
          linkedin: "https://www.linkedin.com/in/rinka-yadav-98a99421b/",
          orcid: "https://orcid.org/0000-0003-2053-9807",
        },
        {
          name: "Siddharth Khati",
          designation: "Web Master",
          photo: siddharthkImg,
          github: "https://github.com/Siddharthkhati",
          linkedin: "https://www.linkedin.com/in/siddharth-singh-khati-631a17226/",
          orcid: "https://orcid.org/0000-0001-8642-5779",
        },
        {
          name: "Krish Kathuria",
          designation: "Editorial Head",
          photo: krishImg,
          github: "",
          linkedin: "",
          orcid: "",
        },
        {
          name: "Kanishk Nagpal",
          designation: "Design Head",
          photo: kanishk1Img,
          github: "https://github.com/kaythecosmic",
          linkedin: "https://www.linkedin.com/in/kanishk-nagpal-531153228/",
          orcid: "https://orcid.org/0000-0002-5938-2344",
        },
        {
          name: "Deepak Mahto",
          designation: "Executive Member Head",
          photo: deepakImg,
          github: "https://github.com/deepakm12",
          linkedin: "https://www.linkedin.com/in/deepak-mahto-196694200/",
          orcid: "https://orcid.org/0000-0003-2826-9055",
        },
        {
          name: "Aishita",
          designation: "External PR Head",
          photo: aishita2Img,
          github: "https://github.com/aishita2022",
          linkedin: "https://www.linkedin.com/in/aishita-sharma-30b277232/",
          orcid: "https://orcid.org/0000-0002-8649-3437",
        },
        {
          name: "Vanshika Bhardwaj",
          designation: "Social Media Manager",
          photo: vanshikab2Img,
          github: "https://github.com/vanshikabhardwaj7",
          linkedin: "https://www.linkedin.com/in/vanshika-bhardwaj-0b2b83229/",
          orcid: "https://orcid.org/0000-0002-8015-2244",
        },
        {
          name: "Vyoam Yadav",
          designation: "Event Manager",
          photo: vyoamImg,
          github: "https://github.com/ambiguousphoton",
          linkedin: "https://www.linkedin.com/in/vyoam-yadav-061921223/",
          orcid: "https://orcid.org/0000-0002-7009-8846",
        },
        {
          name: "Samarth Sharma",
          designation: "Creative Head",
          photo: samarthImg,
          github: "",
          linkedin: "",
          orcid: "",
        },
      ],
    },
    "2021 - 2022": {
      members: [
        {
          name: "Kriti Aggarwal",
          designation: "Chairperson",
          photo: kritiImg,
          github: "https://github.com/kri14",
          linkedin: "https://www.linkedin.com/in/kriti-aggarwal-b372721a2/",
          orcid: "https://orcid.org/0000-0002-7415-0103",

        },
        {
          name: "Manisha Kumari",
          designation: "Vice Chairperson",
          photo: manishaImg,
          github: "https://github.com/manisha02feb",
          linkedin: "https://www.linkedin.com/in/manisha-kumari-221837221/",
          orcid: "https://orcid.org/0000-0002-3185-0732"
        },
        {
          name: "Rishika Gaur",
          designation: "Secretary",
          photo: RISHIKAImg,
          github: "https://github.com/Rishika-Gaur",
          orcid: "https://orcid.org/0000-0002-2909-2119"
        },
        {
          name: "Shreya Pandey",
          designation: "Treasurer",
          photo: shreya2Img,
          github: "https://github.com/shreya20011002",
          linkedin: "https://www.linkedin.com/in/shreya-pandey-a8875320a/",
          orcid: "https://orcid.org/0000-0002-5990-4392"
        },
        {
          name: "Ishita Chamola",
          designation: "Membership Chair",
          photo: ishitaImg,
          github: "https://github.com/ishitachamola",
          linkedin: "https://www.linkedin.com/in/ishita-chamola-89a60520a/",
          orcid: "https://orcid.org/0000-0002-9552-6552"
        },
        {
          name: "Gopal Mengi",
          designation: "Editorial Head",
          photo: GopalImg,
          github: "https://github.com/GopalMengi",
          linkedin: "https://www.linkedin.com/in/gopal-mengi-273476137/",
          orcid: "https://orcid.org/0000-0001-8702-642X"
        },
        {
          name: "Ishleen Kaur",
          designation: "Design Head",
          photo: ishleenImg,
          github: "https://github.com/ishleenk25",
          linkedin: "https://www.linkedin.com/in/ishleen-kaur-4b4a43129/",
          orcid: "https://orcid.org/0000-0002-2324-3908"
        },
        {
          name: "Anamika Sharma",
          designation: "Executive Member Head",
          photo: anamikaImg,
          github: "https://github.com/anamika-sharma1",
          linkedin: "https://www.linkedin.com/in/anamika-sharma-65576a21b/",
          orcid: "https://orcid.org/0000-0002-3989-2224"
        },
        {
          name: "Dhriti Bhasin",
          designation: "External PR Head",
          photo: dhritiImg,
          github: "https://github.com/Dhriti11",
          linkedin: "https://www.linkedin.com/in/dhriti-bhasin-099128173/",
          orcid: "https://orcid.org/0000-0001-9451-3023"
        },
        {
          name: "Uday Madan",
          designation: "Social Media Manager",
          photo: udayImg,
          github: "https://github.com/UMwarrior",
          linkedin: "https://www.linkedin.com/in/uday-madan-14753820b/",
          orcid: "https://orcid.org/0000-0003-4354-166X"
        },
        {
          name: "Deepak Mahto",
          designation: "Event Manager",
          photo: deepakImg,
          github: "https://github.com/deepakm12",
          linkedin: "https://www.linkedin.com/in/deepak-mahto-196694200/",
          orcid: "https://orcid.org/0000-0003-2826-9055"
        },
      ],
    },
  },
};

const groupPhotos = {
  "2025 - 2026": {
    combined: cgroup25,
  },
  "2024 - 2025": {
    combined: "",
  },
  "2023 - 2024": {
    combined: "",
  },
  "2022 - 2023": {
    combined: cgroup22,
  },
};

export default function TeamPage() {
  const [selectedTeamType, setSelectedTeamType] = useState("ACM");
  const filteredYears =
      selectedTeamType === "ACMW"
          ? allYears.filter((y) =>
              ["2025 - 2026", "2024 - 2025", "2023 - 2024", "2022 - 2023", "2021 - 2022"].includes(y)
          )
          : allYears;
  const [selectedYear, setSelectedYear] = useState(filteredYears[0]);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (!filteredYears.includes(selectedYear)) {
      setSelectedYear(filteredYears[0]);
    }
  }, [selectedTeamType, filteredYears, selectedYear]);

  useEffect(() => {
    setFade(false);
    const timer = setTimeout(() => setFade(true), 180);
    return () => clearTimeout(timer);
  }, [selectedTeamType, selectedYear]);

  const currentTeam = teamData[selectedTeamType]?.[selectedYear] || null;

  return (
      <div className={styles["team-page"]}>
        <div className={styles["title-container"]}>
          <h1 className={styles["main-title"]}>Our Team</h1>
          <p className={styles["subtitle"]}>Meet the talented individuals behind our success</p>
        </div>

        {/* Year Selection */}
        <div className={styles["selection-container"]}>
          <div className={styles["selection-group"]}>
            <h3 className={styles["selection-label"]}>Select Year</h3>
            <div className={styles["year-tabs"]}>
              {filteredYears.map((year) => (
                  <button
                      key={year}
                      className={`${styles["selection-tab"]} ${
                          selectedYear === year ? styles["active-tab"] : ""
                      }`}
                      onClick={() => setSelectedYear(year)}
                      type="button"
                  >
                    {year}
                  </button>
              ))}
            </div>
          </div>

          {/* Team Type Selection */}
          <div className={styles["selection-group"]}>
            <h3 className={styles["selection-label"]}>Select Team</h3>
            <div className={styles["team-type-tabs"]}>
              {teamTypes.map((type) => (
                  <button
                      key={type}
                      className={`${styles["selection-tab"]} ${
                          selectedTeamType === type ? styles["active-tab"] : ""
                      }`}
                      onClick={() => setSelectedTeamType(type)}
                      type="button"
                  >
                    {type}
                  </button>
              ))}
            </div>
          </div>
        </div>

        {/* Combined Group Photo */}
        {groupPhotos[selectedYear]?.combined && (
            <div className={`${styles["group-photo-container"]} ${fade ? styles.visible : styles.hidden}`}>
              <div className={styles["photo-label"]}>Combined Team Photo</div>
              <div className={styles["group-photo"]}>
                <img src={groupPhotos[selectedYear].combined} alt={`${selectedYear} Combined Group`} />
              </div>
            </div>
        )}

        {/* Individual Team Group Photo */}
        {selectedTeamType === "ACM" && groupPhotos[selectedYear]?.acm && (
            <div className={`${styles["group-photo-container"]} ${fade ? styles.visible : styles.hidden}`}>
              <div className={styles["photo-label"]}>ACM Team Photo</div>
              <div className={styles["group-photo"]}>
                <img src={groupPhotos[selectedYear].acm} alt={`${selectedYear} ACM Group`} />
              </div>
            </div>
        )}

        {selectedTeamType === "ACMW" && groupPhotos[selectedYear]?.acmw && (
            <div className={`${styles["group-photo-container"]} ${fade ? styles.visible : styles.hidden}`}>
              <div className={styles["photo-label"]}>ACMW Team Photo</div>
              <div className={styles["group-photo"]}>
                <img src={groupPhotos[selectedYear].acmw} alt={`${selectedYear} ACMW Group`} />
              </div>
            </div>
        )}

        {/* Members Grid */}
        <div className={styles["members-container"]}>
          <h2 className={styles["members-title"]}>
            {selectedTeamType} Team Members ({selectedYear})
          </h2>

          {currentTeam?.members?.length > 0 ? (
              <div className={styles["members-grid"]}>
                {currentTeam.members.map((member, idx) => (
                    <div
                        className={`${styles["member-card"]} ${fade ? styles.visible : styles.hidden}`}
                        key={idx}
                        style={{ animationDelay: `${0.1 + idx * 0.05}s` }}
                    >
                      <div className={styles["card-inner"]}>
                        <div className={styles["member-image-container"]}>
                          <img
                              src={member.photo || "/default-avatar.png"}
                              alt={member.name}
                              className={styles["member-image"]}
                              onError={(e) => {
                                e.target.src = "/default-avatar.png";
                              }}
                          />
                        </div>

                        <div className={styles["member-info"]}>
                          <h3 className={styles["member-name"]}>{member.name}</h3>
                          <p className={styles["member-role"]}>{member.designation}</p>

                          <div className={styles["social-links"]}>
                            {member.github && (
                                <a
                                    href={member.github}
                                    className={styles["social-link"]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="GitHub"
                                >
                                  <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.5v-1.7c-3.3.7-4-1.5-4-1.5-.5-1.1-1.3-1.4-1.3-1.4-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.6-1.1.6-1.1-.6-1-.9-1.2-1.7-1.2-.4 0-.2-.2-.1-.2 1.8 0 2.6 1.6 2.6 1.6.6 1.3 1.6 1 2.1.8.1-.4.4-.7.7-.9-2.7-.3-5.6-1.3-5.6-5.7 0-1.3.5-2.3 1.3-3.1-.2-.3-.6-1.4.1-2.8 0 0 1-.3 3.3 1.2l.9-.2c.9-.2 1.8-.2 2.7 0l.9.2c2.3-1.5 3.3-1.2 3.3-1.2.7 1.4.3 2.5.1 2.8.8.8 1.3 1.8 1.3 3.1 0 4.4-2.9 5.4-5.6 5.7.4.3.8.9.8 1.8v2.7c0 .3.2.6.7.5A12 12 0 0 0 12 .3"/>
                                  </svg>
                                </a>
                            )}

                            {member.linkedin && (
                                <a
                                    href={member.linkedin}
                                    className={styles["social-link"]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="LinkedIn"
                                >
                                  <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72c0-.95-.79-1.72-1.77-1.72zM7.1 20.45H3.56V9H7.1v11.45zM5.33 7.59a2.08 2.08 0 1 1 0-4.16 2.08 2.08 0 0 1 0 4.16zM20.45 20.45h-3.53v-5.61c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.71h-3.51V9h3.37v1.56h.05c.47-.89 1.62-1.82 3.34-1.82 3.58 0 4.24 2.36 4.24 5.44v6.27z"/>
                                  </svg>
                                </a>
                            )}

                            {member.orcid && (
                                <a
                                    href={member.orcid}
                                    className={styles["social-link"]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="ORCID"
                                >
                                  <img src={orcidIcon} alt="ORCID" />
                                </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                ))}
              </div>
          ) : (
              <div className={styles["no-members"]}>
                <p>No team data available for this selection.</p>
              </div>
          )}
        </div>
      </div>
  );
}