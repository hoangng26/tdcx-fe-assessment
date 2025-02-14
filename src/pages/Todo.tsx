import AddTodoForm from "@/components/Todo/AddTodoForm";
import TodoList from "@/components/Todo/TodoList";
import { Button } from "@/components/ui/button";
import Loading from "@/components/ui/loading";
import useTodo from "@/hooks/useTodo";

const TodoPage: React.FC = () => {
  const { todos, addTodo, deleteTodo, updateTodo, loading } = useTodo();

  return (
    <div className="mx-auto max-w-2xl p-6">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Todo List</h1>

        <AddTodoForm onAdd={addTodo} trigger={<Button>Add New</Button>} loading={loading} />
      </div>

      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />

      <Loading show={loading} />
    </div>
  );
};

export default TodoPage;
