import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Roofing() {
  const navigate = useNavigate();

  const features = [
    { icon: '🏠', text: 'New roof installation (shingles, tiles, metal, flat roofs)' },
    { icon: '🔧', text: 'Roof repairs for leaks, damage, and wear' },
    { icon: '🛡️', text: 'Weatherproofing and insulation solutions' },
    { icon: '📅', text: 'Scheduled maintenance and inspections' },
    { icon: '♻️', text: 'Eco-friendly and energy-efficient roofing options' },
  ];

  return (
    <section
      style={{
        maxWidth: '900px',
        margin: '3rem auto',
        padding: '2rem',
        backgroundColor: '#f9f9f9',
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      }}
    >
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: '1rem',
          backgroundColor: '#e0e0e0',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        ← Back
      </button>

      {/* Title */}
      <h1 style={{ color: '#007bff', fontSize: '2rem', marginBottom: '1rem' }}>
        Roofing Services
      </h1>

      {/* Intro Text */}
      <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
        We offer durable and reliable roofing solutions to protect your home or business from all types of weather and environmental conditions.
      </p>
      <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
        From full installations to maintenance and repair, our expert team ensures your roof remains secure, energy-efficient, and built to last.
      </p>

      {/* Feature List */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ color: '#333', marginBottom: '1rem' }}>What We Offer:</h3>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
          {features.map(({ icon, text }, idx) => (
            <li key={idx} style={{ marginBottom: '0.5rem', color: '#555' }}>
              <span style={{ marginRight: '0.5rem' }}>{icon}</span> {text}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div
        style={{
          backgroundColor: '#007bff',
          color: '#fff',
          padding: '1.5rem',
          borderRadius: '10px',
          textAlign: 'center',
        }}
      >
        <h3 style={{ marginBottom: '0.5rem' }}>Need a Roof That Lasts?</h3>
        <p>Let us help you protect what matters most.</p>
        <a
          href="/contact"
          style={{
            display: 'inline-block',
            marginTop: '1rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#fff',
            color: '#007bff',
            borderRadius: '5px',
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
