'use client';

import { useState } from 'react';

export default function ContactSection({ contact }) {
  const [status, setStatus] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      shootType: formData.get('shootType'),
      date: formData.get('date'),
      message: formData.get('message'),
    };

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      setStatus('Thank you — your inquiry has been sent.');
      event.currentTarget.reset();
    } else {
      setStatus('Sorry, there was a problem sending your message.');
    }
  }

  return (
    <section className="reveal" id="contact">
      <div className="section-title">
        <h2>Book a Shoot</h2>
        <p>For editorial, runway, commercial, or charitable collaborations, let’s create something unforgettable.</p>
      </div>
      <div className="contact-wrap">
        <div className="contact-card">
          <h3>Contact & Socials</h3>
          <div className="contact-list">
            <div className="contact-item"><strong>Email:</strong><br />{contact.email}</div>
            <div className="contact-item"><strong>Location:</strong><br />{contact.location}</div>
            <div className="contact-item"><strong>Availability:</strong><br />{contact.availability}</div>
            <div className="contact-item"><strong>Preferred:</strong><br />{contact.preferred}</div>
            {contact.services?.length ? (
              <div className="contact-item"><strong>Services:</strong><br />{contact.services.join(' · ')}</div>
            ) : null}
          </div>
          <div className="socials">
            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
            <a href="#">X</a>
          </div>
        </div>
        <div className="form-card">
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <label><input name="name" type="text" placeholder="Name" required /></label>
              <label><input name="email" type="email" placeholder="Email" required /></label>
            </div>
            <div className="form-grid">
              <label><select name="shootType" required><option value="">Shoot Type</option><option>Editorial</option><option>Runway</option><option>Commercial</option><option>Other</option></select></label>
              <label><input name="date" type="date" /></label>
            </div>
            <label><textarea name="message" placeholder="Message"></textarea></label>
            <button className="btn btn-primary" type="submit">Send Inquiry</button>
            {status ? <p className="status-message">{status}</p> : null}
          </form>
        </div>
      </div>
    </section>
  );
}
