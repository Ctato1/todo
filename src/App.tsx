import { useState } from "react";
import { todoData } from "./data/todos";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(todoData)
  const [animation, setAnimatin] = useState(Number)

  function setTodoCompleted(id:number,completed:boolean){
    setTodos(prev=> prev.map(item=>(item.id === id ? {...item,completed} : item)))
  }
  function setInputValue(title: string){
    setTodos(prev=> [{title:title,completed:false,id:Date.now()}, ...prev])
  }
  
  function deleteTodos(id: number){
    setAnimatin(id)
    setTimeout(() => {
      setTodos(prev=> prev.filter(todo => todo.id !== id))
      setAnimatin(0)
    }, 1950);

  }

  return (
    <main className="py-10  h-screen space-y-5">
      <h1 className="font-bold text-3xl text-center">Your Todos</h1>
      <div className="max-w-lg mx-auto bg-slate-200 rounded-md p-4">
      <AddTodoForm onSubmit={setInputValue}/>
       <TodoList todos={todos} onCompleteChange={setTodoCompleted} onDelete={deleteTodos} animation={animation}/>
      </div>
    </main>
  );
}

export default App;
