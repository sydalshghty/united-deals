import iconLogo from "../../assets/icon-logo-cart.svg";
import searchIcon from "../../assets/Search.svg";
import listIcon from "../../assets/list.svg";
import buyIcon from "../../assets/Buy (1).svg";
import userIcon from "../../assets/user.svg";
import "./cart-style.css";
function CenterHeaderCart() {
    return (
        <section className="w-full h-[90px] center-header-cart">
            <div className="container min-w-[100%] h-full flex justify-between items-center">
                <div className="flex items-center gap-5 col-logo">
                    <img src={iconLogo} alt="icon-logo-cart" className="cursor-pointer" />
                    <h1 className="text-[32px] font-bold text-linearColor">United Deals</h1>
                </div>
                <form action="" className="flex items-center w-[35%] h-12 bg-bgColor rounded-lg pl-3 pr-3 gap-3">
                    <button type="submit">
                        <img src={searchIcon} alt="search-icon" />
                    </button>
                    <input type="text" placeholder="Search essentials, groceries and more..." className="w-full h-full text-sm bg-transparent border-none outline-none text-colorPlaceholder" />
                    <img src={listIcon} alt="list-icon" className="cursor-pointer" />
                </form>
                <div className="flex items-center gap-5 sign-in-cart-content">
                    <div className="flex gap-[6px] col-user items-center cursor-pointer">
                        <img src={userIcon} alt="user-icon" />
                        <p className="text-base text-colorPlaceholder">Sign Up/Sign In</p>
                    </div>
                    <div className="flex gap-[6px] col-cart items-center cursor-pointer">
                        <img src={buyIcon} alt="buy-icon" />
                        <p className="text-base text-colorPlaceholder">Cart</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CenterHeaderCart;