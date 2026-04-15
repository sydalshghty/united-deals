import productImg from "../../assets/Image-category-2.png";
import paypalImg from "../../assets/payment-paypal.svg";
import masterCardImg from "../../assets/payment-mastercard.svg";
import bitcoinImg from "../../assets/payment-bitcoin.svg";
import IconShopSummary from "../../assets/Icon-shop-summary.svg";
import { FaCheck } from "react-icons/fa6";
import "./product-confirmation.css";
function ConfirmationProduct() {
    return(
        <section className="product-confirmation-content w-full h-full mb-10">
            <div className="container min-w-[100%] h-full flex justify-between">
                <div className="all-details-order w-[70%] h-full p-6 bg-bgCategory flex flex-col"> 
                    <div className="all-shopping-products border-b-[2px] pb-5 border-borderColor">
                        <h2 className="text-[14px] text-[#4B5157] mb-3">Shopping items</h2>
                        <div className="all-products-shipping flex flex-col gap-5">
                            <div className="col-product w-full flex justify-between items-center">
                                <div className="img-title-product flex gap-4 items-center">
                                    <div className="col-img w-20 h-20 bg-textColor border-[1px] border-borderColor rounded-[10px]" >
                                        <img src={productImg} alt="product-img" className="w-full h-full object-contain"/>
                                    </div>
                                    <p className="text-[14px] text-textcolorPrimary">2 Pieces Mango set- Regular fit</p>
                                </div>
                                <div className="price-quantity-col flex flex-col gap-1 items-end">
                                    <span className="price-product text-[14px] text-colorPrice">₹25.99</span>
                                    <span className="text-[14px] text-colorPrice">x1</span>
                                </div>
                                <span className="total-price text-[14px] text-colorPrice">₹25.99</span>
                            </div>
                        </div>
                    </div>
                    <div className="paymant-method border-b-[2px] pb-5 pt-5 border-borderColor w-full">
                        <h2 className="text-[14px] text-colorPrice mb-3">Payment method</h2>
                        <div className="w-full flex justify-between items-center">
                            <span className="paymant-title text-[14px] text-textcolorPrimary">paypal</span>
                            <img src={paypalImg} alt="paymant-img" />
                        </div>
                    </div>
                    <div className="w-full information-client border-b-[2px] pb-5 pt-5 border-borderColor flex flex-col gap-2">
                        <div className="col-name w-full flex justify-between items-center">
                            <span className="text-[14px] text-textcolorPrimary capitalize">name</span>
                            <p className="text-[14px] text-textcolorPrimary capitalize">saeed mohamed</p>
                        </div>
                        <div className="col-email w-full flex justify-between items-center">
                            <span className="text-[14px] text-textcolorPrimary capitalize">email</span>
                            <p className="text-[14px] text-textcolorPrimary capitalize">sydalshghty15@gmail.com</p>
                        </div>
                        <div className="col-address w-full flex justify-between items-center">
                            <span className="text-[14px] text-textcolorPrimary capitalize">address</span>
                            <p className="text-[14px] text-textcolorPrimary capitalize">cairo,Egypt</p>
                        </div>
                        <div className="col-phone w-full flex justify-between items-center">
                            <span className="text-[14px] text-textcolorPrimary capitalize">phone</span>
                            <p className="text-[14px] text-textcolorPrimary capitalize">01271382350</p>
                        </div>
                    </div>
                </div>
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
                            <span className="text-sm font-bold text-textcolorPrimary">{`₹500`}</span>
                        </div>
                    </div>
                    <button className="shop-now w-full h-[52px] bg-bgshopnow pt-4 pb-4 pl-8 pr-8 rounded-lg flex justify-center items-center gap-2"
                    >
                        <img src={IconShopSummary} alt="icon-shop" />
                        <span className="text-sm font-medium text-white">CONFIRM</span>
                    </button>

                </div>
            </div>
        </section>
    )
}
export default ConfirmationProduct;