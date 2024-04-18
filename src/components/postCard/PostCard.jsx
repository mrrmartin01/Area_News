import Image from 'next/image'
import styles from './PostCard.module.css'
import Link from 'next/link'

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
            <Image src={"/favicon2.ico"} alt='' fill className={styles.img}/>
        </div>
        <span className={styles.date}>12.03.2002</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Description</p>
        <Link className={styles.link} href={'blog/post'}>READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard
