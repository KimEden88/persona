import React, { useState } from "react";

import Link from "next/link";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaGitSquare,
  FaTrello,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiJira,
  SiPrisma,
  SiTailwindcss,
  SiMui,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "Tech Skills",
    info: [
      {
        title: "Web Development",
        icons: [
          {
            icon: <FaHtml5 />,
            url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
          },
          {
            icon: <FaCss3 />,
            url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
          },
          {
            icon: <FaJs />,
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          },
          { icon: <FaReact />, url: "https://react.dev/" },
          { icon: <SiNextdotjs />, url: "https://nextjs.org/" },
          { icon: <SiFramer />, url: "https://www.framer.com/motion/" },
          { icon: <SiPrisma />, url: "https://www.prisma.io/" },
          { icon: <SiTailwindcss />, url: "https://tailwindcss.com/" },
          { icon: <SiMui />, url: "https://mui.com/" },
        ],
      },
      {
        title: "UI/UX Design",
        icons: [{ icon: <FaFigma />, url: "https://www.figma.com/" }],
      },
      {
        title: "Workflow",
        icons: [
          { icon: <FaGitSquare />, url: "https://git-scm.com" },
          { icon: <SiJira />, url: "https://www.atlassian.com/software/jira" },
          { icon: <FaTrello />, url: "https://trello.com" },
        ],
      },
    ],
  },
  {
    title: "soft Skills",
    info: [
      {
        title: "Attention to Detail",
        stage:
          "Attention to detail is essential for me as a developer to ensure clean code, thorough testing, and user-friendly interfaces, avoiding errors that can lead to system failures or user frustration.",
      },
      {
        title: "Adaptability",
        stage:
          "Adaptability is crucial for me as a developer, allowing me to adjust quickly to changing project requirements, technologies, and challenges.",
      },
      {
        title: "Collaboration",
        stage:
          "Collaboration is vital for me as a developer, enabling me to work effectively with cross-functional teams to share knowledge, generate ideas, and solve problems, ultimately driving successful project outcomes.",
      },
      {
        title: "Problem-Solving",
        stage:
          "Problem-solving is at the core of my skill set as a developer, empowering me to analyze issues, identify root causes, and implement effective solutions, ensuring the delivery of robust software products that meet user needs.",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Full Stack Web Developer - DocuStar",
        stage: "2023 - Present",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Full Stack Web & App - WBS",
        stage: "2023",
      },
      {
        title: "Full Stack Web Developer - DCI",
        stage: "2020 - 2021",
      },
    ],
  },
];

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

//counter
import CountUp from "react-countup";
import RightBottomImg from "@/components/RightBottomImg";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-8">
        {/* Left side */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Title */}
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            A Taste for <span className="text-accent">Technology</span> Serving
            Up Cutting-Edge Web Experiences.
          </motion.h2>
          {/* Text */}
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl-px-0"
          >
            Three years ago, I embarked on my journey in software development,
            and since then, I&apos;ve delved into a diverse array of projects,
            continually innovating to produce designs that are both elegant and
            efficient. Drawing from my extensive background as a chef, I&apos;ve
            cultivated a keen eye for detail, a resilient spirit, and an
            unwavering commitment to excellence. These invaluable qualities
            seamlessly integrate into my development work, allowing me to adapt
            quickly and deliver solutions that prioritize both aesthetic appeal
            and functional integrity.
          </motion.p>
          {/* experience */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6 ">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Right side */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:bg-accent after:w-[100%] after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-4 items-center text-white/60"
                >
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div className="text-2xl text-white" key={itemIndex}>
                          <Link
                            className="hover:text-accent transition-all duration-300"
                            href={icon.url}
                            target="_blank"
                          >
                            {icon.icon}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
      <RightBottomImg />
    </div>
  );
};

export default About;
