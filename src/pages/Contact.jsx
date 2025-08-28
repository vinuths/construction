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
{/* WhatsApp Floating Button - Right Side */}
<a
  href="https://wa.me/9743880882" // Replace with your WhatsApp number
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat with us on WhatsApp"
  style={{
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#25D366', // WhatsApp green
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    cursor: 'pointer',
    transition: 'transform 0.2s ease-in-out',
  }}
  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="white"
  >
    <path d="M16 0C7.2 0 0 7.2 0 16c0 2.9.8 5.6 2.2 8L0 32l8.3-2.2C11 31.3 13.4 32 16 32c8.8 0 16-7.2 16-16S24.8 0 16 0zm0 29.1c-2.2 0-4.3-.5-6.1-1.5l-.4-.2-5 1.3 1.3-4.9-.3-.5c-1.3-2-2-4.4-2-6.8C3.5 8.1 9.4 2.2 16 2.2S28.5 8.1 28.5 16c0 6.6-5.9 13.1-12.5 13.1zM22.6 20.4c-.3-.1-2.1-1-2.5-1.3-.4-.2-.7-.3-1 .2s-1.2 1.5-1.5 1.7c-.3.2-.6.3-1 .1-.5-.2-1.9-.7-3.6-2.2-1.3-1.2-2.2-2.8-2.5-3.3-.2-.4-.1-.7.1-.9.2-.2.4-.5.7-.7.2-.2.3-.4.5-.6.1-.2.2-.4 0-.6s-.8-2-1.1-2.8c-.3-.7-.6-.6-.9-.6H9c-.3 0-.7.1-.9.4-.3.3-1 1-1 2.4 0 1.4 1 2.7 1.1 2.9.1.2 2.2 3.4 5.3 4.8 3.2 1.4 3.2.9 3.8.9.6-.1 1.9-.8 2.2-1.6.3-.9.3-1.6.2-1.7-.1 0-.3-.2-.7-.4z" />
  </svg>
</a>


    </section>
  );
}
