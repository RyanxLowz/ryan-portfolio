"use client";

import { motion } from "framer-motion";
import styles from "@/styles";
import { TypingText } from "@/(components)";
import { staggerContainer, fadeIn } from "@/utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer(0.5,0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Me" textStyles="text-center" />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Hello I am <span className="font-extrabold text-white"> Ryan</span>! I
        love to explore the ever-changing world of technology, always seeking to
        learn new things and challenge myself. As an aspiring developer, I am
        passionate about honing my skills and contributing to the exciting
        developments in the tech industry. I am determined to give my best in
        every endeavor and make a positive impact in the world through my work.
      </motion.p>
      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="./arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
