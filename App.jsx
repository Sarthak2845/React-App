import NavBar from "./components/NavBar";
import "./index.css";
import { Routes, Route } from "react-router"; 
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import ErrorPage from "./components/pages/ErrorPage";
import Products, { productsLoader } from "./components/pages/Products";
import ProductLayout from "./layout/ProductLayout"; 

const App = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Product route with layout and nested route for Products */}
          <Route path="/product" element={<ProductLayout />}>
            <Route index element={<Products />} loader={productsLoader} />  {/* Attach loader here */}
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;


