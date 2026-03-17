import imgProduct from "../../assets/Image-product3.png";
import { LuShoppingCart } from "react-icons/lu";
import deleteImg from "../../assets/delete-img.svg";
function WishlistProducts() {
    return (
        <section className="w-full h-full wishlist-products">
            <div className="container min-w-[100%] h-full">
                <table className="w-full border-[1px] border-borderColor rounded-sm">
                    <thead className="border-b-[1px] border-borderColor h-[37px] bg-gray100">
                        <th className="flex items-center justify-between pl-[23px] pr-[23px] pt-[10px] pb-[10px]">
                            <tr className="w-[30%]">
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
                            <tr></tr>
                        </th>
                    </thead>
                    <tbody className="flex justify-between w-full pl-[23px] pr-[23px] pt-[10px] pb-[10px] items-center">
                        <tr className="w-[30%] cursor-pointer">
                            <td className="flex items-center col-img-product gap-[15px]">
                                <div>
                                    <img src={imgProduct} alt="product-img" className="object-contain w-full h-full" />
                                </div>
                                <p className="text-[14px] font-sans text-gray-700">Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear Headphones for Workouts and Running, Triple Black</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="col-price text-[14px] text-gray900 font-semibold">
                                ₹1999.99
                            </td>
                        </tr>
                        <tr>
                            <td className="stock-status text-[14px] text-success500 font-semibold">
                                IN STOCK
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button className="add-to-cart w-[167px] h-[47px] bg-bgAddToCart rounded-sm flex gap-[8px] items-center justify-center text-[14px] font-bold text-whiteColor uppercase">
                                    add to card
                                    <LuShoppingCart className="w-[20px] h-[20px] text-whiteColor" />
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="cursor-pointer delete-product">
                                <img src={deleteImg} alt="delete-img" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}
export default WishlistProducts;