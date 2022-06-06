import React, { useState } from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../../components/layout";
import BottomInquiry from "../../components/bottom-inquiry";
import SoldierCatPicker from "../../components/cat-picker/soldier-cat-picker";
import ProductCard from "../../components/product-card";

/** Image */
import antiStab from '../../images/vest/anti-stab.jpg';
import Maritime from '../../images/vest/maritime.png';
import Maxim from '../../images/vest/maxim.jpg';
import Raid from '../../images/vest/raid.jpg';
import Shell from '../../images/vest/shell.jpg';


import { Tabs, Tab } from "react-bootstrap";

const BallisticVest = ({ children }) => {
  
  const [ listBallisticVest, setListBallisticVest ] = useState({
    "Ballistic Vest": [
      {
        name: 'Law Enforcement Anti Stab',
        image: antiStab,
        spec: {
          Weight: '2,964gr',
          Size: 'All size',
          Protection: 'Anti Puncture',
          Completeness: 'Polycarbonate',
        },
        desc: `Ballistic body armor designed with a plate carrier model that makes it easier for users to operate for greater comfort and agility. Provides protection for vital areas on the body from bullets and other ammunition. The quality of high-level protection, consisting of Level III-A, III, and Level IV, has passed the test according to the National Institute of Justice (NIJ 0101.06). equipped with a Velcro System lock that makes it easy to install equipment
        supporter.`
      },
      {
        name: 'Maritime Modular Forces',
        image: Maritime,
        spec: {
          Weight: '1,052gr',
          Size: 'All size',
        },
        desc: `Ballistic body armor designed with a plate carrier model that makes it easier for users to operate for greater comfort and agility. Provides protection for vital areas on the body from bullets and other ammunition. The quality of high-level protection, consisting of Level III-A, III, and Level IV, has passed the test according to the National Institute of Justice (NIJ 0101.06). equipped with a Velcro System lock that makes it easy to install equipment
        supporter.`
      },
      {
        name: 'Maximum Modular Forces',
        image: Maritime,
        spec: {
          Weight: '7,444gr',
          Size: 'All size',
          Protection: 'Shop Armor, Hard Armor, S.A.P.I Cut, Shoter Cut, Square Cut',
          Completeness: 'Collars, Arms, Groin, Soft Armor, PE Ceramic'
        },
        desc: `Ballistic body armor designed with a plate carrier model that makes it easier for users to operate for greater comfort and agility. Provides protection for vital areas on the body from bullets and other ammunition. The quality of high-level protection, consisting of Level III-A, III, and Level IV, has passed the test according to the National Institute of Justice (NIJ 0101.06). equipped with a Velcro System lock that makes it easy to install equipment
        supporter.`
      },
      {
        name: 'Raid Mobility Forces',
        image: Raid,
        spec: {
          Weight: '4,720gr',
          Size: 'All size',
          Protection: 'Shop Armor, Hard Armor, S.A.P.I Cut, Shoter Cut, Square Cut',
          Completeness: 'Assaulter Panel Pack, Camel Bag'
        },
        desc: `Ballistic body armor designed with a plate carrier model that makes it easier for users to operate for greater comfort and agility. Provides protection for vital areas on the body from bullets and other ammunition. The quality of high-level protection, consisting of Level III-A, III, and Level IV, has passed the test according to the National Institute of Justice (NIJ 0101.06). equipped with a Velcro System lock that makes it easy to install equipment
        supporter.`
      },
      {
        name: 'Shell Protection Forces',
        image: Shell,
        spec: {
          Weight: '6,660gr',
          Size: 'All size',
          Protection: 'Shop Armor, Hard Armor, S.A.P.I Cut, Shoter Cut, Square Cut',
          Completeness: 'Assaulter Panel Pack'
        },
        desc: `Ballistic body armor designed with a plate carrier model that makes it easier for users to operate for greater comfort and agility. Provides protection for vital areas on the body from bullets and other ammunition. The quality of high-level protection, consisting of Level III-A, III, and Level IV, has passed the test according to the National Institute of Justice (NIJ 0101.06). equipped with a Velcro System lock that makes it easy to install equipment
        supporter.`
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