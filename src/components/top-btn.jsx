import { FaChevronUp } from "react-icons/fa6";
import { Link } from "react-scroll";
function TopButton() {
    return (
        <div className="fixed right-5 bottom-[20px] top-button z-[999999]">
            <Link to="top"
                smooth={true}
                duration={500}
                offset={-150}
            >
                <div className="content-btn w-[45px] h-[40px] bg-primary500 flex justify-center items-center cursor-pointer">
                    <FaChevronUp className="text-white" />
                </div>
            </Link>
        </div>
    )
}
export default TopButton;