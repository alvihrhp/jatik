import React, { useState } from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../../components/layout";
import BottomInquiry from "../../components/bottom-inquiry";
import SoldierCatPicker from "../../components/cat-picker/soldier-cat-picker";
import ProductCard from "../../components/product-card";

/** Image */
import airFrame from '../../images/ballistic/air-frame.png';
import Fast from '../../images/ballistic/fast.png';
import Mich from '../../images/ballistic/mich.jpeg';
import Sprint from '../../images/ballistic/sprint.jpeg';


import { Tabs, Tab } from "react-bootstrap";

const Ballistic = ({ children }) => {
  
  const [ listBallistic, setListBallistic ] = useState({
    "Ballistic Helmet": [
      {
        name: 'Air Frame',
        image: airFrame,
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
      {
        name: 'FAST / Future Assault S bright Technology',
        image: Fast,
        spec: {
          Weight: '1,641gr',
          Size: 'All size (customizable)',
          Level: 'NIJ Level III-A',
          Completeness: 'Side Rail, NVG mount',
        },
        desc: `The FAST helmet is a high-performance, multi-layer, lightweight bullet-proof helmet. With its revolutionary ergonomic shell geometry, FAST provides the highest level of ballistic protection at the lightest weight in combat operations.
        
        •   The lowest deformation helmet protection.
        •   Equipped with the J-Forces Suspension System for increased comfort and stability.
        •   Meets NIJ (National Institute of Justice) Ballistic performance, protection and quality standards.
        •   The foundation for all J-Forces Modular Protection System components and accessories.
        •   Compatible with NVG, masks and communication devices.
        •   Side rails support quick and easy fabrication and disassembly without having to punch holes in the helmet.
        •   Simplifies NVG installation.
        •   Relatively light, equipped with soft cushions that can be positioned differently.`
      },
      {
        name: 'MICH / Modular Integrated Communications Helmet',
        image: Mich,
        spec: {
          Weight: '1,641gr',
          Size: 'All size (customizable)',
          Level: 'NIJ Level III-A',
          Completeness: 'Side Rail, NVG mount',
        },
        desc: `A lightweight bullet-proof helmet for special operations that combines excellent ballistic and non-ballistic protection with the capability for most tactical headsets and microphones that special operations forces use.
        
        •   Helmet protection with the lowest deformation.
        •   Equipped with the J-Forces Suspension System for increased comfort and stability.
        •   Meets NIJ (National Institute of Justice) Ballistic performance, protection and quality standards.
        •   The foundation for all J-Forces Modular Protection System components and accessories.
        •   Compatible with NVGs, masks, and communication devices.
        •   Sturdy side rail suspension for attaching additional accessories.
        •   Increased extra protection covering the ear area and the back of the head.`
      },
      {
        name: 'Sprint',
        image: Sprint,
        spec: {
          Weight: '1,641gr',
          Size: 'All size (customizable)',
          Level: 'NIJ Level III-A',
          Completeness: `Side Rail, NVG mount`,
        },
        desc: `Bulletproof helmets are designed to allow for comfortable head movement and are lighter than other ballistic helmets. Strong protection from fragmentation projectiles, ballistics and other elemental threats. SPRINT helmets use a pad liner system for increased stability and comfort.
        
        •   Helmet protection with the lowest deformation.
        •   Equipped with the J-Forces Suspension System for increased comfort and stability.
        •   Meets NIJ (National Institute of Justice) Ballistic performance, protection and quality standards.
        •   The foundation for all J-Forces Modular Protection System components and accessories.
        •   Mounting accessories such as cameras and flashlights can be attached very easily.
        •   The harness is easier to remove for cleaning.
        •   Mounts for night vision goggles that are well integrated.`
      },
    ],
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

            <div>
              <p>

              </p>
            </div>

            <div className="col-12">
              <Tabs className="subcat">
                {
                  Object.keys(listBallistic).map((key, keyIdx) => (
                    <Tab eventKey={key} title={key} key={keyIdx}>
                      <div className="row">
                        {
                          listBallistic[key].map((ballistic, ballisticIdx) => (
                            <div className="col-12 col-md-6 col-lg-4" key={ballisticIdx}>
                              <Link to="/products/soldier-defense-equipment/product-details" state={ballistic} class="soldier-img">
                                <ProductCard data={ballistic}></ProductCard>
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

export default Ballistic