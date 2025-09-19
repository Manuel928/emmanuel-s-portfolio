import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", currentTheme === "dark");
    localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  function handleThemeToggle() {
    setCurrentTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <nav className="flex sticky top-0 z-50 backdrop-blur-md bg-white/60 dark:bg-[hsl(240,93%,3%)]/40 text-black dark:text-white justify-between items-center px-8 py-6 lg:py-8">
      <Link to="/">
        <code className="font-bold text-xl ">
          {" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
            {"<"}
          </span>
          &nbsp;
          {"Manuel"}&nbsp;
          <span className="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
            {"/>"}
          </span>
        </code>
      </Link>
      <ul className="flex items-center gap-5 text-sm md:text-[16px]">
        <div
          className="bg-white flex items-center justify-center p-1 cursor-pointer rounded-full"
          onClick={handleThemeToggle}
        >
          <img
            src="../images/darkmode.svg"
            className="w-4 h-4 lg:w-5 lg:h-5 dark:hidden"
            alt="Enable Dark Mode"
          />
          <img
            src="../images/light-mode.png"
            className="w-4 h-4 lg:w-5 lg:h-5 hidden dark:block"
            alt="Enable Light Mode"
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
