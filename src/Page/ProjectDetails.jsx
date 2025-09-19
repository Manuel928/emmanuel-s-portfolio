import { useParams } from "react-router-dom";
import { projectsList } from "../data/projectsData";
import ProjectDetailsCard from "../components/ProjectDetailsCard";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getProjectById = async () => {
      const { data, error, status } = await supabase
        .from("projects")
        .select("*")
        .eq("id", id);
      if (error) {
        console.log(error);
      }
      
      else {
        setProject(data);
      }
      setLoading(false)
    };

    getProjectById();
  }, [id]);

  if (loading) return <div className="text-center text-5xl">Loading...</div>;
  if (!project || project.length === 0) {
    return <div className="text-white">Project not found</div>;
  }
  return (
    <div className="px-6 md:px-8 lg:px-20 pt-6">
      {project.map((p, index) => (
        <ProjectDetailsCard
          key={index}
          image={p.image}
          name={p.name}
          link={p.link}
          description={p.description}
          children={p.techStack}
        />
      ))}
    </div>
  );
};

export default ProjectDetails;
