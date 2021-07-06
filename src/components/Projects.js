import React from "react";
import styles from "../styles/Projects.module.css";
import ProjectData from "../../Projects.json";
import { ProjectItem } from "../components/ProjectItem";
export const Projects = () => {
  return (
    <>
      <div className={styles.projectContainer}>
        <div className="mx-40">
          <div className={styles.projectHeader} style={{ fontSize: 40 }}>
            PROJECTS
            <hr className={styles.underLine} />
          </div>
        </div>

        {ProjectData.map((Project) => (
          <ProjectItem props={Project} key={Project.ID}></ProjectItem>
        ))}
      </div>
    </>
  );
};
