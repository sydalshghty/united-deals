import "./customer-information.css";
function CustomerInformation() {
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
                <div className="order-summary">
                    order summary
                </div>
            </div>
        </section>
    )
}
export default CustomerInformation;