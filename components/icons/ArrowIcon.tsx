import { motion } from "framer-motion";

export default function ArrowIcon() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      animate={{ y: [0, 5, 0] }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
        repeatDelay: 0.5,
      }}
    >
      <path
        fill="currentColor"
        d="m208.49 152.49l-72 72a12 12 0 0 1-17 0l-72-72a12 12 0 0 1 17-17L116 187V40a12 12 0 0 1 24 0v147l51.51-51.52a12 12 0 0 1 17 17Z"
      ></path>
    </motion.svg>
  );
}
