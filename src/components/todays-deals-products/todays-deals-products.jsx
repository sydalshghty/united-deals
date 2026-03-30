import NewImg from "../../assets/new-icon.svg";
import { useState, useEffect, useMemo } from "react";
import { OrbitProgress } from "react-loading-indicators";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';
import { Link } from "react-router-dom";
import ViewAllButton from "../view-all-btn/view-all-btn";
import "./todays-deals-products.css";

function TodaysDealsProducts() {
    const [products, setProducts] = useState([]);
    const getAllProducts = async () => {
        const res = await fetch(`https://dummyjson.com/products?limit=200`);
        const data = await res.json();
        setProducts(data.products);
    }
    useEffect(() => {
        getAllProducts();
    }, [])

    const categories = ["laptops", "tablets", "smartphones"];
    const electroProducts = useMemo(() => {
        return (
            products.filter(product =>
                categories.some(tag => product.tags.includes(tag))
            )
                .sort((a, b) => b.price - a.price)
        )
    }, [products]);

    return (
        <>
            <section className="todays-deals-products mt-[40px] mb-[40px] w-full h-full">
                <div className="container h-full min-w-[100%]">
                    <div className="flex items-center justify-between w-full h-full mb-5 col-heading">
                        <h1 className="sm:text-[22px] md:text-[25px] lg:text-[28px]  font-bold text-headingcolor uppercase">Today’s Deals of the day</h1>
                        <Link to={`/all-products`}>
                            <ViewAllButton />
                        </Link>
                    </div>
                    {electroProducts.length === 0 ?
                        <div className="col-loading w-full sm:h-[200px] lg:h-[350px] flex justify-center items-center">
                            <OrbitProgress color="#FA8232" size="small" text="" textColor="" />
                        </div>
                        :
                        <div className="flex items-center justify-center w-full h-full all-products-deals">
                            <Swiper
                                className="flex items-center justify-center w-full h-full"
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
                                    992: { slidesPerView: 3 },
                                    1400: { slidesPerView: 4 },
                                    1600: { slidesPerView: 4 }
                                }}
                            >
                                {electroProducts.map((product, index) => {
                                    //w-[300px]
                                    return (
                                        <SwiperSlide key={product.id} className="flex items-center justify-center w-full">
                                            <Link to={`Product/${product.id}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                                                <div className="h-full col-product">
                                                    <div className="content-img-product  bg-bgImgProduct rounded-[26px] mb-2 flex justify-center items-center flex-col relative cursor-pointer">
                                                        <div className="absolute top-0 left-0 col-new w-fit h-fit">
                                                            <img src={NewImg} alt="new" className="object-contain w-full h-full" />
                                                        </div>
                                                        <div className="flex items-center justify-center w-[204px] h-[266px]  col-img">
                                                            <img src={product?.images[0]} alt="product-img" className="object-contain w-full h-full" />
                                                        </div>
                                                    </div>
                                                    <div className="information-product">
                                                        <h3 className="title-product text-[15px] font-bold text-headingcolor mb-2">
                                                            {product.title.slice(0, 25)}
                                                        </h3>
                                                        <div className="buy-now-btn w-full h-[44px] bg-headingcolor rounded-lg flex justify-center items-center cursor-pointer text-[13px] font-bold">
                                                            <p className="text-whiteColor">BUY NOW-</p>
                                                            <span className="text-primary500">{`₹${product.price}`}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div>
                    }
                </div>
            </section>
        </>
    )
}
export default TodaysDealsProducts;