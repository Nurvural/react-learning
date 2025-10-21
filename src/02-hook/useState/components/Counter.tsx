import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <section style={{ marginBottom: 32 }}>
      <h2>🔢 Sayaç: {count}</h2>
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={() => setCount((prev) => prev + 1)}>Artır</button>
        <button onClick={() => setCount((prev) => prev - 1)}>Azalt</button>
        <button onClick={() => setCount(0)}>Sıfırla</button>
      </div>
    </section>
  );
};

export default Counter;
