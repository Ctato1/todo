import { useEffect, useState } from "react";
import { todoData } from "./data/todos";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import { Todo } from "./types/todo";

function App() {
  // const localTodos=JSON.parse(localStorage.getItem('todos') || "[]");
  const [todos, setTodos] = useState(()=>{
    const localTodos:Todo[] =JSON.parse(localStorage.getItem('todos') || "[]");
    return localTodos.length > 0 ? localTodos : todoData
  })
  const [animation, setAnimatin] = useState<number>(0)

  useEffect(() => {
   
    localStorage.setItem('todos', JSON.stringify(todos))
    console.log(todos);
    
  }, [todos])
  

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos(prev => prev.map(item => (item.id === id ? { ...item, completed } : item)));
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

  function deleteAllTodo(){
    setTodos(prev=> prev.filter(todo => !todo.completed))
  }

  return (
    <main className="py-10  h-screen space-y-5">
      <h1 className="font-bold text-3xl text-center">Your Todos</h1>
      <div className="max-w-lg mx-auto bg-slate-200 rounded-md p-4">
      <AddTodoForm onSubmit={setInputValue}/>
       <TodoList todos={todos} onCompleteChange={setTodoCompleted} onDelete={deleteTodos} animation={animation}/>
      </div>
      <TodoSummary todos={todos} deleteAllTodo={deleteAllTodo}/>
    </main>
  );
}

export default App;
