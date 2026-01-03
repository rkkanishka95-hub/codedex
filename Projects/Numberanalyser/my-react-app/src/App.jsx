import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const nums = input.split(",").map(n => Number(n.trim()));

    if (nums.length < 1 || nums.some(isNaN)) {
      alert("Please enter valid numbers separated by commas 🙂");
      return;
    }

    const total = nums.reduce((a, b) => a + b, 0);
    const average = (total / nums.length).toFixed(2);
    const largest = Math.max(...nums);
    const smallest = Math.min(...nums);

    setResult({ total, average, largest, smallest });
  };

  return (
    <div className="app-container">
      <div className="card colorful-card">
        <h2>📊 Number Analyzer</h2>

        <input
          type="text"
          placeholder="Enter numbers separated by commas"
          value={input}
          onChange={e => setInput(e.target.value)}
        />

        <button onClick={calculate}>Analyze</button>

        {result && (
          <div className="result-box colorful-result">
            <p><strong>Sum:</strong> {result.total}</p>
            <p><strong>Average:</strong> {result.average}</p>
            <p><strong>Largest Number:</strong> {result.largest}</p>
            <p><strong>Smallest Number:</strong> {result.smallest}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
