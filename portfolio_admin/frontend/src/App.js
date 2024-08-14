import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Contact from "./components/Contact";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  return (
    <Router>
      <div className="text-center">
        <Link to="/admin" className="mr-3  p-3 m-3">
          Admin
        </Link>
        <Link to="/">contact</Link>
      </div>

      <Routes>
        <Route path="/" element={<Contact />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
