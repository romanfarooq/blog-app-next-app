import { useState } from 'react';
import styles from '../../styles/Contact.module.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { phone, name, email, message };

    fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    if (e.target.name == 'phone') {
      setPhone(e.target.value);
    } else if (e.target.name == 'email') {
      setEmail(e.target.value);
    } else if (e.target.name == 'message') {
      setMessage(e.target.value);
    } else if (e.target.name == 'name') {
      setName(e.target.value);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.center}>Contact Us</h1>
      <form className={styles.main} onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>
            Enter your name
          </label>
          <input
            className={styles.input}
            type="text"
            value={name}
            onChange={handleChange}
            id="name"
            name="name"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formlabel}>
            Email address
          </label>
          <input
            className={styles.input}
            type="email"
            value={email}
            onChange={handleChange}
            name="email"
            id="email"
            aria-describedby="emailHelp"
            required
          />
          <div id="emailHelp" className={styles.formText}>
            We&apos;ll never share your email with anyone else.
          </div>
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>
            Phone Number
          </label>
          <input
            className={styles.input}
            type="phone"
            value={phone}
            onChange={handleChange}
            name="phone"
            id="phone"
            required
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="message" className={styles.formlabel}>
            Elaborate your concern
          </label>
          <textarea
            className={styles.formlabel}
            value={message}
            onChange={handleChange}
            placeholder="Write your concern here"
            name="message"
            id="message"
            required
          />
        </div>
        <button className={styles.btn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;