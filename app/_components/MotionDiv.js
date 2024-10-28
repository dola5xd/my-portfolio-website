"use client";
import { motion } from "framer-motion";

function MotionDiv({ children, className, variants, transtion }) {
  return (
    <motion.div
      initial={"init"}
      animate={"animate"}
      variants={variants}
      transtion={{ ...transtion }}
      className={className}
      layout
    >
      {children}
    </motion.div>
  );
}

export default MotionDiv;
