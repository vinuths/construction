import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SitePreparation() {
  const navigate = useNavigate();

  const services = [
    { icon: '🚜', text: 'Excavation and trenching' },
    { icon: '🏗️', text: 'Land clearing and debris removal' },
    { icon: '📏', text: 'Grading and leveling for drainage' },
    { icon: '🧱', text: 'Foundation and soil stabilization' },
    { icon: '🚧', text: 'Temporary access roads and fencing' },
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
        Site Preparation Services
      </h1>

      {/* Description */}
      <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
        Preparing your construction site is the first and most critical step toward a successful project.
        Our team ensures the land is cleared, graded, and properly structured for a stable foundation.
      </p>
      <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
        We use modern equipment and experienced operators to deliver safe, efficient, and code-compliant site prep.
      </p>

      {/* Feature List */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ color: '#333', marginBottom: '1rem' }}>What’s Included:</h3>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
          {services.map(({ icon, text }, index) => (
            <li key={index} style={{ marginBottom: '0.5rem', color: '#555' }}>
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
        <h3 style={{ marginBottom: '0.5rem' }}>Ready to Build?</h3>
        <p>Start your construction journey with a solid, expertly prepared site.</p>
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
