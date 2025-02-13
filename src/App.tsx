import { Route, Routes } from "react-router";
import RootLayout from "./components/layouts";
import HomePageComponent from "./pages/HomePageComponent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePageComponent />} />
      </Route>
    </Routes>
  );
}

export default App;
