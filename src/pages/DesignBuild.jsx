import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function DesignBuild() {
  const navigate = useNavigate();

  const features = [
    'Single point of responsibility',
    'Faster project delivery',
    'Improved cost control',
    'Streamlined communication',
    'High-quality design & craftsmanship'
  ];

  return (
    <section style={{ maxWidth: '900px', margin: '3rem auto', padding: '2rem', background: '#f9f9f9', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
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
          fontWeight: 'bold'
        }}
      >
        ← Back
      </button>

      <h1 style={{ color: '#007bff', marginBottom: '1rem', fontSize: '2rem' }}>Design & Build</h1>
      
      <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
        Our <strong>Design & Build</strong> service is a comprehensive, end-to-end solution that brings your dream projects to life. With one team managing both the design and construction, we eliminate the stress of coordinating multiple contractors.
      </p>

      <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
        From initial concept to final completion, we provide full-service project delivery — on schedule, within budget, and to the highest quality standards.
      </p>

      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ color: '#343a40', marginBottom: '1rem' }}>Why Choose Our Design & Build Service?</h3>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
          {features.map((feature, idx) => (
            <li key={idx} style={{ marginBottom: '0.5rem', color: '#555' }}>✅ {feature}</li>
          ))}
        </ul>
      </div>

      <div style={{
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '1.5rem',
        borderRadius: '10px',
        textAlign: 'center',
        marginTop: '2rem'
      }}>
        <h3 style={{ marginBottom: '0.5rem' }}>Ready to Get Started?</h3>
        <p>Let’s build your dream project — seamlessly and professionally.</p>
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
            fontWeight: 'bold'
          }}
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
