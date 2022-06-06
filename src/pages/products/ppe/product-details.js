import * as React from "react";
import Slider from "react-slick";

import Layout from "../../../components/layout";
import BottomInquiry from "../../../components/bottom-inquiry";
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SoldierProductDetails = ({ location }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "image-list"
  };
  
  const { state } = location;

  return (
    state !== undefined 
    ? (
    <Layout>
      <Helmet>
        <title itemProp="name" lang="en">{state.name}</title>
      </Helmet>

      <section className="product-details">
        <div className="container main-layout">
          <div className="row">
            <div className="col soldier-img">
                <Slider {...settings}>
                  <img src={state.image} alt="weapon" className="product-slider-single"/>
                </Slider>
              {/* <Slider {...settings}>
                  <StaticImage alt="product image" src="../../../images/1.jpg" className="product-slider"/>
                  <StaticImage alt="product image" src="../../../images/2.jpg" className="product-slider"/>
                  <StaticImage alt="product image" src="../../../images/3.jpg" className="product-slider"/>
                  <StaticImage alt="product image" src="../../../images/4.jpg" className="product-slider"/>
                  <StaticImage alt="product image" src="../../../images/5.jpg" className="product-slider"/>
                  <StaticImage alt="product image" src="../../../images/6.jpg" className="product-slider"/>
                  <StaticImage alt="product image" src="../../../images/7.jpg" className="product-slider"/>
              </Slider> */}
              <div className="summary">
                <h5 className="mb-5">{state.name}</h5>
                <p className="mb-4 body-text">{state.desc}</p>
                <div className="row low-specs">
                  {
                    Object.keys(state.spec).map((key, keyIdx) => (
                      <div className="col-12 col-sm-3 col-md-3 row-info" key={keyIdx}>
                        <p className="info-label">{key}</p>
                        <p className="info-body">{state.spec[key]}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <BottomInquiry></BottomInquiry>
      </section>
    </Layout>
    ) : (
      <></>
    )
  )
}

export default SoldierProductDetails