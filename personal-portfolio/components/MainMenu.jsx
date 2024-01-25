import { useState } from "react";
import { Menu } from "./icons/Menu";
import { Logo } from "./icons/Logo";
import { Exit } from "./icons/Exit";
import { menuItems } from "@/data/menuItems";

export function MainMenu({ items }) {
  return (
    <>
      <div className="hidden sm:flex text-slate-500 dark:text-slate-300">
        {items.map((item) => (
          <a key={item.id} className="px-4 py-2" href={item.link}>
            {item.label}
          </a>
        ))}
      </div>
      <MobileMenu items={menuItems} />
    </>
  );
}

function MobileMenu({ items }) {
  const [visible, setVisible] = useState(false);

  function openMenu() {
    setVisible(true);
  }

  function closeMenu() {
    setVisible(false);
  }

  return (
    <>
      <button className="sm:flex md:hidden" onClick={openMenu}>
        <Menu />
      </button>
      {visible && <div className="fixed inset-0 bg-slate-200"></div>}
      <div
        className={`fixed top-0 bottom-0 w-3/4 transition-all bg-white ${
          visible ? "right-0" : "-right-full"
        }`}
      >
        <div className="flex justify-between p-4 items-center">
          <Logo />
          <button onClick={closeMenu}>
            <Exit />
          </button>
        </div>
        <div className="flex flex-col text-slate-500 border-solid border-2 border-slate-200">
          {items.map((item) => (
            <a key={item.id} className="px-4 py-2 " href={item.link}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex justify-between items-center p-4 text-slate-500">
          <p>Switch theme</p>
          <img src="icons/icon Button.jpg" />
        </div>
        <a
          href="cv.jpg"
          className="text-slate-200 mx-4 bg-black rounded-xl hover:bg-slate-500 px-4 py-2 flex justify-center "
          download
        >
          Download CV
        </a>
      </div>
    </>
  );
}
