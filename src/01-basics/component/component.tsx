// UserCardExample.tsx
import React from "react";

// Props tipi
interface UserCardProps {
  name: string;
  email: string;
  age: number;
}

// Tek bir kullanıcı kartı componenti
const UserCard = ({ name, email, age }: UserCardProps): React.ReactElement => {
  return (
    <div style={{ border: "3px solid gray", padding: "10px", margin: "10px" }}>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Yaş: {age}</p>
    </div>
  );
};

// Örnek component: veriyi kendi içinde tutuyor
const UserCardExample = (): React.ReactElement => {
  const users = [
    { name: "Nurvural", email: "nurvural@example.com", age: 26 },
    { name: "React Dev", email: "reactdev@example.com", age: 30 },
  ];

  return (
    <div>
      <h1>Kullanıcı Listesi</h1>
      {users.map((user, index) => (
        <UserCard
          key={index}
          name={user.name}
          email={user.email}
          age={user.age}
        />
      ))}
    </div>
  );
};

export default UserCardExample;
