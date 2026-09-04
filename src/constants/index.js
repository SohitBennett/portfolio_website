// import project1 from "../assets/projects/project-1.jpg";
// import project2 from "../assets/projects/project-2.jpg";
// import project3 from "../assets/projects/project-3.jpg";
// import project4 from "../assets/projects/project-4.jpg";


export const HERO_CONTENT = `Software Engineer focused on building production-grade web and mobile applications with JavaScript and TypeScript. I work across React, Next.js, React Native, Node.js, and MongoDB, with hands-on experience in real-time systems, caching, cloud deployment, and product analytics. Currently working as an SDE Intern at Inddev Ventures, building and shipping features across web, mobile, backend, and infrastructure.`;


export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly as well as eye catching web applications, also an AI ML student where I have created a lot of powerfull AI applications. I have worked with a variety of technologies, including MERN stack, Java applications, python games also very proficinet in cpp. My journey in web development began with a deep curiosity for how websites work what cookies are which I used to tap "I accept everytime without knowing what it did.", I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const ABOUT_TEXT2 = 'I am a Software Engineer and Computer Science graduate focused on building production-grade web and mobile applications. I work primarily with JavaScript and TypeScript across React, Next.js, React Native, Node.js, and MongoDB. During my work at a startup, I have built features across frontend, backend, real-time systems, caching, analytics, and cloud deployment. I enjoy solving practical engineering problems, learning how systems work under the hood, and turning ideas into reliable products.';

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [

  {
    title: "Gatekeeper: Visitor Management System",
    description:
      "A full-stack web application that streamlines visitor check-ins and check-outs for organizations. It features secure visitor registration, host notifications via email, QR code generation for entry passes, and a real-time dashboard for admins to monitor active visitors. The system also includes role-based access control, visit history logs, and a responsive UI for both web and tablet devices.",
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB", "Express.js", "JWT", "Nodemailer"],
    folderName: "vms",
    github: "https://github.com/SohitBennett/visitor-management-frontend",
    live: "https://visitor-management-frontend.vercel.app",
  },
  {
    title: "Planify",
    description:
      "Full-stack calendar application inspired by Google Calendar, with multiple calendar views, event and task management, recurring events, search, and automated email reminders.",
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB", "Express.js", "JWT", "ShadCN"],
    folderName: "calendar",
    github: "https://github.com/SohitBennett/planify",
    live: "https://planify-sigma-azure.vercel.app/",
  },
  {
    title: "BookShelf",
    description:
      "A fully functional book browsing & tracking website with features like ai recommendation, personalised book selection, Pomodoro timer & user authentication.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS", "Node.js", "MongoDB", "Express.js", "JWT"],
    folderName: "bookshelf",
    github: "https://github.com/SohitBennett/bookshelf",
    live: "https://book-shelf-lime.vercel.app",
  },
  {
    title: "Internet Speed Meter",
    description:
      "Developed a robust chrome extension to monitor internet speed constantly, very necessary as a nerd.",
    technologies: ["JavaScript", "Chrome Extensions API", "HTML", "CSS", "LocalStorage", "Fetch API"],
    folderName: "speedmeter",
    github: "https://github.com/SohitBennett/Internet-Speed-meter-extension",
  },
  {
    title: "Ochi Frontend webstie",
    description:
      "Recreated the Awwward-winning Ochi design site using React, Framer Motion, and GSAP to achieve smooth scroll, animated transitions, and a modern, responsive UI. Emphasized pixel-perfect layout and interactive user experience.",
    technologies: ["React.js", "HTML", "CSS", "JavaScript", "Framer Motion", "GSAP", "Tailwind CSS"],
    folderName: "ochi",
    github: "https://github.com/SohitBennett/Ochi",
    live: "https://ochi-orcin.vercel.app",
  },
  {
    title: "Fullstack Task Notes application",
    description:
      "Developed a to-do list application in Nextjs with database intergrated for seamless and reliable updation & deletion of tasks",
    technologies: ["Next.js", "Node.js", "MongoDB", "Express.js", "Passport.js", "JWT"],
    folderName: "todolist",
    github: "https://github.com/SohitBennett/nextjs-todo-list",
    live: "https://nextjs-todo-list-vert-ten.vercel.app"
  },
  {
    title: "Pinterest Clone",
    description:
      "Create boards, save pins and make collages of all your inspiration in this website, Backend project with minimal frontend using ejs",
    technologies: ["ejs", "Node.js", "MongoDB", "Express.js", "Passport.js", "Cookies"],
    folderName: "pin",
    github: "https://github.com/SohitBennett/pinterest-clone"
  },
  {
    title: "AI powered Gesture based Application Launcher",
    description:
      "An ai model based software for launching application on pc using an air canvas to simply just write the name of application to launch it.",
    technologies: ["Python", "MeidaPipe", "OpenCV", "Tenserflow", "Windows API", "OCR model"],
    folderName: "launcher",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind", "Framer-motion"],
    folderName: "portfolio",
    github: "https://github.com/SohitBennett/portfolio_website",
    live: "https://sohitjoshi.vercel.app/"
  },
  {
    title: "Parakh Practice Exam portal",
    description:
      "A platform for adaptive learning for students using AI model to set difficulty of pratice quizes adaptively. ",
    technologies: ["HTML", "CSS", "Python", "django", "mySQL", "Random Forest"],
    folderName: "parakh",
    github: ""
  },
];

export const CONTACT = {
  address: "Bennett University, Greater Noida, UP",
  phoneNo: "+91 7302167270",
  email: "sohitjoshi21@gmail.com",
};
