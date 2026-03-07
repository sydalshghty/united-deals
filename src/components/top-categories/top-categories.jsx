import ViewAllButton from "../view-all-btn/view-all-btn";
import LaptopImg from "../../assets/laptop-category-img.png";
import TabletsImg from "../../assets/tablets-category-img.webp";
import SmartPhonesImg from "../../assets/mobile-category-img.png";
import MobileAccessImg from "../../assets/Image-category-3.png";
import MensWatchesImg from "../../assets/watches-category-img.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';
function TopCategories() {
    const allCategories = [
        { id: 1, img: LaptopImg, title: "laptops" },
        { id: 2, img: TabletsImg, title: "tablets" },
        { id: 3, img: SmartPhonesImg, title: "smart phones" },
        { id: 4, img: MobileAccessImg, title: "mobile-accessories" },
        { id: 5, img: MensWatchesImg, title: "mens-watches" },
    ]
    return (
        <section className="w-full h-full top-categories-section mt-[40px] mb-[40px]">
            <div className="container min-w-[100%] h-full">
                <div className="flex items-center justify-between w-full col-heading border-b-[1px] border-textColor pb-5">
                    <h1 className="sm:text-[22px] md:text-[25px] lg:text-[28px] font-bold text-headingcolor uppercase">Shop From <span className="text-primary500">Top CateGories</span></h1>
                    <ViewAllButton />
                </div>
                <div className="mt-5 all-categories">
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={2}
                        spaceBetween={20}
                        speed={500}
                        loop={true}
                        autoplay={
                            { delay: 2000, pauseOnMouseEnter: true }
                        }
                        breakpoints={{
                            450: { slidesPerView: 2 },
                            600: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            992: { slidesPerView: 4 },
                            1600: { slidesPerView: 5 }
                        }}
                    >
                        {allCategories.map((category, index) => {
                            return (
                                <SwiperSlide key={category.id}>
                                    <div className="col-category flex flex-col gap-[22px] items-center cursor-pointer" key={category.id}>
                                        <div className="col-img bg-bgCategory p-4 w-[137px] h-[137px] rounded-full">
                                            <img src={category.img} alt="category-img" className="object-contain w-full h-full" />
                                        </div>
                                        <p className="text-[17px] capitalize text-colorCategories">{category.title}</p>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
export default TopCategories;