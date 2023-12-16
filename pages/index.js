import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";



export const getStaticProps = async () => {

  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
  

  return {
    props: { posts: data }
  }
}

export default function Home({posts}) {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>HomePage</h1>
        {posts.map(post => (
          <div key={post.id}>
            <h3 className={styles.single}>{post.title}</h3>
          </div>
        ))}

        <Link href="/ninjas" className={styles.btn}>
          See All Listings
        </Link>
      </div>
    </>
  );
}
