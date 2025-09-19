import { motion } from "motion/react";
import ProjectCard from "./ProjectCard";
import TechStack from "./TechStack";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      let { data, error } = await supabase.from("projects").select("*");
      if (error) {
        console.error("Error fetching projects:", error);
      }
      console.log(data);
      
      setProjects(data || []);
    };
    fetchProjects();
  }, []);
  return (
    <section className="dark:bg-[hsl(240,93%,3%)]" id="projects">
      <div className="mt-16">
        <div className="flex lg:gap-[20px] justify-end lg:p-[30px] p-[20px]">
          <div className="flex flex-col justify-center items-start gap-[10px] space-y-4">
            <div className="space-y-2">
              <h3 className="font-bold text-2xl dark:text-white uppercase">
                ...Projects
              </h3>
              <div className="bg-blue-400 h-1"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5 lg:gap-8">
              {projects?.map((project) => (
                <ProjectCard
                  id={project?.id}
                  image={project.image}
                  name={project.name}
                  link={project.link}
                  description={project.description}
                  key={project.id}
                  children={project.techStack}
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
