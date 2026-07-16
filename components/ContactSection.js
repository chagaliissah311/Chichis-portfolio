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
            <a className="social-link" href="https://www.facebook.com/share/192sAh5Dis/" target="_blank" rel="noopener noreferrer" aria-label="Visit Facebook profile">
              <span className="social-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M13.5 20v-7h2.4l.3-2.8h-2.7V3.8c0-.8.2-1.4 1.4-1.4h1.5V.1c-.3 0-1.1-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.7v2.1H8.2V13h2.4v7h2.9Z" />
                </svg>
              </span>
              <span>Facebook</span>
            </a>
            <a className="social-link" href="https://www.tiktok.com/@chichiemmaculate?_r=1&_d=f47510i187cce8&sec_uid=MS4wLjABAAAAHfirRfwOBh2rgl1dGjRaoC--FEvVLeja7OgW61mxoBEshsuWrJgD7z_frwFGwzay&share_author_id=7424807364421420037&sharer_language=en&source=h5_m&u_code=egic953356hb2k&timestamp=1784226954&user_id=7424807364421420037&sec_user_id=MS4wLjABAAAAHfirRfwOBh2rgl1dGjRaoC--FEvVLeja7OgW61mxoBEshsuWrJgD7z_frwFGwzay&item_author_type=1&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7662604965244487444&share_link_id=0a3a3b80-c5e2-4081-bbc2-480911dc4c36&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb7360&social_share_type=5&enable_checksum=1" target="_blank" rel="noopener noreferrer" aria-label="Visit TikTok profile">
              <span className="social-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M14.3 3h2.7a4.4 4.4 0 0 0 4.4 4.4v2.8a7.2 7.2 0 0 1-4.4-1.3v6.4A5.1 5.1 0 1 1 12 9.3V13a2.3 2.3 0 1 0 1.9 2.3V3.1h.4Z" />
                </svg>
              </span>
              <span>TikTok</span>
            </a>
            <a className="social-link" href="https://www.instagram.com/chichiemmaculate?igsh=dmNpM2pxZ3d1bmp0" target="_blank" rel="noopener noreferrer" aria-label="Visit Instagram profile">
              <span className="social-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" />
                </svg>
              </span>
              <span>Instagram</span>
            </a>
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
