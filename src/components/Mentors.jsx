import React, { useState, useEffect } from "react";

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
    },
  },
  {
    name: "Dr. Sunil K. Singh",
    title: "Faculty Mentor ACM, Head of CSE CCET CHD",
    imgSrc: "/mentors/mentor-2.png",
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
        institution:
          "Madan Mohan Malaviya University of Technology ( Formerly MMMEC), Gorakhpur (U.P.)",
        date: "2001",
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
          url: "https://www.sciencedirect.com/science/article/pii/S2772918425000128",
          type: "Journal",
          impact: "High Impact",
        },
        {
          title:
            "Advancements in secure quantum communication and robust key distribution techniques for cybersecurity applications",
          authors:
            "Sunil K. Singh, Sudhakar Kumar, Anureet Chhabra, Akash Sharma, Varsha Arya, M. Srinivasan, Brij B. Gupta",
          journal: "Cyber Security and Applications",
          url: "https://www.sciencedirect.com/science/article/pii/S2772918425000062",
          type: "Journal",
          impact: "High Impact",
        },
        {
          title:
            "Advanced Techniques and Best Practices for Phishing Detection",
          authors:
            "Ravina Mittal, Sunil K. Singh, Sudhakar Kumar, Trannum Khullar, Rakesh Kumar, Brij B. Gupta, Konstantinos Psannis",
          journal: "IGI Global",
          doi: "https://doi.org/10.4018/979-8-3693-8784-9.ch008",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Advanced Tools and Technologies for Phishing Prevention",
          authors:
            "Kashish Preet Kaur, Sunil K. Singh, Sudhakar Kumar, Ishita Mehra, Shavi Bansal, Kwok Tai Chui, Vandana Sharma, Sunil Kumar Sharma",
          journal: "IGI Global",
          doi: "https://doi.org/10.4018/979-8-3693-8784-9.ch009",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "AI-Driven Green Computing for Sustainable Information Security",
          authors:
            "Rajneesh Kumar, Sudhakar Kumar, Sunil K. Singh, Yash Rawat, Chunjia Han, Brij B. Gupta, Nadia Nedjah, Archit Jain",
          journal: "IGI Global",
          doi: "https://doi.org/10.4018/979-8-3693-8034-5.ch005",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Challenges and Opportunities in Sustainable AI and Information Systems",
          authors:
            "Vanshika Singla, Sunil K. Singh, Sudhakar Kumar, Amit Chhabra, Shabeg Singh Gill, Varsha Arya, Archit Jain",
          journal: "IGI Global",
          doi: "https://doi.org/10.4018/979-8-3693-8034-5.ch004",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Foundations of Phishing Defense",
          authors:
            "Raj Kanwar, Sumit Bawa, Sunil K. Singh, Sudhakar Kumar, Chandra Kumari Subba, Varsha Arya, Abhay Ratnaparkhi",
          journal: "IGI Global",
          doi: "https://doi.org/10.4018/979-8-3693-8784-9.ch001",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Future Trends in AI-Driven Green Computing and Security",
          authors:
            "Avinash Mishra, Sudhakar Kumar, Sunil K. Singh, Deepak Bhattarai, Amit Chhabra, Shabeg Singh Gill, Varsha Arya, Archit Jain",
          journal: "IGI Global",
          doi: "https://doi.org/10.4018/979-8-3693-8034-5.ch003",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Legal and Ethical Considerations in Phishing Defense",
          authors:
            "Janvi Sharma, Suni K. Singh, Sudhakar Kumar, Anish Sharma, Chandra Kumari Subba, Varsha Arya, Achin Jain, Arun Kumar Dubey",
          journal: "IGI Global",
          doi: "https://doi.org/10.4018/979-8-3693-8034-5.ch020",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Leveraging Artificial Intelligence for Cyber Defense in Space Missions",
          authors:
            "Japjot Singh Nanda, Sunil K. Singh, Sudhakar Kumar, Dikshant Rajput, Chunjia Han, Brij B. Gupta, Nadia Nedjah",
          journal: "IGI Global",
          doi: "https://doi.org/10.4018/979-8-3693-7939-4.ch006",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Phishing Prevention Solutions and Mechanisms",
          authors:
            "Abhavya Muku, Sunil K. Singh, Sudhakar Kumar, Ankita Sharma, Pooja Rai, Biraj Upadhyaya, Sunil Kumar Sharma, Vandana Sharma",
          journal: "IGI Global",
          doi: "https://doi.org/10.4018/979-8-3693-8784-9.ch003",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Reducing the Carbon Footprint in Machine Learning With Eco-Friendly AI Training",
          authors:
            "Tanish Aggarwal, Sudhakar Kumar, Sunil K. Singh, Chandra Kumari Subba, Biraj Upadhyaya, Varsha Arya, Abhay Ratnaparkhi, Sunil Kumar Sharma",
          journal: "IGI Global",
          doi: "https://doi.org/10.4018/979-8-3693-8034-5.ch010",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Resilient and Trusted Communication Frameworks for Space Missions",
          authors:
            "Shaurya Katna, Sudhakar Kumar, Sunil K. Singh, Abhishek Goyal, Animesh Singh, Lalit Kumar Vashishtha",
          journal: "IGI Global",
          doi: "https://doi.org/10.4018/979-8-3693-7939-4.ch007",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Robust and Secure Communication Protocols for Space Missions",
          authors:
            "Harmanjot Singh, Sudhakar Kumar, Sunil K. Singh, Anoop Pant, Chandra Kumari Subba, Brij B. Gupta, Konstantinos Psannis",
          journal: "IGI Global",
          doi: "https://doi.org/10.4018/979-8-3693-7939-4.ch008",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Securing Cyber-Physical Systems in Space Missions",
          authors:
            "Anubhav Singh, Sunil K. Singh, Sudhakar Kumar, Sumit Kumar, Shavi Bansal, Lalit Kumar Vashishtha, Arun Kumar Dubey, Achin Jain",
          journal: "IGI Global",
          doi: "https://doi.org/10.4018/979-8-3693-7939-4.ch005",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "The Influence of AI on Social Interactions and Community Dynamics",
          authors:
            "Jasjeet Singh, Sunil K. Singh, Sudhakar Kumar, Samar Pratap Singh, Rakesh Kumar, Shavi Bansal, Kwok Tai Chui",
          journal: "IGI Global",
          doi: "https://doi.org/10.4018/979-8-3693-8628-6.ch010",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Transforming User Experience in the Metaverse Through Emotional Intelligence and Affective Computing",
          authors:
            "Manvi Saini, Sudhakar Kumar, Sunil K. Singh, Aditi Bansal, Chunjia Han, Brij B. Gupta, Konstantinos Psannis",
          journal: "IGI Global",
          doi: "https://doi.org/10.4018/979-8-3693-8628-6.ch015",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Understanding Cyber Threats in Modern Space Missions",
          authors:
            "Anoop Pant, Sudhakar Kumar, Sunil K. Singh, Harmanjot Singh, Chandra Kumari Subba, Shavi Bansal, Kwok Tai Chui",
          journal: "IGI Global",
          doi: "https://doi.org/10.4018/979-8-3693-7939-4.ch002",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Virtual Economies and Social Structures in the Metaverse",
          authors:
            "Jaiveer Singh, Sudhakar Kumar, Sunil K. Singh, Deependra Singh, Animesh Singh, Varsha Arya, Abhay Ratnaparkhi",
          journal: "IGI Global",
          doi: "https://doi.org/10.4018/979-8-3693-8628-6.ch006",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Virtual Identity and Self-Expression in the Metaverse",
          authors:
            "Aditi Sharma, Sudhakar Kumar, Sunil K. Singh, Shashi Jawla, Varsha Arya, Kwok Tai Chui",
          journal: "IGI Global",
          doi: "https://doi.org/10.4018/979-8-3693-8628-6.ch005",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Communication Systems for Drone Swarms and Remote Operations",
          authors:
            "Shaurya Katna, Sunil K. Singh, Sudhakar Kumar, Divyansh Manro, Amit Chhabra, Sunil Kumar Sharma",
          journal: "IGI Global",
          doi: "https://doi.org/10.4018/979-8-3693-2707-4.ch006",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Drones and Unmanned Aerial Vehicles Automation Using Reinforcement Learning",
          authors:
            "Jaskirat Kaur, Sudhakar Kumar, Sunil K. Singh, Ruchika Thakur, Shavi Bansal, Varsha Arya",
          journal: "IGI Global",
          doi: "https://doi.org/10.4018/979-8-3693-2707-4.ch011",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Enhancing Autonomous System Security With AI and Secure Computation Technologies",
          authors:
            "Tushar Singh, Sudhakar Kumar, Sunil K. Singh, Priyanshu, Brij B. Gupta, Jinsong Wu, Arcangelo Castiglione",
          journal: "IGI Global",
          doi: "https://doi.org/10.4018/979-8-3693-2707-4.ch008",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Multi-Modal Sensor Fusion With CRNNs for Robust Object Detection and Simultaneous Localization and Mapping (SLAM) in Agile Industrial Drones",
          authors:
            "Ujjwal Thakur, Sunil K. Singh, Sudhakar Kumar, Anubhav Singh, Varsha Arya, Kwok Tai Chui",
          journal: "IGI Global",
          doi: "https://doi.org/10.4018/979-8-3693-2707-4.ch012",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Enhancing smart grid reliability through cross-domain optimization of IoT sensor placement and communication links",
          authors:
            "Saket Sarin, Sunil K. Singh, Sudhakar Kumar, Shivam Goyal, Brij B. Gupta, Varsha Arya, Razaz Waheeb Attar, Shavi Bansal, Ahmed Alhomoud",
          journal: "Telecommunication Systems",
          doi: "https://doi.org/10.1007/s11235-024-01235-1",
          type: "Journal",
          impact: "High Impact",
        },
        {
          title:
            "Variance-driven security optimisation in industrial IoT sensors",
          authors:
            "Hardik Gupta, Sunil K. Singh, Sudhakar Kumar, Karan Sharma, Hardeep Saini, Brij B. Gupta, Varsha Arya, Kwok Tai Chui",
          journal: "IET Networks",
          doi: "https://doi.org/10.1049/ntw2.12139",
          type: "Journal",
          impact: "High Impact",
        },
        {
          title:
            "AN IoT Based Smart Healthcare Gadget: Attempt to Promote the Idea of Smart Healthcare System",
          authors:
            "Aishita Sharma, Sunil K. Singh, Soumya Sharma, Sunil Kumar, Kartik Dalal & Anureet Chhabra ",
          journal: "Advances in Intelligent Systems and Computing",
          doi: "https://doi.org/10.1007/978-3-031-40905-9_11",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Application of Green IoT in Digital Oilfields for Achieving Sustainability in the OnG Industry",
          authors:
            "Soumya Sharma, Sunil K. Singh, Sudhakar Kumar, Krish Kathuria, Tarun Vats",
          journal: "Springer",
          doi: "https://doi.org/10.1007/978-3-031-40905-9_13",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Automatic parallelization for multicore architectures: Role, importance, and opportunities",
          authors:
            "Sudhakar Kumar, Sunil K. Singh, Naveen Aggarwal, Shabeg Singh Gill",
          journal:
            "Uncertainty in Computational Intelligence-Based Decision Making",
          doi: "https://doi.org/10.1016/b978-0-443-21475-2.00006-0",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Blockchain Based Election System Using Fingerprint Recognition",
          authors:
            "Uday Madan, Sunil K. Singh, Sudhakar Kumar, Mehak Preet, Akash Sharma, Himanshu Setia",
          journal: "Springer",
          doi: "https://doi.org/10.1007/978-3-031-40905-9_6",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Computational intelligence in decision support: Scope and techniques",
          authors: "Sudhakar Kumar, Sunil K. Singh, Leema Nelson",
          journal: "Elsevier",
          doi: "https://doi.org/10.1016/B978-0-443-21475-2.00019-9",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Enhancing DDoS Attack Detection in SDN with a Stacked Model Framework Utilizing Deep Neural Networks",
          authors:
            "Aishita Sharma, Sunil K. Singh, Sudhakar Kumar, Shin Hung Pan, Brij B. Gupta, Kwok Tai Chui",
          journal:
            "IEEE International Conference on Consumer Electronics (ICCE)",
          doi: "https://doi.org/10.1109/ICCE63647.2025.10929828",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
        {
          title:
            "Geospectra: leveraging quantum-SAR and deep learning for enhanced geolocation in urban environments",
          authors:
            "Saket Sarin, Sunil K. Singh, Sudhakar Kumar & Shivam Goyal ",
          journal: "The Journal of Supercomputing",
          doi: "https://doi.org/10.1007/s11227-024-06619-3",
          type: "Journal",
          impact: "High Impact",
        },
        {
          title:
            "Neoteric Threat Intelligence Ensuring Digital Sovereignty and Trust through ML-Infused Proactive Defense Analytics for NEXT-G and Beyond Ecosystems",
          authors:
            "Sudhakar Kumar, Sunil K. Singh, Rakesh Kumar, Chandra Kumari Subba, Kwok Tai Chui, Brij B. Gupta",
          journal: "Procedia Computer Science",
          doi: "https://doi.org/10.1016/j.procs.2025.02.062",
          type: "Journal",
          impact: "Medium Impact",
        },
        {
          title:
            "Neural Network Architectures for Machine Translation: Enhancing Quality Education Through Improved Access to Multilingual Resources",
          authors:
            "Ayushi, Sudhakar Kumar, Sunil K. Singh, Samar Pratap Singh, Pooja Rai, Kwok Tai Chui, Brij B. Gupta",
          journal: "Springer",
          doi: "https://doi.org/10.1007/978-3-031-88039-1_18",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Secure and cost-effective key management scheme for the Internet of Things-supported WSN",
          authors: "Rakesh Kumar, Sunil K. Singh, D.K. Lobiyal, Sudhakar Kumar",
          journal:
            "Uncertainty in Computational Intelligence-Based Decision Making",
          doi: "https://doi.org/10.1016/b978-0-443-21475-2.00012-6",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Security Enhancement in Consumer Enterprises Using Neural Nets Within the SIEM Framework",
          authors:
            "Saksham Arora, Sudhakar Kumar, Sunil K. Singh, Sahil Garg, Brij B. Gupta, Shavi Bansal, Kwok Tai Chui",
          journal:
            "IEEE International Conference on Consumer Electronics (ICCE)",
          doi: "https://doi.org/10.1109/ICCE63647.2025.10930094",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
         {
          title:
            "Bayesian optimized CNN ensemble for efficient potato blight detection using fuzzy image enhancement",
          authors:
            "Achin Jain, Arun Kumar Dubey, Vincent Shin-Hung Pan, Saoucene Mahfoudh, Turki A Althaqafi, Varsha Arya, Wadee Alhalabi, Sunil K Singh, Vanita Jain, Arvind Panwar, Sudhakar Kumar, Ching-Hsien Hsu, Brij B Gupta",
          journal:
            "Scientific Reports",
          doi: "|https://doi.org/10.1038/s41598-025-15940-7",
          type: "Journal",
          impact: "Medium Impact",
        },
         {
          title:
            "Quantum-Resistant Cryptographic Primitives Using Modular Hash Learning Algorithms for Enhanced SCADA System Security",
          authors:
            "Sunil K Singh, Sudhakar Kumar, Manraj Singh, Savita Gupta, Razaz Waheeb Attar, Varsha Arya, Ahmed Alhomoud, Brij B Gupta",
          journal:
            "Computers, Materials & Continua(CMC)",
          doi: "|https://doi.org/10.1007/978-981-96-4170-3",
          type: "Journal",
          impact: "Medium Impact",
        },
        {
          title:
            "Management Using NLP and Deep Learning",
          authors:
            "Pooja Rai, Sudhakar Kumar, Sunil K. Singh, Harkiran Kaur, Varsha Simran JaggiArya, Brij B Gupta",
          journal:
            "Beyond Artificial Intelligence, AICTA 2023",
          url: "https://books.google.com/books?hl=en&lr=&id=vLJ5EQAAQBAJ&oi=fnd&pg=PA293&dq=info:ae7aQg5AP40J:scholar.google.com&ots=H0SBDYPMWm&sig=YyAc8JblRSQevkzSAkaMYyjBFEM",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
        {
          title:
            "Cardiovascular Sound Classification Using Neural Architectures and Deep Learning for Advancing Cardiac Wellness",
          authors:
            "Deepak Mahto, Sudhakar Kumar, Sunil K Singh, Amit Chhabra, Irfan Ahmad Khan, Varsha Arya, Wadee Alhalabi, Brij B Gupta, Bassma Saleh Alsulami",
          journal:
            "CMES-Computer Modeling in Engineering and Sciences",
          doi: "|http://dx.doi.org/10.32604/cmes.2025.063427",
          type: "Journal",
          impact: "Medium Impact",
        },
        {
          title:
            "Hierarchical Parallel Computing for Machine Learning Data Processing Using Hpcc's Enterprise Control Language",
          authors:
            "Sudhakar Kumar, Sunil K Singh, Harshit Vashisht, Rahesh Kumar, Chandra Kumari Subba, Kwok Tai Chui, Varsha Arya, Brij B Gupta",
          journal:
            "2025 International Conference on Smart Computing, IoT and Machine Learning (SIML)",
          doi: "|https://doi.org/10.1109/SIML65326.2025.11081031",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
        
        {
          title:
            "DiVATM: Unsupervised Neural Topic Modeling using Disentangled Variational Autoencoders",
          authors:
            "Sudhakar Kumar, Sunil K Singh, Saket Sarin, Arun Dubey, Mukesh Kumar, Kwok Tai Chui, Brij B Gupta",
          journal:
            "2025 International Conference on Smart Computing, IoT and Machine Learning (SIML)",
          doi: "|https://doi.org/10.1109/SIML65326.2025.11081060",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
           {
          title:
            "FPA-based weighted average ensemble of deep learning models for classification of lung cancer using CT scan images",
          authors:
            "Liang Zhou, Achin Jain, Arun Kumar Dubey, Sunil K Singh, Neha Gupta, Arvind Panwar, Sudhakar Kumar, Turki A Althaqafi, Varsha Arya, Wadee Alhalabi, Brij B Gupta",
          journal:
            "Scientific Reports",
          doi: "|https://doi.org/10.1038/s41598-025-02015-w",
          type: "Journal",
          impact: "Medium Impact",
        },
           {
          title:
            "LIVE Air Quality Measurement Using Transit Search Optimization tunned DnCNN without human intervention from the air pollution board",
          authors:
            "Neelam Yadav, Sunil K Singh, Dinesh Sharma",
          journal:
            "Indian Journal of Environmental Protection",
          doi: "|",
          type: "Journal",
          impact: "Medium Impact",
        },
           {
          title:
            "Advanced Web Traffic Modelling and Forecasting with a Hybrid Predictive Approach",
          authors:
            "Ujjwal Thakur, Sunil K Singh, Sudhakar Kumar, Harmanjot Singh, Varsha Arya, Brij B Gupta, Razaz Waheeb Attar, Ahmed Alhomoud, Kwok Tai Chui",
          journal:
            "Journal of Web Engineering",
          doi: "|https://doi.org/10.13052/jwe1540-9589.2434",
          type: "Journal",
          impact: "Medium Impact",
        },
           {
          title:
            "Advanced Cyber Defense for Space Missions and Operations: Concepts and Applications: Concepts and Applications",
          authors:
            "Brij B. Gupta, AWH Ip, SK Singh",
          journal:
            "IGI Global",
          doi: "|https://doi.org/10.4018/979-8-3693-7939-4.ch001",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
        {
          title:
            "Roadside Tree Image-Based Air Quality Estimation of Gurugram City, Haryana, India",
          authors:
            "Neelam Yadav, Sunil K Singh, Dinesh Sharma",
          journal:
            "2025 3rd International Conference on Communication, Security, and Artificial Intelligence (ICCSAI)",
          doi: "|https://doi.org/10.1109/ICCSAI64074.2025.11064176",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
        {
          title:
            "A Novel Deep Learning Approach for Recognition of Hindi Vowels of Indian Sign Language",
          authors:
            "Sudhakar Kumar, Sunil K Singh, Harshit Vashisht, Rahesh Kumar, Chandra Kumari Subba, Kwok Tai Chui, Varsha Arya, Brij B Gupta",
          journal:
            "International Conference on Systems, Control and Automation (ICSCA 2023)",
          url: "https://link.springer.com/chapter/10.1007/978-981-97-7384-8_40",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
        {
          title:
            "Sign Language",
          authors:
            "Animesh Singh, SK Singh, Ajay Mittal",
          journal:
            "Proceedings of the International Conference on Systems, Control and Automation: ICSCA 2023",
          doi: "|https://doi.org/10.1007/978-981-97-7384-8_1",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
        {
          title:
            "Time Series-Based Framework for Global Temperature Forecasting Using Fb-Prophet",
          authors:
            "Anureet Chhabra, Vandana Sharma, Akash Sharma, Sunil K Singh",
          journal:
            "International Conference on Smart Systems and Advanced Computing (SysCom 2022)",
          url: "https://link.springer.com/chapter/10.1007/978-3-031-40905-9_16",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
         {
          title:
            "Enhancing ITS with Agile Optimization for Dynamic Ride-Sharing Mobility",
          authors:
            "Anmol Jaiswal, Sudhakar Kumar, Sunil K Singh, Ayushi Manhas, Brij B Gupta, Ching-Hsien Hsu, Kwok Tai Chui",
          journal:
            "International Symposium on Pervasive Systems, Algorithms and Networks",
          url: "https://link.springer.com/chapter/10.1007/978-981-96-6294-4_2",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
         {
          title:
            "Optimizing Reasoning Engines Using TF-IDF Vectorization Approach for Enhanced Toxicity Classification",
          authors:
            "Manya Girdhar, Sudhakar Kumar, Sunil K Singh, Rashmi Pal, Varsha Arya, Razaz Waheeb Attar, Brij B Gupta, Kwak-Toi Chui",
          journal:
            "International Symposium on Pervasive Systems, Algorithms and Networks",
          url: "https://link.springer.com/chapter/10.1007/978-981-96-6294-4_10",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
         {
          title:
            "Foundations of Phishing Defense: Comprehensive Strategies for Digital Asset Protection",
          authors:
            "Raj Kanwar, Sumit Bawa, Sunil K Singh, Sudhakar Kumar, Chandra Kumari Subba, Varsha Arya, Abhay Ratnaparkhi",
          journal:
            "Critical Phishing Defense Strategies and Digital Asset Protection",
          doi: "|https://doi.org/10.4018/979-8-3693-8784-9.ch001",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
         {
          title:
            "Cyber Synergy: Unlocking the Potential Use of Biometric Systems and Multimedia Forensics in Cybercrime Investigations",
          authors:
            "Ruchika Thakur, Sudhakar Kumar, Sunil K Singh, Krishana Singla, Sunil Kr Sharma, Varsha Arya",
          journal:"Digital Forensics and Cyber Crime Investigation",
          doi: "|https://doi.org/10.1007/978-981-97-7384-8_1",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Chaotic Watermarking for Tamper Detection: Enhancing Robustness and Security in Digital Multimedia",
          authors:
            "Harkiran Kaur, Sunil K Singh, Amit Chhabra, Vanshika Bhardwaj, Ritika Saini, Sudhakar Kumar, Varsha Arya",
          journal:
            "Digital Forensics and Cyber Crime Investigation",
          url: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003207573-6/chaotic-watermarking-tamper-detection-harkiran-kaur-sunil-singh-amit-chhabra-vanshika-bhardwaj-ritika-saini-sudhakar-kumar-varsha-arya",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Detailed Evolution Process of CNN-Based Intrusion Detection in the Context of Network Security",
          authors:
            "Amanpreet Singh, Sunil K Singh, Amit Chhabra, Gurmehar Singh, Sudhakar Kumar, Varsha Arya",
          journal:
            "Digital Forensics and Cyber Crime Investigation",
          url: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003207573-4/detailed-evolution-process-cnn-based-intrusion-detection-context-network-security-amanpreet-singh-sunil-singh-amit-chhabra-gurmehar-singh-yuvraj-sudhakar-kumar-varsha-arya",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Blockchain-Based Data Security in Smart Cities: Ensuring Data Integrity and Trustworthiness",
          authors:
            "Sunil K Singh, Sudhakar Kumar, Sahil Garg, Saksham Arora, Sunil Kr Sharma, Varsha Arya, Kwok Tai Chui",
          journal:
            "Digital Forensics and Cyber Crime Investigation",
          url: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003207573-2/blockchain-based-data-security-smart-cities-priyanshu-sunil-singh-sudhakar-kumar-sahil-garg-saksham-arora-sunil-kr-sharma-varsha-arya-kwok-tai-chui",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
      ],
        2024: [
        {
          title:
            "Sustainable and intelligent time-series models for epidemic disease forecasting and analysis",
          authors:
            "A Chhabra, SK Singh, A Sharma, S Kumar, BB Gupta, V Arya, KT Chui",
          journal: "Sustainable Technology and Entrepreneurship 3 (2), 100064",
          doi: "https://doi.org/10.1016/j.stae.2023.100064",
          type: "Journal",
          impact: "Medium Impact",
        },
        {
          title:
            "Ensemble deep learning and EfficientNet for accurate diagnosis of diabetic retinopathy",
          authors:
            "L Arora, SK Singh, S Kumar, H Gupta, W Alhalabi, V Arya, S Bansal, ...",
          journal: "Scientific Reports 14 (1), 30554",
          doi: "https://doi.org/10.1038/s41598-024-81132-4",
          type: "Journal",
          impact: "High Impact",
        },
         {
          title:
            "Neural Network Architectures for Machine Translation: Enhancing Quality Education Through Improved Access to Multilingual Resources",
          authors:
            "Ayushi, Sudhakar Kumar, Sunil K Singh, Samar Pratap Singh, Pooja Rai, Kwok Tai Chui, Brij B Gupta",
          journal: "International Conference on Soft Computing and its Engineering Applications",
          url: "https://link.springer.com/chapter/10.1007/978-3-031-88039-1_18",
          type: "Conference Paper",
          impact: "High Impact",
        },
        {
          title: "IoT-enabled smart farming with Industry 5.0",
          authors: "A Sharma, SK Singh, S Kumar, R Thakur, BB Gupta, V Arya",
          journal: "Journal of High Speed Networks 30 (3), 477-496",
          doi: "https://doi.org/10.3233/JHS-230258",
          type: "Journal",
          impact: "Medium Impact",
        },
        {
          title:
            "Security Metrics and Authentication-based RouTing (SMART) Protocol for Vehicular IoT Networks",
          authors: "R Kumar, SK Singh, DK Lobiyal, S Kumar, S Jawla",
          journal: "SN Computer Science 5 (2), 236",
          doi: "https://doi.org/10.1007/s42979-023-02566-7",
          type: "Journal",
          impact: "Medium Impact",
        },
        {
          title:
            "UPSRVNet: Ultralightweight, Privacy preserved, and Secure RFID-based authentication protocol for VIoT Networks",
          authors: "R Kumar, SK Singh, DK Lobiyal",
          journal: "The Journal of Supercomputing 80 (1), 942-969",
          url: "https://openurl.ebsco.com/EPDB%3Agcd%3A5%3A25303797/detailv2?sid=ebsco%3Aplink%3Ascholar&id=ebsco%3Agcd%3A174659417&crl=c&link_origin=scholar.google.com",
          type: "Journal",
          impact: "High Impact",
        },
        {
          title:
            "Revolutionizing Healthcare Systems: Synergistic Multimodal Ensemble Learning & Knowledge Transfer for Lung Cancer Delineation & Taxonomy",
          authors:
            "A Sharma, SK Singh, S Kumar, M Preet, BB Gupta, V Arya, KT Chui",
          journal:
            "2024 IEEE International Conference on Consumer Electronics (ICCE), 1-6",
          doi: "https://doi.org/10.1109/ICCE59016.2024.10444476",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
        {
          title:
            "Navigating the landscape: Safeguarding privacy and security in the era of ambient intelligence within healthcare settings",
          authors:
            "T Vats, S Kumar, SK Singh, U Madan, M Preet, V Arya, R Bansal, ...",
          journal: "Cyber Security and Applications 2, 100046",
          doi: "https://doi.org/10.1016/j.csa.2024.100046",
          type: "Journal",
          impact: "High Impact",
        },
        {
          title:
            "Optimal Revenue Analysis of the Stubborn Mining Based on Markov Decision Process",
          authors: "Y Zhang, M Liu, J Guo, Z Wang, Y Wang, T Liang, SK Singh",
          journal:
            "International Conference on Machine Learning for Cyber Security, 299-308",
          url: "https://link.springer.com/chapter/10.1007/978-3-031-20099-1_25",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
        {
          title:
            "Communication structure for Vehicular Internet of Things (VIoTs) and review for vehicular networks",
          authors: "R Kumar, SK Singh, DK Lobiyal",
          journal: "Automation and Computation, 300-310",
          url: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003333500-34/communication-structure-vehicular-internet-things-viots-review-vehicular-networks-rakesh-kumar-sunil-singh-lobiyal",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Unleashing the Power of Multi-Agent Reinforcement Learning for Algorithmic Trading in the Digital Financial Frontier and Enterprise Information Systems.",
          authors:
            "S Sarin, SK Singh, S Kumar, S Goyal, BB Gupta, W Alhalabi, V Arya",
          journal: "Computers, Materials & Continua 80 (2)",
          url: "https://search.ebscohost.com/login.aspx?direct=true&profile=ehost&scope=site&authtype=crawler&jrnl=15462218&AN=179281361&h=ug3f0043P1UgXQY5SAz0wzNsAx8V4I76oVObEQWScn5aXUL4Mja0pHeJfkP8QqUDgb%2BBRIEP7iSYOEEYqnendA%3D%3D&crl=c",
          type: "Journal",
          impact: "Medium Impact",
        },
        {
          title:
            "SEIR‐driven semantic integration framework: Internet of Things‐enhanced epidemiological surveillance in COVID‐19 outbreaks using recurrent neural networks",
          authors:
            "S Sarin, SK Singh, S Kumar, S Goyal, BB Gupta, V Arya, KT Chui",
          journal:
            "IET Cyber‐Physical Systems: Theory & Applications 9 (2), 135-149",
          url: "https://doi.org/10.1049/cps2.12091",
          type: "Journal",
          impact: "Medium Impact",
        },
        {
          title:
            "Intelligent FaultEdge: AI-Driven Fault-Tolerant Edge Framework for Smart Grid Monitoring in IoT",
          authors:
            "T Singh, S Kumar, SK Singh, V Chilkoti, S Bansal, KT Chui, BB Gupta",
          journal:
            "2024 IEEE 12th International Conference on Intelligent Systems (IS), 1-6",
          url: "https://doi.org/10.1109/IS61756.2024.10705247",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
        {
          title:
            "Adaptive Stochastic Fault Tolerance for Self-Healing P2P Networks",
          authors:
            "S Kumar, S Goyal, SK Singh, SK Sharma, RW Attar, V Arya, BB Gupta",
          journal: "",
          url: "https://assets-eu.researchsquare.com/files/rs-4015512/v1_covered_9a4a3b21-fea3-42f5-9165-963ad5638f11.pdf",
          type: "Journal",
          impact: "Medium Impact",
        },
        {
          title:
            "Applying Visual Cryptography to Decrypt Data Using Human Senses",
          authors:
            "D Rajput, SK Singh, S Kumar, D Manro, S Bansal, V Arya, KT Chui",
          journal: "Innovations in Modern Cryptography, 376-404",
          url: "https://www.igi-global.com/chapter/applying-visual-cryptography-to-decrypt-data-using-human-senses/354048",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Metaversal 6G: Deciphering Complex Requirements and Multivariate KPIs in High-Performance Computing",
          authors: "S Kumar, SK Singh, V Chilkoti, V Arya, KT Chui, BB Gupta",
          journal: "Procedia Computer Science 238, 914-919",
          doi: "https://doi.org/10.1016/j.procs.2024.06.112",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
        {
          title:
            "A novel Cumulative Indicator score using Indicator averaging for optimizing local business websites of enterprise systems",
          authors:
            "SK Singh, S Gupta, S Kumar, BB Gupta, W Alhalabi, V Arya, J Zhang",
          journal: "Enterprise Information Systems 18 (2), 2301658",
          doi: "https://doi.org/10.1080/17517575.2023.2301658",
          type: "Journal",
          impact: "Medium Impact",
        },
        {
          title:
            "SentinelMet: Enhancing Metaverse Security through Deep Learning Techniques in 6G",
          authors: "D Rajput, SK Singh, S Kumar, H Vashisht, KT Chui, BB Gupta",
          journal:
            "2024 IEEE International Conference on Advanced Networks and Telecommunications Systems",
          doi: "https://doi.org/10.1109/ANTS63515.2024.10898831",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
        {
          title:
            "Advanced Evaluation of Propagation Models and Routing Protocols in Vehicular Ad-Hoc Networks",
          authors: "A Jaiswal, SK Singh, S Kumar, BB Gupta, KT Chui",
          journal:
            "2024 IEEE Cyber Science and Technology Congress (CyberSciTech), 406-411",
          doi: "https://doi.org/10.1109/CyberSciTech64112.2024.00070",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
        {
          title:
            "Integrating Machine Learning into Cardiovascular Disease Risk Prediction: A Comprehensive Analysis of Cholesterol, Heart Rate, and Gender Impact on Disease Prevalence",
          authors:
            "A Rahim, A Chhabra, Manya, SK Singh, S Kumar, H Gupta, K Sharma",
          journal:
            "International Conference on Computing and Communication Networks, 285-296",
          doi: "https://doi.org/10.1007/978-981-96-3250-3_23",
          type: "Conference Paper",
          impact: "Low Impact",
        },
        {
          title:
            "Improving Automated Text Editing and Understanding with Advanced Named Entity Recognition Techniques",
          authors: "V Chilkoti, S Kumar, SK Singh, D Goyal, KT Chui, BB Gupta",
          journal:
            "2024 IEEE Technology & Engineering Management Conference-Asia Pacific",
          doi: "https://doi.org/10.1109/TEMSCON-ASPAC62480.2024.11025005",
          type: "Conference Paper",
          impact: "Low Impact",
        },
        {
          title:
            "Gestational Diabetes Prediction using Machine Learning for Consumer Electronics Healthcare",
          authors: "S Garg, S Kumar, SK Singh, S Kumar, V Arya, BB Gupta",
          journal:
            "2024 IEEE International Symposium on Consumer Technology (ISCT), 243-249",
          doi: "https://doi.org/10.1109/ISCT62336.2024.10791210",
          type: "Conference Paper",
          impact: "Low Impact",
        },
        {
          title:
            "To predict the deposition of air pollutants on trees Leaf in high traffic area using Machine Learning Algorithm",
          authors: "N Yadav, SK Singh, D Sharma",
          journal:
            "2024 International Conference on Communication, Control, and Intelligent Systems",
          doi: "https://doi.org/10.1109/CCIS63231.2024.10931971",
          type: "Conference Paper",
          impact: "Low Impact",
        },
        {
          title:
            "Quantum-Resilient Cryptographic Primitives: An Innovative Modular Hash Learning Algorithm to Enhanced Security in the Quantum Era",
          authors: "Manish Singh, SK Singh, S Kumar, M Preet, V Arya, BB Gupta",
          journal: "",
          doi: "https://doi.org/10.21203/rs.3.rs-4052058/v1",
          type: "Article",
          impact: "Low Impact",
        },
        {
          title:
            "Zero Knowledge Proofs and Their Applications in Cryptography: Advancements, Challenges",
          authors: "SK Singh, BB Gupta, N Nedjah, A Castiglione",
          journal: "Innovations in Modern Cryptography",
          url: "https://www.igi-global.com/chapter/zero-knowledge-proofs-and-their-applications-in-cryptography/354035",
          type: "Book Chapter",
          impact: "Low Impact",
        },
        {
          title:
            "Deep Learning Model for Digital Forensics Face Sketch Synthesis",
          authors: "E Badwa, SK Singh, S Kumar, V Chilkoti, V Arya, KT Chui",
          journal: "Digital Forensics and Cyber Crime Investigation, 168-195",
          url: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003207573-9/deep-learning-model-digital-forensics-face-sketch-synthesis-eshita-badwa-sunil-singh-sudhakar-kumar-ayushi-vanshika-chilkoti-varsha-arya-kwok-tai-chui",
          type: "Book Chapter",
          impact: "Low Impact",
        },
        {
          title:
            "Intelligent Task Offloading in IoT-Driven Digital Twin Systems via Hybrid Federated and Reinforcement Learning",
          authors: "Shivam Goyal, Sudhakar Kumar, Sunil K Singh, Brij B Gupta, Varsha Arya, Kwok Tai Chui",
          journal: "2024 IEEE Cyber Science and Technology Congress (CyberSciTech)",
          doi: "https://doi.org/10.1109/CyberSciTech64112.2024.00069",
          type: "Book Chapter",
          impact: "Low Impact",
        },
         {
          title:
            "Synergistic application of neuro-fuzzy mechanisms in advanced neural networks for real-time stream data flux mitigation",
          authors: "Shivam Goyal, Sudhakar Kumar, Sunil K Singh, Saket Sarin, Priyanshu, Brij B Gupta, Varsha Arya, Wadee Alhalabi, Francesco Colace",
          journal: "Soft Computing",
          url: "https://link.springer.com/article/10.1007/s00500-024-09938-y",
          type: "Book Chapter",
          impact: "Low Impact",
        },
        {
          title:
            "Transformative Approach for Prediction of Lung Disease Using Lung X-ray Images",
          authors: "Shrey Mehra, Sunil K Singh, Sudhakar Kumar, Harshit Dubey, Varsha Arya, Brij B Gupta",
          journal: "Soft Computing",
          doi: "https://doi.org/10.21203/rs.3.rs-3991029/v1",
          type: "Book Chapter",
          impact: "Low Impact",
        },
        {
          title:
            "Towards Sustainable Consumer Electronics: DL-based SoH and RUL Prediction for E-Waste Reduction",
          authors: "Anureet Chhabra, Sunil K Singh, Akash Sharma, Sudhakar Kumar, Brij B Gupta, Varsha Arya, Kwok Tai Chui",
          journal: "2024 IEEE International Conference on Consumer Electronics (ICCE)",
          doi: "https://doi.org/10.1109/ICCE59016.2024.10444466",
          type: "Book Chapter",
          impact: "Low Impact",
        },
         {
          title:
            "Homomorphic Encryption in Smart City Applications for Balancing Privacy and Utility",
          authors: "Sudhakar Kumar, Sunil K Singh, Brij B Gupta, Konstantinos Psannis, Jinsong Wu",
          journal: "Innovations in Modern Cryptography",
          url: "https://www.igi-global.com/chapter/homomorphic-encryption-in-smart-city-applications-for-balancing-privacy-and-utility/354042",
          type: "Book Chapter",
          impact: "Low Impact",
        },
         {
          title:
            "Next Gen Security With Quantum-Safe Cryptography",
          authors: "Nipun Singh, Sunil K Singh, Sudhakar Kumar, Yash Rawat, Varsha Arya, Ritika Bansal, Kwok Tai Chui",
          journal: "Innovations in Modern Cryptography",
          url: "https://www.igi-global.com/chapter/next-gen-security-with-quantum-safe-cryptography/354038",
          type: "Book Chapter",
          impact: "Low Impact",
        },
         {
          title:
            "Securing the road ahead: Machine learning-driven DDoS attack detection in VANET cloud environments",
          authors: "Himanshu Setia, Amit Chhabra, Sunil K Singh, Sudhakar Kumar, Sarita Sharma, Varsha Arya, Brij B Gupta, Jinsong Wu",
          journal: "Cyber Security and Applications",
          doi: "https://doi.org/10.1016/j.csa.2024.100037",
          type: "Book Chapter",
          impact: "Low Impact",
        },
      ],
      2023: [
        {
          title:
            "A comprehensive survey on deep learning-based methods for anomaly detection in IoT networks",
          authors: "SK Singh, S Kumar, BB Gupta, V Arya, KT Chui",
          journal: "Computer Networks",
          doi: "",
          type: "Book Chapter",
          impact: "High Impact",
        },
        {
          title:
            "Edge intelligence for autonomous vehicles: architectures, challenges, and future directions",
          authors: "S Kumar, SK Singh, S Goyal, R W Attar, V Arya, BB Gupta",
          journal: "Future Generation Computer Systems",
          doi: "",
          type: "Journal",
          impact: "High Impact",
        },
        {
          title:
            "Federated learning for industrial IoT security: privacy-preserving analytics and intrusion detection",
          authors: "R Kumar, SK Singh, DK Lobiyal, S Kumar",
          journal: "IEEE Internet of Things Journal",
          doi: "",
          type: "Journal",
          impact: "High Impact",
        },
        {
          title:
            "Blockchain-enabled access control and trust management in vehicular ad-hoc networks",
          authors: "R Kumar, SK Singh, DK Lobiyal",
          journal: "IET Intelligent Transport Systems",
          doi: "",
          type: "Journal",
          impact: "High Impact",
        },
        {
          title:
            "Explainable AI for malware detection: interpretable deep models and evaluation",
          authors: "A Sharma, SK Singh, S Kumar, H Gupta, V Arya",
          journal: "Applied Intelligence",
          doi: "",
          type: "Book Chapter",
          impact: "High Impact",
        },
        {
          title:
            "Smart grid intrusion detection using hybrid deep learning on edge devices",
          authors: "S Sarin, SK Singh, S Kumar, S Goyal, BB Gupta, V Arya",
          journal: "Electric Power Systems Research",
          doi: "",
          type: "Book Chapter",
          impact: "High Impact",
        },
        {
          title:
            "Lightweight authentication protocol for RFID in vehicular IoT",
          authors: "R Kumar, SK Singh, DK Lobiyal",
          journal: "The Journal of Supercomputing",
          doi: "",
          type: "Journal",
          impact: "High Impact",
        },
        {
          title:
            "Quantum-safe cryptography for next-generation networks: survey and roadmap",
          authors: "M Singh, SK Singh, S Kumar, V Arya, BB Gupta",
          journal: "Security and Communication Networks",
          url: "https://www.igi-global.com/chapter/next-gen-security-with-quantum-safe-cryptography/354038",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "AI-driven anomaly detection for 6G-enabled Industry 5.0 systems",
          authors: "S Kumar, SK Singh, V Chilkoti, V Arya, KT Chui, BB Gupta",
          journal: "Procedia Computer Science",
          doi: "",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
        {
          title:
            "Privacy-preserving medical image analysis using federated learning and differential privacy",
          authors: "L Arora, SK Singh, S Kumar, H Gupta, V Arya",
          journal: "Scientific Reports",
          doi: "",
          type: "Book Chapter",
          impact: "High Impact",
        },
        {
          title:
            "Cyber-physical security in smart manufacturing: attacks, defenses, and resilience",
          authors: "A Chhabra, SK Singh, A Sharma, S Kumar, BB Gupta, KT Chui",
          journal: "Journal of Industrial Information Integration",
          doi: "",
          type: "Journal",
          impact: "High Impact",
        },
        {
          title:
            "Deep reinforcement learning for resource allocation in vehicular edge computing",
          authors: "S Goyal, SK Singh, S Kumar, SK Sharma",
          journal: "Computer Communications",
          doi: "",
          type: "Book Chapter",
          impact: "High Impact",
        },
        {
          title:
            "Secure key management for IoT-supported wireless sensor networks",
          authors: "R Kumar, SK Singh, DK Lobiyal, S Kumar",
          journal: "Computer Standards & Interfaces",
          doi: "",
          type: "Book Chapter",
          impact: "High Impact",
        },
        {
          title:
            "Adversarial robustness in intrusion detection systems: challenges and solutions",
          authors: "H Gupta, SK Singh, S Kumar, BB Gupta",
          journal: "Information Sciences",
          doi: "",
          type: "Book Chapter",
          impact: "High Impact",
        },
        {
          title:
            "Privacy-aware data sharing for smart healthcare: frameworks and applications",
          authors: "U Madan, SK Singh, M Preet, S Kumar, V Arya",
          journal: "IEEE Access",
          doi: "",
          type: "Conference Paper",
          impact: "High Impact",
        },
        {
          title:
            "A novel hybrid model integrating MFCC and acoustic parameters for voice disorder detection",
          authors: "Kumar, S. et al.",
          journal: "Scientific Reports",
          doi: "https://doi.org/10.1038/s41598-023-49869-6",
          type: "Journal",
          impact: "High Impact",
        },
        {
          title:
            "Hyperdimensional Consumer Pattern Analysis with Quantum Neural Architectures using Non-Hermitian Operators",
          authors: "Kumar, S. et al.",
          journal: "ACM Conference",
          doi: "https://doi.org/10.1145/3647444.3652458",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
        {
          title:
            "Exploring Advanced Neural Networks For Cross-Corpus Fake News Detection",
          authors: "Kumar, S. et al.",
          journal: "ACM Conference",
          doi: "https://doi.org/10.1145/3647444.3652457",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
        {
          title:
            "Speculative Parallelism on Multicore Chip Architecture Strengthen Green Computing Concept: A Survey",
          authors: "Kumar, S. et al.",
          journal: "Advanced Computer Science Applications",
          doi: "https://doi.org/10.1007/s11042-023-16922-5",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Fuzzy Based Clustering of Consumers Big Data in Industrial Applications",
          authors: "Kumar, S. et al.",
          journal: "IEEE ICCE",
          doi: "https://doi.org/10.1109/ICCE56470.2023.10043451",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
        {
          title:
            "A Novel Transfer Learning-Based Model for Ultrasound Breast Cancer Image Classification",
          authors: "Kumar, S. et al.",
          journal: "Springer",
          doi: "https://doi.org/10.1007/978-981-19-9819-5_37",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "A Novel Deep Federated Learning-Based Model to Enhance Privacy in Critical Infrastructure Systems",
          authors: "Kumar, S. et al.",
          journal:
            "International Journal of Software Science and Computational Intelligence",
          url: "https://www.igi-global.com/article/a-novel-deep-federated-learning-based-model-to-enhance-privacy-in-critical-infrastructure-systems/334711",
          type: "Journal",
          impact: "High Impact",
        },
        {
          title: "Pushing the Boundaries of Mortality Prediction: Advancing High-Risk Sepsis-III Patient Care Through Cutting-Edge Deep Learning Techniques",
          authors: "D Mahto, SK Singh, S Kumar, Manya, Rashmi, V Arya, KT Chui, BB Gupta",
          journal: "International Conference On Artificial Intelligence, Computing, IOT and Data",
          doi: "https://doi.org/10.1007/978-981-96-4170-3_62",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
        {
          title: "Enhancing Review Authenticity: A Linguistic and Behavioral Approach for Detecting Deceptive Online Reviews Using Machine Learning Models",
          authors: "IS Billing, S Kumar, SK Singh, MS Gill, BB Gupta, V Arya",
          journal: "International Conference On Artificial Intelligence, Computing, IOT and Data",
          doi: "https://doi.org/10.1007/978-981-96-4170-3_63",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
        {
          title: "Evaluating the Sustainable COVID-19 Vaccination Framework of India Using Recurrent Neural Networks",
          authors: "A Gupta, SK Singh, BB Gupta, M Chopra, SS Gill",
          journal: "Wireless Personal Communications 133 (1), 73-91",
          doi: "https://doi.org/10.1007/s11277-023-10751-3",
          type: "Journal",
          impact: "Medium Impact",
        },
        {
          title: "Explainable context-aware IoT framework using human digital twin for healthcare",
          authors: "T Vats, SK Singh, S Kumar, BB Gupta, SS Gill, V Arya, W Alhalabi",
          journal: "Multimedia Tools and Applications, 1-25",
          doi: "https://doi.org/10.1007/s11042-023-16922-5",
          type: "Journal",
          impact: "Medium Impact",
        },
        {
          title: "Impact of Artificial Intelligence and the Internet of Things in Modern Times and Hereafter: An Investigative Analysis",
          authors: "A Gupta, SK Singh, M Chopra",
          journal: "Advanced Computer Science Applications, 157-173",
          url: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003369066-18/performance-evaluation-multiband-embroidered-fractal-antenna-human-body-shuruti-gite-mansi-subhedar?context=ubx",
          type: "Book Chapter",
          impact: "Low Impact",
        },
        {
          title: "Forecasting Air Pollution for Environment and Good Health Using Artificial Intelligence",
          authors: "N Yadav, SK Singh, D Sharma",
          journal: "2023 3rd International Conference on Innovative Sustainable Computational",
          doi: "https://doi.org/10.1109/CISCT57197.2023.10351334",
          type: "Conference Paper",
          impact: "Low Impact",
        },
        {
          title: "Forging Faces: Exploring the Generation of Synthetic Identities using GANs",
          authors: "S Sarin, SK Singh, S Kumar, S Goyal, BB Gupta, V Arya, KT Chui",
          journal: "2023 IEEE 13th International Conference on Consumer Electronics-Berlin (ICCE",
          doi: "https://doi.org/10.1109/ICCE-Berlin58801.2023.10649659",
          type: "Conference Paper",
          impact: "Low Impact",
        },
        {
          title: "Routing of Vehicular IoT Networks based on various routing Metrics, Characteristics, and Properties",
          authors: "R Kumar, SK Sinngh, DK Lobiyal",
          journal: "2023 International Conference on Computational Intelligence, Communication",
          doi: "https://doi.org/10.1109/CICTN57981.2023.10140741",
          type: "Conference Paper",
          impact: "Low Impact",
        },
        {
          title: "Sustainable Data Dependency Resolution Architectural Framework to Achieve Energy Efficiency Using Speculative Parallelization",
          authors: "S Kumar, SK Singh, N Aggarwal",
          journal: "International Conference on Innovative Sustainable Computational",
          url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=EDpdqjwAAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=EDpdqjwAAAAJ:b0M2c_1WBrUC",
          type: "Conference Paper",
          impact: "Low Impact",
        },
        {
          title: "OPTUNA—Driven Soft Computing Approach for Early Diagnosis of Diabetes Mellitus Using ANN",
          authors: "Tarun Vats, Sunil K Singh, Sudhakar Kumar, Mehak Preet, Aishita Sharma, Shivam Goyal, Priyanshu, Brij B Gupta, Priyanka Chaurasia",
          journal: "International conference on soft computing for problem-solving",
          url: "https://link.springer.com/chapter/10.1007/978-981-97-3292-0_25",
          type: "Conference Paper",
          impact: "Low Impact",
        },
        {
          title: "FuzzyBack—A Hybrid Neuro-Fuzzy Ensemble for Concept Drift Adaptation in Stream Mining Using Neural Network",
          authors: "TSaket Sarin, Sunil K Singh, Sudhakar Kumar, Utkarsh Chauhan, Shivam Goyal, Tushar Singh, Priyanshu, Brij B Gupta, Francesco Colace",
          journal: "International conference on soft computing for problem-solving",
          url: "https://link.springer.com/chapter/10.1007/978-981-97-3292-0_28",
          type: "Conference Paper",
          impact: "Low Impact",
        },
      ],
      2022: [
        {
          title:
            "Analysis & Prognosis of Sustainable Development Goals using Big Data-based Approach during COVID-19 Pandemic",
          authors:
            "M. Chopra, Sunil K. Singh, A. Gupta, K. Aggarwal, B. Gupta, F. Colace",
          journal: "Sustainable Technology and Entrepreneurship",
          doi: "https://doi.org/10.1016/j.stae.2022.100012",
          type: "Journal",
          impact: "Medium Impact",
        },
        {
          title:
            "Deep Learning in Robotics for Strengthening Industry 4.0: Opportunities, Challenges and Future Directions",
          authors:
            "K. Aggarwal, Sunil K. Singh, M. Chopra, S. Kumar, F. Colace",
          journal:
            "Robotics and AI for Cybersecurity and Critical Infrastructure in Smart ...",
          doi: "https://doi.org/10.1007/978-3-030-96737-6_1",
          type: "Book Chapter",
          impact: "Low Impact",
        },
        {
          title:
            "Efficient Loop Unrolling Factor Prediction Algorithm using Machine Learning Models",
          authors: "I. Singh, Sunil K. Singh, R. Singh, S. Kumar",
          journal: "2022 INCET, 1–8",
          doi: "https://doi.org/10.1109/INCET54531.2022.9825092",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
        {
          title:
            "Mobile Cloud Computing and Sustainable Development: Opportunities, Challenges, and Future Directions",
          authors:
            "F. J. G. Peñalvo, A. Sharma, A. Chhabra, Sunil K. Singh, S. Kumar, V. Arya, ...",
          journal:
            "International Journal of Cloud Applications and Computing 12(1), 1–20",
          url: "https://www.igi-global.com/article/mobile-cloud-computing-and-sustainable-development/312583",
          type: "Journal",
          impact: "Medium Impact",
        },
        {
          title:
            "Role of Social Media in the COVID-19 Pandemic: A Literature Review",
          authors: "K. Aggarwal, Sunil K. Singh, M. Chopra, S. Kumar",
          journal:
            "Data Mining Approaches for Big Data and Sentiment Analysis in Social Media ...",
          url: "https://www.igi-global.com/chapter/role-of-social-media-in-the-covid-19-pandemic/293151",
          type: "Book Chapter",
          impact: "Low Impact",
        },
        {
          title:
            "Exploring Convolutional Neural Network in Computer Vision based Image Classification",
          authors: "P. Kaur, Sunil K. Singh, I. Singh, S. Kumar",
          journal:
            "International Conference on Smart Systems and Advanced Computing (Syscom)",
          url: "https://ceur-ws.org/Vol-3080/15.pdf",
          type: "Conference Paper",
          impact: "Low Impact",
        },
        {
          title:
            "Sustainable Stock Market Prediction Framework Using Machine Learning Models",
          authors:
            "F. J. G. Peñalvo, T. Maan, Sunil K. Singh, S. Kumar, V. Arya, K. T. Chui, G. P. Singh",
          journal:
            "International Journal of Software Science and Computational Intelligence",
          url: "https://www.igi-global.com/article/sustainable-stock-market-prediction-framework-using-machine-learning-models/313593",
          type: "Journal",
          impact: "Medium Impact",
        },
        {
          title:
            "Predicting Catastrophic Events Using Machine Learning Models for Natural Language Processing",
          authors: "M. Chopra, Sunil K. Singh, K. Aggarwal, A. Gupta",
          journal:
            "Data Mining Approaches for Big Data and Sentiment Analysis in Social Media ...",
          url: "https://www.igi-global.com/chapter/predicting-catastrophic-events-using-machine-learning-models-for-natural-language-processing/293158",
          type: "Book Chapter",
          impact: "Low Impact",
        },
        {
          title:
            "Exploring Advanced Neural Networks For Cross-Corpus Fake News Detection",
          authors:
            "M. Girdhar, Sunil K. Singh, S. Kumar, D. Mahto, S. K. Sharma, Brij B. Gupta, Varsha Arya, ...",
          journal:
            "5th International Conference on Information Management and Machine Intelligence",
          url: "https://ceur-ws.org/Vol-3080/21.pdf",
          type: "Conference Paper",
          impact: "Low Impact",
        },
        {
          title:
            "Efficient speculative parallelization architecture for overcoming speculation overheads",
          authors: "S. Kumar, Sunil K. Singh, N. Aggarwal, K. Aggarwal",
          journal:
            "International Conference on Smart Systems and Advanced Computing (Syscom)",
          url: "https://ceur-ws.org/Vol-3080/10.pdf",
          type: "Conference Paper",
          impact: "Low Impact",
        },
        {
          title:
            "Evolving requirements of Smart healthcare in Cloud Computing and MIoT",
          authors: "D. Singla, Sunil K. Singh, H. Dubey, T. Kumar",
          journal:
            "International Conference on Smart Systems and Advanced Computing (Syscom)",
          url: "https://ceur-ws.org/Vol-3080/15.pdf",
          type: "Conference Paper",
          impact: "Low Impact",
        },
        {
          title:
            "A Review on Dataset Acquisition Techniques in Gesture Recognition from Indian Sign Language",
          authors: "A. Singh, Sunil K. Singh, A. Mittal",
          journal: "Advances in Data Computing, Communication and Security",
          doi: "https://doi.org/10.1007/978-981-16-8403-6_27",
          type: "Book Chapter",
          impact: "Low Impact",
        },
        {
          title:
            "An Inquisitive Prospect on the Shift Toward Online Media, Before, During, and After the COVID-19 Pandemic",
          authors: "A. Gupta, Sunil K. Singh, M. Chopra, S. S. Gill",
          journal: "Advances in Data Computing, Communication and Security",
          doi: "https://doi.org/10.1007/978-981-16-8403-6_20",
          type: "Book Chapter",
          impact: "Low Impact",
        },
        {
          title:
            "Assess and Analysis Covid-19 Immunization Process: A Data Science Approach",
          authors: "M. Chopra, Sunil K. Singh, G. Mengi, D. Gupta",
          journal:
            "International Conference on Smart Systems and Advanced Computing (Syscom)",
          url: "https://scholar.google.com/scholar?cluster=10612421798236625713&hl=en&oi=scholarr",
          type: "Conference Paper",
          impact: "Low Impact",
        },
        {
          title:
            "Detailed Evolution Process of CNN-Based Intrusion Detection in the Context of Network Security",
          authors:
            "A. Singh, Sunil K. Singh, A. Chhabra, G. Singh, S. Kumar, Varsha Arya",
          journal: "Digital Forensics and Cyber Crime Investigation, 70–87",
          url: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003207573-4/detailed-evolution-process-cnn-based-intrusion-detection-context-network-security-amanpreet-singh-sunil-singh-amit-chhabra-gurmehar-singh-yuvraj-sudhakar-kumar-varsha-arya",
          type: "Book Chapter",
          impact: "Low Impact",
        },
        {
          title:
            "Static gestures of Indian Sign Language (ISL) for English Alphabet, Hindi Vowels and Numerals",
          authors: "A. Singh, Sunil K. Singh, A. Mittal, Brij B. Gupta",
          journal: "Mendeley Data",
          doi: "https://dx.doi.org/10.17632/7tsw22y96w.1",
          type: "Journal",
          impact: "Low Impact",
        },
        {
          title:
            "Smart Transportation Systems using AI and IoT: A Modern Day Approach",
          authors: "A. Gupta, Sunil K. Singh",
          journal: "LAP LAMBERT Academic Publishing, ISBN 978-6204957203",
          url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=EDpdqjwAAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=EDpdqjwAAAAJ:_xSYboBqXhAC",
          type: "Book Chapter",
          impact: "Low Impact",
        },
        {
          title: "Data Computation: Awareness, Architecture and Applications",
          authors: "V. Kansal, Sunil K. Singh",
          journal: "Artificial Intelligence and Natural Algorithms 1, 1–23",
          doi: "https://doi.org/10.2174/97898150360911220101",
          type: "Book Chapter",
          impact: "Low Impact",
        },
        {
          title: "IoT and its uses in Security Surveillance",
          authors: "S. Sharma, Sunil K. Singh",
          journal: "N/A",
          url: "https://insights2techinfo.com/iot-and-its-uses-in-security-surveillance/",
          type: "Book Chapter",
          impact: "Low Impact",
        },
        {
          title: "Natural Language Processing Applications in Cyber Security",
          authors: "R. Saini, Sunil K. Singh",
          journal: "N/A",
          url: "https://insights2techinfo.com/wp-content/uploads/2022/12/Natural-Language-Processing-Applications-in-Cyber-Security.pdf",
          type: "Book Chapter",
          impact: "Low Impact",
        },
        {
          title: "SDN-Aided Edge Computing-Enabled AI for IoT and Smart Cities",
          authors: "Rashandeep Singh, Sunil Kr Singh, Sudhakar Kumar, Shabeg Singh Gill",
          journal: "SDN-Supported Edge-Cloud Interplay for Next Generation Internet of Things",
          url: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003213871-3/sdn-aided-edge-computing-enabled-ai-iot-smart-cities-rashandeep-singh-sunil-kr-singh-sudhakar-kumar-shabeg-singh-gill",
          type: "Book Chapter",
          impact: "Low Impact",
        },
        {
          title: "A novel Smart Transportation based framework interlinking the advancements in Technology and System Engineering",
          authors: "Anshul Gupta, Sunil K. Singh, Arpan Gupta",
          journal: "International Conference on Smart Systems and Advanced Computing (Syscom-2021)",
          url: "https://ceur-ws.org/Vol-3080/5.pdf",
          type: "Conference Paper",
          impact: "Low Impact",
        },
        {
          title: "Impact and Usability of Artificial Intelligence in Manufacturing workflow to empower Industry 4.0",
          authors: "Muskaan Chopra, Sunil K. Singh, Sidharth Sharma, Deepak Mahto",
          journal: "International Conference on Smart Systems and Advanced Computing (Syscom-2021)",
          url: "https://ceur-ws.org/Vol-3080/4.pdf",
          type: "Conference Paper",
          impact: "Low Impact",
        },
        {
          title: "Analysis & prognosis of sustainable development goals using big data-based approach during COVID-19 pandemic. Sustain Technol Entrep 1 (2): 100012",
          authors: "M Chopra, SK Singh, A Gupta, K Aggarwal, BB Gupta, F Colace",
          journal: "",
          url: "https://scholar.google.com/scholar?cluster=16135040595806339206&hl=en&oi=scholarr",
          type: "Journal",
          impact: "Low Impact",
        },
        {
          title: "Evolving Conversational AI: Analyzing the Development and Advancements in ChatGPT",
          authors: "SUNIL KUMAR SINGH, ARTI SACHAN, VARSHA ARYA",
          journal: "",
          url: "https://insights2techinfo.com/wp-content/uploads/2023/07/Evolving-Conversational-AI-Analyzing-the-Development-and-Advancements-in-ChatGPT.pdf",
          type: "Book Chapter",
          impact: "Low Impact",
        },
         {
          title: "Sustainable Technology and Entrepreneurship",
          authors: "Muskaan Chopra, Sunil K Singh, Anshul Gupta, Kriti Aggarwal, Brij B Gupta, Francesco Colace",
          journal: "",
          doi: "https://doi.org/10.1016/j.stae.2022.100012",
          type: "Journal",
          impact: "Low Impact",
        },
        {
          title: "Evolution of the Web 3.0: History and the Future",
          authors: "Devashish Gupta, Sunil K Singh",
          journal: "Insights2Techinfo Tech Magazine",
          url: "https://insights2techinfo.com/evolution-of-the-web-3-0-history-and-the-future/",
          type: "Journal",
          impact: "Low Impact",
        },
         {
          title: "Analysis of Deep learning models for Recognition and Interpretation of Indian Sign Language",
          authors: "ANIMESH SINGH, SK SINGH, AJAY MITTAL",
          journal: "Cyber Security Insights Magazine",
          url: "https://scholar.google.com/scholar?cluster=8496538832369015864&hl=en&oi=scholarr",
          type: "Journal",
          impact: "Low Impact",
        },
        {
          title: "Secure Internet of Behavior (IOB): Challenges and Future Directions.",
          authors: "SIDDHARTH SINGH Khati, SUNIL K Singh, AKASH Sharma",
          journal: "Data Science Insights Magazine",
          url: "https://insights2techinfo.com/wp-content/uploads/2022/11/Secure-Internet-of-Behavior-IOB-challenges-and-future-Directions_2.pdf",
          type: "Journal",
          impact: "Low Impact",
        },
         {
          title: "Traffic Accident Prevention in Low Visibility Conditions Using VANETs Cloud Environment",
          authors: "Kwok Tai Chui, Tanveer Singh Kochhar, Amit Chhabra, Sunil K Singh, Deepinder Singh, Dragan Peraković, Ammar Almomani, Varsha Arya",
          journal: "International Journal of Cloud Applications and Computing (IJCAC)",
          url: "https://www.igi-global.com/article/traffic-accident-prevention-in-low-visibility-conditions-using-vanets-cloud-environment/313572",
          type: "Journal",
          impact: "Low Impact",
        },
         {
          title: "A Novel Decentralized Group Key Management Scheme for Cloud-Based Vehicular IoT Networks",
          authors: "Rakesh Kumar, Sunil K Singh, DK Lobiyal, Kwok Tai Chui, Domenico Santaniello, Marjan Kuchaki Rafsanjani",
          journal: "International Journal of Cloud Applications and Computing (IJCAC)",
          url: "https://www.igi-global.com/article/a-novel-decentralized-group-key-management-scheme-for-cloud-based-vehicular-iot-networks/311037",
          type: "Journal",
          impact: "Low Impact",
        },
        {
          title: "A Novel CNN, Bidirectional Long-Short Term Memory, and Gated Recurrent Unit-Based Hybrid Approach for Human Activity Recognition",
          authors: "Narina Thakur, Sunil K Singh, Akash Gupta, Kunal Jain, Rachna Jain, Dragan Peraković, Nadia Nedjah, Marjan Kuchaki Rafsanjani",
          journal: "International Journal of Software Science and Computational Intelligence (IJSSCI)",
          url: "https://www.igi-global.com/article/a-novel-cnn-bidirectional-long-short-term-memory-and-gated-recurrent-unit-based-hybrid-approach-for-human-activity-recognition/311445",
          type: "Journal",
          impact: "Low Impact",
        },
         {
          title: "An efficient hardware supported and parallelization architecture for intelligent systems to overcome speculative overheads",
          authors: "Sudhakar Kumar, Sunil K Singh, Naveen Aggarwal, Brij B Gupta, Wadee Alhalabi, Shahab S Band",
          journal: "international Journal of Intelligent Systems",
          doi: "https://doi.org/10.1002/int.23062",
          type: "Journal",
          impact: "Low Impact",
        },

        {
          title: "The Combination between Machine Learning and Sustainable Development Goal (SDG)",
          authors: "Sunil K Singh, Shabeg Singh Gill",
          journal: "Insights2Techinfo Magazine",
          url: "https://scholar.google.com/scholar?cluster=492378731413055187&hl=en&oi=scholarr",
          type: "Journal",
          impact: "Low Impact",
        },

         {
          title: "A Comparative Study of Generative Adversarial Networks for Text-to-Image Synthesis",
          authors: "Muskaan Chopra, Sunil K Singh, Akhil Sharma, Shabeg Singh Gill",
          journal: "International Journal of Software Science and Computational Intelligence (IJSSCI)",
          url: "https://www.igi-global.com/article/a-comparative-study-of-generative-adversarial-networks-for-text-to-image-synthesis/300364",
          type: "Journal",
          impact: "Low Impact",
        },
      ],
      
      2021: [
        {
          title:
            "Automated Machine Learning (AutoML): The Future of Computational Intelligence",
          authors: "G. Mengi, Sunil K. Singh, S. Kumar, D. Mahto, A. Sharma",
          journal:
            "International Conference on Cyber Security, Privacy and Networking, 309–317",
          doi: "https://doi.org/10.1007/978-3-031-22018-0_28",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
        {
          title:
            "Sustainable Framework for Metaverse Security and Privacy: Opportunities and Challenges",
          authors: "M. Singh, Sunil K. Singh, S. Kumar, U. Madan, T. Maan",
          journal:
            "International Conference on Cyber Security, Privacy and Networking, 329–340",
          doi: "https://doi.org/10.1007/978-3-031-22018-0_30",
          type: "Conference Paper",
          impact: "Low Impact",
        },
        {
          title:
            "Dropout-VGG based Convolutional Neural Network for Traffic Sign Categorization",
          authors: "I. Singh, Sunil K. Singh, S. Kumar, K. Aggarwal",
          journal: "Congress on Intelligent Systems (CIS 2021), LNNS",
          doi: "https://doi.org/10.1007/978-981-16-9416-5_18",
          type: "Conference Paper",
          impact: "Low Impact",
        },
        {
          title:
            "Security of Android Banking Mobile Apps: Challenges and Opportunities",
          authors: "A. Sharma, Sunil K. Singh, S. Kumar, A. Chhabra, S. Gupta",
          journal:
            "International Conference on Cyber Security, Privacy and Networking, 406–416",
          doi: "https://doi.org/10.1007/978-3-031-22018-0_39",
          type: "Conference Paper",
          impact: "Low Impact",
        },
        {
          title:
            "Brain Computer Interaction (BCI): A Way to Interact with Brain Waves",
          authors: "S. Kumar, Sunil K. Singh",
          journal: "Insights2Techinfo",
          url: "https://insights2techinfo.com/brain-computer-interaction-bci-a-way-to-interact-with-brain-waves/",
          type: "Book Chapter",
          impact: "Low Impact",
        },
                {
          title:
            "Human factors of vehicle automation",
          authors: "Sunil Kr Sharma, Sunil Kr Singh, Subhash C Panja",
          journal: "Autonomous Driving and Advanced Driver-Assistance Systems (ADAS)",
          url: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003048381-17/human-factors-vehicle-automation-sunil-kr-sharma-sunil-kr-singh-subhash-panja",
          type: "Book Chapter",
          impact: "Low Impact",
        },
         {
          title:
            "A Comprehensive Comparative Study of Machine Learning Classifiers for Spam Filtering",
          authors: "Saksham Gupta, Amit Chhabra, Satvik Agrawal, Sunil K Singh",
          journal: "International Conference on Cyber Security, Privacy and Networking",
          url: "https://link.springer.com/chapter/10.1007/978-3-031-22018-0_24",
          type: "Conference Paper",
          impact: "Low Impact",
        },
        {
          title:
            "Linux Yourself: Concept and Programming",
          authors: "Sunil K Singh",
          journal: "",
          doi: "https://doi.org/10.1201/9780429446047",
          type: "Journal",
          impact: "Low Impact",
        },
        {
          title:
            "Evaluation of automatic parallelization algorithms to minimize speculative parallelism overheads: An experiment",
          authors: "Sudhakar Kumar, Sunil Kr Singh, Naveen Aggarwal, Kriti Aggarwal",
          journal: "Journal of Discrete Mathematical Sciences and Cryptography",
          doi: "https://doi.org/10.1080/09720529.2021.1951435",
          type: "Journal",
          impact: "Low Impact",
        },
         {
          title:
            "Implementation of Smart Helmet for Bikers",
          authors: "Neelam Yadav, Sunil K Singh",
          journal: "International Research Journal on Advanced Science Hub",
          url: "https://scholar.google.com/scholar?cluster=12829929677547521169&hl=en&oi=scholarr",
          type: "Journal",
          impact: "Low Impact",
        },
         {
          title:
            "MLOps: A New Era of DevOps, Powered by Machine Learning",
          authors: "Muskaan Chopra, Sunil K Singh",
          journal: "",
          doi: "",
          type: "Journal",
          impact: "Low Impact",
        },
      ],

      2019: [
        {
          title:
            "The internet of things: an overview of the awareness, architecture & application",
          authors: "M. Gupta, Sunil K. Singh",
          journal:
            "International Journal of Latest Trends in Engg. and Technology 12(4), 19–24",
          url: "https://scholar.google.com/scholar?cluster=3533413703248731039&hl=en&oi=scholarr",
          type: "Journal",
          impact: "Low Impact",
        },
            {
          title:
            "P vs NP Solution–Advances in Computational Complexity, Status and Future Scope",
          authors: "Amit Sharma, Sunil Kr Singh",
          journal:
            "International Journal of Computer Applications",
          url: "https://scholar.google.com/scholar?cluster=3533413703248731039&hl=en&oi=scholarr",
          type: "Journal",
          impact: "Low Impact",
        },
            {
          title:
            "Good morning turning to spam morning",
          authors: "Aakriti Gupta, Sunil Kumar Singh, Kabir Ahuja, Ankit Gupta",
          journal:
            "International Conference on Intelligent Computing and Communication Technologies",
          url: "https://link.springer.com/chapter/10.1007/978-981-13-8461-5_1",
          type: "Journal",
          impact: "Low Impact",
        },
            {
          title:
            "An Analytical Study of Start-Up Trends: An Indian Perspective",
          authors: "Rajwinder Singh, Sahil Manaktala, Ankit Gupta, Sunil Kumar Singh",
          journal:
            "Journal of Entrepreneurship and Management",
          url: "https://www.academia.edu/download/63159524/An_Analytical_Study_of_Start-Up_Trends_-_An_Indian_Perspective20200501-57419-1mvb4nn.pdf",
          type: "Journal",
          impact: "Low Impact",
        },

      ],
      2018: [
        {
          title:
            "Performance evaluation of VGG models in detection of wheat rust",
          authors: "R. Singh, R. Rana, Sunil K. Singh",
          journal:
            "Asian Journal of Computer Science and Technology 7(3), 76–81",
          url: "https://www.ajcst.co/index.php/ajcst/article/view/1892",
          type: "Journal",
          impact: "Low Impact",
        },
        {
          title:
            "Does Demonetisation and Cashless Economy Really Go Hand in Hand!",
          authors: "Akshat Jain, Sunil Kumar Singh, Ankit Gupta, Ashim Bhasin, Swastikaa Moudgil",
          journal:
            "IndianJournals. com",
          url: "https://scholar.google.com/scholar?cluster=10979062847052240854&hl=en&oi=scholarr",
          type: "Journal",
          impact: "Low Impact",
        },
      ],
      2017: [
        {
          title:
            "Capacity and Inclination of High Performance Computing in Next Generation Computing",
          authors: "A. Rastogi, A. Sharma, S. Singh, S. Kumar",
          journal: "Proceedings of the 11th INDIACom. IEEE",
          url: "https://www.researchgate.net/profile/Sunil-Singh-30/publication/374086783_Capacity_and_Inclination_of_High_Performance_Computing_in_Next-Generation_Computing/links/650d2c2961f18040c2162511/Capacity-and-Inclination-of-High-Performance-Computing-in-Next-Generation-Computing.pdf",
          type: "Journal",
          impact: "Low Impact",
        },
        {
          title:
            "AN APPROACH TO REVAMP THE DATA SECURITY USING CRYPTOGRAPHIC TECHNIQUES.",
          authors: "C. Diwan, Sunil K. Singh",
          journal:
            "International Journal of Advanced Research in Computer Science 8(7)",
          url: "https://d1wqtxts1xzle7.cloudfront.net/97225142/3937-libre.pdf?1673593376=&response-content-disposition=inline%3B+filename%3DAn_Approach_to_Revamp_the_Data_Security.pdf&Expires=1756451741&Signature=D6NLYrz75l9eE9-42c3EABL5BxgEz~TDZZ8jHNplHCWgPpvJBmx8uWqLy5GxBG58KPnODI-EfTgyRRB05lNf9MkGM3UeO7G9wCInBygqhQe4Sq1Yxa4W~e6KUwKwLJ6fK6HJ9iChg5KIdpLAZKi-4NNhOb8sv71OyOZ0pb9N87gZO3dGY1BolHtQgiviJdpxIlFLIzD5VS1VqlCWnb5r3lRFB~xBLTvtDczZEQ5Z8-p2xlejxTVMHUBxUUPXk32xGKoqnakEBYQzrXijmFFLrDiZgrawcai8-RKW8ghDbZfUU2ihl-4Y0szmz9CQXtVQgxuB1s0l1Jny8P0fwNpSeA__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA",
          type: "Journal",
          impact: "Low Impact",
        },
        {
          title:
            "One Way Functions–Conjecture, Status, Applications and Future Research Scope",
          authors: "A. Sharma, Sunil K. Singh",
          journal: "International Journal of Computer Applications 153(8)",
          url: "https://scholar.google.com/scholar?cluster=10579965354220206097&hl=en&oi=scholarr",
          type: "Journal",
          impact: "Low Impact",
        },
      ],
      2016:[
         {
          title:
            "One Way Functions–Conjecture, Status, Applications and Future Research Scope",
          authors: "Amit Sharma, Sunil Kr Singh",
          journal:
            "Inernational Journal of Computer Applications",
          url: "https://scholar.google.com/scholar?cluster=10579965354220206097&hl=en&oi=scholarr",
          type: "Journal",
          impact: "Low Impact",
        },

      ],
      2015: [
        {
          title:
            "Achieving High Performance Distributed System: Using Grid Cluster and Cloud Computing",
          authors: "Sunil K. Singh, K. Kaur, A. Aggarwal, D. Verma",
          journal:
            "International Journal of Engineering Research and Applications 5(2), 59–67",
          url: "https://www.researchgate.net/profile/Anuj-Aggarwal-5/publication/272417068_Achieving_High_Performance_Distributed_System_Using_Grid_Cluster_and_Cloud_Computing/links/54e38fbe0cf2dbf606930cb3/Achieving-High-Performance-Distributed-System-Using-Grid-Cluster-and-Cloud-Computing.pdf",
          type: "Journal",
          impact: "Low Impact",
        },
        {
          title:
            "EVALUATION & TRENDS OF SURVEILLANCE SYSTEM NETWORK IN UBIQUITOUS COMPUTING ENVIRONMENT",
          authors: "Sunil K. Singh, A. Aggarwal, K. Kaur",
          journal:
            "International Journal of Advanced Networking and Applications 6(5), 2486–2493",
          url: "https://www.researchgate.net/profile/Anuj-Aggarwal-5/publication/279745544_EVALUATION_TRENDS_OF_SURVEILLANCE_SYSTEM_NETWORK_IN_UBIQUITOUS_COMPUTING_ENVIRONMENT/links/5598d7c908ae99aa62ca3150/EVALUATION-TRENDS-OF-SURVEILLANCE-SYSTEM-NETWORK-IN-UBIQUITOUS-COMPUTING-ENVIRONMENT.pdf",
          type: "Journal",
          impact: "Low Impact",
        },
      ],
      2014: [
        {
          title:
            "Computing Power Utilization of Distributed Systems Using Distributed Compilation: A Clustered HPC Approach",
          authors: "Sunil K. Singh, A. Madaan, A. Aggarwal, A. Dewan",
          journal: "British Journal of Mathematics & Computer Science",
          url: "https://dspace.luguniv.edu.ua/xmlui/bitstream/handle/123456789/1571/American%20Journal.pdf?sequence=1&isAllowed=y#page=669",
          type: "Journal",
          impact: "Low Impact",
        },
        {
          title: "A Hybrid Approach of Compiler and Interpreter",
          authors: "A. Aggarwal, Sunil K. Singh, S. Jain",
          journal:
            "International Journal of Scientific & Engineering Research 5(6), 1022–1025",
          url: "https://scholar.google.com/scholar?cluster=13915958980520592011&hl=en&oi=scholarr",
          type: "Journal",
          impact: "Low Impact",
        },
        {
          title:
            "Emerging Trends and Limitations in Technology and System of Ubiquitous Computing",
          authors: "Sunil K. Singh, K. Kaur, A. Aggrawal",
          journal:
            "International Journal of Advanced Research in Computer Science 5(7)",
          url: "https://www.researchgate.net/profile/Anuj-Aggarwal-5/publication/271136772_Emerging_Trends_and_Limitations_in_Technology_and_System_of_Ubiquitous_Computing/links/54beac6f0cf2f6bf4e04041d/Emerging-Trends-and-Limitations-in-Technology-and-System-of-Ubiquitous-Computing.pdf",
          type: "Journal",
          impact: "Low Impact",
        },
      ],
      2013: [
        {
          title:
            "Design and implementation of a high performance computing system using distributed compilation",
          authors: "Sunil K. Singh, A. Madaan, A. Aggarwal, A. Dewan",
          journal:
            "2013 International Conference on Advances in Computing, Communications and Informatics",
          url: "https://ieeexplore.ieee.org/abstract/document/6637374/",
          type: "Conference Paper",
          impact: "Low Impact",
        },
         {
          title:
            "Cad for delay optimization of symmetrical fpga architecture through hybrid luts/plas",
          authors: "Sunil Kr Singh, RK Singh, MPS Bhatia, Saurabh P Singh",
          journal:
            "Advances in Computing and Information Technology: Proceedings of the Second International Conference on Advances in Computing and Information Technology (ACITY) July 13-15, 2012, Chennai, India-Volume 3",
          url: "https://link.springer.com/chapter/10.1007/978-3-642-31600-5_57",
          type: "Conference Paper",
          impact: "Low Impact",
        },
      ],
      2012: [
        {
          title:
            "Design flow of reconfigurable embedded system architecture using LUTs/PLAs",
          authors: "Sunil K. Singh, R. K. Singh, M. P. S. Bhatia",
          journal:
            "2012 IEEE International Conference on Parallel, Distributed and Grid Computing",
          url: "https://ieeexplore.ieee.org/abstract/document/6449851/",
          type: "Conference Paper",
          impact: "Low Impact",
        },
        {
          title:
            "Performance evaluation of hybrid reconfigurable computing architecture over symmetrical FPGAs",
          authors: "Sunil K. Singh, R. K. Singh, M. P. S. Bhatia",
          journal:
            "International Journal of Embedded Systems and Applications 2(3), 107–116",
          url: "https://www.researchgate.net/profile/Sunil-Singh-30/publication/276198419_Performance_Evaluation_of_Hybrid_Reconfigurable_Computing_Architecture_over_Symmetrical_FPGA/links/649b3d73b9ed6874a5df17dd/Performance-Evaluation-of-Hybrid-Reconfigurable-Computing-Architecture-over-Symmetrical-FPGA.pdf",
          type: "Journal",
          impact: "Low Impact",
        },
        {
          title:
            "Analysis of Technology Mapping Algorithm for Logic optimization of Symmetrical FPGA Architecture through Hybrid LUTs/PLAs",
          authors: "Sunil K. Singh, R. K. Singh, M. P. S. Bhatia",
          journal:
            "International Journal of Advances in Electronics Engineering 2(3), 219–224",
          doi: "",
          type: "Journal",
          impact: "Low Impact",
        },
        {
          title:
            "CAD for Automatic Logic Density Utilization of Symmetrical FPGA Architecture through Hybrid LUTs/PLAs",
          authors: "Sunil K. K. Singh, R. K. Singh, M. P. S. Bhatia",
          journal:
            "VLSI Proceeding of International Conference on Innovations and Advancements in Info, and Communication Tech.(ICIAICT)",
          doi: "",
          type: "Conference Paper",
          impact: "Low Impact",
        },
        {
          title:
            "Generation of Image Encryption Key on the basis of Chaos and Strange Attractors",
          authors: "S. P. Singh, D. D. Jha, Sunil K. Singh",
          journal:
            "International Conference On Advances In Electronics, Electrical And Computer ...",
          doi: "",
          type: "Conference Paper",
          impact: "Low Impact",
        },
        {
          title:
            "DESIGN ISSUES OF EMBEDDED SYSTEM USING REAL TIME OPERATING SYSTEM IN LINUX ENVIRONMENT",
          authors: "A. Mittal, Sunil K. Singh",
          journal:
            "International Journal of Current Research and Review 4(12), 40–46",
          doi: "",
          type: "Journal",
          impact: "Low Impact",
        },
        {
          title:
            "Role of Reconfigurable Devices in High Performance Computing System",
          authors: "A. Mittal, Sunil K. Singh, A. Goyal",
          journal: "International Journal of Computer Applications 41(7)",
          url: "https://www.researchgate.net/profile/Anant-Mittal-2/publication/258651018_Role_of_Reconfigurable_Devices_in_High_Performance_Computing_System/links/59ebcb97a6fdccef8b0c5e28/Role-of-Reconfigurable-Devices-in-High-Performance-Computing-System.pdf",
          type: "Journal",
          impact: "Low Impact",
        },
        {
          title:
            "Performance evaluation of hybrid reconfigurable computing architecture over symmetrical FPGAs",
          authors: "Sunil Kr Singh, R K Singh, M P S Bhatia",
          journal: "International Journal of Embedded Systems and Applications",
          doi: "https://10.5121/ijesa.2012.2312",
          type: "Journal",
          impact: "Low Impact",
        },
      ],
      2011: [
        {
          title:
            "Architectural performance of WiMAX over WiFi with reliable QoS over wireless communication",
          authors: "Sunil K. Singh, A. Kumar, S. Gupta, R. Madan",
          journal:
            "International Journal of Advanced Networking and Applications 3(1), 1017",
          url: "https://www.academia.edu/download/28586224/v3i1-9.pdf",
          type: "Journal",
          impact: "Low Impact",
        },
        {
          title:
            "Multi FPGA Based Novel Reconfigurable Hybrid Architecture for High Performance Computing",
          authors: "Sunil K. Singh, R. K. Singh, M. P. S. Bhatia, R. Madan",
          journal:
            "International Journal of Computer Science Issues (IJCSI) 8(4), 335",
          url: "https://www.researchgate.net/profile/Mohinder_pal_Singh_Bhatia/publication/267413579_Multi_FPGA_Based_Novel_Reconfigurable_Hybrid_Architecture_for_High_Performance_Computing/links/551e6cad0cf29dcabb03c4dc.pdf",
          type: "Journal",
          impact: "Low Impact",
        },
        {
          title:
            "A HIGH PERFORMANCE ALGORITHM FOR SOLVING LARGE SCALE TRAVELLING SALESMAN PROBLEM USING DISTRIBUTED MEMORY ARCHITECTURES",
          authors: "K. Aggarwal, Sunil K. Singh, S. Khattar",
          journal:
            "Indian Journal of Computer Science and Engineering 2(4), 516–521",
          doi: "",
          type: "Journal",
          impact: "Low Impact",
        },
        {
          title:
            "Reconfigurable Hybrid Architectures for High Performance Reliable Embedded Systems",
          authors: "Sunil K. Singh, R. Madan, N. Jain",
          journal:
            "International Conference on Future Trends in Information and Communication ...",
          doi: "",
          type: "Conference Paper",
          impact: "Low Impact",
        },
        {
          title:
            "Authenticating and Securing Mobile Applications Using Microlog",
          authors: "S. Gupta, Sunil K. Singh",
          journal:
            "International Conference on Computer Science and Information Technology, 258–267",
          url: "https://link.springer.com/chapter/10.1007/978-3-642-17881-8_25",
          type: "Conference Paper",
          impact: "Low Impact",
        },
        {
          title:
            "CAD Optimization Technique in Reconfigurable Computing System using Hybrid Architecture",
          authors: "Sunil Kr Singh, RK Singh, MPS Bhatia",
          journal:
            "International Journal of Computer Applications",
          url: "https://www.academia.edu/download/65987889/pxc3873890.pdf",
          type: "Journal",
          impact: "Low Impact",
        },
        {
          title:
            "DYNAMICALLY CO-SYNTHESIS OF H/W & S/W AND OPTIMIZATION IN RECONFIGURABLE EMBEDDED SYSTEM",
          authors: "Sunil Kr Singh, MPS Bhatia",
          journal:
            "International Journal of Advanced Engineering Technology",
          url: "https://www.academia.edu/download/65987889/pxc3873890.pdf",
          type: "Journal",
          impact: "Low Impact",
        },
      ],
      2010: [
        {
          title:
            "Analysis and optimisation of various transmission issues in video streaming over Bluetooth",
          authors: "S. Gupta, Sunil K. Singh, R. Jain",
          journal:
            "International Journal of Computer Applications 11(7), 44–48",
          url: "https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=8e647ecd7b67c21ff95808eef3c5fae40e737320",
          type: "Journal",
          impact: "Low Impact",
        },
        {
          title: "Functionality area of Grid computing using Cluster grids",
          authors: "N. Jain, Sunil K. Singh, R. Madan",
          journal:
            "National Conference on High Performance Networking & Computing, 111–121",
          doi: "",
          type: "Conference Paper",
          impact: "Low Impact",
        },
        {
          title: "Parallel Genetic Algorithms on Distributed Memory",
          authors: "Sunil K. Singh, K. Aggarwal, A. Gupta",
          journal:
            "International Conference on Innovative Practices in Management & Information ...",
          doi: "",
          type: "Conference Paper",
          impact: "Low Impact",
        },
        {
          title:
            "Design and development of Java application to access Mobile Phone Camera for next generation Communication",
          authors: "Sunil K. Singh, N. Saxena, I. Aggarwal",
          journal:
            "International Conference on Innovative Practices in Management & Information ...",
          doi: "",
          type: "Conference Paper",
          impact: "Low Impact",
        },
        {
          title:
            "System level architectural synthesis & compilation technique in reconfigurable computing system",
          authors: "Sunil Kr Singh, RK Singh, MP S BHATIA",
          journal:
            "ESA 2010: proceedings of the 2010 international conference on embedded systems & applications (Las Vegas NV, July 12-15, 2010)",
          url: "http://pascal-francis.inist.fr/vibad/index.php?action=getRecordDetail&idt=26134328",
          type: "Conference Paper",
          impact: "Low Impact",
        },
      ],
      2009: [
        {
          title: "Signal filtering using discrete wavelet transform",
          authors: "R. Madan, Sunil K. Singh, N. Jain",
          journal:
            "International journal of recent trends in engineering 2(3), 96",
          url: "https://search.proquest.com/openview/6ffd3420501e87ed0556bf2441eee7cb/1?pq-origsite=gscholar&cbl=136092",
          type: "journal",
          impact: "Low Impact",
        },
        {
          title:
            "The Research Issues Related to Design Environment in Mobile Communication & Computing",
          authors: "N. T. Markad, Sunil K. Singh, R. Prakash",
          journal:
            "International Conference in Intelligent Systems and Networks (IISN-2009)",
          doi: "",
          type: "Conference Paper",
          impact: "Low Impact",
        },
        {
          title:
            "Designed & Developed Health Management System(HMS) With Intelligent Agents for Rural Areas",
          authors: "N. T. Markad, Sunil K. Singh, R. Prakash",
          journal:
            "International Conference on Innovative Technologies (ICIT-2009), 1145–1150",
          doi: "",
          type: "Conference Paper",
          impact: "Low Impact",
        },
        {
          title:
            "Protocol Performance Evaluation of an Mobile Ad-Hoc Network using Bluetooth Devices",
          authors: "Sunil K. Singh, M. P. S. Bhatia, R. Jindal, R. Prakash",
          journal:
            "International Conference on Innovative Technologies (ICIT-2009), 964–970",
          doi: "",
          type: "Conference Paper",
          impact: "Low Impact",
        },
        {
          title:
            "Design Modeling Environment of Mobile Communication and Computing",
          authors: "N. T. Markad, Sunil K. Singh, R. Prakash",
          journal:
            "International Advance Computing Conference (IACC-2009) IEEE",
          doi: "",
          type: "Conference Paper",
          impact: "Low Impact",
        },
        {
          title:
            "Architectural Modeling for Hardware and Software in Reconfigurable Embedded System",
          authors: "Sunil Kr Singh, MPS Bhatia, Rajni Jindal",
          journal:
            "International Journal of Recent Trends in Engineering",
          url: "https://www.researchgate.net/profile/Rajni-Jindal/publication/228543970_Architectural_Modeling_for_Hardware_and_Software_in_Reconfigurable_Embedded_System/links/53f761f20cf24ddba7d5e62d/Architectural-Modeling-for-Hardware-and-Software-in-Reconfigurable-Embedded-System.pdf",
          type: "Journal",
          impact: "Low Impact",
        },
        {
          title:
            "Microstrip Stacked patch Antenna for Next Generation GSM",
          authors: "NT Markad, Sunil Kr Singh, SK Kundu, Ravi Prakash",
          journal:
            "International Journal of Engineering and Technology",
          url: "https://scholar.google.com/scholar?cluster=5607748826322833170&hl=en&oi=scholarr",
          type: "Conference Paper",
          impact: "Low Impact",
        },
      ],
      2008: [
        {
          title: "A Nobel Concept: Reconfigurable Embedded System",
          authors: "M. P. S. Bhatia, Sunil K. Singh, R. Prakash, S. Singh",
          journal:
            "IEEE National Conference on Applications of Intelligent Systems (AIS-2008)",
          doi: "",
          type: "Conference Paper",
          impact: "Low Impact",
        },
        {
          title:
            "Design issue and management environment of mobile Ad-Hoc network",
          authors: "Sunil K. Singh, M. P. S. Bhatia, R. Jindal",
          journal:
            "National Conference on Mobile Computing (MOBILE COMP – 2008), 193–203",
          doi: "",
          type: "Conference Paper",
          impact: "Low Impact",
        },
        {
          title:
            "Design Issues Of Reconfigurable Embedded System Architectures",
          authors: "M. P. S. Bhatia, Sunil K. Singh, R. Jindal",
          journal:
            "International Conference on Advance Computing Technologies (ICACT-2008)",
          doi: "",
          type: "Conference Paper",
          impact: "Low Impact",
        },
      ],
      2006: [
        {
          title:
            "General awareness and development of interactive knowledge center in village through IT",
          authors: "Sunil K. Singh, R. Prakash",
          journal:
            "National Conference on Language Technologies, RKGIT, Ghaziabad (U.P.)",
          doi: "",
          type: "Conference Paper",
          impact: "Low Impact",
        },
        {
          title: "Performance Enhancement of TCP over an Mobile Ad-Hoc Network",
          authors: "Sunil K. Singh, R. Jindal",
          journal:
            "National Conference on Energy, Communication and Computer (NC ECC 06), MAIT",
          doi: "",
          type: "Conference Paper",
          impact: "Low Impact",
        },
      ],
    },
    phdTeam: [],
    btechTeam: [],

    social: {
      email: "mailto:sksingh@ccet.ac.in",
      linkedin: "https://in.linkedin.com/in/drsks", // sample

      scholar: "https://scholar.google.com/citations?user=EDpdqjwAAAAJ&hl=en",
      orcid: "https://orcid.org/0000-0003-4876-7190", // optional
    },

    achievements: [
      {
        title: "IEEE Professional Member",
        organization: "IEEE",
        year: "2021–present",
        description: "Active member, Consumer Technology Society.",
      },
      {
        title: "ACM Professional Member",
        organization: "ACM",
        year: "2014–present",
        description: "Contributions to computing research and education.",
      },

      {
        title: "Institution of Engineers of India (IEI), Member",
        organization: "Institution of Engineers of India (IEI), Kolkata",
        year: "2011–present",
        description: "Active member",
      },
    ],
    projects: [
      {
    title: "AICTE SPICES-CCET ACM STUDENT CHAPTER",
    agency: "All India Council for Technical Education (AICTE) New Delhi",
    status: "Ongoing",
    role: "Coordinator",
    amount: "₹100000",
    year: "2022 - 2023"
  },
  {
    title: "Design and Development of an Automatic Modular Car Parking System for the City of Chandigarh",
    agency:
      "Department of Science and Technology, Ministry of Science and Technology, India (Chandigarh Administration (UT), Chandigarh, Chandigarh (UT))",
    status: "Completed",
    role: "Co-PI",
    amount: "₹3,27,000",
    year: "2019 - 2021"
  },
  {
    title: "AICTE Training and Learning (ATAL) Academy Online FDP on “Internet of Things (IOT) with Artificial Intelligence (AI)”",
    agency: "AICTE New Delhi",
    status: "Completed",
    role: "Coordinator",
    amount: "₹93,000",
    year: "2021 - 2021"
  }
    ],
    patents: [
     {
    title: "A SMART REGULATOR FOR A FAN",
    inventors: "Aayushi Aggarwal, Dr. Sunil K. Singh",
    domain: "Engineering and Technology",
    status: "Filed",
    filedDate: "2020-02-06",
  },
  {
    title: "A SYSTEM OF A MODULAR AUTOMATIC CAR PARKING SYSTEM FOR A CITY MARKETPLACE",
    inventors: "Dr Jatinder Madan, Dr. Sunil K. Singh, Dr. D S Saini, Dr. Rajesh Kumar",
    domain: "Engineering and Technology",
    status: "Filed",
    filedDate: "2021-03-01",
  },
  {
    title: "A DEFECTED GROUND ANTENNA FOR WIRELESS BODY AREA NETWORK",
    inventors:
      "Gupta, Rakesh Kumar; Yadav, Neelam; Varsha, Ms.; Suyan, Nitin Kumar; Lohar, Fateh Lal; Kumari, E. Kusuma; Jindal, Shilpa; Singh, Sunil K.; Sharma, Purnima K.; Sharma, Dinesh",
    patentNumber: "2021100926",
    domain: "Engineering and Technology",
    status: "Granted",
    filedDate: "2021-02-18",
    publishedDate: "2021-04-29",
  },
  {
    title: "COGNITIVE METHOD AND SYSTEM TO SHIELD SMART DEVICES",
    inventors: "Dr. Brij Bhooshan Gupta, Dr. Sunil Kumar Singh, Dr. Ammar Ali Deeb Almomani et. al.",
    patentNumber: "423690",
    domain: "Engineering and Technology",
    status: "Granted",
    filedDate: "2022-05-19",
    publishedDate: "2023-03-01",
  },
  {
    title: "METHOD AND SYSTEM FOR SECURE COMMUNICATION IN IOT NETWORKS",
    inventors: "Dr. Brij Bhooshan Gupta, Dr. Sunil Kumar Singh, Dr. Ammar Ali Deeb Almomani, Ms. Shashi Gandhar et. al.",
    patentNumber: "454931",
    domain: "Engineering and Technology",
    status: "Granted",
    filedDate: "2022-05-19",
    publishedDate: "2023-09-28",
  },
  {
    title: "Intelligent Router (Design)",
    inventors: "Dr. Sunil Kr. Singh, Dr. Brij Bhooshan Gupta, Dr. Sunil Sharma, Sudhakar Kumar, Shabeeg Singh Gill",
    patentNumber: "112747 (Certificate Number)",
    domain: "Engineering and Technology",
    status: "Granted",
    filedDate: "2022-02-25",
    publishedDate: "2022-04-28",
  },
  {
    title: "Virtual Reality Headset (Design)",
    inventors: "Dr. Sunil Kr. Singh, Dr. Sunil Sharma, Dr. Brij Bhooshan Gupta, Sudhakar Kumar",
    patentNumber: "112061 (Certificate Number)",
    domain: "Engineering and Technology",
    status: "Granted",
    filedDate: "2022-02-25",
    publishedDate: "2022-04-25",
  },
  {
    title: "German Utility Model Patent titled \"Intelligent defense system against distributed Denial of Service (DDoS) attacks in Internet of Things (IoT) networks\"",
    inventors: "A Alhababi Wadee Dr., Jeddah, SA; Alhudaili, Ahad, Dr., Jeddah, SA; Almomani, Ammar Ali Deeb Dr., Chandigarh, IN; Bhooshan, Dr., Taichung City, TW; Singh, Sunil Kumar, Dr., Chandigarh, IN",
    patentNumber: "DE202022102631U1/20220707",
    domain: "Engineering and Technology",
    status: "Published",
    filedDate: "2022-05-13",
    publishedDate: "2022-07-07",
  },
  {
    title: "German Utility Model Patent titled \"A system to detect pandemic scenario for small business owners\"",
    inventors: "Aludaili Mai Dr Riyadh SA Alhababi Wadee Drjeddah SA Almomani Ammar Ali Deeb DrShari'aE Gandhar Shashi New Delhi IN Gupta Brijbhooshan Dr., Chandigarh, IN; Singh, Sunil Kumar, Dr., Taichung City, TW; Hsu, Ching-Hsien, Dr., Taichung City, TW",
    patentNumber: "DE 20 2022 102 632 U1 2022-10-06",
    domain: "Engineering and Technology",
    status: "Published",
    filedDate: "2022-05-13",
    publishedDate: "2022-10-06",
  }
],  },
  {
    name: "Dr. Sudhakar Kumar",
    title: "Faculty Sponser ACM, Assistant Professor CSE CCTE CHD",
   
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
     imgSrc: "/mentors/mentor3.png",
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
          authors:
            "Sunil K. Singh, Sudhakar Kumar, Anureet Chhabra, Akash Sharma, Varsha Arya, M. Srinivasan, Brij B. Gupta",
          journal: "Cyber Security and Applications",
          doi: "10.1016/j.csa.2025.100089",
          type: "Article",
          impact: "High Impact",
        },
        {
          title:
            "Advanced Techniques and Best Practices for Phishing Detection",
          authors:
            "Ravina Mittal, Sunil K. Singh, Sudhakar Kumar, Trannum Khullar, Rakesh Kumar, Brij B. Gupta, Konstantinos Psannis",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-8784-9.ch008",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Advanced Tools and Technologies for Phishing Prevention",
          authors:
            "Kashish Preet Kaur, Sunil K. Singh, Sudhakar Kumar, Ishita Mehra, Shavi Bansal, Kwok Tai Chui, Vandana Sharma, Sunil Kumar Sharma",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-8784-9.ch009",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "AI-Driven Green Computing for Sustainable Information Security",
          authors:
            "Rajneesh Kumar, Sudhakar Kumar, Sunil K. Singh, Yash Rawat, Chunjia Han, Brij B. Gupta, Nadia Nedjah, Archit Jain",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-8034-5.ch005",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Challenges and Opportunities in Sustainable AI and Information Systems",
          authors:
            "Vanshika Singla, Sunil K. Singh, Sudhakar Kumar, Amit Chhabra, Shabeg Singh Gill, Varsha Arya, Archit Jain",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-8034-5.ch004",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Foundations of Phishing Defense",
          authors:
            "Raj Kanwar, Sumit Bawa, Sunil K. Singh, Sudhakar Kumar, Chandra Kumari Subba, Varsha Arya, Abhay Ratnaparkhi",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-8784-9.ch001",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Future Trends in AI-Driven Green Computing and Security",
          authors:
            "Avinash Mishra, Sudhakar Kumar, Sunil K. Singh, Deepak Bhattarai, Amit Chhabra, Shabeg Singh Gill, Varsha Arya, Archit Jain",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-8034-5.ch003",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Legal and Ethical Considerations in Phishing Defense",
          authors:
            "Janvi Sharma, Suni K. Singh, Sudhakar Kumar, Anish Sharma, Chandra Kumari Subba, Varsha Arya, Achin Jain, Arun Kumar Dubey",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-8034-5.ch020",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Leveraging Artificial Intelligence for Cyber Defense in Space Missions",
          authors:
            "Japjot Singh Nanda, Sunil K. Singh, Sudhakar Kumar, Dikshant Rajput, Chunjia Han, Brij B. Gupta, Nadia Nedjah",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-7939-4.ch006",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Phishing Prevention Solutions and Mechanisms",
          authors:
            "Abhavya Muku, Sunil K. Singh, Sudhakar Kumar, Ankita Sharma, Pooja Rai, Biraj Upadhyaya, Sunil Kumar Sharma, Vandana Sharma",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-8784-9.ch003",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Reducing the Carbon Footprint in Machine Learning With Eco-Friendly AI Training",
          authors:
            "Tanish Aggarwal, Sudhakar Kumar, Sunil K. Singh, Chandra Kumari Subba, Biraj Upadhyaya, Varsha Arya, Abhay Ratnaparkhi, Sunil Kumar Sharma",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-8034-5.ch010",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Resilient and Trusted Communication Frameworks for Space Missions",
          authors:
            "Shaurya Katna, Sudhakar Kumar, Sunil K. Singh, Abhishek Goyal, Animesh Singh, Lalit Kumar Vashishtha",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-7939-4.ch007",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Robust and Secure Communication Protocols for Space Missions",
          authors:
            "Harmanjot Singh, Sudhakar Kumar, Sunil K. Singh, Anoop Pant, Chandra Kumari Subba, Brij B. Gupta, Konstantinos Psannis",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-7939-4.ch008",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Securing Cyber-Physical Systems in Space Missions",
          authors:
            "Anubhav Singh, Sunil K. Singh, Sudhakar Kumar, Sumit Kumar, Shavi Bansal, Lalit Kumar Vashishtha, Arun Kumar Dubey, Achin Jain",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-7939-4.ch005",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "The Influence of AI on Social Interactions and Community Dynamics",
          authors:
            "Jasjeet Singh, Sunil K. Singh, Sudhakar Kumar, Samar Pratap Singh, Rakesh Kumar, Shavi Bansal, Kwok Tai Chui",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-8628-6.ch010",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Transforming User Experience in the Metaverse Through Emotional Intelligence and Affective Computing",
          authors:
            "Manvi Saini, Sudhakar Kumar, Sunil K. Singh, Aditi Bansal, Chunjia Han, Brij B. Gupta, Konstantinos Psannis",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-8628-6.ch015",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Understanding Cyber Threats in Modern Space Missions",
          authors:
            "Anoop Pant, Sudhakar Kumar, Sunil K. Singh, Harmanjot Singh, Chandra Kumari Subba, Shavi Bansal, Kwok Tai Chui",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-7939-4.ch002",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Virtual Economies and Social Structures in the Metaverse",
          authors:
            "Jaiveer Singh, Sudhakar Kumar, Sunil K. Singh, Deependra Singh, Animesh Singh, Varsha Arya, Abhay Ratnaparkhi",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-8628-6.ch006",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Virtual Identity and Self-Expression in the Metaverse",
          authors:
            "Aditi Sharma, Sudhakar Kumar, Sunil K. Singh, Shashi Jawla, Varsha Arya, Kwok Tai Chui",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-8628-6.ch005",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title: "Communication Systems for Drone Swarms and Remote Operations",
          authors:
            "Shaurya Katna, Sunil K. Singh, Sudhakar Kumar, Divyansh Manro, Amit Chhabra, Sunil Kumar Sharma",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-2707-4.ch006",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Drones and Unmanned Aerial Vehicles Automation Using Reinforcement Learning",
          authors:
            "Jaskirat Kaur, Sudhakar Kumar, Sunil K. Singh, Ruchika Thakur, Shavi Bansal, Varsha Arya",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-2707-4.ch011",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Enhancing Autonomous System Security With AI and Secure Computation Technologies",
          authors:
            "Tushar Singh, Sudhakar Kumar, Sunil K. Singh, Priyanshu, Brij B. Gupta, Jinsong Wu, Arcangelo Castiglione",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-2707-4.ch008",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Multi-Modal Sensor Fusion With CRNNs for Robust Object Detection and Simultaneous Localization and Mapping (SLAM) in Agile Industrial Drones",
          authors:
            "Ujjwal Thakur, Sunil K. Singh, Sudhakar Kumar, Anubhav Singh, Varsha Arya, Kwok Tai Chui",
          journal: "IGI Global",
          doi: "10.4018/979-8-3693-2707-4.ch012",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Enhancing smart grid reliability through cross-domain optimization of IoT sensor placement and communication links",
          authors:
            "Saket Sarin, Sunil K. Singh, Sudhakar Kumar, Shivam Goyal, Brij B. Gupta, Varsha Arya, Razaz Waheeb Attar, Shavi Bansal, Ahmed Alhomoud",
          journal: "Telecommunication Systems",
          doi: "10.1007/s11235-024-01235-1",
          type: "Article",
          impact: "High Impact",
        },
        {
          title:
            "Variance-driven security optimisation in industrial IoT sensors",
          authors:
            "Hardik Gupta, Sunil K. Singh, Sudhakar Kumar, Karan Sharma, Hardeep Saini, Brij B. Gupta, Varsha Arya, Kwok Tai Chui",
          journal: "IET Networks",
          doi: "10.1049/ntw2.12139",
          type: "Article",
          impact: "High Impact",
        },
        {
          title:
            "AN IoT Based Smart Healthcare Gadget: Attempt to Promote the Idea of Smart Healthcare System",
          authors:
            "Aishita Sharma, Sunil K. Singh, Soumya Sharma, Sunil Kumar, Kartik Dalal & Anureet Chhabra ",
          journal: "Advances in Intelligent Systems and Computing",
          doi: "10.1007/978-3-031-40905-9_11",
          type: "Article",
          impact: "Medium Impact",
        },
        {
          title:
            "Application of Green IoT in Digital Oilfields for Achieving Sustainability in the OnG Industry",
          authors:
            "Soumya Sharma, Sunil K. Singh, Sudhakar Kumar, Krish Kathuria, Tarun Vats",
          journal: "Springer",
          doi: "10.1007/978-3-031-40905-9_13",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Automatic parallelization for multicore architectures: Role, importance, and opportunities",
          authors:
            "Sudhakar Kumar, Sunil K. Singh, Naveen Aggarwal, Shabeg Singh Gill",
          journal:
            "Uncertainty in Computational Intelligence-Based Decision Making",
          doi: "10.1016/b978-0-443-21475-2.00006-0",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Blockchain Based Election System Using Fingerprint Recognition",
          authors:
            "Uday Madan, Sunil K. Singh, Sudhakar Kumar, Mehak Preet, Akash Sharma, Himanshu Setia",
          journal: "Springer",
          doi: "10.1007/978-3-031-40905-9_6",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Computational intelligence in decision support: Scope and techniques",
          authors: "Sudhakar Kumar, Sunil K. Singh, Leema Nelson",
          journal: "Elsevier",
          doi: "10.1016/B978-0-443-21475-2.00019-9",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Enhancing DDoS Attack Detection in SDN with a Stacked Model Framework Utilizing Deep Neural Networks",
          authors:
            "Aishita Sharma, Sunil K. Singh, Sudhakar Kumar, Shin Hung Pan, Brij B. Gupta, Kwok Tai Chui",
          journal:
            "IEEE International Conference on Consumer Electronics (ICCE)",
          doi: "10.1109/ICCE63647.2025.10929828",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
        {
          title:
            "Geospectra: leveraging quantum-SAR and deep learning for enhanced geolocation in urban environments",
          authors:
            "Saket Sarin, Sunil K. Singh, Sudhakar Kumar & Shivam Goyal ",
          journal: "The Journal of Supercomputing",
          doi: "10.1007/s11227-024-06619-3",
          type: "Article",
          impact: "High Impact",
        },
        {
          title:
            "Neoteric Threat Intelligence Ensuring Digital Sovereignty and Trust through ML-Infused Proactive Defense Analytics for NEXT-G and Beyond Ecosystems",
          authors:
            "Sudhakar Kumar, Sunil K. Singh, Rakesh Kumar, Chandra Kumari Subba, Kwok Tai Chui, Brij B. Gupta",
          journal: "Procedia Computer Science",
          doi: "10.1016/j.procs.2025.02.062",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
        {
          title:
            "Neural Network Architectures for Machine Translation: Enhancing Quality Education Through Improved Access to Multilingual Resources",
          authors:
            "Ayushi, Sudhakar Kumar, Sunil K. Singh, Samar Pratap Singh, Pooja Rai, Kwok Tai Chui, Brij B. Gupta",
          journal: "Springer",
          doi: "10.1007/978-3-031-88039-1_18",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Secure and cost-effective key management scheme for the Internet of Things-supported WSN",
          authors: "Rakesh Kumar, Sunil K. Singh, D.K. Lobiyal, Sudhakar Kumar",
          journal:
            "Uncertainty in Computational Intelligence-Based Decision Making",
          doi: "10.1016/b978-0-443-21475-2.00012-6",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Security Enhancement in Consumer Enterprises Using Neural Nets Within the SIEM Framework",
          authors:
            "Saksham Arora, Sudhakar Kumar, Sunil K. Singh, Sahil Garg, Brij B. Gupta, Shavi Bansal, Kwok Tai Chui",
          journal:
            "IEEE International Conference on Consumer Electronics (ICCE)",
          doi: "10.1109/ICCE63647.2025.10930094",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
        // More publications can be added here...
      ],
   2024: [
        {
          title:
            "Sustainable and intelligent time-series models for epidemic disease forecasting and analysis",
          authors:
            "A Chhabra, SK Singh, A Sharma, S Kumar, BB Gupta, V Arya, KT Chui",
          journal: "Sustainable Technology and Entrepreneurship 3 (2), 100064",
          doi: "https://doi.org/10.1016/j.stae.2023.100064",
          type: "Article",
          impact: "Medium Impact",
        },
        {
          title:
            "Ensemble deep learning and EfficientNet for accurate diagnosis of diabetic retinopathy",
          authors:
            "L Arora, SK Singh, S Kumar, H Gupta, W Alhalabi, V Arya, S Bansal, ...",
          journal: "Scientific Reports 14 (1), 30554",
          doi: "https://doi.org/10.1038/s41598-024-81132-4",
          type: "Article",
          impact: "High Impact",
        },
        {
          title: "IoT-enabled smart farming with Industry 5.0",
          authors: "A Sharma, SK Singh, S Kumar, R Thakur, BB Gupta, V Arya",
          journal: "Journal of High Speed Networks 30 (3), 477-496",
          doi: "https://doi.org/10.3233/JHS-230258",
          type: "Article",
          impact: "Medium Impact",
        },
        {
          title:
            "Security Metrics and Authentication-based RouTing (SMART) Protocol for Vehicular IoT Networks",
          authors: "R Kumar, SK Singh, DK Lobiyal, S Kumar, S Jawla",
          journal: "SN Computer Science 5 (2), 236",
          doi: "https://doi.org/10.1007/s42979-023-02566-7",
          type: "Article",
          impact: "Medium Impact",
        },
        {
          title:
            "UPSRVNet: Ultralightweight, Privacy preserved, and Secure RFID-based authentication protocol for VIoT Networks",
          authors: "R Kumar, SK Singh, DK Lobiyal",
          journal: "The Journal of Supercomputing 80 (1), 942-969",
          url: "https://openurl.ebsco.com/EPDB%3Agcd%3A5%3A25303797/detailv2?sid=ebsco%3Aplink%3Ascholar&id=ebsco%3Agcd%3A174659417&crl=c&link_origin=scholar.google.com",
          type: "Article",
          impact: "High Impact",
        },
        {
          title:
            "Revolutionizing Healthcare Systems: Synergistic Multimodal Ensemble Learning & Knowledge Transfer for Lung Cancer Delineation & Taxonomy",
          authors:
            "A Sharma, SK Singh, S Kumar, M Preet, BB Gupta, V Arya, KT Chui",
          journal:
            "2024 IEEE International Conference on Consumer Electronics (ICCE), 1-6",
          doi: "https://doi.org/10.1109/ICCE59016.2024.10444476",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
        {
          title:
            "Navigating the landscape: Safeguarding privacy and security in the era of ambient intelligence within healthcare settings",
          authors:
            "T Vats, S Kumar, SK Singh, U Madan, M Preet, V Arya, R Bansal, ...",
          journal: "Cyber Security and Applications 2, 100046",
          doi: "https://doi.org/10.1016/j.csa.2024.100046",
          type: "Article",
          impact: "High Impact",
        },
        {
          title:
            "Optimal Revenue Analysis of the Stubborn Mining Based on Markov Decision Process",
          authors: "Y Zhang, M Liu, J Guo, Z Wang, Y Wang, T Liang, SK Singh",
          journal:
            "International Conference on Machine Learning for Cyber Security, 299-308",
          doi: "",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
        {
          title:
            "Communication structure for Vehicular Internet of Things (VIoTs) and review for vehicular networks",
          authors: "R Kumar, SK Singh, DK Lobiyal",
          journal: "Automation and Computation, 300-310",
          url: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003333500-34/communication-structure-vehicular-internet-things-viots-review-vehicular-networks-rakesh-kumar-sunil-singh-lobiyal",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Unleashing the Power of Multi-Agent Reinforcement Learning for Algorithmic Trading in the Digital Financial Frontier and Enterprise Information Systems.",
          authors:
            "S Sarin, SK Singh, S Kumar, S Goyal, BB Gupta, W Alhalabi, V Arya",
          journal: "Computers, Materials & Continua 80 (2)",
          doi: "",
          type: "Article",
          impact: "Medium Impact",
        },
        {
          title:
            "SEIR‐driven semantic integration framework: Internet of Things‐enhanced epidemiological surveillance in COVID‐19 outbreaks using recurrent neural networks",
          authors:
            "S Sarin, SK Singh, S Kumar, S Goyal, BB Gupta, V Arya, KT Chui",
          journal:
            "IET Cyber‐Physical Systems: Theory & Applications 9 (2), 135-149",
          doi: "https://doi.org/10.1049/cps2.12091",
          type: "Article",
          impact: "Medium Impact",
        },
        {
          title:
            "Intelligent FaultEdge: AI-Driven Fault-Tolerant Edge Framework for Smart Grid Monitoring in IoT",
          authors:
            "T Singh, S Kumar, SK Singh, V Chilkoti, S Bansal, KT Chui, BB Gupta",
          journal:
            "2024 IEEE 12th International Conference on Intelligent Systems (IS), 1-6",
          doi: "https://doi.org/10.1109/IS61756.2024.10705247",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
        {
          title:
            "Adaptive Stochastic Fault Tolerance for Self-Healing P2P Networks",
          authors:
            "S Kumar, S Goyal, SK Singh, SK Sharma, RW Attar, V Arya, BB Gupta",
          journal: "",
          doi: "",
          type: "Article",
          impact: "Medium Impact",
        },
        {
          title:
            "Applying Visual Cryptography to Decrypt Data Using Human Senses",
          authors:
            "D Rajput, SK Singh, S Kumar, D Manro, S Bansal, V Arya, KT Chui",
          journal: "Innovations in Modern Cryptography, 376-404",
          url: "https://www.igi-global.com/chapter/applying-visual-cryptography-to-decrypt-data-using-human-senses/354048",
          type: "Book Chapter",
          impact: "Medium Impact",
        },
        {
          title:
            "Metaversal 6G: Deciphering Complex Requirements and Multivariate KPIs in High-Performance Computing",
          authors: "S Kumar, SK Singh, V Chilkoti, V Arya, KT Chui, BB Gupta",
          journal: "Procedia Computer Science 238, 914-919",
          doi: "https://doi.org/10.1016/j.procs.2024.06.112",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
        {
          title:
            "A novel Cumulative Indicator score using Indicator averaging for optimizing local business websites of enterprise systems",
          authors:
            "SK Singh, S Gupta, S Kumar, BB Gupta, W Alhalabi, V Arya, J Zhang",
          journal: "Enterprise Information Systems 18 (2), 2301658",
          doi: "https://doi.org/10.1080/17517575.2023.2301658",
          type: "Article",
          impact: "Medium Impact",
        },
        {
          title:
            "SentinelMet: Enhancing Metaverse Security through Deep Learning Techniques in 6G",
          authors: "D Rajput, SK Singh, S Kumar, H Vashisht, KT Chui, BB Gupta",
          journal:
            "2024 IEEE International Conference on Advanced Networks and Telecommunications Systems",
          doi: "https://doi.org/10.1109/ANTS63515.2024.10898831",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
        {
          title:
            "Advanced Evaluation of Propagation Models and Routing Protocols in Vehicular Ad-Hoc Networks",
          authors: "A Jaiswal, SK Singh, S Kumar, BB Gupta, KT Chui",
          journal:
            "2024 IEEE Cyber Science and Technology Congress (CyberSciTech), 406-411",
          doi: "https://doi.org/10.1109/CyberSciTech64112.2024.00070",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
        {
          title:
            "Integrating Machine Learning into Cardiovascular Disease Risk Prediction: A Comprehensive Analysis of Cholesterol, Heart Rate, and Gender Impact on Disease Prevalence",
          authors:
            "A Rahim, A Chhabra, Manya, SK Singh, S Kumar, H Gupta, K Sharma",
          journal:
            "International Conference on Computing and Communication Networks, 285-296",
          doi: "https://doi.org/10.1007/978-981-96-3250-3_23",
          type: "Conference Paper",
          impact: "Low Impact",
        },
        {
          title:
            "Improving Automated Text Editing and Understanding with Advanced Named Entity Recognition Techniques",
          authors: "V Chilkoti, S Kumar, SK Singh, D Goyal, KT Chui, BB Gupta",
          journal:
            "2024 IEEE Technology & Engineering Management Conference-Asia Pacific",
          doi: "https://doi.org/10.1109/TEMSCON-ASPAC62480.2024.11025005",
          type: "Conference Paper",
          impact: "Low Impact",
        },
        {
          title:
            "Gestational Diabetes Prediction using Machine Learning for Consumer Electronics Healthcare",
          authors: "S Garg, S Kumar, SK Singh, S Kumar, V Arya, BB Gupta",
          journal:
            "2024 IEEE International Symposium on Consumer Technology (ISCT), 243-249",
          doi: "https://doi.org/10.1109/ISCT62336.2024.10791210",
          type: "Conference Paper",
          impact: "Low Impact",
        },
        {
          title:
            "To predict the deposition of air pollutants on trees Leaf in high traffic area using Machine Learning Algorithm",
          authors: "N Yadav, SK Singh, D Sharma",
          journal:
            "2024 International Conference on Communication, Control, and Intelligent Systems",
          doi: "https://doi.org/10.1109/CCIS63231.2024.10931971",
          type: "Conference Paper",
          impact: "Low Impact",
        },
        {
          title:
            "Quantum-Resilient Cryptographic Primitives: An Innovative Modular Hash Learning Algorithm to Enhanced Security in the Quantum Era",
          authors: "Manish Singh, SK Singh, S Kumar, M Preet, V Arya, BB Gupta",
          journal: "",
          doi: "https://doi.org/10.21203/rs.3.rs-4052058/v1",
          type: "Article",
          impact: "Low Impact",
        },
        {
          title:
            "Zero Knowledge Proofs and Their Applications in Cryptography: Advancements, Challenges",
          authors: "SK Singh, BB Gupta, N Nedjah, A Castiglione",
          journal: "Innovations in Modern Cryptography",
          url: "https://www.igi-global.com/chapter/zero-knowledge-proofs-and-their-applications-in-cryptography/354035",
          type: "Book Chapter",
          impact: "Low Impact",
        },
        {
          title:
            "Deep Learning Model for Digital Forensics Face Sketch Synthesis",
          authors: "E Badwa, SK Singh, S Kumar, V Chilkoti, V Arya, KT Chui",
          journal: "Digital Forensics and Cyber Crime Investigation, 168-195",
          url: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003207573-9/deep-learning-model-digital-forensics-face-sketch-synthesis-eshita-badwa-sunil-singh-sudhakar-kumar-ayushi-vanshika-chilkoti-varsha-arya-kwok-tai-chui",
          type: "Book Chapter",
          impact: "Low Impact",
        },
      ],
    2023: [
        {
          title:
            "A comprehensive survey on deep learning-based methods for anomaly detection in IoT networks",
          authors: "SK Singh, S Kumar, BB Gupta, V Arya, KT Chui",
          journal: "Computer Networks",
          doi: "",
          type: "Article",
          impact: "High Impact",
        },
        {
          title:
            "Edge intelligence for autonomous vehicles: architectures, challenges, and future directions",
          authors: "S Kumar, SK Singh, S Goyal, R W Attar, V Arya, BB Gupta",
          journal: "Future Generation Computer Systems",
          doi: "",
          type: "Article",
          impact: "High Impact",
        },
        {
          title:
            "Federated learning for industrial IoT security: privacy-preserving analytics and intrusion detection",
          authors: "R Kumar, SK Singh, DK Lobiyal, S Kumar",
          journal: "IEEE Internet of Things Journal",
          doi: "",
          type: "Article",
          impact: "High Impact",
        },
        {
          title:
            "Blockchain-enabled access control and trust management in vehicular ad-hoc networks",
          authors: "R Kumar, SK Singh, DK Lobiyal",
          journal: "IET Intelligent Transport Systems",
          doi: "",
          type: "Article",
          impact: "High Impact",
        },
        {
          title:
            "Explainable AI for malware detection: interpretable deep models and evaluation",
          authors: "A Sharma, SK Singh, S Kumar, H Gupta, V Arya",
          journal: "Applied Intelligence",
          doi: "",
          type: "Article",
          impact: "High Impact",
        },
        {
          title:
            "Smart grid intrusion detection using hybrid deep learning on edge devices",
          authors: "S Sarin, SK Singh, S Kumar, S Goyal, BB Gupta, V Arya",
          journal: "Electric Power Systems Research",
          doi: "",
          type: "Article",
          impact: "High Impact",
        },
        {
          title:
            "Lightweight authentication protocol for RFID in vehicular IoT",
          authors: "R Kumar, SK Singh, DK Lobiyal",
          journal: "The Journal of Supercomputing",
          doi: "",
          type: "Article",
          impact: "High Impact",
        },
        {
          title:
            "Quantum-safe cryptography for next-generation networks: survey and roadmap",
          authors: "M Singh, SK Singh, S Kumar, V Arya, BB Gupta",
          journal: "Security and Communication Networks",
          doi: "",
          type: "Article",
          impact: "Medium Impact",
        },
        {
          title:
            "AI-driven anomaly detection for 6G-enabled Industry 5.0 systems",
          authors: "S Kumar, SK Singh, V Chilkoti, V Arya, KT Chui, BB Gupta",
          journal: "Procedia Computer Science",
          doi: "",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
        {
          title:
            "Privacy-preserving medical image analysis using federated learning and differential privacy",
          authors: "L Arora, SK Singh, S Kumar, H Gupta, V Arya",
          journal: "Scientific Reports",
          doi: "",
          type: "Article",
          impact: "High Impact",
        },
        {
          title:
            "Cyber-physical security in smart manufacturing: attacks, defenses, and resilience",
          authors: "A Chhabra, SK Singh, A Sharma, S Kumar, BB Gupta, KT Chui",
          journal: "Journal of Industrial Information Integration",
          doi: "",
          type: "Article",
          impact: "High Impact",
        },
        {
          title:
            "Deep reinforcement learning for resource allocation in vehicular edge computing",
          authors: "S Goyal, SK Singh, S Kumar, SK Sharma",
          journal: "Computer Communications",
          doi: "",
          type: "Article",
          impact: "High Impact",
        },
        {
          title:
            "Secure key management for IoT-supported wireless sensor networks",
          authors: "R Kumar, SK Singh, DK Lobiyal, S Kumar",
          journal: "Computer Standards & Interfaces",
          doi: "",
          type: "Article",
          impact: "High Impact",
        },
        {
          title:
            "Adversarial robustness in intrusion detection systems: challenges and solutions",
          authors: "H Gupta, SK Singh, S Kumar, BB Gupta",
          journal: "Information Sciences",
          doi: "",
          type: "Article",
          impact: "High Impact",
        },
        {
          title:
            "Privacy-aware data sharing for smart healthcare: frameworks and applications",
          authors: "U Madan, SK Singh, M Preet, S Kumar, V Arya",
          journal: "IEEE Access",
          doi: "",
          type: "Article",
          impact: "High Impact",
        },
        {
          title:
            "A novel hybrid model integrating MFCC and acoustic parameters for voice disorder detection",
          authors: "Kumar, S. et al.",
          journal: "Scientific Reports",
          doi: "https://doi.org/10.1038/s41598-023-49869-6",
          type: "Article",
          impact: "High Impact",
        },
        {
          title:
            "Hyperdimensional Consumer Pattern Analysis with Quantum Neural Architectures using Non-Hermitian Operators",
          authors: "Kumar, S. et al.",
          journal: "ACM Conference",
          doi: "https://doi.org/10.1145/3647444.3652458",
          type: "Conference Paper",
          impact: "Medium Impact",
        },
        {
          title:
            "Exploring Advanced Neural Networks For Cross-Corpus Fake News Detection",
          authors: "Kumar, S. et al.",
          journal: "ACM Conference",
          doi: "https://doi.org/10.1145/3647444.3652457",
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
          title:
            "Fuzzy Based Clustering of Consumers Big Data in Industrial Applications",
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
            "A Novel Deep Federated Learning-Based Model to Enhance Privacy in Critical Infrastructure Systems",
          authors: "Kumar, S. et al.",
          journal:
            "International Journal of Software Science and Computational Intelligence",
          url: "https://www.igi-global.com/article/a-novel-deep-federated-learning-based-model-to-enhance-privacy-in-critical-infrastructure-systems/334711",
          type: "Article",
          impact: "High Impact",
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
      linkedin: "https://in.linkedin.com/in/sudhakarkumar5", // sample
      twitter: "",
      scholar: "https://scholar.google.co.in/citations?user=vsLPXb4AAAAJ&hl=en",
      orcid: "https://orcid.org/0000-0001-7928-4234", // optional
    },

    achievements: [
      {
        title:
          "IEEE Professional Member (Computer Science and Engineering) Membership",
        organization: "IEEE: New York, NY, US",
        year: "2020 to present",
        description: "",
      },
      {
        title:
          "IEEE Consumer Technology Society Membership (Computer Science and Engineering)",
        organization: "IEEE: New York, NY, US",
        year: "2020 to present",
        description: "",
      },
      {
        title: "Association for Computing Machinery Professional Member",
        organization:
          "Association for Computing Machinery: New York, New York, US",
        year: "2016 to present",
        description: "",
      },
    ],
  },
];

// Scoped styles for Mentors component only - no global body override
const styles = `
.mentors-section {
  background: caf0f8;
  background-attachment: fixed;
  padding: 1rem 2dvw;
  font-family: 'Segoe UI', sans-serif;
  margin: 200px;
  margin-left: 0;
  color: #222c3d;
  min-height: 100vh;
  width: 100%;
  margin-top:-70px;
  margin-bottom: 18px;
}

.mentors-section h1 {

  text-align: center;
  color: #274472;
  margin-bottom: 1.5rem;
  font-weight: 700;
  font-size: 2.5em;
  letter-spacing: 0.06em;
 
}

.mentors-section .card__container {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  justify-content: center;
  padding: 2rem 0;
}

.mentors-section .card {
  background-color: white;
  border: 8px solid transparent;
  border-radius: 12px;
  box-shadow: 0 0 24px 0 #4169bb;
  opacity: 0.85;
  transition: all 0.3s ease;
  width: 330px;  /* wider card */
  height: 420px; /* taller card */
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  overflow: hidden;
}

.mentors-section .card img {
  border-radius: 0;
  width: 300px;
  height: 300px;
  object-fit: cover;
  flex-shrink: 0;
  margin-top:0;
}

.mentors-section .card:hover {
  opacity: 1;
  border-color: #4a90e2;
  box-shadow: 0 0 100px #3a67a5;
  transform: scale(1.05);
  z-index: 2;
}

.mentors-section .card__content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem 1.2rem;
  background-color:white;
  color: #274472; 
  border-radius: 0 0 12px 12px;
  text-align: center;
  font-weight: 600;
  box-sizing: border-box;
}

.mentors-section .card__content h2 {

  margin: 0 0 6px 0;
  font-size: 1.3rem;
  text-shadow: 0 1px 5px rgba(0, 52, 102, 0.7);
  line-height: 1.3;
}

.mentors-section .card__content p {
  margin: 0;
  font-size: 1rem;
  opacity: 0.95;
  line-height: 1.4;
}
#profileCard {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  width: 90vw;
  height: 84vh;
  background: white; /* White background */
  color: #003366; /* Base blue text color */
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: auto;
  display: flex;
  gap: 30px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.profile {
  width: 250px;
  flex-shrink: 0;
  text-align: center;
}

.profile img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid #3399ff;
  object-fit: cover;
  margin-bottom: 10px;
}
  .profile .social-icons img {
  border: none;
  border-radius: 0;
  margin: 0;
  padding: 0;
}

.profile h2 {
  font-size: 24px;
  font-weight: 700;
  color: #0059b3; /* Darker blue */
}

.profile .title {
  font-size: 17px;
  color: #3399ff; /* Lighter blue */
}

.profile p {
  font-size: 17px;
  color: #336699;
}

.social-icons {
  margin-top: 15px;
  margin-bottom:8px;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.social-icons i {
  font-size: 24px;
  color: #0059b3;
  cursor: pointer;
}
  .social-icons a {
  position: relative;
  display: flex;
  align-items: center;
}

/* Add line after every icon except the last one */
.social-icons a:not(:last-child)::after {
  content: "";
  display: block;
  width: 1.8px;         /* thickness of line */
  height: 35px;       /* match icon height */
  background-color: #0059b3;  /* line color */
  margin-left: 12px;  /* spacing between icon and line */
}


.info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow-y: auto;
}


.info h3 {
  font-size: 28px;
  color: #004080;
  margin-bottom: 8px;
}

.info h3.year-header {
  font-size: 22px;   /* smaller */
  color: #133b76;    /* different color if you want */
}
.info p {
  font-size: 22px;
  color: #336699;
  margin-bottom: 15px;
}

.specializations span {
  background-color: #b1d5fbff; /* Light blue background */
  padding: 3px 8px;
  border-radius: 16px;
  font-size: 18px;
  color: blue;
}

.tabs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tab {
  padding: 6px 14px;
  background-color: #e6f2ff;
  border: none;
  border-radius: 16px;
  color: #004080;
  cursor: pointer;
  font-size: 13px;
}

.tab.active {
  background-color: #004080;
  color: white;
}

.tab-content {
  display: none;
}

.tab-content.active {
  display: block;
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: #e6f2ff;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 18px;
  color: #004080;
  cursor: pointer;
}

.close-btn:hover {
  background-color: #cce6ff;
}

.publication-card {
  background: #f9fbffcc;
  border-radius: 14px;
  padding: 1.2rem 1.4rem;
  margin: 0.9rem 0;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.07);
  transition: transform 0.2s ease, box-shadow 0.25s ease;
  color: #0f2a5b;
}

.publication-card:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.12);
}

.pub-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: #144a9f;
  line-height: 1.3;
}

.pub-authors {
  font-size: 0.9rem;
  color: #23385e;
  margin-bottom: 0.25rem;
  font-weight: 600;
}

.pub-journal {
  color: #2a6bcc;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.35rem;
}

.pub-meta {
  margin-top: 0.5rem;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
  font-size: 0.87rem;
  font-weight: 600;
  color: #3d71d7;
}

.pub-type,
.pub-impact {
  background-color: #e5eeff;
  padding: 4px 10px;
  border-radius: 20px;
  font-weight: 700;
  user-select: none;
  box-shadow: inset 0 0 7px rgba(26, 102, 255, 0.3);
}

.pub-impact.high-impact {
  background-color: #dff5dc;
  color: #2a672d;
  box-shadow: inset 0 0 7px rgba(60, 145, 60, 0.35);
}

.pub-impact.medium-impact {
  background-color: #e4f0fe;
  color: #2a5699;
  box-shadow: inset 0 0 7px rgba(42, 86, 153, 0.4);
}

.pub-impact.normal {
  background-color: #e4f0fe;
  color: #2a5699;
}

.pub-link {
  margin-left: auto;
  text-decoration: none;
  font-weight: 700;
  color: #3a5dba;
  user-select: none;
  transition: color 0.25s ease;
}

.pub-link:hover {
  color: #2552a1;
}

.year-header {
  cursor: pointer;
  font-size: 1.22rem;
  font-weight: 700;
  margin-top: 1.6rem;
  user-select: none;
  color: #133b76;
  display: flex;
  align-items: center;
  gap: 0.28rem;
  transition: color 0.25s ease;
}

.year-header:hover {
  color: var(--highlight);
}

.pub-count {
  font-weight: 500;
  color: #6a7083;
  font-size: 1rem;
}

.pub-list {
  margin-left: 1.1rem;
  margin-top: 0.6rem;
}

.activities-grid {
  display: grid;
  gap: 20px;
  margin-top: 20px;
}


.profile .additional-img {
margin-top: 12px;
  width: 100%;            /* full width of its container */
  height: 290px;           /* keep aspect ratio */
 object-fit: fill;  /* cover the area */
  max-width: 230px;    /* limit max width */
  max-height: 370px;   /* limit max height */

  border-radius: 0;
  background-color: #fff;
}
.projects-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-card {
  border: 1px solid #d0d7de;
  border-left: 4px solid #184ba7;
  padding: 1rem;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}

.project-card h4 {
  margin: 0 0 15px 0;
  color: #053493ff;
  font-size: 1.6rem;
}
.project-card .project-agency {
  color: #0d49b9ff;
  margin: 12px 0;
  font-size: 1.4rem;
}


.project-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 8px;
  font-size: 1.2rem;
  color: #2b3d61;
}

.patents-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1.2rem; /* base font for all text */
}

.patents-grid .patent-card {
  border: 1px solid #d0d7de;
  border-left: 4px solid #184ba7;
  padding: 0.8rem;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}

.patents-grid .patent-title {
  margin: 0 0 20px 0;
  color: #04318aff;
  font-size: 1.6rem; /* bigger title */
  font-weight: 650;
}

.patents-grid .patent-info {
  color: #184ba7;
  margin: 4px 0;
  font-size: 1.3rem; /* smaller text */
}

.patents-grid .patent-dates {
  margin-top: 4px;
  
  color: #2b3d61;
}

.patents-grid .patent-dates p {
  margin: 4px 0;
  font-size: 1.3rem;
}

.patents-grid .patent-card a {
  color: #184ba7;
  text-decoration: underline;
}


@media (min-width: 600px) {
  .activities-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.activity-card {
  background-color: #f8fbffcc;
  color: #0a2f67;
  padding: 20px;
  border-radius: 14px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
  font-weight: 600;
  transition: box-shadow 0.25s ease;
}

.activity-card:hover {
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18);
}

#professionalActivities h4 {
  color: #0b2d60;
}

#professionalActivities p {
  color: #2b3d61;
}

.team-member {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 140px;
  padding: 16px 14px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(6px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.14);
  transition: transform 0.3s ease;
  margin: 0 8px 8px 0;
  color: #eaf2ff;
  user-select: none;
  font-weight: 700;
  text-shadow: 0 0 5px rgba(50, 111, 190, 0.7);
}

.team-member:hover {
  transform: translateY(-6px);
}

.team-member img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #c0dcff;
  margin-bottom: 10px;
  box-shadow: 0 0 10px rgba(114, 159, 255, 0.85);
}

.team-member p {
  font-size: 1rem;
  text-align: center;
  margin: 0;
  color: #176fe3ff;
}

.specializations {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 20px;
  padding: 0 10px;
}



/* Tablet and small desktop */
@media (max-width: 1024px) {
  #profileCard {
    width: 85vw;
    height: 90vh;
    padding: 25px;
    gap: 25px;
  }
  
  .profile {
    width: 220px;
  }
  
  .tabs {
    gap: 6px;
    margin-bottom: 20px;
  }
  
  .tab {
    padding: px 12px;
    font-size: 12px;
  }
  
  .tab-content {
    padding: 15px 0;
  }
}

/* Large mobile and tablet */
@media (max-width: 768px) {
  .mentors-section .card__container {
    flex-direction: column;
    align-items: center;
  }

  .mentors-section .card {
    width: 80vw;
    height: auto;
    min-height: 397px;
  }

  #profileCard {
    flex-direction: column;
    height: 95vh;
    width: 96vw;
    padding: 20px;
    gap: 20px;
    overflow-y: scroll;
  }

  .profile {
    width: 100%;
    margin-bottom: 15px;
  }
  
  .profile .additional-img {
    width: 180px;
    height: 220px;
    margin: 30px auto 0 auto;
  }

  .info {
    width: 100%;
    gap: 20px;
  }

  .tabs {
    justify-content: center;
    gap: 15px;
    margin-bottom: 8px;
    padding: 15px 10px;
    flex-wrap: wrap;
  }
  
  .tab {
    padding: 14px 20px;
    font-size: 14px;
    min-width: 90px;
    text-align: center;
    border-radius: 20px;
  }
  
  .tab-content {
    padding: 12px 15px;
    margin: 0 -5px;
  }
}

/* Small mobile */
@media (max-width: 480px) {
  .mentors-section .card {
    width: 85vw;
    min-height: 405px;
  }
.mentors-section .card__content{
padding: 0rem 1.2rem;
}
  #profileCard {
    width: 98vw;
    height: 96vh;
    padding: 15px;
    gap: 15px;
  }
  
  .profile .additional-img {
    width: 150px;
    height: 180px;
    margin: 25px auto 0 auto;
  }
  
  .tabs {
    flex-direction: column;
    gap: 12px;
    margin-bottom: 6px;
    padding: 0px 0px;
    align-items: stretch;
  }
  
  .tab {
    padding: 16px 24px;
    font-size: 15px;
    min-width: auto;
    width: 100%;
    text-align: center;
    border-radius: 25px;
  }
  
  .tab-content {
    padding: 10px 15px;
    margin: 0 -5px;
  }

/* Extra small mobile */
@media (max-width: 360px) {
  .tabs {
    gap: 4px;
  }
  
  .tab {
    padding: 6px 8px;
    font-size: 10px;
    min-width: 60px;
  }
  
  .tab-content {
    padding: 12px 8px;
  }
  
  .publication-card {
    padding: 10px 12px;
  }
  
  .activity-card {
    padding: 12px;
  }
}

/* Hide additional image on mobile to give tabs more space */
@media (max-width: 768px) {
  .profile .additional-img {
    display: none;
  }
}

/* Hide image until 773px width and move content upwards */
@media (max-width: 773px), (max-height: 997px) {
  .profile .additional-img {
    display: none;
  }
  
  /* Move content upwards when image is hidden */
  .profile p {
    margin-top: 25px;
  }
}

.tabs {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 250px; /* Match profile width */
}

.tab {
  padding: 6px 12px; /* Slightly smaller padding for better fit */
  background-color: #e6f2ff;
  border: none;
  border-radius: 16px;
  color: #004080;
  cursor: pointer;
  font-size: 11px; /* Smaller font size to fit better */
  flex: 1;
  min-width: 70px; /* Ensure minimum width for readability */
  text-align: center;
}

/* Enhanced mobile responsive styles for tabs in profile section */
@media (max-width: 768px) {
  .tabs {
    gap: 4px;
    max-width: 100%;
    margin: 5px 0;
  }
  
  .tab {
    padding: 8px 10px;
    font-size: 10px;
    min-width: 60px;
    flex: 1;
  }
}

@media (max-width: 480px) {
  .tabs {
    gap: 3px;
    flex-direction: row;
    flex-wrap: wrap;
  }
  
  .tab {
    padding: 6px 8px;
    font-size: 9px;
    min-width: 50px;
    max-width: calc(50% - 2px); /* Ensure maximum 2 tabs per row */
  }


}
`;

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
        
        {/* Show DOI link if available */}
        {publication.doi && (
          <a
            className="pub-link"
            href={`https://doi.org/${publication.doi}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            DOI ↗
          </a>
        )}

        {/* Show external URL if available */}
        {publication.url && (
          <a
            className="pub-link"
            href={publication.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Link ↗
          </a>
        )}
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
            <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
              📅 {activity.year}
            </p>
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
function Projects({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <div id="projects" className="projects-grid" aria-label="Projects">
      {items.map((project, i) => (
        <div className="project-card" key={i}>
          {/* Title */}
          <h4>{project.title}</h4>

          {/* Funding Agency */}
          {project.agency && (
            <p className="project-agency">
              
              <span role="img" aria-label="agency"></span>{" "}
              <strong>Funding Agency:</strong> {project.agency}
            </p>
          )}

          {/* Status, Role, Amount, Year */}
          <div className="project-meta">
            {project.status && (
              <span>✅ {project.status}</span>
            )}
            {project.role && (
              <span>👤 {project.role}</span>
            )}
            {project.amount && (
              <span>{project.amount}</span>
            )}
            {project.year && (
              <span>📅 {project.year}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function Patents({ items }) {
  if (!items || items.length === 0) return <p>No patents.</p>;

  return (
    <div className="patents-grid">
      {items.map((patent, i) => (
        <div className="patent-card" key={i}>
          {/* Title */}
          <h3 className="patent-title">{patent.title}</h3>

          {/* Inventors */}
          {patent.inventors && <p className="patent-info">👤 {patent.inventors}</p>}

          {/* Domain */}
          {patent.domain && <p className="patent-info">📍 {patent.domain}</p>}

          {/* Patent number */}
          {patent.patentNumber && (
            <p className="patent-info">📄 Patent No: {patent.patentNumber}</p>
          )}

          {/* Status */}
          {patent.status && <p className="patent-info">⏳ {patent.status}</p>}

          {/* Dates */}
          <div className="patent-dates">
            {patent.filedDate && <p>📅 Filed {patent.filedDate}</p>}
            {patent.publishedDate && <p>✅ Published {patent.publishedDate}</p>}
          </div>

          {/* Optional link */}
          {patent.link && (
            <p className="patent-info">
              🔗{" "}
              <a href={patent.link} target="_blank" rel="noopener noreferrer">
                View Document
              </a>
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

function MentorProfile({ mentor, onClose }) {
  const [activeTab, setActiveTab] = useState("about");

  const sortedYears = Object.keys(mentor.publications || {})
  .map(Number)
  .sort((a, b) => b - a);

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
        <img
          id="profileImg"
          src={mentor.imgSrc || "/placeholder.svg"}
          alt={mentor.name}
        />
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
            <a
              href={mentor.social.email}
              target="_blank"
              rel="noopener noreferrer"
              role="listitem"
              aria-label="Email"
            >
              <i className="fas fa-envelope" title="Email"></i>
            </a>
          )}

          {mentor.social?.linkedin && (
            <a
              href={mentor.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              role="listitem"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in" title="LinkedIn"></i>
            </a>
          )}

          {mentor.social?.twitter && (
            <a
              href={mentor.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              role="listitem"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" title="Twitter"></i>
            </a>
          )}

         {mentor.social?.scholar && (
  <a
    href={mentor.social.scholar}
    target="_blank"
    rel="noopener noreferrer"
    role="listitem"
    aria-label="Google Scholar"
    title="Google Scholar"
  >
    <img
      src="/mentors/scholar.png"
      alt="Google Scholar"
      style={{ width: "35px", height: "31px" }}
    />
  </a>
)}

{mentor.social?.orcid && (
  <a
    href={mentor.social.orcid}
    target="_blank"
    rel="noopener noreferrer"
    role="listitem"
    aria-label="ORCID"
    title="ORCID"
  >
    <img
      src="/mentors/orcid.png"
      alt="ORCID"
      style={{ width: "35px", height: "33px" }}
    />
  </a>
)}

        </div>

        {mentor.additionalImg && (
          <img className="additional-img" src={mentor.additionalImg} />
        )}

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
            onClick={() => setActiveTab("publications")}
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
          <button
            className={`tab ${activeTab === "Patents" ? "active" : ""}`}
            onClick={() => setActiveTab("Patents")}
            role="tab"
            aria-selected={activeTab === "Patents"}
            id="tab-Patents"
            aria-controls="Patents"
            tabIndex={activeTab === "Patents" ? 0 : -1}
          >
             Patents
          </button>
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
        </nav>

        <section
          className={`tab-content ${activeTab === "about" ? "active" : ""}`}
          id="about"
          role="tabpanel"
          aria-labelledby="tab-about"
          tabIndex={0}
        >
          <h3 className="section-title">About Me</h3>
          <p id="profileAbout">{mentor.about || "Bio goes here..."}</p>

          {mentor.education && mentor.education.length > 0 && (
            <>
               <h3 className="section-title">Education</h3>
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
                        fontSize: "1.3rem",
                        fontWeight: "700",
                        color: "#03045e",
                      }}
                    >
                      {edu.degree}
                    </div>
                    <div
                      style={{
                        fontSize: "1.2rem",
                        opacity: 0.9,
                        color: "#03045e",
                      }}
                    >
                      {edu.institution}
                    </div>
                    <div style={{ fontSize: "1rem", color: "blue" }}>
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
               <h3 className="section-title">Specializations</h3>
              <div className="specializations" id="profileSkills">
                {mentor.skills.map((skill, i) => (
                  <span key={i}>{skill}</span>
                ))}
              </div>
            </>
          )}
        </section>

        <section
          className={`tab-content ${
            activeTab === "publications" ? "active" : ""
          }`}
          id="publications"
          role="tabpanel"
          aria-labelledby="tab-publications"
          tabIndex={0}
        >
          <h3>Publications</h3>
          {mentor.publications &&
          Object.keys(mentor.publications).length > 0 ? (
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
          className={`tab-content ${
            activeTab === "activities" ? "active" : ""
          }`}
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
          <Projects items ={mentor.projects} />
        </section>

         <section
  className={`tab-content ${activeTab === "Patents" ? "active" : ""}`}
  id="patents"
  role="tabpanel"
  aria-labelledby="tab-patents"
  tabIndex={0}
>
  <h3>Patents</h3>
  <Patents items={mentor.patents} />
</section>

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
      <style>{styles}</style>

      <h1
        style={{
          display: "grid",
          placeItems: "center",
          fontSize: "clamp(2rem, 5vw, 4rem)",
          color: "#00296b",
          fontWeight: 700,
          marginTop: 0,
          marginBottom: "40px",
        }}
      >
        MENTORS
      </h1>

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
