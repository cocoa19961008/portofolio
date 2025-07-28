import { useState, useEffect } from 'react';
import './App.css';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Loader from './components/Loader';
import Footer from './components/Footer';
import ScrollTopButton from './components/ScrollTopButton';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
      <ScrollTopButton />
    </>
  );
}

export default App;