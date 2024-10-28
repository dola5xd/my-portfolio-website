"use client";

import Image from "next/image";
import avatar from "@/public/assets/Avatar.jpg";
import { motion } from "framer-motion";

function page() {
  return (
    <main className="flex flex-col-reverse lg:flex-row items-center justify-between py-14 lg:py-32 px-10 sm:px-12 lg:px-32 pointer-events-none">
      <motion.div
        variants={{ init: { opacity: 0 }, animate: { opacity: 1 } }}
        transition={{
          duration: 1,
        }}
        className="text-base sm:text-3xl lg:text-6xl flex flex-col gap-2 sm:gap-4 *:pointer-events-none"
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
          className="ml-12 gradient-text font-medium"
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
        variants={{ init: { opacity: 0 }, animate: { opacity: 1 } }}
        transition={{ duration: 1, delay: 0.6 }}
        className="h-[250px] sm:h-[350px] rounded-full relative aspect-square"
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
