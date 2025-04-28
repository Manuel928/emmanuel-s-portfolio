import React from "react";

const Navbar = () => {
  return (
    <nav className="flex sticky top-0 z-50 backdrop-blur-md bg-[rgba(245,239,232,0.3)] justify-between items-center border-b p-6 md:p-8">
      <a href="#">
        <div>ML.</div>
      </a>
      <ul className="flex gap-5 text-sm md:text-[16px]">
        <li>
          <a href="#services">About</a>
        </li>
        <li>
          <a href="#process">Videos</a>
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
