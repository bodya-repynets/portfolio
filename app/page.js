import Hello from "@/components/Introduction";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";

export default function Home() {
  return (
    <div className="w-screen flex flex-col items-center container1 snap-y snap-mandatory overflow-y-scroll scroll-smooth h-[100vh] relative">
      <Hello />
      <Technologies />
      <Projects />
    </div>
  );
}
