// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs';

export default function handler(req, res) {
  try {
    const blogs = fs.readdirSync('blogdata');
    const allBlogs = blogs.map((blog) => {
      const data = fs.readFileSync(`blogdata/${blog}`, 'utf8');
      return JSON.parse(data);
    });
    res.status(200).json(allBlogs);
  } catch (err) {
    res.status(500).json({ message: 'Internal Sever Error' });
  }
}