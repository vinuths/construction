import React, { useState } from 'react';

const AiAssistant = () => {
  const [input, setInput] = useState('');
  const [chatLog, setChatLog] = useState([
    { from: 'ai', message: 'Hi! Ask me anything about construction or get instant cost estimates!' },
  ]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(true); // toggle visibility

  const getAiResponse = (question) => {
    const lower = question.toLowerCase();

    if (lower.includes('cost')) {
      return 'Construction costs vary based on location, materials, and design. On average: ₹1500–₹3000 per sq. ft. For premium projects, it can exceed ₹4000 per sq. ft.';
    }
    if (lower.includes('timeline') || lower.includes('time')) {
      return 'Residential construction usually takes 3–6 months. Larger or custom projects may take 8–12 months depending on approvals and weather.';
    }
    if (lower.includes('material')) {
      return 'Popular materials include: cement, steel, bricks, glass, and wood. For durability, use RCC and TMT steel. For interiors, plywood and gypsum are commonly used.';
    }
    if (lower.includes('labor')) {
      return 'Labor cost depends on skill level and region. Daily wages can range from ₹500–₹1200 per worker. It’s crucial to hire licensed contractors for quality work.';
    }
    if (lower.includes('permission') || lower.includes('approval')) {
      return 'You need municipal permissions like building plan approval, land clearance, and environmental clearance depending on your region.';
    }
    if (lower.includes('sustainable') || lower.includes('eco')) {
      return 'Sustainable construction uses energy-efficient designs, rainwater harvesting, solar panels, and low-carbon materials like fly ash bricks or bamboo.';
    }
    if (lower.includes('architect') || lower.includes('design')) {
      return 'Architects help optimize space, aesthetics, and budget. A good design balances function with compliance. Consult one before construction begins.';
    }
    if (lower.includes('weather') || lower.includes('rain')) {
      return 'Rain can delay foundation and plastering work. It’s best to plan excavation and concrete work during dry months (Oct–May in most regions).';
    }
    if (lower.includes('foundation')) {
      return 'The foundation type depends on soil. Common types are: isolated footing, raft, and pile foundation. Soil testing is essential before finalizing.';
    }
    if (lower.includes('stages') || lower.includes('process')) {
      return 'Typical stages: 1) Planning & permissions, 2) Excavation, 3) Foundation, 4) Structure, 5) Roofing, 6) Finishing (plaster, flooring, paint).';
    }

    return "Sorry, I couldn't understand that. Try asking about cost, materials, timeline, permissions, or foundation stages!";
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = input.trim();

    setChatLog((prev) => [...prev, { from: 'user', message: userMessage }]);
    setInput('');
    setLoading(true);

    setTimeout(() => {
      const aiMessage = getAiResponse(userMessage);
      setChatLog((prev) => [...prev, { from: 'ai', message: aiMessage }]);
      setLoading(false);
    }, 1000);
  };

  const handleQuickEstimate = (message) => {
    setChatLog((prev) => [...prev, { from: 'user', message }]);
    setLoading(true);

    setTimeout(() => {
      const aiMessage = getAiResponse(message);
      setChatLog((prev) => [...prev, { from: 'ai', message: aiMessage }]);
      setLoading(false);
    }, 1000);

    setInput('');
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          background: 'linear-gradient(135deg, #007bff, #00c6ff)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: 64,
          height: 64,
          fontSize: '1.8rem',
          boxShadow: '0 6px 18px rgba(0, 102, 255, 0.6)',
          cursor: 'pointer',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
        title="AI Construction Assistant"
      >
        <span role="img" aria-label="AI Assistant">
          🤖
        </span>
        <div style={{ fontSize: '0.55rem', marginTop: '2px', fontWeight: '600' }}>AI</div>
      </button>
    );
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        width: 320,
        maxHeight: 480,
        background: 'white',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        fontFamily: 'Arial, sans-serif',
        zIndex: 9999,
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          padding: '12px 16px',
          fontWeight: '700',
          fontSize: '1.1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span>AI Construction Helper</span>
        <button
          onClick={() => setIsOpen(false)}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'white',
            fontSize: '1.2rem',
            cursor: 'pointer',
          }}
          aria-label="Close chat"
          title="Close"
        >
          ✕
        </button>
      </div>

      {/* Quick suggestion buttons */}
      <div
        style={{
          padding: '8px 12px',
          borderBottom: '1px solid #ddd',
          display: 'flex',
          gap: '6px',
          flexWrap: 'wrap',
        }}
      >
        {[
          'What is the cost per sq ft?',
          'Typical construction timeline',
          'Common building materials',
          'Labor cost estimate',
          'Required permissions',
          'Sustainable construction',
          'Foundation types',
        ].map((text, idx) => (
          <button
            key={idx}
            onClick={() => handleQuickEstimate(text)}
            style={{
              backgroundColor: '#e1f0ff',
              border: '1px solid #007bff',
              borderRadius: '16px',
              padding: '6px 12px',
              fontSize: '0.75rem',
              cursor: 'pointer',
              color: '#007bff',
              whiteSpace: 'nowrap',
            }}
            title={text}
          >
            {text}
          </button>
        ))}
      </div>

      {/* Chat content */}
      <div
        style={{
          flex: 1,
          padding: '12px 16px',
          overflowY: 'auto',
          fontSize: '0.9rem',
          lineHeight: '1.4',
        }}
      >
        {chatLog.map(({ from, message }, i) => (
          <div
            key={i}
            style={{
              marginBottom: '12px',
              textAlign: from === 'user' ? 'right' : 'left',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                backgroundColor: from === 'user' ? '#dcf8c6' : '#f1f0f0',
                color: '#333',
                padding: '8px 12px',
                borderRadius: '18px',
                maxWidth: '80%',
                whiteSpace: 'pre-wrap',
              }}
            >
              {message}
            </span>
          </div>
        ))}

        {loading && (
          <div style={{ color: '#007bff', fontStyle: 'italic', marginTop: 10 }}>AI is typing...</div>
        )}
      </div>

      {/* Input area */}
      <div
        style={{
          borderTop: '1px solid #ddd',
          padding: '8px 12px',
          display: 'flex',
          gap: '8px',
        }}
      >
        <input
          type="text"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSend();
          }}
          style={{
            flex: 1,
            borderRadius: '20px',
            border: '1px solid #ccc',
            padding: '8px 16px',
            fontSize: '0.9rem',
          }}
          disabled={loading}
        />
        <button
          onClick={handleSend}
          disabled={loading}
          style={{
            backgroundColor: '#007bff',
            border: 'none',
            borderRadius: '50%',
            width: 36,
            height: 36,
            color: 'white',
            cursor: 'pointer',
            fontWeight: '700',
          }}
          aria-label="Send message"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default AiAssistant;
