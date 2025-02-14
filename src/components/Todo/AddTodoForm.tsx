import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useTodo from "@/hooks/useTodo";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

interface AddTodoFormProps {
  onAdd: ReturnType<typeof useTodo>["addTodo"];
  trigger?: React.ReactNode;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAdd, trigger }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      setIsOpen(false);
      onAdd(title, description.trim() || undefined);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger || <Button>Add New</Button>}</DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Todo</DialogTitle>
          <DialogDescription>Fill in the details below to add a new todo.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="What needs to be done?"
              required
            />
          </div>
          <div>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add a description (optional)"
              className="resize-none"
            />
          </div>
          <Button type="submit" className="w-full">
            <Plus className="mr-2 h-4 w-4" /> Add Todo
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoForm;
