import { Route, Routes } from "react-router";
import RootLayout from "./components/layouts";
import CounterPage from "./pages/Counter";
import FormValidationPage from "./pages/FormValidation";
import HomePage from "./pages/Home";
import SearchFilterPage from "./pages/SearchFilter";
import TodoPage from "./pages/Todo";
import UserDetailPage from "./pages/UserDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/to-do" element={<TodoPage />} />
        <Route path="/search-filter" element={<SearchFilterPage />} />
        <Route path="/detail/:id" element={<UserDetailPage />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/validation" element={<FormValidationPage />} />
      </Route>
    </Routes>
  );
}

export default App;
