"use client";

import Image from "next/image";
import avatar from "@/public/assets/Avatar.jpg";
import { motion } from "framer-motion";

function page() {
  return (
    <main className="flex flex-col-reverse items-center justify-between px-8 xl:flex-row xl:gap-7 py-14 xl:py-32 sm:px-12 xl:px-32 text-nowrap">
      <motion.div
        variants={{ init: { opacity: 0 }, animate: { opacity: 1 } }}
        transition={{
          duration: 1,
        }}
        className="text-xl sm:text-3xl lg:text-6xl flex flex-col gap-2 sm:gap-4 *:pointer-events-none"
        initial={"init"}
        animate={"animate"}
      >
        <motion.h2
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hi <span className="animate-pulse">👋</span>,
        </motion.h2>
        <motion.h3
          transition={{ duration: 0.5, delay: 0.4 }}
          initial={{ x: "-110%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="ml-6"
        >
          My name is
        </motion.h3>
        <motion.h1
          initial={{ x: "-120%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="ml-12 font-medium gradient-text"
        >
          Adel Yasser
        </motion.h1>
        <motion.h4
          initial={{ x: "-150%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="ml-16"
        >
          I build things for web
        </motion.h4>
      </motion.div>
      <motion.div
        transition={{ duration: 1, delay: 0.6 }}
        className="h-[250px] sm:h-[350px] rounded-full relative aspect-square contrast-125 z-40"
        whileHover={{
          rotate: 360 * 3,
          scale: 0.9,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 1.2 }}
        initial={{ scale: 0, x: "100%" }}
        animate={{ scale: 1, x: 0 }}
      >
        <Image
          src={avatar}
          alt="My photo"
          fill
          placeholder="blur"
          className="object-cover rounded-full"
        />
      </motion.div>
    </main>
  );
}

export default page;
