import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";
import { useState } from "react";

interface AddTodoFormProps {
  onAdd: (title: string, description?: string) => void;
}

const AddTodoForm = ({ onAdd }: AddTodoFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title, description.trim() || undefined);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Add New Todo</CardTitle>
      </CardHeader>
      <CardContent>
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
      </CardContent>
    </Card>
  );
};

export default AddTodoForm;
