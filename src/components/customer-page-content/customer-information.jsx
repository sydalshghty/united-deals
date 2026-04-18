import "./customer-information.css";
import IconShopSummary from "../../assets/Icon-shop-summary.svg";
import { FaCheck } from "react-icons/fa6";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function CustomerInformation() {
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const totalPrice = searchParams.get("totalPrice");

    const [email,setEmail] = useState("");
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [address,setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [error,setError] = useState(null);
    
    const handleSubmit = () => {
        if(email === "" || firstName === "" || lastName === "" || address === "" || phone === ""){
            setError("*pleace fill all the field")
        }
        else{
            localStorage.setItem("customer-information", 
                JSON.stringify({"firstName": firstName, "lastName": lastName, "email": email, "phone": phone, "address": address}));
            localStorage.setItem("totalPrice", totalPrice);
            setError("");
            navigate(`/paymant-shipping`);
        }
    }

    return (
        <section className="customer-information w-full h-full mb-10">
            <div className="container min-w-[100%] h-full flex gap-[60px]">
                <form  method="GET" className="w-[70%] flex flex-col gap-5">
                    <label htmlFor="" className="text-[20px] font-bold text-textcolorPrimary capitalize">Customer Information</label>
                    <div className="email-name-cols flex flex-col gap-3">
                        <div className="col-email flex flex-col gap-1">
                            <label htmlFor="" className="text-[14px] font-semibold text-colorPrice">E-mail</label>
                            <input type="email" name="E-mail" value={email} required className="h-[40px] p-3 rounded-[4px] border-[1px] border-textColor outline-none"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="col-names flex gap-4 w-full">
                            <div className="first-name flex flex-col gap-1 w-[50%]">
                                <label htmlFor="" className="text-[14px] font-semibold text-colorPrice">First Name </label>
                                <input type="text" name="first-name" value={firstName} required className="h-[40px] p-3 rounded-[4px] border-[1px] border-textColor outline-none"
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className="last-name flex flex-col gap-1 w-[50%]">
                                <label htmlFor="" className="text-[14px] font-semibold text-colorPrice">Last Name</label>
                                <input type="text" name="last-name" value={lastName} required className="h-[40px] p-3 rounded-[4px] border-[1px] border-textColor outline-none"
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="Shipping-Address-cols flex flex-col gap-5">
                        <label htmlFor="" className="text-[16px] font-bold text-textcolorPrimary capitalize">Shipping Address</label>
                        <div className="address-phone-col flex flex-col gap-3">
                            <div className="col-Address flex flex-col gap-1">
                                <label htmlFor="" className="text-[14px] font-semibold text-colorPrice">Address</label>
                                <input type="text" name="Address" value={address} required className="h-[40px] p-3 rounded-[4px] border-[1px] border-textColor outline-none"
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                            <div className="col-Phone flex flex-col gap-1">
                                <label htmlFor="" className="text-[14px] font-semibold text-colorPrice">Phone Number</label>
                                <input type="tel" name="Phone Number" value={phone} required className="h-[40px] p-3 rounded-[4px] border-[1px] border-textColor outline-none"
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <p className="p-error text-[15px] capitalize text-red-500 font-bold">{error}</p>
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
                    <button className="shop-now w-full h-[52px] bg-bgshopnow pt-4 pb-4 pl-8 pr-8 rounded-lg flex justify-center items-center gap-2"
                        onClick={() => {
                            handleSubmit();
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
export default CustomerInformation;