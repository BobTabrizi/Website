import React from "react";
import styles from "../styles/About.module.css";
export const About = () => {
  return (
    <>
      <div className={styles.aboutContainer}>
        <div className="bg-navyBlack">
          <div className="flex flex-col flex-wrap  text-white mx-12">
            <div className={styles.aboutHeader} style={{ fontSize: 40 }}>
              ABOUT
              <hr className={styles.underLine} />
            </div>
            <div className={styles.aboutBody}>
              <div className={styles.aboutBio} style={{ fontSize: 20 }}>
                I&apos;m a software engineer living in San Diego, California
                <br />I love desiging and developing cool new things that others
                can use.
              </div>
              <div className={styles.aboutEducation}>
                <div style={{ color: "#6596cf" }}>EDUCATION</div>
                UC San Diego
                <br /> Computer Science and Mathematics
              </div>
            </div>
          </div>
          <div className={styles.skillHeader}>RELEVANT SKILLS</div>

          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <div className={styles.cardHeader} style={{ fontSize: 20 }}>
                FRONT END
              </div>
              <div className={styles.cardBody}>
                <ul className={styles.cardList}>
                  <li>JavaScript</li>
                  <li>React Native / ReactJS / NextJS</li>
                  <li>HTML / CSS</li>
                  <li>Angular</li>
                </ul>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardHeader} style={{ fontSize: 20 }}>
                BACK END
              </div>
              <div className={styles.cardBody}>
                <ul className={styles.cardList}>
                  <li>C++</li>
                  <li>Java</li>
                  <li>Python</li>
                  <li>mySQL / noSQL</li>
                </ul>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardHeader} style={{ fontSize: 20 }}>
                TOOLS
              </div>
              <div className={styles.cardBody}>
                <ul className={styles.cardList}>
                  <li>Git</li>
                  <li>Docker</li>
                  <li>MongoDB</li>
                  <li>AWS S3 / Lambda</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
