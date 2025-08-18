
import React, { useState, useEffect } from "react";
import "./Mentors.css";

const mentorsData = [
  {
    name: "Dr. Manpreet Singh",
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
      
      
    }
  },
  {
    name: "Dr. Sunil K. Singh",
    title: "Professor and HOD, CSE Faculty",
    imgSrc: "/mentors/mentor-2.png",
    additionalImg: "/mentors/sks-additional.png",
    about: "Passionate about teaching and research in computer science.",
    skills: [
      "High Performance Computing",
     "Linux/Unix", 
     "NLP", 
     "Internet of Things", 
     "Machine Learning",
     "Cyber Security",
     "Computer Architecture & Organization",
     "Computer Networks"
    ],
    education: [
      {
        degree: "Ph.D. in Computer Science",
        institution: "Uttrakhand Technical University, Dehradun",
        date: "2013",
        
      },
      {
        degree: "M.Tech in Computer Science",
        institution: "Delhi Technological University (Formerly DCE), Delhi",
        date: "2005",
        
      },
      {
        degree: "B.Tech in Computer Science",
        institution: "Madan Mohan Malaviya University of Technology ( Formerly MMMEC), Gorakhpur (U.P.)",
        date: "2001",
        
      }
      
    ],

   publications: {

},
    phdTeam: [],
    btechTeam: [],

     social: {
      email: "mailto:sksingh@ccet.ac.in",
      linkedin: "https://in.linkedin.com/in/drsks",        // sample
                              
      scholar: "https://scholar.google.com/citations?user=EDpdqjwAAAAJ&hl=en",
      orcid: "https://orcid.org/0000-0003-4876-7190"                  // optional
    },

    achievements: [
      {
        title: "IEEE Professional Member",
        organization: "IEEE",
        year: "2021–present",
        description: "Active member, Consumer Technology Society."
      },
      {
        title: "ACM Professional Member",
        organization: "ACM",
        year: "2014–present",
        description: "Contributions to computing research and education."
      },

      {
        title: "Institution of Engineers of India (IEI), Member",
        organization: "Institution of Engineers of India (IEI), Kolkata",
        year: "2011–present",
        description: "Active member"
      },
    ]
    

  },
  
  {
    name: "Dr. Sudhakar Kumar",
    title: "Assistant Professor, CSE Faculty",
    imgSrc: "/mentors/mentor3.png",
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
    education: [
      {
        degree: "Ph.D. in Computer Science",
        institution: "Punjab University",
        date: "February 2024",
        dissertation:
          "Advanced Machine Learning Algorithms for Big Data Analytics in Indian Context",
      },
      {
        degree: "M.Tech in Computer Science",
        institution: "Indian Institute of Technology Guwahati",
        date: "2013",
        dissertation: "Scalable Web Architectures",
      },
      {
        degree: "B.Tech in Information Technology",
        institution: "NIT Jalandhar",
        date: "2011",
        dissertation: "Secure Distributed Systems",
      },
    ],
    publications: {
      2025: [
       {
  title:
    "Leveraging Dynamic Embeddings and Reinforcement Learning with Bayesian Networks for Ransomware Resiliences",
  authors:
    " Sudhakar Kumar , Sunil K. Singh , Saket Sarin , Chandra Kumari Subba , Varsha Arya , N. Nandhini , Brij B. Gupta , Kwok Tai Chui ",
  journal: "Cyber Security and Applications",
  doi: "10.1016/j.csa.2025.100095",
  type: "Article",
  impact: "High Impact",
},

        {
          title:
            "Advancements in secure quantum communication and robust key distribution techniques for cybersecurity applications",
          authors:"Sunil K. Singh, Sudhakar Kumar, Anureet Chhabra, Akash Sharma, Varsha Arya, M. Srinivasan, Brij B. Gupta",
          journal: "Cyber Security and Applications",
          doi: "10.1016/j.csa.2025.100089",
          type: "Article",
          impact: "High Impact",
        },
        {
          title: "Advanced Techniques and Best Practices for Phishing Detection",
          authors: "Ravina Mittal, Sunil K. Singh, Sudhakar Kumar, Trannum Khullar, Rakesh Kumar, Brij B. Gupta, Konstantinos Psannis",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-8784-9.ch008",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Advanced Tools and Technologies for Phishing Prevention",
          authors: "Kashish Preet Kaur, Sunil K. Singh, Sudhakar Kumar, Ishita Mehra, Shavi Bansal, Kwok Tai Chui, Vandana Sharma, Sunil Kumar Sharma",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-8784-9.ch009",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "AI-Driven Green Computing for Sustainable Information Security",
          authors: "Rajneesh Kumar, Sudhakar Kumar, Sunil K. Singh, Yash Rawat, Chunjia Han, Brij B. Gupta, Nadia Nedjah, Archit Jain",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-8034-5.ch005",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Challenges and Opportunities in Sustainable AI and Information Systems",
          authors: "Vanshika Singla, Sunil K. Singh, Sudhakar Kumar, Amit Chhabra, Shabeg Singh Gill, Varsha Arya, Archit Jain",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-8034-5.ch004",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Foundations of Phishing Defense",
          authors: "Raj Kanwar, Sumit Bawa, Sunil K. Singh, Sudhakar Kumar, Chandra Kumari Subba, Varsha Arya, Abhay Ratnaparkhi",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-8784-9.ch001",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Future Trends in AI-Driven Green Computing and Security",
          authors: "Avinash Mishra, Sudhakar Kumar, Sunil K. Singh, Deepak Bhattarai, Amit Chhabra, Shabeg Singh Gill, Varsha Arya, Archit Jain",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-8034-5.ch003",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Legal and Ethical Considerations in Phishing Defense",
          authors: "Janvi Sharma, Suni K. Singh, Sudhakar Kumar, Anish Sharma, Chandra Kumari Subba, Varsha Arya, Achin Jain, Arun Kumar Dubey",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-8034-5.ch020",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Leveraging Artificial Intelligence for Cyber Defense in Space Missions",
          authors: "Japjot Singh Nanda, Sunil K. Singh, Sudhakar Kumar, Dikshant Rajput, Chunjia Han, Brij B. Gupta, Nadia Nedjah",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-7939-4.ch006",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Phishing Prevention Solutions and Mechanisms",
          authors: "Abhavya Muku, Sunil K. Singh, Sudhakar Kumar, Ankita Sharma, Pooja Rai, Biraj Upadhyaya, Sunil Kumar Sharma, Vandana Sharma",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-8784-9.ch003",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Reducing the Carbon Footprint in Machine Learning With Eco-Friendly AI Training",
          authors: "Tanish Aggarwal, Sudhakar Kumar, Sunil K. Singh, Chandra Kumari Subba, Biraj Upadhyaya, Varsha Arya, Abhay Ratnaparkhi, Sunil Kumar Sharma",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-8034-5.ch010",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Resilient and Trusted Communication Frameworks for Space Missions",
          authors: "Shaurya Katna, Sudhakar Kumar, Sunil K. Singh, Abhishek Goyal, Animesh Singh, Lalit Kumar Vashishtha",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-7939-4.ch007",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Robust and Secure Communication Protocols for Space Missions",
          authors: "Harmanjot Singh, Sudhakar Kumar, Sunil K. Singh, Anoop Pant, Chandra Kumari Subba, Brij B. Gupta, Konstantinos Psannis",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-7939-4.ch008",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Securing Cyber-Physical Systems in Space Missions",
          authors: "Anubhav Singh, Sunil K. Singh, Sudhakar Kumar, Sumit Kumar, Shavi Bansal, Lalit Kumar Vashishtha, Arun Kumar Dubey, Achin Jain",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-7939-4.ch005",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "The Influence of AI on Social Interactions and Community Dynamics",
          authors: "Jasjeet Singh, Sunil K. Singh, Sudhakar Kumar, Samar Pratap Singh, Rakesh Kumar, Shavi Bansal, Kwok Tai Chui",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-8628-6.ch010",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Transforming User Experience in the Metaverse Through Emotional Intelligence and Affective Computing",
          authors: "Manvi Saini, Sudhakar Kumar, Sunil K. Singh, Aditi Bansal, Chunjia Han, Brij B. Gupta, Konstantinos Psannis",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-8628-6.ch015",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Understanding Cyber Threats in Modern Space Missions",
          authors: "Anoop Pant, Sudhakar Kumar, Sunil K. Singh, Harmanjot Singh, Chandra Kumari Subba, Shavi Bansal, Kwok Tai Chui",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-7939-4.ch002",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Virtual Economies and Social Structures in the Metaverse",
          authors: "Jaiveer Singh, Sudhakar Kumar, Sunil K. Singh, Deependra Singh, Animesh Singh, Varsha Arya, Abhay Ratnaparkhi",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-8628-6.ch006",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Virtual Identity and Self-Expression in the Metaverse",
          authors: "Aditi Sharma, Sudhakar Kumar, Sunil K. Singh, Shashi Jawla, Varsha Arya, Kwok Tai Chui",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-8628-6.ch005",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Communication Systems for Drone Swarms and Remote Operations",
          authors: "Shaurya Katna, Sunil K. Singh, Sudhakar Kumar, Divyansh Manro, Amit Chhabra, Sunil Kumar Sharma",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-2707-4.ch006",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Drones and Unmanned Aerial Vehicles Automation Using Reinforcement Learning",
          authors: "Jaskirat Kaur, Sudhakar Kumar, Sunil K. Singh, Ruchika Thakur, Shavi Bansal, Varsha Arya",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-2707-4.ch011",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Enhancing Autonomous System Security With AI and Secure Computation Technologies",
          authors: "Tushar Singh, Sudhakar Kumar, Sunil K. Singh, Priyanshu, Brij B. Gupta, Jinsong Wu, Arcangelo Castiglione",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-2707-4.ch008",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Multi-Modal Sensor Fusion With CRNNs for Robust Object Detection and Simultaneous Localization and Mapping (SLAM) in Agile Industrial Drones",
          authors: "Ujjwal Thakur, Sunil K. Singh, Sudhakar Kumar, Anubhav Singh, Varsha Arya, Kwok Tai Chui",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-2707-4.ch012",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Enhancing smart grid reliability through cross-domain optimization of IoT sensor placement and communication links",
          authors: "Saket Sarin, Sunil K. Singh, Sudhakar Kumar, Shivam Goyal, Brij B. Gupta, Varsha Arya, Razaz Waheeb Attar, Shavi Bansal, Ahmed Alhomoud",
          journal: "Telecommunication Systems",
          doi: "10.1007/s11235-024-01235-1",
          type: "Article",
          impact: "High Impact",
        },
        {
          title: "Variance-driven security optimisation in industrial IoT sensors",
          authors: "Hardik Gupta, Sunil K. Singh, Sudhakar Kumar, Karan Sharma, Hardeep Saini, Brij B. Gupta, Varsha Arya, Kwok Tai Chui",
          journal: "IET Networks",
          doi: "10.1049/ntw2.12139",
          type: "Article",
          impact: "High Impact",
        },
        {
          title: "AN IoT Based Smart Healthcare Gadget: Attempt to Promote the Idea of Smart Healthcare System",
          authors: "Aishita Sharma, Sunil K. Singh, Soumya Sharma, Sunil Kumar, Kartik Dalal & Anureet Chhabra ",
          journal: "Advances in Intelligent Systems and Computing",
          doi: "10.1007/978-3-031-40905-9_11",
          type: "Article",
          impact: "Medium Impact",
        },
        {
          title: "Application of Green IoT in Digital Oilfields for Achieving Sustainability in the OnG Industry",
          authors: "Soumya Sharma, Sunil K. Singh, Sudhakar Kumar, Krish Kathuria, Tarun Vats",
          journal: "Springer",
          doi: "10.1007/978-3-031-40905-9_13",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Automatic parallelization for multicore architectures: Role, importance, and opportunities",
          authors: "Sudhakar Kumar, Sunil K. Singh, Naveen Aggarwal, Shabeg Singh Gill",
          journal: "Uncertainty in Computational Intelligence-Based Decision Making",
          doi: "10.1016/b978-0-443-21475-2.00006-0",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Blockchain Based Election System Using Fingerprint Recognition",
          authors: "Uday Madan, Sunil K. Singh, Sudhakar Kumar, Mehak Preet, Akash Sharma, Himanshu Setia",
          journal: "Springer",
          doi: "10.1007/978-3-031-40905-9_6",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Computational intelligence in decision support: Scope and techniques",
          authors: "Sudhakar Kumar, Sunil K. Singh, Leema Nelson",
          journal: "Elsevier",
          doi: "10.1016/B978-0-443-21475-2.00019-9",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Enhancing DDoS Attack Detection in SDN with a Stacked Model Framework Utilizing Deep Neural Networks",
          authors: "Aishita Sharma, Sunil K. Singh, Sudhakar Kumar, Shin Hung Pan, Brij B. Gupta, Kwok Tai Chui",
          journal: "IEEE International Conference on Consumer Electronics (ICCE)",
          doi: "10.1109/ICCE63647.2025.10929828",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
        {
          title:
            "Geospectra: leveraging quantum-SAR and deep learning for enhanced geolocation in urban environments",
          authors: "Saket Sarin, Sunil K. Singh, Sudhakar Kumar & Shivam Goyal ",
          journal: "The Journal of Supercomputing",
          doi: "10.1007/s11227-024-06619-3",
          type: "Article",
          impact: "High Impact",
        },
        {
          title:
            "Neoteric Threat Intelligence Ensuring Digital Sovereignty and Trust through ML-Infused Proactive Defense Analytics for NEXT-G and Beyond Ecosystems",
          authors: "Sudhakar Kumar, Sunil K. Singh, Rakesh Kumar, Chandra Kumari Subba, Kwok Tai Chui, Brij B. Gupta",
          journal: "Procedia Computer Science",
          doi: "10.1016/j.procs.2025.02.062",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
        {
          title:
            "Neural Network Architectures for Machine Translation: Enhancing Quality Education Through Improved Access to Multilingual Resources",
          authors: "Ayushi, Sudhakar Kumar, Sunil K. Singh, Samar Pratap Singh, Pooja Rai, Kwok Tai Chui, Brij B. Gupta",
          journal: "Springer",
          doi: "10.1007/978-3-031-88039-1_18",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Secure and cost-effective key management scheme for the Internet of Things-supported WSN",
          authors: "Rakesh Kumar, Sunil K. Singh, D.K. Lobiyal, Sudhakar Kumar",
          journal: "Uncertainty in Computational Intelligence-Based Decision Making",
          doi: "10.1016/b978-0-443-21475-2.00012-6",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Security Enhancement in Consumer Enterprises Using Neural Nets Within the SIEM Framework",
          authors: "Saksham Arora, Sudhakar Kumar, Sunil K. Singh, Sahil Garg, Brij B. Gupta, Shavi Bansal, Kwok Tai Chui",
          journal: "IEEE International Conference on Consumer Electronics (ICCE)",
          doi: "10.1109/ICCE63647.2025.10930094",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
        // More publications can be added here...
      ],
      2024: [
        {
          title:
            "Advanced Evaluation of Propagation Models and Routing Protocols in Vehicular Ad-Hoc Networks",
          authors: "Kumar, S. et al.",
          journal: "2024 IEEE Cyber Science and Technology Congress (CyberSciTech)",
          doi: "10.1109/cyberscitech64112202400070",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
        {
          title:
            "Intelligent Task Offloading in IoT-Driven Digital Twin Systems via Hybrid Federated and Reinforcement Learning",
          authors: "Kumar, S. et al.",
          journal: "IEEE CyberSciTech",
          doi: "10.1109/CyberSciTech64112202400069",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
        {
          title: "Applying Visual Cryptography to Decrypt Data Using Human Senses",
          authors: "Kumar, S. et al.",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-5330-1.ch016",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Homomorphic Encryption in Smart City Applications for Balancing Privacy and Utility",
          authors: "Kumar, S. et al.",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-5330-1.ch010",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Next Gen Security With Quantum-Safe Cryptography",
          authors: "Kumar, S. et al.",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-5330-1.ch006",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Zero Knowledge Proofs and Their Applications in Cryptography",
          authors: "Kumar, S. et al.",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-5330-1.ch003",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Synergistic application of neuro-fuzzy mechanisms in advanced neural networks for real-time stream data flux mitigation",
          authors: "Kumar, S. et al.",
          journal: "Soft Computing",
          doi: "10.1007/s00500-024-09938-y",
          type: "Article",
          impact: "High Impact",
        },
        {
          title:
            "SEIR-driven semantic integration framework: Internet of Things-enhanced epidemiological surveillance in COVID-19 outbreaks using recurrent neural networks",
          authors: "Kumar, S. et al.",
          journal: "IET Cyber-Physical Systems: Theory & Applications",
          doi: "10.1049/cp52.12091",
          type: "Article",
          impact: "High Impact",
        },
        {
          title:
            "Sustainable and intelligent time-series models for epidemic disease forecasting and analysis",
          authors: "Kumar, S. et al.",
          journal: "Sustainable Technology and Entrepreneurship",
          doi: "10.1016/j.stae.2023.100064",
          type: "Article",
          impact: "High Impact",
        },
        {
          title:
            "Security Metrics and Authentication-based RouTing (SMART) Protocol for Vehicular IoT Networks",
          authors: "Kumar, S. et al.",
          journal: "SN Computer Science",
          doi: "10.1007/s42979-023-02566-7",
          type: "Article",
          impact: "High Impact",
        },
        {
          title:
            "A novel Cumulative Indicator score using Indicator averaging for optimizing local business websites of enterprise systems",
          authors: "Kumar, S. et al.",
          journal: "Enterprise Information Systems",
          doi: "10.1080/17517575.2023.2301658",
          type: "Article",
          impact: "High Impact",
        },
        {
          title:
            "Revolutionizing Healthcare Systems: Synergistic Multimodal Ensemble Learning & Knowledge Transfer for Lung Cancer Delineation & Taxonomy",
          authors: "Kumar, S. et al.",
          journal: "2024 IEEE International Conference on Consumer Electronics (ICCE)",
          doi: "10.1109/icce59016.2024.10444476",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
        {
          title:
            "Towards Sustainable Consumer Electronics: DL-based SoH and RUL Prediction for E-Waste Reduction",
          authors: "Kumar, S. et al.",
          journal: "2024 IEEE International Conference on Consumer Electronics (ICCE)",
          doi: "10.1109/icce59016.2024.10444466",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
        {
          title:
            "FuzzyBack—A Hybrid Neuro-Fuzzy Ensemble for Concept Drift Adaptation in Stream Mining Using Neural Network",
          authors: "Kumar, S. et al.",
          journal: "Springer",
          doi: "10.1007/978-981-97-3292-0_28",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "IoT-enabled smart farming with Industry 5.0",
          authors: "Kumar, S. et al.",
          journal: "Journal of High Speed Networks",
          doi: "10.3233/JHS-230258",
          type: "Article",
          impact: "High Impact",
        },
        {
          title:
            "Metaversal 6G: Deciphering Complex Requirements and Multivariate KPIs in High-Performance Computing",
          authors: "Kumar, S. et al.",
          journal: "Procedia Computer Science",
          doi: "10.1016/j.procs.2024.06.112",
          type: "Article",
          impact: "Medium Impact",
        },
        {
          title:
            "Navigating the landscape: Safeguarding privacy and security in the era of ambient intelligence within healthcare settings",
          authors: "Kumar, S. et al.",
          journal: "Cyber Security and Applications",
          doi: "10.1016/j.csa.2024.100046",
          type: "Article",
          impact: "High Impact",
        },
        {
          title:
            "OPTUNA—Driven Soft Computing Approach for Early Diagnosis of Diabetes Mellitus Using ANN",
          authors: "Kumar, S. et al.",
          journal: "Springer",
          doi: "10.1007/978-981-97-3292-0_25",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Securing the road ahead: Machine learning-driven DDoS attack detection in VANET cloud environments",
          authors: "Kumar, S. et al.",
          journal: "Cyber Security and Applications",
          doi: "10.1016/j.csa.2024.100037",
          type: "Article",
          impact: "High Impact",
        },
        {
          title:
            "Unleashing the Power of Multi-Agent Reinforcement Learning for Algorithmic Trading in the Digital Financial Frontier and Enterprise Information Systems",
          authors: "Kumar, S. et al.",
          journal: "Computers, Materials & Continua",
          doi: "10.32604/cmc.2024.051599",
          type: "Article",
          impact: "High Impact",
        },
      ],
      2023: [
        {
          title: "Enhancing Haemorrhage Detection in Head CT Scans Using Deep Learning",
          authors: "Kumar, S. et al.",
          journal:
            "2023 3rd International Conference on Smart Generation Computing, Communication and Networking (SMART GENCON)",
          doi: "10.1109/smartgencon60755.2023.10442342",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
        {
          title: "A novel hybrid model integrating MFCC and acoustic parameters for voice disorder detection",
          authors: "Kumar, S. et al.",
          journal: "Scientific Reports",
          doi: "10.1038/s41598-023-49869-6",
          type: "Article",
          impact: "High Impact",
        },
        {
          title:
            "A Novel Deep Federated Learning-Based Model to Enhance Privacy in Critical Infrastructure Systems",
          authors: "Kumar, S. et al.",
          journal: "International Journal of Software Science and Computational Intelligence",
          doi: "10.4018/ijssci.334711",
          type: "Article",
          impact: "High Impact",
        },
        {
          title: "Exploring Advanced Neural Networks For Cross-Corpus Fake News Detection",
          authors: "Kumar, S. et al.",
          journal: "ACM Conference",
          doi: "10.1145/3647444.3652457",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
        {
          title:
            "Hyperdimensional Consumer Pattern Analysis with Quantum Neural Architectures using Non-Hermitian Operators",
          authors: "Kumar, S. et al.",
          journal: "ACM Conference",
          doi: "10.1145/3647444.3652458",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
        {
          title:
            "Speculative Parallelism on Multicore Chip Architecture Strengthen Green Computing Concept: A Survey",
          authors: "Kumar, S. et al.",
          journal: "Advanced Computer Science Applications",
          doi: "10.1201/9781003369066-2",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Fuzzy Based Clustering of Consumers Big Data in Industrial Applications",
          authors: "Kumar, S. et al.",
          journal: "IEEE ICCE",
          doi: "10.1109/ICCE56470.2023.10043451",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
        {
          title:
            "A Novel Transfer Learning-Based Model for Ultrasound Breast Cancer Image Classification",
          authors: "Kumar, S. et al.",
          journal: "Springer",
          doi: "10.1007/978-981-19-9819-5_37",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Sustainable Framework for Metaverse Security and Privacy: Opportunities and Challenges",
          authors: "Kumar, S. et al.",
          journal: "Lecture Notes in Networks and Systems",
          doi: "10.1007/978-3-031-22018-0_30",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
      ],
    },
    phdTeam: [
      { name: "Satyam Kumar Sainy", img: "/mentors/team1.jpeg" },
      { name: "Naveen", img: "/mentors/team 2.jpeg" },
    ],
    btechTeam: [
      { name: "Sahil Garg", img: "/mentors/team3.png" },
      { name: "Japjot Singh Nanda", img: "/mentors/team4.png" },
    ],

     social: {
      email: "mailto:sudhakar@ccet.ac.in",
      linkedin: "https://in.linkedin.com/in/sudhakarkumar5",        // sample
      twitter: "",
      scholar: "https://scholar.google.co.in/citations?user=vsLPXb4AAAAJ&hl=en",
      orcid: "https://orcid.org/0000-0001-7928-4234"                  // optional
    },

    achievements: [
  
  {
    title: "IEEE Professional Member (Computer Science and Engineering) Membership",
    organization: "IEEE: New York, NY, US",
    year: "2020 to present",
    description: "",
  },
  {
    title: "IEEE Consumer Technology Society Membership (Computer Science and Engineering)",
    organization: "IEEE: New York, NY, US",
    year: "2020 to present",
    description: "",
  },
  {
    title: "Association for Computing Machinery Professional Member",
    organization: "Association for Computing Machinery: New York, New York, US",
    year: "2016 to present",
    description: "",
  },
 
]
  },
];



// Scoped styles for Mentors component only - no global body override


function MentorCard({ mentor, onClick }) {
  return (
    <div
      className="card"
      onClick={() => onClick(mentor)}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick(mentor);
      }}
      role="button"
      aria-label={`View profile of ${mentor.name}`}
    >
      <img src={mentor.imgSrc || "/placeholder.svg"} alt={mentor.name} />
      <div className="card__content">
        <h2>{mentor.name}</h2>
        <p>{mentor.title}</p>
      </div>
    </div>
  );
}

function Publication({ publication }) {
  const impactClass = publication.impact.toLowerCase().replace(" ", "-");
  return (
    <div className="publication-card">
      <div className="pub-title">{publication.title}</div>
      <div className="pub-authors">{publication.authors}</div>
      <div className="pub-journal">{publication.journal}</div>
      <div className="pub-meta">
        <span className="pub-type">{publication.type}</span>
        {/* <span className={`pub-impact ${impactClass}`}>{publication.impact}</span> */}
        <a
          className="pub-link"
          href={`https://doi.org/${publication.doi}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          DOI ↗
        </a>
      </div>
    </div>
  );
}

function YearPublications({ year, publications }) {
  const [visible, setVisible] = useState(false);

  // Define the order of types
  const typeOrder = ["book chapter", "conference paper", "article"];

  // Sort publications based on the order
  const sortedPublications = [...publications].sort(
    (a, b) =>
      typeOrder.indexOf(a.type.toLowerCase()) -
      typeOrder.indexOf(b.type.toLowerCase())
  );

  return (
    <div className="pub-year-section">
      <h3
        className="year-header"
        onClick={() => setVisible((v) => !v)}
        tabIndex={0}
        role="button"
        aria-expanded={visible}
        aria-controls={`pub-list-${year}`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setVisible((v) => !v);
        }}
      >
        {visible ? "▼" : "►"} {year}{" "}
        <span className="pub-count">({publications.length})</span>
      </h3>
      <div
        className="pub-list"
        id={`pub-list-${year}`}
        style={{ display: visible ? "block" : "none" }}
      >
        {sortedPublications.map((pub, i) => (
          <Publication key={i} publication={pub} />
        ))}
      </div>
    </div>
  );
}


function TeamMembers({ title, members }) {
  if (!members || members.length === 0) return null;
  return (
    <>
      <h3>{title}</h3>
      <div className="specializations">
        {members.map((m, i) => (
          <div className="team-member" key={i}>
            <img src={m.img || "/placeholder.svg"} alt={m.name} />
            <p>{m.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function ProfessionalActivities({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <div
      id="professionalActivities"
      className="activities-grid"
      aria-label="Professional Activities"
    >
      {items.map((activity, i) => (
        <div className="activity-card" key={i}>
          <h4>{activity.title}</h4>
          <p style={{ color: "#184ba7", margin: "4px 0" }}>
            <strong>{activity.organization}</strong>
          </p>
          {activity.year && (
            <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>📅 {activity.year}</p>
          )}
          {activity.description && (
            <p style={{ fontSize: "0.9rem", color: "#2b3d61" }}>
              {activity.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}


function MentorProfile({ mentor, onClose }) {
  const [activeTab, setActiveTab] = useState("about");
  


  const sortedYears = Object.keys(mentor.publications || {}).sort((a, b) => b - a);
  useEffect(() => {
  const navbar = document.querySelector("nav"); // adjust selector to your navbar
  if (navbar) navbar.style.display = "none";

 

  return () => {
    if (navbar) navbar.style.display = ""; // restore on close/unmount
  };
}, []);


  useEffect(() => {
    setActiveTab("about");
  }, [mentor]);

   const hasTeam =
  (mentor.phdTeam && mentor.phdTeam.length > 0) ||
  (mentor.btechTeam && mentor.btechTeam.length > 0);
  return (
    <div
      id="profileCard"
      style={{ display: "flex" }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="profileName"
    >
      <div className="profile">
        <img id="profileImg" src={mentor.imgSrc || "/placeholder.svg"} alt={mentor.name} />
        <h2 id="profileName">{mentor.name}</h2>
        <div className="title" id="profileTitle">
          {mentor.title}
        </div>
        <p>Department of CSE</p>
        <div
  className="social-icons"
  aria-label="Social media icons"
  role="list"
  style={{ gap: "12px" }}
>
  {mentor.social?.email && (
    <a href={mentor.social.email} target="_blank" rel="noopener noreferrer" role="listitem" aria-label="Email">
      <i className="fas fa-envelope" title="Email"></i>
    </a>
  )}

  {mentor.social?.linkedin && (
    <a href={mentor.social.linkedin} target="_blank" rel="noopener noreferrer" role="listitem" aria-label="LinkedIn">
      <i className="fab fa-linkedin-in" title="LinkedIn"></i>
    </a>
  )}

  {mentor.social?.twitter && (
    <a href={mentor.social.twitter} target="_blank" rel="noopener noreferrer" role="listitem" aria-label="Twitter">
      <i className="fab fa-twitter" title="Twitter"></i>
    </a>
  )}

  {mentor.social?.scholar && (
    <a href={mentor.social.scholar} target="_blank" rel="noopener noreferrer" role="listitem" aria-label="Google Scholar" title="Google Scholar">
      <span className="fab icon-scholar fa-lg"></span>
    </a>
  )}

   {mentor.social?.orcid && (
    <a href={mentor.social.orcid} target="_blank" rel="noopener noreferrer" role="listitem" aria-label="orcid" title = "orcid" >
      <span className="fab icon-orcid fa-lg" ></span>
    </a>
  )}

 
</div>

 {mentor.additionalImg && (
  <img
    className="additional-img"
    src={mentor.additionalImg}
    
  />
)}


        <p style={{ marginTop: "1rem", textAlign: "left", color: "white", paddingLeft: "29px" }}>
          {mentor.about}
        </p>
       
      </div>

      <div className="info">
        <nav className="tabs" aria-label="Profile Tabs" role="tablist">
          <button
            className={`tab ${activeTab === "about" ? "active" : ""}`}
            onClick={() => setActiveTab("about")}
            role="tab"
            aria-selected={activeTab === "about"}
            id="tab-about"
            aria-controls="about"
            tabIndex={activeTab === "about" ? 0 : -1}
          >
            About Me
          </button>
          <button
            className={`tab ${activeTab === "publications" ? "active" : ""}`}
            onClick={() => {
              // Only redirect for Dr. Sunil K. Singh
              if (
                mentor.name === "Dr. Sunil K. Singh" &&
                mentor.social?.scholar
              ) {
                window.open(mentor.social.scholar, "_blank", "noopener,noreferrer");
                // Optionally keep the in-app tab selection in sync if wanted:
                // setActiveTab("publications");
              } else {
                setActiveTab("publications");
              }
            }}
            role="tab"
            aria-selected={activeTab === "publications"}
            id="tab-publications"
            aria-controls="publications"
            tabIndex={activeTab === "publications" ? 0 : -1}
          >
            Publications
          </button>

          <button
            className={`tab ${activeTab === "activities" ? "active" : ""}`}
            onClick={() => setActiveTab("activities")}
            role="tab"
            aria-selected={activeTab === "activities"}
            id="tab-activities"
            aria-controls="activities"
            tabIndex={activeTab === "activities" ? 0 : -1}
          >
            Activities
          </button>
          <button
            className={`tab ${activeTab === "projects" ? "active" : ""}`}
            onClick={() => setActiveTab("projects")}
            role="tab"
            aria-selected={activeTab === "projects"}
            id="tab-projects"
            aria-controls="projects"
            tabIndex={activeTab === "projects" ? 0 : -1}
          >
            Projects
          </button>
          {hasTeam && (
    <button
      className={`tab ${activeTab === "team" ? "active" : ""}`}
      onClick={() => setActiveTab("team")}
      role="tab"
      aria-selected={activeTab === "team"}
      id="tab-team"
      aria-controls="team"
      tabIndex={activeTab === "team" ? 0 : -1}
    >
      Team
    </button>
  )}
        </nav>

        <section
          className={`tab-content ${activeTab === "about" ? "active" : ""}`}
          id="about"
          role="tabpanel"
          aria-labelledby="tab-about"
          tabIndex={0}
        >
          <h3>About Me</h3>
          <p id="profileAbout">{mentor.about || "Bio goes here..."}</p>

          {mentor.education && mentor.education.length > 0 && (
            <>
              <h3>Education</h3>
              <div id="profileEducation">
                {mentor.education.map((edu, i) => (
                  <div
                    key={i}
                    style={{
                      marginBottom: "1rem",
                      color: "#03045e",
                      fontWeight: 500,
                    }}
                  >
                    <div
                      style={{
                        fontSize: "1.05rem",
                        fontWeight: "700",
                        color: "#03045e",
                      }}
                    >
                      {edu.degree}
                    </div>
                    <div
                      style={{
                        fontSize: "0.9rem",
                        opacity: 0.9,
                        color: "#03045e",
                      }}
                    >
                      {edu.institution}
                    </div>
                    <div style={{ fontSize: "0.85rem", color: "#adc5f5" }}>
                      {edu.date}
                    </div>
                    <div
                      style={{
                        fontStyle: "italic",
                        fontSize: "0.85rem",
                        color: "#03045e",
                      }}
                    >
                      {edu.dissertation}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {mentor.skills && mentor.skills.length > 0 && (
            <>
              <h3>Specializations</h3>
              <div className="specializations" id="profileSkills">
                {mentor.skills.map((skill, i) => (
                  <span key={i}>{skill}</span>
                ))}
              </div>
            </>
          )}
        </section>

        <section
          className={`tab-content ${activeTab === "publications" ? "active" : ""}`}
          id="publications"
          role="tabpanel"
          aria-labelledby="tab-publications"
          tabIndex={0}
        >
          <h3>Publications</h3>
          {mentor.publications && Object.keys(mentor.publications).length > 0 ? (
            <>
              {sortedYears.map((year) => (
                <YearPublications
                  key={year}
                  year={year}
                  publications={mentor.publications[year]}
                />
              ))}
            </>
          ) : (
            <p>No publications available.</p>
          )}
        </section>

        <section
  className={`tab-content ${activeTab === "activities" ? "active" : ""}`}
  id="activities"
  role="tabpanel"
  aria-labelledby="tab-activities"
  tabIndex={0}
>
  <h3>Professional Activities</h3>
  <ProfessionalActivities items={mentor.achievements} />
</section>


        <section
          className={`tab-content ${activeTab === "projects" ? "active" : ""}`}
          id="projects"
          role="tabpanel"
          aria-labelledby="tab-projects"
          tabIndex={0}
        >
          <h3>Projects</h3>
          <p>No projects available.</p>
        </section>

       {hasTeam && (
  <section
    className={`tab-content ${activeTab === "team" ? "active" : ""}`}
    id="team"
    role="tabpanel"
    aria-labelledby="tab-team"
    tabIndex={0}
  >
    <TeamMembers title="Ph.D. Scholars" members={mentor.phdTeam} />
    <TeamMembers title="B.Tech Students" members={mentor.btechTeam} />
  </section>
)}


        <button
          className="close-btn"
          onClick={onClose}
          aria-label="Close profile"
          type="button"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default function Mentors() {
  const [selectedMentor, setSelectedMentor] = useState(null);

  const closeProfile = () => {
    setSelectedMentor(null);
  };

  return (
    <div className="mentors-section">
      {/* Inject fontawesome and styles */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      

      <h1>Mentors</h1>

      <article className="card__container">
        {mentorsData.map((mentor, i) => (
          <MentorCard
            key={i}
            mentor={mentor}
            onClick={(mentor) => setSelectedMentor(mentor)}
          />
        ))}
      </article>

      {selectedMentor && (
        <MentorProfile mentor={selectedMentor} onClose={closeProfile} />
      )}
    </div>
  );
}
