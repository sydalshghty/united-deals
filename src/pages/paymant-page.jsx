import Header from "../components/header";
import BottomHeaderCart from "../components/cart-content/bottom-header-cart";
import Back from "../components/wishlist-page-content/back";
import PaymantMethod from "../components/paymant-page-content/paymant-method";
import Footer from "../components/footer/footer";
function PaymentPage(){
    return(
        <>
            <Header />
            <div className="paymant-page mt-[150px]">
                <BottomHeaderCart />
                <Back title="Shipping & Payments" />  
                <PaymantMethod/>
                <Footer />
            </div>
        </>
    )
}
export default PaymentPage;