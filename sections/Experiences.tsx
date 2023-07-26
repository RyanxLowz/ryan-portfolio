"use client";

import { motion } from "framer-motion";

import styles from "@/styles";
import { staggerContainer, fadeIn, planetVariants } from "@/utils/motion";

import { ExperienceCard, TitleText, TypingText } from "@/(components)";
import { experiences } from "@/constants";

const Experiences = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer(0.5,0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| My Journey" />
        <TitleText title={"Experiences & Achievements"} />
        <div className="mt-9 grid sm:grid-cols-2 grid-cols-1 gap-12">
          {experiences.map((feature) => (
            <ExperienceCard
              key={feature.title}
              number={feature.year}
              text={feature.title}
              organisation={feature.organisation}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
    <div className="gradient-02 z-0"/>
  </section>
);

export default Experiences;
