import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import JsonToToonPage from "./pages/JsonToToonPage";
import CsvToToonPage from "./pages/CsvToToonPage";
import ApiPage from "./pages/ApiPage";
import WhatIsToonPage from "./pages/WhatIsToonPage";
import { ApiDocumentationPage } from "./pages/ApiDocumentationPage";
import { Analytics } from '@vercel/analytics/react';
import Clarity from '@microsoft/clarity';
import { useEffect } from "react";

export default function App() {

  useEffect(() => {
    const projectId = import.meta.env.VITE_CLARITY_PROJECT_ID;
    Clarity.init(projectId);
  }, []);

  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/json-to-toon" element={<JsonToToonPage />} />
        <Route path="/csv-to-toon" element={<CsvToToonPage />} />
        <Route path="/api" element={<ApiPage />} />
        <Route path="/api-docs" element={<ApiDocumentationPage />} />
        <Route path="/what-is-toon" element={<WhatIsToonPage />} />
      </Routes>
    </BrowserRouter>
    <Analytics />
  </>
}