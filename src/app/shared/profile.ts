/* ============================================================
   Single source of truth for all portfolio content.
   Edit this file to update text, links, skills and projects —
   the UI reads everything from here.
   ============================================================ */

export const PROFILE = {
  name: 'Rashmita Subedi',
  roles: [
    'Associate Software Engineer',
    'Java Developer',
    'Angular Developer',
    'Full Stack Developer',
    'Part-time Java Lecturer',
    'Spring Boot & Angular',
  ],
  tagline:
    'Associate Software Engineer at F1Soft and part-time Java Lecturer at Everest College — I build dependable backend systems and love teaching the next wave of developers.',
  location: 'Kathmandu, Nepal',
  email: 'rashmita.javawithjava@gmail.com',
  availability: 'Open to new opportunities',
  photo: 'person.png', // background-removed cutout in public/ (original: img.png)

  socials: [
    { label: 'GitHub', icon: 'github', url: 'https://github.com/rashuuuuuu' },
    { label: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/rashmita-subedi-876b722a4/' },
    { label: 'Email', icon: 'mail', url: 'mailto:rashmita.javawithjava@gmail.com' },
  ],

  stats: [
    { value: '1.8+', label: 'Years of experience' },
    { value: '3', label: 'Companies & teaching role' },
    { value: '14+', label: 'Projects on GitHub' },
  ],

  about: [
    "I'm a software engineer with 1.8 years of professional experience, currently at F1Soft — Nepal's leading fintech company — where I work across the Java and Spring Boot stack to build reliable, secure backend services.",
    'Before F1Soft I worked as a Java Developer at Cosmo-tech International, where I built REST APIs, management systems and secure authentication flows from the ground up.',
    'Alongside my engineering role, I teach Java part-time at Everest College, helping students master object-oriented programming, data structures, and the fundamentals that make great developers.',
    'My academic foundation is a Bachelor in Information Management (BIM), which blends software, systems and business — giving me a practical, product-minded view of the code I write.',
  ],

  experience: [
    {
      role: 'Associate Software Engineer',
      org: 'F1Soft International',
      period: '2025 — Present',
      points: [
        'Develop and maintain backend services for fintech products used at national scale.',
        'Contribute to loan-management and core-banking modules exposed through secure REST APIs.',
        'Work with microservices to build modular, independently scalable services.',
        'Collaborate across an agile team on releases serving a large customer base.',
      ],
      accent: 'cyan',
    },
    {
      role: 'Part-time Java Lecturer',
      org: 'Everest College',
      period: 'Oct 2025 — March 2026',
      points: [
        'Teach core Java, OOP and data structures to undergraduate students.',
        'Design assignments, lab exercises and projects that mirror real-world development.',
        'Mentor students on coding best practices and career preparation.',
      ],
      accent: 'cyan',
    },
    {
      role: 'Java Developer',
      org: 'Cosmo-tech International Pvt. Ltd.',
      period: '2024 — 2025',
      points: [
        'Built RESTful backend services with Java and Spring Boot, including a hotel-management API and an online store.',
        'Implemented authentication and authorization using Spring Security and stateless JWT.',
        'Designed relational schemas and persistence layers with MySQL and JPA / Hibernate.',
        'Collaborated in an agile team using Git and GitHub for version control and code reviews.',
      ],
      accent: 'cyan',
    },
  ],

  skills: [
    { name: 'Java', level: 90, group: 'Languages' },
    { name: 'Spring Boot', level: 85, group: 'Frameworks' },
    { name: 'Spring Security & JWT', level: 80, group: 'Backend' },
    { name: 'Microservices', level: 72, group: 'Architecture' },
    { name: 'REST APIs', level: 85, group: 'Backend' },
    { name: 'JPA / Hibernate', level: 80, group: 'Data' },
    { name: 'Angular', level: 75, group: 'Frameworks' },
    { name: 'TypeScript / JavaScript', level: 78, group: 'Languages' },
    { name: 'SQL / MySQL', level: 80, group: 'Data' },
    { name: 'HTML & CSS', level: 82, group: 'Frontend' },
    { name: 'Git & GitHub', level: 82, group: 'Tools' },
    { name: 'Data Structures', level: 85, group: 'Fundamentals' },
  ],

  projects: [
    {
      title: 'Bookstore — Full-Stack App',
      blurb:
        'A full-stack online bookstore with an Angular front-end and a Spring Boot REST back-end — browse the catalogue, manage inventory and handle orders end to end.',
      tags: ['Angular', 'Spring Boot', 'TypeScript', 'REST'],
      link: 'https://github.com/rashuuuuuu/bookstore',
    },
    {
      title: 'Loan Management System',
      blurb:
        'A Spring Boot application for managing loans — applications, approvals, repayment schedules and customer records, backed by a relational database.',
      tags: ['Java', 'Spring Boot', 'MySQL', 'JPA'],
      link: 'https://github.com/rashuuuuuu/new-loan-management-system',
    },
    {
      title: 'Core Banking + Full CI/CD',
      blurb:
        'A Spring Boot banking API shipped end to end: containerized with Docker, built and deployed through a Jenkins pipeline, and run on a Kubernetes (k3s) cluster via Helm charts — with Liquibase database migrations and Actuator health probes.',
      tags: ['Spring Boot', 'Jenkins', 'Docker', 'Kubernetes / k3s', 'Helm', 'Liquibase'],
      link: 'https://github.com/rashuuuuuu/bank',
    },
    {
      title: 'Microservices',
      blurb:
        'A hands-on microservices project exploring service decomposition, inter-service communication and independently deployable Spring Boot services.',
      tags: ['Java', 'Spring Boot', 'Microservices'],
      link: 'https://github.com/rashuuuuuu/microservicePractice',
    },
    {
      title: 'Spring Security & JWT',
      blurb:
        'An authentication and authorization module implementing stateless JWT login, role-based access control and secured endpoints with Spring Security.',
      tags: ['Java', 'Spring Security', 'JWT'],
      link: 'https://github.com/rashuuuuuu/SecurityImplementation',
    },
    {
      title: 'Hotel Management API',
      blurb:
        'A RESTful hotel-management API for room booking, availability and guest records, built with Spring Boot over a MySQL data layer.',
      tags: ['Java', 'Spring Boot', 'REST API'],
      link: 'https://github.com/rashuuuuuu/hotel-api',
    },
  ],

  achievements: [
    {
      title: 'Batch Topper — all 8 semesters',
      detail:
        'Secured first position in my batch in every single semester of my Bachelor\'s degree — eight semesters straight.',
      icon: '🥇',
      year: 'BIM',
    },
    {
      title: 'College Topper — 5 times',
      detail:
        'Ranked top of the college on five separate occasions throughout my undergraduate studies.',
      icon: '🏆',
      year: 'BIM',
    },
    {
      title: 'TU Second Topper — 7th semester',
      detail:
        'Placed second across Tribhuvan University in the seventh-semester results.',
      icon: '🎖️',
      year: '7th sem',
    },
    {
      title: 'Hult Prize — On-Campus Finalist',
      detail:
        'Reached the finals of the On-Campus Hult Prize, the world\'s largest student social-entrepreneurship competition.',
      icon: '🌍',
      year: 'Finalist',
    },
    {
      title: 'Internal Hackathon Finalist — F1ARL',
      detail:
        'Selected as a finalist in the internal hackathon organised by F1ARL.',
      icon: '💡',
      year: 'Finalist',
    },
  ],

  education: [
    {
      degree: '+2 (CS)',
      org: 'Tribhuvan University',
      period: 'Completed',
      note: 'A blend of computer science and management.',
    },
    {
      degree: 'Bachelor in Information Management (BIM)',
      org: 'Tribhuvan University',
      period: 'Completed',
      note: 'A blend of software development, information systems and management.',
    },
  ],
};

export type Profile = typeof PROFILE;
