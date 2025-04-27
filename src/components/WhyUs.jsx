import React from "react";

const WhyUs = () => {
  const whyUs = [
    {
      icon: "fa-solid fa-heart",
      name: "Trusted by 50+ clients",
      description:
        "We’ve had the privilege of working with over 50 satisfied clients who trust us to bring their ideas to life with precision and professionalism.",
    },
    {
      icon: "fa fa-clock-o",
      name: "Fast Turnaround Time",
      description:
        "We value your time. Our streamlined workflow ensures quick delivery without compromising quality — always on schedule, every time.",
    },
    {
      icon: "fa fa-handshake-o",
      name: "Creative & Modern Solutions",
      description:
        "From eye-catching designs to innovative digital strategies, we craft solutions that are not just functional — but unforgettable.",
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
          <div className="flex flex-col gap-[10px] space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold">Why Choose Us</h3>
              <div className="bg-[rgb(167,98,19)] h-1 w-32"></div>
            </div>
            <div className="grid md:grid-cols-3 justify-center items-center gap-5 md:gap-8">
              {whyUs.map((content, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-8 gap-4 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="bg-[rgb(167,98,19)] p-3 rounded-full text-white mb-4">
                    <i className={content.icon}></i>
                  </div>
                  <h4 className="font-semibold text-lg text-[rgb(167,98,19)]">
                    {content.name}
                  </h4>
                  <p className="text-sm text-gray-600">{content.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
