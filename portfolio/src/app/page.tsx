"use client"

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'; 
import Loader from './components/Loader'; 
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const MapWithMarkers = dynamic(() => import('./components/MapWithMarkers'), { ssr: false });

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
      const textContent = heading.textContent || '';
      heading.style.setProperty('--num-characters', textContent.length.toString());
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
      <MapWithMarkers />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
