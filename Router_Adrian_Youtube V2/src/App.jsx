import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Marketing from "./components/Services/Marketing/Marketing";
import Development from "./components/Services/Development/Development";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />}>
          <Route path="/services/development" element={<Development />} />
          <Route path="/services/marketing" element={<Marketing />} />
        </Route>
        <Route path="/profil/:id" element={<Profile />} />
        {/* <Route path="/profil/*" element={<Services />} /> */}
      </Routes>
    </div>
  );
}

export default App;
