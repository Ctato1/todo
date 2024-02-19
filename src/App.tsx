import { useState } from "react";
import { todoData } from "./data/todos";
import TodoItem from "./components/TodoItem";
import AddTodoForm from "./components/AddTodoForm";

function App() {
  const [todos, setTodos] = useState(todoData)

  function setTodoCompleted(id:number,completed:boolean){
    setTodos(prev=> prev.map(item=>(item.id === id ? {...item,completed} : item)))
  }
  function setInputValue(title: string){
    setTodos(prev=> [{title:title,completed:false,id:Date.now()}, ...prev])
  }

  return (
    <main className="py-10  h-screen space-y-5">
      <h1 className="font-bold text-3xl text-center">Your Todos</h1>
      <div className="max-w-lg mx-auto bg-slate-200 rounded-md p-4">
      <AddTodoForm onSubmit={setInputValue}/>
        <div className="space-y-2">
          {
            todos.map(todo=>(
              <TodoItem todo={todo} onCompleteChange={setTodoCompleted}/>
            ))
          }
        </div>
      </div>
    </main>
  );
}

export default App;
