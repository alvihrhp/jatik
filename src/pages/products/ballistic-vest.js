import React, { useState } from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../../components/layout";
import BottomInquiry from "../../components/bottom-inquiry";
import SoldierCatPicker from "../../components/cat-picker/soldier-cat-picker";
import ProductCard from "../../components/product-card";

/** Image */
import Z09 from '../../images/weapon/z_9.png';


import { Tabs, Tab } from "react-bootstrap";

const BallisticVest = ({ children }) => {
  
  const [ listBallisticVest, setListBallisticVest ] = useState({
    "Ballistic Vest": [
      {
        name: 'Air Frame',
        image: Z09,
        spec: {
          Weight: '1,837gr',
          Size: 'All size (customizable)',
          Level: 'NIJ Level III-A',
          Completeness: 'Side Rail, NVG mount',
        },
        desc: `Designed with 2 unique separate shells to improve ventilation integration and reduce the destructive effects of blast wave. Good air circulation to keep your head comfortable.
        
        •   Helmet protection with the lowest deformation.
        •   Equipped with the J-Forces Suspension System for increased comfort and stability.
        •   Meets NIJ (National Institute of Justice) Ballistic performance, protection and quality standards.
        •   The foundation for all J-Forces Modular Protection System components and accessories.
        •   Revolutionary ventilated shell design for passive cooling.
        •   Modular ear and face protection is available.
        •   More protection on the back of the neck.`
      },
    ]
  })

  return (
    <Layout>
      <Helmet>
        <title itemProp="name" lang="en">Ballistic Helmet</title>
      </Helmet>

      <section className="product-list">
        <div className="container main-layout">
          <div className="row">
            <Link to="../../product-services" className="gap-2 d-flex align-items-center back-icon">
              <StaticImage src="../../images/icons/ArrowLeft.png" alt="back icon" className="icon-back"/>
              Back to product & services
            </Link>
            <h6 className="page-title">Soldier Defense Equipment</h6>
            <div className="col-12">
              <SoldierCatPicker></SoldierCatPicker>
            </div>
            <div className="col-12">
              <Tabs defaultActiveKey="Z-09" className="subcat">
                {
                  Object.keys(listBallisticVest).map((key, keyIdx) => (
                    <Tab eventKey={key} title={key} key={keyIdx}>
                      <div className="row">
                        {
                          listBallisticVest[key].map((ballisticVest, ballisticVestIdx) => (
                            <div className="col-12 col-md-6 col-lg-4" key={ballisticVestIdx}>
                              <Link to="/products/soldier-defense-equipment/product-details" state={ballisticVest}>
                                <ProductCard data={ballisticVest}></ProductCard>
                              </Link>
                            </div>
                          ))
                        }
                      </div>
                    </Tab>
                  ))
                }
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      <BottomInquiry></BottomInquiry>
    </Layout>
  )
}

export default BallisticVest