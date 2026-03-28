import { Link } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { CiShop } from "react-icons/ci";
import { IoSearchSharp } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
function NavbarBottom(){
    return(
        <section className="navbar-bottom w-full h-[62px] bg-whiteColor shadow-md fixed bottom-0 z-[9999999999] sm:opacity-[1] lg:opacity-0">
            <div className="container min-w-[100%] h-full">
                <ul className="w-full h-full pt-3 pb-3 flex justify-between items-center">
                    <Link to={"/"} className="flex flex-col items-center"
                        onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
                    >
                        <TiHome className="text-[24px] text-primary500"/>
                        <span className="text-[12px] font-bold uppercase font-sans text-primary500">home</span>
                    </Link>
                    <Link to={"/all-products"} className="flex flex-col items-center"
                        onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
                    >
                        <CiShop className="text-[24px] text-grayColorLink"/>
                        <span className="text-[12px] font-bold uppercase font-sans text-grayColorLink">shop</span>
                    </Link>
                    <div className="col-profile flex flex-col items-center cursor-pointer">
                        <FiUser className="text-[24px] text-grayColorLink"/>
                        <span className="text-[12px] font-bold uppercase font-sans text-grayColorLink">profile</span>
                    </div>
                </ul>
            </div>
        </section>
    )
}
export default NavbarBottom;