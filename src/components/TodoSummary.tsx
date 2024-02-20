import { useState } from "react";
import { Todo } from "../types/todo";

interface TodoSummaryProps {
  todos: Todo[];
  deleteAllTodo: () => void;
}

interface AskUserProps{
  deleteAllTodo: ()=>void;
  appear:()=>void;
}

function AskUser({deleteAllTodo,appear} : AskUserProps) {
  return (
    <>
    <div className="absolute top-0 left-0 w-svw h-svh bg-zinc-950 opacity-20" onClick={appear}></div>
      <div className="absolute z-10 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-white w-3/12 h-1/12 p-5 rounded">
        <h4 className="font-medium  text-lg">Are you sure?</h4>
        <div className="mt-4 flex justify-around">
          <button className="text-lg bg-red-500 p-2 rounded w-16 text-white"
          onClick={()=>{
            deleteAllTodo();
            appear();
          }}
          >Yes</button>
          <button className="text-lg bg-gray-500 p-2 rounded w-16 text-white"
          onClick={appear}
          >No</button>
        </div>
      </div>
    </>
  );
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
      {ask && <AskUser deleteAllTodo={deleteAllTodo} appear={setAppear}/>}
    </div>
  );
}
