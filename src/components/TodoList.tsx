import { Todo } from "../model";
import TodoItem from "./TodoItem";
interface props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<props> = ({ todos, setTodos }) => {
  if (todos.length === 0) {
    return (
      <div className="flex  bg-white items-center p-4 rounded-lg">
        <h2 className="text-3xl font-semibold ">
          No Task Left!! Go ahead and add some more tasks.
        </h2>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 items-center  overflow-y-scroll   bg-white rounded-lg shadow-xl w-[90%] md:max-w-2xl p-10">
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
