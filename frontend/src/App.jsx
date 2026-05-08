import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Stores from "./pages/Stores";
import AdminPanel from "./pages/AdminPanel";
import OwnerDashboard from "./pages/OwnerDashboard";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/stores" element={<Stores />} />
                <Route path="/admin" element={<AdminPanel />} />
                <Route path="/owner" element={<OwnerDashboard />} />
            </Routes>
        </BrowserRouter>
    );
}