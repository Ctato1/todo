import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onCompleteChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
  animation: number;
}

export default function TodoList({
  todos,
  onCompleteChange,
  onDelete,
  animation,
}: TodoListProps) {
  const sortedTodos = todos.sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id;
    }
    return a.completed ? 1 : -1;
  });

  return (
    <div className="space-y-2">
      {sortedTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onCompleteChange={onCompleteChange}
          onDeleteChange={onDelete}
          animation={animation}
        />
      ))}
      {todos.length === 0 && (
        <h4 className="animate-pulse flex gap-1 justify-center items-center text-blue-400 text-sm">
          No Todos. add some
          <span className="font-bold text-blue-700"> TODOS</span>
        </h4>
      )}
    </div>
  );
}
