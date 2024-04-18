import Image from "next/image";
import React from "react";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Area News</h2>
        <h1 className={styles.title}>
          We serve you with the hottest news and gist within the
          &ldquo;hood&ldquo;
        </h1>
        <p className={styles.desc}>
          We provide digital news that are bigger, bolder adn the best. We
          believe in news that accuracy, flexibility and precision. We&apos;re
          on a journey to become the wolrd&apos;s best counsulting & finance
          solution provider. A wide range of software and web solutions to our
          suites of services.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10K +</h1>
            <p>Likes</p>
          </div>
          <div className={styles.box}>
            <h1>150K +</h1>
            <p>Shares</p>
          </div>
          <div className={styles.box}>
            <h1>500K +</h1>
            <p>Subscription</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src={"/about.png"} alt="about" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
