import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const baseRates = {
  "General Contracting": 100,
  "Renovations": 80,
  "Roofing": 120,
  "Electrical & Plumbing": 90,
  "Design & Build": 150,
};

const complexityMultipliers = {
  Basic: 1,
  Standard: 1.3,
  Premium: 1.6,
};

export default function CostCalculator() {
  const [projectSize, setProjectSize] = useState('');
  const [unit, setUnit] = useState('sqm'); // sqm or sqft
  const [service, setService] = useState('General Contracting');
  const [complexity, setComplexity] = useState('Basic');
  const [estimatedCost, setEstimatedCost] = useState(null);
  const [costBreakdown, setCostBreakdown] = useState({ base: 0, complexityCost: 0 });

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    setEstimatedCost(null);
  };

  const handleCalculateClick = (e) => {
    e.preventDefault();

    let size = parseFloat(projectSize);
    if (!size || isNaN(size) || size <= 0) {
      setEstimatedCost(null);
      return;
    }

    // Convert sqft to sqm if needed
    if (unit === 'sqft') {
      size = size * 0.092903;
    }

    const baseRate = baseRates[service];
    const multiplier = complexityMultipliers[complexity];
    const baseCost = size * baseRate;
    const totalCost = baseCost * multiplier;

    setCostBreakdown({
      base: baseCost.toFixed(2),
      complexityCost: (totalCost - baseCost).toFixed(2)
    });
    setEstimatedCost(totalCost.toFixed(2));
  };

  const toggleUnit = () => {
    setUnit(prev => (prev === 'sqm' ? 'sqft' : 'sqm'));
    setEstimatedCost(null);
  };

  const chartData = {
    labels: ['Base Cost', 'Complexity Uplift'],
    datasets: [
      {
        label: 'Cost Breakdown ($)',
        data: [parseFloat(costBreakdown.base), parseFloat(costBreakdown.complexityCost)],
        backgroundColor: ['#007bff', '#ffc107'],
        borderRadius: 5,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return '$' + value;
          }
        }
      }
    }
  };

  return (
    <main style={{ maxWidth: '700px', margin: '2rem auto', padding: '1rem', background: 'white', borderRadius: '8px', border: '1px solid #ddd' }}>
      <h1 style={{ textAlign: 'center', color: '#007bff' }}>Cost Calculator</h1>
      <form onSubmit={handleCalculateClick} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <label>
          Project Size (in {unit === 'sqm' ? 'sq. meters' : 'sq. feet'}):
          <input
            type="number"
            value={projectSize}
            onChange={handleInputChange(setProjectSize)}
            placeholder="Enter size"
            min="1"
            required
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
          />
        </label>

        <button
          type="button"
          onClick={toggleUnit}
          style={{
            alignSelf: 'flex-start',
            padding: '0.3rem 0.8rem',
            backgroundColor: '#eee',
            border: '1px solid #ccc',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Switch to {unit === 'sqm' ? 'sq. feet' : 'sq. meters'}
        </button>

        <label>
          Select Service:
          <select value={service} onChange={handleInputChange(setService)} style={{ width: '100%', padding: '0.5rem' }}>
            {Object.keys(baseRates).map(serviceName => (
              <option key={serviceName} value={serviceName}>{serviceName}</option>
            ))}
          </select>
        </label>

        <label>
          Complexity Level:
          <select value={complexity} onChange={handleInputChange(setComplexity)} style={{ width: '100%', padding: '0.5rem' }}>
            {Object.keys(complexityMultipliers).map(level => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
        </label>

        <button
          type="submit"
          style={{
            padding: '0.75rem',
            backgroundColor: '#007bff',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1rem',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '5px'
          }}
        >
          Calculate Cost
        </button>
      </form>

      {estimatedCost !== null && (
        <div style={{ marginTop: '2rem' }}>
          <h3 style={{ color: '#28a745' }}>Estimated Cost: ${estimatedCost}</h3>
          <Bar data={chartData} options={chartOptions} />
        </div>
      )}
    </main>
  );
}
