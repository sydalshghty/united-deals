import paypalImg from "../../assets/payment-paypal.svg";
import mastercardImg from "../../assets/payment-mastercard.svg";
import bitcoinImg from "../../assets/payment-bitcoin.svg";
import { useState } from "react";
import IconShopSummary from "../../assets/Icon-shop-summary.svg";
import { FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import "./paymant-method.css";
function PaymantMethod(){
    const navigate = useNavigate("")
    const allMethods= [
        {id: 1, title: "PayPal", img: paypalImg, description: "PayPal is a trusted online payment platform that allows individuals and businesses to securely send and receive money electronically"},
        {id: 2, title: "Mastercard", img: mastercardImg, description: "Mastercard is a trusted online payment platform that allows individuals and businesses to securely send and receive money electronically"},
        {id: 3, title: "Bitcoin", img: bitcoinImg, description: "Bitcoin is a trusted online payment platform that allows individuals and businesses to securely send and receive money electronically"}
    ]

    const [paymant,setPaymant] = useState(null);
    const [error,setError] = useState("");
    const totalPrice = localStorage.getItem("totalPrice");

    const handlePaymant = () => {
        if(paymant === null){
            setError("*Please choose a payment method")
        }else{
            localStorage.setItem("paymantMethod", paymant);
            setError("")
            navigate(`/product-confirmation`);
        }
    }
    
    return(
        <section className="paymant-method w-full h-full mt-[40px] mb-[40px]">
            <div className="container min-w-[100%] h-full flex justify-between">
                <div className="paymant-method">
                    <div className="col-heading flex flex-col gap-2 mb-[16px]">
                        <h1 className="text-[20px] font-bold text-textcolorPrimary">Payment</h1>
                        <p className="text-[14px] text-colorPrice">Please choose a payment method</p>
                    </div>
                    <div className="all-method-paymant flex flex-col gap-4">
                        {allMethods.map((method,index) => {
                            return(             
                                <div key={method.id} 
                                onClick={() => setPaymant(method.title)}
                                className={`col-method ${paymant === method.title ? "active" : ""} w-[90%] max-h-fit pt-3 pb-3 pl-4 pr-4 rounded-[4px] flex flex-col gap-2 bg-bgCategory  transition-colors duration-500 cursor-pointer`}>
                                    <div className="check-method flex justify-between items-center">
                                        <div className="flex items-center gap-1">
                                            <span className={`${paymant === method.title ? "active" : ""} w-[20px] h-[20px]  rounded-full bg-white border-[2px] border-borderColor`}></span>
                                            <p className="text-[14px] font-bold text-textcolorPrimary">{method.title}</p>
                                        </div>
                                        <img src={method.img} alt="method-img" />
                                    </div>
                                    <p className="description-method text-[13px] text-colorPrice">
                                        {method.description}
                                    </p>
                                </div>
                           )
                        })}
                    </div>
                    <p className="capitalize text-red-500 text-[15px] font-bold mt-3">{error}</p>
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
                    <button className="shop-now w-full h-[52px] bg-bgshopnow pt-4 pb-4 pl-8 pr-8 rounded-lg flex justify-center items-center gap-2"
                        onClick={() => {
                            handlePaymant()
                        }}
                    >
                        <img src={IconShopSummary} alt="icon-shop" />
                        <span className="text-sm font-medium text-white">NEXT</span>
                    </button>
                </div>
            </div>
        </section>
    )
}
export default PaymantMethod;