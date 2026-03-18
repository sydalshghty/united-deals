import iconLogo from "../../assets/icon-logo-cart.svg";
import searchIcon from "../../assets/Search.svg";
import flashSaleIcon from "../../assets/flash-sale.svg";
import myDealsIcon from "../../assets/my-deals-icon.svg";
import { FiUser } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import "./cart-style.css";
function CenterHeaderCart() {
    const numCartProducts = useSelector(state => state.cartProducts.cartProducts.length);
    const heartLength = useSelector(state => state.heartsProducts.heartsProducts.length);

    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([]);
    const [searchMobile, setSearchMobile] = useState(false);

    const getSearchProducts = async () => {
        const res = await fetch(`https://dummyjson.com/products/search?q=${search}`);
        const data = await res.json();
        setProducts(data.products);
    }

    useEffect(() => {
        getSearchProducts()
    }, [search]);

    return (
        <>
            <section className="w-full h-[90px] center-header-cart bg-whiteColor relative">
                <div className="container min-w-[100%] h-full flex justify-between items-center relative">
                    <Link to={"/"}>
                        <div className="flex items-center gap-5 cursor-pointer col-logo">
                            <img src={iconLogo} alt="icon-logo-cart" className="cursor-pointer" />
                            <h1 className="text-[30px] font-extrabold uppercase text-black">United Deals</h1>
                            <img src={flashSaleIcon} alt="flash-sale-icon" className="flash-sale-img" />
                        </div>
                    </Link>
                    <form action="" className="flex items-center w-[25%] h-12 bg-bgColor rounded-lg pl-3 pr-3 gap-3">
                        <button type="submit">
                            <img src={searchIcon} alt="search-icon" />
                        </button>
                        <input type="text"
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search essentials, groceries and more..."
                            className="w-full h-full text-sm bg-transparent border-none outline-none text-colorPlaceholder" />
                    </form>
                    {search.length >= 3
                        ?
                        <div className="content-result-search absolute top-[90px] w-full flex justify-center items-center">
                            <div className="all-result-search w-[35%] max-h-[320px] overflow-y-auto shadow-lg bg-white rounded p-2">
                                <div className="flex items-center justify-between w-full heading-search border-b-[1px] border-borderColor pb-1">
                                    <p className="text-[17px] text-black">Your Search</p>
                                    <FaXmark className="cursor-pointer text-[20px]" onClick={() => setSearch("")} />
                                </div>
                                {products.length === 0 ?
                                    <div className="h-[250px] flex justify-center items-center">
                                        <h1 className="text-center text-black capitalize">product not found</h1>
                                    </div>
                                    :
                                    <>
                                        {products.map((product, index) => {
                                            return (
                                                <Link to={`/Product/${product.id}`} key={product.id}>
                                                    <div className="col-product flex justify-between items-center border-b-[1px] border-borderColor p-1 cursor-pointer"
                                                        onClick={() => setSearch("")}
                                                    >
                                                        <div className="flex items-center gap-1 col-img">
                                                            <div className="w-[120px] h-[55px]">
                                                                <img src={product?.images[0]} alt="product-img" className="object-contain w-full h-full" />
                                                            </div>
                                                            <h1 className="text-[13px] font-semibold text-black">{product.title}</h1>
                                                        </div>
                                                        <span className="text-[14px] font-bold text-primary500">{`₹${product.price}`}</span>
                                                    </div>
                                                </Link>
                                            )
                                        })}
                                    </>

                                }
                            </div>
                        </div>
                        :
                        null
                    }
                    <div className="flex items-center gap-5 sign-in-cart-content">
                        {searchMobile ?

                            <FaXmark
                                onClick={() => {
                                    setSearchMobile(!searchMobile)
                                    setSearch("");
                                }
                                }
                                className="search-icon w-[20px] h-[20px] text-black cursor-pointer hover:text-dealsColor transition-colors duration-500" />
                            :
                            <FiSearch
                                onClick={() => setSearchMobile(!searchMobile)}
                                className="search-icon w-[20px] h-[20px] text-black cursor-pointer hover:text-dealsColor transition-colors duration-500" />
                        }

                        <div className="col-deals flex items-center gap-[6px]">
                            <img src={myDealsIcon} alt="my-deals-icon" />
                            <p className="text-base text-dealsColor my-deals-p">My Deals</p>
                        </div>
                        <div className="items-center cursor-pointer col-user">
                            <FiUser className="w-[20px] h-[20px] text-black hover:text-primary500 transition-colors duration-500" />
                        </div>
                        <Link to={`/wishlist`}>
                            <div className="relative cursor-pointer col-wishlist">
                                <FaRegHeart className="w-[20px] h-[20px] text-black hover:text-primary500 transition-colors duration-500" />
                                <span className="absolute top-[-10px] left-[12px] w-4 h-4 text-white bg-blackcolor rounded-full number-cart flex justify-center items-center text-[12px] font-sans">
                                    {heartLength}
                                </span>
                            </div>
                        </Link>
                        <Link to={"/cart"}>
                            <div className="flex gap-[6px] col-cart items-center cursor-pointer relative">
                                <FiShoppingCart className="w-[20px] h-[20px] text-black hover:text-primary500 transition-colors duration-500" />
                                <span className="absolute top-[-10px] left-[12px] w-4 h-4 text-white bg-blackcolor rounded-full number-cart flex justify-center items-center text-[12px] font-sans">
                                    {numCartProducts}
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
                {searchMobile ?
                    <form action="" className="form-search-mobile flex items-center w-full h-12 bg-bgColor rounded-lg pl-3 pr-3 gap-3 absolute bottom-[-60px] left-0">
                        <button type="submit">
                            <img src={searchIcon} alt="search-icon" />
                        </button>
                        <input type="text"
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search essentials, groceries and more..."
                            className="w-full h-full text-sm bg-transparent border-none outline-none text-colorPlaceholder" />
                    </form>
                    :
                    null
                }
                {search.length >= 3
                    ?
                    <div className="content-result-search-mobile absolute top-[140px] w-full flex justify-center items-center">
                        <div className="all-result-search w-full max-h-[320px] overflow-y-auto shadow-lg bg-white rounded p-2">
                            {products.length === 0 ?
                                <div className="h-[250px] flex justify-center items-center">
                                    <h1 className="text-center text-black capitalize">product not found</h1>
                                </div>
                                :
                                <>
                                    {products.map((product, index) => {
                                        return (
                                            <Link to={`/Product/${product.id}`} key={product.id}>
                                                <div className="col-product flex justify-between items-center border-b-[1px] border-borderColor p-1 cursor-pointer"
                                                    onClick={() => {
                                                        setSearch("");
                                                        setSearchMobile(false)
                                                    }


                                                    }
                                                >
                                                    <div className="flex items-center gap-1 col-img">
                                                        <div className="w-[120px] h-[55px]">
                                                            <img src={product?.images[0]} alt="product-img" className="object-contain w-full h-full" />
                                                        </div>
                                                        <h1 className="text-[13px] font-semibold text-black">{product.title}</h1>
                                                    </div>
                                                    <span className="text-[14px] font-bold text-primary500">{`₹${product.price}`}</span>
                                                </div>
                                            </Link>
                                        )
                                    })}
                                </>

                            }
                        </div>
                    </div>
                    :
                    null
                }
            </section>
        </>
    )
}
export default CenterHeaderCart;