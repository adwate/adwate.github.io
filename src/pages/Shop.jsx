import React, { useState, useEffect } from "react";

import "../styles/shop.css";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";

import products from "../assets/data/products";
import ProductsList from "../components/UI/ProductsList";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    const filteredProducts = products.filter((item) =>
      item.category.includes(filterValue)
    );

    setProductsData(filteredProducts);
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProductsData(searchedProducts);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Helmet title="المتجر">
      <CommonSection title="تسوق على راحتك" />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="12">
              <div className="filter__widget">
                <select onChange={handleFilter} defaultValue={"العنوان"}>
                  <option value="العنوان" disabled>
                    صنف حسب الفئة
                  </option>
                  <option value="">الكل</option>
                  <option value="شفاط غبار">شفاط غبار</option>
                  <option value="فرد تنفيخ">فرد تنفيخ</option>
                  <option value="طرطيقة">طرطيقة</option>
                  <option value="فرد بكسات">فرد بكسات</option>
                  <option value="فرد سولار">فرد سولار</option>
                  <option value="بوية/دهان">بوية/دهان</option>
                  <option value="مزيتة">مزيتة</option>
                  <option value="فلتر">فلتر</option>
                  <option value="ماكنة صابونة">ماكنة صابونة</option>
                  <option value="طقم رينج">طقم رينج</option>
                  <option value="ماكنة حف">ماكنة حف</option>
                  <option value="مقدح">مقدح</option>
                  <option value="فرد">فرد</option>
                  <option value="طقم بكسات">طقم بكسات</option>
                  <option value="طقم صيانة">طقم صيانة</option>
                  <option value="جيتور ماء">جيتور ماء</option>
                  <option value="مغناطيس">مغناطيس</option>
                  <option value="بطارية">بطارية</option>
                  <option value="جلخ">جلخ</option>
                  <option value="مقص">مقص</option>
                  <option value="ماكنة صناعية">ماكنة صناعية</option>
                  <option value="جك">جك</option>
                  <option value="مولد كهرباء">مولد كهرباء</option>
                  <option value="مكبس">مكبس</option>
                  <option value="عدة">عدة</option>
                  <option value="عرباية عدة">عرباية عدة</option>
                  <option value="ماكنة تنظيف">ماكنة تنظيف</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="search__box">
                <input
                  type="text"
                  placeholder=" إبحث هنا"
                  onChange={handleSearch}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            {productsData.length ? (
              <ProductsList data={productsData} />
            ) : (
              <h1 className="text-center fs-4">No products are found!</h1>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
