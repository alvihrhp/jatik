import React, { useState } from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../../components/layout";
import BottomInquiry from "../../components/bottom-inquiry";
import SoldierCatPicker from "../../components/cat-picker/soldier-cat-picker";
import ProductCard from "../../components/product-card";

/** Image */
import V1 from '../../images/backpack/v1.jpg';
import V2 from '../../images/backpack/v2.jpg';
import V3 from '../../images/backpack/v3.jpg';


import { Tabs, Tab } from "react-bootstrap";

const TacticalBackpack = ({ children }) => {
  
  const [ listPpe, setListPpe ] = useState({
    "PPE": [
      {
        name: 'Tactical Backpack V1 65 Litre',
        image: V1,
        spec: {
          Weight: '2,653gr',
          Color: `Black,
          Army Green`,
          Size: '65 Liters',
          Protection: `Shop Armor,
          Hard Armor,
          S.A.P.I Cut,
          Shoter Cut,
          Square Cut`,
          Completeness: `Utility Pouch,
          Camel Bag,
          Water Blader,
          Caver Bag,
          Organizer Pouch`
        },
        desc: `A backpack with a capacity of 65 liters which is usually used for field operations which can accommodate the needs of 6-7 days. Equipped with a Quick Release Buckle which makes it easier for users to easily attach and remove.`
      },
      {
        name: 'Tactical Backpack V2 60 Litre',
        image: V2,
        spec: {
          Weight: '9,311gr',
          Color: `Black,
          Army Green`,
          Size: '60 Liters',
          Protection: `Shop Armor,
          Hard Armor,
          S.A.P.I Cut,
          Shoter Cut,
          Square Cut`,
          Completeness: `Utility Pouch,
          Camel Bag,
          Water Blader,
          Single Magazine,
          Radio Pouch,
          Single Freg Pouch,
          Ballistic Vest`
        },
        desc: `Designed with waterproof materials and materials, this backpack is comfortable and safe to keep your gear when it rains or passes through extreme terrain such as rivers. The Water Blader feature makes it easy for users to drink and avoid dehydration.`
      },
      {
        name: 'Tactical Backpack V3 Korps-Brimob 35 Litre',
        image: V3,
        spec: {
          Weight: '	2,395gr',
          Color: `Black,
          Army Green`,
          Size: '35 Liters',
          Completeness: `Utility Pouch`
        },
        desc: `A backpack with the capacity to carry the equipment needed in a 3-day field operation, light to carry, making it easier for users to move. Equipped with a utility pouch to carry equipment and devices separately.`
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
              <Tabs className="subcat">
                {
                  Object.keys(listPpe).map((key, keyIdx) => (
                    <Tab eventKey={key} title={key} key={keyIdx}>
                      <div className="row">
                        {
                          listPpe[key].map((ppe, ppeIdx) => (
                            <div className="col-12 col-md-6 col-lg-4" key={ppeIdx}>
                              <Link to="/products/soldier-defense-equipment/product-details" state={ppe}>
                                <ProductCard data={ppe}></ProductCard>
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

export default TacticalBackpack