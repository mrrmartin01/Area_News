import styles from "./home.module.css";
function page() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>
          Welcome to our corner of the internet! Get cozy and explore our latest
          articles.
        </h1>
      </div>
      <div className={styles.imageContainer}></div>
    </div>
  );
}

export default page;
