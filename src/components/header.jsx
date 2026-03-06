import TopHeaderCart from "./cart-content/tp-header-cart";
import CenterHeaderCart from "./cart-content/center-header-cart";
function Header() {
    return(
        <div className="fixed top-0 left-0 w-full shadow-md h-fit z-50">
            <TopHeaderCart/>
            <CenterHeaderCart/>
        </div>
    )
}
export default Header;