// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs';

export default function Blogs(req, res) {
  try {
    const blogs = fs.readdirSync('blogdata');
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}