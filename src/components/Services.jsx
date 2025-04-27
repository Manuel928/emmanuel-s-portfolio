import React from "react";

const Services = () => {
  const services = [
    {
      icon: "fa-solid fa-globe",
      name: "Web Development",
      description:
        "We build responsive, fast, and user-friendly websites tailored to your business goals — from landing pages to full-fledged platforms.",
    },
    {
      icon: "fa-solid fa-rocket",
      name: "Mobile App Development",
      description:
        "Whether it’s Android, iOS, or cross-platform, we develop sleek, functional mobile apps that keep your users engaged and coming back.",
    },
    {
      icon: "fa-solid fa-briefcase",
      name: "Branding Solutions",
      description:
        "We help you stand out with unique brand identities — from logos and color palettes to full brand strategy and voice development.",
    },
    {
      icon: "fa-solid fa-shopping-cart",
      name: "Marketing",
      description:
        "Boost your brand visibility with creative digital marketing strategies that convert — including social media, email, and content marketing.",
    },
    {
      icon: "fa-solid fa-cloud-upload",
      name: "SEO",
      description:
        "Get found on Google. We optimize your site with SEO best practices to drive traffic and improve your search rankings organically.",
    },
    {
      icon: "fa-solid fa-home",
      name: "Real Estate Consultancy",
      description:
        "We offer expert guidance on property investment, buying, and selling — helping you make smart decisions in the real estate market.",
    },
  ];

  return (
    <section className="mt-16 animate-fadeIn">
      <div>
        <div className="flex md:gap-[20px] md:p-[30px] p-[20px]">
          <div>
            <h1
              className="hidden md:block uppercase tracking-[0.8rem] font-semibold"
              style={{ writingMode: "vertical-rl" }}
            >
              Our Services
            </h1>
          </div>

          <div className="flex flex-col gap-[10px] space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold">What We Offer</h3>
              <div className="bg-[rgb(167,98,19)] h-1 w-32"></div>
            </div>

            <div className="grid md:grid-cols-3 justify-center items-center gap-5 md:gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col w-full p-[40px] gap-[10px] bg-[rgb(247,245,243)] rounded-lg shadow-md hover:-translate-y-1 hover:shadow-lg duration-500"
                >
                  <div>
                    <i
                      className={`bg-white p-3 rounded-full flex justify-center items-center ${service.icon}`}
                    ></i>
                  </div>
                  <h4 className="font-semibold text-[rgb(167,98,19)]">
                    {service.name}
                  </h4>
                  <p className="text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
