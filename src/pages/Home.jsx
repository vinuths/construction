import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Floorplan from './Floorplan';  // Exact casing matches filename

export default function Home() {
  const navigate = useNavigate();
  const [showFloorPlan, setShowFloorPlan] = useState(false);

  const services = [
    {
      title: 'General Contracting',
      desc: 'Comprehensive management ensuring timely and on‑budget delivery.',
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
            margin: '0 auto 2rem',
            lineHeight: '1.6',
          }}
        >
          Full‑service construction solutions tailored to your needs — from design and planning to building and finishing.
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
            background:
              'linear-gradient(90deg, #FFD700 0%, #FFA500 100%)',
            color: '#2c1500',
            boxShadow: '0 4px 12px rgba(255, 165, 0, 0.6)',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'linear-gradient(90deg, #FFA500 0%, #FFD700 100%)';
            e.currentTarget.style.boxShadow = '0 6px 18px rgba(255, 215, 0, 0.8)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'linear-gradient(90deg, #FFD700 0%, #FFA500 100%)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 165, 0, 0.6)';
          }}
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
            listStyle: 'none',
            padding: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {[
            { icon: '⚙️', text: 'Comprehensive project management from start to finish' },
            { icon: '🛠️', text: 'Expert craftsmanship and skilled workforce' },
            { icon: '📅', text: 'On‑time delivery with strict adherence to deadlines' },
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
            margin: '0 auto 2rem',
            color: '#555',
          }}
        >
          We offer a range of construction services tailored to your needs. From residential projects to commercial complexes, we have you covered.
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
                if (e.key === 'Enter' || e.key === ' ') navigate(path);
              }}
            >
              <h3 style={{ color: '#004aad', marginBottom: '0.5rem' }}>{title}</h3>
              <p style={{ color: '#555' }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Floor Plan Quote Integration */}
      <section
        style={{
          marginTop: '4rem',
          backgroundColor: '#f8fbff',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            color: '#007bff',
            fontSize: '2rem',
            marginBottom: '1rem',
          }}
        >
          Estimate Your Floor Plan Cost Instantly
        </h2>
        <p
          style={{
            textAlign: 'center',
            color: '#444',
            maxWidth: '700px',
            margin: '0 auto 2rem',
          }}
        >
          Design your own layout and get a detailed quote based on your plan — quick, free, and easy.
        </p>

        {!showFloorPlan ? (
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => setShowFloorPlan(true)}
              style={{
                background:
                  'linear-gradient(90deg, #FFD700 0%, #FFA500 100%)',
                color: '#2c1500',
                padding: '0.75rem 2rem',
                border: 'none',
                borderRadius: '30px',
                fontSize: '1.1rem',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(255, 165, 0, 0.6)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'linear-gradient(90deg, #FFA500 0%, #FFD700 100%)';
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(255, 215, 0, 0.8)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'linear-gradient(90deg, #FFD700 0%, #FFA500 100%)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 165, 0, 0.6)';
              }}
            >
              Start Your Floor Plan
            </button>
          </div>
        ) : (
          <Floorplan />
        )}
      </section>

      {/* Reviews Section */}
      <section
        style={{
          marginTop: '4rem',
          padding: '2rem 1rem',
          backgroundColor: '#e6f0ff',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            color: '#007bff',
            fontSize: '2rem',
            marginBottom: '2rem',
          }}
        >
          What Our Clients Say
        </h2>
        <div
          style={{
            display: 'flex',
            gap: '1.5rem',
            overflowX: 'auto',
            paddingBottom: '1rem',
            scrollSnapType: 'x mandatory',
          }}
        >
          {[
            {
              name: 'Emily R.',
              photo: 'https://randomuser.me/api/portraits/women/44.jpg',
              rating: 5,
              text: 'BuildRight exceeded my expectations! The team was professional, efficient, and delivered on time.',
            },
            {
              name: 'James K.',
              photo: 'https://randomuser.me/api/portraits/men/32.jpg',
              rating: 4,
              text: 'Great craftsmanship and attention to detail. I highly recommend them for any construction project.',
            },
            {
              name: 'Sophia L.',
              photo: 'https://randomuser.me/api/portraits/women/68.jpg',
              rating: 5,
              text: 'Amazing experience from start to finish. Transparent pricing and excellent communication.',
            },
          ].map(({ name, photo, rating, text }, idx) => (
            <article
              key={idx}
              style={{
                flex: '0 0 300px',
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
                padding: '1.5rem',
                scrollSnapAlign: 'start',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '1rem',
              }}
            >
              <img
                src={photo}
                alt={`${name} profile`}
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '3px solid #007bff',
                }}
              />
              <h3 style={{ margin: 0, color: '#004aad' }}>{name}</h3>
              <p
                style={{
                  color: '#007bff',
                  fontWeight: '700',
                  fontSize: '1.2rem',
                  margin: 0,
                }}
                aria-label={`${rating} out of 5 stars`}
              >
                {'⭐️'.repeat(rating) + '☆'.repeat(5 - rating)}
              </p>
              <p style={{ fontStyle: 'italic', color: '#333' }}>"{text}"</p>
            </article>
          ))}
        </div>
        <p
          style={{
            textAlign: 'center',
            marginTop: '1rem',
            color: '#555',
            fontSize: '0.9rem',
          }}
        >
          Scroll to see more testimonials →
        </p>
      </section>

      {/* Final CTA */}
      <section
        style={{
          marginTop: '4rem',
          textAlign: 'center',
          padding: '3rem 1rem',
          borderRadius: '16px',
          background: 'linear-gradient(135deg, #0052D4, #6FB1FC)',
          boxShadow: '0 8px 30px rgba(0, 82, 212, 0.4)',
          color: 'white',
        }}
      >
        <h2
          style={{
            fontSize: '2.8rem',
            fontWeight: '700',
            marginBottom: '1.5rem',
            textShadow: '0 2px 6px rgba(0,0,0,0.4)',
            letterSpacing: '1.2px',
          }}
        >
          Ready to Build Your Dream Project?
        </h2>
        <button
          onClick={() => navigate('/contact')}
          style={{
            background:
              'linear-gradient(90deg, #FFD700 0%, #FFA500 100%)',
            color: '#2c1500',
            padding: '1.25rem 3rem',
            fontSize: '1.3rem',
            fontWeight: '700',
            borderRadius: '50px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 6px 20px rgba(255, 165, 0, 0.6)',
            transition: 'all 0.35s ease',
            position: 'relative',
            overflow: 'hidden',
            zIndex: 0,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'linear-gradient(90deg, #FFA500 0%, #FFD700 100%)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 215, 0, 0.9)';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'linear-gradient(90deg, #FFD700 0%, #FFA500 100%)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 165, 0, 0.6)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          Contact Us Today
          <span
            style={{
              position: 'absolute',
              top: 0,
              left: '-75%',
              width: '50%',
              height: '100%',
              background: 'rgba(255, 255, 255, 0.3)',
              transform: 'skewX(-20deg)',
              transition: 'left 0.5s ease',
              zIndex: 1,
            }}
            className="shine"
          />
        </button>
      </section>
    </section>
  );
}
