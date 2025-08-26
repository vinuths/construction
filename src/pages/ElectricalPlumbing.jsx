import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ElectricalPlumbing() {
  const navigate = useNavigate();

  const features = [
    'Licensed & insured professionals',
    'Code-compliant electrical wiring',
    'Leak-proof plumbing installations',
    'Emergency repair services',
    'Energy-efficient solutions',
    'High-grade pipes and wiring',
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

      {/* Heading */}
      <h1 style={{ color: '#007bff', fontSize: '2rem', marginBottom: '1rem' }}>
        Electrical & Plumbing
      </h1>

      {/* Introduction */}
      <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
        Whether you're upgrading old systems or installing new ones, our certified electricians and plumbers deliver safe, reliable, and efficient services. We use top-grade materials and adhere strictly to local codes and standards.
      </p>

      <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
        From wiring and lighting to water lines and drainage systems — we’ve got your property covered with quality and care.
      </p>

      {/* Features */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ color: '#343a40', marginBottom: '1rem' }}>What We Offer</h3>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
          {features.map((feature, index) => (
            <li key={index} style={{ color: '#555', marginBottom: '0.5rem' }}>
              ⚡ {feature}
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
        <h3 style={{ marginBottom: '0.5rem' }}>Need Expert Electrical or Plumbing Help?</h3>
        <p>Let our professionals handle it safely and efficiently.</p>
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
