import { Link } from "react-router-dom";
import HomeIcon from "../../assets/House.svg";
import CaretRightIcon from "../../assets/CaretRight.svg";
function NavLinksProduct() {
    return (
        <section className="nav-links-product w-full h-[55px] bg-gray50  border-[1px] border-gray-100">
            <div className="container min-w-[100%] h-full">
                <ul className="flex items-center w-full h-full gap-4">
                    <li className="flex items-center gap-2">
                        <Link to={"/"}>
                            <img src={HomeIcon} alt="home-icon" />
                        </Link>
                        <Link to={"/"} className="text-[15px] font-medium capitalize text-gray600">
                            Home
                        </Link>
                        <img src={CaretRightIcon} alt="right-icon" />
                    </li>
                    <li className="flex items-center gap-2">
                        <Link to={`/all-products`} className="text-[15px] font-medium capitalize text-gray600">
                            shop
                        </Link>
                        <img src={CaretRightIcon} alt="right-icon" />
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default NavLinksProduct;