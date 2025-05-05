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
            href="#"
            className="text-sm bg-black text-white px-4 py-3 hover:bg-white hover:text-black hover:border duration-500 rounded-bl-3xl rounded-tr-3xl"
          >
            Ask your questions
          </a>
        </div>
      </div>
    </section>
  );
};

export default AnyQuestions;
