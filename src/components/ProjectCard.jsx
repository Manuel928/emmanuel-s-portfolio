const ProjectCard = ({ image, name, link, description, children }) => {
  return (
    <div className="flex flex-col h-full  justify-center text-center gap-4 pb-6 bg-white rounded-xl dark:bg-blue-100 border border-blue-200 dark:border-[hsl(240,93%,3%)] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
      <img
        src={`./images/${image}`}
        alt={name}
        className="w-full rounded-xl p-2 h-64 object-cover"
      />
      <div className="flex flex-col px-6 space-y-3">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 self-start"
          >
            <h4 className="font-bold lg:text-[20px] uppercase text-sm">
              {name}
            </h4>

            <img
              src="./images/external-link.png"
              className="w-4"
              alt=""
              srcset=""
            />
          </a>
        )}
        <p className="text-justify text-sm tracking-wider">{description}</p>
        {/* Tech Stack */}
        {children}
        {/* End of Tech Stack */}
      </div>
    </div>
  );
};

export default ProjectCard;
