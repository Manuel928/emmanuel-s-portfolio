import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import AnyQuestions from "../components/AnyQuestions";
import Contact from "../components/Contact";
import Experience from "../components/Experience";

const Home = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <AnyQuestions />
      <Contact />
    </>
  );
};

export default Home;
