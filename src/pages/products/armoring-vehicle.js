import React, { useState } from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../../components/layout";
import BottomInquiry from "../../components/bottom-inquiry";
import ArmoringCatPicker from "../../components/cat-picker/armoring-cat-picker";
import ProductCard from "../../components/product-card";

/** Image */
import apc24ph from '../../images/armored/apc-24-ph.png';
import apc24 from '../../images/armored/apc-24.png';
import apc454 from '../../images/armored/apc454x4.png';
import jtvBlank from '../../images/armored/jtv_blank.png';
import vvipPh from '../../images/armored/vvip-ph.png';


import { Tabs, Tab } from "react-bootstrap";

const Armoring = ({ children }) => {
  
  const [ listArmor, setListArmor ] = useState({
    "apc24": [
      {
        name: 'J-FORCES™ APC 2.4',
        image: apc24ph,
        spec: {
          Engine: 'Turbo Intercooler with 2.5 L. engine displacement, boasted 149 Hp of power.',
          Transmission: 'Automatic 6-speed',
          "Tire Protection": 'Runflat-system tires',
          Winch: '10.000 Lbs. of winch capacity',
          "Armored Body Protection": 'NIJ Ballistic Standard Protection Level III (including glass protection)',
          Armament: 'Manhole/protective hatch with an optional machine gun mounting installed. Equipped with ten (10) gun ports on side and rear position.',

        },
        desc: `ARMORED PERSONNEL CARRIER
        
        A special vehicle designed and manufactured with armored body protection system to ensure the personnel safety for a range of special purpose missions utilize by the military and police.`
      },
      {
        name: 'J-FORCES™ APC 2.4',
        image: apc24,
        spec: {
          Engine: 'Turbo Intercooler with 2.5 L. engine displacement, boasted 149 Hp of power.',
          Transmission: 'Automatic 6-speed',
          "Tire Protection": 'Runflat-system tires',
          Winch: '10.000 Lbs. of winch capacity',
          "Armored Body Protection": 'NIJ Ballistic Standard Protection Level III (including glass protection)',
          Armament: 'Manhole/protective hatch with an optional machine gun mounting installed. Equipped with ten (10) gun ports on side and rear position.',

        },
        desc: `ARMORED PERSONNEL CARRIER
        
        A special vehicle designed and manufactured with armored body protection system to ensure the personnel safety for a range of special purpose missions utilize by the military and police.`
      },
      {
        name: 'J-FORCES™ APC 4.5 4X4',
        image: apc454,
        spec: {
          Engine: '4.5 L. Turbo diesel engine (V8), 32-valve DOHC',
          Transmission: 'Automatic 5-speed',
          "Tire Protection": 'Runflat-system tires',
          Winch: '12.000 Lbs. of winch capacity',
          Armament: 'Manhole/protective hatch with an optional machine gun mounting installed. Equipped with ten (10) gun ports on side and rear position.',
          "Armored Body Protection": 'NIJ Ballistic Standard Protection Level III (including glass protection) with metallic finished',

        },
        desc: `Bigger engine displacement capacity version of J-FORCES™ APC, also support a high playload of personnel capacity. This vehicle designed and manufactured with armored body protection system to ensure the personnel safety for a range of special purpose missions utilize by the military and police.`
      },
      {
        name: 'J-FORCES™ JTV 4.5 4X4',
        image: jtvBlank,
        spec: {
          Engine: '4.5 L. Turbo diesel engine (V8), 32-valve DOHC',
          Transmission: 'Manual 5-speed',
          "Tire Protection": 'Runflat-system tires',
          Winch: '12.000 Lbs. of winch capacity',
          "Body Material": 'High strenght steel, aluminum alloy with good formability and corossion resistance',

        },
        desc: `JOINT TACTICAL VEHICLE
        
        Four capacity of passenger with standard and customized equipment, the J-FORCES™ JTV allows the troops to fulfill their needs on the field, such as tool/recovery kit, generator set, camp equipment, and extra fuel jerry cans.`
      },
      {
        name: 'J-FORCES™ VVIP 4.5 4X4',
        image: vvipPh,
        spec: {
          Engine: '4.5 L. Turbo diesel engine (V8), 32-valve DOHC',
          Transmission: 'Manual 5-speed',
          "Tire Protection": 'Runflat-system tires',
          Winch: '12.000 Lbs. of winch capacity',
          Entertainment: 'Exclusive wooden-panel luxury-interior design with comfortable seats and the best quality of audio facility installed.',
          "Armored Body Protection": 'NIJ Ballistic Standard Protection Level III (including glass protection) with metallic finished',
        },
        desc: `SPECIAL VEHICLE
        
        The J-FORCES™ VVIP is a civilian vehicle with reinforced structure that is designed to protects its occupants from assault and bullet. Manufactured with optional standard and bulletproof glass with armor plating. This vehicle can be used to escort 2 VVIPs, such as world leader, political figures, governmental law enforcement, and private military contractors.`
      },
    ],
  })

  return (
    <Layout>
      <Helmet>
        <title itemProp="name" lang="en">Armoring</title>
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
                  Object.keys(listArmor).map((key, keyIdx) => (
                    <Tab eventKey={key} title={key} key={keyIdx}>
                      <div className="row">
                        {
                          listArmor[key].map((armor, armorIdx) => (
                            <div className="col-12 col-md-6 col-lg-4" key={armorIdx}>
                              <Link to="/products/armoring-and-vehicle/product-details" className="armored-img" state={armor}>
                                <ProductCard data={armor}></ProductCard>
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

export default Armoring