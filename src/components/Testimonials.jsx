import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestias rerum tenetur nostrum numquam quia esse officiis eum facere cum commodi architecto officia, ab doloremque?",
      image: "./images/emmanuel.jpg",
      name: "Elon Musk",
      title: "CEO. X",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestias rerum tenetur nostrum numquam quia esse officiis eum facere cum commodi architecto officia, ab doloremque?",
      image: "./images/emmanuel.jpg",
      name: "Elon Musk",
      title: "CEO. X",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestias rerum tenetur nostrum numquam quia esse officiis eum facere cum commodi architecto officia, ab doloremque?",
      image: "./images/emmanuel.jpg",
      name: "Elon Musk",
      title: "CEO. X",
    },
  ];

  return (
    <section className="mt-16">
      <div className="flex flex-col justify-center items-center space-y-8">
        <div className="flex flex-col items-center space-y-2">
          <h2 className="text-2xl font-semibold">Testimonials</h2>
          <div className="bg-[rgb(167,98,19)] h-1 w-32"></div>
          <p className="text-sm max-w-xs text-center md:max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
            deserunt!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-0">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative px-10 py-10 flex flex-col justify-center items-start space-y-6 bg-[rgb(245,239,232)] mx-4 rounded-lg shadow-md"
            >
              <q>
                <i className="text-sm">{testimonial.quote}</i>
              </q>
              <div className="absolute flex items-center gap-2 bottom-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-9 rounded-full"
                />
                <div className="flex flex-col">
                  <h5 className="font-semibold text-xs">{testimonial.name}</h5>
                  <p className="text-xs">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
