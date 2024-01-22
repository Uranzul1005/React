import { Logo } from "./icons/Logo";
import { MainMenu } from "./MainMenu";
import { menuItems } from "@/data/menuItems";

export function Header() {
  return (
    <div className="flex justify-between md:py-4 md:px-20 p-4 items-center">
      <Logo />
      <div className="flex gap-4">
        <MainMenu items={menuItems} />
        <div className="hidden sm:flex">
          <img src="icons/icon Button.jpg" />
          <a
            href="cv.jpg"
            className="px-4 py-2 text-white bg-black rounded-xl hover:bg-slate-500"
            download
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
