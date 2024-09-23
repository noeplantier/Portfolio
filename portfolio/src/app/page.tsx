"use client"

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { useEffect } from 'react';
import Footer from './components/Footer';

export default function Home() {
  useEffect(() => {
    const headings = document.querySelectorAll('h1');
    headings.forEach((heading) => {
      const textLength = heading.textContent.length;
      heading.style.setProperty('--num-characters', textLength.toString());
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer/>

    </>
  );
}