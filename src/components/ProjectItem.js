import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Projects.module.css";
export const ProjectItem = ({ props }) => {
  console.log(props);
  if (props.ID % 2 === 0) {
    return (
      <>
        <div className={styles.projectContainer}>
          <div class="grid grid-cols-2 gap-16 mx-40 mt-24">
            <div className={styles.projectInfoWrapper}>
              <div className={styles.InfoBody}>
                <div className={styles.projectInfoHeader}>{props.Name}</div>
                <div className={styles.projectInfoTech}>{props.Tech}</div>
              </div>
            </div>
            <div>
              <img src={props.Img} />
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={styles.projectContainer}>
          <div class="grid grid-cols-2 gap-8 mx-40 mt-24">
            <div>
              <img src={props.Img} />
            </div>
            <div className={styles.projectInfoWrapper}>
              <div className={styles.InfoBody}>
                <div className={styles.projectInfoHeader}>{props.Name}</div>
                <div className={styles.projectInfoTech}>{props.Tech}</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};
