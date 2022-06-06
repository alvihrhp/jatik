import React, { useState } from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../../components/layout";
import BottomInquiry from "../../components/bottom-inquiry";
import SoldierCatPicker from "../../components/cat-picker/soldier-cat-picker";
import ProductCard from "../../components/product-card";

/** Image */
import Garuda from '../../images/ipp-set/garuda.png';
import Kodam from '../../images/ipp-set/kodam.png';
import Kopassus from '../../images/ipp-set/kopassus.png';
import Kostrad from '../../images/ipp-set/kostrad.png';
import Raider from '../../images/ipp-set/raider.png';


import { Tabs, Tab } from "react-bootstrap";

const IppSet = ({ children }) => {
  
  const [ listIppSet, setListIppSet ] = useState({
    "IPP-SET": [
      {
        name: 'IPP-SET GARUDA COMBAT KIT',
        image: Garuda,
        spec: {
          Head: 'Ballistic Helmet High Cut',
          "Upper Body": `
          Ballistic Vest,
          Hard Armor Plate Level III ICW,
          Soft Armor Level IV,
          Assaulter Panel,
          Organizer Pouch,
          Water Hydration Pouch, 
          Utility Pouch,
          Tactical Bag`,
          'Lower Body': 'Boots',
        },
        desc: `IPP-SET for the procurement of BABEK TNI TA. 2019`
      },
      {
        name: 'IPP-SET KODAM I BUKIT BARISAN',
        image: Kodam,
        spec: {
          Head: `Ballistic Helmet FAST Series,
          Balaclava, 
          Gask Mask,
          Ballistic Goggles`,
          "Upper Body": `Ballistic Vest Molle Level IV,
          Sharp Grenade,
          Smoke Grenade,
          Tactical Gloves,
          Radio Pouch,
          Gun Mag Mp5`,
          'Lower Body': `Tactical Elbow Pad,
          Tactical Knee Pad,
          Boots,
          Universal Holster`,
        },
        desc: `IPP-SET for the procurement of BABEK TNI TA. 2019`
      },
      {
        name: 'IPP-SET PASKA KOPASSUS',
        image: Kopassus,
        spec: {
          Head: `	Ballistic Helmet FAST Series,
          Balaclava,
          Modular Light NE MPLS,
          Charge MPLS Helmet Light Mount,
          NVG Mounting,
          Ballistic Eye Glass,
          Strobe Spell,
          Tactical Waterproof Camera`,
          "Upper Body": `Counter Weight Kit,
          Level IV Ballistic Vest,
          Armor Plates,
          Tactical Floatation Collar,
          Triple Mag,
          SMG Mag,
          Gun Mag,
          Smoke Grenade,
          Double Frag,
          Double Flash Bang,
          Radio Pouch,
          Utility Pouch,
          Dump Pouch,
          Organizer Pouch,
          Water Hydration Carrier,
          AVS Belt,
          Map Armband,
          Combat Trauma Kit,
          G3 Combat Suit,
          Tactical Backpack,
          Tactical Fast Rope Glove,
          Tactical duffle Bag,
          Molle and Belt Adapter,
          Warrior Aid and Litter Kit,
          Bleeding Control Skill Training Kit,
          Assault Litter with Carrier`,
          'Lower Body': `Tactical Elbow Pad,
          Tactical Knee Pad,
          Amphibian Boots,
          Universal Holster`,
        },
        desc: `IPP-SET for the procurement of BABEK TNI. 2018`
      },
      {
        name: 'IPP-SET RAIDER KOSTRAD',
        image: Kostrad,
        spec: {
          Head: `Ballistic Helmet FAST Series`,
          "Upper Body": `Modular Assault Ballistic Vest,
          Hard Armor Plate Level III ICW,
          Soft Armor Level III-A,
          IPP Set Bag,
          Tactical Gloves,
          Tactical Duty Belt,
          Multitools Pouch,
          Universal Radio Pouch,
          Smoke Grenade,
          Assaulter Panel,
          Sharp Grenade,
          Laser Cut Modular Utility,
          First Aid Medic`,
          'Lower Body': `Tactical Elbow Pad,
          Tactical Knee Pad,
          Boots,
          Universal Holster,
          Modular Dropleg Panel,
          Single Strap Leg Shroud`,
        },
        desc: `IPP-SET for the procurement of BABEK TNI TA. 2019`
      },
      {
        name: 'IPP-SET TYPE – 2 RAIDER KOSTRAD',
        image: Raider,
        spec: {
          Head: `Ballistic Helmet FAST Series`,
          "Upper Body": `Combat Suit,
          Level IV Ballistic Vest,
          Tactical Gloves,
          Tactical Duty Belt,
          Water Hydration Carrier,
          Utility Pouch,
          Medic Pouch,
          Radio Pouch,
          Triple Mag 5.56mm,
          Multi Tools Pouch,
          Double Mag 9mm,
          Double Frag Granade`,
          'Lower Body': `Tactical Elbow Pad,
          Tactical Knee Pad,
          Boots,
          Universal Duty Holster,
          Drop Leg Panel`,
        },
        desc: `IPP-SET for the procurement of MABESAD TA. 2019`
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
                  Object.keys(listIppSet).map((key, keyIdx) => (
                    <Tab eventKey={key} title={key} key={keyIdx}>
                      <div className="row">
                        {
                          listIppSet[key].map((ippSet, ippSetIdx) => (
                            <div className="col-12 col-md-6 col-lg-4" key={ippSetIdx}>
                              <Link to="/products/ipp-set/product-details" state={ippSet}>
                                <ProductCard data={ippSet}></ProductCard>
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

export default IppSet