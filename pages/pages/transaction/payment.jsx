import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import "./payment.css";

export const Payment = () => {
    const [billingInfo, setBillingInfo] = useState({
        fullName: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        sameAsBilling: true,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBillingInfo({ ...billingInfo, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Process the form data and navigate to the payment page
        // You can implement the processForm function here
        // For simplicity, let's assume it's processed successfully

        // Redirect to the payment page
        // Replace 'payment.html' with the actual route for your payment page
        window.location.href = "payment.html";
    };

    return (
        <div className="pay-bordercontainer">
            <h2>Welcome to the payment screen!</h2>
            <p>Please enter the necessary information to process the payment.</p>
            <div className="row">
                <div className="col-75">
                    <div className="pay-container">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-50">
                                    <h3>Billing Address</h3>
                                    <label htmlFor="fname">
                                        <i className="fa fa-user"></i> Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="fname"
                                        name="fullName"
                                        placeholder="Ali Rugumathan"
                                        value={billingInfo.fullName}
                                        onChange={handleInputChange}
                                    />
                                    <label htmlFor="email">
                                        <i className="fa fa-envelope"></i> Email
                                    </label>
                                    <input
                                        type="text"
                                        id="email"
                                        name="email"
                                        placeholder="ali345@gmail.com"
                                        value={billingInfo.email}
                                        onChange={handleInputChange}
                                    />
                                    <label htmlFor="adr">
                                        <i className="fa fa-address-card-o"></i> Address
                                    </label>
                                    <input
                                        type="text"
                                        id="adr"
                                        name="address"
                                        placeholder="954, Jalan Murni 6"
                                        value={billingInfo.address}
                                        onChange={handleInputChange}
                                    />
                                    <label htmlFor="city">
                                        <i className="fa fa-institution"></i> City
                                    </label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        placeholder="Pudu"
                                        value={billingInfo.city}
                                        onChange={handleInputChange}
                                    />
                                    <div className="row">
                                        <div className="col-50">
                                            <label htmlFor="state">State</label>
                                            <input
                                                type="text"
                                                id="state"
                                                name="state"
                                                placeholder="Kuala Lumpur"
                                                value={billingInfo.state}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="col-50">
                                            <label htmlFor="zip">Postcode</label>
                                            <input
                                                type="text"
                                                id="zip"
                                                name="zip"
                                                placeholder="10001"
                                                value={billingInfo.zip}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-50">
                                    <h3>Payment</h3>
                                    <label>Accepted Wallets</label>
                                    <div className="icon-container">
                                        <img
                                            src="../../images/Phantom-Icon_Circle_128x128.png"
                                            width="50px"
                                            height="50px"
                                            alt="Phantom Icon"
                                        />
                                        <img
                                            src="../../images/Solflare-Wallet-Icon.png"
                                            width="50px"
                                            height="50px"
                                            alt="Solflare Wallet Icon"
                                        />
                                        <img
                                            src="../../images/glow-wallet-icon.jpg"
                                            width="50px"
                                            height="50px"
                                            alt="Glow Wallet Icon"
                                        />
                                    </div>
                                </div>
                            </div>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={billingInfo.sameAsBilling}
                                    name="sameAsBilling"
                                    onChange={(e) =>
                                        setBillingInfo({
                                            ...billingInfo,
                                            sameAsBilling: e.target.checked,
                                        })
                                    }
                                />{" "}
                                Shipping address same as billing
                            </label>
                            <input
                                type="submit"
                                value="Continue to checkout"
                                className="btn"
                            />
                        </form>
                    </div>
                </div>
                <div className="col-25">
                    <div className="pay-container">
                        <h4>
                            Cart{" "}
                            <span className="price" style={{ color: "black" }}>
                                <i className="fa fa-shopping-cart"></i> <b>1</b>
                            </span>
                        </h4>
                        <p>
                            <a href="#">Product 1</a>{" "}
                            <span className="price">15 SOL</span>
                        </p>
                        <hr />
                        <p>
                            Total{" "}
                            <span className="price" style={{ color: "black" }}>
                                <b>15 SOL</b>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};


