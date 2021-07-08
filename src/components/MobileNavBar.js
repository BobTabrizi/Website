import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/NavBar.module.css";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
export const MobileNavBar = (props) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  return (
    <>
      <header className="sticky top-0 z-50">
        <div className={styles.mobileNavContainer}>
          <nav className="mobileNavBar">
            <button onClick={handleToggle} className={styles.mobileNavButton}>
              {navbarOpen ? (
                <MdClose
                  style={{ color: "#fff", width: "40px", height: "40px" }}
                />
              ) : (
                <FiMenu
                  style={{ color: "#7b7b7b", width: "40px", height: "40px" }}
                />
              )}
            </button>
            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
              <Link href="/#home">
                <li>
                  <a style={{ cursor: "pointer" }} onClick={handleToggle}>
                    HOME
                  </a>
                </li>
              </Link>
              <Link href="/#about">
                <li>
                  <a style={{ cursor: "pointer" }} onClick={handleToggle}>
                    ABOUT
                  </a>
                </li>
              </Link>

              <Link href="/#projects">
                <li>
                  <a style={{ cursor: "pointer" }} onClick={handleToggle}>
                    PROJECTS
                  </a>
                </li>
              </Link>

              <Link href="/#contact">
                <li>
                  <a style={{ cursor: "pointer" }} onClick={handleToggle}>
                    CONTACT
                  </a>
                </li>
              </Link>

              <li>
                <a
                  href="/Bob-Tabrizi-Resume.pdf"
                  download
                  onClick={handleToggle}
                >
                  RESUME
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
