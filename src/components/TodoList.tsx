import { Todo } from "../model";
import TodoItem from "./TodoItem";
interface props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<props> = ({ todos, setTodos }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 items-center bg-white rounded-lg shadow-xl w-[90%] md:max-w-2xl p-10">
      {todos.map((todo) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
          />
        );
      })}
    </div>
  );
};
export default TodoList;
