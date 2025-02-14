import { Route, Routes } from "react-router";
import RootLayout from "./components/layouts";
import HomePage from "./pages/Home";
import TodoPage from "./pages/Todo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/to-do" element={<TodoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
