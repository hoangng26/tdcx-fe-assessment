import StorageService from "@/services/StorageService";
import { Todo } from "@/types";
import { useEffect, useState } from "react";

export default function useTodo() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);

  const updateTodos = async (data: Todo[]) => {
    setLoading(true);
    return StorageService.setItem("todos", JSON.stringify(data)).then(() => {
      setLoading(false);
      setTodos(data);
    });
  };

  const addTodo = (title: string, description?: string) => {
    const newTodo: Todo = {
      id: StorageService.generateRandomUUID(),
      title,
      description,
      completed: false,
    };
    return updateTodos([newTodo, ...todos]);
  };

  const updateTodo = (id: string, updates: Partial<Todo>) => {
    return updateTodos(todos.map((todo) => (todo.id === id ? { ...todo, ...updates } : todo)));
  };

  const deleteTodo = (id: string) => {
    return updateTodos(todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    setLoading(true);
    StorageService.getItem("todos").then((data) => {
      setTodos(data ? JSON.parse(<string>data) : []);
      setLoading(false);
    });
  }, []);

  return {
    todos,
    loading,
    addTodo,
    updateTodo,
    deleteTodo,
  };
}
