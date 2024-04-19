import Image from "next/image";
import styles from "./home.module.css";
function page() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Welcome to Area News! Your hub for all things local</h1>
        <p className={styles.description}>
          Dive in and discover what&apos;s happening in your area! Stay
          informed, stay connected.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn more</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image
            src={"/brands.png"}
            alt="brands"
            className={styles.branding}
            fill
          />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src={"/hero.gif"}
          alt="hero"
          className={styles.heroImg}
          fill
          sizes="(max-width: 480px) 120px, (min-width: 481px) and (max-width: 1024px) 120px, 150px"
        />
      </div>
    </div>
  );
}

export default page;
