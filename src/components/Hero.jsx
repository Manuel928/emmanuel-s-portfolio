import { ReactTyped } from "react-typed";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
      }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col bg-white dark:bg-[hsl(240,93%,3%)] gap-6 justify-between items-center px-8 py-4 md:flex-row md:h-[600px]"
    >
      <div className="order-2 w-3/4 md:order-1 flex flex-col items-center md:items-start space-y-6 md:space-y-7">
        <h1 className="text-3xl dark:text-white leading-relaxed md:text-4xl lg:text-5xl text-center md:text-left">
          Welcome To My <br />
          <ReactTyped
            className="text-blue-400 text-4xl md:text-5xl lg:text-7xl tracking-tight font-medium"
            strings={["Digital Space"]}
            typeSpeed={40}
            backSpeed={50}
            attr=""
            loop
          ></ReactTyped>
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
          <a href="https://www.instagram.com/devyn_studios/">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://github.com/Manuel928">
            <i class="fa fa-github" aria-hidden="true"></i>
          </a>
          <a href="https://x.com/nuel_flow">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </div>
      </div>
      {/* <!-- <img className="rounded-full w-72 border-3 bg-gradient-to-r from-purple-400 to-purple-700 md:w-[700px]" src="./images/emmanuel.jpg" alt="" srcset=""> --> */}
      <div className="p-1.5 order-1 animate-pulse md:order-2 rotate-3 rounded-bl-[190px] rounded-tr-[190px] rounded-br-[90px] rounded-tl-[90px] lg:rounded-bl-[300px] lg:rounded-tr-[300px] lg:rounded-br-[170px] lg:rounded-tl-[170px] bg-gradient-to-r from-blue-400 to-blue-700 w-72 md:w-[700px]">
        <img
          className="rounded-full w-full h-full object-cover"
          src="./images/emmanuel.jpg"
          alt=""
        />
      </div>
    </motion.div>
  );
};

export default Hero;
