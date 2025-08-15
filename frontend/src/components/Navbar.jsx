import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";

const TopStatsBar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <div
      style={{
        background: "#FF0100",
        color: "white",
        fontSize: "13px",
        fontWeight: 500,
      }}
    >
      <div className="container-fluid">
        <div className="row align-items-center py-2">
          {/* ✅ Left (Stats/Tagline) */}
          <div className="col-md-3 d-none d-md-flex justify-content-start gap-3">
            <div className="d-flex align-items-center gap-1">
              <i className="fas fa-star"></i>
              <span>Trusted by 2.6K+ Customers</span>
            </div>
            <div className="d-flex align-items-center gap-1">
              <i className="fas fa-check-circle"></i>
              <span>100K+ Orders Served</span>
            </div>
          </div>

          {/* ✅ Center (Scrolling Deals Banner) */}
          <div className="col-12 col-md-6 text-center">
            <div
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                position: "relative",
                height: "20px",
                fontWeight: 600,
                fontSize: "14px",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  paddingLeft: "100%",
                  animation: "scroll-left 15s linear infinite",
                }}
              >
                Free Delivery on First Order | Up to 50% OFF on Popular
                Restaurants | Order Now & Save Big!
              </div>
            </div>
          </div>

          {/* ✅ Right (User Info + Cart) */}
          {/* ✅ Right (User Info + Admin Login + Cart) */}
<div className="col-md-3 d-flex justify-content-center justify-content-md-end mt-2 mt-md-0 gap-2">
  {user ? (
    <div className="d-flex align-items-center gap-2">
      {/* 👇 Admin Login Button */}
      <Link
        to="/admin/login"
        className="btn btn-sm fw-bold"
        style={{
          background: "white",
          color: "#FF0100",
          borderRadius: "50px",
          padding: "3px 12px",
          fontSize: "12px",
          lineHeight: "1",
          boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        }}
      >
        Admin Login
      </Link>

      {/* 👇 Cart Button */}
      <Link
        to="/cart"
        className="btn btn-sm fw-bold"
        style={{
          background: "white",
          color: "#FF0100",
          borderRadius: "50px",
          padding: "3px 12px",
          fontSize: "12px",
          lineHeight: "1",
          boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        }}
      >
        <i className="fas fa-shopping-cart"></i> Cart
      </Link>

      {/* 👇 User Info */}
      <span
        className="fw-semibold"
        style={{
          fontSize: "13px",
          display: "flex",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <i className="fas fa-user-circle fs-5"></i>
        {user.name}
      </span>

      {/* 👇 Logout Button */}
      <button
        onClick={handleLogout}
        className="btn btn-sm fw-bold"
        style={{
          background: "white",
          color: "#FF0100",
          borderRadius: "50px",
          padding: "3px 12px",
          fontSize: "12px",
          lineHeight: "1",
          boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        }}
      >
        Logout
      </button>
    </div>
  ) : (
    <Link
      to="/login"
      className="btn btn-sm fw-bold"
      style={{
        background: "white",
        color: "#FF0100",
        borderRadius: "50px",
        padding: "3px 12px",
        fontSize: "12px",
        lineHeight: "1",
        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
      }}
    >
      Login
    </Link>
  )}
</div>

        </div>
      </div>

      {/* ✅ CSS Animation */}
      <style>
        {`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </div>
  );
};

const Navbar = () => {
  return (
    <>
      {/* Top Stats Bar */}
      {/* <div className="stats-bar">
        <div className="container">
          <div className="d-flex justify-content-center align-items-center gap-4">
            <div className="stat-item">
              <i className="fas fa-utensils"></i>
              <span>104,000 meals served</span>
            </div>
            <div className="stat-item">
              <i className="fas fa-thumbs-up"></i>
              <span>2,600 customers</span>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Header */}
      <header
        className="main-header sticky-top bg-white shadow-sm"
        style={{ zIndex: 1040, transition: "all 0.3s ease" }}
      >
        <div className="">
          <div className="row align-items-center py-2 px-3">
            {/* Logo Section (Right aligned logos) */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-8">
              <div
                className="d-flex justify-content-end align-items-center gap-2 flex-wrap"
                style={{ paddingRight: "10px" }}
              >
                {/* Logo 1 */}
                <a href="index.html" className="logo">
                  <img
                    src="https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/wwf1xql3cl0uvkdklnqw"
                    alt="FoodLine Logo"
                    className="img-fluid"
                    style={{ maxHeight: "45px", maxWidth: "100%" }}
                  />
                </a>

                {/* Logo 2 */}
                <a href="index.html" className="logo">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D5622AQGX6QG6POnUMA/feedshare-shrink_800/B56ZTPFf2QHQAg-/0/1738641114639?e=2147483647&v=beta&t=o8mQbJAYcG6jb0L3K244ByjHhuuRvCHMGmAy_O49-xY"
                    alt="FoodLine Logo"
                    className="img-fluid"
                    style={{ maxHeight: "45px", maxWidth: "100%" }}
                  />
                </a>
              </div>
            </div>

            {/* Center Text Section */}
            <div className="col-lg-6 d-none d-lg-block text-center">
              <h5 className="mb-0">
                <i
                  className="fas fa-percent text-danger me-2"
                  style={{ fontSize: "1.2rem" }}
                ></i>
                <span style={{ fontWeight: 600 }}>Biggest Discounts</span>
                <br />
                <small className="text-muted">
                  <i className="fas fa-concierge-bell text-secondary me-1"></i>
                  All Merchant Menus cheaper than anywhere else!
                  <span
                    className="ms-1"
                    style={{ fontWeight: 600, color: "#007bff" }}
                  >
                    <i className="fas fa-utensils me-1"></i>FoodLine
                  </span>
                </small>
              </h5>
            </div>

            {/* Support & Icons Section */}
            <div className="col-lg-3 d-none d-lg-block">
              <div className="d-flex justify-content-end align-items-center gap-4">
                {/* Support Info */}
                <div className="support-info text-end">
                  <div className="support-label fw-bold">Hotline</div>
                  <div className="support-number">+91 9754390326</div>
                </div>
              </div>
            </div>

            {/* Mobile Menu Toggle (visible on small screens) */}
            <div className="col-4 d-lg-none text-end">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#mobileMenu"
                aria-controls="mobileMenu"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </div>

        <div className="d-none d-lg-block">
          {/* Updated Navigation Bar */}
          <nav
            className="nav-bar py-2 px-4"
            style={{ backgroundColor: "#fff", borderBottom: "1px solid #eee" }}
          >
            <div className="d-flex justify-content-start align-items-center gap-4 flex-wrap">
              <a
                href="#"
                className="nav-link d-flex align-items-center gap-1 active"
              >
                <i className="fas fa-home"></i> Home{" "}
                <span className="text-muted"></span>
              </a>
              <a href="#" className="nav-link d-flex align-items-center gap-1">
                <i className="fas fa-bolt"></i> Promos{" "}
                <span className="text-muted">(821)</span>
              </a>

              {/* Mega Dropdown for Caterers */}
              <div className="nav-item dropdown ">
                <a
                  className="nav-link dropdown-toggle d-flex align-items-center gap-1"
                  href="#"
                  id="megaCaterers"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-hotel"></i> Caterers
                </a>
                <div
                  className="dropdown-menu w-100 mt-0 border-top-0"
                  aria-labelledby="megaCaterers"
                  style={{ minWidth: "700px" }}
                >
                  <div className="container py-3">
                    <div className="row row-cols-2 row-cols-md-3 g-3">
                      <div className="col">
                        <strong>Best Catering for June 2025</strong>
                        <br />
                        <span className="text-muted">30 menus</span>
                      </div>
                      <div className="col">
                        <strong>Confinement Meals</strong>
                        <br />
                        <span className="text-muted">25 menus</span>
                      </div>
                      <div className="col">
                        <strong>Must Try</strong>
                        <br />
                        <span className="text-muted">529 menus</span>
                      </div>
                      <div className="col">
                        <strong>
                          Office Pantry{" "}
                          <span className="badge bg-danger">New!</span>
                        </strong>
                        <br />
                        <span className="text-muted">13 menus</span>
                      </div>
                      <div className="col">
                        <strong>Halal Catering</strong>
                        <br />
                        <span className="text-muted">2,089 menus</span>
                      </div>
                      <div className="col">
                        <strong>Non Halal Catering</strong>
                        <br />
                        <span className="text-muted">1,892 menus</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a href="#" className="nav-link d-flex align-items-center gap-1">
                <i className="fas fa-box"></i> Tingkat
              </a>

              <a
                href="#"
                className="nav-link d-flex align-items-center gap-1"
                style={{ color: "#007bff" }}
              >
                <i className="fas fa-truck"></i> Restaurants
              </a>

              <a href="#" className="nav-link d-flex align-items-center gap-1">
                <i className="fas fa-utensils"></i> Bento
              </a>

              <a href="#" className="nav-link d-flex align-items-center gap-1">
                <i className="fas fa-tags"></i> Vouchers
              </a>

              {/* Mega Dropdown for Cakes */}
              <div className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle d-flex align-items-center gap-1"
                  href="#"
                  id="megaCakes"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-birthday-cake"></i> Cakes
                </a>
                <div
                  className="dropdown-menu w-100 mt-0 border-top-0"
                  aria-labelledby="megaCakes"
                  style={{ minWidth: "700px" }}
                >
                  <div className="container py-3">
                    <div className="row row-cols-2 row-cols-md-3 g-3">
                      <div className="col">
                        <strong>All Cakes & Desserts</strong>
                        <br />
                        <span className="text-muted">4,862 items</span>
                      </div>
                      <div className="col">
                        <strong>Birthday Cakes</strong>
                        <br />
                        <span className="text-muted">3,354 items</span>
                      </div>
                      <div className="col">
                        <strong>Cake Promotions</strong>
                        <br />
                        <span className="text-muted">278 items</span>
                      </div>
                      <div className="col">
                        <strong>Popular Brands</strong>
                        <br />
                        <span className="text-muted">1,197 items</span>
                      </div>
                      <div className="col">
                        <strong>Delivery under $10</strong>
                        <br />
                        <span className="text-muted">1,308 items</span>
                      </div>
                      <div className="col">
                        <strong>New Cakes</strong>
                        <br />
                        <span className="text-muted">282 items</span>
                      </div>
                      <div className="col">
                        <strong>Gluten Free Cakes</strong>
                        <br />
                        <span className="text-muted">53 items</span>
                      </div>
                      <div className="col">
                        <strong>Chocolate Cakes</strong>
                        <br />
                        <span className="text-muted">2,839 items</span>
                      </div>
                      <div className="col">
                        <strong>Halal Cakes</strong>
                        <br />
                        <span className="text-muted">499 items</span>
                      </div>
                      <div className="col">
                        <strong>Ice Cream Cakes</strong>
                        <br />
                        <span className="text-muted">23 items</span>
                      </div>
                      <div className="col">
                        <strong>Durian Cakes</strong>
                        <br />
                        <span className="text-muted">184 items</span>
                      </div>
                      <div className="col">
                        <strong>Fruit Cakes</strong>
                        <br />
                        <span className="text-muted">22 items</span>
                      </div>
                      <div className="col">
                        <strong>Cheesecakes</strong>
                        <br />
                        <span className="text-muted">28 items</span>
                      </div>
                      <div className="col">
                        <strong>Mini Treats</strong>
                        <br />
                        <span className="text-muted">428 items</span>
                      </div>
                      <div className="col">
                        <strong>Gift Packages</strong>
                        <br />
                        <span className="text-muted">153 items</span>
                      </div>
                      <div className="col">
                        <strong>Cupcakes</strong>
                        <br />
                        <span className="text-muted">395 items</span>
                      </div>
                      <div className="col">
                        <strong>Unique Flavours</strong>
                        <br />
                        <span className="text-muted">159 items</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a href="#" className="nav-link d-flex align-items-center gap-1">
                <i className="fas fa-store"></i> Venues
              </a>

              <a href="#" className="nav-link d-flex align-items-center gap-1">
                <i className="fas fa-building"></i> Corporate
              </a>

              <a href="#" className="nav-link d-flex align-items-center gap-1">
                <i className="fas fa-comments"></i> Reviews
              </a>

              <a href="#" className="nav-link d-flex align-items-center gap-1">
                <i className="fas fa-question-circle"></i> Contact Us
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Offcanvas Menu */}
      <div className="d-block d-lg-none">
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="mobileMenu">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">Menu</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>
          <div className="offcanvas-body">
            {/* Mobile Navigation */}
            <div className="d-flex flex-column gap-3">
              <a href="#" className="nav-link d-flex align-items-center gap-2">
                <i className="fas fa-home"></i> Home
              </a>
              <a href="#" className="nav-link d-flex align-items-center gap-2">
                <i className="fas fa-bolt"></i> Promos{" "}
                <span className="text-muted">(821)</span>
              </a>
              <a href="#" className="nav-link d-flex align-items-center gap-2">
                <i className="fas fa-hotel"></i> Caterers
              </a>
              <a href="#" className="nav-link d-flex align-items-center gap-2">
                <i className="fas fa-box"></i> Tingkat
              </a>
              <a
                href="#"
                className="nav-link d-flex align-items-center gap-2 text-primary"
              >
                <i className="fas fa-truck"></i> Restaurants
              </a>
              <a href="#" className="nav-link d-flex align-items-center gap-2">
                <i className="fas fa-utensils"></i> Bento
              </a>
              <a href="#" className="nav-link d-flex align-items-center gap-2">
                <i className="fas fa-tags"></i> Vouchers
              </a>
              <a href="#" className="nav-link d-flex align-items-center gap-2">
                <i className="fas fa-birthday-cake"></i> Cakes
              </a>
              <a href="#" className="nav-link d-flex align-items-center gap-2">
                <i className="fas fa-store"></i> Venues
              </a>
              <a href="#" className="nav-link d-flex align-items-center gap-2">
                <i className="fas fa-building"></i> Corporate
              </a>
              <a href="#" className="nav-link d-flex align-items-center gap-2">
                <i className="fas fa-comments"></i> Reviews
              </a>
              <a href="#" className="nav-link d-flex align-items-center gap-2">
                <i className="fas fa-question-circle"></i> Contact Us
              </a>
            </div>

            {/* Mobile Icon Links */}
            <div className="icon-links justify-content-center mt-4">
              <a href="#" className="icon-link">
                <i className="fas fa-user"></i>
              </a>
              <a href="#" className="icon-link">
                <i className="fas fa-heart"></i>
              </a>
              <a href="#" className="icon-link">
                <i className="fas fa-shopping-cart"></i>
              </a>
              <a href="#" className="icon-link">
                <i className="fas fa-search"></i>
              </a>
            </div>

            {/* Mobile Cart Info */}
            <div className="cart-info text-center mt-4">
              <div className="cart-label">Your Cart</div>
              <div className="cart-total">$1,290.00</div>
            </div>
          </div>
        </div>
      </div>

      {/* Include the CSS */}
      <style>
        {`
          :root {
            --primary-gradient: linear-gradient(135deg, #ff6a00, #ee0979);
            --primary-color: #ff6a00;
            --secondary-color: #ee0979;
            --text-dark: #2c3e50;
            --text-muted: #6c757d;
            --border-light: #e9ecef;
            --bg-light: #f8f9fa;
          }

          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }

          /* Top Stats Bar */
          .stats-bar {
            background: var(--primary-gradient);
            padding: 8px 0;
            font-size: 0.9rem;
            font-weight: 500;
          }

          .stats-bar .stat-item {
            display: flex;
            align-items: center;
            gap: 8px;
            color: white;
          }

          .stats-bar i {
            font-size: 1rem;
          }

          /* Main Header */
          .main-header {
            background: white;
            border-bottom: 1px solid var(--border-light);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }

          .logo img {
            max-width: 200px;
            height: auto;
          }

          /* Support Info */
          .support-info {
            text-align: right;
          }

          .support-info .support-label {
            font-size: 0.85rem;
            color: var(--text-muted);
            margin-bottom: 2px;
          }

          .support-info .support-number {
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--text-dark);
            margin: 0;
          }

          /* Icon Links */
          .icon-links {
            display: flex;
            gap: 10px;
            align-items: center;
          }

          .icon-link {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: var(--bg-light);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--text-dark);
            text-decoration: none;
            transition: all 0.3s ease;
            border: 1px solid var(--border-light);
          }

          .icon-link:hover {
            background: var(--primary-gradient);
            color: white;
            transform: translateY(-2px);
          }

          /* Cart Info */
          .cart-info {
            text-align: right;
            cursor: pointer;
          }

          .cart-label {
            font-size: 0.85rem;
            color: var(--text-muted);
            margin-bottom: 2px;
          }

          .cart-total {
            font-size: 1.2rem;
            font-weight: 700;
            color: var(--text-dark);
            margin: 0;
          }

          /* Navigation Bar */
          .nav-bar {
            background: white;
            border-top: 1px solid var(--border-light);
            padding: 12px 0;
          }

          .department-select {
            border: 2px solid var(--primary-color);
            border-radius: 25px;
            padding: 8px 16px;
            font-weight: 500;
            background: white;
            color: var(--text-dark);
            min-width: 200px;
          }

          .department-select:focus {
            box-shadow: 0 0 0 0.2rem rgba(255, 106, 0, 0.25);
            border-color: var(--primary-color);
          }

          /* Main Navigation */
          .main-nav {
            display: flex;
            align-items: center;
            gap: 30px;
          }

          .nav-link {
            color: var(--text-dark) !important;
            font-weight: 500;
            text-decoration: none;
            padding: 8px 0;
            position: relative;
            transition: all 0.3s ease;
          }

          .nav-link:hover {
            color: var(--primary-color) !important;
          }

          .nav-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: 0;
            left: 0;
            background: var(--primary-gradient);
            transition: width 0.3s ease;
          }

          .nav-link:hover::after,
          .nav-link.active::after {
            width: 100%;
          }

          .nav-link.active {
            color: var(--primary-color) !important;
          }

          /* Dropdown */
          .dropdown-menu {
            border: none;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            padding: 10px 0;
          }

          .dropdown-item {
            padding: 8px 20px;
            transition: all 0.2s ease;
          }

          .dropdown-item:hover {
            background: var(--primary-gradient);
            color: white;
          }

          /* Mobile Menu Toggle */
          .navbar-toggler {
            border: none;
            padding: 0;
          }

          .navbar-toggler:focus {
            box-shadow: none;
          }

          .navbar-toggler-icon {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2833, 37, 41, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='m4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
          }

          /* Responsive */
          @media (max-width: 991px) {
            .support-info,
            .cart-info {
              display: none !important;
            }

            .icon-links {
              justify-content: center;
              margin-top: 15px;
            }

            .main-nav {
              flex-direction: column;
              gap: 15px;
              text-align: center;
            }

            .department-select {
              margin-bottom: 20px;
              width: 100%;
            }
          }

          @media (max-width: 576px) {
            .stats-bar {
              font-size: 0.8rem;
            }

            .stats-bar .d-flex {
              flex-direction: column;
              gap: 10px;
            }
          }

          .nav-item.dropdown:hover .dropdown-menu {
            display: block;
          }

          .dropdown-menu {
            border-top: 3px solid red;
          }

          .dropdown-menu .col:hover {
            background-color: #f8f9fa;
            border-left: 3px solid #fa3838;
          }
        `}
      </style>
    </>
  );
};

export { TopStatsBar, Navbar };
