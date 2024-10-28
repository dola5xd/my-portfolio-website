"use client";
import { motion } from "framer-motion";

function MotionPage({ children, className }) {
  return (
    <motion.main
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75, delay: 1 }}
      className={className}
    >
      {children}
    </motion.main>
  );
}

export default MotionPage;
