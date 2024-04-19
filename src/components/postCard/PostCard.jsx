import Image from "next/image";
import styles from "./PostCard.module.css";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src={"/blog.png"} alt="" fill className={styles.img} />
        </div>
        <span className={styles.date}>12.03.2002</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
          laboriosam distinctio harum nisi vitae eveniet ad aliquid illo
          praesentium. Beatae facere illo modi delectus error provident, numquam
          deleniti porro animi.
        </p>
        <Link className={styles.link} href={"blog/post"}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
