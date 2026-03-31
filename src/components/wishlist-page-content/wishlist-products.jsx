import { LuShoppingCart } from "react-icons/lu";
import deleteImg from "../../assets/delete-img.svg";
import { useSelector, useDispatch } from "react-redux";
import { removeProductHeart } from "../../store/slices.jsx/HeartSlice";
import { addToCart } from "../../store/slices.jsx/cart-products-slice";
import toast from "react-hot-toast";
function WishlistProducts() {
    const heartProducts = useSelector(state => state.heartsProducts.heartsProducts);
    const dispatch = useDispatch();

    return (
        <section className="w-full h-full wishlist-products mb-[40px]">
            <div className="container min-w-[100%] h-full">
                {heartProducts.length === 0 ?
                    <div className="col-not-found w-full h-[400px] flex justify-center items-center capitalize text-[55px] font-bold">
                        not found products
                    </div>
                    :
                    <table className="w-full border-[1px] border-borderColor rounded-sm">
                        <thead className="border-b-[1px] border-borderColor h-[37px] bg-gray100 flex items-center justify-between pl-[23px] pr-[23px] pt-[10px] pb-[10px]">
                            <tr className="w-[40%] head-one">
                                <td className="text-[12px] text-gray-700 font-sans font-medium uppercase">Products</td>
                            </tr>
                            <tr>
                                <td className="text-[12px] text-gray-700 font-sans font-medium uppercase">Price</td>
                            </tr>
                            <tr>
                                <td className="text-[12px] text-gray-700 font-sans font-medium uppercase">Stock Status</td>
                            </tr>
                            <tr className="text-[12px] text-gray-700 font-sans font-medium uppercase">
                                <td>Actions</td>
                            </tr>
                            <tr></tr>
                            <tr className="last-tr"></tr>

                        </thead>
                        <>
                            {heartProducts.map((product, index) => {
                                return (
                                    <tbody className="flex justify-between w-full pl-[23px] pr-[23px] pt-[10px] pb-[10px] items-center border-b-[1px] border-borderColor" key={product.id}>
                                        <tr className="w-[40%] col-one">
                                            <td className="flex items-center col-img-product gap-[15px]">
                                                <div className="w-[300px] col-img">
                                                    <img src={product?.images[0]} alt="product-img" className="object-contain w-full h-full" />
                                                </div>
                                                <p className="text-[14px] font-sans text-gray-700 min-w-[100% - 300px ]">{product?.description}</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="col-price text-[14px] text-gray900 font-semibold">
                                                {`₹${product?.price}`}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="stock-status text-[14px] text-success500 font-semibold">
                                                {`${product.availabilityStatus}`}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <button className="add-to-cart w-[167px] h-[47px] bg-bgAddToCart rounded-sm flex gap-[8px] items-center justify-center text-[14px] font-bold text-whiteColor uppercase"
                                                    onClick={() => {
                                                        dispatch(addToCart(product));
                                                        toast.success("Added to Cart successfully");
                                                    }}
                                                >
                                                    <p>add to card</p>
                                                    <LuShoppingCart className="w-[20px] h-[20px] text-whiteColor icon-cart" />
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="cursor-pointer delete-product"
                                                onClick={() =>
                                                    dispatch(removeProductHeart(product.id))
                                                }
                                            >
                                                <img src={deleteImg} alt="delete-img" />
                                            </td>
                                        </tr>
                                    </tbody>
                                )
                            })}
                        </>
                    </table>
                }
            </div>
        </section>
    )
}
export default WishlistProducts;