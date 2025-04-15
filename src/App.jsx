import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Courses from "./Pages/Courses";
import Contacts from "./Pages/Contact";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />        
        <Route path="/about" element={<About />} />        
        <Route path="/courses" element={<Courses />} />        
        <Route path="/contacts" element={<Contacts />} />        
        {/* 404 sahifa uchun */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
