import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import JsonToToonPage from "./pages/JsonToToonPage";
import ApiPage from "./pages/ApiPage";

export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/json-to-toon" element={<JsonToToonPage />} />
      <Route path="/api" element={<ApiPage />} />
    </Routes>
  </BrowserRouter>;
}