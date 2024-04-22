import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "../../../components/postUser/PostUser";
import { Suspense } from "react";
import { getPost } from "../../../lib/data";

const SingleBlog = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src={post.img} alt="" fill />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>4.23.2022</span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SingleBlog;
