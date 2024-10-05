"use client"

import { useState, useEffect } from 'react';
import Loader from './components/Loader'; 
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MapWithMarkers from './components/MapWithMarkers';
import PersonalInfo from './components/PersonalInfo';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const headings = document.querySelectorAll('h1');
    headings.forEach((heading) => {
      const textContent = heading.textContent || ''; // Vérifie si le texte existe, sinon valeur par défaut vide
      const textLength = textContent.length;
      heading.style.setProperty('--num-characters', textLength.toString());
    });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <PersonalInfo />
      <MapWithMarkers />
      <Contact />
      <Footer />
    </>
  );
}
