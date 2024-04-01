// components
import Bulb from "@/components/Bulb";
import Slider from "@/components/Slider";
import RightBottomImg from "@/components/RightBottomImg";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <RightBottomImg />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My Services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[500px] mx-auto lg:mx-0"
            >
              As a passionate junior developer specialized in front-end
              technologies, I offer a wide range of services designed to bring
              your digital visions to life. From crafting custom, responsive
              websites with HTML, CSS, and JavaScript, to developing dynamic
              applications using React and Next.js, my focus is on creating
              seamless, user-centric experiences. Whether you need a full-scale
              e-commerce platform, a performance-optimized business website, or
              a consultation to enhance your project's UI/UX design, I'm here to
              help. I also provide website maintenance, and personalized
              teaching sessions in web development technologies. Let's work
              together to build solutions that not only meet but exceed your
              digital needs.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            {/* slider */}
            <Slider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
