import Image from "next/image";
import styles from "./singlePost.module.css";

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`); 
  if (!res.ok) {
    throw new Error("No post found");
  }
  return res.json();
};


const SingleBlog = async({params}) => {
  const {slug} = params;

  const post = await getData(slug);


  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src={"/blog.png"} alt="" fill />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
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
          {post.body}
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
