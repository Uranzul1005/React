import { Header } from "@/components/Header";
import { Highlight } from "@/components/Highlight";
import { Chip } from "@/components/Chip";
import { Introduction } from "@/components/Introduction";
import { Skill } from "@/components/Skill";
import { Worksection } from "@/components/Work/Worksection";
import { Workimage } from "@/components/Work/Workimage";
import { Workleft } from "@/components/Work/Workleft";
import { Endsection } from "@/components/Endsection";
import { Footer } from "@/components/Footer";
import { Experience } from "@/components/Experience/Experience";

export default function Home() {
  return (
    <div>
      <Header />
      <Highlight />
      <div className="bg-slate-50 lg:px-20 lg:py-24 pt-16 dark:bg-slate-950 ">
        <div className="flex flex-col items-center">
          <Chip label="About me" />
        </div>
        <div className="lg:flex gap-12 lg:mt-12 ">
          <div className="flex justify-center mt-6 lg:mt-12 mx-7 mb-5 lg:mb-52 lg:mr-36 lg:ml-10">
            <img className="max-w-none" src="/images/Fullpic.jpg" />
          </div>
          <Introduction />
        </div>
      </div>
      <div className="lg:px-20 lg:py-24 pt-16  ">
        <div className="flex flex-col items-center">
          <Chip label="Skills" />
        </div>
        <Skill />
      </div>
      <div className="flex flex-col items-center dark:bg-slate-950">
        <Experience />
      </div>
      <div className="px-20">
        <Worksection />
        <div className="md:flex px-16 ">
          <Workimage />
          <Workleft />
        </div>
        <div className="md:flex px-16 md:flex-row-reverse">
          <Workimage />
          <Workleft />
        </div>
        <div className="md:flex px-16">
          <Workimage />
          <Workleft />
        </div>
      </div>

      <Endsection />

      <Footer />
    </div>
  );
}
