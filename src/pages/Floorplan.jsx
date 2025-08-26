import React, { useState, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

// You can customize these rates as needed
const roomRates = {
  bedroom: 3000,     // per sq meter approx cost in INR
  bathroom: 4000,
  kitchen: 3500,
  livingroom: 3200,
  garage: 2800,
  others: 2500,
};

const roomTypes = Object.keys(roomRates);

export default function FloorPlanQuote() {
  const [rooms, setRooms] = useState([
    { id: 1, type: "bedroom", length: 4, width: 3 },
  ]);
  const [costSummary, setCostSummary] = useState(null);
  const formRef = useRef();

  // Add a new empty room
  const addRoom = () => {
    setRooms((prev) => [
      ...prev,
      { id: Date.now(), type: "bedroom", length: 3, width: 3 },
    ]);
  };

  // Update room data
  const updateRoom = (id, field, value) => {
    setRooms((prev) =>
      prev.map((room) =>
        room.id === id ? { ...room, [field]: value } : room
      )
    );
  };

  // Remove a room
  const removeRoom = (id) => {
    setRooms((prev) => prev.filter((room) => room.id !== id));
  };

  // Calculate total cost and area
  const calculateQuote = () => {
    let totalArea = 0;
    let totalCost = 0;
    const details = rooms.map((r) => {
      const area = r.length * r.width;
      const cost = area * (roomRates[r.type] || roomRates.others);
      totalArea += area;
      totalCost += cost;
      return {
        ...r,
        area,
        cost,
      };
    });
    setCostSummary({ totalArea, totalCost, details });
  };

  // Generate PDF with the form + floor plan
  const generatePdf = () => {
    if (!formRef.current) return;
    html2canvas(formRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [canvas.width, canvas.height],
      });
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("floorplan-quote.pdf");
    });
  };

  // Simple floor plan drawing - rooms stacked vertically with labels
  const floorPlanSVG = (
    <svg width={400} height={rooms.length * 80 + 20} style={{ border: "1px solid #ccc" }}>
      {rooms.map((room, i) => {
        const height = room.width * 20; // scale factor for visualization
        const width = room.length * 20;
        return (
          <g key={room.id} transform={`translate(10, ${i * 80 + 10})`}>
            <rect
              width={width}
              height={height}
              fill="#a0d8f7"
              stroke="#007bff"
              strokeWidth="2"
              rx="5"
              ry="5"
            />
            <text
              x={width / 2}
              y={height / 2}
              alignmentBaseline="middle"
              textAnchor="middle"
              fontSize="14"
              fill="#003366"
              fontWeight="bold"
            >
              {room.type} ({room.length}m × {room.width}m)
            </text>
          </g>
        );
      })}
    </svg>
  );

  return (
    <div
      style={{
        maxWidth: 700,
        margin: "2rem auto",
        padding: "1rem",
        background: "#fff",
        borderRadius: 8,
        boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
      ref={formRef}
    >
      <h1 style={{ textAlign: "center", color: "#007bff" }}>Floor Plan Quote Generator</h1>

      {/* Room Inputs */}
      <div style={{ marginBottom: "1rem" }}>
        {rooms.map((room, idx) => (
          <div
            key={room.id}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "0.5rem",
              gap: "0.5rem",
            }}
          >
            <select
              value={room.type}
              onChange={(e) => updateRoom(room.id, "type", e.target.value)}
              style={{ flex: "1 1 120px", padding: "0.4rem" }}
            >
              {roomTypes.map((t) => (
                <option key={t} value={t}>
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </option>
              ))}
            </select>
            <input
              type="number"
              min={1}
              step={0.1}
              value={room.length}
              onChange={(e) => updateRoom(room.id, "length", parseFloat(e.target.value))}
              placeholder="Length (m)"
              style={{ width: 100, padding: "0.4rem" }}
            />
            <input
              type="number"
              min={1}
              step={0.1}
              value={room.width}
              onChange={(e) => updateRoom(room.id, "width", parseFloat(e.target.value))}
              placeholder="Width (m)"
              style={{ width: 100, padding: "0.4rem" }}
            />
            {rooms.length > 1 && (
              <button
                onClick={() => removeRoom(room.id)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#ff4444",
                  cursor: "pointer",
                  fontSize: "1.2rem",
                }}
                title="Remove room"
              >
                &times;
              </button>
            )}
          </div>
        ))}
        <button
          onClick={addRoom}
          style={{
            marginTop: "0.5rem",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            padding: "0.5rem 1rem",
            cursor: "pointer",
            borderRadius: 4,
          }}
        >
          + Add Room
        </button>
      </div>

      {/* Floor Plan Drawing */}
      <div style={{ marginBottom: "1rem" }}>
        <h3>Floor Plan Preview</h3>
        {floorPlanSVG}
      </div>

      {/* Calculate and show quote */}
      <button
        onClick={calculateQuote}
        style={{
          width: "100%",
          padding: "0.75rem",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
          borderRadius: 4,
        }}
      >
        Calculate Quote
      </button>

      {costSummary && (
        <div
          style={{
            marginTop: "1rem",
            background: "#e6f4ea",
            padding: "1rem",
            borderRadius: 6,
          }}
        >
          <h3>Cost Summary</h3>
          <p>Total Area: {costSummary.totalArea.toFixed(2)} m²</p>
          <p>
            Total Estimated Cost: ₹{" "}
            {costSummary.totalCost.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "0.5rem",
            }}
          >
            <thead>
              <tr>
                <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "4px" }}>
                  Room
                </th>
                <th style={{ borderBottom: "1px solid #ccc", textAlign: "right", padding: "4px" }}>
                  Area (m²)
                </th>
                <th style={{ borderBottom: "1px solid #ccc", textAlign: "right", padding: "4px" }}>
                  Cost (₹)
                </th>
              </tr>
            </thead>
            <tbody>
              {costSummary.details.map((room) => (
                <tr key={room.id}>
                  <td style={{ padding: "4px" }}>{room.type}</td>
                  <td style={{ padding: "4px", textAlign: "right" }}>{room.area.toFixed(2)}</td>
                  <td style={{ padding: "4px", textAlign: "right" }}>
                    ₹ {room.cost.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={generatePdf}
            style={{
              marginTop: "1rem",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              padding: "0.75rem 1rem",
              cursor: "pointer",
              borderRadius: 4,
            }}
          >
            Download Quote PDF
          </button>
        </div>
      )}
    </div>
  );
}
