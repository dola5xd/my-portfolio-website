import { motion } from "framer-motion";

function TechCard({ data }) {
  const { name, icon } = data;
  return (
    <motion.li className="opacity-0 min-w-[278px] text-7xl flex items-center justify-center flex-col gap-3 duration-500 cursor-pointer hover:bg-dark-gray-800/15 px-10 py-6 rounded">
      <span className="aspect-square">{icon}</span>
      <h1 className="text-base pointer-events-none">{name}</h1>
    </motion.li>
  );
}

export default TechCard;
