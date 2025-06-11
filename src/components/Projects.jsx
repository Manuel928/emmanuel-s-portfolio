import ProjectCard from "./ProjectCard";
import TechStack from "./TechStack";

function Projects() {
  const projectsList = [
    {
      image: "metroloft.png",
      name: "MetroLoft",
      description:
        "MetroLoft is a modern real estate website that helps you discover stylish urban homes, and apartments.",
      link: "https://metro-loft.vercel.app/",
      techStack: ["React", "Tailwind", "Framer Motion"],
    },
    {
      image: "solus-w.png",
      name: "Solus",
      description:
        "Solus is a web application designed to support your mental and emotional well-being.",
      link: "https://solus-tawny.vercel.app/",
      techStack: ["React", "Tailwind", "AOS"],
    },
    {
      image: "cloth.avif",
      name: "Metics Fashion",
      description:
        "Metics Fashion is a modern e-commerce web application designed for seamless online shopping experience.",
      link: "https://meticsfashion.com",
      techStack: ["Wordpress"],
    },
  ];

  return (
    <section className="dark:bg-[hsl(240,93%,3%)]" id="projects">
      <div className="mt-16">
        <div className="flex lg:gap-[20px] justify-end lg:p-[30px] p-[20px]">
          <div className="flex flex-col justify-center items-end gap-[10px] space-y-4">
            <div className="space-y-2">
              <h3 className="font-bold text-2xl dark:text-white uppercase">
                Projects
              </h3>
              <div className="bg-blue-400 h-1"></div>
            </div>
            <div className="grid lg:grid-cols-3 justify-center items-center gap-5 lg:gap-8">
              {projectsList.map((project) => (
                <ProjectCard
                  image={project.image}
                  name={project.name}
                  link={project.link}
                  description={project.description}
                  key={project.name}
                >
                  <div className="flex gap-5 px-3 text-xs py-2 mx-0.5 bg-[hsl(240,93%,3%)] text-white w-fit ">
                    {project.techStack.map((stack) => (
                      <TechStack key={stack} stack={stack} />
                    ))}
                  </div>
                </ProjectCard>
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
}
export default Projects;
