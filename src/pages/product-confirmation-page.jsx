import Header from "../components/header";
import BottomHeaderCart from "../components/cart-content/bottom-header-cart";
import Back from "../components/wishlist-page-content/back";
import ConfirmationProduct from "../components/product-confirmation/product-confirmation";
import Footer from "../components/footer/footer";

function ProductConfirmation(){
    return(
        <>
            <Header />
            <div className="product-confirmation-page mt-[150px]">
                <BottomHeaderCart />
                <Back title="Product Confirmation" />  
                <ConfirmationProduct/>
                <Footer />
            </div>
        </>
    )
}
export default ProductConfirmation;