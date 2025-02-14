import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useTodo from "@/hooks/useTodo";
import { Todo } from "@/types";
import cx from "classnames";
import { Edit, Save, Trash2, X } from "lucide-react";
import React, { useState } from "react";

interface TodoItemProps {
  todo: Todo;
  onUpdate: ReturnType<typeof useTodo>["updateTodo"];
  onDelete: ReturnType<typeof useTodo>["deleteTodo"];
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [editedDescription, setEditedDescription] = useState(todo.description || "");

  const handleSave = () => {
    onUpdate(todo.id, {
      title: editedTitle,
      description: editedDescription || undefined,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTitle(todo.title);
    setEditedDescription(todo.description || "");
    setIsEditing(false);
  };

  return (
    <Card className="mb-4">
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <Checkbox
            checked={todo.completed}
            onCheckedChange={(checked) => onUpdate(todo.id, { completed: checked === true })}
            className="mt-1"
          />

          <div className="flex-1">
            {isEditing ? (
              <div className="space-y-2">
                <Input
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  placeholder="Todo title"
                  className="w-full"
                />
                <Textarea
                  value={editedDescription}
                  onChange={(e) => setEditedDescription(e.target.value)}
                  placeholder="Description (optional)"
                  className="w-full resize-none"
                />
              </div>
            ) : (
              <div>
                <h3
                  className={cx("font-medium", {
                    "text-gray-500 line-through": todo.completed,
                  })}
                >
                  {todo.title}
                </h3>
                {todo.description && (
                  <p
                    className={cx("mt-1 text-sm", {
                      "text-gray-500 line-through": todo.completed,
                      "text-gray-600": !todo.completed,
                    })}
                  >
                    {todo.description}
                  </p>
                )}
              </div>
            )}
          </div>

          <div className="flex gap-2">
            {isEditing ? (
              <>
                <Button size="icon" variant="outline" onClick={handleSave}>
                  <Save className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" onClick={handleCancel}>
                  <X className="h-4 w-4" />
                </Button>
              </>
            ) : (
              <>
                <Button size="icon" variant="outline" onClick={() => setIsEditing(true)}>
                  <Edit className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" onClick={() => onDelete(todo.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TodoItem;
