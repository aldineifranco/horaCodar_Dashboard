import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Info } from "../pages/Info";
import { App } from "../App";


export function AppRoutes() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}