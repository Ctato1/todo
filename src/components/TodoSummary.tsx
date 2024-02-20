import { useState } from "react";
import { Todo } from "../types/todo";
import UserConfirmation from "./UserConfirmation";

interface TodoSummaryProps {
  todos: Todo[];
  deleteAllTodo: () => void;
}



export default function TodoSummary({
  todos,
  deleteAllTodo,
}: TodoSummaryProps) {
  const completedTodos = todos.filter((prev) => prev.completed);
  const [ask, setAsk] = useState(false);
  function setAppear(){
    setAsk(false)
  }
  return (
    <div className="text-center">
      <p className=" text-sm font-medium">
        {completedTodos.length}/{todos.length} todos completed
      </p>
      {completedTodos.length > 0 && (
        <button
          onClick={() => setAsk(true)}
          className="mt-3 p-1 text-white bg-red-500 border-solid  rounded ease-in duration-300  hover:text-red-600 hover:bg-white"
        >
          Delete Completed Todos
        </button>
      )}
      {ask && <UserConfirmation deleteAllTodo={deleteAllTodo} appear={setAppear}/>}
    </div>
  );
}
