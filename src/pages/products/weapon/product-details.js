import * as React from "react";
import Slider from "react-slick";

import Layout from "../../../components/layout";
import BottomInquiry from "../../../components/bottom-inquiry";
import { StaticImage } from "gatsby-plugin-image"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductDetails = ({ location }) => {
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
      <section className="product-details">
        <div className="container main-layout">
          <div className="row">
            <div className="col">
              <Slider {...settings}>
                  <StaticImage alt="events image" src="../../../images/1.jpg" className="product-slider"/>
                  <StaticImage alt="events image" src="../../../images/2.jpg" className="product-slider"/>
                  <StaticImage alt="events image" src="../../../images/3.jpg" className="product-slider"/>
                  <StaticImage alt="events image" src="../../../images/4.jpg" className="product-slider"/>
                  <StaticImage alt="events image" src="../../../images/5.jpg" className="product-slider"/>
                  <StaticImage alt="events image" src="../../../images/6.jpg" className="product-slider"/>
                  <StaticImage alt="events image" src="../../../images/7.jpg" className="product-slider"/>
              </Slider>
              <div className="summary">
                <h5>{state.name}</h5>
                <div className="row">
                  {
                    Object.keys(state.spec).map((key, keyIdx) => (
                      <div className="col-6 col-md-4 col-lg-2 row-info" key={keyIdx}>
                        <div className="info-label">{key}</div>
                        <div className="info-body">{state.spec[key]}</div>
                      </div>
                    ))
                  }
                </div>
              </div>
              <p className="body-title">Product description</p>
              <div className="body-text">
                <p>{state.desc}</p>
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

export default ProductDetails