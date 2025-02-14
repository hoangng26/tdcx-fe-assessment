import { Route, Routes } from "react-router";
import RootLayout from "./components/layouts";
import HomePage from "./pages/Home";
import SearchFilterPage from "./pages/SearchFilter";
import TodoPage from "./pages/Todo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/to-do" element={<TodoPage />} />
        <Route path="/search-filter" element={<SearchFilterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
