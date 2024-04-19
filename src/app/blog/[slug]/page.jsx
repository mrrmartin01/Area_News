import Image from "next/image";
import styles from "./singlePost.module.css";

const SingleBlog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src={"/blog.png"} alt="" fill />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image className={styles.avatar} src={"/blog.png"} alt="" width={50} height={50} />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>John Doe</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>4.23.2022</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
          porro ipsa, similique veritatis sint laborum atque totam fugiat, quis
          ratione eaque, doloribus mollitia obcaecati consequatur fugit
          laboriosam. Aliquam, sint et.
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
