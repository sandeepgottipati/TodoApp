import { useRef, useState } from "react";
import { Todo } from "../model";
import { FaRegPenToSquare } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
interface props {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  todos: Todo[];
}
const TodoItem = (props: props) => {
  const { todo, setTodos, todos } = props;
  const [editTodo, setEditTodo] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const editHandler = () => {
    if (!editTodo) {
      setEditTodo(true);
    } else {
      setEditTodo(false);
    }
  };
  const doneHandler = (id: number) => {
    let index = todos.findIndex((todo) => todo.id === id);
    todos[index].isDone = true;
    setTodos([...todos]);
  };
  const deleteHandler = (id: number) => {
    const updatedItems: Todo[] = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos([...updatedItems]);
  };
  //form handler
  const formHandler = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    let index = todos.findIndex((todo) => {
      return todo.id === id;
    });

    todos[index].todo = inputRef.current?.value ?? "";
    setTodos([...todos]);
    setEditTodo(false);
  };
  return (
    <div
      className={`w-50% bg-white flex flex-wrap gap-x-4 gap-y-4 rounded-lg items-center p-6 hover: ${
        todo.isDone ? "bg-green-400 line-through" : "bg-red-400  "
      } transition duration-300`}
      key={todo.id}
    >
      <div className="w-[70%]">
        {editTodo ? (
          <form onSubmit={(e) => formHandler(e, todo.id)}>
            <input
              className="w-full focus:outline-none px-2 rounded-lg "
              ref={inputRef}
            />
          </form>
        ) : (
          <span>{todo.todo}</span>
        )}
      </div>
      <div className="flex flex-row space-x-4 flex-wrap">
        <button onClick={editHandler}>
          <FaRegPenToSquare />
        </button>
        <button onClick={() => doneHandler(todo.id)}>
          <TiTick />
        </button>
        <button onClick={() => deleteHandler(todo.id)}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
};
export default TodoItem;
