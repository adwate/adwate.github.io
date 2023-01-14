import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "reactstrap";

import Helmet from "../components/Helmet/Helmet";
import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";
import products from "../assets/data/products";
import Clock from "../components/UI/Clock";

import "../styles/home.css";

import fixmanPower from "../assets/images/fixman-tools.png";
import powerTool from "../assets/images/power-tool1.jpg";
import superClean2 from "../assets/images/floor-cleaning.png";
import superr from "../assets/images/super-clean.png";
import pressureWasher from "../assets/images/pressure-washer.png";
import counterImg from "../assets/images/sush/special-offer.png";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [newArrivalsProducts, setNewArrivalsProducts] = useState([]);

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item["oldPrice"]
    );

    const filteredBestSalesProducts = products.filter(
      (item) =>
        item.category.includes("مولد") ||
        item.category.includes("تنظيف") ||
        item.category.includes("جيتور")
    );

    const filteredNewArrivalsProducts = products.filter(
      (item) => item.category.includes("بكسات") || item.category.includes("عدة")
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setNewArrivalsProducts(filteredNewArrivalsProducts);

    window.scrollTo(0, 0);
  }, []);

  return (
    <Helmet title={"الرئيسية"}>
      <section className="hero__section">
        <Carousel variant="dark">
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={superr} alt="Second slide" />
            <Carousel.Caption>
              <Button variant="primary" size="lg">
                <Link to="/shop">{"تسوق الان"}</Link>
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={fixmanPower}
              alt="First slide"
            />
            <Carousel.Caption>
              <Button variant="primary" size="lg">
                <Link to="/shop">{"تسوق الان"}</Link>
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={pressureWasher}
              alt="Third slide"
            />
            <Carousel.Caption>
              <Button variant="primary" size="lg">
                <Link to="/shop">{"تسوق الان"}</Link>
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={powerTool} alt="Third slide" />
            <Carousel.Caption>
              <Button variant="primary" size="lg">
                <Link to="/shop">{"تسوق الان"}</Link>
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={superClean2}
              alt="Third slide"
            />
            <Carousel.Caption>
              <Button variant="primary" size="lg">
                <Link to="/shop">{"تسوق الان"}</Link>
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-3">
              <h2 className="section__title">{"العروض"}</h2>
            </Col>
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>
      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-3">
              <h2 className="section__title">{"الأكثر مبيعا"}</h2>
            </Col>
            <ProductsList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>
      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count__down-col">
              <div className="clock__top-content">
                <h3 className="text-white mb-4">{"عروض محدودة"}</h3>
                {/* <h3 className="text-white fs-5 mb-3">Quality Armchair</h3> */}
              </div>
              <Clock />
              <Button variant="primary" className="buy__btn store__btn">
                <Link to="/shop">{"تسوق الان"}</Link>
              </Button>
            </Col>
            <Col lg="6" md="12" className="text-end counter__img">
              <img src={counterImg} alt="counterImg" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>{"وصل حديثا"}</h2>
            </Col>
            <ProductsList data={newArrivalsProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
