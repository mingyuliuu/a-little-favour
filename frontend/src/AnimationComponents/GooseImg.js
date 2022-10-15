import React from "react";
import "./GooseImg.css";

import { motion } from "framer-motion";

const GooseImg = ({ classname, imgurl }) => {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.1 }}
        drag
        dragConstraints={{ left: -100, right: 100, top: -50, bottom: 0 }}
        dragElastic={0.2}
        className="goose_img"
      >
        <img className={classname} src={imgurl} alt={imgurl} />
      </motion.div>
    </>
  );
};

export default GooseImg;
