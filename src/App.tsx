import { useState } from "react";
import FormInput from "./components/FormInput";
import TodoList from "./components/TodoList";
import { Todo } from "./model";
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const addHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <main className="h-screen w-screen bg-blue-500 flex items-center space-y-10 flex-col font-primary p-16 flex-wrap">
      <h1 className=" uppercase text-3xl font-bold z-10  text-white text-center">
        Taskify
      </h1>
      <FormInput todo={todo} setTodo={setTodo} addHandler={addHandler} />
      <TodoList todos={todos} setTodos={setTodos} />
    </main>
  );
};

export default App;
