import { Online } from "./icons/Online";
import { Location } from "./icons/Location";
import { Github } from "./icons/Github";
import { Figma } from "./icons/Figma";
import { Twitter } from "./icons/Twitter";

export function Highlight() {
  return (
    <div className="lg:flex lg:py-24 lg:px-20 gap-12 py-16 ">
      <div className="flex justify-center mb-12 order-2 lg:mt-0 lg:mr-10 lg:ml-20 lg:mb-10">
        <img className="max-w-none" src="/images/Pic.jpg" alt="profile" />
      </div>
      <div className="order-1 px-4">
        <p className="text-6xl font-bold dark:text-white mb-12">
          Hi, I’m Sagar 👋
        </p>
        <p className="mt-2 text-slate-500 dark:text-slate-300">
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally designing) exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 7 years, I still
          love it as if it was something new.
        </p>
        <div className=" text-slate-500 my-12 dark:text-slate-300">
          <div className="flex">
            <Location />
            <p>Ahmedabad, India</p>
          </div>
          <div className="flex dark:text-slate-300">
            <Online />
            <p>Available for new projects</p>
          </div>
        </div>
        <div className="flex gap-4">
          <Github />
          <Twitter />
          <Figma />
        </div>
      </div>
    </div>
  );
}
