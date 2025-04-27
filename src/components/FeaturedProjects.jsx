import React from "react";

const FeaturedProjects = () => {
  const projects = [
    {
      projectUrl: "https://www.meticsfashion.com",
      name: "Metics Fashion",
      imageUrl: "./images/metics.webp",
    },
    {
      projectUrl: "#",
      name: "DevynTech Insights",
      imageUrl: "./images/emmanuel.jpg",
    },
    {
      projectUrl: "#",
      name: "Misoto Foods",
      imageUrl: "./images/misoto.webp",
    },
  ];
  return (
    <section className="mt-16">
      <div>
        <div className="flex flex-col justify-center items-center space-y-4">
          <h1 className="text-2xl font-semibold">Featured Projects</h1>
          <div className="bg-[rgb(167,98,19)] h-1 w-48"></div>
          <p className="text-sm max-w-xs text-center md:max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            laudantium.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a href={project.projectUrl} key={index}>
                <div
                  className="relative bg-cover bg-center h-72 flex flex-col items-center justify-end w-72 rounded-xl hover:opacity-100 hover:scale-105 duration-500"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(255,255,255,0.5)), url('/${project.imageUrl}')`,
                  }}
                >
                  <h4 className="absolute bottom-3 font-semibold text-lg text-white">
                    {project.name}
                  </h4>
                </div>
              </a>
            ))}
          </div>

          <a
            href="#"
            className="bg-black px-4 py-3 rounded-bl-3xl rounded-tr-3xl text-white hover:bg-white hover:text-black hover:border duration-500"
          >
            View more work
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
