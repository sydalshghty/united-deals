import TopHeaderCart from "./cart-content/tp-header-cart";
import CenterHeaderCart from "./cart-content/center-header-cart";
import { Element } from "react-scroll";
function Header() {
    return (
        <Element name="top">
            <div className="fixed top-0 left-0 z-50 w-full shadow-md">
                <TopHeaderCart />
                <CenterHeaderCart />
            </div>
        </Element>
    )
}
export default Header;