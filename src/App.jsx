import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import AppLayout from "./layouts/AppLayout";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Services from "./pages/services/Services";
import Product from "./pages/products/Product";
import Contact from "./pages/contact/Contact";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
