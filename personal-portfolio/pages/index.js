import { Header } from "@/components/Header";
import { Highlight } from "@/components/Highlight";
import { Chip } from "@/components/Chip";
import { Introduction } from "@/components/Introduction";
import { Skill } from "@/components/Skill";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Highlight />
      <div className="bg-slate-50 lg:px-20 lg:py-24 pt-16">
        <div className="flex flex-col items-center">
          <Chip label="About me" />
        </div>
        <div className="lg:flex gap-12 lg:mt-12">
          <div className="flex justify-center mt-6 lg:mt-12 mx-7 mb-5 lg:mb-52 lg:mr-36 lg:ml-10">
            <img className="max-w-none" src="/images/Fullpic.jpg" />
          </div>
          <Introduction />
        </div>
      </div>
      <div className="lg:px-20 lg:py-24 pt-16">
        <div className="flex flex-col items-center">
          <Chip label="Skills" />
        </div>
        <Skill />
      </div>
      <div className="bg-slate-50 lg:px-20 lg:py-24 pt-16">
        <div className="flex flex-col items-center">
          <Chip label="About me" />
          <p className="mt-4 text-slate-500">
            Here is a quick summary of my most recent experiences:
          </p>
        </div>
      </div>
    </div>
  );
}
