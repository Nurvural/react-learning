import { useState } from "react";
const NameForm = () => {
  const [name, setName] = useState("");

  return (
    <section style={{ marginBottom: 32 }}>
      <h2>👤 Kullanıcı Adı</h2>
      <input
        type="text"
        placeholder="Adınızı girin..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Merhaba, {name || "Ziyaretçi"} 👋</p>
    </section>
  );
};

export default NameForm;
