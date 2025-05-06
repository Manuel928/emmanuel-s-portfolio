import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col bg-white dark:bg-[hsl(240,93%,3%)] gap-6 justify-between items-center px-8 py-4 md:flex-row md:h-[600px]">
      <div className="order-2 w-3/4 md:order-1 flex flex-col items-center md:items-start space-y-6 md:space-y-7">
        <h1 className="text-3xl dark:text-white leading-relaxed md:text-5xl text-center md:text-left">
          Welcome To My <br />
          <code className="typewriter text-blue-400 text-4xl md:text-7xl tracking-tight font-medium">
            Digital Space
          </code>
        </h1>
        <p className="text-sm text-center dark:text-white md:text-left md:text-lg max-w-md">
          Where creativity meets code, and ideas come to life. Glad to have you
          here!
        </p>
        <div>
          <a
            href="https://docs.google.com/document/d/1mXJRJsotpHXM_DY4s5_o-g3kDlOTns-hIDf0w51qlnU/edit?usp=sharing"
            target="_blank"
            className="bg-blue-400 text-black px-6 py-3 text-center rounded-bl-3xl rounded-tr-3xl hover:bg-white hover:text-black hover:border duration-500 hover:duration-200"
          >
            My Resume 📃
          </a>
        </div>
        <div className="flex items-center dark:text-white lg:text-xl space-x-3 mt-4">
          <h3 className="text-sm lg:text-md">Follow Me</h3>
          <a href="">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://github.com/Manuel928">
            <i class="fa fa-github" aria-hidden="true"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </div>
      </div>

      {/* <!-- <img className="rounded-full w-72 border-3 bg-gradient-to-r from-purple-400 to-purple-700 md:w-[700px]" src="./images/emmanuel.jpg" alt="" srcset=""> --> */}
      <div className="p-1 order-1 md:order-2 rounded-full bg-gradient-to-r from-blue-300 to-blue-400 w-72 md:w-[700px]">
        <img
          className="rounded-full w-full h-full object-cover"
          src="./images/emmanuel.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
