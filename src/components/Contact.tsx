import { useState } from 'react';
import './Section.css';
import './Contact.css';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <section id="contact" className="contact-section">
      <form className="contact-form" onSubmit={e => e.preventDefault()}>
        <h2 className="contact-title">連絡先</h2>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="contact-input"
        />
        <textarea
          placeholder="Your message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
          rows={7}
          className="contact-textarea"
        />
        <button type="submit" className="contact-button">
          送信
        </button>
      </form>
    </section>
  );
};

export default Contact; 