import React from "react";
import { NavLink } from "react-router-dom";
import { useApp } from "../withAppProvider";

function Cart() {
  const { cartItems, setCartItems } = useApp();
  return (
    <div className="offcanvas offcanvas-end" id="shoppingCart">
      <div className="offcanvas-header navbar-shadow px-4 mb-2">
        <h5 className="mt-1 mb-0">Your cart</h5>
        <button
          className="btn-close lead"
          type="button"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      {cartItems.length > 0 ? (
        <>
          <div className="offcanvas-body p-4" data-simplebar>
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
                                          ? parseInt(item.Product_Available_Qty)
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
          </div>
          <div className="offcanvas-footer d-block border-top px-4 mb-2">
            <div className="d-flex justify-content-between mb-4">
              <span>Total:</span>
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
            <NavLink
              to="checkout"
              className="btn btn-primary btn-sm d-block w-100"
            >
              <i className="ai-credit-card fs-base me-2"></i>Checkout
            </NavLink>
          </div>
        </>
      ) : (
        <h4 className="text-center mt-4">No item in the cart</h4>
      )}
    </div>
  );
}

export default Cart;
