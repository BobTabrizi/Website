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
          <div className="flex flex-row">
            <div className="flex text-xl font-semibold">
              I'm an apsiring software engineer currently located in San Jose
              CA.
              <br />I have a deep passion for desiging and developing cool new
              things that others can use.
            </div>
            <div className="flex text-lg font-semibold">
              EDUCATION
              <br /> UC San Diego
              <br /> Computer Science and Mathematics
            </div>
          </div>
          RELEVANT SKILLS
        </div>
      </div>
    </>
  );
};
