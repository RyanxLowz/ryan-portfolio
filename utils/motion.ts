import { Transition, Variants } from "framer-motion";

export const navVariants = (): Variants => {
  if (window.innerWidth < 768) {
    return {}; // Empty object for mobile view
  } else {
    return {
      hidden: {
        opacity: 0,
        y: -50,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 140,
        },
      },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 80,
          delay: 0.75,
        },
      },
    };
  }
};

export const slideIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
): Variants =>
  window.innerWidth < 768
    ? {}
    : {
        hidden: {
          x:
            direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
          y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
        },
        show: {
          x: 0,
          y: 0,
          transition: {
            type,
            delay,
            duration,
            ease: "easeOut",
          },
        },
      };

export const staggerContainer = (
  staggerChildren: number,
  delayChildren: number
): Variants => ({
  hidden: {},
  show:
    window.innerWidth < 768
      ? { transition: {} }
      : {
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
});

export const textVariant = (delay: number): Variants =>
  window.innerWidth < 768
    ? {}
    : {
        hidden: {
          y: 50,
          opacity: 0,
        },
        show: {
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            duration: 1.25,
            delay,
          },
        },
      };

export const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: (
    i = 1
  ): {
    opacity: number;
    transition: { staggerChildren: number; delayChildren: number };
  } => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
};

export const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
    },
  },
};

export const fadeIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
): Variants | undefined =>
  window.innerWidth < 768
    ? {}
    : {
        hidden: {
          x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
          y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
          opacity: 0,
        },
        show: {
          x: 0,
          y: 0,
          opacity: 1,
          transition: {
            type,
            delay,
            duration,
            ease: "easeOut",
          },
        },
      };

export const planetVariants = (direction: string): Variants => ({
  hidden:
    window.innerWidth >= 768
      ? {
          x: direction === "left" ? "-100%" : "100%",
          rotate: 120,
        }
      : { x: "0%", rotate: 0 },
  show:
    window.innerWidth >= 768
      ? {
          x: 0,
          rotate: 0,
          transition: {
            type: "spring",
            duration: 1.8,
            delay: 0.5,
          },
        }
      : {},
});

export const zoomIn = (delay: number, duration: number): Transition =>
  window.innerWidth < 768
    ? {}
    : {
        hidden: {
          scale: 0,
          opacity: 0,
        },
        show: {
          scale: 1,
          opacity: 1,
          transition: {
            type: "tween",
            delay,
            duration,
            ease: "easeOut",
          },
        },
      };

export const footerVariants = {
  hidden:
    window.innerWidth < 768
      ? {}
      : {
          opacity: 0,
          y: 50,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 140,
          },
        },
  show:
    window.innerWidth < 768
      ? {}
      : {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 80,
            delay: 0.5,
          },
        },
};
