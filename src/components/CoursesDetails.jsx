/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomCourseDetails from "../customComponent/CustomCourseDetails";
import { useParams } from "react-router-dom";

function CoursesDetails() {
  const { courseId } = useParams();

  const courseDetailInfo = [
    {
      id: 1,
      header: {
        years: 4,
        heading: "Junior College XI and XII Arts Stream",
      },
      description: {
        description1:
          "The Humanities stream, commonly known as the Arts stream, offers a diverse range of subjects that provide students with a strong foundation in various disciplines. It is one of the most versatile streams, offering students the flexibility to choose from broad subjects to shape their academic and career paths.",
        description2:
          "The core subjects in this stream include History, Geography, Political Science, and English. At the same time, students have the freedom to choose from multiple elective subjects such as economics, psychology, fine arts, sociology, physical education, and literature. Also, English is compulsory, while students can select Hindi or Marathi as an elective language.",
        description3:
          "The Humanities stream is ideal for students interested in civil services, law, journalism, social sciences, and management. The vast scope of opportunities makes this stream one of the most popular choices among students aiming for careers in government services, business, education, media, research, and the creative arts.",
      },
      learnt: {
        pointer1:
          "Develop a strong understanding of human society, culture, and historical perspectives.",
        pointer2:
          "Gain knowledge of political and economic structures and their influence on the world.",
        pointer3:
          "Enhance critical thinking, analytical skills, and communication skills.",
        pointer4:
          "Improve awareness of environmental issues and their impact on society.",
        pointer5:
          "Explore subjects related to technology, psychology, and physical education.",
      },
      subjectOffered: "",
      Career: {
        description:
          "The Arts stream provides extensive career opportunities in both academic and professional fields. Students can opt for a subject-oriented graduation or pursue professional courses such as:",
        learnt: {
          pointer1: "Civil Services (IAS, IPS, IFS, etc.)",
          pointer2: "Law (LLB, Corporate Law, Legal Studies)",
          pointer3:
            "Management (BBA, MBA, HR Management, Marketing, International Business)",
          pointer4:
            "Media and Journalism (Mass Communication, Digital Media, Film Studies)",
          pointer5: "Education (Teaching, Research, Psychology, Counseling)",
          pointer6:
            "Technical Courses (BCA, B.Arch., Graphic Design, Animation)",
          pointer7:
            "Creative Fields (Fine Arts, Performing Arts, Fashion Design, Photography)",
        },
      },
    },
    {
      id: 0,
      header: {
        years: 0,
        heading: "Junior College XI and XII Commerce Stream",
      },
      description: {
        description1:
          "The Commerce stream is an ideal choice for students completing their 10th standard, especially for those with a keen interest in business, finance, and economics. If you have strong mathematical and analytical skills, this stream will provide you with a solid foundation in accounting, trade, management, and entrepreneurship.",
        description2:
          "The Commerce curriculum includes core subjects like Bookkeeping & Accountancy, Organization of Commerce & Management, Economics, and Information Technology, along with optional subjects such as Secretarial Practice, Mathematics, Business Communication, and Statistics. English is compulsory, and students can choose between Hindi or Marathi as an elective language.",
        description3:
          "Graduates from this stream have a wide range of career opportunities in fields such as banking, business management, finance, accounting, trade, and entrepreneurship. Popular undergraduate courses after 12th Commerce include BBA, B.Com, BMS, CA, CS, BBM, and more.",
      },
      learnt: {
        pointer1: "Accounting principles and financial management",
        pointer2: "Business laws, trade practices, and management strategies",
        pointer3: "Economic theories and market analysis",
        pointer4: "Secretarial practices and business communication",
        pointer5: "Application of Information Technology in commerce",
        pointer6:
          "Role of Mathematics and Statistics in business decision-making",
      },
      subjectOffered: "",
      Career: {
        description:
          "Commerce stream offers a diverse range of career opportunities in multiple industries. Students can opt for:",
        learnt: {
          pointer1:
            "Banking & Finance: Careers in investment banking, stock markets, insurance, and financial analysis.",
          pointer2:
            "Accounting & Taxation: Become a Chartered Accountant (CA), Cost Accountant (CMA), or Tax Consultant.",
          pointer3:
            "Business & Management: Pursue careers in Business Administration, Marketing, and Entrepreneurship.",
          pointer4:
            "Corporate & Law: Specialize in Company Secretary (CS), Business Law, and Corporate Governance.",
          pointer5:
            "Data & Analytics: Opportunities in Business Analytics, Financial Analysis, and Market Research.",
          pointer6:
            "Government Services: Appear for competitive exams like UPSC, SSC, Banking Exams, and State Services.",
        },
      },
    },
    {
      id: 2,
      header: {
        years: 2,
        heading: "BSc Data Science",
      },
      description: {
        description1:
          "The BSc. Data Science program is a 4-year undergraduate degree designed to equip students with analytical, computational, and statistical skills essential for data-driven decision-making. This program focuses on mathematical modelling, artificial intelligence, machine learning, and big data analytics to prepare students for a future in the rapidly growing field of data science.",
        description2:
          "With an interdisciplinary approach, the curriculum combines computer science, statistics, and business intelligence to allow students to extract meaningful insights from data. It is an ideal program for individuals strongly inclined toward mathematics, programming, and analytical thinking.",
        description3:
          "Graduates of this program are well-equipped to work in industries such as finance, healthcare, technology, e-commerce, and research, where data-driven decision-making is crucial.",
      },
      learnt: {
        pointer1: "Fundamentals of Programming (Python, R, SQL)",
        pointer2: "Mathematics, Probability, and Statistics for Data Science",
        pointer3: "Machine Learning and Artificial Intelligence Techniques",
        pointer4: "Big Data Analytics and Cloud Computing",
        pointer5: "Data Visualization and Business Intelligence Tools",
        pointer6: "Predictive Modeling and Statistical Analysis",
        pointer7: "Real-world Data Science Applications and Case Studies",
      },
      subjectOffered:
        "To learn more about the subjects, just download the file from the link.",
      Career: {
        description:
          "With the increasing importance of data across industries, a degree in Data Science opens doors to numerous career opportunities, including:",
        learnt: {
          pointer1:
            "Data Scientist: Extract insights from data to improve decision-making.",
          pointer2:
            "Data Analyst: Interpret and visualize data to identify trends and patterns.",
          pointer3:
            "Big Data Engineer: Work with large datasets and optimize storage solutions.",
          pointer4:
            "Business Intelligence Analyst: Use data to drive business strategies",
          pointer5:
            "AI Researcher: Innovate and improve machine learning algorithms.",
          pointer6:
            "Cloud Data Engineer: Implement cloud-based data solutions.",
        },
      },
    },
    {
      id: 3,
      header: {
        years: 3,
        heading: "BSc IT (Information Technology)",
      },
      description: {
        description1:
          "The BSc. IT (Information Technology) is a 3-year undergraduate program designed to provide students with a strong foundation in computer science, programming, networking, database management, and cybersecurity. This program is ideal for individuals passionate about technology, software development, and IT solutions.",
        description2:
          "The curriculum focuses on software engineering, data management, cloud computing, and web technologies, equipping students with the skills required to excel in the IT industry. The program also includes hands-on projects and real-world case studies to ensure practical application of knowledge.",
        description3:
          "Graduates of this program can pursue careers in software development, IT management, cybersecurity, cloud computing, and networking, among many others.",
      },
      learnt: {
        pointer1: "Fundamentals of Programming (C, C++, Java, Python)",
        pointer2: "Database Management Systems (SQL, NoSQL, MongoDB)",
        pointer3: "Networking and Cybersecurity Principles",
        pointer4: "Cloud Computing and Virtualization",
        pointer5: "Web Development and Mobile App Development",
        pointer6: "Software Engineering and System Analysis",
        pointer7: "Artificial Intelligence and Data Science Basics",
        pointer8: "Ethical Hacking and Information Security",
      },
      subjectOffered:
        "To learn more about the subjects, just download the file from the link.",
      Career: {
        description:
          "A degree in BSc. IT opens up a broad spectrum of career opportunities in various industries, including:",
        learnt: {
          pointer1:
            "Software Developer: Design and develop applications for web and mobile platforms.",
          pointer2:
            "Database Administrator: Manage and optimize databases for efficient data storage.",
          pointer3:
            "Network Engineer: Maintain and secure IT network infrastructures.",
          pointer4:
            "Cybersecurity Analyst: Protect systems from cyber threats and vulnerabilities.",
          pointer5:
            "Cloud Engineer: Work with cloud-based solutions for businesses.",
          pointer6:
            "IT Support Specialist: Provide technical assistance and troubleshooting solutions.",
          pointer7:
            "Data Analyst: Interpret and analyze data for business insights.",
          pointer8:
            "Web Developer: Design and develop responsive and dynamic websites.",
        },
      },
    },
    {
      id: 5,
      header: {
        years: 3,
        heading: "BCom Bachelor of Commerce",
      },
      description: {
        description1:
          "The Bachelor of Commerce (BCom) is a 3-year undergraduate program designed to provide students with comprehensive knowledge of commerce, finance, business management, and economics. This program is ideal for individuals looking to develop skills in accounting, taxation, banking, and financial planning to excel in the corporate and financial sectors",
        description2:
          "The curriculum covers core commerce subjects while integrating modern business trends, ensuring students gain theoretical knowledge and practical application. With an emphasis on business operations, market analysis, and entrepreneurship, the BCom program prepares students for higher studies and professional careers.",
        description3:
          "Graduates from this program have numerous opportunities in banking, finance, corporate management, entrepreneurship, and government sectors.",
      },
      learnt: {
        pointer1: "Principles of Accounting and Financial Management",
        pointer2: "Business Law and Corporate Governance",
        pointer3: "Taxation, Auditing, and Cost Accounting",
        pointer4: "Banking and Financial Services",
        pointer5: "Business Economics and Market Analysis",
        pointer6: "Entrepreneurship and Business Development",
        pointer7: "E-commerce and Digital Business Trends",
        pointer8: "Stock Market and Investment Strategies",
      },
      subjectOffered:
        "To learn more about the subjects, just download the file from the link.",
      Career: {
        description:
          "A BCom degree provides students with multiple career opportunities in various industries. Some of the key career options include:",
        learnt: {
          pointer1:
            "Chartered Accountant (CA): Pursue CA after BCom for a professional career in auditing and taxation.",
          pointer2:
            "Financial Analyst: Work in investment firms, banks, or corporate finance.",
          pointer3:
            "Banking & Insurance: Build a career in the retail, investment, and insurance sectors.",
          pointer4:
            "Business Consultant: Provide advisory services in financial planning and management.",
          pointer5:
            "Corporate Executive: Work in multinational companies in business operations and management.",
          pointer6: "Entrepreneur: Start and manage your business venture.",
          pointer7:
            "Tax Consultant: Specialize in tax planning, GST, and compliance regulations.",
          pointer8:
            "Government Services: Appear for UPSC, SSC, Banking Exams, and State Public Service Commission Exams.",
        },
      },
    },
    {
      id: 6,
      header: {
        years: 3,
        heading: "BA Bachelor of Arts",
      },
      description: {
        description1:
          "The Bachelor of Arts (BA) is a 3-year undergraduate program designed to provide students with a broad and deep understanding of humanities, social sciences, and liberal arts. This program is perfect for individuals passionate about literature, history, philosophy, political science, psychology, and sociology, offering flexibility in subject choices to cater to diverse academic interests.",
        description2:
          "The curriculum fosters critical thinking, research abilities, analytical skills, and effective communication, preparing students for careers in education, media, public administration, social work, law, and creative fields. The interdisciplinary approach of the BA program ensures holistic development and opens up multiple pathways for higher education and career prospects.",
        description3: "",
      },
      learnt: {
        pointer1: "History, Culture, and Civilization Studies",
        pointer2: "Political Science and Public Administration",
        pointer3: "Psychology and Human Behavior",
        pointer4: "Sociology and Social Welfare Policies",
        pointer5: "Linguistics and Literature Analysis",
        pointer6: "Philosophy, Ethics, and Logical Reasoning",
        pointer7: "Mass Communication and Media Studies",
        pointer8: "Research Methodologies in Social Sciences",
      },
      subjectOffered:
        "To learn more about the subjects, just download the file from the link.",
      Career: {
        description:
          "A BA degree offers diverse career opportunities across multiple fields. Some of the key career paths include:",
        learnt: {
          pointer1:
            "Civil Services (UPSC, SSC, State PSCs): Work in government administration, policy-making, and governance.",
          pointer2:
            "Teaching & Education: Become a lecturer, teacher, or academic researcher.",
          pointer3:
            "Media & Journalism: Pursue careers in content writing, journalism, and publishing.",
          pointer4:
            "Law & Public Policy: Advance into legal studies or policy-making roles.",
          pointer5:
            "Social Work & NGOs: Engage in social advocacy, human rights, and welfare services.",
          pointer6:
            "Corporate Communications: Work in PR, advertising, and corporate writing.",
          pointer7:
            "Creative Arts & Writing: Explore careers in scriptwriting, blogging, and digital media.",
        },
      },
    },
    {
      id: 4,
      header: {
        years: 3,
        heading: "BSc Bachelor of Science",
      },
      description: {
        description1:
          "The Bachelor of Science (BSc) is a 3-year undergraduate program that provides students with in-depth knowledge of scientific principles, research methodologies, and practical applications in various scientific fields. This program is ideal for biology, chemistry, physics, mathematics, and computer science students, offering a strong foundation for further academic and professional pursuits.",
        description2:
          "The curriculum integrates theoretical learning with laboratory experiments, field studies, and research projects, ensuring students gain practical exposure to modern scientific advancements and technologies. A BSc degree opens pathways to higher education, research, and careers in healthcare, technology, environmental science, and engineering.",
        description3: "",
      },
      learnt: {
        pointer1: "Fundamental concepts of Physics, Chemistry, and Biology",
        pointer2: "Advanced Mathematics and Statistical Analysis",
        pointer3: "Computer Science and Data Processing",
        pointer4: "Scientific Research Methods and Laboratory Techniques",
        pointer5: "Environmental Science and Sustainable Development",
        pointer6: "Biotechnology and Genetic Studies",
        pointer7: "Innovations in Material Science and Nanotechnology",
        pointer8: "Project-Based Learning and Scientific Research",
      },
      subjectOffered:
        "To learn more about the subjects, just download the file from the link.",
      Career: {
        description:
          "A BSc degree offers vast career opportunities in diverse scientific and technological sectors. Some of the key career paths include:",
        learnt: {
          pointer1:
            "Research Scientist: Conduct research in various scientific domains, including physics, chemistry, and life sciences.",
          pointer2:
            "Healthcare & Medical Sciences: Work in biotechnology, microbiology, or pursue further studies in medical fields.",
          pointer3:
            "Environmental Science & Sustainability: Contribute to environmental conservation and sustainable development projects.",
          pointer4:
            "Data Science & Analytics: Use statistical methods and programming to analyze complex datasets.",
          pointer5:
            "Teaching & Academia: Become a science educator, lecturer, or academic researcher.",
          pointer6:
            "IT & Software Development: Specialize in computer science, software engineering, or AI.",
          pointer7:
            "Industrial & Chemical Research: Work in pharmaceuticals, material sciences, and chemical industries.",
        },
      },
    },
  ];

  const [selectedCourseId, setSelectedCourseId] = useState();

  useEffect(() => {
    setSelectedCourseId(courseId);
  }, []);

  const selectedCourse = courseDetailInfo.find(course => course.id === parseInt(courseId.trim()));
  console.log({ selectedCourse });

  return <CustomCourseDetails selectedCourse={selectedCourse} />;
}

export default CoursesDetails;
