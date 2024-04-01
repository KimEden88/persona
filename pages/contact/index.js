import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// icons
import { BsArrowRight } from "react-icons/bs";

// framer
import { motion } from "framer-motion";

//variants
import { fadeIn } from "@/variants";

//components
import Popup from "@/components/Popup";

const Contact = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_YOUR_SERVICE_ID,
        process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_YOUR_USER_ID,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setShowPopup(true);
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Get In<span className="text-accent"> Touch.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            ref={form}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={sendEmail}
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="user_name"
                placeholder="name"
                className="input"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="email"
                className="input"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="subject"
              className="input"
            />
            <textarea
              placeholder="message"
              className="textarea"
              name="message"
              required
            ></textarea>
            <button
              type="submit"
              value="Send"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let's Talk{" "}
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default Contact;
