import React from "react";

const Footer = () => {
  return (
    <footer class="h-96 mt-16 dark:text-white">
      <div class="flex flex-col px-[40px]">
        <div class="text-3xl font-semibold">ML.</div>

        <div class="grid md:grid-cols-3 items-center gap-4 my-12">
          <div class="flex flex-col gap-4">
            <div class="text-sm">
              Tel:{" "}
              <a href="#" class="hover:border-b-2 pb-2 duration-200">
                +234 8102969846
              </a>
            </div>
            <div class="text-sm">
              Email:{" "}
              <a
                href="mailto:afrikareportersng@gmail.com"
                class="hover:border-b-2 pb-2 duration-200"
              >
                afrikareportersng@gmail.com
              </a>
            </div>
          </div>

          <div class="flex flex-col gap-4 mt-8 md:mt-0">
            <h3 class="font-semibold text-lg underline">Quick Links</h3>
            <div class="text-sm">
              <a href="#" class="hover:border-b-2 pb-2 duration-200">
                Home
              </a>
            </div>
            <div class="text-sm">
              <a href="#projects" class="hover:border-b-2 pb-2 duration-200">
                Projects
              </a>
            </div>
            <div class="text-sm">
              <a href="#" class="hover:border-b-2 pb-2 duration-200">
                Youtube Channel
              </a>
            </div>
          </div>
          <div>
            <div class="flex items-center space-x-3 mt-4">
              <h3 class="text-sm">Follow me</h3>
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
        </div>

        <div class="max-w-xl flex flex-col items-center mx-auto py-4 text-sm text-gray-500">
          <p>&copy; 2025 Manuelonics. All rights reserved.</p>
          <a href="#" class="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
