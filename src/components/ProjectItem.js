import React from "react";
import styles from "../styles/Projects.module.css";
import Image from "next/image";
export const ProjectItem = ({ props }) => {
  let devComponent = null;
  if (props.CurrentDev) {
    devComponent = <div className={styles.devTag}>In Development</div>;
  }
  if (props.ID % 2 === 0) {
    return (
      <>
        <div className={styles.projectContainer}>
          <div className={styles.projectItem}>
            <div className={styles.projectInfoWrapper}>
              <div className={styles.InfoBody}>
                {devComponent}
                <div
                  className={styles.projectInfoHeader}
                  style={{ fontSize: 50 }}
                >
                  {props.Name}
                </div>
                <div
                  className={styles.projectInfoTech}
                  style={{ fontSize: 25, color: "gray" }}
                >
                  {props.Tech}
                </div>
                <a className={styles.projectLinks} href={props.Link}>
                  View Project &rarr;
                </a>
              </div>
            </div>
            <div className={styles.projectImage}>
              <Image
                src={props.Img}
                height="350px"
                width="500px"
                alt="Project Image"
                priority={true}
              />
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={styles.projectContainer}>
          <div className={styles.projectItem}>
            <div className={styles.projectImage}>
              <Image
                src={props.Img}
                height="350px"
                width="500px"
                alt="Project Image"
                priority={true}
              />
            </div>
            <div className={styles.projectInfoWrapper}>
              <div className={styles.InfoBody}>
                {devComponent}
                <div
                  className={styles.projectInfoHeader}
                  style={{ fontSize: 50 }}
                >
                  {props.Name}
                </div>
                <div
                  className={styles.projectInfoTech}
                  style={{ fontSize: 25, color: "gray" }}
                >
                  {props.Tech}
                </div>
                <a className={styles.projectLinks} href={props.Link}>
                  View Project &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};
