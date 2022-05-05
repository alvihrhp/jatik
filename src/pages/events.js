import * as React from "react";
import Layout from "../components/layout";
import Slider from "react-slick";
import {Helmet} from "react-helmet";
import BottomInquiry from "../components/bottom-inquiry";
import { StaticImage } from "gatsby-plugin-image"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Events = ({ children }) => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    className: "image-list",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Layout>
      <Helmet>
        <title itemProp="name" lang="en">Events</title>
      </Helmet>

      <section className="events">
        <div className="container main-layout">
          <h6 className="page-title">Events</h6>
          <div className="row">
            <div className="col">
              <h6 className="card-title">Zbroyar Event</h6>
              <p className="card-body">The company is fully under the guidance of the Ukrainian military, with facilities integrated and integrated manufacturing of weapons and ammunition, and there are shooting range facility by sharing scenarios, adapted to conditions military field</p>
              <Slider {...settings}>
                  <StaticImage alt="events image" src="../images/1.jpg" className="event-slider"/>
                  <StaticImage alt="events image" src="../images/2.jpg" className="event-slider"/>
                  <StaticImage alt="events image" src="../images/3.jpg" className="event-slider"/>
                  <StaticImage alt="events image" src="../images/4.jpg" className="event-slider"/>
                  <StaticImage alt="events image" src="../images/5.jpg" className="event-slider"/>
                  <StaticImage alt="events image" src="../images/6.jpg" className="event-slider"/>
                  <StaticImage alt="events image" src="../images/7.jpg" className="event-slider"/>
              </Slider>
            </div>
            <div className="col">
              <h6 className="card-title">Archer Event</h6>
              <p className="card-body">The company is fully under the guidance of the Ukrainian military, with facilities integrated and integrated manufacturing of weapons and ammunition, and there are shooting range facility by sharing scenarios, adapted to conditions military field</p>
              <Slider {...settings}>
                  <StaticImage alt="events image" src="../images/1.jpg" className="event-slider"/>
                  <StaticImage alt="events image" src="../images/2.jpg" className="event-slider"/>
                  <StaticImage alt="events image" src="../images/3.jpg" className="event-slider"/>
                  <StaticImage alt="events image" src="../images/4.jpg" className="event-slider"/>
                  <StaticImage alt="events image" src="../images/5.jpg" className="event-slider"/>
                  <StaticImage alt="events image" src="../images/6.jpg" className="event-slider"/>
                  <StaticImage alt="events image" src="../images/7.jpg" className="event-slider"/>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <BottomInquiry></BottomInquiry>
    </Layout>
  )
}

export default Events