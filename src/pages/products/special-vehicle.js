import React, { useState } from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../../components/layout";
import BottomInquiry from "../../components/bottom-inquiry";
import ArmoringCatPicker from "../../components/cat-picker/armoring-cat-picker";
import ProductCard from "../../components/product-card";

/** Image */
import Irup from '../../images/special/irup.png';
import apc24 from '../../images/special/apc-24.png';
import Ppp from '../../images/special/ppp.png';
import Mpv from '../../images/special/mpv.png';
import Raisa from '../../images/special/raisa.png';
import Randurlap from '../../images/special/randurlap.png';


import { Tabs, Tab } from "react-bootstrap";

const Special = ({ children }) => {
  
  const [ listWeapon, setListWeapon ] = useState({
    "Special": [
      {
        name: 'J-FORCES™ Irup',
        image: Irup,
        spec: {
          Engine: 'Turbo Intercooler with 2.5 L. engine displacement, boasted 149 Hp of power.',
          Transmission: 'Automatic 5-speed',
          Winch: '10.000 Lbs. of winch capacity',
          "Body Material": 'High strenght steel, aluminum alloy with good formability and corossion resistance',
          "Detachable Top": 'Optional detachable-top canvas cover into open top.'

        },
        desc: `Special Vehicle`
      },
      {
        name: 'J-FORCES™ LRAD (ANTI-RIOT)',
        image: apc24,
        spec: {
          Engine: 'Turbo Intercooler with 2.5 L. engine displacement, boasted 149 Hp of power.',
          Transmission: 'Manual 6-speed',
          Winch: '10.000 Lbs. of winch capacity',
          "Body Material": 'High strenght steel, aluminum alloy with good formability and corossion resistance',
          "Automatic Footstep": 'Automatic electrical footstep installed'
        },
        desc: `LONG RANGE ACOUSTIC DEVICE
        
        Providing information, warning, and disperse demonstration with deafening loudspeakers to prevent physical collisions that can cause casualties.`
      },
      {
        name: 'J-FORCES™ PANJI PANJI',
        image: Ppp,
        spec: { 
          Engine: 'Turbo Intercooler with 2.5 L. engine displacement, boasted 149 Hp of power.',
          Transmission: 'Automatic 5-speed',
          Winch: '10.000 Lbs. of winch capacity',
          "Body Material": 'High strenght steel, aluminum alloy with good formability and corossion resistance',
          "Detachable Top": 'Optional detachable-top canvas cover into open top.'
        },
        desc: 'SPECIAL VEHICLE'
      },
      {
        name: 'J-FORCES™ SOFT TOP 4X4',
        image: Mpv,
        spec: {
          Engine: 'Turbo Intercooler with 2.5 L. engine displacement, boasted 149 Hp of power.',
          Transmission: 'Automatic 5-speed',
          Winch: '10.000 Lbs. of winch capacity',
          "Body Material": 'High strenght steel, aluminum alloy with good formability and corossion resistance',
          "Detachable Top": 'Optional detachable-top canvas cover into open top.',
          "Light Weight": 'Made from high quality and high strength materials with agility driving as a priority.'
        },
        desc: `MULTI PURPOSE VEHICLE
        
        A lightweight multi-purpose vehicle with a spacious rear cabin, both goods carriers and personnel.`
      },
      {
        name: 'J-FORCES™ V8 RAISA (ANTI-RIOT VEHICLE)',
        image: Raisa,
        spec: {
          Engine: 'Turbo Intercooler with 2.4 L. engine displacement, boasted 149 Hp of power.',
          Transmission: 'Manual 6-speed',
          Winch: '10.000 Lbs. of winch capacity',
          "Plate & Rollbar Material": 'High-strength steel, welded joints with corrosion resistance surface treatment'
        },
        desc: `LONG RANGE ACOUSTIC DEVICE
        
        Based on mobility, this V8 RAISA (Kendaraan Pengurai Massa) is the mobile version of LRAD. V8 RAISA provides information, warning, and siperse demonstration with deafening loudspeakers to prevent physical collisions that can cause casualties.`
      },
      {
        name: 'Randurlap',
        image: Randurlap,
        spec: {
          Engine: 'Diesel 4 Cylinders In-Line',
          Transmission: 'Manual 5-speed',
          "Electric Awnings": 'Wide folding tent with an automatic electric awnings',
          "Serving Capacity": 'Able to serve 600 personnel',
          "Kitchen Facility": 'Some cookware can be moved into the right side of the extended floor with sliding rail',
        },
        desc: `MOBILE KITCHEN TRUCK
        
        Randurlap is a field kitchen truck that is designed and supported with modern cooking equipment that is able to serve 600 personnel in 2-3 hours.`
      },
    ],
  })

  return (
    <Layout>
      <Helmet>
        <title itemProp="name" lang="en">Special Vehicle</title>
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

export default Special