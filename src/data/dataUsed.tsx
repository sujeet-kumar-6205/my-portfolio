export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export type navLinkItemProps = {
  id: string;
  title: string;
};

export const educations = [
  {
    id: "college",
    degree: "B.Tech (Computer Science)",
    institution: "Malaviya National Institute of Technology, Jaipur",
    startTime: "2018 july",
    endTime: "2022 June",
  },
  {
    id: "school",
    degree: "Higher Secondary",
    institution: "Shiv Janam Rai Mahavidayalay",
    percentage: "76",
    startTime: "2017 April",
    endTime: "2018 June",
  },
];

export type educationProps = {
  id: string;
  degree: string;
  institution: string;
  cgpa?: string;
  percentage?: string;
  startTime: string;
  endTime: string;
};

export const skills = [
  {
    id: "cpp",
    name: "C++",
  },
  {
    id: "JavaScript",
    name: "JavaScript",
  },
  {
    id: "Node.Js",
    name: "Node.Js",
  },
  {
    id: "Express.js",
    name: "Express.js",
  },
  {
    id: "mySql",
    name: "My SQL",
  },
  {
    id: "mongoDb",
    name: "Mongo DB",
  },
  {
    id: "dbms",
    name: "DBMS",
  },
  {
    id: "oops",
    name: "oops",
  },
  {
    id: "dsa",
    name: "DSA",
  },
  {
    id: "systemDesign",
    name: "System Design",
  },
  {
    id: "problemSolving",
    name: "Problem Solving",
  },
];

export type skillProps = {
  id: string;
  name: string;
};
