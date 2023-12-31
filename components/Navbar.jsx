"use client";
import { useGlobalContext } from "@/app/context";
import Link from "next/link";
import { useState } from "react";

import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { section } = useGlobalContext();

  return (
    <>
      <div className="hidden fixed lg:flex gap-[50px] z-10 w-full h- bg-slate-900 bg-opacity-50 h-[80px] items-center justify-center text-[16px] font-semibold tracking-[3px]">
        <Link
          className={`${
            section === "introduction" && "bg-rose-700"
          } h-[100%] p-[20px] flex items-center hover:scale-110 duration-100 uppercase`}
          href={"#introduction"}
        >
          Introduction
        </Link>
        <Link
          className={`${
            section === "technologies" && "bg-rose-700"
          } h-[100%] p-[20px] flex items-center hover:scale-110 duration-100 uppercase`}
          href={"#technologies"}
        >
          Technologies
        </Link>
        <Link
          className={`${
            section === "projects" && "bg-rose-700"
          } h-[100%] p-[20px] flex items-center hover:scale-110 duration-100 uppercase`}
          href={"#projects"}
        >
          Projects
        </Link>
        <div className="fixed top-0 right-0 flex items-center justify-center w-[150px] h-[80px] gap-[20px]">
          <Link
            className="hover:scale-110 duration-100"
            target="_blank"
            href={"https://github.com/bodya-repynets"}
          >
            <AiFillGithub className="text-[24px]" />
          </Link>
          <Link
            className="hover:scale-110 duration-100"
            target="_blank"
            href={"https://www.linkedin.com/in/bohdan-repynets-07b125262/"}
          >
            <AiFillLinkedin className="text-[24px]" />
          </Link>
        </div>
      </div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex lg:hidden fixed top-[20px] right-[20px] z-10 hover:scale-110 duration-100"
      >
        <AiOutlineMenu className="text-[40px]" />
      </button>
      <span
        onClick={() => setShowMenu(!showMenu)}
        className="flex lg:hidden fixed top-[20px] left-[20px] z-10 capitalize font-semibold tracking-[3px]"
      >
        {section}
      </span>
      <div
        className={`absolute z-20 w-[100vw] h-[100vh] bg-gradient-to-b from-rose-700 to-rose-900 text-[24px] gap-[50px] ${
          showMenu ? "flex flex-col justify-center items-center" : "hidden"
        }`}
      >
        <Link
          className="hover:scale-110 duration-100"
          onClick={() => setShowMenu(!showMenu)}
          href={"#introduction"}
        >
          Introduction
        </Link>
        <Link
          className="hover:scale-110 duration-100"
          onClick={() => setShowMenu(!showMenu)}
          href={"#technologies"}
        >
          Technologies
        </Link>
        <Link
          className="hover:scale-110 duration-100"
          onClick={() => setShowMenu(!showMenu)}
          href={"#projects"}
        >
          Projects
        </Link>
        <div className="absolute bottom-[50px] right-[calc(50vw-75px)] flex items-center w-[150px] justify-center gap-[40px]">
          <Link
            className="hover:scale-110 duration-100"
            target="_blank"
            href={"https://github.com/bodya-repynets"}
          >
            <AiFillGithub className="text-[40px]" />
          </Link>
          <Link
            className="hover:scale-110 duration-100"
            target="_blank"
            href={"https://www.linkedin.com/in/bohdan-repynets-07b125262/"}
          >
            <AiFillLinkedin className="text-[40px]" />
          </Link>
        </div>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="absolute top-[20px] right-[20px] hover:scale-110 duration-100"
        >
          <AiOutlineClose className="text-[40px]" />
        </button>
      </div>
    </>
  );
};
export default Navbar;
