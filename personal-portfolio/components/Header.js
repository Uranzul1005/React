import { Logo } from "./icons/Logo";
import { Menu } from "./icons/Menu";

export function Header() {
  return (
    <div className="flex justify-between p-4 items-center">
      <Logo />
      <div className="sm:flex md:hidden">
        <Menu />
      </div>
      <div className="hidden md:flex gap-8">
        <div className=" flex text-slate-500 gap-4 items-center">
          <p>About</p>
          <p>Work</p>
          <p>Testimonials</p>
          <p>Contact</p>
        </div>
        <div className="flex gap-4">
          <img src="icons/icon Button.jpg" />
          <p className="bg-black text-white rounded-xl flex py-1.5 px-4">
            Download CV
          </p>
        </div>
      </div>
    </div>
  );
}
