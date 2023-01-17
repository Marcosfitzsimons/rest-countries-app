"use client";

import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../hooks/useDarkSide";

export default function ThemeToggle() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );
  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };
  return (
    <div className="flex justify-center items-end">
      <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={25} />
    </div>
  );
}
