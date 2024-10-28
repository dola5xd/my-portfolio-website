"use client";

import { motion } from "framer-motion";

function Template({ children }) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="overflow-hidden"
    >
      {children}
    </motion.div>
  );
}

export default Template;
