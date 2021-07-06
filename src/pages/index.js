import Head from "next/head";
import { Canvas } from "../components/Canvas.js";
import { NavBar } from "../components/NavBar.js";
import { About } from "../components/About.js";
import { Projects } from "../components/Projects.js";
import { Contact } from "../components/Contact.js";
export default function Home() {
  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();
  const section4Ref = useRef();

  const navHeader = [
    {
      headerTitle: "Section 1",
      headerRef: section1Ref,
      headerID: "section1",
    },
    {
      headerTitle: "Section 2",
      headerRef: section2Ref,
      headerID: "section2",
    },
    {
      headerTitle: "Section 3",
      headerRef: section3Ref,
      headerID: "section3",
    },
    {
      headerTitle: "Section 4",
      headerRef: section4Ref,
      headerID: "section4",
    },
  ];

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

      <section id="home" ref={section1Ref}>
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
