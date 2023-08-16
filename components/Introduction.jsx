"use client";
import Image from "next/image";
import profile from "@/public/profile.jpeg";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { motion, useInView } from "framer-motion";
import { useTypingEffect } from "@/hooks/typing-effect";
import { useEffect, useRef } from "react";
import { useGlobalContext } from "@/app/context";

const Introduction = () => {
  const ref = useRef(null);
  const { setSection } = useGlobalContext();
  const isInView = useInView(ref);
  const text = useTypingEffect("Bohdan Repynets Frontend Developer", 100);
  useEffect(() => {
    if (isInView) {
      setSection("introduction");
    }
  }, [isInView]);
  return (
    <section
      id="introduction"
      className=" flex shrink-0 items-center justify-center relative w-full min-h-screen snap-start snap-always py-[40px] sm:py-[80px]"
    >
      <div className="flex flex-col items-center gap-[30px] sm:gap-[50px]">
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 5 }}
          initial="hidden"
          animate="visible"
        >
          <Image
            className="w-[200px] h-[200px] object-cover rounded-full shadow-xl border-rose-700 border-4"
            src={profile}
            alt="profile photo"
          />
        </motion.div>
        <div className="font-semibold text-center font-mono flex flex-col gap-[20px] h-[80px]">
          <p className="text-[24px]">{text.slice(0, 15)}</p>
          <p className="text-[16px]">{text.slice(16)}</p>
        </div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 80 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 3, delay: 3 }}
          initial="hidden"
          animate="visible"
          className="flex gap-[50px]"
        >
          <Link
            className="hover:scale-110 duration-100"
            href={"https://github.com/bodya-repynets"}
          >
            <AiFillGithub className="text-[24px]" />
          </Link>
          <Link className="hover:scale-110 duration-100" href={""}>
            <AiFillLinkedin className="text-[24px]" />
          </Link>
          <Link className="hover:scale-110 duration-100" href={""}>
            <BsTelegram className="text-[24px]" />
          </Link>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 80 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 3, delay: 3 }}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-[20px] sm:gap-[50px]"
        >
          <button className="bg-gradient-to-r from-rose-600 to-rose-800 hover:from-rose-800 hover:to-rose-900 w-[200px] h-[50px] font-semibold uppercase tracking-[3px] rounded-xl hover:scale-110 duration-100">
            Get CV
          </button>
          <button className="bg-gradient-to-r from-rose-600 to-rose-800 hover:from-rose-800 hover:to-rose-900 w-[200px] h-[50px] font-semibold uppercase tracking-[3px] rounded-xl hover:scale-110 duration-100">
            Contact
          </button>
        </motion.div>
      </div>
    </section>
  );
};
export default Introduction;
