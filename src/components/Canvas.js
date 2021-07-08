import React from "react";
import Link from "next/link";
import styles from "../styles/Canvas.module.css";
import Image from "next/image";
export const Canvas = () => {
  return (
    <>
      <div className={styles.canvasContainer}>
        <div className={styles.headerItem}>
          <div className={styles.headerName}>
            <div style={{ fontSize: 85 }}>
              Bob
              <br /> Tabrizi
              <hr className={styles.underLine} />
            </div>
          </div>
        </div>
        <div className={styles.headerItem}>
          <div className={styles.headerImage}>
            <Image
              src="/bob.png"
              className="object-contain"
              alt="Profile Image"
              height="700px"
              width="600px"
              priority={true}
            />
          </div>
        </div>
        <div className={styles.headerItem}>
          <div className={styles.headerInfo}>
            <div className={styles.headerDescription}>
              Software Engineer,
              <br />
              Based in California
            </div>
            <Link href="/#projects" passHref={true}>
              <button className={styles.buttonLink} style={{ fontSize: 24 }}>
                View My Work
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
