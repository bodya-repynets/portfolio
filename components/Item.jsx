import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const Item = ({ mainControl, item }) => {
  const [hidden, setHidden] = useState(true);
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: -1000 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 2 }}
      initial="hidden"
      animate={mainControl}
      className="w-[300px] justify-between h-full flex flex-col items-center bg-slate-900 bg-opacity-50 rounded-xl overflow-hidden pb-[20px] relative"
    >
      <Link target="_blank" className="relative" href={item.href}>
        <Image
          src={item.image}
          className="w-[300px] hover:scale-110 duration-100"
          alt="wallet screen"
        />
      </Link>
      <div className="flex flex-col px-[20px] py-[40px] h-full justify-between">
        <p className="text-center font-semibold text-[20px] tracking-[3px]">
          {item.name}
        </p>
        <div className="text-center text-[12px] font-semibold tracking-[2px] flex gap-[10px] flex-wrap justify-center">
          {item.technologies.map((item) => (
            <p key={item} className="bg-rose-700 p-1 rounded">
              {item}
            </p>
          ))}
        </div>
      </div>
      {hidden ? (
        <button
          onClick={() => setHidden(!hidden)}
          className="text-[12px] font-semibold tracking-[2px] flex gap-[5px] items-center"
        >
          Show description <AiFillCaretDown />
        </button>
      ) : (
        <button
          onClick={() => setHidden(!hidden)}
          className="text-[12px] font-semibold tracking-[2px] flex gap-[5px] items-center"
        >
          Hide description <AiFillCaretUp />
        </button>
      )}
      <p
        className={`${
          hidden ? "hidden" : "block"
        } text-center text-[12px] font-semibold tracking-[2px] absolute bottom-[50px] duration-200 bg-rose-700 p-[10px] `}
      >
        Description:{item.description}
      </p>
    </motion.div>
  );
};
export default Item;
