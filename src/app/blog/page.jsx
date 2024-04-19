import styles from "./blog.module.css";
import PostCard from "../../components/postCard/PostCard";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { validate: 3600 },
  }); //refresh in every 1hour
  if (!res.ok) {
    throw new Error("No post found");
  }
  return res.json();
};

const BlogPage = async () => {
  const posts = await getData();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
