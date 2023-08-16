import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import AppContext from "./context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Porfolio: Bohdan Repynets",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="text-white bg-slate-500">
      <body className={inter.className}>
        <AppContext>
          <Navbar />
          <div className="w-[80vw] h-[50vh] absolute top-0 left-[calc(50%-40vw)] bg-gradient-to-b blur-[100px] from-rose-300 to-slate-500 -z-10"></div>
          {children}
        </AppContext>
      </body>
    </html>
  );
}
