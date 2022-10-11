import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog -- App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Blog -- App</h1>
        <div className={styles.imageContainer}>
          <Image
            className={styles.myImg}
            src="/homeImg.jpg"
            alt=""
            width={237}
            height={158}
          />
        </div>
        <p className={styles.description}>A blog for coders</p>
        <div className={styles.blogs}>
          <h2 className={styles.heading}>Popular Blogs</h2>
          <div className={styles.blogItem}>
            <h3>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
