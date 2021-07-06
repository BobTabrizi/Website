import React, { useState, useEffect } from "react";
import styles from "../styles/Contact.module.css";
import Link from "next/link";
export const Contact = () => {
  return (
    <>
      <div className={styles.contactContainer}>
        <div class="grid grid-cols-2 gap-96 ">
          <div className={styles.contactHeader} style={{ fontSize: 50 }}>
            CONTACT
            <hr className={styles.underLine} />
          </div>
          <div className={styles.contactButtons}>
            <a href="https://www.linkedin.com/in/bob-tabrizi-57048a183/">
              <img src="/LinkedIn.png"></img>
            </a>
            <a
              href="https://github.com/BobTabrizi"
              style={{ marginLeft: 40, marginRight: 40 }}
            >
              <img src="/Github.png"></img>
            </a>
            <a href="mailto:btabrizi@ucsd.edu">
              <img src="/Email.png"></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
