"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { FaFacebook, FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import { SiFrontendmentor } from "react-icons/si";

function Header() {
  const pathname = usePathname();

  return (
    <header className="px-5 sm:px-24 lg:px-48">
      <motion.nav
        initial={{ width: 0, height: 0, opacity: 0 }}
        animate={{ width: "auto", height: "108px", opacity: 1 }}
        transition={{ delay: 0.5, duration: 2 }}
        layout
        className="flex items-center flex-col-reverse lg:flex-row justify-center gap-5 lg:gap-20 *:flex *:items-center *:justify-between *:gap-3 lg:*:gap-10 bg-black py-10 rounded-b-3xl "
      >
        <motion.ul
          className="*:duration-500 hover:*:text-dark-gray-800 text-xs  sm:*:text-base lg:text-xl "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <li className={`link-line ${pathname === "/" ? "active" : ""}`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`link-line ${pathname === "/about" ? "active" : ""}`}>
            <Link href="/about">About</Link>
          </li>
          <li className={`link-line ${pathname === "/techs" ? "active" : ""}`}>
            <Link href="/techs">Tech Stack</Link>
          </li>
          <li
            className={`link-line ${pathname === "/projects" ? "active" : ""}`}
          >
            <Link href="/projects">Projects</Link>
          </li>
          <li
            className={`link-line ${pathname === "/contact" ? "active" : ""}`}
          >
            <Link href="/contact">Contact</Link>
          </li>
        </motion.ul>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="text-lg lg:text-2xl"
        >
          <li>
            <Link href="/">
              <FaFacebook />
            </Link>
          </li>
          <li>
            <Link href="/">
              <FaLinkedin />
            </Link>
          </li>
          <li>
            <Link href="/">
              <FaSquareGithub />
            </Link>
          </li>
          <li>
            <Link href="/">
              <SiFrontendmentor />
            </Link>
          </li>
        </motion.ul>
      </motion.nav>
    </header>
  );
}

export default Header;
