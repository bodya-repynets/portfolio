"use client";
import arr from "@/lib/projects";
import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";
import { motion } from "framer-motion";
import Item from "./Item";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControl = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    }
  }, [isInView]);
  return (
    <section
      id="projects"
      className="w-[80%] shrink-0 flex flex-col items-center justify-center min-h-screen gap-[50px] snap-start snap-always py-[80px]"
    >
      <motion.div
        ref={ref}
        className="flex flex-col flex-wrap gap-[20px] lg:gap-[40px] items-center justify-center w-[100vw] max-w-[1200px] h-[450px] pb-[20px] snap-x overflow-x-scroll scroll-smooth px-[50px]"
      >
        {arr.map((item) => (
          <Item key={item.name} mainControl={mainControl} item={item} />
        ))}
      </motion.div>
    </section>
  );
};
export default Projects;
