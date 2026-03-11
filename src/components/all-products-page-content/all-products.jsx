import { FaPlus, FaMinus } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import "./all-products.css";
import { useState } from "react";
function AllProducts() {
    const [showBrand, setShowBrand] = useState(false);
    const [showCategory, setShowCategory] = useState(true);
    const [showPrice, setShowPrice] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const allCategories = [
        { id: 1, category: "laptops" },
        { id: 2, category: "smartphones" },
        { id: 3, category: "mobile-accessories" },
        { id: 4, category: "tablets" }
    ]
    return (
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
                            <div className="flex items-center gap-2 brand">
                                <span className={`w-[15px] h-[15px] rounded-sm border-[1px] border-checkcolor cursor-pointer flex justify-center items-center`}>
                                    <FaCheck className="text-[12px] text-white" />
                                </span>
                                <p className="text-[16px] font-medium text-checkcolor cursor-pointer">Nike</p>
                            </div>
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
                            <div className="flex items-center gap-2 price">
                                <span className="check-item w-[15px] h-[15px] rounded-sm border-[1px] border-checkcolor cursor-pointer flex justify-center items-center">
                                    <FaCheck className="text-[14px] text-white" />
                                </span>
                                <p className="text-[15px] font-medium text-checkcolor cursor-pointer">₹5 - ₹100</p>
                            </div>
                            <div className="flex items-center gap-2 price">
                                <span className="check-item w-[15px] h-[15px] rounded-sm border-[1px] border-checkcolor cursor-pointer flex justify-center items-center">
                                    <FaCheck className="text-[14px] text-white" />
                                </span>
                                <p className="text-[15px] font-medium text-checkcolor cursor-pointer">₹100 - ₹200</p>
                            </div>
                            <div className="flex items-center gap-2 price">
                                <span className="check-item w-[15px] h-[15px] rounded-sm border-[1px] border-checkcolor cursor-pointer flex justify-center items-center">
                                    <FaCheck className="text-[14px] text-white" />
                                </span>
                                <p className="text-[15px] font-medium text-checkcolor cursor-pointer">₹200 - ₹300</p>
                            </div>
                            <div className="flex items-center gap-2 price">
                                <span className="check-item w-[15px] h-[15px] rounded-sm border-[1px] border-checkcolor cursor-pointer flex justify-center items-center">
                                    <FaCheck className="text-[14px] text-white" />
                                </span>
                                <p className="text-[15px] font-medium text-checkcolor cursor-pointer">₹300 - ₹400</p>
                            </div>
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
    )
}
export default AllProducts;