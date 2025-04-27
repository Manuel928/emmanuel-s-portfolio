import React from "react";

const OurProcess = () => {
  const ourProcess = [
    {
      step: "01",
      name: "DISCOVERY & RESEARCH",
      process:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In,quis? Cupiditate nostrum labore doloremque officiis hic velit fugit architecto ratione.",
    },
    {
      step: "02",
      name: "PLANNING",
      process:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In,quis? Cupiditate nostrum labore doloremque officiis hic velit fugit architecto ratione.",
    },
    {
      step: "03",
      name: "DESIGN & DEVELOPMENT",
      process:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In,quis? Cupiditate nostrum labore doloremque officiis hic velit fugit architecto ratione.",
    },
    {
      step: "04",
      name: "LAUNCH & DELIVERY",
      process:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In,quis? Cupiditate nostrum labore doloremque officiis hic velit fugit architecto ratione.",
    },
  ];
  return (
    <section id="process" className="mt-16">
      <div className="p-[40px]">
        <div className="flex flex-col md:flex-row gap-[30px]">
          <div className="flex flex-col space-y-2">
            <h1 className="font-semibold text-md md:text-xl">Our Process</h1>
            <div className="bg-[rgb(167,98,19)] h-1 w-32"></div>
            <p className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At hic
              dolorum quod vel molestiae magnam! Fuga ipsa aut in, eum dolorum
              placeat. Itaque nam omnis sint modi! Cupiditate, dolore ex.
            </p>
            <div className="mt-4">
              <iframe
                className="w-full h-72 md:h-96"
                src="https://www.youtube.com/embed/_iwW5PQcdGw?si=QGefRhjh_NNkbp8s"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col gap-[30px]">
            {ourProcess.map((process, index) => (
              <div key={index} className="space-y-2">
                <h5 className="font-semibold">{process.step}</h5>
                <h4 className="text-[rgb(167,98,19)] font-semibold">
                  {process.name}
                </h4>
                <p className="text-sm">{process.process}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
