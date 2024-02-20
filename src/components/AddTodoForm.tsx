import { useState } from "react";

interface AddTodoFormProps{
    onSubmit: (title:string) => void;
}

export default function AddTodoForm ({onSubmit}:AddTodoFormProps) {
    const [value, setValue] = useState('')


    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        if(!value.trim()) return;

        onSubmit(value)
        setValue('')
    }

  return (
    <form className="flex pb-4" onSubmit={handleSubmit}>
        <input type="text"  
        placeholder="Enter TODO"
        className="rounded-s-md grow border border-gray-400 p-2 outline-none placeholder:italic"
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        />
        <button
        type="submit"
        className="w-16 rounded-e-md bg-slate-800 text-center text-white duration-200 hover:bg-slate-700"
        >Add</button>
    </form>
  )
}
