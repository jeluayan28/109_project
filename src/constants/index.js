import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    mcdo,
    tesla,
    toyota,
    amazon,
    threejs,
    skin,
    car,
    furniture,
    expert,
    service,
    process,
    support,
    profile,
    benefit,
    security,
    communication,
    s1,
    s2,
    s3,
  } from "../assets";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Services",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Expert Guidance",
      icon: expert,
    },
    {
      title: "Personalized Service",
      icon: service,
    },
    {
      title: "Transparent Process",
      icon: process,
    },
    {
      title: "Exceptional Support",
      icon: support,
    },
  ];
  
  const technologies = [
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
      name: "React JS",
      icon: reactjs,
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
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Profile Information",
      company_name: "Senior Bridge",
      icon: profile,
      iconBg: "#86D293",
      date: "March 2020 - April 2021",
      points: [
        " Our platform allows each user to create a detailed profile, ensuring that all relevant health, lifestyle, and support needs are documented. This personalized information helps us provide tailored recommendations and care plans, making sure every senior receives the attention they deserve.",
      ],
    },
    {
      title: "Beneficiary Status",
      company_name: "Senior Bridge",
      icon: benefit,
      iconBg: "#86D293",
      date: "Jan 2021 - Feb 2022",
      points: [
        "helps users easily manage their beneficiary status, whether it's related to healthcare plans, insurance, or family arrangements. Our platform provides clear, accessible information, ensuring seniors and their families stay informed about their entitlements and benefits.",
      ],
    },
    {
      title: "Communication and Support",
      company_name: "Senior Bridge",
      icon: communication,
      iconBg: "#86D293",
      date: "Jan 2022 - Jan 2023",
      points: [
        "With detailed profile information stored in the system, family members and caregivers can stay connected and updated. Whether it’s for medical updates, changes in beneficiary status, or daily care, Senior Bridge ensures that communication is seamless and efficient.",
      ],
    },
    {
      title: "Security and Privacy ",
      company_name: "Senior Bridge",
      icon: security,
      iconBg: "#86D293",
      date: "Jan 2023 - Present",
      points: [
        "We prioritize the security and privacy of all user data, including sensitive profile information and beneficiary details. Our platform uses advanced encryption and privacy measures to ensure that seniors’ personal information is always protected.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "The website is designed with seniors in mind, offering easy navigation and clear, simple instructions to ensure a seamless experience, while still providing all the essential features.",
      name: "Jeseca Ruelan",
      designation: "CFO",
      company: "Apple Inc.",
      image: "/p1.jpg",
    },
    {
      testimonial:
        "With user-friendly features and a focus on clear communication, the site provides the perfect support for my grandparents, making it easy for them to access the help they need.",
      name: "Drandreb Reyes",
      designation: "COO",
      company: "Meta Platforms Inc.",
      image: "/p3.jpg",
    },
    {
      testimonial:
        "The platform is crafted to be accessible and straightforward, ensuring that all senior users, including your grandparents, can comfortably use the services.",
      name: "Djeah Tabada",
      designation: "CTO",
      company: "456 Enterprises",
      image: "/p2.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Butuan City",
      description:
        "We offer personalized care and resources for seniors in Butuan City, ensuring they receive the support they need. Our services help families navigate elder care with expert guidance and tailored solutions.",
      tags: [
        {
          name: "helpful",
          color: "blue-text-gradient",
        },
        {
          name: "trustworthy",
          color: "green-text-gradient",
        },
        {
          name: "compassionate",
          color: "pink-text-gradient",
        },
      ],
      image: s1,
      source_code_link: "https://maps.app.goo.gl/zRZJhnZSDiyRSSXN6",
    },
    {
      name: "Davao City",
      description:
        "We provide comprehensive senior care services, offering expert advice and resources to ensure the well-being of elderly loved ones. We are committed to enhancing the quality of life for seniors across the region.",
      tags: [
        {
          name: "life-changing",
          color: "blue-text-gradient",
        },
        {
          name: "supportive",
          color: "green-text-gradient",
        },
        {
          name: "reliable",
          color: "pink-text-gradient",
        },
      ],
      image: s2,
      source_code_link: "https://maps.app.goo.gl/xsjivJrCfmi7inL86",
    },
    {
      name: "Cagayan de Oro",
      description:
        "Cagayan de Oro delivers specialized support for seniors, focusing on health and wellness. Our services provide families with the peace of mind they need, ensuring their elderly loved ones are well cared for.",
      tags: [
        {
          name: "empowering",
          color: "blue-text-gradient",
        },
        {
          name: "reassuring",
          color: "green-text-gradient",
        },
        {
          name: "exceptional",
          color: "pink-text-gradient",
        },
      ],
      image: s3,
      source_code_link: "https://maps.app.goo.gl/M2D967o989LiSZwd8",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  