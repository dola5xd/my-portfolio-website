"use client";

import { motion } from "framer-motion";
import ContactForm from "../_components/contactForm";
import Link from "next/link";

function page() {
  return (
    <main className="py-20 px-12 lg:px-28 flex flex-col items-center gap-14 w-full">
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1.5 }}
        className="text-2xl lg:text-6xl gradient-text"
      >
        Get in touch. Let&apos;s work together!
      </motion.h1>

      <div className="container px-5 py-3 lg:py-7 mx-auto flex items-center">
        <ContactForm />
      </div>
      <h1 className="flex flex-col text-2xl items-center gap-7 justify-center">
        or{" "}
        <span>
          Whatsapp:{" "}
          <Link
            target="_blank"
            className="underline"
            href="https://wa.me/201069142906"
          >
            (+20)1069142906
          </Link>
        </span>
      </h1>
    </main>
  );
}

export default page;
