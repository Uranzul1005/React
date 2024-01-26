import { useState } from "react";
import { FiSun } from "react-icons/fi";
import { LuMoonStar } from "react-icons/lu";

export function ThemeChanger() {
  const [theme, setTheme] = useState("light");

  function changeTheme() {
    if (theme == "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }

  return (
    <button onClick={changeTheme}>
      {theme == "light" && <FiSun />}
      {theme == "dark" && <LuMoonStar />}
    </button>
  );
}
