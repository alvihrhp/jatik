import React, { useState } from "react";
import Layout from "../../components/layout";
import { Link } from "gatsby";
import BottomInquiry from "../../components/bottom-inquiry";
import WeaponCatPicker from "../../components/cat-picker/weapon-cat-picker";
import ProductCard from "../../components/product-card";
import { Tabs, Tab } from "react-bootstrap";
import { Helmet } from "react-helmet";

/** Image */
import ZFast from '../../images/weapon/zboyar_fast.png';
import M5 from '../../images/weapon/monocore_5.png';
import M7 from '../../images/weapon/monocore_7.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SoundModerators = () => {

  const [ listModerators, setListModerators ] = useState({
    "C 5.56": [
      {
        name: 'Zbroyar FAST (Fast-Attach Tactical Suppressor)',
        image: ZFast,
        spec: {
          Caliber: '.223 Rem',
          Weight: '0.650kg. (with DHA)',
          Length: '175 mm'
        },
        desc: `Complex F. _ A. _ S. _ T. _ ( Fast - Attach Suppressor Tactical ) is designed to reduce the negative impact of the sound of the shot on the shooter, his surroundings and eliminate the flash when firing from hunting rifles .223Rem caliber. The complex consists of a muzzle device (DHA or flame arrester) and directly the device (PZRZP), which is attached to the muzzle device by means of a clutch with a ratchet mechanism, which contains a symmetrical clamp on the bearing surfaces of the muzzle device.
        
        This ensures the speed, repeatability and reliability of the centering of the MANPF in relation to the barrel channel when connected, as well as its quick and easy disconnection even after heating and contamination by the products of combustion of gunpowder.PZRZP is made of heat-resistant stainless steel and covered with heat-resistant weapon paint.
        
        The case is made by welding in a monoblock, which provides low weight and the ability to conduct long fires. he device does not require internal cleaning and maintenance, if necessary it can be washed with a solvent of a deposit.Warranty period PZRZP F. A. _ S. _ T. _ from the moment of sale is 2 years or 10,000 shots. The product warranty applies only to the use of high-quality factory hunting ammunition. Features: Caliber - .223 Rem (through diameter of the hole of the device min 7.5 mm) The length of the device is 175 mm The outer diameter of the device is 48 mm The weight of the device is 0.535 kg Increasing the length of the weapon - 120 mm DHA weight - 0.115 kg Length of DHA - 70 mm DHA thread - 1 / 2-28 UNEF Sound level reduction - 26-30 dB`
      },
      {
        name: 'Monocore 5.56',
        image: M5,
        spec: {
          'Noise Reduction Level': 'up to 30db',
          Weight: '0.59 kg',
          Length: '175 mm',
          Diamter: '45 mm',
          'Throughput Diameter Of': '223 7.5mm',
          Thread: '1 / 2-28 TPI'
        },
        desc: `Zbroyar specialists have developed and are producing Zbroyar Monocore sound moderators. The core of the device is made on a four-coordinate machine tool with CNC, from a solid billet of aluminum, due to which the product actually consists of three parts. This gives a significant advantage in terms of strength, heat dissipation and the impossibility of backlash (inherent in mufflers with typesetting partitions), which negatively affects the accuracy of the weapon. By default, the product comes in a non-detachable version. Does not require special cleaning because the contaminants are carried away by gases under high pressure.The device is maximally optimized for work with self-loading carbines, it has a system of peripheral flow of powder gases. 
        
        This radically reduces the negative impact on the operation of automation (so-called "overflow", or a critical increase in the recoil speed of moving parts), as well as the level of contamination of weapons compared to competitors. Now sound moderators are made exclusively with fastening on a trunkc arving (landing knot is made of steel). The most common types of threads are available for AR-10 and AR-15 systems (1 / 2-28, 5 / 8-24), other carbines of foreign production. We do not offer products for 14x1 (left) and 24x1.5 AK automatic threads, because the systematic lack of alignment of the thread with the barrel channel leads to constant problems when installing sound moderators on AK and carbines on their base.When designing the Zbroyar Monocore product, we focused on achieving a device life of at least 5,000 shots. At the same time, in comparison with foreign sound moderators with primitive monolithic cores of light alloys (for example, "Sako", "Hausken"), we have increased the wall thickness by 2 times or more - to ensure maximum reliability. All aluminum components are coated with hard anodizing, resistant to aggressive environments. 
        
        Exterior coating - weapon paints made in the USA. The actual life of Zbroyar Monocore products exceeds 5,000 shots. Not designed for shooting in automatic mode (intensive shooting modes). Another feature of the device is the use of a removable front cover. This allows you to painlessly repair the moderator by touching it with a bullet, which can occur in case of incorrect installation or in the case of self-unscrewing during firing and, as a rule, leaves a mark in the farthest part of the muzzle. Noise reduction level - up to 30dB Weight - 0.59 kg Length - 230 mm Diameter - 45 mm Throughput diameter of 223 - 7.5 mm Thread - 1 / 2-28 TPI The product warranty applies only to the use of high-quality factory hunting ammunition.`
      }
    ],
    "C 7.62": [
      { 
        name: 'Monocore 7.62',
        image: M7,
        spec: {
          'Noise Reduction Level': 'up to 27dB',
          Weight: '0.6 kg',
          Length: '230 mm',
          Diamter: '45 mm',
          'Throughput Diameter Of': '9 mm',
          Thread: '5 / 8-24 TPI; M18x1; M15x1'
        }
      }
    ]
  })

  return (
    <Layout>
      <Helmet>
        <title itemProp="name" lang="en">Sound & Moderators</title>
      </Helmet>
      <section className="product-list">
        <div className="container main-layout">
          <div className="row">
            <h6 className="page-title">Weapon & Sound Moderators</h6>
            
            <div className="col-12">
              <WeaponCatPicker></WeaponCatPicker>
            </div>

            <div className="col-12">
              <Tabs defaultActiveKey="C 5.56" className="subcat">
                {
                  Object.keys(listModerators).map((key, keyIdx) => (
                    <Tab eventKey={key} title={key} key={keyIdx}>
                      <div className="row">
                        {
                          listModerators[key].map((moderator, moderatorIdx) => (
                            <div className="col-12 col-md-6 col-lg-4" key={moderatorIdx}>
                              <Link to="/products/weapon-and-sound-moderators/product-details" state={moderator}>
                                <ProductCard data={moderator}></ProductCard>
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

export default SoundModerators