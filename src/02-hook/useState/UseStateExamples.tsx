import Counter from "./components/Counter";
import NameForm from "./components/NameForm";
import TodoList from "./components/TodoList";
import UserCard from "./components/UserCard";

const UseStateExamples = () => {
  return (
    <main style={{border: "3px solid pink",  padding: "10px", margin: "10px" }}>
      <h1>⚙️ useState Örnekleri</h1>
      <Counter />
      <NameForm />
      <UserCard />
      <TodoList />
    </main>
  );
};

export default UseStateExamples;
