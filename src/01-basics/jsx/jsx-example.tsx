function JSXExample() {
  const name: string = "Nurvural";
  const age: number = 26;
  const isDeveloper: boolean = true;

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Age: {age}</p>
      <p>{isDeveloper ? "You are a developer 🚀" : "Not a developer yet"}</p>
    </div>
  );
}

export default JSXExample;
