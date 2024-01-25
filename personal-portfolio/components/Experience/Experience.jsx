import { Chip } from "../Chip";
import { Exper1 } from "./Exper1";
import { Exper2 } from "./Exper2";
import { Exper3 } from "./Exper3";

export function Experience() {
  return (
    <div className="bg-slate-50 md:px-20 md:py-24 pt-16 dark:bg-slate-950 ">
      <div className="flex flex-col items-center ">
        <Chip label="Experience" />
        <p className="mt-4 text-slate-500 dark:text-slate-300">
          Here is a quick summary of my most recent experiences:
        </p>
      </div>

      <div className="md:flex-row justify-between mt-12 max-w-4xl items-start bg-white p-8 flex flex-col gap-4 md:gap-12 dark:bg-slate-900">
        <img src="./icons/logo-upwork.png" />
        <p className="text-slate-500 md:order-1 dark:text-slate-300">
          Nov 2021 - Present
        </p>
        <Exper2 />
      </div>
      <div className="md:flex-row justify-between mt-12 max-w-4xl items-start bg-white p-8 flex flex-col gap-4 md:gap-12 dark:bg-slate-900">
        <img src="./icons/logo-upwork.png" />
        <p className="text-slate-500 md:order-1 dark:text-slate-300">
          Jul 2017 - Oct 2021
        </p>
        <Exper1 />
      </div>
      <div className="md:flex-row justify-between mt-12 max-w-4xl items-start bg-white p-8 flex flex-col gap-4 md:gap-12 dark:bg-slate-900">
        <img src="./icons/logo-upwork.png" />
        <p className="text-slate-500 md:order-1 dark:text-slate-300">
          Dec 2015 - May 2017
        </p>
        <Exper3 />
      </div>
    </div>
  );
}
