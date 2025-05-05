import React from "react";

const Projects = () => {
  const projectsList = [
    {
      image: "emmanuel.jpg",
      name: "Fiids Apparel",
      link: "https://fiids.com",
    },
    {
      image: "metics.webp",
      name: "Fast Turnaround Time",
      link: "https://metics.io",
    },
    {
      image: "cloth.avif",
      name: "Creative & Modern Solutions",
      link: "https://modern.solutions",
    },
  ];

  return (
    <section>
      <div className="mt-16">
        <div className="flex md:gap-[20px] md:p-[30px] p-[20px]">
          <div className="left-heading">
            <h1
              className="hidden md:block uppercase tracking-[0.8rem] font-semibold"
              style={{ writingMode: "vertical-lr" }}
            >
              Why Us
            </h1>
          </div>
          <div className="flex flex-col justify-center items-end gap-[10px] space-y-4">
            <div className="space-y-2">
              <h3 className="font-bold text-2xl uppercase">...Projects</h3>
              <div className="bg-blue-400 h-1 w-40"></div>
            </div>
            <div className="grid md:grid-cols-3 justify-center items-center gap-5 md:gap-8">
              {projectsList.map((project) => (
                <ProjectCard project={project} key={project.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function ProjectCard({ project }) {
  return (
    <div className="flex flex-col h-full justify-center text-center gap-4 pb-6 bg-white border border-blue-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
      <img
        src={`./images/${project.image}`}
        alt={project.name}
        className="w-full h-64 object-cover"
      />
      <div className="px-6 space-y-3">
        <div className="flex items-center gap-3 self-start">
          <h4 className="font-semibold uppercase text-sm">{project.name}</h4>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Live Link
            </a>
          )}
        </div>

        <div className="flex flex-wrap gap-2 self-start">
          <div className="px-3 py-1.5 text-sm rounded-lg border">React</div>
          <div className="px-3 py-1.5 text-sm rounded-lg border">Tailwind</div>
          <div className="px-3 py-1.5 text-sm rounded-lg border">AOS</div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
