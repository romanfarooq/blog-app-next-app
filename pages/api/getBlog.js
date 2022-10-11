// http://localhost:3000/api/getBlog?slug=how-to-learn-javascript
import fs from 'fs';

export default function handler(req, res) {
  try {
    const { slug } = req.query;
    const data = fs.readFileSync(`blogdata/${slug}.json`, 'utf8');
    res.status(200).json(JSON.parse(data));
  } catch (err) {
    res.status(500).json({ message: "Blog Not Found" });
  }
}