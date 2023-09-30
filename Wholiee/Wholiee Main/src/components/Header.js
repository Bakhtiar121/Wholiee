import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";
import getCategories from "../api/getCategories";
import Cart from "./Cart";
import { useApp } from "../withAppProvider";

function Header() {
  const { cartItems } = useApp();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getCategories().then((response) => {
      setCategories(response.data);
    });
  }, []);

  useEffect(() => {
    if (searchParams.get("query")) {
      setSearch(searchParams.get("query"));
    } else {
      setSearch("");
    }
  }, [searchParams]);

  const handleSearchQuery = () => {
    navigate("/search?query=" + search);
  };

  return (
    <>
      <Cart />
      <header className="header">
        <div
          className="navbar navbar-expand-lg navbar-light bg-light navbar-shadow navbar-sticky"
          data-scroll-header
          data-fixed-element
        >
          <div className="container px-0 px-xl-3">
            <button
              className="navbar-toggler ms-n2 me-4"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#primaryMenu"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <NavLink
              to="/"
              className="navbar-brand flex-shrink-0 order-lg-1 mx-auto ms-lg-0 pe-lg-2 me-lg-4"
            >
              <img
                className="d-none d-lg-block"
                src="img/logo/logo .png"
                alt="logo"
                width="90"
              />
              <img
                className="d-lg-none"
                src="img/logo/logo .png"
                alt="logo"
                width="80"
              />
            </NavLink>

            <div className="d-flex align-items-center order-lg-3 ms-lg-auto">
              <div className="navbar-tool me-2">
                <button
                  className="navbar-tool-icon-box border-0 bg-transparent"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#shoppingCart"
                >
                  <i className="ai-shopping-cart"></i>
                  {cartItems.length > 0 && (
                    <span className="navbar-tool-badge">
                      {cartItems.length}
                    </span>
                  )}
                </button>
              </div>
            </div>
            <div
              className="offcanvas offcanvas-collapse order-lg-2"
              id="primaryMenu"
            >
              <div className="offcanvas-header navbar-shadow">
                <h5 className="mt-1 mb-0">Menu</h5>
                <button
                  className="btn-close lead"
                  type="button"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body justify-content-center">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="all-ads"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      All Ads
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <button
                      className="nav-link dropdown-toggle bg-transparent border-0"
                      data-bs-toggle="dropdown"
                    >
                      Categories
                    </button>
                    <ul className="dropdown-menu">
                      {categories.map((category) => (
                        <li key={category.id} className="nav-item">
                          <Link
                            to={`categories?name=${category.category.toLowerCase()}`}
                            className="dropdown-item"
                            replace
                          >
                            {category.category}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="about-us"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="contact-us"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      Contact Us
                    </NavLink>
                  </li>
                  <li className="nav-item d-flex align-self-center">
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Search for products..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      style={{
                        borderRadius: "0.75rem 0 0 0.75rem",
                      }}
                    />
                    <button
                      className="btn btn-primary"
                      style={{
                        borderRadius: "0 0.75rem 0.75rem 0",
                      }}
                      onClick={handleSearchQuery}
                    >
                      Search
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
