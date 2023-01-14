import React from "react";
import "./footer.css";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          {/* <Col lg="3">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">الأكثر بحثاً</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="px-0 border-0">
                  <Link to="#">Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className="px-0 border-0">
                  <Link to="#">Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className="px-0 border-0">
                  <Link to="#">Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className="px-0 border-0">
                  <Link to="#">Mobile Phones</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col> */}

          <Col lg="3">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">صفحات مهمة</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="px-0 border-0">
                  <Link to="/shop">المتجر</Link>
                </ListGroupItem>
                <ListGroupItem className="px-0 border-0">
                  <Link to="/cart">السلة</Link>
                </ListGroupItem>
                <ListGroupItem className="px-0 border-0">
                  <Link to="#">سياسة الخصوصية</Link>
                </ListGroupItem>
                {/* <ListGroupItem className="px-0 border-0">
                  <Link to="#">فريق العمل</Link>
                </ListGroupItem> */}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">تواصل معنا</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="px-0 border-0 d-flex align-items-center gap-2">
                  <p>رفيديا، نابلس، فلسطين</p>
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                </ListGroupItem>
                <ListGroupItem className="px-0 border-0 d-flex align-items-center gap-2">
                  <p>+970 595 123 456</p>
                  <span>
                    <i class="ri-phone-line"></i>
                  </span>
                </ListGroupItem>
                <ListGroupItem className="px-0 border-0 d-flex align-items-center gap-2">
                  <p>info@hello.com</p>
                  <span>
                    <i class="ri-mail-send-line"></i>
                  </span>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="2"></Col>

          <Col lg="4">
            <div className="logo">
              <NavLink to="home">
                <h1 className="text-white fs-2">أدواتـــي</h1>
              </NavLink>
            </div>
            <p className="footer__text mb-5" style={{ textAlign: "end" }}>
              {
                "أدواتـــي هو متجر الكتروني متخصص بتوفير كل ما تحتاجه من مستلزمات ومعدات للعناية بالمنزل، الحديقة، السيارة، وكذلك الكراجات و ورش العمل"
              }
            </p>
          </Col>

          <Col lg="12">
            <p className="footer__copyright">
              Copyright {year} developed by Venotch. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
