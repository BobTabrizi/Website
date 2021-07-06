import React from "react";
import styles from "../styles/Contact.module.css";
import Image from "next/image";
export const Contact = () => {
  return (
    <>
      <div className={styles.contactContainer}>
        <div className="grid grid-cols-2 gap-96">
          <div className={styles.contactHeader} style={{ fontSize: 50 }}>
            CONTACT
            <hr className={styles.underLine} />
          </div>
          <div className={styles.contactButtons}>
            <a href="https://www.linkedin.com/in/bob-tabrizi-57048a183/">
              <Image src="/LinkedIn.png" alt="LinkedIn Link"></Image>
            </a>
            <a
              href="https://github.com/BobTabrizi"
              style={{ marginLeft: 40, marginRight: 40 }}
            >
              <Image src="/Github.png" alt="Github Link"></Image>
            </a>
            <a href="mailto:btabrizi@ucsd.edu">
              <Image src="/Email.png" alt="Email Link"></Image>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
