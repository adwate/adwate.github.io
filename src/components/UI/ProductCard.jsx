import React from "react";
import { useState } from "react";

import { Col } from "reactstrap";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import { toast } from "react-toastify";

import "../../styles/product-card.css";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const [disabled, setDisabled] = useState(false);

  const addToCart = () => {
    if (!disabled) {
      dispatch(
        cartActions.addItem({
          id: item.id,
          productName: item.productName,
          productDesc: item.shortDesc,
          price: item.price,
          imgUrl: item.imgUrl,
        })
      );

      setDisabled(true);

      toast.success("تمت إضافة الصنف بنجاح");

      setTimeout(() => {
        setDisabled(false);
      }, 3000);
    }
  };

  return (
    <Col lg="3" md="4" className="mb-3">
      <div className="product__item">
        <NavLink to={`/shop/${item.id}`}>
          <div className="product__img">
            <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
          </div>
          <div className="p-2 product__info d-flex flex-column align-items-end">
            <h3 className="product__name">{item.productName}</h3>
            <span>{item.category}</span>
          </div>
        </NavLink>
        <div className="product__card-bottom p-2 d-flex justify-content-end">
          <motion.span
            whileHover={{ scale: 1.1 }}
            onClick={addToCart}
            className={`${disabled ? "disabled" : ""}`}
          >
            <i class="ri-add-line">{"أضف للسلة"}</i>
          </motion.span>
          <div>
            <span className="price">₪{item.price}</span>
            {item.oldPrice ? (
              <span className="old price">₪{item.oldPrice}</span>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
