import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home-Page";
import CartPage from "./pages/cart-page";
import ProductPage from "./pages/product-page";
import AllProductsPage from "./pages/all-Products-Page";
import WishlistPage from "./pages/wishlist-page";
import { Toaster } from "react-hot-toast";
import TopButton from "./components/top-btn";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="Product/:id" element={<ProductPage />} />
        <Route path="all-products" element={<AllProductsPage />} />
        <Route path="wishlist" element={<WishlistPage />} />
      </Routes>
      <Toaster position="top-right" />
      <TopButton />
    </>
  )
}

export default App;
