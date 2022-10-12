import fs from 'fs';

export default function handler(req, res) {
  try {
    if (req.method === 'POST') {

      const { email, name, phone, message } = req.body;

      if (!email || !email.includes('@') || !name || !phone || !message) {
        return res.status(422).json({ message: 'Invalid input' });
      }

      fs.writeFileSync(`contactdata/${email}.json`, JSON.stringify({ email, name, phone, message }));

      res.status(201).json({ message: 'Message received successfully' });

    } else {
      res.status(500).json({ message: 'Invalid request' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}