import React, { useRef, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const baseRates = {
  "General Contracting": 1000,
  Renovations: 800,
  Roofing: 1200,
  "Electrical & Plumbing": 900,
  "Design & Build": 1500,
};

const complexityMultipliers = {
  Basic: 1,
  Standard: 1.3,
  Premium: 1.6,
};

export default function QuoteGenerator() {
  const formRef = useRef();
  const [unit, setUnit] = useState("sqm");

  // Project & client info
  const [projectName, setProjectName] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientContact, setClientContact] = useState("");
  const [location, setLocation] = useState("");

  // Project details
  const [size, setSize] = useState("");
  const [service, setService] = useState("General Contracting");
  const [complexity, setComplexity] = useState("Basic");

  // Labor & additional costs
  const [laborHours, setLaborHours] = useState("");
  const [laborRate, setLaborRate] = useState(500);
  const [permitsCost, setPermitsCost] = useState("");
  const [contingencyPercent, setContingencyPercent] = useState(10);

  // Materials list - array of {name, quantity, unitCost}
  const [materials, setMaterials] = useState([
    { id: 1, name: "", quantity: "", unitCost: "" },
  ]);

  const [cost, setCost] = useState(null);

  // Handlers for materials
  const handleMaterialChange = (id, field, value) => {
    setMaterials((prev) =>
      prev.map((m) =>
        m.id === id ? { ...m, [field]: value } : m
      )
    );
  };

  const addMaterial = () => {
    setMaterials((prev) => [
      ...prev,
      { id: prev.length ? prev[prev.length - 1].id + 1 : 1, name: "", quantity: "", unitCost: "" },
    ]);
  };

  const removeMaterial = (id) => {
    setMaterials((prev) => prev.filter((m) => m.id !== id));
  };

  const calculate = () => {
    let s = parseFloat(size);
    if (!s || s <= 0) {
      setCost(null);
      return;
    }
    if (unit === "sqft") s *= 0.092903;

    const baseRate = baseRates[service];
    const complexityMultiplier = complexityMultipliers[complexity];

    const baseCost = s * baseRate;
    const complexityExtra = baseCost * (complexityMultiplier - 1);

    // Calculate total materials cost from list
    const materialsCost = materials.reduce((total, m) => {
      const q = parseFloat(m.quantity);
      const u = parseFloat(m.unitCost);
      if (!m.name || isNaN(q) || q <= 0 || isNaN(u) || u < 0) return total;
      return total + q * u;
    }, 0);

    // Labor cost from hours * rate or default 40% of base
    const laborCost = laborHours
      ? laborHours * laborRate
      : baseCost * 0.4;

    // Permits cost
    const permits = permitsCost ? parseFloat(permitsCost) : 0;

    // Contingency
    const contingency = ((baseCost + complexityExtra + permits + laborCost + materialsCost) * contingencyPercent) / 100;

    // Subtotal before tax
    const subtotal =
      baseCost + complexityExtra + permits + laborCost + materialsCost + contingency;

    // GST @ 18%
    const gst = subtotal * 0.18;

    const totalCost = subtotal + gst;

    setCost({
      size: s.toFixed(2),
      unit: "sqm",
      baseRate: baseRate.toFixed(2),
      complexityMultiplier: complexityMultiplier.toFixed(2),
      materialsCost: materialsCost.toFixed(2),
      laborCost: laborCost.toFixed(2),
      complexityExtra: complexityExtra.toFixed(2),
      permits,
      contingencyPercent,
      contingency: contingency.toFixed(2),
      gst: gst.toFixed(2),
      totalCost: totalCost.toFixed(2),
    });
  };

  const downloadPdf = () => {
    html2canvas(formRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        unit: "px",
        format: [canvas.width, canvas.height],
      });
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("detailed-quote.pdf");
    });
  };

  return (
    <div
      ref={formRef}
      style={{
        maxWidth: 700,
        margin: "2rem auto",
        padding: "2rem",
        background: "#fff",
        borderRadius: 10,
        boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#007bff", marginBottom: "2rem" }}>
        Construction Quote Generator
      </h1>

      {/* Client & Project Info */}
      <fieldset style={{ border: "1px solid #ddd", padding: "1rem 1.5rem", marginBottom: "2rem", borderRadius: 6 }}>
        <legend style={{ fontWeight: "bold", color: "#007bff" }}>Client & Project Details</legend>

        <label style={{ display: "block", marginBottom: "1rem" }}>
          Project Name:
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="Project name"
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
          />
        </label>

        <label style={{ display: "block", marginBottom: "1rem" }}>
          Client Name:
          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            placeholder="Client's full name"
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
          />
        </label>

        <label style={{ display: "block", marginBottom: "1rem" }}>
          Client Contact (Phone / Email):
          <input
            type="text"
            value={clientContact}
            onChange={(e) => setClientContact(e.target.value)}
            placeholder="Contact details"
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
          />
        </label>

        <label style={{ display: "block", marginBottom: "1rem" }}>
          Project Location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="City, State, etc."
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
          />
        </label>
      </fieldset>

      {/* Project specs */}
      <fieldset style={{ border: "1px solid #ddd", padding: "1rem 1.5rem", marginBottom: "2rem", borderRadius: 6 }}>
        <legend style={{ fontWeight: "bold", color: "#007bff" }}>Project Specifications</legend>

        <label style={{ display: "block", marginBottom: "1rem" }}>
          Project Size ({unit}):
          <input
            type="number"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            placeholder="Enter size"
            min="0"
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
          />
        </label>

        <button
          type="button"
          onClick={() => {
            setUnit((prev) => (prev === "sqm" ? "sqft" : "sqm"));
            setCost(null);
          }}
          style={{
            padding: "0.5rem",
            cursor: "pointer",
            width: "fit-content",
            background: "#f0f0f0",
            borderRadius: "4px",
            border: "1px solid #ccc",
            marginBottom: "1rem",
          }}
        >
          Switch to {unit === "sqm" ? "Square Feet" : "Square Meters"}
        </button>

        <label style={{ display: "block", marginBottom: "1rem" }}>
          Select Service:
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
          >
            {Object.keys(baseRates).map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>

        <label style={{ display: "block", marginBottom: "1rem" }}>
          Project Complexity:
          <select
            value={complexity}
            onChange={(e) => setComplexity(e.target.value)}
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
          >
            {Object.keys(complexityMultipliers).map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
      </fieldset>

      {/* Materials */}
      <fieldset style={{ border: "1px solid #ddd", padding: "1rem 1.5rem", marginBottom: "2rem", borderRadius: 6 }}>
        <legend style={{ fontWeight: "bold", color: "#007bff" }}>Materials List</legend>

        {materials.map(({ id, name, quantity, unitCost }) => (
          <div
            key={id}
            style={{
              display: "grid",
              gridTemplateColumns: "3fr 1fr 2fr 0.5fr",
              gap: "0.5rem",
              marginBottom: "1rem",
              alignItems: "center",
            }}
          >
            <input
              type="text"
              placeholder="Material Name"
              value={name}
              onChange={(e) => handleMaterialChange(id, "name", e.target.value)}
              style={{ padding: "0.5rem" }}
            />
            <input
              type="number"
              placeholder="Qty"
              value={quantity}
              min="0"
              onChange={(e) => handleMaterialChange(id, "quantity", e.target.value)}
              style={{ padding: "0.5rem" }}
            />
            <input
              type="number"
              placeholder="Unit Cost (₹)"
              value={unitCost}
              min="0"
              onChange={(e) => handleMaterialChange(id, "unitCost", e.target.value)}
              style={{ padding: "0.5rem" }}
            />
            <button
              type="button"
              onClick={() => removeMaterial(id)}
              style={{
                background: "#dc3545",
                border: "none",
                color: "white",
                padding: "0.3rem 0.5rem",
                cursor: "pointer",
                borderRadius: "4px",
                fontWeight: "bold",
              }}
              title="Remove material"
            >
              &times;
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={addMaterial}
          style={{
            background: "#007bff",
            color: "white",
            border: "none",
            padding: "0.5rem 1rem",
            cursor: "pointer",
            borderRadius: "6px",
          }}
        >
          + Add Material
        </button>
      </fieldset>

      {/* Labor and other costs */}
      <fieldset style={{ border: "1px solid #ddd", padding: "1rem 1.5rem", marginBottom: "2rem", borderRadius: 6 }}>
        <legend style={{ fontWeight: "bold", color: "#007bff" }}>Labor & Additional Costs</legend>

        <label style={{ display: "block", marginBottom: "1rem" }}>
          Labor Hours:
          <input
            type="number"
            value={laborHours}
            min="0"
            onChange={(e) => setLaborHours(e.target.value)}
            placeholder="Enter labor hours (optional)"
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
          />
        </label>

        <label style={{ display: "block", marginBottom: "1rem" }}>
          Labor Rate (₹ per hour):
          <input
            type="number"
            value={laborRate}
            min="0"
            onChange={(e) => setLaborRate(e.target.value)}
            placeholder="Labor hourly rate"
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
          />
        </label>

        <label style={{ display: "block", marginBottom: "1rem" }}>
          Permits / Fees (₹):
          <input
            type="number"
            value={permitsCost}
            min="0"
            onChange={(e) => setPermitsCost(e.target.value)}
            placeholder="Permits and fees"
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
          />
        </label>

        <label style={{ display: "block", marginBottom: "1rem" }}>
          Contingency Percentage (%):
          <input
            type="number"
            value={contingencyPercent}
            min="0"
            max="100"
            onChange={(e) => setContingencyPercent(e.target.value)}
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
          />
        </label>
      </fieldset>

      <button
        onClick={calculate}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          padding: "1rem",
          fontWeight: "bold",
          width: "100%",
          borderRadius: "6px",
          cursor: "pointer",
          marginBottom: "2rem",
        }}
      >
        Calculate Detailed Quote
      </button>

      {/* Result Section */}
      {cost && (
        <section
          style={{
            background: "#f0f7ff",
            padding: "1.5rem",
            borderRadius: "6px",
            border: "1px solid #cce0ff",
          }}
        >
          <h2 style={{ color: "#007bff", marginBottom: "1rem" }}>
            Quote Summary
          </h2>

          <p>
            <strong>Project:</strong> {projectName || "N/A"}
          </p>
          <p>
            <strong>Client Name:</strong> {clientName || "N/A"}
          </p>
          <p>
            <strong>Contact:</strong> {clientContact || "N/A"}
          </p>
          <p>
            <strong>Location:</strong> {location || "N/A"}
          </p>

          <hr style={{ margin: "1rem 0" }} />

          <p>
            <strong>Project Size:</strong> {cost.size} {cost.unit}
          </p>
          <p>
            <strong>Service Selected:</strong> {service}
          </p>
          <p>
            <strong>Base Rate:</strong> ₹{cost.baseRate} per {cost.unit}
          </p>
          <p>
            <strong>Complexity Multiplier:</strong> x{cost.complexityMultiplier} (
            {complexity})
          </p>

          <hr style={{ margin: "1rem 0" }} />

          <h3>Materials</h3>
          {materials.length ? (
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginBottom: "1rem",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      border: "1px solid #ccc",
                      padding: "0.5rem",
                      textAlign: "left",
                    }}
                  >
                    Name
                  </th>
                  <th
                    style={{
                      border: "1px solid #ccc",
                      padding: "0.5rem",
                      textAlign: "right",
                      width: "10%",
                    }}
                  >
                    Qty
                  </th>
                  <th
                    style={{
                      border: "1px solid #ccc",
                      padding: "0.5rem",
                      textAlign: "right",
                      width: "20%",
                    }}
                  >
                    Unit Cost (₹)
                  </th>
                  <th
                    style={{
                      border: "1px solid #ccc",
                      padding: "0.5rem",
                      textAlign: "right",
                      width: "20%",
                    }}
                  >
                    Total (₹)
                  </th>
                </tr>
              </thead>
              <tbody>
                {materials.map(({ id, name, quantity, unitCost }) => {
                  const q = parseFloat(quantity);
                  const u = parseFloat(unitCost);
                  const total = !isNaN(q) && !isNaN(u) ? q * u : 0;
                  if (!name) return null; // skip empty name rows
                  return (
                    <tr key={id}>
                      <td
                        style={{
                          border: "1px solid #ccc",
                          padding: "0.5rem",
                          textAlign: "left",
                        }}
                      >
                        {name}
                      </td>
                      <td
                        style={{
                          border: "1px solid #ccc",
                          padding: "0.5rem",
                          textAlign: "right",
                        }}
                      >
                        {q}
                      </td>
                      <td
                        style={{
                          border: "1px solid #ccc",
                          padding: "0.5rem",
                          textAlign: "right",
                        }}
                      >
                        {u.toFixed(2)}
                      </td>
                      <td
                        style={{
                          border: "1px solid #ccc",
                          padding: "0.5rem",
                          textAlign: "right",
                        }}
                      >
                        {total.toFixed(2)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <p>No materials added.</p>
          )}

          <p>
            <strong>Materials Cost:</strong> ₹{cost.materialsCost}
          </p>
          <p>
            <strong>Labor Cost:</strong> ₹{cost.laborCost}
          </p>
          <p>
            <strong>Complexity Adjustment:</strong> +₹{cost.complexityExtra}
          </p>
          <p>
            <strong>Permits / Fees:</strong> ₹{cost.permits}
          </p>
          <p>
            <strong>Contingency ({cost.contingencyPercent}%):</strong> ₹
            {cost.contingency}
          </p>

          <hr style={{ margin: "1rem 0" }} />

          <p>
            <strong>Subtotal (before GST):</strong> ₹
            {(parseFloat(cost.totalCost) - parseFloat(cost.gst)).toFixed(2)}
          </p>
          <p>
            <strong>GST (18%):</strong> ₹{cost.gst}
          </p>

          <hr style={{ margin: "1rem 0" }} />

          <h3>Total Estimated Cost: ₹{cost.totalCost}</h3>

          <button
            onClick={downloadPdf}
            style={{
              marginTop: "1.5rem",
              padding: "1rem",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "6px",
              fontWeight: "bold",
              width: "100%",
            }}
          >
            Download Quote as PDF
          </button>
        </section>
      )}

      {!cost && (
        <p style={{ textAlign: "center", color: "#888", marginTop: "2rem" }}>
          Fill in project details and click &quot;Calculate Detailed Quote&quot; to
          see the estimate.
        </p>
      )}
    </div>
  );
}
