// components
import WorkSlider from "@/components/WorkSlider";
import RightBottomImg from "@/components/RightBottomImg";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { useState } from "react";
import Link from "next/link";

//data
const projects = [
  {
    title: "Memory cards",
    info: [
      { description: "A Rick and Morty themed Memory cards Game." },
      {
        stacks: [{ stack: "React" }, { stack: "JavaScript" }, { stack: "CSS" }],
      },
      { link: ["https://memory-cards-tau.vercel.app/"] },
      { images: [] },
    ],
  },
  {
    title: "Memory cards",
    info: [
      { description: "A Rick and Morty themed Memory cards Game." },
      {
        stacks: [{ stack: "React" }, { stack: "JavaScript" }, { stack: "CSS" }],
      },
      { link: ["https://memory-cards-tau.vercel.app/"] },
      { images: [] },
    ],
  },
  {
    title: "Memory cards",
    info: [
      { description: "A Rick and Morty themed Memory cards Game." },
      {
        stacks: [{ stack: "React" }, { stack: "JavaScript" }, { stack: "CSS" }],
      },
      { link: ["https://memory-cards-tau.vercel.app/"] },
      { images: [] },
    ],
  },
];

const Work = () => {
  const [project, setProject] = useState(0);
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
            My Projects<span className="text-accent">.</span>
          </motion.h2>
          {/* Text */}
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl-px-0"
          >
            All the projects created by me.
          </motion.p>
          {/* Projects */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          ></motion.div>
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
            {projects.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    project === itemIndex &&
                    "text-accent after:bg-accent after:w-[100%] after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setProject(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {projects[project].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-4 items-center text-white/60"
                >
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div>{item.description}</div>

                  <div className="flex justify-center items-center gap-3">
                    {item.stacks?.map((item, itemIndex) => {
                      return (
                        <div className="text-sm  text-white" key={itemIndex}>
                          <button className="bg-transparent font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
                            {item.stack}
                          </button>
                        </div>
                      );
                    })}
                    {item.link?.map((item, itemIndex) => {
                      return (
                        <div
                          className="flex gap-2 justify-center items-center"
                          key={itemIndex}
                        >
                          <Link
                            href={item}
                            target="_blank"
                            className="text-sm  text-white"
                          >
                            Click here
                          </Link>
                          <p>to view the project.</p>
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

export default Work;
