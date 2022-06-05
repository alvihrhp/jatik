import React, { useState } from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../../components/layout";
import BottomInquiry from "../../components/bottom-inquiry";
import ArmoringCatPicker from "../../components/cat-picker/armoring-cat-picker";
import ProductCard from "../../components/product-card";

/** Image */
import rubberTrack from '../../images/tracked/rtv2.png';


import { Tabs, Tab } from "react-bootstrap";

const Tracked = ({ children }) => {
  
  const [ listWeapon, setListWeapon ] = useState({
    "Tracked": [
      {
        name: 'Rubber Track Vehicle',
        image: rubberTrack,
        spec: {
          Engine: 'Turbo Intercooler with 2.5 L. engine displacement, boasted 149 Hp of power.',
          Transmission: 'Automatic 6-speed',
          "Body Material": 'High strenght steel, aluminum alloy with good formability and corossion resistance',
          Amphibious: 'Able to be driven both land or water',
          "Detachable Top Cargo": 'Optional detachable-top cargo canvas cover into open top',
          "Light Weight": 'Made from high-strength materials with mobility prioritize.',
          "Multi-Terrain": 'Able to be operated through all kind of terrain and obstacles',
          "Logistic Support": 'High survivability vehicle for any logistic missions'
        },
        desc: `MULTI-TERRAIN LOGISTIC TRANSPORT
        
        Used as a high-survivability logistic support vehicle and thanks to it’s light-weight and the ability that able to be operated both on land and water, makes this RTV easier and faster to supply any goods through all kind of terrain and land obstacles.`
      }
    ]
  })

  return (
    <Layout>
      <Helmet>
        <title itemProp="name" lang="en">Tracked Vehicle</title>
      </Helmet>

      <section className="product-list">
        <div className="container main-layout">
          <div className="row">
            <Link to="../../product-services" className="gap-2 d-flex align-items-center back-icon">
              <StaticImage src="../../images/icons/ArrowLeft.png" alt="back icon" className="icon-back"/>
              Back to product & services
            </Link>
            <h6 className="page-title">Armoring, Special & Tracked Vehicle</h6>
            <div className="col-12">
              <ArmoringCatPicker></ArmoringCatPicker>
            </div>
            <div className="col-12">
              <Tabs className="subcat">
                {
                  Object.keys(listWeapon).map((key, keyIdx) => (
                    <Tab eventKey={key} title={key} key={keyIdx}>
                      <div className="row">
                        {
                          listWeapon[key].map((weapon, weaponIdx) => (
                            <div className="col-12 col-md-6 col-lg-4" key={weaponIdx}>
                              <Link to="/products/armoring-and-vehicle/product-details" state={weapon} className="armored-img">
                                <ProductCard data={weapon}></ProductCard>
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

export default Tracked