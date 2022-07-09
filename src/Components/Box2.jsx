import React from "react";
import { motion } from "framer-motion";

export default function Box2() {
  return (
    <div className="box-container">
      <motion.div
        className="box"
        drag
        dragConstraints={{
          right: 5,
          left: -10,
          top: 10,
          bottom: 10
        }}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
      ></motion.div>
    </div>
  );
}
