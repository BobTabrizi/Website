import React from "react";
import Link from "next/link";
export const NavBar = () => {
  return (
    <>
      <header className="sticky top-0 z-50">
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
          <Link href="/#contact">
            <a className="inline-flex items-center p-2 mr-4 ">
              <span className="text-xl text-white font-bold uppercase tracking-wide hover:text-specialBlue">
                CONTACT
              </span>
            </a>
          </Link>
          <a
            className="inline-flex items-center p-2 mr-4"
            href="/Bob-Tabrizi-Resume.pdf"
            download
          >
            <span className="text-xl text-white font-bold uppercase tracking-wide hover:text-specialBlue">
              RESUME
            </span>
          </a>
        </nav>
      </header>
    </>
  );
};
