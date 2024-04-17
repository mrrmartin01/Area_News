import styles from "./footer.module.css"
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
      <Image
            src={"/logo.png"}
            alt="logo"
            fill
            sizes="(max-width: 480px) 120px, (min-width: 4px) and (max-width: 1024px) 120px, 150px"
          />
      </div>
      <div className={styles.text}>
        Area News &copy; - providing news and information since 2024
      </div>
    </div>
  );
};

export default Footer;
