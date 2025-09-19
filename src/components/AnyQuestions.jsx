import React from "react";

const AnyQuestions = () => {
  return (
    <section className="mt-16">
      <div>
        <div className="bg-blue-100 h-[200px] flex flex-col gap-[10px] items-center justify-center">
          <h2 className="font-semibold text-lg md:text-2xl">
            Do you have any questions?
          </h2>
          <p className="text-sm">Feel free to reach out to me</p>
          <a
            href="#contact"
            className="text-sm bg-black dark:bg-gradient-to-r from-blue-400 to-blue-700 text-white px-4 py-3 hover:border duration-500 rounded-bl-3xl rounded-tr-3xl"
          >
            Fill the form below 👇
          </a>
        </div>
      </div>
    </section>
  );
};

export default AnyQuestions;
