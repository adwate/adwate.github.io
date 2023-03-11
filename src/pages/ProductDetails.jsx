import React, { useState, useRef, useEffect } from "react";

import "../styles/product-details.css";
import ReactGa from "react-ga";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import ProductsList from "../components/UI/ProductsList";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const [tab, setTab] = useState("desc");
  const reviewUser = useRef("");
  const reviewMsg = useRef("");
  const dispatch = useDispatch();

  const [rating, setRating] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
    category,
  } = product;

  const relatedProducts = products.filter((item) => item.category === category);

  const submitHandler = (e) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    };

    reviewUser.current.value = "";
    reviewMsg.current.value = "";

    toast.success("Review Submitted!");
  };

  const addToCart = () => {
    if (!disabled) {
      dispatch(
        cartActions.addItem({
          id,
          imgUrl,
          productName,
          price,
        })
      );

      setDisabled(true);

      toast.success("تمت إضافة الصنف بنجاح");

      setTimeout(() => {
        setDisabled(false);
      }, 3000);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  useEffect(() => {
    ReactGa.pageview(window.location.pathname);
  }, [])

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="" />
            </Col>
            <Col lg="6">
              <div className="product__details">
                <h2>{productName}</h2>
                <div className="product__rating d-flex align-items-center gap-5 mb-3">
                  <div>
                    <span>
                      <i class="ri-star-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-half-line"></i>
                    </span>
                  </div>

                  <p>
                    (<span>{avgRating}</span> تقييم)
                  </p>
                </div>

                <div className="d-flex align-items-center gap-5">
                  <span className="product__price">₪{price}</span>
                  <span>النوع : {category}</span>
                </div>
                <p className="mt-3">{shortDesc}</p>

                <Button
                  variant="primary"
                  size="lg"
                  onClick={addToCart}
                  disabled={disabled}
                >
                  {"أضف إلى السلة"}
                </Button>
                <div className="back-to-shop">
                  <Button variant="primary" size="lg" type="submit">
                    <Link to="/shop">{"أكمل التسوق"}</Link>
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            {/* <Col lg="12">
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h6
                  className={`${tab === "desc" ? "active__tab" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? "active__tab" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Reviews ({reviews.length})
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="tab__content mt-5">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product__review mt-5">
                  <div className="review__wrapper">
                    <ul>
                      {reviews.map((item, index) => (
                        <li key={index} className="mb-4">
                          <h6>Jhon Doe</h6>
                          <span>{item.rating} (average rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>

                    <div className="review__form">
                      <h4>Leave your experience</h4>
                      <form action="" onSubmit={submitHandler}>
                        <div className="form__group">
                          <input
                            type="text"
                            placeholder="Enter name"
                            ref={reviewUser}
                            required
                          />
                        </div>
                        <div className="form__group d-flex align-items-center gap-5 rating__group">
                          <motion.span
                            whileHover={{ scale: 1.2 }}
                            onClick={() => setRating(1)}
                          >
                            1 <i class="ri-star-fill"></i>
                          </motion.span>
                          <motion.span
                            whileHover={{ scale: 1.2 }}
                            onClick={() => setRating(2)}
                          >
                            2 <i class="ri-star-fill"></i>
                          </motion.span>
                          <motion.span
                            whileHover={{ scale: 1.2 }}
                            onClick={() => setRating(3)}
                          >
                            3 <i class="ri-star-fill"></i>
                          </motion.span>
                          <motion.span
                            whileHover={{ scale: 1.2 }}
                            onClick={() => setRating(4)}
                          >
                            4 <i class="ri-star-fill"></i>
                          </motion.span>
                          <motion.span
                            whileHover={{ scale: 1.2 }}
                            onClick={() => setRating(5)}
                          >
                            5 <i class="ri-star-fill"></i>
                          </motion.span>
                        </div>

                        <div className="form__group">
                          <textarea
                            ref={reviewMsg}
                            rows={4}
                            type="text"
                            placeholder="Review Message.."
                            required
                          />
                        </div>
                        <Button variant="primary" size="lg" type="submit">
                          {"أضف تعليقك"}
                        </Button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col> */}

            <Col lg="12" className="mt-3">
              <h2 className="related__title">{"قد يعجبك أيضاً"}</h2>
            </Col>
            <ProductsList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
