import { FaPlus, FaMinus } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import "./all-products.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { OrbitProgress } from "react-loading-indicators";
import { useSearchParams } from "react-router-dom";
function AllProducts() {
    const [searchParams] = useSearchParams();
    const category = searchParams.get("category");

    console.log({ "category": category });

    const [allProducts, setAllProducts] = useState([]);
    const [showCategory, setShowCategory] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [sortPrice, setSortPrice] = useState("");

    const getAllProductts = async () => {
        const res = await fetch(`https://dummyjson.com/products?limit=200`);
        const data = await res.json();
        setAllProducts(data.products);
    }
    useEffect(() => {
        getAllProductts()
    }, [])

    const allCategories = [
        { id: 1, category: "laptops" },
        { id: 2, category: "smartphones" },
        { id: 3, category: "mobile-accessories" },
        { id: 4, category: "tablets" },
        { id: 5, category: "mens-watches" },
        { id: 6, category: "womens-watches" },
        { id: 7, category: "sports-accessories" },
    ]

    //get all categories products 
    const laptops = allProducts.filter((product) => product.category == "laptops");
    const smartphones = allProducts.filter((product) => product.category == "smartphones");
    const mobileaccessories = allProducts.filter((product) => product.category == "mobile-accessories");
    const tablets = allProducts.filter((product) => product.category == "tablets");
    const menswatches = allProducts.filter((product) => product.category == "mens-watches");
    const womenswatches = allProducts.filter((product) => product.category == "womens-watches");
    const sportsaccessories = allProducts.filter((product) => product.category == "sports-accessories");

    const allProductsElectronic = [...laptops, ...smartphones, ...mobileaccessories, ...tablets, ...menswatches, ...womenswatches, ...sportsaccessories];

    //filtered products
    const filteredProducts = allProductsElectronic.filter((product) => {
        if (selectedCategory && product.category !== selectedCategory) {
            return false;
        }
        return true;
    })

    if (sortPrice === "LowToHigh") {
        filteredProducts.sort((a, b) => a.price - b.price);
    }

    if (sortPrice === "HighToLow") {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    useEffect(() => {
        if (category) {
            setSelectedCategory(category)
        }
    }, [category]);

    return (
        <>
            <section className="w-full h-full mt-5 mb-10 all-products-section">
                <div className="container min-w-[100%] h-full flex gap-5">
                    <div className="flex flex-col gap-2 filter-list-products">
                        <div className="col-category flex items-center justify-between w-full  border-b-[1px] border-borderColor">
                            <p className="text-[16px] text-darkColor font-medium capitalize cursor-pointer" onClick={() => setShowCategory(!showCategory)}>category</p>
                            {showCategory ?
                                <FaMinus className="cursor-pointer text-darkColor" onClick={() => setShowCategory(!showCategory)} />
                                :
                                <FaPlus className="cursor-pointer text-darkColor" onClick={() => setShowCategory(!showCategory)} />
                            }
                        </div>
                        {showCategory ?
                            <div className="flex flex-col gap-1 all-categories">
                                {allCategories.map((category, index) => {
                                    return (
                                        <div className="flex items-center gap-2 category" key={category.id}
                                            onClick={() => {
                                                setSelectedCategory(category.category)
                                            }
                                            }
                                        >
                                            <span className={`${selectedCategory === category.category ? "check" : ""} w-[15px] h-[15px] rounded-sm border-[1px] border-checkcolor cursor-pointer flex justify-center items-center`}>
                                                <FaCheck className="text-[14px] text-white" />
                                            </span>
                                            <p className="text-[16px] font-medium text-checkcolor cursor-pointer capitalize">{category.category}</p>
                                        </div>
                                    )
                                })}
                            </div>
                            :
                            null
                        }
                        <div className="low-high-price w-full  border-b-[1px] border-borderColor cursor-pointer"
                            onClick={() => setSortPrice("LowToHigh")}
                        >
                            <p className="text-[16px] text-darkColor font-medium capitalize">Price Low To High</p>
                        </div>
                        <div className="high-low-price w-full  border-b-[1px] border-borderColor cursor-pointer"
                            onClick={() => setSortPrice("HighToLow")}
                        >
                            <p className="text-[16px] text-darkColor font-medium capitalize">Price High To Low</p>
                        </div>
                        <p className="text-[16px] text-darkColor font-medium capitalize cursor-pointer clear-filter"
                            onClick={() => {
                                setSelectedCategory(null);
                            }}
                        >clear filter</p>
                    </div>
                    <div className="flex flex-wrap h-full gap-5 all-products">
                        {filteredProducts.length === 0 ?
                            <div className="col-loading w-full  h-[350px] flex justify-center items-center">
                                <OrbitProgress color="#FA8232" size="small" text="" textColor="" />
                            </div>
                            :
                            <>
                                {filteredProducts?.map((product, index) => {
                                    return (
                                        <Link to={`/Product/${product.id}`} key={product.id}
                                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                        >
                                            <div className="h-full col-product">
                                                <div className="content-img-product  bg-bgImgProduct rounded-[26px] mb-2 flex justify-center items-center flex-col relative cursor-pointer">
                                                    <div className="flex items-center justify-center col-img">
                                                        <img src={product?.images[0]} alt="product-img" className="object-contain w-full h-full" />
                                                    </div>
                                                </div>
                                                <div className="information-product">
                                                    <h3 className="title-product text-[18px] font-bold text-headingcolor mb-2 capitalize">
                                                        {product.title.slice(0, 18)}
                                                    </h3>
                                                    <div className="col-rating flex gap-[6px] items-center mb-2">
                                                        <div className="flex items-center all-stars gap-[6px]">
                                                            <div className="flex items-center gap-[2px]">
                                                                <FaStar className="text-starColor" />
                                                                <FaStar className="text-starColor" />
                                                                <FaStar className="text-starColor" />
                                                                <FaStar className="text-starColor" />
                                                                <FaStar className="text-starColor" />

                                                            </div>

                                                        </div>
                                                        <p className="text-[13px] text-gray600">{`(${product.rating}Ratings)`}</p>
                                                    </div>
                                                    <div className="buy-now-btn w-full h-[48px] bg-headingcolor rounded-lg flex justify-center items-center cursor-pointer text-sm font-medium">
                                                        <p className="text-whiteColor">BUY NOW-</p>
                                                        <span className="text-primary500">{`₹${product.price}`}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
export default AllProducts;