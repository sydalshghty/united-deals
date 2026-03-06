import { Routes,Route } from "react-router-dom";
import HomePage from "./pages/Home-Page";
import CartPage from "./pages/cart-page";
import ProductPage from "./pages/product-page";
import { Toaster } from "react-hot-toast";
function App() {
   return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="cart" element={<CartPage/>} />
      <Route path="Product/:id" element={<ProductPage />} />
    </Routes>
    <Toaster position="top-right"/>
    </>
  )
}

export default App;
