import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials.js";
import Header from "./components/Header";
import Footer from "./components/Foot";


export default function App() {
  return (

    <main className="text-gray-400 bg-gray-900 body-font">
      <Header />
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </main>

  );
}

