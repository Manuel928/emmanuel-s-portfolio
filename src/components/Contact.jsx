import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_xyqqrkv", "template_utrbkm9", form.current, {
        publicKey: "cGqmMqjPM9uW1tHRw",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="mt-16" id="contact">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-sm md:max-w-screen-md">
        <h2 className="mb-4 text-2xl dark:text-blue-400 md:text-4xl tracking-tight font-extrabold text-center text-black">
          Contact Me
        </h2>
        <p className="mb-8 lg:mb-16 dark:text-white font-light text-center text-sm md:text-md">
          Got a new project in mind? Send me a message today. Let's get started
        </p>
        <form
          ref={form}
          onSubmit={sendEmail}
          id="contact-form"
          className="space-y-8"
        >
          <div>
            <label
              htmlFor="email"
              className="block dark:text-white mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              name="user_email"
              id="email"
              className="shadow-sm focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="name@email.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block dark:text-white mb-2 text-sm font-medium text-gray-900"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              className="block focus:outline-none p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block dark:text-white mb-2 text-sm font-medium text-gray-900"
            >
              Your message
            </label>
            <textarea
              name="message"
              id="message"
              rows="6"
              className="block focus:outline-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Hi, I would like to get started with..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 dark:bg-blue-400 text-sm font-medium text-center text-white rounded-lg bg-black rounded-bl-3xl rounded-tr-3xl cursor-pointer hover:bg-white hover:text-black hover:border duration-500 focus:ring-4 focus:outline-none"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;