"use client";
import { useGlobalContext } from "@/app/context";
import Link from "next/link";
import { useEffect, useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { section } = useGlobalContext();

  return (
    <>
      <div className="hidden fixed sm:flex gap-[50px] z-10 w-full h- bg-slate-900 bg-opacity-50 h-[80px] items-center justify-center text-[16px] font-semibold tracking-[3px]">
        <Link
          className={`${
            section === "introduction" && "text-rose-500"
          } hover:scale-110 duration-100 uppercase`}
          href={"#introduction"}
        >
          Introduction
        </Link>
        <Link
          className={`${
            section === "technologies" && "text-rose-500"
          } hover:scale-110 duration-100 uppercase`}
          href={"#technologies"}
        >
          Technologies
        </Link>
        <Link
          className={`${
            section === "projects" && "text-rose-500"
          } hover:scale-110 duration-100 uppercase`}
          href={"#projects"}
        >
          Projects
        </Link>
      </div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex sm:hidden fixed top-[20px] right-[20px] z-10 hover:scale-110 duration-100"
      >
        <AiOutlineMenu className="text-[40px]" />
      </button>
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
