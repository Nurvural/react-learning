import React, { useState } from "react";

// Sayacı gösteren component
const Counter = (): React.ReactElement => {
  // State tanımı
  const [count, setCount] = useState<number>(0);

  // Event handler
  const handleIncrement = (): void => {
    setCount(count + 1);
  };

  const handleDecrement = (): void => {
    setCount(count - 1);
  };

  return (
    <div style={{ border: "3px solid green", padding: "10px", margin: "10px" }}>
      <h2>Sayac: {count}</h2>
      <button onClick={handleIncrement}>Arttır</button>
      <button onClick={handleDecrement}>Azalt</button>
    </div>
  );
};

// Örnek parent component
const StateExample = (): React.ReactElement => {
  return (
    <div>
      <h1>State ve Event Handling Örneği</h1>
      <Counter />
    </div>
  );
};

export default StateExample;
