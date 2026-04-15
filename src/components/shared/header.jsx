"use client";

import React, { useState } from "react";
import Logo from "./logo";
import Link from "next/link";
import { links } from "@/constants";
import { usePathname } from "next/navigation";

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-primary text-secondary">
      <div className="navbar shadow-sm">
        <div className="navbar-start">
          <Logo />
        </div>

        <div className="navbar-end lg:hidden">
          <button onClick={() => setOpen(!open)} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {links.map((link) => {
              const isActive = pathname === link.path;

              return (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={`text-sm uppercase hover:bg-secondary/10 rounded-sm transition-colors font-medium ${
                      isActive
                        ? "text-accent"
                        : "text-secondary/60 hover:text-secondary"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-primary border-t border-secondary/10 px-4 py-3 space-y-3">
          {links.map((link) => {
            const isActive = pathname === link.path;

            return (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setOpen(false)}
                className={`block uppercase transition-colors font-medium ${
                  isActive
                    ? "text-accent"
                    : "text-secondary/70 hover:text-secondary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
