import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home-Page";
import CartPage from "./pages/cart-page";
import ProductPage from "./pages/product-page";
import AllProductsPage from "./pages/all-Products-Page";
import WishlistPage from "./pages/wishlist-page";
import { Toaster } from "react-hot-toast";
import TopButton from "./components/top-btn";
import NavbarBottom from "./components/navbar-bottom";
import CustomerPage from "./pages/customer-page";
import PaymentPage from "./pages/paymant-page";
import ProductConfirmation from "./pages/product-confirmation-page";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="Product/:id" element={<ProductPage />} />
        <Route path="all-products" element={<AllProductsPage />} />
        <Route path="wishlist" element={<WishlistPage />} />
        <Route path="customer-information" element={<CustomerPage />} />
        <Route path="paymant-shipping" element={<PaymentPage/>}/>
        <Route path="product-confirmation" element={<ProductConfirmation/>}/>
      </Routes>
      <Toaster position="top-right" />
      <TopButton />
      <NavbarBottom />
    </>
  )
}

export default App;
