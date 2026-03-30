import "./featured-products.css";
import { FaRegHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { OrbitProgress } from "react-loading-indicators";
import { Link } from "react-router-dom";
import { addToCart } from "../../store/slices.jsx/cart-products-slice";
import { addHeartProduct } from "../../store/slices.jsx/HeartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import ViewAllButton from "../view-all-btn/view-all-btn";
//import { addHeartProduct } from "../../store/slices.jsx/HeartSlice";
function FeaturedProducts() {
    const dispatch = useDispatch();

    const [activeCategory, setActiveCategory] = useState("All Product");
    const [allProducts, setAllProducts] = useState([]);

    /*Start Get All Product Data With Api Function*/
    const getAllProducts = async () => {
        const res = await fetch(`https://dummyjson.com/products?limit=200`)

        const data = await res.json();

        setAllProducts(data.products);

    }
    useEffect(() => {
        getAllProducts();
    }, []);

    const smartPhones = allProducts.filter((product) => product.category === "smartphones").slice(0, 10);
    const laptops = allProducts.filter((product) => product.category === "laptops");
    const tablets = allProducts.filter((product) => product.category === "tablets");
    const mobileAccessories = allProducts.filter((product) => product.category === "mobile-accessories").slice(0, 10);
    const allElectroProducts = [...smartPhones.sort((a, b) => b.price - a.price).slice(0, 3),
    ...laptops.sort((a, b) => b.price - a.price).slice(0, 3),
    ...tablets.sort((a, b) => b.price - a.price).slice(0, 1),
    ...mobileAccessories.sort((a, b) => b.price - a.price).slice(0, 3)
    ];

    /*End Get All Product Data With Api Function*/
    return (
        <Element name="featured-products">
            <section className="w-full h-full featured-products  mb-[40px]">
                <div className="container flex min-w-[100%] h-full gap-6">
                    <div className="w-full featured-products-content">
                        <div className="flex items-center justify-between w-full heading-col">
                            <h1 className="sm:text-[22px] md:text-[25px] lg:text-[28px]  font-bold text-headingcolor uppercase">frequently bought together</h1>
                            <Link to={`/all-products`}>
                                <ViewAllButton />
                            </Link>
                        </div>
                        {allProducts.length === 0 ?
                            <div className="col-loading w-full  sm:h-[200px] lg:h-[350px] flex justify-center items-center">
                                <OrbitProgress color="#FA8232" size="small" text="" textColor="" />
                            </div>
                            :
                            <div className="flex flex-wrap gap-4 mt-6 all-featured-products">
                                {activeCategory === "All Product" ?
                                    <>
                                        {allElectroProducts.map((product, index) => {
                                            return (
                                                <div className="col-product w-[234px] h-[320px] rounded-[3px] p-3" key={product.id}>
                                                    <div className="all-images w-[202px] h-[172px] relative mb-3 ml-auto mr-auto">
                                                        <img src={product.images[0]} alt="product-img" className="object-contain w-full h-full" />
                                                        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full gap-2 h-c-v-icons">
                                                            <div className="col-heart w-[42px] h-[42px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer"
                                                                onClick={() => {
                                                                    dispatch(addHeartProduct(product))
                                                                    toast.success("Added to wishlist successfully");
                                                                }}
                                                            >
                                                                <FaRegHeart className="w-5 h-5 text-black" />
                                                            </div>
                                                            <div className="col-cart  w-[42px] h-[42px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer"
                                                                onClick={() => {
                                                                    dispatch(addToCart(product));
                                                                    toast.success("Added to Cart successfully");
                                                                }}
                                                            >
                                                                <FiShoppingCart className="w-5 h-5 text-black" />
                                                            </div>
                                                            <Link to={`Product/${product.id}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                                                                <div className="col-view  w-[42px] h-[42px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer">
                                                                    <FiEye className="w-5 h-5 text-black" />
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col gap-2 information-product">
                                                        <div className="flex items-center gap-1 all-stars-content">
                                                            <div className="flex all-stars">
                                                                <FaStar className="w-4 h-4 text-primary500" />
                                                                <FaStar className="w-4 h-4 text-primary500" />
                                                                <FaStar className="w-4 h-4 text-primary500" />
                                                                <FaStar className="w-4 h-4 text-primary500" />
                                                                <FaStar className="w-4 h-4 text-primary500" />
                                                            </div>
                                                            <p className="text-xs p-rate text-gray500">{`(${product.rating})`}</p>
                                                        </div>
                                                        <p className="text-sm title-product text-gray900">{product.title.slice(0, 18)}</p>
                                                        <span className="text-sm font-semibold price-product text-secondary500">{`₹${product.price}`}</span>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </>
                                    :
                                    ""
                                }
                            </div>
                        }
                    </div>
                </div>
            </section>
        </Element>
    )
}
export default FeaturedProducts;