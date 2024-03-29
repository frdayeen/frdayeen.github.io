import React from "react";
import Link from "next/link";


const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div className="w-full h-20 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            {/* <Logo /> */}
            <h1>Fazle Rabbi Dayeen</h1>
            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>
            {/* <ul className="hidden md:flex gap-x-6 ">
              <li>
                <Link href="/about">
                  <p>About</p>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <p>Curriculum Vitae</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>Blogs</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>Contact</p>
                </Link>
              </li>
            </ul> */}
            <div className="hidden md:block">
            <ul className="hidden md:flex gap-x-6 ">
              <li>
                <Link href="/about">
                  <p>About</p>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <p>Curriculum Vitae</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>Articles</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>My Journey(Bangla)</p>
                </Link>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;