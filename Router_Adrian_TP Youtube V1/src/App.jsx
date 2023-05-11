import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Articles from "./routes/Articles";
import Contact from "./routes/Contact";
import Navbar from "./Components/Navbar/";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
