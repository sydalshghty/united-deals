import imgReturn from "../../assets/return-home.svg";
import shareImg from "../../assets/share (1) 1.svg";
import { Link } from "react-router-dom";
import "./wishlist-page.css";
function Back() {
    return (
        <section className="w-full h-full back-content mt-[40px]">
            <div className="container min-w-[100%] h-full">
                <div className="flex items-center justify-between w-full h-full col-back">
                    <Link to={`/`}>
                        <div className="flex items-center gap-[15px] cursor-pointer">
                            <img src={imgReturn} alt="return-img" className="return-img" />
                            <p className="text-[22px] font-semibold text-blackcolor">Back</p>
                        </div>
                    </Link>
                    <img src={shareImg} alt="share-img" className="share-img" />
                </div>
                <h1 className="mt-5 mb-5  text-[55px] font-extrabold text-blackcolor wishlist-title">Wishlist</h1>
            </div>
        </section>
    )
}
export default Back;