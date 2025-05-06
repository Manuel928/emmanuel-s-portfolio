import React from "react";

const Projects = () => {
  const projectsList = [
    {
      image: "solus-w.png",
      name: "Solus",
      link: "https://solus-tawny.vercel.app/",
      techStack: ["React", "Tailwind", "AOS"],
    },
    {
      image: "metics.webp",
      name: "Metics Fashion",
      link: "https://metics.io",
      techStack: ["React", "Tailwind", "AOS"],
    },
    {
      image: "cloth.avif",
      name: "DevynTech",
      link: "https://modern.solutions",
      techStack: ["NextJS", "Tailwind", "ShadCDN"],
    },
  ];

  return (
    <section className="dark:bg-[hsl(240,93%,3%)]" id="projects">
      <div className="mt-16">
        <div className="flex lg:gap-[20px] justify-end lg:p-[30px] p-[20px]">
          <div className="flex flex-col justify-center items-end gap-[10px] space-y-4">
            <div className="space-y-2">
              <h3 className="font-bold text-2xl dark:text-white uppercase">...Projects</h3>
              <div className="bg-blue-400 h-1 w-40"></div>
            </div>
            <div className="grid lg:grid-cols-3 justify-center items-center gap-5 lg:gap-8">
              {projectsList.map((project) => (
                <ProjectCard project={project} key={project.name} />
              ))}
            </div>
          </div>
          <div className="left-heading">
            <h1
              className="hidden lg:block dark:text-white uppercase tracking-[0.8rem] font-semibold"
              style={{ writingMode: "vertical-lr" }}
            >
              Showcase
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

function ProjectCard({ project }) {
  return (
    <div className="flex flex-col h-full justify-center text-center gap-4 pb-6 bg-white rounded-xl dark:bg-blue-100 border border-blue-200 dark:border-[hsl(240,93%,3%)] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
      <img
        src={`./images/${project.image}`}
        alt={project.name}
        className="w-full rounded-xl p-2 h-64 object-cover"
      />
      <div className="px-6 space-y-3">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 self-start"
          >
            <h4 className="font-bold lg:text-[20px] uppercase text-sm">{project.name}</h4>

            <img
              src="./images/external-link.png"
              className="w-4"
              alt=""
              srcset=""
            />
          </a>
        )}
        {/* Stack */}
        <div className="flex">
          {project.techStack.map((stack) => (
            <Stack stack={stack} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Stack({ stack }) {
  return (
    <div className="flex px-3 text-xs py-2 mx-0.5 bg-[hsl(240,93%,3%)] text-white ">
      <span>{stack}</span>
    </div>
  );
}

export default Projects;
