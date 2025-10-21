import React from "react";

// Child component
interface UserProps {
  name: string;
}
const User = ({ name }: UserProps): React.ReactElement => <li>{name}</li>;

// Parent component
const ConditionalListExample = (): React.ReactElement => {
  const isLoggedIn = true; // Conditional Rendering için
  const users = ["Nurvural", "React Dev", "JS Master"]; // List Rendering

  return (
    <div style={{ border: "3px solid purple", padding: "10px", margin: "10px" }}>
      <h1>Conditional & List Rendering Örneği</h1>

      {/* Conditional Rendering */}
      {isLoggedIn ? <p>Hoşgeldiniz!</p> : <p>Lütfen giriş yapın.</p>}

      {/* List Rendering + Component Composition */}
      <ul>
        {users.map((user, index) => (
          <User key={index} name={user} />
        ))}
      </ul>
    </div>
  );
};

export default ConditionalListExample;
