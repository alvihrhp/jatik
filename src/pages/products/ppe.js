import React, { useState } from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../../components/layout";
import BottomInquiry from "../../components/bottom-inquiry";
import SoldierCatPicker from "../../components/cat-picker/soldier-cat-picker";
import ProductCard from "../../components/product-card";

/** Image */
import Lvl1 from '../../images/ppe/level1.jpg';
import Lvl2 from '../../images/ppe/level2.jpg';
import Lvl3 from '../../images/ppe/level3.jpg';


import { Tabs, Tab } from "react-bootstrap";

const Ppe = ({ children }) => {
  
  const [ listPpe, setListPpe ] = useState({
    "PPE": [
      {
        name: 'PPE Level 1',
        image: Lvl1,
        spec: {
          "Key Features": `•  Elastic bands around waist, ankles, and wrists for comfort and freedom of movement.
          •  Seams in sealant for maximum protection from particles and fluids
          •  Can effectively protect the wearer from the threat of infection.`,
          Coverall: `A layer of microporous film that is breathable and does not penetrate micron particles, covering all parts of the body well.`,
          'Medical Safety Goggle': 'Top quality eco-friendly ABS material with full 360 degree protection.',
          'Face Shield': 'Anti-fog PP + PET material that blocks splash particles for facial protection.',
          'KN-95 mask': 'Non-waven material, filters 95% of airborne particles and adjusts facial curves.',
          'Disposible Mask 3 PLY': 'Spunbond Polypropylene material protects against bacteria.',
          'Medical Gloves': 'Latex rubber material protects hands from contamination and germs.',
          'Shoe Covers': 'Polyethylene Film and Spunbond Non-Waven material which is elastic and waterproof and dust resistant.',
        },
        desc: `Personal Protective Equipment Level I for protection of the body from dangerous particles, fluids and viruses, equipped with the following accessories:`
      },{
        name: 'PPE Level 2',
        image: Lvl2,
        spec: {
          "Key Features": `•  Micron-sized particles are impermeable, so it is effective at protecting the wearer from contamination.
          •  Double Layer Non-Waven & PE Laminate for complete protection from particles and liquids.
          •  Breathable material ensures good air circulation.`,
          Coverall: `A layer of microporous film that is breathable and does not penetrate micron particles, covering all parts of the body well.`,
          'Medical Safety Goggle': 'Top quality eco-friendly ABS material with full 360 degree protection.',
          'Face Shield': 'Anti-fog PP + PET material that blocks splash particles for facial protection.',
          'KN-95 mask': 'Non-waven material, filters 95% of airborne particles and adjusts facial curves.',
          'Disposible Mask 3 PLY': 'Spunbond Polypropylene material protects against bacteria.',
          'Medical Gloves': 'Latex rubber material protects hands from contamination and germs.',
          'Shoe Covers': 'Polyethylene Film and Spunbond Non-Waven material which is elastic and waterproof and dust resistant.',
        },
        desc: `Personal Protective Equipment Level I for protection of the body from dangerous particles, fluids and viruses, equipped with the following accessories:`
      },
      {
        name: 'PPE Level 3',
        image: Lvl3,
        spec: {
          "Key Features": `•  Micron-sized particles are impermeable, so it is effective at protecting the wearer from contamination.
          •  Stretchy fabric on flexible wrists and feet for extra protection
          •  Can effectively protect users from the threat of infection.`,
          Coverall: `A layer of microporous film that is breathable and does not penetrate micron particles, covering all parts of the body well.`,
          'Medical Safety Goggle': 'Top quality eco-friendly ABS material with full 360 degree protection.',
          'Face Shield': 'Anti-fog PP + PET material that blocks splash particles for facial protection.',
          'KN-95 mask': 'Non-waven material, filters 95% of airborne particles and adjusts facial curves.',
          'Disposible Mask 3 PLY': 'Spunbond Polypropylene material protects against bacteria.',
          'Medical Gloves': 'Latex rubber material protects hands from contamination and germs.',
          'Shoe Covers': 'Polyethylene Film and Spunbond Non-Waven material which is elastic and waterproof and dust resistant.',
        },
        desc: `Personal Protective Equipment Level I for protection of the body from dangerous particles, fluids and viruses, equipped with the following accessories:`
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

export default Ppe