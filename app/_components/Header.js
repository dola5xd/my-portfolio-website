"use client";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import { FaFacebook, FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import { SiFrontendmentor } from "react-icons/si";
import { useState } from "react";

function Header() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [show, setShow] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const pre = scrollY.getPrevious();
    latest > pre ? setShow(false) : setShow(true);
  });

  return (
    <header
      className={`${pathname === "/about" || pathname === "/techs" || pathname === "/projects" ? "fixed top-0 z-50 w-full" : ""} px-5 sm:px-24 xl:px-48`}
    >
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ width: "auto", height: "120px", opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 2,
        }}
        layoutScroll={false}
        className={`flex items-center flex-col-reverse xl:flex-row justify-center gap-5 xl:gap-20 *:flex *:items-center *:justify-between *:gap-2 lg:*:gap-7 xl:*:gap-10 bg-black py-10 rounded-b-3xl opacity-0 ${show ? "bg-opacity-100" : "bg-opacity-75"}`}
      >
        <motion.ul
          className="*:duration-500 hover:*:text-dark-gray-800 *:text-xs  sm:*:text-base lg:*:text-xl text-nowrap "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <li
            className={`link-line xl:*:after:h-1 ${pathname === "/" ? "active xl:after:h-1 " : ""}`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`link-line xl:*:after:h-1 ${pathname === "/about" ? "active xl:after:h-1" : ""}`}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={`link-line xl:*:after:h-1 ${pathname === "/techs" ? "active xl:after:h-1" : ""}`}
          >
            <Link href="/techs">Tech Stack</Link>
          </li>
          <li
            className={`link-line xl:*:after:h-1 ${pathname === "/projects" ? "active xl:after:h-1" : ""}`}
          >
            <Link href="/projects">Projects</Link>
          </li>
          <li
            className={`link-line xl:*:after:h-1 ${pathname === "/contact" ? "active xl:after:h-1" : ""}`}
          >
            <Link href="/contact">Contact</Link>
          </li>
        </motion.ul>
        {show && (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="*:text-lg lg:*:text-2xl hover:*:opacity-75 *:duration-300"
          >
            <li>
              <Link href="https://www.facebook.com/dola2005ti" target="_blank">
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/adel-yasser-a28181242/"
                target="_blank"
              >
                <FaLinkedin />
              </Link>
            </li>
            <li>
              <Link href="https://github.com/dola5xd" target="_blank">
                <FaSquareGithub />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.frontendmentor.io/profile/dola5xd"
                target="_blank"
              >
                <SiFrontendmentor />
              </Link>
            </li>
          </motion.ul>
        )}
      </motion.nav>
    </header>
  );
}

export default Header;
