import React from "react";

const Skills = () => {
  const skills = [
    {
      logo: "react-2.svg",
      name: "React",
    },
    {
      logo: "javascript-r.svg",
      name: "JavaScript",
    },
    {
      logo: "tailwind-css-2.svg",
      name: "Tailwind CSS",
    },
    {
      logo: "nodejs.svg",
      name: "Node JS",
    },
    {
      logo: "framer-motion.svg",
      name: "Framer Motion",
    },
    {
      logo: "firebase-1.svg",
      name: "Firebase",
    },
  ];

  return (
    <section
      id="services"
      className="mt-16 dark:bg-[hsl(240,93%,3%)] animate-fadeIn"
    >
      <div className="flex lg:gap-[20px] lg:p-[30px] p-[20px]">
        <div>
          <h1
            className="hidden dark:text-white lg:block uppercase tracking-[0.8rem] font-semibold"
            style={{ writingMode: "vertical-rl" }}
          >
            Skills
          </h1>
        </div>

        <div className="flex flex-col gap-[10px] space-y-4">
          <div className="space-y-2">
            <h3 className="font-bold text-2xl dark:text-white lg:hidden uppercase">
              ...Skills
            </h3>
            <h3 className="font-bold text-2xl dark:text-white uppercase hidden lg:block">
              ...Tools of My Craft
            </h3>
            <div className="bg-blue-400 h-1 w-30 lg:hidden"></div>
            <div className="bg-blue-400 h-1 w-32 hidden lg:block"></div>
          </div>

          <div className="grid grid-cols-3 justify-center items-center gap-5 lg:gap-8">
            {skills.map((item) => (
              <Skill skill={item} key={item.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function Skill({ skill }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-full p-[20px] gap-[5px] border dark:border-white rounded-lg shadow-md hover:-translate-y-1 hover:shadow-lg duration-500">
        <div>
          <img
            src={`./images/${skill.logo}`}
            className="w-18 h-6 md:w-24 md:h-12"
            alt=""
            srcset=""
          />
        </div>
        <h4 className="font-semibold dark:text-white text-sm text-center text-black">
          {skill.name}
        </h4>
      </div>
    </>
  );
}

export default Skills;
