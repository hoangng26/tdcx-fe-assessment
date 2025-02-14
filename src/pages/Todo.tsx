import AddTodoForm from "@/components/Todo/AddTodoForm";
import TodoList from "@/components/Todo/TodoList";
import useTodo from "@/hooks/useTodo";

const TodoPage: React.FC = () => {
  const { todos, addTodo, deleteTodo, updateTodo } = useTodo();

  return (
    <div className="mx-auto max-w-2xl p-6">
      <h1 className="mb-8 text-3xl font-bold">Todo List</h1>
      <AddTodoForm onAdd={addTodo} />
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoPage;
