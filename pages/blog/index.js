import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../../styles/Blog.module.css';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    try {
      const getBlogs = async () => {
        const response = await fetch('http://localhost:3000/api/blogs');
        const data = await response.json();
        setBlogs(data);
      };
      getBlogs();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((blog) => (
          <div className={styles.blogItem} key={blog.slug}>
            <Link href={`/blog/${blog.slug}`}>
              <a className={styles.card}>
                <h3>{blog.title}</h3>
                <p>{blog.metadesc}</p>
              </a>
            </Link>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Blog;
