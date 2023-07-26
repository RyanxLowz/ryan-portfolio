"use client";

import { motion } from "framer-motion";
import styles from "@/styles";
import { fadeIn } from "@/utils/motion";

interface ProjectCardProps {
  id: string;
  imgUrl: string;
  title: string;
  index: number;
  active: string;
  handleClick: (id: string) => void;
  description: string;
  gitHub?: string;
  techStack?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  imgUrl,
  title,
  index,
  active,
  handleClick,
  description,
  gitHub,
  techStack,
}) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative ${
      active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt={title}
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px] sm:h-fit h-[200px]">
        {gitHub && (
          <>
            <div
              className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
            >
              <a
                href={gitHub}
                target="_blank"
                className="w-1/2 h-1/2 object-contain"
              >
                <img src="./github.svg" alt="github-icon" />
              </a>
            </div>
            <p className="font-normal text-[16px] leading-[20px] text-white uppercase">
              Check out
            </p>
          </>
        )}
        <h2 className="mt-[12px] font-semibold sm:text-[24px] text-[16px] text-white">
          {title}
        </h2>
        <p className="hidden lg:block my-2 text-white sm:text-[16px] text-[12px]">
          {description}
        </p>
        {techStack && (
          <>
            <h3 className="hidden lg:block mt-[8px] font-semibold sm:text-[18px] text-[12px] text-white">
              Tech Stack
            </h3>
            <p className="hidden lg:block text-white sm:text-[16px] text-[12px]">
              {techStack}
            </p>
          </>
        )}
      </div>
    )}
  </motion.div>
);

export default ProjectCard;
