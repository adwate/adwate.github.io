import React from "react";

import { useEffect } from "react";

import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import ReactGa from "react-ga";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGa.pageview(window.location.pathname);
  }, []);

  return (
    <Helmet title={"السلة"}>
      <CommonSection title={"سلة التسوق"} />
      <section>
        <Container>
          <Row>
            <Col>
              {cartItems.length === 0 ? (
                <div className="empty-section">
                  <h2 className="empty-cart fs-4">
                    {"سلة التسوق فارغة، لم يتم إضافة اي شيء بعد"}
                  </h2>
                  <Button variant="primary" size="lg">
                    <Link to="/shop">{"تسوق الان"}</Link>
                  </Button>
                </div>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>الصورة</th>
                      <th>الإسم</th>
                      <th>السعر</th>
                      <th className="px-3">الكمية</th>
                      <th>حذف</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            {cartItems.length === 0 ? (
              <></>
            ) : (
              <Col lg="3">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="fs-4 fw-bold">₪{totalAmount}</div>
                  <h4>المجموع</h4>
                </div>
                <div className="checkout__btns">
                  <Button
                    className="move-to-checkout"
                    variant="primary"
                    size="lg"
                    type="submit"
                  >
                    <Link to="/checkout">{"استكمل الطلب"}</Link>
                  </Button>
                  <Button
                    className="back-to-shop"
                    variant="primary"
                    size="lg"
                    type="submit"
                  >
                    <Link to="/shop">{"أكمل التسوق"}</Link>
                  </Button>
                </div>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };

  const increaseQty = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );
  };

  const decreaseQty = () => {
    dispatch(
      cartActions.reduceItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );
  };

  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.productName}</td>
      <td>₪{item.price}</td>
      <td>
        {item.quantity > 1 ? (
          <span className="qty-btn right" onClick={decreaseQty}>
            -
          </span>
        ) : (
          <span className="hidden-minus-sign"></span>
        )}
        {item.quantity}
        <span className="qty-btn left" onClick={increaseQty}>
          +
        </span>
      </td>
      <td>
        <motion.i
          whileHover={{ scale: 1.2 }}
          onClick={deleteProduct}
          class="ri-delete-bin-line"
        ></motion.i>
      </td>
    </tr>
  );
};

export default Cart;
