import Header from "../components/header";
import BottomHeaderCart from "../components/cart-content/bottom-header-cart";
import Back from "../components/wishlist-page-content/back";
import WishlistProducts from "../components/wishlist-page-content/wishlist-products";

function WishlistPage() {
    return (
        <>
            <Header />
            <div className="wishlist-page-content mt-[150px]">
                <BottomHeaderCart />
                <Back />
                <WishlistProducts />
            </div>
        </>
    )
}
export default WishlistPage;