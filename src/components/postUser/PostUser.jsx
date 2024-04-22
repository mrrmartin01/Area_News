import { getUsers } from "../../lib/data";
import styles from "./PostUser.module.css";


// const getData = async ({userId}) => {
//     const res = await getUsers( {cache: "no-store"}); 
//     if (!res.ok) {
//       throw new Error("No post found");
//     }
//     return res.json();
//   };


const PostUser = async ({userId}) => {
    const user = await getUsers(userId) 

  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.username }>{user.name}</span>
    </div>
  );
};

export default PostUser;
