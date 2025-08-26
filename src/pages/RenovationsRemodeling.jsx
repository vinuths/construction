import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RenovationsRemodeling() {
  const navigate = useNavigate();

  const features = [
    { text: 'Kitchen & bathroom remodeling', icon: '🚿' },
    { text: 'Whole-home renovations', icon: '🏠' },
    { text: 'Basement finishing & upgrades', icon: '🏚️' },
    { text: 'Flooring, walls & ceiling improvements', icon: '🧱' },
    { text: 'Custom design consultations', icon: '🎨' },
    { text: 'Modern, energy-efficient updates', icon: '⚡' },
  ];

  return (
    <section
      style={{
        maxWidth: '900px',
        margin: '3rem auto',
        padding: '2rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      }}
    >
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: '1rem',
          backgroundColor: '#ddd',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        ← Back
      </button>

      {/* Header */}
      <h1 style={{ color: '#007bff', fontSize: '2rem', marginBottom: '1rem' }}>
        Renovations & Remodeling
      </h1>

      {/* Intro Text */}
      <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
        Transform your living or working spaces with our expert renovation and remodeling services tailored to reflect your personal style and needs.
      </p>

      <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
        From small room makeovers to full-scale property renovations, we deliver results that enhance comfort, functionality, and property value.
      </p>

      {/* Features List */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ color: '#343a40', marginBottom: '1rem' }}>Our Renovation Services Include:</h3>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
          {features.map(({ text, icon }, idx) => (
            <li key={idx} style={{ color: '#555', marginBottom: '0.5rem' }}>
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
        <h3 style={{ marginBottom: '0.5rem' }}>Ready to Renovate?</h3>
        <p>Let’s upgrade your space with style, efficiency, and purpose.</p>
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
