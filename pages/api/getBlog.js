import fs from 'fs';

export default function getBlog(req, res) {
  try {
    const { slug } = req.query;
    const data = fs.readFileSync(`blogdata/${slug}`, 'utf8');
    res.status(200).json(JSON.parse(data));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}