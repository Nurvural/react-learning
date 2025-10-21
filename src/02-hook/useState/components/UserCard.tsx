import { useState } from "react";

interface User {
  name: string;
  age: number;
}

const UserCard = () => {
  const [user, setUser] = useState<User>({ name: "Nurvural", age: 25 });

  const handleIncreaseAge = () =>
    setUser((prev) => ({ ...prev, age: prev.age + 1 }));

  return (
    <section style={{ marginBottom: 32 }}>
      <h2>🪪 Kullanıcı Bilgisi</h2>
      <p>Ad: {user.name}</p>
      <p>Yaş: {user.age}</p>
      <button onClick={handleIncreaseAge}>Yaşı Artır</button>
    </section>
  );
};

export default UserCard;
