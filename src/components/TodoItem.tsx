import { Todo } from "../types/todo";
interface TodoItemProps {
  todo: Todo;
  onCompleteChange: (id:number,completed:boolean)=> void;
}

export default function TodoItem({ todo,onCompleteChange }: TodoItemProps) {

  return (
    <div className="space-y-2 " key={todo.id}>
      <label className="flex w-96 gap-2 items-center border rounded-md p-3 border-gray-400 bg-white hover:bg-slate-50 cursor-pointer">
        <input type="checkbox" className="scale-125" 
        checked={todo.completed}
        onChange={(e)=>onCompleteChange(todo.id,e.target.checked)}
        />
        <span className={todo.completed ? 'line-through text-gray-300' : ''}>
            {todo.title}
        </span>  
      </label>
    </div>
  );
}
