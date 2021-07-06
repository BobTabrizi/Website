import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/About.module.css";
export const About = () => {
  return (
    <>
      <div className="bg-navyBlack">
        <div className="flex flex-col flex-wrap  text-white mx-40">
          <div className={styles.aboutHeader} style={{ fontSize: 40 }}>
            ABOUT
            <hr className={styles.underLine} />
          </div>
          <div className={styles.aboutBody}>
            <div className={styles.aboutBio} style={{ fontSize: 20 }}>
              I'm an apsiring software engineer currently located in San Jose
              CA.
              <br />I have a deep passion for desiging and developing cool new
              things that others can use.
            </div>
            <div className={styles.aboutEducation}>
              <div style={{ color: "#6596cf" }}>EDUCATION</div>
              UC San Diego
              <br /> Computer Science and Mathematics
            </div>
          </div>
          <div style={{ color: "#6596cf", fontFamily: "Open Sans" }}>
            RELEVANT SKILLS
          </div>

          <div class="items-center text-center mt-5">
            <div class="grid grid-cols-3 gap-8 mb-48">
              <div className={styles.card}>
                <div className={styles.cardHeader}>FRONT END</div>
                <div>JavaScript</div>
                <div>React Native / ReactJS / NextJS</div>
                <div>HTML / CSS</div>
                <div>Angular</div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardHeader}>BACK END</div>
                <div>C++</div>
                <div>Java</div>
                <div>Python</div>
                <div>mySQL / noSQL</div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardHeader}>TOOLS</div>
                <div>Git</div>
                <div>Docker</div>
                <div>MongoDB</div>
                <div>AWS S3 / Lambda</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
