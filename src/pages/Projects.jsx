const projects = [
  {
    name: 'Sunset Villas',
    description: 'Luxury residential villas with modern amenities.',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80',
    type: 'Residential',
    status: 'Completed',
  },
  {
    name: 'Green Office Park',
    description: 'Eco-friendly office spaces designed for productivity.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    type: 'Commercial',
    status: 'In Progress',
  },
  {
    name: 'Downtown Mall Renovation',
    description: 'Revitalizing the city’s prime shopping destination.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    type: 'Renovation',
    status: 'Completed',
  },
];

export default function Projects() {
  return (
    <section
      style={{
        maxWidth: '1000px',
        margin: '3rem auto',
        padding: '1rem',
        background: 'linear-gradient(135deg, #f9faff 0%, #e0f0ff 100%)',
        borderRadius: '15px',
        boxShadow: '0 8px 25px rgba(0, 75, 160, 0.1)',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          marginBottom: '2.5rem',
          color: '#004aad',
          fontWeight: '700',
          fontSize: '2.8rem',
          textShadow: '0 1px 4px rgba(0, 74, 173, 0.2)',
        }}
      >
        Our Projects
      </h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
        }}
      >
        {projects.map(({ name, description, image, type, status }, idx) => (
          <div
            key={idx}
            style={{
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 6px 18px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow =
                '0 12px 30px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow =
                '0 6px 18px rgba(0, 0, 0, 0.1)';
            }}
          >
            <div style={{ overflow: 'hidden' }}>
              <img
                src={image}
                alt={name}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = 'scale(1.05)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = 'scale(1)')
                }
              />
            </div>

            <div style={{ padding: '1.5rem', flexGrow: 1 }}>
              <h3
                style={{
                  marginBottom: '0.75rem',
                  color: '#007bff',
                  fontWeight: '700',
                  fontSize: '1.6rem',
                }}
              >
                {name}
              </h3>
              <p
                style={{
                  marginBottom: '1rem',
                  color: '#555',
                  fontSize: '1rem',
                  lineHeight: '1.4',
                }}
              >
                {description}
              </p>

              <div
                style={{
                  display: 'flex',
                  gap: '0.75rem',
                  marginBottom: '1rem',
                  flexWrap: 'wrap',
                }}
              >
                <span
                  style={{
                    backgroundColor: '#e7f1ff',
                    color: '#007bff',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    boxShadow: '0 1px 4px rgba(0,123,255,0.2)',
                  }}
                >
                  {type}
                </span>
                <span
                  style={{
                    backgroundColor:
                      status === 'Completed' ? '#d4edda' : '#fff3cd',
                    color: status === 'Completed' ? '#155724' : '#856404',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    boxShadow:
                      status === 'Completed'
                        ? '0 1px 4px rgba(21,87,36,0.2)'
                        : '0 1px 4px rgba(133,104,4,0.2)',
                  }}
                >
                  {status}
                </span>
              </div>

              <button
                style={{
                  marginTop: 'auto',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  padding: '0.6rem 1.5rem',
                  borderRadius: '30px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(0,123,255,0.4)',
                  transition: 'background-color 0.3s ease',
                  width: '100%',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = '#0056b3')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = '#007bff')
                }
                // Placeholder for future click action, e.g., navigate to details page
                onClick={() => alert(`More details for ${name} coming soon!`)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
