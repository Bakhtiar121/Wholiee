import React from "react";
import { Container, Row } from "react-bootstrap";
import { useApp } from "../withAppProvider";

function AllAds({ products }) {
  const { cartItems, setCartItems } = useApp();
  return (
    <Container className="my-5 min-vh-100">
      <h1 className="mb-3">All Products</h1>
      <Row>
        {products.map((product) => (
          <div
            key={product.id}
            className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter"
          >
            <div
              className="card card-product card-hover"
              style={{
                height: 400,
              }}
            >
              <button
                className="card-img-top border-0 bg-transparent"
                style={{ height: 232 }}
              >
                <img src={product.Product_Image} alt="Product thumbnail" />
              </button>
              <div className="card-body">
                <button className="meta-link fs-xs mb-1 border-0 bg-transparent">
                  {product.Product_Category}
                </button>
                <h3 className="fs-md fw-medium mb-2">
                  <button className="meta-link border-0 bg-transparent">
                    {product.Product_name}
                  </button>
                </h3>
                <span className="text-heading fw-semibold">
                  Rs. {product.Product_Per_Price}
                </span>
              </div>
              <div className="card-footer justify-content-center">
                <div className="d-flex align-items-center">
                  {parseInt(product.Product_Available_Qty) === 0 ? (
                    <span className="text-danger">Out of stock</span>
                  ) : (
                    <button
                      className="btn-addtocart border-0 bg-transparent"
                      onClick={() => {
                        if (cartItems.some((item) => item.id === product.id)) {
                          setCartItems((cart) =>
                            cart.map((item) =>
                              item.id === product.id
                                ? {
                                    ...item,
                                    quantity:
                                      item.quantity >=
                                      parseInt(product.Product_Available_Qty)
                                        ? parseInt(
                                            product.Product_Available_Qty
                                          )
                                        : item.quantity + 1,
                                  }
                                : item
                            )
                          );
                        } else {
                          setCartItems((cart) => [
                            ...cart,
                            { ...product, quantity: 1 },
                          ]);
                        }
                      }}
                    >
                      <i className="ai-shopping-cart"></i>
                      <span className="btn-tooltip">To Cart</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Row>
    </Container>
  );
}

export default AllAds;
