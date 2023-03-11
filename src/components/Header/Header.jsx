import React, { useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "./header.css";
import logo2 from "../../assets/images/handyman-logo.png";

import { Container, Row } from "reactstrap";
import { useSelector } from "react-redux";

const nav__links = [
  {
    path: "home",
    display: "الرئيسية",
  },
  {
    path: "shop",
    display: "المتجر",
  },
  {
    path: "cart",
    display: "سلة التسوق",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const menuRef = useRef(null);
  const navigate = useNavigate();

  const stickyHeaderFunction = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunction();

    return () => window.removeEventListener("scroll", stickyHeaderFunction);
  });

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  const navigateToCart = () => {
    navigate("/cart");
  };

  //disable inspect
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });

  document.onkeydown = function (e) {
    if (e.keyCode === 123) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode === "I".charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode === "C".charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode === "J".charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.keyCode === "U".charCodeAt(0)) {
      return false;
    }
  };

  return (
    <header ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <NavLink to="home">
                <h1>أدواتـــي</h1>
              </NavLink>
            </div>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav__icons">
              <span className="cart__icon" onClick={navigateToCart}>
                <i class="ri-shopping-cart-2-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>
              <div className="mobile__menu">
                <span onClick={menuToggle}>
                  <i class="ri-menu-fill"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
