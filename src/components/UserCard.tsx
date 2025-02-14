import { User } from "@/types";
import React from "react";
import { Link } from "react-router";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

const UserCard: React.FC<{ user: User }> = ({ user }) => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{user.name}</CardTitle>
        <CardDescription>@{user.username}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          <strong>Email:</strong> {user.email}
        </p>

        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
      </CardContent>
      <CardFooter>
        <Button className="ms-auto" asChild>
          <Link to={`/detail/${user.id}`}>More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UserCard;
