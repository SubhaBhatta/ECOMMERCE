import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/home";
import About from "./pages/about";
import ContactUs from "./components/contacts/ContactUs";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<ContactUs />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
