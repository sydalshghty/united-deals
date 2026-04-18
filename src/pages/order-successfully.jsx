import Header from "../components/header";
import BottomHeaderCart from "../components/cart-content/bottom-header-cart";
import Back from "../components/wishlist-page-content/back";
import Footer from "../components/footer/footer";
import { IoHomeOutline } from "react-icons/io5";
import orderImg from "../assets/order-img.png";
import checkImg from "../assets/CheckCircle.svg";
import { Link } from "react-router-dom";
function OrderSuccessfully(){
    return(
        <>
            <Header />
            <div className="Customer-page-content mt-[150px]">
                <BottomHeaderCart />
                <Back title="Product Confirmation" />
                <div className="container min-w-[100%] h-full flex justify-between items-center mt-[20px] lg:mt-[-100px] flex-col gap-5 lg:flex-row mb-10 lg:mb-[0px]">
                    <div className="col-img  w-[350px] h-[250px] lg:w-[500px] lg:h-[550px]">
                        <img src={orderImg} alt="order-img" className="w-full h-full object-contain"/>
                    </div>
                    <div className="order-successfully flex flex-col gap-5 justify-center items-center">
                        <img src={checkImg} alt="successfully-order" className="w-[90px] lg:w-[120px]"/>
                        <h1 className="text-[24px] lg:text-[34px] text-center font-bold text-gray900">Your order is successfully place</h1>
                        <p className="text-[14px] lg:text-[18px] text-gray600 text-center font-medium capitalize font-sans">Pellentesque sed lectus nec tortor tristique accumsan quis dictum risus. Donec volutpat mollis nulla non facilisis.</p>
                        <Link to={`/`} onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>
                            <div className="go-to-home-btn flex justify-center items-center cursor-pointer w-[180px] lg:w-[240px] h-[50px] bg-blueColor gap-3 rounded-[3px]">
                                <IoHomeOutline className="text-white text-[22px]"/>
                                <p className="uppercase text-white text-[14px] lg:text-[17px] font-bold">go to home</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
export default OrderSuccessfully;