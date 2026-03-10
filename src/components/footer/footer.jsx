import logoImg from "../../assets/Logo (1).png";
import googlePlayImg from "../../assets/Mobile App.png";
import appleStoreImg from "../../assets/Mobile App (1).png";
import { FaArrowRight } from "react-icons/fa6";
import "./footer.css";

function Footer() {
    return (
        <footer className="w-full h-full bg-gray900 pt-[72px] pb-[72px]">
            <div className="container flex justify-between min-w-[100%] h-full flex-wrap gap-10">
                <div className="col-one">
                    <img src={logoImg} alt="logo" className="cursor-pointer mb-7" />
                    <div className="flex flex-col gap-1 mb-5 customer-support">
                        <h2 className="text-sm  font-medium text-gray500 tracking-[0.5px]">Customer Supports:</h2>
                        <p className="text-[18px] text-white font-medium">(629) 555-0129</p>
                    </div>
                    <p className="p-location text-base font-sans tracking-[0.5px] text-gray300 max-w-[250px] mb-5">4517 Washington Ave. Manchester, Kentucky 39495</p>
                    <a href="mailto:info@kinbo.com" className="font-sans text-base text-white">info@kinbo.com</a>
                </div>
                <div className="flex flex-wrap gap-20 col-two">
                    <ul className="TopCategory-links">
                        <h2 className="mb-6 font-sans text-base font-medium text-white uppercase">Top Category</h2>
                        <div className="flex flex-col gap-3 all-links">
                            <li>
                                <a href="#" className="font-sans text-sm font-medium transition-colors duration-500 text-gray400 hover:text-white">Computer & Laptop</a>
                            </li>
                            <li>
                                <a href="#" className="font-sans text-sm font-medium transition-colors duration-500 text-gray400 hover:text-white">SmartPhone</a>
                            </li>
                            <li>
                                <a href="#" className="font-sans text-sm font-medium transition-colors duration-500 text-gray400 hover:text-white">Headphone</a>
                            </li>
                            <li>
                                <a href="#" className="font-sans text-sm font-medium transition-colors duration-500 text-gray400 hover:text-white">Accessories</a>
                            </li>
                            <li>
                                <a href="#" className="font-sans text-sm font-medium transition-colors duration-500 text-gray400 hover:text-white">Camera & Photo</a>
                            </li>
                            <li>
                                <a href="#" className="font-sans text-sm font-medium transition-colors duration-500 text-gray400 hover:text-white">TV & Homes</a>
                            </li>
                            <div className="go-to-products flex gap-2 items-center justify-center h-[32px]">
                                <a href="#" className="font-sans text-sm font-medium text-warning500">Browse All Product</a>
                                <FaArrowRight className="cursor-pointer text-warning500" />
                            </div>
                        </div>
                    </ul>
                    <ul className="Quicklinks-links">
                        <h2 className="mb-6 font-sans text-base font-medium text-white uppercase">Quick links</h2>
                        <div className="flex flex-col gap-3 all-links">
                            <li>
                                <a href="#" className="font-sans text-sm font-medium transition-colors duration-500 text-gray400 hover:text-white">Shop Product</a>
                            </li>
                            <li>
                                <a href="#" className="font-sans text-sm font-medium transition-colors duration-500 text-gray400 hover:text-white">Shoping Cart</a>
                            </li>
                            <li>
                                <a href="#" className="font-sans text-sm font-medium transition-colors duration-500 text-gray400 hover:text-white">Wishlist</a>
                            </li>
                            <li>
                                <a href="#" className="font-sans text-sm font-medium transition-colors duration-500 text-gray400 hover:text-white">Compare</a>
                            </li>
                            <li>
                                <a href="#" className="font-sans text-sm font-medium transition-colors duration-500 text-gray400 hover:text-white">Track Order</a>
                            </li>
                            <li>
                                <a href="#" className="font-sans text-sm font-medium transition-colors duration-500 text-gray400 hover:text-white">Customer Help</a>
                            </li>
                            <li>
                                <a href="#" className="font-sans text-sm font-medium transition-colors duration-500 text-gray400 hover:text-white">About Us</a>
                            </li>
                        </div>
                    </ul>
                </div>
                <div className="flex flex-wrap gap-6 col-three">
                    <div className="Download-APP-Col">
                        <h2 className="mb-6 font-sans text-base font-medium text-white uppercase">Download APP</h2>
                        <div className="flex flex-col gap-3 images-download">
                            <img src={googlePlayImg} alt="google-play" className="cursor-pointer" />
                            <img src={appleStoreImg} alt="apple-store" className="cursor-pointer" />
                        </div>
                    </div>
                    <div className="Popular-Tag">
                        <h2 className="mb-6 font-sans text-base font-medium text-white uppercase">Popular Tag</h2>
                        <div className="all-tags flex w-[350px] flex-wrap gap-2">
                            <div className="col-tag w-fit h-8 pt-[6px] pb-[6px] pl-3 pr-3">Game</div>
                            <div className="col-tag">iPhone</div>
                            <div className="col-tag">TV</div>
                            <div className="col-tag">Asus Laptops</div>
                            <div className="col-tag">Macbook</div>
                            <div className="col-tag">SSD</div>
                            <div className="col-tag">Graphics Card</div>
                            <div className="col-tag">Power Bank</div>
                            <div className="col-tag">Smart TV</div>
                            <div className="col-tag">Speaker</div>
                            <div className="col-tag">Tablet</div>
                            <div className="col-tag">Microwave</div>
                            <div className="col-tag">Samsung</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;