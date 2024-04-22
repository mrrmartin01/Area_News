import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
  title: "Contact",
  description: "Contact Area news blogs",
};

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={"/contact.png"} alt="contact" fill className={styles.img}/>
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Please enter your name" />
          <input type="text" placeholder="example@email.com" />
          <input type="text" placeholder="+123 24 678 9000" />
          <textarea name="" id="" cols="30" rows="10" placeholder="Type message here"></textarea>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
