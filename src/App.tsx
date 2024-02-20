import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodos from "./hooks/useTodos";

function App() {
 
  const {
    todos,
        animation,
        setTodoCompleted,
        setInputValue,
        deleteTodos,
        deleteAllTodo,
  } = useTodos();

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
