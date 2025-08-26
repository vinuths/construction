import React from 'react';

export default function About() {
  return (
    <section 
      style={{ 
        maxWidth: '800px', 
        margin: '3rem auto', 
        padding: '2rem', 
        backgroundColor: '#f9f9f9', 
        borderRadius: '10px', 
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)', 
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: '#333',
        lineHeight: '1.6',
      }}
    >
      <h1 style={{ 
        fontSize: '2.5rem', 
        marginBottom: '1rem', 
        color: '#007bff', 
        textAlign: 'center' 
      }}>
        About BuildRight Construction
      </h1>
      <p style={{ fontSize: '1.125rem', marginBottom: '1.25rem' }}>
        For over <strong>20 years</strong>, BuildRight Construction has stood as a trusted leader in the construction industry, delivering superior quality and unparalleled craftsmanship. Our mission is to turn your visions into reality by providing comprehensive, end-to-end construction solutions tailored to your needs.
      </p>
      <p style={{ fontSize: '1.125rem', marginBottom: '1.25rem' }}>
        Our highly skilled team comprises certified architects, engineers, project managers, and experienced tradespeople who are passionate about excellence, innovation, and client satisfaction.
      </p>
      
      <h2 style={{ fontSize: '1.75rem', marginTop: '2rem', marginBottom: '1rem', color: '#0056b3' }}>
        What We Offer:
      </h2>
      <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', fontSize: '1.125rem', marginBottom: '1.5rem' }}>
        <li><strong>Full Construction Services:</strong> From foundation to finishing, we manage every stage of your project with precision and care.</li>
        <li><strong>Detailed Construction Drawings:</strong> Accurate, easy-to-understand blueprints created by our expert architects and engineers.</li>
        <li><strong>3D Modeling & Visualization:</strong> Experience your project in realistic 3D before we build, allowing you to make informed decisions early on.</li>
        <li><strong>Renovations & Remodeling:</strong> Transform existing spaces to better suit your needs, enhancing both functionality and aesthetics.</li>
        <li><strong>Roofing, Electrical & Plumbing:</strong> Skilled specialists ensure your infrastructure is built to code and performs flawlessly.</li>
        <li><strong>Design & Build Solutions:</strong> A seamless process from concept to completion, reducing stress and accelerating timelines.</li>
      </ul>

      <p style={{ fontSize: '1.125rem' }}>
        At BuildRight Construction, we pride ourselves on delivering projects on time and within budget while maintaining the highest standards of safety and quality. Let us bring your dream project to life — built right, built to last.
      </p>
    </section>
  );
}
