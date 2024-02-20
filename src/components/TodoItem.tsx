import { Trash2Icon } from "lucide-react";
import { Todo } from "../types/todo";
interface TodoItemProps {
  todo: Todo;
  onCompleteChange: (id:number,completed:boolean)=> void;
  onDeleteChange: (id:number)=> void;
  animation:number;
}

export default function TodoItem({ todo,onCompleteChange,onDeleteChange,animation }: TodoItemProps) {

  return (
    <div className="gap-2 flex items-center overflow-hidden">
      <label className={`flex grow gap-2 items-center border rounded-md p-3 border-gray-400 bg-white hover:bg-slate-50 cursor-pointer ${animation === todo.id ? 'animate-pulse' : ''}`}>
        <input type="checkbox" className="scale-125" 
        checked={todo.completed}
        onChange={(e)=>onCompleteChange(todo.id,e.target.checked)}
        />
        <span className={`${todo.completed ? 'line-through text-gray-300' : ''}`}>
            {todo.title}
        </span>  
      </label>
      <button className="p-2"
      onClick={()=>onDeleteChange(todo.id)}
      >
        <Trash2Icon size={25} className="text-gray-600"/>
      </button>
    </div>
  );
}
// ${animation ? 'animate-ping' : ''}