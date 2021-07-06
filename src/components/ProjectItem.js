import React from "react";
import styles from "../styles/Projects.module.css";
import Image from "next/image";
export const ProjectItem = ({ props }) => {
  if (props.ID % 2 === 0) {
    return (
      <>
        <div className={styles.projectContainer}>
          <div className="grid grid-cols-2 gap-16 mx-40 mt-24">
            <div className={styles.projectInfoWrapper}>
              <div className={styles.InfoBody}>
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
            <div>
              <Image src={props.Img} alt="Project Image" />
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={styles.projectContainer}>
          <div className="grid grid-cols-2 gap-8 mx-40 mt-24">
            <div>
              <Image src={props.Img} alt="Project Image" />
            </div>
            <div className={styles.projectInfoWrapper}>
              <div className={styles.InfoBody}>
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
