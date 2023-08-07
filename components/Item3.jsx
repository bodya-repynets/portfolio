import walletScreen from "@/public/screens/wallet.png";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Item3 = ({ mainControl }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: -1000 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 2 }}
      initial="hidden"
      animate={mainControl}
      className="w-[300px] flex flex-col items-center bg-slate-900 bg-opacity-50 rounded-xl overflow-hidden"
    >
      <Link href={"https://wallet-bodya.vercel.app"}>
        <Image
          src={walletScreen}
          className="w-[300px] hover:scale-110 duration-100"
          alt="wallet screen"
        />
      </Link>
      <div className="flex flex-col p-[20px] gap-[10px]">
        <p className="text-center font-semibold text-[20px]">Title: Wallet</p>
        <p className="text-center text-[16px] font-semibold tracking-[2px]">
          Technologies: React NextJS Tailwind Firebase Redux
        </p>
        <p className="text-center text-[12px]">
          Description: This is money expenses tracker app, you can authorize and
          will be able to add your expenses and after view all of them, also
          there is some analytics about categories on which you spend money.
        </p>
      </div>
    </motion.div>
  );
};
export default Item3;
