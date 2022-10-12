import styles from '../../styles/BlogPost.module.css';
import fs from 'fs';

export default function Slug({ blog }) {
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
}

// export async function getServerSideProps(context) {
//   const { slug } = context.query;
//   const response = await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`);
//   const blog = await response.json();
//   return { props: { blog } };
// }

export async function getStaticPaths() {
  const fileNames = fs.readdirSync('blogdata');
  const paths = fileNames.map((fileName) => ({
    params: { slug: fileName.replace('.json', '') },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const blog = fs.readFileSync(`blogdata/${slug}.json`, 'utf8');
  return {
    props: { blog: JSON.parse(blog) },
  };
}