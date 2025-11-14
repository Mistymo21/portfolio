"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <nav className={`${styles.container} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.wrapper}>
        <Link href="/" className={`${styles.logo} gradient-text`}>
          Yusuf.dev
        </Link>

        <div className={styles.links}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`${styles.link} ${
                pathname === item.path ? styles.active : ""
              } hover-lift`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/resume" className={`${styles.resume} pulse-glow`}>
            Resume
          </Link>
        </div>

        <button 
          onClick={toggleMenu} 
          className={styles.menuButton}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburger}>
            <span className={isOpen ? styles.hamburgerTopActive : styles.hamburgerTop}></span>
            <span className={isOpen ? styles.hamburgerMiddleActive : styles.hamburgerMiddle}></span>
            <span className={isOpen ? styles.hamburgerBottomActive : styles.hamburgerBottom}></span>
          </span>
        </button>

        <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ""}`}>
          <div className={styles.mobileMenuContent}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`${styles.mobileLink} ${
                  pathname === item.path ? styles.mobileActive : ""
                }`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href="/resume" 
              className={styles.mobileResume} 
              onClick={closeMenu}
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;