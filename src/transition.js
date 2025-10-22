import { motion } from "framer-motion";

const transition = (OgComponent) => {
  return () => {
    <>
      <OgComponent />
      <motion.div
        className="fixed top-0 left-0 w-full h-[100vh] bg-slate-950 origin-bottom"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="fixed top-0 left-0 w-full h-[100vh] bg-slate-950 origin-top"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>;
  };
};

export default transition;
