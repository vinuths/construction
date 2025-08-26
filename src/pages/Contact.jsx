import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${form.name}! Your message has been received.`);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section
      style={{
        maxWidth: '650px',
        margin: '3rem auto',
        padding: '2rem',
        backgroundColor: '#f9faff',
        borderRadius: '15px',
        boxShadow: '0 8px 20px rgba(0, 74, 173, 0.1)',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          marginBottom: '1.5rem',
          color: '#004aad',
          fontWeight: '700',
          fontSize: '2.5rem',
          textShadow: '0 1px 4px rgba(0, 74, 173, 0.2)',
        }}
      >
        Contact Us
      </h1>

      <p
        style={{
          textAlign: 'center',
          color: '#333',
          marginBottom: '2rem',
          fontSize: '1.1rem',
        }}
      >
        We're here to help! Reach out via the form below or use our direct contact info.
      </p>

      {/* Contact Info */}
      <ul
        style={{
          listStyle: 'none',
          paddingLeft: 0,
          marginBottom: '2.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          color: '#004aad',
          fontWeight: '600',
          fontSize: '1.05rem',
        }}
      >
        <li>
          <span role="img" aria-label="email" style={{ marginRight: '0.5rem' }}>
            📧
          </span>
          <strong>Email:</strong>{' '}
          <a href="mailto:info@buildright.com" style={{ color: '#004aad', textDecoration: 'underline' }}>
            info@buildright.com
          </a>
        </li>
        <li>
          <span role="img" aria-label="phone" style={{ marginRight: '0.5rem' }}>
            📞
          </span>
          <strong>Phone:</strong>{' '}
          <a href="tel:+1234567890" style={{ color: '#004aad', textDecoration: 'underline' }}>
            +1 234 567 890
          </a>
        </li>
        <li>
          <span role="img" aria-label="location" style={{ marginRight: '0.5rem' }}>
            📍
          </span>
          <strong>Address:</strong> 123 Construction Lane, BuildCity, USA
        </li>
      </ul>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          style={{
            padding: '0.75rem 1rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem',
            outlineColor: '#007bff',
            transition: 'border-color 0.3s ease',
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          style={{
            padding: '0.75rem 1rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem',
            outlineColor: '#007bff',
            transition: 'border-color 0.3s ease',
          }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          required
          style={{
            padding: '0.75rem 1rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem',
            resize: 'vertical',
            outlineColor: '#007bff',
            transition: 'border-color 0.3s ease',
          }}
        />

        <button
          type="submit"
          style={{
            padding: '0.85rem 2rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '30px',
            fontSize: '1.1rem',
            fontWeight: '700',
            cursor: 'pointer',
            boxShadow: '0 6px 15px rgba(0,123,255,0.4)',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
        >
          Send Message
        </button>
      </form>

      {/* Optional: Social Media Links */}
      <div
        style={{
          marginTop: '3rem',
          textAlign: 'center',
          color: '#666',
          fontSize: '0.9rem',
        }}
      >
        <p>Connect with us on social media:</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', fontSize: '1.6rem' }}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: '#3b5998' }}>
            👍
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" style={{ color: '#1da1f2' }}>
            🐦
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: '#0077b5' }}>
            🔗
          </a>
        </div>
      </div>
    </section>
  );
}
