
import Image from "next/image";
import React from "react";
import logo from "@/src/assets/book.ico";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="navbar mx-auto min-h-[76px] max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Logo + Mobile Menu */}
        <div className="navbar-start">

          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle mr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu dropdown-content z-[1] mt-3 w-56 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl"
            >
              <li>
                <Link href="/books" className="rounded-xl font-medium">Books</Link>
              </li>

              <li>
                <details>
                  <summary className="rounded-xl font-medium">
                    Listed Books
                  </summary>

                  <ul className="mt-1 border-l border-slate-200 pl-3">
                    <li>
                      <a>All Books</a>
                    </li>
                    <li>
                      <a>Popular Books</a>
                    </li>
                    <li>
                      <a>New Releases</a>
                    </li>
                  </ul>
                </details>
              </li>

              <li>
                <a className="rounded-xl font-medium">Pages to Read</a>
              </li>
            </ul>
          </div>

          {/* Logo */}
          
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50">
              <Image
                src={logo}
                alt="Book Vibe"
                width={28}
                height={28}
                className="object-contain"
              />
            </div>
           <Link href="/" alt="Homepage" >
            <span className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              Book<span className="text-orange-500">Vibe</span>
            </span>
            </Link>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal items-center gap-2 px-1">

            <li>
              <Link href="/books" className="rounded-xl font-medium text-slate-700 transition hover:bg-orange-50 hover:text-orange-500">
               Books
              </Link>
            </li>

            <li>
              <details>
                <summary className="rounded-xl font-medium text-slate-700 hover:bg-orange-50 hover:text-orange-500">
                  Listed Books
                </summary>

                <ul className="mt-3 w-48 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                  <li>
                    <a className="rounded-xl">All Books</a>
                  </li>
                  <li>
                    <a className="rounded-xl">Popular Books</a>
                  </li>
                  <li>
                    <a className="rounded-xl">New Releases</a>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <a className="rounded-xl font-medium text-slate-700 transition hover:bg-orange-50 hover:text-orange-500">
                Pages to Read
              </a>
            </li>

          </ul>
        </div>

        {/* Auth Buttons */}
        <div className="navbar-end gap-2">

          <button className="hidden rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 sm:flex">
            Log in
          </button>

          <button className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-500/20">
            Sign Up
          </button>

        </div>

      </div>
    </header>
    </nav>
  );
};

export default Navbar;

