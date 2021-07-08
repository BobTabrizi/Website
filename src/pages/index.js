import Head from "next/head";
import { Canvas } from "../components/Canvas.js";
import { NavBar } from "../components/NavBar.js";
import { MobileNavBar } from "../components/MobileNavBar.js";
import { About } from "../components/About.js";
import { Projects } from "../components/Projects.js";
import { Contact } from "../components/Contact.js";
import React, { useRef, useEffect } from "react";
export default function Home() {
  const AboutRef = useRef(null);
  const ProjectsRef = useRef(null);
  const ContactRef = useRef(null);

  return (
    <>
      <Head>
        <title>Bob Tabrizi</title>
        <meta name="description" content="Bob Tabrizi" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <section id="home">
        <Canvas />
      </section>

      <NavBar
        AboutRef={AboutRef}
        ProjectsRef={ProjectsRef}
        ContactRef={ContactRef}
      />
      <MobileNavBar />

      <section id="about" ref={AboutRef}>
        <About />
      </section>
      <section id="projects" ref={ProjectsRef}>
        <Projects />
      </section>
      <section id="contact" ref={ContactRef}>
        <Contact />
      </section>
    </>
  );
}
