import { Todo } from "@/types";
import React from "react";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: Todo[];
  updateTodo: (id: string, updates: Partial<Todo>) => void;
  deleteTodo: (id: string) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, updateTodo, deleteTodo }) => {
  return (
    <div className="space-y-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onUpdate={updateTodo} onDelete={deleteTodo} />
      ))}
      {todos.length === 0 && <p className="text-center text-gray-500">No todos yet. Add one above!</p>}
    </div>
  );
};

export default TodoList;
