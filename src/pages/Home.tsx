import React from "react";
import { Link } from "react-router";

const HomePage: React.FC = () => {
  return (
    <div className="mx-auto w-fit">
      <h1 className="text-center text-4xl font-bold">Welcome to the Home Page</h1>
      <p className="text-center text-lg">This is a simple home page</p>

      <ul className="mt-4 grid gap-4">
        <li className="hover:underline">
          <Link to="/to-do">Task 1: Build a Todo List App</Link>
        </li>
        <li className="hover:underline">
          <Link to="/search-filter">
            Task 2: Build a Search Filter Component & Task 4: API Integration with Error Handling and Loading States &
            Task 6: Design a Card Component with Props
          </Link>
        </li>
        <li className="hover:underline">
          <Link to="/counter">Task 5: Build a Counter Component with Custom Hook</Link>
        </li>
        <li className="hover:underline">
          <Link to="/validation">Task 7: Build a Simple Form with Validation</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
