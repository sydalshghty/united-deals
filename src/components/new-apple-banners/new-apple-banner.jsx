import bannerImg1 from "../../assets/Banner.png";
import bannerImg2 from "../../assets/Banner (1).png";
import "./new-apple-banner.css";
import { Link } from "react-scroll";
function NewAppleBanner() {
    return (
        <Link to="flash-products"
            smooth={true}
            duration={500}
            offset={-140}
        >
            <section className="w-full h-full new-apple-banner mb-[40px]">
                <div className="container min-w-[100%] flex gap-6">
                    <div className="col-img-banner w-[50%] h-full">
                        <img src={bannerImg1} alt="banner-img" className="cursor-pointer" />
                    </div>
                    <div className="col-img-banner w-[50%] h-full">
                        <img src={bannerImg2} alt="banner-img" className="cursor-pointer" />
                    </div>
                </div>
            </section>
        </Link>
    )
}
export default NewAppleBanner;