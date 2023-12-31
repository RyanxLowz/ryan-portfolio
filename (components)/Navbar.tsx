"use client";

import { motion } from "framer-motion";
import styles from "@/styles";
import { navVariants } from "@/utils/motion";

const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants()}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative z-100`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <img
          src="./star.svg"
          alt="star"
          className="w-[30px] h-[30px] object-contain"
        />

        <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
          RYAN'S PORTFOLIO
        </h2>

        <img
          src="./cresent-moon.svg"
          alt="moon"
          className="w-[24px] h-[24px] object-contain"
        />
      </div>
    </motion.nav>
  );
};

export default Navbar;
