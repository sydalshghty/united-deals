import logoImg from "../../assets/Logo (1).png";
import googlePlayImg from "../../assets/Mobile App.png";
import appleStoreImg from "../../assets/Mobile App (1).png";
import { FaArrowRight } from "react-icons/fa6";
import "./footer.css";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
function Footer() {
    const allCategories = [
        { id: 1, category: "laptops" },
        { id: 2, category: "smartphones" },
        { id: 3, category: "mobile-accessories" },
        { id: 4, category: "tablets" },
        { id: 5, category: "mens-watches" },
        { id: 6, category: "womens-watches" },
        { id: 7, category: "sports-accessories" },
    ]

    return (
        <footer className="w-full h-full bg-gray900 pt-[72px] pb-[72px]">
            <div className="container flex justify-between min-w-[100%] h-full flex-wrap gap-10">
                <div className="col-one">
                    <Link to={`/`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                        <img src={logoImg} alt="logo" className="cursor-pointer mb-7" />
                    </Link>
                    <div className="flex flex-col gap-1 mb-5 customer-support">
                        <h2 className="text-sm  font-medium text-gray500 tracking-[0.5px]">Customer Supports:</h2>
                        <p className="text-[18px] text-white font-medium">(629) 555-0129</p>
                    </div>
                    <p className="p-location text-base font-sans tracking-[0.5px] text-gray300 max-w-[250px] mb-5">4517 Washington Ave. Manchester, Kentucky 39495</p>
                    <a href="mailto:info@kinbo.com" className="font-sans text-base text-white">info@kinbo.com</a>
                </div>
                <div className="flex flex-wrap gap-32 col-two">
                    <ul className="TopCategory-links">
                        <h2 className="mb-6 font-sans text-base font-medium text-white uppercase">Top Category</h2>
                        <div className="flex flex-col gap-3 all-links">
                            {allCategories.map((category,index) => {
                                return(
                                    <li key={category.id}>
                                        <Link to={`/all-products?category=${category.category}`} 
                                        onClick={() => {
                                            window.scrollTo({top: 0, behavior: "smooth"})
                                        }}
                                        className="font-sans text-sm font-medium capitalize transition-colors duration-500 text-gray400 hover:text-white">{category.category}</Link>
                                    </li>
                                )
                            })}
                            <Link to={`/all-products`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                                <div className="go-to-products flex gap-2 items-center justify-center h-[32px]">
                                    <p className="font-sans text-sm font-medium text-primary500">Browse All Product</p>
                                    <FaArrowRight className="cursor-pointer text-primary500" />
                                </div>
                            </Link>
                        </div>
                    </ul>
                    <ul className="Quicklinks-links">
                        <h2 className="mb-6 font-sans text-base font-medium text-white uppercase">Quick links</h2>
                        <div className="flex flex-col gap-3 all-links">
                            <li>
                                <Link to={`/`} 
                                onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
                                className="font-sans text-sm font-medium transition-colors duration-500 
                                text-gray400 hover:text-white capitalize">home</Link>
                            </li>
                            <li>
                                <Link to={`/all-products`} 
                                onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
                                className="font-sans text-sm font-medium transition-colors duration-500 
                                text-gray400 hover:text-white capitalize">shop</Link>
                            </li>
                            <li>
                                <Link to={`/cart`} 
                                onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
                                className="font-sans text-sm font-medium transition-colors duration-500 
                                text-gray400 hover:text-white capitalize">cart</Link>
                            </li>
                            <li>
                                <Link to={`/wishlist`} 
                                onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
                                className="font-sans text-sm font-medium transition-colors duration-500 
                                text-gray400 hover:text-white capitalize">wishlist</Link>
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
                </div>
            </div>
        </footer>
    )
}
export default Footer;