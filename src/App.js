import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Import individual service pages
import GeneralContracting from './pages/GeneralContracting';
import DesignBuild from './pages/DesignBuild';
import RenovationsRemodeling from './pages/RenovationsRemodeling';
import SitePreparation from './pages/SitePreparation';
import ElectricalPlumbing from './pages/ElectricalPlumbing';
import Roofing from './pages/Roofing';
import CostCalculator from './pages/CostCalculator';
import QuoteGenerator from './pages/QuoteGenerator';

function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ minHeight: '80vh', maxWidth: '1200px', margin: '2rem auto', padding: '0 1rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/costcalculator" element={<CostCalculator />} />
          <Route path="/QuoteGenerator" element={<QuoteGenerator />} />

          {/* Individual service pages */}
          <Route path="/services/general-contracting" element={<GeneralContracting />} />
          <Route path="/services/design-build" element={<DesignBuild />} />
          <Route path="/services/renovations-remodeling" element={<RenovationsRemodeling />} />
          <Route path="/services/site-preparation" element={<SitePreparation />} />
          <Route path="/services/electrical-plumbing" element={<ElectricalPlumbing />} />
          <Route path="/services/roofing" element={<Roofing />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
