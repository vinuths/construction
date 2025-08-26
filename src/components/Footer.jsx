export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#222', color: '#ccc', textAlign: 'center', padding: '1rem', marginTop: '2rem' }}>
      <p>© {new Date().getFullYear()} BuildRight Construction. All rights reserved.</p>
    </footer>
  );
}
