import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Popup = ({ onClose }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-primary/30"
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <motion.div className="rounded-lg p-16 shadow-lg  bg-primary/50 ">
        <div>
          <h3 className="text-2xl mt-4 mb-4 font-semibold text-white">
            Thanks for your <span className="text-accent"> message!</span>
          </h3>
          <p className="text-white mb-4">
            I will get back to you as soon as possible.
          </p>
          <button
            className="btn mb-4 text-white hover:text-accent"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Popup;
