import React, { useRef, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/NavBar.module.css";
export const NavBar = (props) => {
  useEffect(() => {
    let observer;

    if (
      props.AboutRef.current &&
      props.ProjectsRef.current &&
      props.ContactRef.current
    ) {
      const options = {
        threshold: 0.2,
      };
      observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          const navElement = document.querySelector(
            `a[href="/#${entry.target.id}"]`
          );
          if (
            entry.isIntersecting &&
            !navElement.classList.contains("active")
          ) {
            navElement.classList.add("active");
          } else if (
            !entry.isIntersecting &&
            navElement.classList.contains("active")
          ) {
            navElement.classList.remove("active");
          }
        });
      }, options);

      observer.observe(props.AboutRef.current);
      observer.observe(props.ProjectsRef.current);
      observer.observe(props.ContactRef.current);
    }
    return () => observer.disconnect();
  }, [props.AboutRef, props.ProjectsRef, props.ContactRef]);

  return (
    <>
      <header className="sticky top-0 z-50">
        <nav
          className="flex items-center flex-wrap bg-navyBlack p-0.5"
          style={{ borderBottom: "solid black 3px" }}
        >
          <li className={styles.listing}>
            <Link href="/#home">
              <a
                className={
                  " text-xl text-white active:text-blue-300 font-bold uppercase tracking-wide  hover:text-specialBlue p-2 ml-36 mr-4 "
                }
              >
                HOME
              </a>
            </Link>
          </li>

          <li className={styles.listing}>
            <Link href="/#about">
              <a className=" active:text-blue-300 p-2 mr-4">
                <span className="text-xl  font-bold uppercase  tracking-wide ">
                  ABOUT
                </span>
              </a>
            </Link>
          </li>

          <li className={styles.listing}>
            <Link href="/#projects">
              <a className=" active:text-blue-300 p-2 mr-4  ">
                <span className="text-xl  font-bold uppercase  tracking-wide ">
                  PROJECTS
                </span>
              </a>
            </Link>
          </li>

          <li className={styles.listing}>
            <Link href="/#contact">
              <a className="active:text-blue-300 p-2 mr-4 ">
                <span className="text-xl  font-bold uppercase tracking-wide ">
                  CONTACT
                </span>
              </a>
            </Link>
          </li>

          <li className={styles.listing}>
            <a className=" p-2 mr-4" href="/Bob-Tabrizi-Resume.pdf" download>
              <span className="text-xl font-bold uppercase tracking-wide">
                RESUME
              </span>
            </a>
          </li>
        </nav>
      </header>
    </>
  );
};
