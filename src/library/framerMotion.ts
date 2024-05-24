export const fadeInDownVariants = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      delay: 0.2,
    },
  },
};

export const bounceInVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      delay: 0.2,
    },
  },
};

export const moveUpHoverVariants = {
  hover: {
    y: -10,
    transition: {
      type: "spring",
      stiffness: 500,
      delay: 0.1,
    },
  },
};
