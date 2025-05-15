import userPicture from "../src/assets/kroxly.jpeg";

const defaultUser = {
  userData: {
    email: "ex@kroxly.xyz",
    phone: "+90 555 555 55 55",
    address: "İstanbul",
    link: "kroxly.xyz",
  },
  personalData: {
    firstName: "By",
    lastName: "Kroxly",
    profileTitle: "Full-Stack Dev.",
    description: "I develop both frontend and backend software",
    imageUrl: userPicture,
    nationality: "Türk",
    sexe: "Erkek",
    language: "Türkçe",
  },
  experienceData: [
    {
      positionExp: "Front-End Developer",
      company: "Example Inc.",
      startDate: "2018-01-01",
      endDate: "2021-12-31",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      positionExp: "Back-End Developer",
      company: "Example Inc.",
      startDate: "2019-05-01",
      endDate: "2020-12-31",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
  skillData: {
    skills: ["JavaScript", "React", "Node.js", "HTML", "CSS", "TypeScript"],
  },
  educationData: {
    school: "Kroxly School",
    degree: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    startDate: "2014-09-01",
    endDate: "2018-05-31",
  },
};

export default defaultUser;
