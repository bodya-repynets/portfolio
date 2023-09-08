"use client";
import jsLogo from "@/public/logos/js.svg";
import reactLogo from "@/public/logos/react.svg";
import materialUiLogo from "@/public/logos/material-ui.svg";
import htmlLogo from "@/public/logos/html.svg";
import cssLogo from "@/public/logos/css.svg";
import reduxLogo from "@/public/logos/redux.svg";
import firebaseLogo from "@/public/logos/firebase.svg";
import nextLogo from "@/public/logos/next.svg";
import visualStudioLogo from "@/public/logos/visual-studio.svg";
import tailwindLogo from "@/public/logos/tailwind.svg";
import githubLogo from "@/public/logos/github.svg";
import sanityLogo from "@/public/logos/sanity.svg";
import stripeLogo from "@/public/logos/stripe.svg";
import typescriptLogo from "@/public/logos/typescript.svg";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";
import { motion } from "framer-motion";
import { useGlobalContext } from "@/app/context";
const Skills = () => {
  const { setSection } = useGlobalContext();
  const arr = [
    [jsLogo, "Java Script"],
    [reactLogo, "React"],
    [materialUiLogo, "Material UI"],
    [htmlLogo, "HTML"],
    [cssLogo, "CSS"],
    [reduxLogo, "Redux Toolkit"],
    [firebaseLogo, "Firebase"],
    [nextLogo, "Next JS"],
    [visualStudioLogo, "Visual Studio"],
    [tailwindLogo, "Tailwind CSS"],
    [githubLogo, "Git Hub"],
    [sanityLogo, "Sanity"],
    [stripeLogo, "Stripe Payment"],
    [typescriptLogo, "TypeScript"],
  ];
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControl = useAnimation();
  useEffect(() => {
    if (isInView) {
      setSection("technologies");
      mainControl.start("visible");
    }
  }, [isInView]);
  return (
    <section
      id="technologies"
      className="w-full px-[10px] shrink-0 flex flex-col items-center justify-center min-h-screen gap-[50px] lg:gap-[100px] snap-start snap-always py-[40px] lg:py-[80px] relative"
    >
      <motion.div
        ref={ref}
        className="flex flex-col flex-wrap gap-[20px] lg:gap-[40px] items-center justify-center w-[100vw] max-w-[1200px] h-[280px] lg:h-[400px] pb-[20px] snap-x overflow-x-scroll scroll-smooth px-[50px]"
      >
        {arr.map((item, index) => (
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -1000 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 2 }}
            initial="hidden"
            animate={mainControl}
            whileHover={{ scale: 1.1 }}
            key={index}
            className="w-[100px] lg:w-[120px] h-[120px] lg:h-[160px] flex flex-col items-center justify-between p-[10px] lg:p-[20px] bg-slate-900 bg-opacity-50 rounded-xl shadow-xl"
          >
            <Image
              src={item[0]}
              className="w-[50px] lg:w-[60px] h-[50px] lg:h-[60px]"
              alt="visual studio logo"
            />
            <p className="text-[12px] font-semibold tracking-[2px] lg:text-[14px] text-center">
              {item[1]}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
export default Skills;
