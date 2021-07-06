import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Canvas.module.css";
export const NavBar = () => {
  return (
    <>
      <header class="sticky top-0 z-50">
        <nav
          className="flex items-center flex-wrap bg-navyBlack p-0.5"
          style={{ borderBottom: "solid black 3px" }}
        >
          <Link href="/#home">
            <a className="inline-flex items-center p-2 ml-36 mr-4 ">
              <span className="text-xl text-white font-bold uppercase tracking-wide active:text-specialBlue hover:text-specialBlue">
                HOME
              </span>
            </a>
          </Link>
          <Link href="/#about">
            <a className="inline-flex items-center p-2 mr-4 ">
              <span className="text-xl text-white font-bold uppercase tracking-wide active:text-specialBlue hover:text-specialBlue">
                ABOUT
              </span>
            </a>
          </Link>
          <Link href="/#projects">
            <a className="inline-flex items-center p-2 mr-4 ">
              <span className="text-xl text-white font-bold uppercase tracking-wide hover:text-specialBlue">
                PROJECTS
              </span>
            </a>
          </Link>
          <Link href="/">
            <a className="inline-flex items-center p-2 mr-4 ">
              <span className="text-xl text-white font-bold uppercase tracking-wide hover:text-specialBlue">
                CONTACT
              </span>
            </a>
          </Link>
          <Link href="/">
            <a className="inline-flex items-center p-2 mr-4 ">
              <span className="text-xl text-white font-bold uppercase tracking-wide hover:text-specialBlue">
                RESUME
              </span>
            </a>
          </Link>
        </nav>
      </header>
    </>
  );
};
