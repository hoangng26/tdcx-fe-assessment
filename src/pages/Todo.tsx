import AddTodoForm from "@/components/AddTodoForm";
import TodoItem from "@/components/TodoItem";
import { Todo } from "@/types";
import { useEffect, useState } from "react";

const TodoPage = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title: string, description?: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title,
      description,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const updateTodo = (id: string, updates: Partial<Todo>) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, ...updates } : todo)));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="mx-auto max-w-2xl p-6">
      <h1 className="mb-8 text-3xl font-bold">Todo List</h1>
      <AddTodoForm onAdd={addTodo} />
      <div className="space-y-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onUpdate={updateTodo} onDelete={deleteTodo} />
        ))}
        {todos.length === 0 && <p className="text-center text-gray-500">No todos yet. Add one above!</p>}
      </div>
    </div>
  );
};

export default TodoPage;
