import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import Product from "./components/Product";
import ProductScreen from "./screens/ProductScreen";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
