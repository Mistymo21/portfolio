"use client";

import React, { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; // Icons

const Lists = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "About", url: "/about" },
  { id: 3, title: "Contact", url: "/contact" },
  { id: 5, title: "Projects", url: "/projects" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        {/* Logo / Title */}
        <h1 className={styles.logo}>Portfolio</h1>

        {/* Desktop Menu */}
        <div className={styles.links}>
          {Lists.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className={pathname === item.url ? styles.active : ""}
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          {Lists.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className={pathname === item.url ? styles.active : ""}
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;