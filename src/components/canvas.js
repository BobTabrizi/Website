import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Canvas.module.css";
export const Canvas = () => {
  return (
    <>
      <div className={styles.canvasContainer}>
        <div className={styles.headerName}>
          <div style={{ fontSize: 85 }}>
            Bob
            <br /> Tabrizi
            <hr className={styles.underLine} />
          </div>
        </div>
        <div
          style={{
            height: "700px",
            width: "600px",
            bottom: "0px",
            position: "absolute",
            overflow: "hidden",
            justifyContent: "center",
            alignitems: "center",
            left: "35%",
          }}
        >
          <img src="/bob.png" className="object-contain" />
        </div>
        <div className={styles.headerInfo}>
          <div className={styles.headerDescription}>
            Software Engineer,
            <br />
            Based in California
          </div>
          <div className={styles.buttonLink}>View My Work</div>
        </div>
      </div>
    </>
  );
};
