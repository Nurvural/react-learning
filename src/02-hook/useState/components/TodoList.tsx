import { useState } from "react";
const TodoList = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos((prev) => [...prev, input]);
    setInput("");
  };

  return (
    <section style={{ marginBottom: 32 }}>
      <h2>📝 To-Do List</h2>
      <input
        type="text"
        placeholder="Yeni görev..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Ekle</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
