import React from "react";
import Link from "next/link";
import styles from "./details.module.css";
import Image from "next/image";
import Personal from "../../../public/personal.jpg";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Details = () => {
  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <Image src={Personal} alt="Yusuf Muhammed" className={styles.avatar} />

        <h1 className={styles.name}>Yusuf Muhammed B.</h1>
        <p className={styles.location}>📍 Based in Nigeria</p>
        <span className={styles.role}>Full Stack Web Developer</span>

        <div className={styles.socials}>
          <Link href="https://www.facebook.com/share/1Bht3yLme1/?mibextid=qi2Omg" target="_blank" aria-label="Facebook">
            <FaFacebook />
          </Link>
          <Link href="https://x.com/omoibileponpon?t=h67wlCOeVsnAtqEDvvL6tQ&s=09" target="_blank" aria-label="Twitter">
            <FaXTwitter />
          </Link>
          <Link href="https://www.linkedin.com/in/yusuf-muhammed-06029b321" target="_blank" aria-label="LinkedIn">
            <FaLinkedin />
          </Link>
          <Link href="https://github.com/Mistymo21" target="_blank" aria-label="GitHub">
            <FaGithub />
          </Link>
        </div>

        <Link href="/contact" className={styles.hireLink}>
          <button className={styles.hireButton}>Hire me!</button>
        </Link>
      </div>
    </section>
  );
};

export default Details;