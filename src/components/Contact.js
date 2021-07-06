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
          <div className={styles.contactButtons}>Placeholder For Icons</div>
        </div>
      </div>
    </>
  );
};
