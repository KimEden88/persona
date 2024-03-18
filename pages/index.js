// next image
import Image from "next/image";

//components
import ParticlesContainer from "@/components/ParticlesContainer";
import ProjectsBtn from "@/components/ProjectBtn";

//framer motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "@/variants";

const Home = () => {
  return (
    <div className="bg-primary/40 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Transforming Ideas <br /> Into
            <span className="text-accent"> Software Craftsmanship</span>
          </motion.h1>
          {/* subtext */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            A Chef Turned Programmer I am a career changer, hungry to create and
            learn. Ready to bring my unique perspective, team spirit, and
            creativity.
          </motion.p>
          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1600px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-space xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        {/* particles */}
        <ParticlesContainer />
      </div>
    </div>
  );
};

export default Home;
