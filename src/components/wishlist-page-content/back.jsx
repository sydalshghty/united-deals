import imgReturn from "../../assets/return-home.svg";
import shareImg from "../../assets/share (1) 1.svg";
import { useNavigate } from "react-router-dom";
import "./wishlist-page.css";
function Back(props) {
    const navigate = useNavigate();

    return (
        <section className="w-full h-full back-content mt-[40px]">
            <div className="container min-w-[100%] h-full">
                <div className="flex items-center justify-between w-full h-full col-back">
                    <div className="flex items-center gap-[15px] cursor-pointer"
                        onClick={() => navigate(-1)}
                    >
                        <img src={imgReturn} alt="return-img" className="return-img" />
                        <p className="text-[22px] font-semibold text-blackcolor">Back</p>
                    </div>
                    <img src={shareImg} alt="share-img" className="share-img" />
                </div>
                <div className="mb-5 title-page">
                    <h1 className="mt-5 mb-2  text-[55px] font-extrabold text-blackcolor wishlist-title capitalize">{props.title}</h1>
                    <p className="text-[30px] text-gray500 p-account">Let’s create your account</p>
                </div>
            </div>
        </section>
    )
}
export default Back;