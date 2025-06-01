import React from "react";
import Link from "next/link";
import styles from "./details.module.css";
import Image from "next/image";
import Personal from "../../../public/personal.jpg";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const details = () => {
  return (
    <div>
      {" "}
      <div className={styles.personal}>
        <h1>Yusuf Muhammed .B.</h1>
        <Image src={Personal} alt="" className={styles.img} />
        <div className={styles.desc}>
          <p>Based in Nigeria</p>
          <span> FullStack Website Developer</span>

          <div className={styles.icons}>
            <Link href="https://www.facebook.com/share/1Bht3yLme1/?mibextid=qi2Omg">
              <FaFacebook />
            </Link>
            <Link href="https://x.com/omoibileponpon?t=h67wlCOeVsnAtqEDvvL6tQ&s=09">
              <FaXTwitter />
            </Link>
            <Link href="https://www.linkedin.com/in/yusuf-muhammed-06029b321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <FaLinkedin />
            </Link>
            <Link href="https://github.com/Mistymo21">
              <FaGithub />
            </Link>
          </div>
        </div>

        <Link href="/contact" className={styles.btn}>
          <button>Hire me!</button>
        </Link>
      </div>
    </div>
  );
};

export default details;
