/* eslint-disable max-len */
export const exploreWorlds = [
  {
    id: 'world-1',
    imgUrl: '/planet-01.png',
    title: 'The Hogwarts',
  },
  {
    id: 'world-2',
    imgUrl: '/planet-02.png',
    title: 'The Upside Down',
  },
  {
    id: 'world-3',
    imgUrl: '/planet-03.png',
    title: 'Kadirojo Permai',
  },
  {
    id: 'world-4',
    imgUrl: '/planet-04.png',
    title: 'Paradise Island',
  },
  {
    id: 'world-5',
    imgUrl: '/planet-05.png',
    title: 'Hawkins Labs',
  },
];

export const startingFeatures = [
  'Find a world that suits you and you want to enter',
  'Enter the world by reading basmalah to be safe',
  'No need to beat around the bush, just stay on the gas and have fun',
];

export const newFeatures = [
  {
    imgUrl: '/vrpano.svg',
    title: 'A new world',
    subtitle:
      'we have the latest update with new world for you to try never mind',
  },
  {
    imgUrl: '/headset.svg',
    title: 'More realistic',
    subtitle:
      'In the latest update, your eyes are narrow, making the world more realistic than ever',
  },
];

export const socials = [
  {
    name: 'linkedin',
    png: '/linkedin.svg',
    url: 'https://www.linkedin.com/in/midfai-yabani/',
  },
  {
    name: 'instagram',
    png: '/instagram.svg',
    url: 'https://www.instagram.com/midfai/',
  },
  {
    name: 'github',
    png: '/github.png',
    url: 'https://github.com/Midfyni',
  },
];

export const certifications = [
  {
    title: 'Machine Learning Specialization',
    provider: 'Bangkit Academy',
    date: '2023',
    link: '/bangkit.pdf',
  },
  {
    title: 'Belajar Fundamental Aplikasi Android',
    provider: 'Dicoding',
    date: '2024',
    link: 'https://www.dicoding.com/certificates/1RXYL750KPVM',
  },
  {
    title: 'Deep Learning Specialization',
    provider: 'Coursera (Andrew Ng)',
    date: '2023',
    link: 'https://www.coursera.org/user/f8a6e6acc5b2459cde44431e50cc1e11',
  },
  {
    title: 'Cloud and Generative AI on Amazon Web Server (AWS)',
    provider: 'Dicoding',
    date: '2024',
    link: 'https://www.dicoding.com/certificates/QLZ9VED8EX5D',
  },
  {
    title: 'Architecting on Amazon Web server (AWS)',
    provider: 'Dicoding',
    date: '2025',
    link: 'https://www.dicoding.com/certificates/JLX15V925Z72',
  },
  {
    title: 'Backend Developer Expert dengan Javascript',
    provider: 'Dicoding',
    date: '2025',
    link: 'https://www.dicoding.com/certificates/MRZMN2L7RPYQ',
  },
  {
    title: 'Google Cloud Associate Engineer',
    provider: 'Google Cloud',
    date: '2025',
    link: 'https://www.cloudskillsboost.google/public_profiles/07a76328-e865-46bb-8cbc-326513439157',
  },
  {
    title: 'Backend Developer',
    provider: 'IDCamp',
    date: '2025',
    link: '/IDcamp_Certification.pdf',
  },
  {
    title: 'TOEFL (527)',
    provider: 'ULM',
    date: '2025',
    link: '/Midfai Yabani_Toefl.pdf',
  },
];

export const providers = [
  { name: 'Bangkit', logo: '/bangkit.jpg' },
  { name: 'Dicoding', logo: '/dicoding.jpg' },
  { name: 'Google Cloud', logo: '/GCloud.jpg' },
  { name: 'IDCamp', logo: '/idcamp.png' },
  { name: 'Coursera', logo: '/coursera.png' },
  { name: 'Deeplearning.ai', logo: '/deeplearning.png' },
  { name: 'AWS', logo: '/AWS_logo.jpg' },
];

export const projects = [
  {
    imgUrls: ['/PettyCash_Logo.png', '/PettyCash_UI.png', '/PettyCash_Workflow(2).png', '/PettyCash_Discussion.jpg', 'PettyCash_Working.png'],
    title: 'PettyCash',
    github: '',
    website: '',
    techStacks: ['Google Cloud', 'Flask', 'Python', 'Tailwind', 'Bigquery', 'API Consume', 'GIT'],
    subtitle:
      'PettyCash is a web-based application developed during my internship at PLN to improve the efficiency of financial reporting. The system uses Optical Character Recognition (OCR) to automatically read text and numerical values from shopping receipts. This automation significantly reduces the manual workload previously required in the financial reporting process \n\n For how it works, employees simply scan or upload an image of a shopping receipt through the website. The system then extracts the receipt details using OCR. Before the data is finalized, the user validates the extracted information to ensure its accuracy. Once confirmed, the data is saved and forwarded to the finance department for report generation. \n\n Previously, employees had to manually submit their physical receipts to the finance department, where staff members manually typed every detail into Excel. This process was slow, error-prone, and difficult to track. PettyCash eliminates these issues by digitizing the entire workflow, improving accuracy and saving significant time for both employees and the finance team. \n\n  During the development of this application, we were also required to calculate the business cost–value to ensure the long-term sustainability of the project, as well as design a structure that supports a scalable and maintainable system.',
  },
  {
    imgUrls: ['/Statistika_Dashboard.png', '/Statistik_Meeting.jpg'],
    title: 'Statistics FMIPA Lambung Mangkurat University',
    github: '',
    website: 'https://kl.statistika.ulm.ac.id/',
    techStacks: ['CodeIgniter 4', 'PHP', 'Bootstrap', 'MySQL', 'GIT'],
    subtitle:
      'This project is a full-stack internship management website developed for the Statistics Study Program at Lambung Mangkurat University. The system is built using CodeIgniter 4 and serves as a centralized platform for managing all internship-related activities. \n\n The website streamlines communication and documentation between lecturers, students, and administrative staff. Previously, internship processes such as reporting, assessment, and announcements were handled manually and spread across multiple channels. This centralized platform ensures that all activities are well-organized, accessible, and properly documented. \n\n By integrating all internship workflows into a single system, this project improves efficiency, enhances transparency, and ensures that communication between all involved parties is clear and structured. It supports better monitoring, reduces administrative workload, and creates a more organized internship process.',
  },
  {
    imgUrls: ['/bincau_muara.png', '/Bincau_Dashboard.png', '/Bincau_PetaUmum.png', 'Bincau_PetaWilayah.png', '/Bincau_PetaJalan.png', '/Bincau_PetaInteraktif'],
    title: 'Bincau Muara Village Profile Website',
    github: '',
    website: 'https://bincau.vercel.app/',
    techStacks: ['Typescript', 'React', 'Leaflet', 'GIT'],
    subtitle:
      'The Bincau Muara Village Profile Application is a modern web platform built using TypeScript and React. It is designed to provide a comprehensive digital profile of the Bincau Muara village, presenting essential information in a clean and user-friendly interface. Showcase various village-related data, including Village Location, Number of MSMEs, Schoold, Mosques, Health Service Facilities and additional resources such as the Area Map and Road Map of Bincau Muara. \n\n This website serves as an informative platform for residents, visitors, and stakeholders by centralizing important village data into one accessible application. It enhances transparency, supports local development, and helps promote the village through a modern digital presence.',
  },
  {
    imgUrls: ['/SPECTANI.jpg', '/Spectani-1.jpeg', '/Spectani-2.jpeg', '/Spectani_BankIndonesia.png'],
    title: 'SPECTANI',
    github: '',
    website: 'https://www.instagram.com/spectani.id/',
    techStacks: ['Laravel', 'Bootstrap', 'MQTT', 'MySQL', 'GIT'],
    subtitle:
      'Spectani is an innovation-driven website developed by students from Lambung Mangkurat University, aimed at advancing modern agriculture through technology. The platform combines IoT devices with a web-based system to allow farmers to monitor and control their farm environments remotely and in real time. \n\n Spectani addresses the challenges faced by farmers—such as mushroom growers who require strict environmental control—by providing continuous monitoring of key conditions like temperature, humidity, and other vital parameters. This helps ensure optimal growing conditions, increases productivity, and reduces manual workload. \n\n I was responsible for building the communication layer between the IoT devices and the website using the MQTT message broker. this include Establishing reliable publish–subscribe channels for sensor data, Ensuring real-time data delivery from devices to the web dashboard, Supporting command messages from the website back to the IoT controllers, Maintaining efficient, lightweight communication suitable for low-power hardware. \n\n With the MQTT-based communication system in place, Spectani enables farmers to access live data and control their farming environment from anywhere, supporting smarter decision-making and more efficient agricultural management',
  },
  {
    imgUrls: ['/Close.png'],
    title: 'Forum-API with Javascript',
    github: 'https://github.com/Midfyni/Forum-API',
    website: '',
    techStacks: ['AWS', 'NodeJs', 'Javascript', 'Test-Driven Development', 'CI/CD', 'GIT'],
    subtitle:
      'This project was developed as part of my Backend Expert training program at Decoding, where I deepened my understanding of backend engineering and professional development workflows. The program focused heavily on applying industry-standard practices to build reliable, scalable, and maintainable backend services. \n\n Throughout the program, I gained hands-on experience with Building RESTful APIs, Automation Testing and continuous quality assurance, Clean Architecture for maintainable code structure, CI/CD pipelines to automate deployment, Security best practices for backend applications, Scalability and performance considerations. \n\n A key part of the training involved strict discipline in implementing Test-Driven Development (TDD) and following clean, professional coding standards. This strengthened my ability to write testable, modular, and robust backend logic. \n\n As part of the graduation criteria, I was required to deploy the final project using Amazon Web Services (AWS). This gave me practical experience in hosting, managing, and monitoring backend services in a cloud environment.',
  },
];
