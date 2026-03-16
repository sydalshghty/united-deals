import Header from "../components/header";
import BottomHeaderCart from "../components/cart-content/bottom-header-cart";
import BackandHeadingCart from "../components/cart-content/back-heading-cart";
import CartProducts from "../components/cart-content/cart-products";
import Footer from "../components/footer/footer";
function CartPage(){
    return(
        <>
            <Header/>
            <div className="cart-page-content mt-[150px]">
                <BottomHeaderCart/>
                <BackandHeadingCart/>
                <CartProducts/>
                <Footer/>
            </div>
        </>
    )
}
export default CartPage;