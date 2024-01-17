import { Logo } from "./icons/Logo";
import { Menu } from "./icons/Menu";
import { Menuitems } from "./Menuitems";

export function Header() {
  const menuItems = [
    { label: "About", link: "/about" },
    { label: "Work", link: "/work" },
    { label: "Testimonials", link: "/testimonials" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <div className="flex justify-between md:py-4 md:px-20 p-4 items-center">
      <Logo />
      <div className="sm:flex md:hidden">
        <Menu />
      </div>
      <div className="hidden md:flex gap-8">
        <Menuitems items={menuItems} />
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
