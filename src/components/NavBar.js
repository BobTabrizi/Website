import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Canvas.module.css";
export const NavBar = () => {
  return (
    <>
      <nav
        className="flex items-center flex-wrap bg-navyBlack p-0.5"
        style={{ borderBottom: "solid black 3px" }}
      >
        <Link href="/">
          <a className="inline-flex items-center p-2 ml-36 mr-4">
            <span className="text-xl text-white font-bold uppercase tracking-wide">
              HOME
            </span>
          </a>
        </Link>
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
            <span className="text-xl text-white font-bold uppercase tracking-wide">
              ABOUT
            </span>
          </a>
        </Link>
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
            <span className="text-xl text-white font-bold uppercase tracking-wide">
              PROJECTS
            </span>
          </a>
        </Link>
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
            <span className="text-xl text-white font-bold uppercase tracking-wide">
              CONTACT
            </span>
          </a>
        </Link>
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
            <span className="text-xl text-white font-bold uppercase tracking-wide">
              RESUME
            </span>
          </a>
        </Link>
      </nav>
    </>
  );
};
