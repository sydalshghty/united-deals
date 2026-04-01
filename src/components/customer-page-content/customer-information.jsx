import "./customer-information.css";
import IconShopSummary from "../../assets/Icon-shop-summary.svg";
import { FaCheck } from "react-icons/fa6";
import { useSearchParams } from "react-router-dom";
function CustomerInformation() {
    const [searchParams] = useSearchParams();
    const totalPrice = searchParams.get("totalPrice");

    return (
        <section className="customer-information">
            <div className="container">
                <form action="" method="post">
                    <label htmlFor="">Customer Information</label>
                    <div className="email-name-cols">
                        <div className="col-email">
                            <label htmlFor="">E-mail</label>
                            <input type="text" name="E-mail" />
                        </div>
                        <div className="col-names">
                            <div className="first-name">
                                <label htmlFor="">First Name </label>
                                <input type="text" name="first-name" />
                            </div>
                            <div className="last-name">
                                <label htmlFor="">Last Name</label>
                                <input type="text" name="last-name" />
                            </div>
                        </div>
                    </div>
                    <div className="Shipping-Address-cols">
                        <label htmlFor="">Shipping Address</label>
                        <div className="col-Address">
                            <label htmlFor="">Address</label>
                            <input type="text" name="Address" />
                        </div>
                        <div className="col-Phone">
                            <label htmlFor="">Phone Number</label>
                            <input type="number" name="Phone Number" />
                        </div>
                    </div>
                </form>
                <div className="shadow-sm order-summary bg-bgSummary w-[309px] h-[365px] pt-5 pb-5 pl-10 pr-10 rounded-lg flex flex-col gap-7">
                    <h2 className="text-base font-bold text-textcolorPrimary">Order Summary</h2>
                    <div className="flex flex-col w-full gap-3 content-information-order">
                        <div className="flex items-center justify-between w-full h-full col-price">
                            <p className="text-sm font-medium text-colorPrice">Price</p>
                            <span className="text-sm font-medium text-colorPrice">₹99.23</span>
                        </div>
                        <div className="flex items-center justify-between w-full h-full col-shipping">
                            <p className="text-sm font-medium text-colorPrice">Shipping</p>
                            <span className="text-sm font-medium text-colorPrice">₹0</span>
                        </div>
                        <div className="flex items-center justify-between w-full h-full col-tax">
                            <p className="text-sm font-medium text-colorPrice">Tax</p>
                            <span className="text-sm font-medium text-colorPrice">₹0</span>
                        </div>
                        <div className="flex items-center justify-between w-full h-full col-discount-price">
                            <p className="text-sm font-medium text-colorPrice">Discount price</p>
                            <span className="text-sm font-medium text-colorPrice">₹47.10</span>
                        </div>
                        <div className="flex items-center justify-between w-full h-full col-gift-box">
                            <div className="flex items-center gap-2">
                                <span className="flex items-center justify-center w-5 h-5 col-checkbox bg-bgshopnow">
                                    <FaCheck className="text-white" />
                                </span>
                                <p className="text-sm font-medium text-colorPrice">Pack in a Gift Box</p>
                            </div>
                            <span className="text-sm font-medium text-colorPrice">₹10.90</span>
                        </div>
                        <div className="flex items-center justify-between w-full h-full pt-2 border-t-2 col-total-price border-textColor">
                            <p className="text-sm font-bold text-textcolorPrimary">Total Price</p>
                            <span className="text-sm font-bold text-textcolorPrimary">{`₹${totalPrice}`}</span>
                        </div>
                    </div>
                    <button className="shop-now w-full h-[52px] bg-bgshopnow pt-4 pb-4 pl-8 pr-8 rounded-lg flex justify-center items-center gap-2">
                        <img src={IconShopSummary} alt="icon-shop" />
                        <span className="text-sm font-medium text-white">NEXT</span>
                    </button>

                </div>
            </div>
        </section>
    )
}
export default CustomerInformation;