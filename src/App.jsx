import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Lead from './components/sections/Lead';
import SignatureWork from './components/sections/SignatureWork';
import Builder from './components/sections/Builder';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Lead />
        <SignatureWork />
        <Builder />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
