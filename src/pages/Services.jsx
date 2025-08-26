import React from 'react';
import { Link } from 'react-router-dom';

// Optional: You could replace these with actual icons from an icon library like react-icons
const serviceIcons = {
  'general-contracting': '🏗️',
  'design-build': '🎨',
  'renovations-remodeling': '🛠️',
  'site-preparation': '🚜',
  'electrical-plumbing': '⚡🚰',
  'roofing': '🏠',
};

const services = [
  {
    id: 'general-contracting',
    title: 'General Contracting',
    description:
      'Comprehensive management of your construction projects, ensuring timely and on-budget delivery.',
    details:
      'We oversee all aspects of your construction, coordinating subcontractors, scheduling, and quality control to make your vision a reality.',
  },
  {
    id: 'design-build',
    title: 'Design & Build',
    description:
      'End-to-end service combining architectural design and construction for a seamless process.',
    details:
      'Our integrated approach means design and construction work hand-in-hand, minimizing delays and maximizing efficiency.',
  },
  {
    id: 'renovations-remodeling',
    title: 'Renovations & Remodeling',
    description:
      'Transform your existing spaces with our expert renovation and remodeling solutions.',
    details:
      'Whether it’s a kitchen upgrade or a full home remodel, our team ensures quality craftsmanship and minimal disruption.',
  },
  {
    id: 'site-preparation',
    title: 'Site Preparation',
    description:
      'Excavation, grading, and site clearing services to prepare your land for construction.',
    details:
      'Proper site prep is key. We handle soil testing, excavation, and grading to set the foundation for your project.',
  },
  {
    id: 'electrical-plumbing',
    title: 'Electrical & Plumbing',
    description:
      'Safe and efficient installation and repair of electrical and plumbing systems.',
    details:
      'Certified professionals ensure your systems meet code requirements and operate safely and efficiently.',
  },
  {
    id: 'roofing',
    title: 'Roofing',
    description:
      'Durable roofing solutions to protect your property from the elements.',
    details:
      'From inspections to installations and repairs, we provide reliable roofing services with high-quality materials.',
  },
];

export default function Services() {
  return (
    <section
      style={{
        maxWidth: '960px',
        margin: '3rem auto',
        padding: '0 1rem',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          marginBottom: '3rem',
          fontSize: '2.8rem',
          color: '#004aad',
          fontWeight: '700',
          textShadow: '0 1px 4px rgba(0,0,0,0.1)',
        }}
      >
        Our Services
      </h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
        }}
      >
        {services.map(({ id, title, description, details }) => (
          <div
            key={id}
            style={{
              background: 'white',
              borderRadius: '12px',
              padding: '2rem',
              boxShadow:
                '0 4px 8px rgba(0,0,0,0.1), 0 8px 15px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'default',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow =
                '0 12px 24px rgba(0,0,0,0.15), 0 16px 30px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow =
                '0 4px 8px rgba(0,0,0,0.1), 0 8px 15px rgba(0,0,0,0.05)';
            }}
          >
            <div>
              <div
                style={{
                  fontSize: '3rem',
                  textAlign: 'center',
                  marginBottom: '1rem',
                }}
                aria-hidden="true"
              >
                {serviceIcons[id]}
              </div>
              <h3
                style={{
                  marginBottom: '1rem',
                  color: '#007bff',
                  fontWeight: '700',
                  fontSize: '1.6rem',
                  textAlign: 'center',
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  color: '#444',
                  fontSize: '1rem',
                  marginBottom: '1rem',
                  minHeight: '60px',
                  textAlign: 'center',
                }}
              >
                {description}
              </p>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: '#666',
                  lineHeight: '1.4',
                  textAlign: 'center',
                }}
              >
                {details}
              </p>
            </div>

            <Link
              to={`/services/${id}`}
              style={{
                marginTop: '1.5rem',
                display: 'inline-block',
                padding: '0.65rem 1.4rem',
                backgroundColor: '#007bff',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '30px',
                fontWeight: '600',
                fontSize: '1rem',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0,123,255,0.4)',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = '#0056b3')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = '#007bff')
              }
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
