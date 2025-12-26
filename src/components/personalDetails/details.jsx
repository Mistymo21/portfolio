import React from "react";
import Link from "next/link";
import styles from "./details.module.css";
import Image from "next/image";
import Personal from "../../../public/personal.jpg";
import { FaFacebook, FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Details = () => {
  return (
    <section className={styles.container}>
      <div className={styles.card}>
        {/* Avatar */}
        <div className={styles.avatarContainer}>
          <Image
            src={Personal}
            alt="Yusuf Muhammed"
            className={styles.avatar}
            priority
          />
          <div className={styles.statusIndicator}></div>
        </div>

        <h1 className={styles.name}>Yusuf Muhammed B.</h1>

        <div className={styles.roleContainer}>
          <span className={styles.role}>Full Stack Software Developer</span>
          <div className={styles.roleUnderline}></div>
        </div>

        <p className={styles.bio}>
          I build reliable, scalable, and user-focused web applications using
          modern technologies. My work emphasizes clean architecture, performance,
          and maintainable code.
        </p>

        <div className={styles.socials}>
          <Link
            href="https://www.facebook.com/share/1Bht3yLme1/?mibextid=qi2Omg"
            target="_blank"
            aria-label="Facebook"
            className={styles.socialLink}
          >
            <FaFacebook className={styles.socialIcon} />
          </Link>

          <Link
            href="https://x.com/omoibileponpon?t=h67wlCOeVsnAtqEDvvL6tQ&s=09"
            target="_blank"
            aria-label="Twitter"
            className={styles.socialLink}
          >
            <FaXTwitter className={styles.socialIcon} />
          </Link>

          <Link
            href="https://www.linkedin.com/in/yusuf-muhammed-06029b321"
            target="_blank"
            aria-label="LinkedIn"
            className={styles.socialLink}
          >
            <FaLinkedin className={styles.socialIcon} />
          </Link>

          <Link
            href="https://github.com/Mistymo21"
            target="_blank"
            aria-label="GitHub"
            className={styles.socialLink}
          >
            <FaGithub className={styles.socialIcon} />
          </Link>
        </div>

        <div className={styles.actions}>
          <Link href="/contact" className={styles.hireLink}>
            <button className={styles.hireButton}>
              <span>Get in Touch</span>
              <div className={styles.buttonShine}></div>
            </button>
          </Link>

          <Link href="/resume" className={styles.resumeLink}>
            <button className={styles.resumeButton}>
              <FaDownload className={styles.downloadIcon} />
              View Resume
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Details;
