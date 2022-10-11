import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '../../styles/BlogPost.module.css';

const Slug = () => {
  const router = useRouter();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    try {
      if (!router.isReady) {
        return;
      }
      const { slug } = router.query;
      const getBlog = async () => {
        const response = await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`);
        const data = await response.json();
        setBlog(data);
      };
      getBlog();
    } catch (err) {
      console.log(err);
    }
  }, [router.isReady]);

  return (
    <div className={styles.container}>
      {blog && (
        <main className={styles.main}>
          <h2 className={styles.title}>Title: {blog.title}</h2>
          <div className={styles.blogItem}>
            <p>{blog.content}</p>
          </div>
        </main>
      )}
    </div>
  );
};

export default Slug;
