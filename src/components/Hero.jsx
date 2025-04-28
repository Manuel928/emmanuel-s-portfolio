import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col bg-[rgb(245,239,232)] gap-6 justify-between items-center px-8 py-4 md:flex-row md:h-[600px]">
      <div className="order-2 w-3/4 md:order-1 flex flex-col items-center md:items-start space-y-6 md:space-y-7">
        <h1 className="text-3xl leading-relaxed md:text-5xl text-center md:text-left">
          Welcome To My <br />
          <code className="typewriter text-4xl md:text-7xl tracking-tight font-medium">
            Digital Space
          </code>
        </h1>
        <p className="text-sm text-center md:text-left md:text-lg max-w-md">
          Where creativity meets code, and ideas come to life. Glad to have you
          here!
        </p>
        <div>
          <a
            href="#"
            className="bg-black text-white px-4 py-3 rounded-bl-3xl rounded-tr-3xl hover:bg-white hover:text-black hover:border duration-500 hover:duration-200"
          >
            Subscribe now
          </a>
        </div>
        <div className="flex items-center space-x-3 mt-4">
          <h3 className="text-sm">Follow Us</h3>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-x-twitter"></i>
        </div>
      </div>

      {/* <!-- <img className="rounded-full w-72 border-3 bg-gradient-to-r from-purple-400 to-purple-700 md:w-[700px]" src="./images/emmanuel.jpg" alt="" srcset=""> --> */}
      <div className="p-1 order-1 md:order-2 rounded-full bg-gradient-to-r from-yellow-800 to-orange-300 w-72 md:w-[700px]">
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
