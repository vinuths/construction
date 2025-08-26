import React from 'react';

export default function GeneralContracting() {
  return (
    <section style={{ maxWidth: '800px', margin: '3rem auto', padding: '2rem', backgroundColor: '#f9faff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <h1 style={{ color: '#007bff', marginBottom: '1rem', fontSize: '2.5rem', textAlign: 'center' }}>General Contracting</h1>
      
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem', color: '#333' }}>
        Our General Contracting service covers all aspects of construction management, from planning to execution. We coordinate with subcontractors, handle permits, and ensure quality control at every step.
      </p>

      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem', color: '#333' }}>
        Whether it’s a residential or commercial project, our experienced team delivers top-notch results with strict adherence to schedules and budgets. We manage every detail so you don’t have to worry.
      </p>

      {/* Key Features List */}
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#0056b3', marginBottom: '1rem' }}>Why Choose Our General Contracting Services?</h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', fontSize: '1.1rem', color: '#555' }}>
          <li>End-to-end project management ensuring seamless execution</li>
          <li>Experienced subcontractor coordination and supervision</li>
          <li>Permit handling and regulatory compliance</li>
          <li>Transparent budgeting and cost control</li>
          <li>High standards of quality and safety</li>
          <li>Timely completion with proactive communication</li>
        </ul>
      </div>

      {/* Construction Process Illustration */}
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#0056b3', marginBottom: '1rem' }}>Our Construction Process</h2>
        <ol style={{ paddingLeft: '1.5rem', fontSize: '1.1rem', color: '#555' }}>
          <li>Initial Consultation & Needs Assessment</li>
          <li>Detailed Planning & Scheduling</li>
          <li>Procurement of Materials & Hiring</li>
          <li>Site Preparation & Foundation</li>
          <li>Construction & Quality Control</li>
          <li>Final Inspection & Project Delivery</li>
        </ol>
      </div>

      {/* Visual Section */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <img 
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" 
          alt="Construction site" 
          style={{ width: '100%', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.15)' }}
        />
        <figcaption style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>
          Our team managing a construction site with focus and expertise.
        </figcaption>
      </div>

      {/* Testimonials */}
      <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <h2 style={{ color: '#0056b3', marginBottom: '1rem' }}>What Our Clients Say</h2>
        <blockquote style={{ fontStyle: 'italic', color: '#444', fontSize: '1.1rem', marginBottom: '1rem' }}>
          "The General Contracting team managed our commercial project flawlessly. They kept us informed at every step, and the quality was exceptional!"
        </blockquote>
        <p style={{ fontWeight: 'bold', textAlign: 'right', color: '#333' }}>– Sarah M., Business Owner</p>
      </div>
    </section>
  );
}
