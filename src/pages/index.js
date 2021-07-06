import Head from "next/head";
import { Canvas } from "../components/Canvas.js";
import { NavBar } from "../components/NavBar.js";
import { About } from "../components/About.js";
import { Projects } from "../components/Projects.js";
import { Contact } from "../components/Contact.js";
export default function Home() {
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

      <NavBar />

      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
