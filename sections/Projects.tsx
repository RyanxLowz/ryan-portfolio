"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "@/styles";
import { staggerContainer } from "@/utils/motion";
import { ProjectCard, TitleText, TypingText } from "@/(components)";
import { projects } from "@/constants";

const Projects = () => {
  const [active, setActive] = useState("project-2");
  return (
    <section className={`${styles.paddings}`}>
      <motion.div
        variants={staggerContainer(0.5,0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| My Projects" textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose the project you want
              <br className="md:block hidden" /> to explore
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {projects.map((proj, index) => (
            <ProjectCard
              key={proj.id}
              {...proj}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
