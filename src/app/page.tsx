import { HomepageLayout } from "@/components/home";
import Projects from "@/components/home/Projects";

export default function Home() {
  return (
    <HomepageLayout>
      <div className="w-full max-w-[1000px] mx-auto ">
        <div className="w-full pt-10 pb-5">
          <h1 className="text-4xl xl:text-6xl font-bold text-gradient-red-to-blue ">
            Welcome to Igot Studio
          </h1>
        </div>
        <div className="w-full flex flex-col gap-5">
          <h2 className="text-xl font-medium">My Notebooks</h2>
          <Projects />
        </div>
      </div>
    </HomepageLayout>
  );
}
