import { Routes,Route } from "react-router-dom";
import HomePage from "./pages/Home-Page";
import CartPage from "./pages/cart-page";
import ProductPage from "./pages/product-page";
function App() {
   return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="cart" element={<CartPage/>} />
      <Route path="product-page" element={<ProductPage/>} />
    </Routes>
    </>
  )
}

export default App;
