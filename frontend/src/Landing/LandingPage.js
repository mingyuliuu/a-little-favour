import React from "react";
import Lottie from "react-lottie";
import GooseImg from "../AnimationComponents/GooseImg";

import gooseR from "../assets/gooseR.jpg";
import gooseT from "../assets/gooseT.jpg";
import arrowAnimation from "../assets/Lottie/arrowUp.json";

import "./LandingPage.css";
import { motion } from "framer-motion";

const LandingPage = () => {
  const fadeInUp = {
    initial: {
      y: 100,
      opacity: 0,
    },

    animate: {
      y: 0,
      opacity: 1,

      transition: {
        duration: 1,
        delay: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: arrowAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div className="landing_page" id="landing">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="goose"
        >
          <GooseImg classname="top" imgurl={gooseT} />
          <GooseImg classname="right" imgurl={gooseR} />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="landing_text"
        >
          <div className="landing_title">
            <h5>
              A Little <span>Favor</span>
            </h5>
          </div>
          <div className="landing_subtitle">
            <h2>@UWaterloo</h2>
          </div>
          <div className="landing_content">
            <h6>A place to ask and do a little favor</h6>
          </div>
          <div>
            <Lottie options={animationOptions} height={80} width={80} />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default LandingPage;
