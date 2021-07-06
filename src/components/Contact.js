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
              <Image
                src="/LinkedIn.png"
                height="60px"
                width="60px"
                alt="LinkedIn Link"
                priority={true}
              ></Image>
            </a>
            <a
              href="https://github.com/BobTabrizi"
              style={{ marginLeft: 40, marginRight: 40 }}
            >
              <Image
                src="/Github.png"
                height="60px"
                width="60px"
                alt="Github Link"
                priority={true}
              ></Image>
            </a>
            <a href="mailto:btabrizi@ucsd.edu">
              <Image
                src="/Email.png"
                height="60px"
                width="60px"
                alt="Email Link"
                priority={true}
              ></Image>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
