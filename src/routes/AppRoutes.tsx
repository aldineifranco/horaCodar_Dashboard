import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Info } from "../pages/Info";


export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
}