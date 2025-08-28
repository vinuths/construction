import { NavLink } from 'react-router-dom';

const navLinkStyles = ({ isActive }) => ({
  position: 'relative',
  padding: '0.5rem 1rem',
  fontWeight: isActive ? '700' : '500',
  fontSize: '1rem',
  letterSpacing: '0.5px',
  color: isActive ? '#fff' : '#eee',
  textDecoration: 'none',
  textTransform: 'uppercase',
  background: isActive
    ? 'linear-gradient(to right, #FFD700, #FF8C00)'
    : 'none',
  WebkitBackgroundClip: isActive ? 'text' : 'unset',
  WebkitTextFillColor: isActive ? 'transparent' : 'inherit',
  transition: 'all 0.4s ease',
});

export default function Navbar() {
  return (
    <nav
      style={{
        background: 'linear-gradient(90deg, #381dd1ff, #620ee9ff, #281af3ff)',
        padding: '1rem 2rem',
        boxShadow: '0 3px 10px rgba(0, 0, 0, 0.15)',
        position: 'sticky',
        top: 0,
        zIndex: 999,
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <h2
          style={{
            color: '#FFD700',
            fontWeight: 800,
            letterSpacing: '1px',
            textShadow: '0 0 8px rgba(255,215,0,0.6)',
          }}
        >
          BuildRight
        </h2>

        <ul style={{ listStyle: 'none', display: 'flex', gap: '1.5rem', margin: 0, padding: 0 }}>
          {[
            { path: '/', label: 'Home', exact: true },
            { path: '/about', label: 'About' },
            { path: '/services', label: 'Services' },
            { path: '/projects', label: 'Projects' },
            { path: '/contact', label: 'Contact' },
            { path: '/costcalculator', label: 'Cost Calculator' },
            { path: '/QuoteGenerator', label: 'Quote Generator' },
          ].map(({ path, label, exact }) => (
            <li key={label}>
              <NavLink
                to={path}
                end={exact}
                style={navLinkStyles}
                className="fancy-link"
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* CSS Animations */}
      <style>{`
        .fancy-link {
          position: relative;
          display: inline-block;
        }

        .fancy-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          height: 2px;
          width: 0%;
          background: linear-gradient(to right, #FFD700, #FF8C00);
          transition: width 0.4s ease;
        }

        .fancy-link:hover::after {
          width: 100%;
        }

        .fancy-link:hover {
          color: #fff;
          text-shadow: 0 0 6px #FFD700;
          transform: translateY(-1px);
        }
      `}</style>
    </nav>
  );
}
