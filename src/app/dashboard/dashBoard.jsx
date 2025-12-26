import React from "react";
import styles from "./dashboard.module.css";
import Link from "next/link";
import { FaArrowRight, FaCode, FaServer, FaLightbulb } from "react-icons/fa";

const DashBoard = () => {
  return (
    <section className={styles.container}>
      <div className={styles.backgroundAnimation}></div>

      <div className={styles.wrapper}>
        <div className={styles.info}>
          {/* Greeting */}
          <div className={styles.greeting}>
            <span className={styles.wave}>👋</span>
            <h2 className={styles.subtitle}>
              Building Reliable and Scalable Digital Solutions
            </h2>
          </div>

          {/* Main title */}
          <div className={styles.titleContainer}>
            <h1 className={styles.name}>
              Hi, I’m <span className={styles.gradientName}>Yusuf</span>
            </h1>
            <div className={styles.typingContainer}>
              <span className={styles.typingText}>
                Full Stack Software Developer
              </span>
              <span className={styles.cursor}>|</span>
            </div>
          </div>

          {/* Content */}
          <div className={styles.content}>
            <div className={styles.textCard}>
              <div className={styles.textHeader}>
                <FaCode className={styles.textIcon} />
                <h3 className={styles.textTitle}>Frontend Development</h3>
              </div>
              <p className={styles.text}>
                I design and build clean, responsive, and accessible user
                interfaces with a strong focus on performance and usability.
                My frontend work leverages{" "}
                <strong>Next.js, React, and modern CSS</strong> to deliver
                intuitive experiences across all screen sizes.
              </p>
            </div>

            <div className={styles.textCard}>
              <div className={styles.textHeader}>
                <FaServer className={styles.textIcon} />
                <h3 className={styles.textTitle}>Backend Engineering</h3>
              </div>
              <p className={styles.text}>
                I develop secure and scalable backend systems using{" "}
                <strong>Node.js, MongoDB, and RESTful APIs</strong>. My focus is
                on clean architecture, data integrity, and building services
                that support real-world business needs.
              </p>
            </div>

            <div className={styles.textCard}>
              <div className={styles.textHeader}>
                <FaLightbulb className={styles.textIcon} />
                <h3 className={styles.textTitle}>Problem-Driven Approach</h3>
              </div>
              <p className={styles.text}>
                I approach development with a strong emphasis on solving real
                problems through efficient, maintainable, and scalable
                solutions. Beyond coding, I continuously improve my skills by
                exploring new technologies and contributing to practical
                projects.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className={styles.ctaSection}>
            <Link href="/projects" className={styles.ctaLink}>
              <button className={styles.cta}>
                <span>View Selected Projects</span>
                <FaArrowRight className={styles.ctaIcon} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashBoard;
