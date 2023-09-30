import React, { useState } from "react";
import { useApp } from "../withAppProvider";
import createOrder from "../api/createOrder";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cartItems, setCartItems } = useApp();
  const navigate = useNavigate();
  const [data, setData] = useState({
    First_name: "",
    Last_name: "",
    Email: "",
    Country: "",
    City: "",
    State: "",
    Address: "",
    Zipcode: "",
    Product_ids: "",
    Total: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const productIds = cartItems.map((item) => item.id).join(",");
    const productQuantities = cartItems.map((item) => item.quantity).join(",");
    const suppliersId = [
      ...new Set(cartItems.map((item) => item.user_id)),
    ].join(",");
    if (productIds) {
      const newOrder = { ...data };
      newOrder.Product_ids = productIds;
      newOrder.quantity = productQuantities;
      newOrder.Total = cartItems
        .reduce(
          (prev, curr) =>
            prev + parseFloat(curr.Product_Per_Price) * parseInt(curr.quantity),
          0
        )
        .toString();
      newOrder.user_ids = suppliersId;
      newOrder.status = "Pending";
      createOrder(newOrder).then((response) => {
        if (response.status === 200) {
          setCartItems([]);
          navigate("/order-confirmation");
        }
        setLoading(false);
      });
    }
  };
  return (
    <form className="sidebar-enabled sidebar-end" onSubmit={handleSubmit}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 content py-4">
            <h1 className="mb-3 pb-4">Checkout</h1>
            <h2 className="h3 pb-3">Billing details</h2>
            <div className="row mb-4">
              <div className="col-sm-6 mb-3 pb-1">
                <label className="form-label" htmlFor="first_name">
                  First name<sup className="text-danger ms-1">*</sup>
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="first_name"
                  name="First_name"
                  value={data.First_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-sm-6 mb-3 pb-1">
                <label className="form-label" htmlFor="last_name">
                  Last name<sup className="text-danger ms-1">*</sup>
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="last_name"
                  name="Last_name"
                  value={data.Last_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-sm-12 mb-3 pb-1">
                <label className="form-label" htmlFor="email">
                  Email address<sup className="text-danger ms-1">*</sup>
                </label>
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  name="Email"
                  value={data.Email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12 mb-3 pb-1">
                <label className="form-label" htmlFor="country">
                  Country<sup className="text-danger ms-1">*</sup>
                </label>
                <select
                  className="form-select"
                  id="country"
                  name="Country"
                  value={data.Country}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled hidden>
                    Choose country
                  </option>
                  <option value="Pakistan">Pakistan</option>
                </select>
              </div>
              <div className="col-12 mb-3 pb-1">
                <label className="form-label" htmlFor="city">
                  Town / City<sup className="text-danger ms-1">*</sup>
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="city"
                  name="City"
                  value={data.City}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12 mb-3 pb-1">
                <label className="form-label" htmlFor="state">
                  State<sup className="text-danger ms-1">*</sup>
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="state"
                  name="State"
                  value={data.State}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12 mb-3 pb-1">
                <label className="form-label" htmlFor="address">
                  Street address<sup className="text-danger ms-1">*</sup>
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="address"
                  placeholder="House number and street name"
                  name="Address"
                  value={data.Address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12 mb-3 pb-1">
                <label className="form-label" htmlFor="zipcode">
                  Zipcode<sup className="text-danger ms-1">*</sup>
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="zipcode"
                  name="Zipcode"
                  value={data.Zipcode}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 sidebar bg-secondary pt-5 ps-lg-4 pb-md-2">
            <div className="ps-lg-4 mb-3 pb-5">
              <h2 className="h4 pb-3">Your cart</h2>
              {cartItems.map((item) => (
                <div className="d-flex align-items-center mb-3" key={item.id}>
                  <img
                    className="rounded"
                    src={item.Product_Image}
                    alt="Product"
                    width="60"
                  />
                  <div className="w-100 ps-2 ms-1">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="me-3">
                        <h4 className="nav-heading fs-md mb-1">
                          {item.Product_name}
                        </h4>
                        <div className="d-flex align-items-center fs-sm">
                          <span className="me-2">
                            Rs. {item.Product_Per_Price}
                          </span>
                          <span className="me-2">x</span>
                          <input
                            className="form-control form-control-sm px-2"
                            type="number"
                            style={{ maxWidth: "3.5rem" }}
                            min="1"
                            value={item.quantity}
                            onChange={(event) => {
                              setCartItems((cart) =>
                                cart.map((it) =>
                                  it.id === item.id
                                    ? {
                                        ...it,
                                        quantity:
                                          parseInt(event.target.value) >=
                                          parseInt(item.Product_Available_Qty)
                                            ? parseInt(
                                                item.Product_Available_Qty
                                              )
                                            : parseInt(event.target.value),
                                      }
                                    : it
                                )
                              );
                            }}
                          />
                        </div>
                      </div>
                      <div className="ps-3 border-start">
                        <button
                          className="d-block text-danger text-decoration-none fs-xl border-0 bg-transparent"
                          data-bs-toggle="tooltip"
                          title="Remove"
                          onClick={() => {
                            setCartItems((prev) =>
                              prev.filter((it) => it.id !== item.id)
                            );
                          }}
                        >
                          <i className="ai-x-circle"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {cartItems.length === 0 && (
                <h4 className="text-center my-2">No item in the cart</h4>
              )}
              <hr className="mt-0 mb-4" />
              <div className="d-flex justify-content-between mb-3">
                <span className="h6 mb-0">Total:</span>
                <span className="h6 mb-0">
                  Rs.{" "}
                  {cartItems.reduce(
                    (prev, curr) =>
                      prev +
                      parseFloat(curr.Product_Per_Price) *
                        parseInt(curr.quantity),
                    0
                  )}
                </span>
              </div>
              <div
                className="accordion pt-4 mb-grid-gutter"
                id="payment-methods"
              >
                <div className="accordion-item bg-white shadow">
                  <h2 className="accordion-header" id="heading-3">
                    <button
                      className="accordion-button no-indicator collapsed"
                      type="button"
                    >
                      <div
                        className="form-check w-100"
                        data-bs-toggle="collapse"
                        data-bs-target="#cash"
                        aria-expanded="false"
                        aria-controls="cash"
                      >
                        <input
                          className="form-check-input"
                          type="radio"
                          id="cash-radio"
                          name="payment_method"
                          defaultChecked
                        />
                        <label
                          className="form-check-label d-flex align-items-center fs-base text-heading mb-0 mt-1"
                          htmlFor="cash-radio"
                        >
                          Cash on delivery
                        </label>
                      </div>
                    </button>
                  </h2>
                  <div
                    className="accordion-collapse collapse show"
                    id="cash"
                    aria-labelledby="heading-3"
                    data-bs-parent="#payment-methods"
                  >
                    <div className="accordion-body">
                      <p className="fs-ms mb-0">
                        You have selected to pay with cash upon delivery.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="btn btn-primary d-block w-100"
                type="submit"
                disabled={loading || cartItems.length === 0}
                style={{
                  height: 52,
                }}
              >
                {loading ? (
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  "Place order"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Checkout;
