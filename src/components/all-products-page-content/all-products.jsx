import { FaPlus, FaMinus } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import "./all-products.css";
import { useEffect, useState } from "react";
import { FaTh } from "react-icons/fa";
import { FaThList } from "react-icons/fa";
import returnIcon from "../../assets/return-home.svg";
import { Link } from "react-router-dom";
function AllProducts() {
    const [showBrand, setShowBrand] = useState(false);
    const [showCategory, setShowCategory] = useState(true);
    const [showPrice, setShowPrice] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState(null);
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

    const allRangePrice = [
        { id: 1, price: "₹5 - ₹100" },
        { id: 1, price: "₹100 - ₹200" },
        { id: 1, price: "₹200 - ₹300" },
        { id: 1, price: "₹300 - ₹400" },
        { id: 1, price: "₹400 - ₹500" },
        { id: 1, price: "₹500 - ₹700" }
    ]

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
                    <div className="flex items-center gap-3 col-showing-items">
                        <div className="flex gap-2 shipe-icon">
                            <FaTh className="text-gray-400 cursor-pointer" />
                            <FaThList className="text-gray-400 cursor-pointer" />
                        </div>
                        <h2 className="">Showing 1 - 40 of items</h2>
                    </div>
                </div>
            </div>
            <section className="w-full h-full mt-10 mb-10 all-products-section">
                <div className="container min-w-[100%] h-full flex gap-5">
                    <div className="flex flex-col gap-2 filter-list-products">
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
                                        <div className="flex items-center gap-2 brand" key={brand.id} onClick={() => setSelectedBrand(brand.brand)}>
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
                                            onClick={() => setSelectedCategory(category.category)}
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
                        <div className="col-price flex items-center justify-between w-full  border-b-[1px] border-borderColor">
                            <p className="text-[16px] text-darkColor font-medium capitalize cursor-pointer" onClick={() => setShowPrice(!showPrice)}>Price Range</p>
                            {showPrice ?
                                <FaMinus className="cursor-pointer text-darkColor" onClick={() => setShowPrice(!showPrice)} />
                                :
                                <FaPlus className="cursor-pointer text-darkColor" onClick={() => setShowPrice(!showPrice)} />
                            }
                        </div>
                        {showPrice ?
                            <div className="flex flex-col gap-1 all-prices-range">
                                {allRangePrice.map((price, index) => {
                                    return (
                                        <div className="flex items-center gap-2 price" key={price.id} onClick={() => setSelectedPrice(price.price)}>
                                            <span className={`${selectedPrice === price.price ? "check" : ""} w-[15px] h-[15px] rounded-sm border-[1px] border-checkcolor cursor-pointer flex justify-center items-center`}>
                                                <FaCheck className="text-[14px] text-white" />
                                            </span>
                                            <p className="text-[15px] font-medium text-checkcolor cursor-pointer">{price.price}</p>
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
                    <div className="all-products">
                        products, content
                    </div>
                </div>
            </section>
        </>
    )
}
export default AllProducts;