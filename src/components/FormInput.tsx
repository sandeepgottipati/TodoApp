interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addHandler: (e: React.FormEvent) => void;
}
const FormInput = ({ todo, setTodo, addHandler }: props) => {
  return (
    <form
      className="flex items-center relative w-[90%] md:max-w-2xl "
      onSubmit={addHandler}
    >
      <input
        type="text"
        placeholder="Enter a task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="min-w-full shadow-lg caret-blue-700
        text-lg    
      rounded-full  h-10 cursor-pointer px-4 hover:backdrop-opacity-50 focus:outline-none"
      />
      <button
        type="submit"
        className="capitalize absolute right-0 rounded-full shadow-lg bg-blue-400 h-[90%] m-2  px-2 hover:bg-blue-200 duration-200 transition"
      >
        go
      </button>
    </form>
  );
};
export default FormInput;
