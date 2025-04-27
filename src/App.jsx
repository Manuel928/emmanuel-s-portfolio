import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import OurProcess from "./components/OurProcess";
import AnyQuestions from "./components/AnyQuestions";
import FeaturedProjects from "./components/FeaturedProjects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <OurProcess />
      <AnyQuestions />
      <FeaturedProjects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
