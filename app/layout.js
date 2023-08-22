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
    <html
      lang="en"
      className="text-white bg-gradient-to-b from-slate-400 to-slate-600"
    >
      <body className={inter.className}>
        <AppContext>
          <Navbar />
          {children}
        </AppContext>
      </body>
    </html>
  );
}
