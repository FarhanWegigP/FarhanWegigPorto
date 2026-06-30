/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Tio",
  title: "Hi, I'm Tio",
  subTitle: emoji(
    "A Data Science student passionate about AI systems, RAG pipelines, and building end-to-end data applications."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/FarhanWegigP",
  linkedin: "https://www.linkedin.com/in/farhan-wegig-pramudito-90499a346/",
  gmail: "tios00123@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  instagram: "https://www.instagram.com/weeegiig/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DATA SCIENCE STUDENT FOCUSED ON AI, RAG PIPELINES & DATA ENGINEERING",
  skills: [
    emoji("⚡ Build RAG pipelines and AI-powered chatbots using LangChain, pgvector, and hybrid search"),
    emoji("⚡ Design and ship end-to-end data applications, from scraping/ETL to dashboards"),
    emoji("⚡ Work across the data stack: Python/ML, FastAPI backends, Kafka/Spark pipelines, and SQL/BI tools")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "logos:python"
    },
    {
      skillName: "pandas",
      fontAwesomeClassname: "logos:pandas-icon"
    },
    {
      skillName: "numpy",
      fontAwesomeClassname: "logos:numpy"
    },
    {
      skillName: "scikit-learn",
      image: require("./assets/images/scikitLearnLogo.webp")
    },
    {
      skillName: "langchain",
      image: require("./assets/images/langchainLogo.png")
    },
    {
      skillName: "huggingface",
      fontAwesomeClassname: "logos:hugging-face-icon"
    },
    {
      skillName: "fastapi",
      fontAwesomeClassname: "logos:fastapi-icon"
    },
    {
      skillName: "postgresql",
      fontAwesomeClassname: "logos:postgresql"
    },
    {
      skillName: "apache-kafka",
      fontAwesomeClassname: "logos:kafka"
    },
    {
      skillName: "apache-spark",
      fontAwesomeClassname: "logos:apache-spark"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "logos:docker-icon"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "logos:react"
    },
    {
      skillName: "nextjs",
      fontAwesomeClassname: "logos:nextjs-icon"
    },
    {
      skillName: "javascript",
      fontAwesomeClassname: "logos:javascript"
    },
    {
      skillName: "sql",
      fontAwesomeClassname: "logos:mysql-icon"
    },
    {
      skillName: "power-bi",
      fontAwesomeClassname: "logos:microsoft-power-bi"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon"
    },
    {
      skillName: "jupyter",
      fontAwesomeClassname: "logos:jupyter"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "logos:linux-tux"
    },
    {
      skillName: "microsoft-azure",
      fontAwesomeClassname: "logos:microsoft-azure"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universitas Sebelas Maret (UNS), Surakarta",
      logo: require("./assets/images/unsLogo.png"),
      subHeader: "Bachelor of Data Science",
      duration: "2023 - Present",
      desc: "Relevant coursework: Time Series Analysis, Machine Learning, Data Management, Database Systems, Big Data Engineering, Cloud Technology for Big Data Analytics.",
      descBullets: []
    },
    {
      schoolName: "SMA Negeri 6 Yogyakarta",
      logo: require("./assets/images/sman6Logo.png"),
      subHeader: "Mathematics & Natural Sciences",
      duration: "2020 - 2023",
      desc: "",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Science / ML", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "AI / RAG / NLP",
      progressPercentage: "80%"
    },
    {
      Stack: "Backend & Data Engineering",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AI Engineer & Data Analyst",
      company: "Kantor Akuntan Publik (KAP) Hikmah dan Arief",
      companylogo: require("./assets/images/hikmahLogo.jpg"),
      date: "February 2026 – June 2026",
      desc: "Built MHTax, a web app for analyzing Indonesian tax court decisions, with a RAG pipeline and an AI-powered Q&A chatbot (KAPHA).",
      descBullets: [
        "Collected tax court documents via web scraping (Playwright)",
        "Implemented RAG pipeline using FastAPI, LangChain, pgvector, BAAI/bge-m3 embeddings, CrossEncoder reranking, and hybrid BM25+vector search",
        "Built semantic search and AI-powered Q&A chatbot (KAPHA)",
        "Developed analytics dashboard for document statistics and insights",
        "Stack: Python, FastAPI, PostgreSQL, pgvector, LangChain, React"
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Kantor Akuntan Publik (KAP) Hikmah dan Arief",
      companylogo: require("./assets/images/hikmahLogo.jpg"),
      date: "February 2026 – June 2026",
      desc: "Built a Knowledge Management System for internal document storage, retrieval, and workflows.",
      descBullets: [
        "Designed database schema for document storage and retrieval",
        "Automated document conversion to PDF format",
        "Organized and cleaned internal company documents",
        "Created system flowcharts for workflows and database operations"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
  // Fallback projects shown if no pinned repos are found on the GitHub profile
  projects: [
    {
      name: "biography-fact-checker",
      description:
        "AI fact-checking system for biographies using RAG: multilingual semantic search over Wikipedia with Groq Llama 3.3 70B and Chain-of-Thought reasoning.",
      url: "https://github.com/FarhanWegigP/biography-fact-checker",
      primaryLanguage: {name: "Python", color: "#3572A5"}
    },
    {
      name: "law-scraper",
      description:
        "Indonesian legal knowledge graph: scrapes 100+ regulations & 278 Supreme Court rulings into 481 nodes + 809 edges of legal relationships.",
      url: "https://github.com/FarhanWegigP/law-scraper",
      primaryLanguage: {name: "Python", color: "#3572A5"}
    },
    {
      name: "style-extractor",
      description:
        "Extracts a website's design system (colors, typography, spacing, components) into a ready-to-use DESIGN.md for AI coding agents, via Playwright-driven computed-style scraping.",
      url: "https://github.com/FarhanWegigP/style-extractor",
      primaryLanguage: {name: "Python", color: "#3572A5"}
    }
  ]
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "DATA SCIENCE, AI AND DATA ENGINEERING PROJECTS I'VE BUILT",
  projects: [
    {
      projectName: "MHTax — Tax Court Decision Analysis System",
      projectDesc:
        "Web app for Indonesian tax court document retrieval, summarization, and analysis. Features semantic search, RAG-based chatbot (KAPHA), and analytics dashboard. Stack: FastAPI, PostgreSQL, pgvector, LangChain, React, BAAI/bge-m3"
    },
    {
      projectName: "Bitcoin Price Prediction Pipeline (Real-Time Big Data)",
      projectDesc:
        "End-to-end real-time pipeline for Bitcoin price prediction using Apache Kafka for streaming ingestion, Apache Spark for processing, and dashboard visualization. Stack: Apache Kafka, Apache Spark, Python, Dashboard"
    },
    {
      projectName: "Apple Stock Price Prediction on Azure",
      projectDesc:
        "End-to-end ML pipeline on Microsoft Azure covering data scraping, preprocessing, model training, and deployment. Stack: Python, Microsoft Azure, Cloud Computing"
    },
    {
      projectName: "Data Warehouse — Electronic Music Sales (Beatport)",
      projectDesc:
        "Constellation schema data warehouse for digital music sales analysis with ETL using SSIS, SQL Server, and Power BI dashboard. Stack: SSIS, SQL Server, Power BI"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Publications and Leadership roles that I have done !",

  achievementsCards: [
    {
      title: "Build an AI Agent",
      subtitle: "IBM SkillsBuild — May 2026",
      image: require("./assets/images/ibmLogo.webp"),
      imageAlt: "IBM SkillsBuild Logo",
      footerLink: [
        {
          name: "Credly",
          url: "https://www.credly.com/go/bjTvmjJP"
        }
      ]
    },
    {
      title: "Introduction to Large Language Models",
      subtitle: "IBM SkillsBuild — May 2026",
      image: require("./assets/images/ibmLogo.webp"),
      imageAlt: "IBM SkillsBuild Logo",
      footerLink: []
    },
    {
      title: "Data Classification and Summarization Using IBM Granite",
      subtitle: "IBM SkillsBuild — June 2025",
      image: require("./assets/images/ibmLogo.webp"),
      imageAlt: "IBM SkillsBuild Logo",
      footerLink: [
        {
          name: "Credly",
          url: "https://www.credly.com/badges/3e2c6d05-5d8f-4be2-9724-8eb0cb21cd0f"
        }
      ]
    },
    {
      title: "Data Series Fair 16.0 - Data Engineer",
      subtitle: "Dibimbing",
      image: require("./assets/images/dibimbingLogo.png"),
      imageAlt: "Dibimbing Logo",
      footerLink: []
    },
    {
      title:
        "Prediksi Harga Penutupan Saham Gojek-Tokopedia Menggunakan Model Hybrid GARCH-LSTM",
      subtitle:
        "Journal of Information System Research (JOSH), Vol. 7 No. 2, January 2026, pp. 272–281",
      image: require("./assets/images/publicationLogo.png"),
      imageAlt: "Publication",
      footerLink: [
        {
          name: "DOI",
          url: "https://doi.org/10.47065/josh.v7i2.8911"
        }
      ]
    },
    {
      title: "WIBAWA UNS 2025 — Technology & Marketing Operations Team",
      subtitle:
        "June–Dec 2025 — Built internal POS and inventory system for the event",
      image: require("./assets/images/wibawaLogo.png"),
      imageAlt: "WIBAWA UNS Logo",
      footerLink: []
    },
    {
      title: "Pertamina Hulu Energi x Dealls Jobs Career Day 2025",
      subtitle:
        "Logistics Coordinator — June 2025 — Received MVP award for Logistics Division Coordinator contribution",
      image: require("./assets/images/pertaminaLogo.png"),
      imageAlt: "Pertamina Hulu Energi x Dealls Logo",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+62-813-2659-5369",
  email_address: "tios00123@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
