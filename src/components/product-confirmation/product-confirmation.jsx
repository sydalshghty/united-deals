import paypalImg from "../../assets/payment-paypal.svg";
import masterCardImg from "../../assets/payment-mastercard.svg";
import bitcoinImg from "../../assets/payment-bitcoin.svg";
import IconShopSummary from "../../assets/Icon-shop-summary.svg";
import { FaCheck } from "react-icons/fa6";
import "./product-confirmation.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function ConfirmationProduct() {
    const state = useSelector((state) => state.cartProducts.cartProducts);
   
    const allProductsShipping = JSON.parse(localStorage.getItem("cart-products"));
    const paymantMethod = localStorage.getItem("paymantMethod");
    const customerInformation = JSON.parse(localStorage.getItem("customer-information"));
    const totalPrice = localStorage.getItem("totalPrice");
    const handleMethod = () => {
        if(paymantMethod === "PayPal"){
            return(
                <img src={paypalImg} alt="paypal" />
            )
        }else if(paymantMethod === "Mastercard"){
            return(
                <img src={masterCardImg} alt="mastercard" />
            )
        }else if(paymantMethod === "Bitcoin"){
            return(
                <img src={bitcoinImg} alt="Bitcoin" />
            )
        }
    }

    return(
        <section className="product-confirmation-content w-full h-full mb-10">
            <div className="container min-w-[100%] h-full flex justify-between">
                <div className="all-details-order w-[60%] h-full p-6 bg-bgCategory flex flex-col"> 
                    <div className="all-shopping-products border-b-[2px] pb-5 border-borderColor">
                        <h2 className="text-[14px] text-[#4B5157] mb-3">Shopping items</h2>
                        <div className="all-products-shipping flex flex-col gap-5">
                            {state.length === 0 ? 
                                <div className="col-loading h-32 flex justify-center items-center">
                                    <h1 className="capitalize text-[15px]">not product found</h1>
                                </div>
                                :
                                <>
                                    {state.map((product,index) => {
                                        return(
                                            <div className="col-product w-full flex justify-between items-center" key={product.id}>
                                                <div className="img-title-product flex gap-1 w-[30%]">
                                                    <div className="col-img w-24 h-20  bg-white border-[1px] border-borderColor rounded-[10px] flex justify-center items-center" >
                                                        <img src={product?.images[0]} alt="product-img" width={70} />
                                                    </div>
                                                    <p className="text-[14px] text-textcolorPrimary">{product.title}</p>
                                                </div>
                                                <div className="price-quantity-col flex flex-col gap-1 items-end">
                                                    <span className="price-product text-[14px] text-colorPrice">{`₹${product.price}`}</span>
                                                    <span className="text-[14px] text-colorPrice">{`x${product.quantity}`}</span>
                                                </div>
                                                <span className="total-price text-[14px] text-colorPrice">{`₹${product.price * product.quantity}`}</span>
                                            </div>
                                        )
                                    })}
                                </>
                            }      
                        </div>
                    </div>
                    <div className="paymant-method border-b-[2px] pb-5 pt-5 border-borderColor w-full">
                        <h2 className="text-[14px] text-colorPrice mb-3">Payment method</h2>
                        <div className="w-full flex justify-between items-center">
                            <span className="paymant-title text-[14px] text-textcolorPrimary">{paymantMethod}</span>
                            {handleMethod()}
                        </div>
                    </div>
                    <div className="w-full information-client border-b-[2px] pb-5 pt-5 border-borderColor flex flex-col gap-2">
                        <div className="col-name w-full flex justify-between items-center">
                            <span className="text-[14px] text-textcolorPrimary capitalize">name</span>
                            <p className="text-[14px] text-textcolorPrimary capitalize">{`${customerInformation?.firstName} ${customerInformation?.lastName}`}</p>
                        </div>
                        <div className="col-email w-full flex justify-between items-center">
                            <span className="text-[14px] text-textcolorPrimary capitalize">email</span>
                            <p className="text-[14px] text-textcolorPrimary capitalize">{`${customerInformation?.email}`}</p>
                        </div>
                        <div className="col-address w-full flex justify-between items-center">
                            <span className="text-[14px] text-textcolorPrimary capitalize">address</span>
                            <p className="text-[14px] text-textcolorPrimary capitalize">{`${customerInformation?.address}`}</p>
                        </div>
                        <div className="col-phone w-full flex justify-between items-center">
                            <span className="text-[14px] text-textcolorPrimary capitalize">phone</span>
                            <p className="text-[14px] text-textcolorPrimary capitalize">{`${customerInformation?.phone}`}</p>
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
                            <span className="text-sm font-bold text-textcolorPrimary">{`₹${totalPrice}`}</span>
                        </div>
                    </div>
                    <Link to={`/order-successfully`} onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>
                        <button className="shop-now w-full h-[52px] bg-bgshopnow pt-4 pb-4 pl-8 pr-8 rounded-lg flex justify-center items-center gap-2"
                        >
                            <img src={IconShopSummary} alt="icon-shop" />
                            <span className="text-sm font-medium text-white">CONFIRM</span>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
export default ConfirmationProduct;