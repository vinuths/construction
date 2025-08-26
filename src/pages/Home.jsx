import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const services = [
    {
      title: 'General Contracting',
      desc: 'Comprehensive management ensuring timely and on-budget delivery.',
      path: '/services/general-contracting',
    },
    {
      title: 'Design & Build',
      desc: 'Architectural design combined with construction for seamless projects.',
      path: '/services/design-build',
    },
    {
      title: 'Renovations & Remodeling',
      desc: 'Transform your space with expert renovation solutions.',
      path: '/services/renovations-remodeling',
    },
  ];

  return (
    <section style={{ maxWidth: '1000px', margin: '3rem auto', padding: '1rem' }}>
      {/* Hero Section */}
      <div
        style={{
          textAlign: 'center',
          padding: '3rem 1rem',
          background: 'linear-gradient(135deg, #007bff 0%, #00c6ff 100%)',
          borderRadius: '12px',
          color: 'white',
          boxShadow: '0 8px 20px rgba(0,123,255,0.3)',
        }}
      >
        <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>
          BuildRight Construction
        </h1>
        <p
          style={{
            fontSize: '1.25rem',
            maxWidth: '650px',
            margin: '0 auto 2rem auto',
            lineHeight: '1.6',
          }}
        >
          Full-service construction solutions tailored to your needs — from design and planning to
          building and finishing.
        </p>
        <button
          onClick={() => navigate('/contact')}
          style={{
            padding: '0.75rem 2rem',
            fontSize: '1.1rem',
            fontWeight: '600',
            borderRadius: '30px',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: '#004aad',
            color: 'white',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#00337a')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#004aad')}
        >
          Get a Free Quote
        </button>
      </div>

      {/* Image Section */}
      <div
        style={{
          marginTop: '3rem',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=80"
          alt="Construction site"
          style={{ width: '100%', display: 'block', objectFit: 'cover', maxHeight: '400px' }}
        />
      </div>

      {/* Why Choose Us Section */}
      <section
        style={{
          marginTop: '4rem',
          padding: '1rem',
          backgroundColor: '#f0f7ff',
          borderRadius: '12px',
        }}
      >
        <h2
          style={{
            color: '#007bff',
            textAlign: 'center',
            fontSize: '2rem',
            marginBottom: '1rem',
          }}
        >
          Why Choose BuildRight Construction?
        </h2>
        <ul
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            listStyleType: 'none',
            padding: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {[
            { icon: '⚙️', text: 'Comprehensive project management from start to finish' },
            { icon: '🛠️', text: 'Expert craftsmanship and skilled workforce' },
            { icon: '📅', text: 'On-time project delivery with strict adherence to deadlines' },
            { icon: '💰', text: 'Transparent pricing with no hidden costs' },
            { icon: '🔒', text: 'Committed to safety and quality standards' },
            { icon: '🤝', text: 'Excellent communication and customer service' },
          ].map(({ icon, text }, idx) => (
            <li
              key={idx}
              style={{
                backgroundColor: 'white',
                padding: '1rem 1.5rem',
                borderRadius: '10px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                fontSize: '1.1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontWeight: '500',
              }}
            >
              <span style={{ fontSize: '1.8rem' }}>{icon}</span> {text}
            </li>
          ))}
        </ul>
      </section>

      {/* Services Preview */}
      <section style={{ marginTop: '4rem' }}>
        <h2
          style={{
            color: '#007bff',
            fontSize: '2rem',
            marginBottom: '1rem',
            textAlign: 'center',
          }}
        >
          Our Core Services
        </h2>
        <p
          style={{
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto 2rem auto',
            color: '#555',
          }}
        >
          We offer a range of construction services tailored to your needs. From residential projects
          to commercial complexes, we have you covered.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          {services.map(({ title, desc, path }, idx) => (
            <div
              key={idx}
              onClick={() => navigate(path)}
              style={{
                background: 'white',
                borderRadius: '12px',
                padding: '1.5rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  navigate(path);
                }
              }}
            >
              <h3 style={{ color: '#004aad', marginBottom: '0.5rem' }}>{title}</h3>
              <p style={{ color: '#555' }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ marginTop: '4rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', color: '#007bff', marginBottom: '1rem' }}>
          Ready to Build Your Dream Project?
        </h2>
        <button
          onClick={() => navigate('/contact')}
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '1rem 2.5rem',
            fontSize: '1.2rem',
            borderRadius: '30px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 6px 15px rgba(0,123,255,0.4)',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
        >
          Contact Us Today
        </button>
      </section>
    </section>
  );
}
