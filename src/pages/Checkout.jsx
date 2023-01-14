import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/checkout.css";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import emailjs from "@emailjs/browser";

const Checkout = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cartItems);

  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    beside: "",
    totalAmount: totalAmount,
  });

  const [errors, setErrors] = useState(null);

  cartItems?.forEach((item, index) => {
    details[`item${index + 1}`] = item.productName;
    details[`desc${index + 1}`] = item.productDesc;
    details[`quantity${index + 1}`] = item.quantity;
    details[`img${index + 1}`] = item.imgUrl;
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleValidation = () => {
    let customErrors = {};
    let formIsValid = true;

    //Name
    if (details.name === "") {
      formIsValid = false;
      customErrors.name = "عذراً، أدخل إسمك";
    } else if (typeof details.name !== "undefined") {
      if (!details["name"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        customErrors["name"] = "عذراً، لا يمكنك إدخال أرقام";
      }
    }

    //Phone
    if (details.phone === "") {
      formIsValid = false;
      customErrors["phone"] = "عذراً، أدخل رقم الجوال";
    } else if (!details.phone.match(/^\d+$/)) {
      formIsValid = false;
      customErrors["phone"] = "عذراً، أدخل أرقام فقط";
    } else if (details.phone.length < 7) {
      formIsValid = false;
      customErrors["phone"] = "عذراً، أدخل رقم صحيح";
    }

    //City and Street and Beside

    if (details.city === "") {
      formIsValid = false;
      customErrors.city = "عذراً، أدخل إسم المدينة";
    } else if (typeof details.city !== "undefined") {
      if (!details["city"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        customErrors["city"] = "عذراً، لا يمكنك إدخال أرقام";
      }
    }

    if (details.street === "") {
      formIsValid = false;
      customErrors.street = "عذراً، أدخل إسم الحي أو الشارع";
    } else if (typeof details.street !== "undefined") {
      if (!details["street"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        customErrors["street"] = "عذراً، لا يمكنك إدخال أرقام";
      }
    }

    if (details.beside === "") {
      formIsValid = false;
      customErrors.beside = "عذراً، أدخل مكان التوصيل بالقرب من ماذا؟";
    } else if (typeof details.beside !== "undefined") {
      if (!details["beside"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        customErrors["beside"] = "عذراً، لا يمكنك إدخال أرقام";
      }
    }

    //Email
    // if (!details["email"]) {
    //   formIsValid = false;
    //   customErrors["email"] = "Cannot be empty";
    // }

    // if (typeof details["email"] !== "undefined") {
    //   let lastAtPos = details["email"].lastIndexOf("@");
    //   let lastDotPos = details["email"].lastIndexOf(".");

    //   if (
    //     !(
    //       lastAtPos < lastDotPos &&
    //       lastAtPos > 0 &&
    //       details["email"].indexOf("@@") == -1 &&
    //       lastDotPos > 2 &&
    //       details["email"].length - lastDotPos > 2
    //     )
    //   ) {
    //     formIsValid = false;
    //     customErrors["email"] = "Email is not valid";
    //   }
    // }

    setErrors(customErrors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validated = handleValidation();
    if (validated) {
      console.log("details", details);
      alert("Sucessfully!!!");
    } else {
      console.log("errors", errors);
      console.log("not validated");
    }

    // emailjs
    //   .send(REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, details, REACT_APP_EMAILJS_USER_ID)
    //   .then(
    //     (result) => {
    //       console.log(details);
    //       setDetails({
    //         name: "",
    //         email: "",
    //         phone: "",
    //         street: "",
    //         city: "",
    //         cartItems: [],
    //         totalAmount: 0,
    //       });
    //       console.log(result.text);
    //       alert("Sucessfully!!!");
    //       navigate("/home");
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };

  return (
    <Helmet title="إستكمال الطلب">
      <CommonSection title="إستكمال الطلب"></CommonSection>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              {/* <h6 className="mb-4 fw-bold">{"معلومات التوصيل"}</h6> */}
              <Form
                className="billing__form"
                id="checkout-submit"
                onSubmit={handleSubmit}
              >
                <FormGroup className="form__group">
                  <input
                    type="text"
                    name="name"
                    placeholder="الإسم الكـامل"
                    onChange={handleChange}
                  />
                  {errors && errors.name && (
                    <div className="error-msgs">{errors.name}</div>
                  )}
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    type="email"
                    name="email"
                    placeholder="الايميل - إختياري"
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="رقم الجوال"
                    onChange={handleChange}
                  />
                  {errors && errors.phone && (
                    <div className="error-msgs">{errors.phone}</div>
                  )}
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    type="text"
                    name="city"
                    placeholder="المحـافظة"
                    onChange={handleChange}
                  />
                  {errors && errors.city && (
                    <div className="error-msgs">{errors.city}</div>
                  )}
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    type="text"
                    name="street"
                    placeholder="إسم الحي أو الشارع"
                    onChange={handleChange}
                  />
                  {errors && errors.street && (
                    <div className="error-msgs">{errors.street}</div>
                  )}
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    type="text"
                    name="beside"
                    placeholder="بالقرب من"
                    onChange={handleChange}
                  />
                  {errors && errors.beside && (
                    <div className="error-msgs">{errors.beside}</div>
                  )}
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout__cart">
                <h6>
                  <div className="d-flex">
                    <div>{"أغراض"}</div>
                    <div className="mx-2">{totalQty}</div>
                  </div>
                  <div>: {"العدد"}</div>
                </h6>
                <h6>
                  <span>₪ {totalAmount}</span> : {"المجموع"}
                </h6>
                {/* <h6>
                  <span>₪ 0</span>
                  <span>: {"التوصيل"}</span>
                </h6> */}
                <h4>
                  <span>₪ {totalAmount}</span> : {"المجموع النـهائي"}
                </h4>
                <button
                  className="buy__btn auth__btn w-100"
                  form="checkout-submit"
                  type="submit"
                >
                  {"إبعـت الطلب"}
                </button>
                <p
                  style={{
                    color: "#ff7e7e",
                    textAlign: "end",
                    fontWeight: 300,
                    fontSize: "0.9rem",
                    marginTop: "5px",
                  }}
                >
                  {".التوصيل مجاني لمحافظة نابلس و 15 شيكل فقط لبقية المحافظات"}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
