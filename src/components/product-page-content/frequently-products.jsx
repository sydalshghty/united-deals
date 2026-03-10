import { FaStar } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { OrbitProgress } from "react-loading-indicators";
import { Link } from "react-router-dom";

function FrequentlyProducts() {
    const [products, setProducts] = useState([]);
    const getAllProducts = async () => {
        const res = await fetch(`https://dummyjson.com/products?limit=200`)

        const data = await res.json();

        setProducts(data.products);
    }

    useEffect(() => {
        getAllProducts();
    }, [])

    const electroProducts = products.filter(product => ["laptops", "smartphones", "electronics"]
        .some(category =>
            product.tags.includes(category)
        )
    );

    const sortElectroProducts = electroProducts.sort((a, b) => b.price - a.price);

    return (
        <section className="frequently-products w-full h-full mb-[40px]">
            <div className="container min-w-[100%] h-full">
                <div className="flex items-center justify-between w-full col-heading">
                    <h2 className="text-[26px] text-black uppercase font-bold">frequently bought together</h2>
                    <button className="w-[117px] h-[43px] bg-primary500 rounded-lg text-[14px] text-white font-medium">VIEW ALL</button>
                </div>
                <div className="all-frequently-products w-full flex gap-[14px] mt-5 mb-5 flex-wrap">
                    {sortElectroProducts.length === 0 ?
                        <div className="col-loading w-full min-h-[400px] flex justify-center items-center">
                            <OrbitProgress color="#FA8232" size="medium" text="" textColor="" />
                        </div>
                        :
                        <div className="flex flex-wrap items-center justify-center w-full gap-5 all-products">
                            {sortElectroProducts.map((product, index) => {
                                return (
                                    <Link to={`/Product/${product.id}`} key={product.id}>
                                        <div className="col-product"
                                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                        >

                                            <div className="col-img-product w-[280px] h-[250px] rounded-[25px] bg-bgImgProduct flex justify-center items-center mb-2">
                                                <div className="col-img w-[220px]">
                                                    <img src={product.images[0]} alt="product-img" className="object-contain w-full h-full" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2 information-product">
                                                <h2 className="text-[18px] text-darkgray font-semibold">{product.title.slice(0, 18)}</h2>
                                                <div className="col-rating flex gap-[5px] items-center">
                                                    <div className="all-stars flex items-center gap-[2px]">
                                                        <FaStar className="text-starColor" />
                                                        <FaStar className="text-starColor" />
                                                        <FaStar className="text-starColor" />
                                                        <FaStar className="text-starColor" />
                                                        <FaStar className="text-starColor" />
                                                        <p className="rate-p text-[13px] text-gray900 font-semibold">{product.rating}</p>
                                                    </div>
                                                    <div className="rating text-[13px]  text-gray600">
                                                        (21,671 Ratings)
                                                    </div>
                                                </div>
                                                <div className="col-buy-now w-full h-[44px] flex justify-center items-center bg-headingcolor rounded-lg cursor-pointer mt-2 text-[12px] font-medium text-whiteColor">
                                                    <p className="">BUY NOW- </p>
                                                    <span className="price-product text-primary500">{`₹${product.price}`}</span>
                                                </div>
                                            </div>

                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}
export default FrequentlyProducts;