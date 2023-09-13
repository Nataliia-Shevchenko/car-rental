import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Home from "./pages/home/Home";
import Catalog from "./pages/catalog/Catalog";
import Favorites from "./pages/favorites/Favorites";
import "./App.css";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
