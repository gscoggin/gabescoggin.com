import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SectionDivider from './components/ui/SectionDivider';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import FeaturedWork from './components/sections/FeaturedWork';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Experience />
        <FeaturedWork />
        <SectionDivider />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
