import { NavLink } from 'react-router-dom';

const navLinkStyles = ({ isActive }) => ({
  padding: '0.5rem 1rem',
  color: isActive ? '#000000' : '#555555',
  borderBottom: isActive ? '2px solid #000000' : '2px solid transparent',
  fontWeight: isActive ? '700' : '400',
});

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: 'white', padding: '1rem 2rem', boxShadow: '0 2px 4px rgb(0 0 0 / 0.1)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h2 style={{ color: '#007bff' }}>BuildRight Construction</h2>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem' }}>
          <li><NavLink to="/" style={navLinkStyles} end>Home</NavLink></li>
          <li><NavLink to="/about" style={navLinkStyles}>About</NavLink></li>
          <li><NavLink to="/services" style={navLinkStyles}>Services</NavLink></li>
          <li><NavLink to="/projects" style={navLinkStyles}>Projects</NavLink></li>
          <li><NavLink to="/contact" style={navLinkStyles}>Contact</NavLink></li>
          <li><NavLink to="/costcalculator" style={navLinkStyles}>Cost Calculator</NavLink></li>
          <li><NavLink to="/QuoteGenerator" style={navLinkStyles}>QuoteGenerator</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}
