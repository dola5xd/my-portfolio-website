/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import TechCard from "../_components/TechCard";

import { useEffect, useRef } from "react";
import {
  motion,
  stagger,
  useAnimate,
  useAnimation,
  useInView,
} from "framer-motion";

import { tech } from "../_lib/techs";

function page() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (inView) {
      controls.start("reveal");
      animate(
        "li",
        { opacity: 1 },
        {
          duration: 0.5,
          delay: stagger(0.5),
        }
      );
    }
  }, [inView, animate, controls]);

  return (
    <motion.main
      variants={{
        hidden: { opacity: 0, y: 75 },
        reveal: { opacity: 1, y: 0 },
      }}
      initial={"hidden"}
      animate={controls}
      transition={{ duration: 0.25, delay: 0.25 }}
      ref={ref}
      className="py-20 px-10 sm:px-28 flex flex-col items-center gap-10"
    >
      <h1 className="font-bold text-3xl lg:text-5xl">My Tech Stack</h1>
      <p className="text-base lg:text-2xl text-dark-gray-800">
        Technologies I’ve been working with recently
      </p>
      <motion.ul
        className="px-20 py-5 lg:py-10 flex items-center gap-y-10 justify-center flex-wrap"
        ref={scope}
      >
        {tech.map((item) => (
          <TechCard data={item} key={item.name} />
        ))}
      </motion.ul>
    </motion.main>
  );
}

export default page;