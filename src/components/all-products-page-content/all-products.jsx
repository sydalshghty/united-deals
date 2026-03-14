import { FaPlus, FaMinus } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import "./all-products.css";
import { useEffect, useMemo, useState } from "react";
import returnIcon from "../../assets/return-home.svg";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { OrbitProgress } from "react-loading-indicators";
function AllProducts() {
    const [showBrand, setShowBrand] = useState(false);
    const [showCategory, setShowCategory] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [allProducts, setAllProducts] = useState([]);

    const getAllProductts = async () => {
        const res = await fetch(`https://dummyjson.com/products?limit=200`);
        const data = await res.json();
        setAllProducts(data.products);
    }
    useEffect(() => {
        getAllProductts()
    }, [])

    const allBrands = [
        { id: 1, brand: "Apple" },
        { id: 2, brand: "Huawei" },
        { id: 3, brand: "Lenovo" },
        { id: 4, brand: "Dell" },
        { id: 5, brand: "Nike" },
        { id: 6, brand: "Rolex" },
        { id: 7, brand: "Oppo" },
        { id: 8, brand: "Realme" },
        { id: 9, brand: "Samsung" },
        { id: 10, brand: "Vivo" }
    ]

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

    const allProductsElectronic = [...laptops,  ...smartphones, ...mobileaccessories, ...tablets, ...menswatches, ...womenswatches, ...sportsaccessories];
    

    return (
        <>
            <div className="header-all-products mt-[20px] w-full h-full">
                <div className="container min-w-[100%] h-full flex justify-between items-center">
                    <Link to={`/`}>
                        <div className="flex items-center gap-3 cursor-pointer col-back">
                            <img src={returnIcon} alt="back-icon" />
                            <span className="text-[22px] font-semibold text-black capitalize">back</span>
                        </div>
                    </Link>
                </div>
            </div>
            <section className="w-full h-full mt-10 mb-10 all-products-section">
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
                        <div className="flex items-center justify-between w-full col-brand border-b-[1px] border-borderColor">
                            <p className="text-[16px] text-darkColor font-medium capitalize cursor-pointer" onClick={() => setShowBrand(!showBrand)}>Brand</p>
                            {showBrand ?
                                <FaMinus className="cursor-pointer text-darkColor" onClick={() => setShowBrand(!showBrand)} />
                                :
                                <FaPlus className="cursor-pointer text-darkColor" onClick={() => setShowBrand(!showBrand)} />
                            }
                        </div>
                        {showBrand ?
                            <div className="flex flex-col gap-1 all-brands">
                                {allBrands.map((brand, index) => {
                                    return (
                                        <div className="flex items-center gap-2 brand" key={brand.id} onClick={() => 
                                                setSelectedBrand(brand.brand)
                                        }>
                                            <span className={`${selectedBrand === brand.brand ? "check" : ""} w-[15px] h-[15px] rounded-sm border-[1px] border-checkcolor cursor-pointer flex justify-center items-center`}>
                                                <FaCheck className="text-[12px] text-white" />
                                            </span>
                                            <p className="text-[16px] font-medium text-checkcolor cursor-pointer">{brand.brand}</p>
                                        </div>
                                    )
                                })}
                            </div>
                            :
                            null
                        }
                        <div className="low-high-price w-full  border-b-[1px] border-borderColor cursor-pointer">
                            <p className="text-[16px] text-darkColor font-medium capitalize">Price Low To High</p>
                        </div>
                        <div className="high-low-price w-full  border-b-[1px] border-borderColor cursor-pointer">
                            <p className="text-[16px] text-darkColor font-medium capitalize">Price High To Low</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap h-full gap-5 all-products">
                        {allProductsElectronic.length === 0 ?
                            <div className="col-loading w-full h-[1000px] flex justify-center items-center">
                                <OrbitProgress color="#FA8232" size="medium" text="" textColor="" />
                            </div>
                            :
                            <>
                                {allProductsElectronic?.map((product, index) => {
                                    return (
                                        <div className="h-full col-product min-w-[30%]" key={product.id}>
                                            <div className="content-img-product  bg-bgImgProduct rounded-[26px] mb-2 flex justify-center items-center flex-col relative cursor-pointer">
                                                <div className="flex items-center justify-center w-[204px] h-[266px] col-img">
                                                    <img src={product?.images[0]} alt="product-img" className="object-contain w-full h-full" />
                                                </div>
                                            </div>
                                            <div className="information-product">
                                                <h3 className="title-product text-[18px] font-bold text-headingcolor mb-2 capitalize">
                                                    {product.title}
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
                                                        <p className="text-[13px] text-gray900 font-bold">{product.rating}</p>
                                                    </div>
                                                    <p className="text-[13px] text-gray600">{`(${product.rating}Ratings)`}</p>
                                                </div>
                                                <div className="buy-now-btn w-full h-[48px] bg-headingcolor rounded-lg flex justify-center items-center cursor-pointer text-sm font-medium">
                                                    <p className="text-whiteColor">BUY NOW-</p>
                                                    <span className="text-primary500">{`₹${product.price}`}</span>
                                                </div>
                                            </div>
                                        </div>
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