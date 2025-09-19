import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ id, image, name, description, children }) => {
  const navigate = useNavigate();
  return (
    <div
      // transition={{ duration: 1.5 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // viewport={{ once: true }}
      className="flex flex-col cursor-pointer h-full justify-center text-center gap-4 pb-6 bg-white rounded-xl dark:bg-blue-100 shadow-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
    >
      <img
        onClick={() => navigate(`/project/${id}`)}
        src={`/images/${image}`}
        alt={name}
        className="w-full rounded-xl p-2 h-64 object-cover"
      />
      <h4
        onClick={() => navigate(`/project/${id}`)}
        className="font-bold lg:text-[20px] px-6 text-justify uppercase text-sm"
      >
        {name}
      </h4>
      <div className="flex flex-col px-6 space-y-3">
        <p className="text-justify text-sm tracking-wide">{description}</p>
        {/* Tech Stack */}
        {children}
        {/* End of Tech Stack */}
      </div>
    </div>
  );
};

export default ProjectCard;
