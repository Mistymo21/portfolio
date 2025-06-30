"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/" className={styles.logo}>Yusuf.dev</Link>

        <div className={styles.links}>
          {["/", "/about", "/projects", "/contact"].map((path, index) => {
            const label = path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2);
            return (
              <Link
                key={index}
                href={path}
                className={`${styles.link} ${
                  router.pathname === path ? styles.active : ""
                }`}
              >
                {label}
              </Link>
            );
          })}
          <Link href="/resume" className={styles.resume}>
            Resume
          </Link>
        </div>

        <button onClick={toggleMenu} className={styles.menuButton}>
          <span>☰</span>
        </button>

        {isOpen && (
          <div className={styles.mobileMenu}>
            {["/", "/about", "/projects", "/contact"].map((path, index) => {
              const label = path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2);
              return (
                <Link
                  key={index}
                  href={path}
                  className={styles.link}
                  onClick={closeMenu}
                >
                  {label}
                </Link>
              );
            })}
            <Link href="/resume" className={styles.resume} onClick={closeMenu}>
              Resume
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;