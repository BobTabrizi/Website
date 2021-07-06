import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Canvas from "../components/canvas";
import { NavBar } from "../components/NavBar";
import { About } from "../components/About";
export default function Home() {
  return (
    <>
      <Head>
        <title>Bob Tabrizi</title>
        <meta name="description" content="Bob Tabrizi" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.container}>
        <Canvas />
      </div>
      <NavBar />
      <About />
    </>
  );
}
