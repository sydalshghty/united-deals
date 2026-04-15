import Header from "../components/header";
import BottomHeaderCart from "../components/cart-content/bottom-header-cart";
import Back from "../components/wishlist-page-content/back";
import CustomerInformation from "../components/customer-page-content/customer-information";
import Footer from "../components/footer/footer";

function CustomerPage() {
    return (
        <>
            <Header />
            <div className="Customer-page-content mt-[150px]">
                <BottomHeaderCart />
                <Back title="Customer Information" />
                <CustomerInformation />
                <Footer />
            </div>
        </>
    )
}
export default CustomerPage;