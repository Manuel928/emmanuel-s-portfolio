import { div } from "motion/react-client";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Contact from "./Contact";
import { Undo2Icon } from "lucide-react";

const ProjectDetailsCard = ({ image, name, link, description, children }) => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)} className="mx-1 mb-5 flex gap-1">
        <Undo2Icon />
        Go back
      </button>
      <div className="flex flex-col gap-[36px] lg:flex-row justify-between">
        <img
          className="lg:w-1/2 rounded-2xl"
          src={`../images/${image}`}
          alt=""
          srcset=""
        />

        <div className="flex flex-col space-y-[16px] lg:space-y-[18px] items-start justify-between lg:pt-7 px-4 lg:px-0">
          <div className="flex flex-col gap-4">
            <h3 className="dark:text-white font-bold text-xl text-start lg:text-3xl">
              {name}
            </h3>
            <p className="dark:text-white lg:text-justify">{description}</p>
          </div>

          {/* Tech Stack */}
          <p className="dark:text-white font-medium text-sm lg:text-[16px] mt-3 rounded">
            Tech Stack:
          </p>
          <div className="flex gap-2">
            {children.map((techStack, index) => (
              <div
                className="flex flex-row rounded-md dark:text-white"
                key={index}
              >
                <div className="dark:text-white font-medium text-sm">{techStack}</div>
              </div>
            ))}
          </div>
          {/* End of Tech Stack */}
          <a
            href={link}
            target="_blank"
            type="submit"
            className="py-3 px-7 dark:bg-blue-400 text-sm font-medium text-center text-white rounded-lg bg-black rounded-bl-3xl rounded-tr-3xl cursor-pointer hover:bg-white hover:text-black hover:border duration-500 focus:ring-4 focus:outline-none"
          >
            Live link
          </a>
        </div>
      </div>

      <div className="my-20 dark:text-white">
        <h3 className="underline text-lg text-center font-bold">Problem Statement:</h3>
        <p className="mt-5 lg:text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut velit
          harum debitis enim cumque ratione quibusdam incidunt excepturi,
          corrupti numquam perferendis qui facilis sunt delectus fugit
          voluptatem magnam id mollitia nam quam alias veniam soluta? Labore
          nesciunt asperiores, expedita repellat, quas veritatis est dolorem
          molestias blanditiis delectus qui sunt aut?
        </p>
      </div>

      <Contact />
    </>
  );
};

export default ProjectDetailsCard;
