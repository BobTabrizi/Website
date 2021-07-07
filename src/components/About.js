import React from "react";
import styles from "../styles/About.module.css";
export const About = () => {
  return (
    <>
      <div className={styles.aboutContainer}>
        <div className="bg-navyBlack">
          <div className="flex flex-col flex-wrap  text-white mx-40">
            <div className={styles.aboutHeader} style={{ fontSize: 40 }}>
              ABOUT
              <hr className={styles.underLine} />
            </div>
            <div className={styles.aboutBody}>
              <div className={styles.aboutBio} style={{ fontSize: 20 }}>
                I&apos;m an apsiring software engineer currently located in San
                Jose CA.
                <br />I have a deep passion for desiging and developing cool new
                things that others can use.
              </div>
              <div className={styles.aboutEducation}>
                <div style={{ color: "#6596cf" }}>EDUCATION</div>
                UC San Diego
                <br /> Computer Science and Mathematics
              </div>
            </div>
            <div
              style={{
                color: "#6596cf",
                fontFamily: "Open Sans",
                marginTop: "5%",
              }}
            >
              RELEVANT SKILLS
            </div>

  
            <div className="items-center text-center mt-5">
              <div className="grid grid-cols-3 gap-8 mb-48 mt-10">
                <div className={styles.card}>
                  <div className={styles.cardHeader} style={{ fontSize: 20 }}>
                    FRONT END
                  </div>
                  <div className={styles.cardBody}>
                    <div style={{ marginTop: "5%" }}>JavaScript</div>
                    <div>React Native / ReactJS / NextJS</div>
                    <div>HTML / CSS</div>
                    <div>Angular</div>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardHeader} style={{ fontSize: 20 }}>
                    BACK END
                  </div>
                  <div className={styles.cardBody}>
                    <div style={{ marginTop: "5%" }}>C++</div>
                    <div>Java</div>
                    <div>Python</div>
                    <div>mySQL / noSQL</div>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardHeader} style={{ fontSize: 20 }}>
                    TOOLS
                  </div>
                  <div className={styles.cardBody}>
                    <div style={{ marginTop: "5%" }}>Git</div>
                    <div>Docker</div>
                    <div>MongoDB</div>
                    <div>AWS S3 / Lambda</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
