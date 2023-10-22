import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { AssessmentOutlined, Language, WebOutlined } from "@mui/icons-material";
import resumeprj from "../assets/images/resumeprj.png";
import CasinoRoll from "../assets/images/CasinoRoll.png";
import poker from "../assets/images/poker.png";
import WebinvitationCard from "../assets/images/WebinvitationCard.png";
export default {
  name: "Anan Moktan",
  title: "Web developer",
  birthday: "11th november 1993",
  email: "ananmoktan41@gmail.com",
  address: "900 s washington street ave 3a",
  phone: 6602388299,
  socials: {
    Facebook: {
      link: "https://www.facebook.com/anan.moktan/",
      text: "myFacebook",
      icon: <FacebookIcon />,
    },

    LinkedIn: {
      link: "https://www.linkedin.com/in/anan-moktan-76aa10250/",
      text: "myLinkedeiN",
      icon: <LinkedInIcon />,
    },
    Github: {
      link: "https://github.com/AnanMoktan",
      text: "Mygithub",
      icon: <GithubIcon />,
    },
  },
  about: `As a recent computer science graduate, I am deeply passionate about programming and dedicated to excelling in the field. My journey has been marked by a wealth of experience gained through both academic and non-academic projects, all in preparation for launching my career at the entry level.

  I am actively seeking a dynamic and challenging entry-level position that provides opportunities for continuous learning while enabling me to contribute to the success of the organization. I am enthusiastic about applying my computer science education to real-world projects, eager to engage with experienced professionals to expand my knowledge, and committed to honing my skills to make meaningful contributions to the team's objectives and the organization's success.`,

  experiences: [
    {
      title: "work 1",
      date: "2018 - present",
      description:
        "Expenses as metrial breeding aknsdf ajsdfn\n\n akhdsfklajbsdfvbadsf\n\n ausdgfkjvadfkjvhasdkfhvahvsdf",
    },
    {
      title: "work 2",
      date: "2014 - present",
      description:
        "Expenses as metrial breeding aknsdf ajsdfn\n\n akhdsfklajbsdfvbadsf\n\n ausdgfkjvadfkjvhasdkfhvahvsdf",
    },
    {
      title: "work 3",
      date: "2018 - present",
      description:
        "Expenses as metrial breeding aknsdf ajsdfn\n\n akhdsfklajbsdfvbadsf\n\n ausdgfkjvadfkjvhasdkfhvahvsdf",
    },
  ],
  education: [
    {
      title: "Master of Science in Computer Science  -GPA 3.66 (running)",
      date: "2022- present (University of central Missouri -USA)",
      description: `Relevant Coursework: Advanced Operating Systems, Database theory, and apps, Advance Algorithms, Artificial Intelligence, Advance
      database, Compiler Design, Advance application Programming in C# .Net, Description of Cryptographic Algorithms and Protocols,
      Advance web applications and Services development, Introduction to Cloud Computing(running)`,
    },
    {
      title: "Master of Science in Physics -GPA 3.47",
      date: "2020 (Tribhuvan University -Nepal)",
      description: `Relevant Coursework: classical mechanics, Quantum Mechanics, Mathematical Physics, Solid State Physics, Electrodynamics, Nuclear
      and particle physics, Solid Earth Geophysics, Computational Physics, Statistical Physics`,
    },
  ],
  services: [
    {
      title: "web devlopment",
      description:
        "I have a strong appreciation for simplicity, consistently emphasizing a user-friendly experience while upholding the harmony of aesthetic color combinations.",
      icon: <WebOutlined />,
    },
    {
      title: "Branding Indentity",
      description: "N/A",
      icon: <AssessmentOutlined />,
    },
    {
      title: "Illustrator",
      description: "N/A",
      icon: <WebOutlined />,
    },
  ],
  skills: [
    {
      title: "FRONT-END",
      description: [
        "ReactJS",
        "JavaScript",
        "TypeScript",
        "Bootstrap",
        "Material UI",
      ],
    },
    {
      title: "BACK-END",
      description: ["NodeJS", "Java", "PhP"],
    },
    {
      title: "DATABASES",
      description: ["Firebase", "Ms Sql Server", "MySQL", "MOngoDB"],
    },
    {
      title: "SOURCE CONTROL",
      description: ["Git", "GitHub", "Scrum/Agile"],
    },
  ],
  projects: [
    {
      tag: "React",
      image: resumeprj,
      title: " React project ",
      caption: "portfoilio website",
      description:
        "Portfolio wesite made and deployed in firebase using react.",
      links: [
        { link: "https://www.youtube.com", icon: <YouTubeIcon /> },
        { link: "https://www.google.com", icon: <GithubIcon /> },
        { link: "https://www.google.com", icon: <Language /> },
      ],
    },

    {
      tag: "Javascript",
      image: CasinoRoll,
      title: " Javascript project 1",
      caption: "single player casino game",
      description: `Developed a web-based game for a casino with different betting sections, SVG animations controlled by
      CSS and JavaScript, continuous music, and validation code for input`,
      links: [
        { link: "https://www.youtube.com", icon: <YouTubeIcon /> },
        {
          link: "https://ananmoktan.github.io/CasinoRoll/",
          icon: <GithubIcon />,
        },
        { link: "https://www.google.com", icon: <Language /> },
      ],
    },

    {
      tag: "Javascript",
      image: poker,
      title: "Javascript project 2",
      caption: "single player poker game",
      description: `Developed a single-player adaptation of Poker with an intuitive interface and realistic card mechanics.
      Players can engage in thrilling rounds of Texas Hold’em poker, making strategic decisions based on their hand strength and the
      actions of their opponent`,
      links: [
        { link: "https://www.youtube.com", icon: <YouTubeIcon /> },
        { link: "https://ananmoktan.github.io/Poker/", icon: <GithubIcon /> },
        { link: "https://www.google.com", icon: <Language /> },
      ],
    },
    {
      tag: "Webdesign",
      image: WebinvitationCard,
      title: "Design",
      caption: "Web based invitaion card",
      description: `Created a web-based invitation card using HTML, CSS color palettes, gifs, and traditional physical
      card design pattern`,
      links: [
        { link: "https://www.google.com", icon: <YouTubeIcon /> },
        {
          link: "https://ananmoktan.github.io/invitation/",
          icon: <GithubIcon />,
        },
        { link: "https://www.google.com", icon: <Language /> },
      ],
    },
  ],
};
