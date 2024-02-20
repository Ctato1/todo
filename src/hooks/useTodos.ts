import { useEffect, useState } from "react";
import { Todo } from "../types/todo";
import { todoData } from "../data/todos";

export default function useTodos(){
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
      return{
        todos,
        animation,
        setTodoCompleted,
        setInputValue,
        deleteTodos,
        deleteAllTodo,
      }
}