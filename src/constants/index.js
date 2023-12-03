import {
  mobile,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextjs,
  redux,
  tailwind,
  git,
  docker,
  noi,
  fiftyfive,
  mui,
  aiimg,
  threeproj,
  vidtube,
  threads,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material UI",
    icon: mui,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "NOI Technologies",
    icon: noi,
    iconBg: "#FFF",
    date: "Dec 2019 - Jan 2023",
    points: [
      "Developing and maintaining web and mobile applications using React.js, React Native and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Fiftyfive Technologies",
    icon: fiftyfive,
    iconBg: "#FFF",
    date: "Mar 2023 - Nov 2023",
    points: [
      "Developing and maintaining web and mobile applications using React.js, React Native and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const projects = [
  {
    name: "Threads clone",
    description:
      "An app that skyrocketed to 100 million sign-ups in less than 5 days, and dethroned giants like Twitter, ChatGPT, and TikTok to become the fastest-growing app ever!",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "clerk",
        color: "pink-text-gradient",
      },
    ],
    image: threads,
    source_code_link: "https://threads-ruddy-eight.vercel.app/",
  },
  {
    name: "AI Image Generator",
    description:
      "An AI Image Generator powered by ChatGPT, DALLE 2 and Microsoft Azure services.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "chatgpt",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: aiimg,
    source_code_link: "https://ai-img-generator-sigma.vercel.app/",
  },
  {
    name: "React 3D Website",
    description:
      "A 3D Website built using React, Three.js and styled components.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "styled components",
        color: "pink-text-gradient",
      },
    ],
    image: threeproj,
    source_code_link: "https://react-3d-woad.vercel.app",
  },
  {
    name: "VidTube",
    description:
      "A Video search engine similar to Youtube, powered by RapidAPI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "material-ui",
        color: "green-text-gradient",
      },
      {
        name: "rapid-api",
        color: "pink-text-gradient",
      },
    ],
    image: vidtube,
    source_code_link: "https://vidtube-gamma.vercel.app",
  },
];

export { services, technologies, experiences, projects };
