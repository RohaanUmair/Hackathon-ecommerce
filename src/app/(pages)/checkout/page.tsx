"use client";
import FormInput from "@/components/FormInput";
import { FaCircle, FaRegCircle } from "react-icons/fa";
import "./mainSection.css";
import { useEffect, useState } from "react";

interface CartItem {
  productId: number;
  title: string;
  price: number;
  quantity: number;
}

function MainSection() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Load cart data from localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
    
    // Calculate total
    const calculatedTotal = storedCart.reduce(
      (acc: number, item: CartItem) => acc + item.price * item.quantity,
      0
    );
    setTotal(calculatedTotal);
  }, []);

  return (
    <div className="checkout-main-sec">
      <div className="checkout-billingDetails">
        <h1 className="heading-billingDetails">Billing Details</h1>
        <div className="name-section-inputs">
          <FormInput label="First Name" width={212} />
          <FormInput label="Last Name" width={212} />
        </div>
        <FormInput label="Company Name (Optional)" />
        <FormInput
          label="Country / Region (Optional)"
          placeholder="Pakistan"
        />
        <FormInput label="Street address" />
        <FormInput label="Town / City" />
        <FormInput label="Province" placeholder="Province" />
        <FormInput label="ZIP Code" />
        <FormInput label="Phone" />
        <FormInput label="Email address" />
        <FormInput placeholder="Additional information" />
      </div>

      <div className="checkout-productDetails">
        <div className="upper-div">
          <div className="headings space-between">
            <h1>Product</h1>
            <h1>Subtotal</h1>
          </div>

          {cartItems.map((item, i: number) => (
            <div key={i} className="products space-between">
              <p>
                <span className="product-name">{item.title}</span> x {item.quantity}
              </p>
              <p className="product-price">Rs. {item.price * item.quantity}</p>
            </div>
          ))}

          <div className="sub-total space-between">
            <p className="total_subtotal-heading">Subtotal</p>
            <p className="product-price">Rs. {total}</p>
          </div>

          <div className="total space-between">
            <p className="total_subtotal-heading">Total</p>
            <p className="total-price">Rs. {total}</p>
          </div>
        </div>

        <div className="lower-div">
          <div className="sub-heading-products">
            <FaCircle className="circle-icon" />
            <h4>Direct Bank Transfer</h4>
          </div>

          <p className="bank-transfer-description">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>

          <div className="sub-heading-products">
            <FaRegCircle className="circle-icon gray" />
            <h4 className="gray">Direct Bank Transfer</h4>
          </div>

          <div className="sub-heading-products">
            <FaRegCircle className="circle-icon gray" />
            <h4 className="gray">Cash On Delivery</h4>
          </div>

          <p className="privacy-policy">
            Your personal data will be used to support your experience throughout
            this website, to manage access to your account, and for other purposes
            described in our <b>privacy policy.</b>
          </p>

          <div className="button-container">
            <button className="place-order-btn">Place order</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;