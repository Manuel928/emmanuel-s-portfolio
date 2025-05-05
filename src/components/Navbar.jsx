import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  function handleToggle() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  }

  return (
    <nav className="flex sticky top-0 z-50 backdrop-blur-md bg-white/60 dark:bg-black text-black dark:text-white justify-between items-center p-6 md:p-8">
      <a href="#">
        <div>ML.</div>
      </a>
      <ul className="flex items-center gap-5 text-sm md:text-[16px]">
        <div
          className="bg-blue-400 flex items-center justify-center p-2 cursor-pointer rounded-full"
          onClick={handleToggle}
        >
          <img
            src="./images/night-mode.png"
            className="w-3 h-3"
            alt="Toggle Theme"
          />
        </div>
        <li>
          <a href="#services">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact" className="btn dark">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;