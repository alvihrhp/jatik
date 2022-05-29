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
import Z1016 from '../../images/weapon/z_10_16.png';
import Z1020 from '../../images/weapon/z_10_20.png';
import Z157 from '../../images/weapon/z_15_7.png';
import Z1510 from '../../images/weapon/z_15_10.png';
import Z1512 from '../../images/weapon/z_15_12.png';
import Z1514 from '../../images/weapon/z_15_14.png';
import Z1516 from '../../images/weapon/z_15_16.png';
import Z1516S from '../../images/weapon/z_15_16_sport.png';
import Z08 from '../../images/weapon/z-008.png';


import { Tabs, Tab } from "react-bootstrap";

const IppSet = ({ children }) => {
  
  const [ listIppSet, setListIppSet ] = useState({
    "Z-09": [
      {
        name: 'Z-09',
        image: Z09,
        spec: {
          Caliber: '9x21 mm.',
          Barrel: '13” (330 mm.) Stainless',
          'Thread Pitch': '1: 10“',
          Accuracy: '< 4 MOA',
          Weight: '3kg (without store)',
          Length: '810 mm'
        },
        desc: `Hunting self-loading carbine "Z-9". Free-hanging barrel 13 "(330 mm) long is made of stainless steel. The contour is light. The pitch of the barrel is 1:10", muzzle thread 5 / 8-24. Receivers are made by forging and subsequent processing on CNC machines. Material - aluminum 7075-T6. The coating is a solid black anode. 11 "(280 mm) lightweight aluminum alloy stream with KeyMod mounting system. It has an integrated 12-hour Picatinny bar with the option of installing additional bars or additional equipment, with a KeyMod mounting system. The carbine is equipped with a standard single-stage trigger mechanism, three-chamber muzzle brake compensator (mounted on a fixed thread clamp), one magazine with a limit of 10 rounds, double-sided reloading handles and safety, cover for storage and carrying. Sand-colored cover, material combined: 1000d / nylon cordura. Carbine automation works on the principle of free shutter. * Warranty period is 1 year or 10,000 shots from the moment of sale. The complete set and appearance of a product can change. The muzzle device is mounted on a fixed thread clamp. Self-disassembly of the muzzle device can lead to the destruction of the carbine! The product warranty applies only to the use of high-quality factory hunting ammunition. Given the completeness of the product with a stainless steel barrel, the use of cartridges with a bimetallic ball can significantly reduce the life of the barrel. In this case, the critical wear of the barrel can not be regarded as a warranty case.`
      }
    ],
    "Z-10": [
      {
        name: 'Z-10 16" Gen III',
        image: Z1016,
        spec: {
          Caliber: '308 Win',
          Barrel: '16” (406 mm.) Stainless',
          'Thread Pitch': '1: 12 "',
          Accuracy: '< 1.5 MOA',
          Weight: '3.8kg (without store)',
          Length: '840-940 mm'
        },
        desc: `Updated model of the third generation Z-10 .308Win rifle with a barrel length of 16 "(406 mm). The barrel is made of stainless steel, lightweight contour. Billet barrels are made by milling from high-strength aluminum alloy plate. with CNC parts are treated by galvanizing "stonewashing", subjected to hard anodizing, coated with "Cerakote". In this version of the rifle, an intermediate-length butt tube (type A5), a rifle-type return spring and a buffer made directly for this butt system are used. This made it possible to get more comfort when shooting than with the standard butt system carbine, which is most often used for weapons of this platform. Specifics: - barrel length 16 "(406 mm), the contour is light, free-hung (" free float barrel "); - barrel material: stainless steel; - thread pitch 1:12 "; - accuracy of shooting when using high-quality ammunition up to 1.5 MOA; - muzzle thread 5 / 8-24 TPI; - the gas block is adjustable, the landing size of the gas block is 0,750 "; - USM two-stage; - telescopic example; - color "n isochny". The carbine is equipped with a Zbroyar Monocore sound moderator, a Magpul .308Win Gen M3 plastic magazine for 10 rounds, a key for adjusting the gas block, a double-sided recharging handle (optional), a cover for storage and carrying. Sand-colored cover, material combined: 1000d / nylon cordura. The warranty period is 2 years from the date of sale or 7,000 shots. he complete set and appearance of a product can change.The product warranty applies only to the use of high-quality factory hunting ammunition. Given the complete set of the product with a stainless steel barrel, the use of cartridges with a bimetallic ball can significantly reduce the life of the barrel. In this case, the critical wear of the barrel can not be regarded as a warranty case.`
      },
      {
        name: 'Z-10 20 "Gen III',
        image: Z1020,
        spec: {
          Caliber: '308 Win',
          Barrel: '120” (508 mm.) Stainless',
          'Thread Pitch': '1: 11 “',
          Accuracy: '< 1 MOA',
          Receiver: 'aviaton alloy 7075-T6',
          Weight: '4.8kg (without store)',
          Length: '1045 mm'
        },
        desc: `Updated model of the third generation Z-10 .308Win rifle with a barrel length of 16 "(406 mm). The barrel is made of stainless steel, lightweight contour. Billet barrels are made by milling from high-strength aluminum alloy plate. with CNC parts are treated by galvanizing "stonewashing", subjected to hard anodizing, coated with "Cerakote”. In this version of the rifle, an intermediate-length butt tube (type A5), a rifle-type return spring and a buffer made directly for this butt system are used. This made it possible to get more comfort when shooting than with the standard butt system carbine, which is most often used for weapons of this platform. Specifics: - barrel length 16 "(406 mm), the contour is light, free-hung (" free float barrel "); - barrel material: stainless steel; - thread pitch 1:12 "; - accuracy of shooting when using high-quality ammunition up to 1.5 MOA; - muzzle thread 5 / 8-24 TPI; - the gas block is adjustable, the landing size of the gas block is 0,750 "; - USM two-stage; - telescopic example; - color "n isochny". The carbine is equipped with a Zbroyar Monocore sound moderator, a Magpul .308Win Gen M3 plastic magazine for 10 rounds, a key for adjusting the gas block, a double-sided recharging handle (optional), a cover for storage and carrying. Sand-colored cover, material combined: 1000d / nylon cordura. The warranty period is 2 years from the date of sale or 7,000 shots. The complete set and appearance of a product can change. The product warranty applies only to the use of high-quality factory hunting ammunition. Given the complete set of the product with a stainless steel barrel, the use of cartridges`
      }
    ],
    "Z-15": [
      {
        name: 'Z-15 10,5" SSB',
        image: Z1510,
        spec: {
          Caliber: '.223 rem',
          Barrel: '10.5 (226 mm) stainless',
          'Thread Pitch': '1: 7“',
          Accuracy: '< 2 MOA',
          Weight: '2.835 kg (without store)',
          Length: '800 mm'
        },
        desc: `Hunting self-loading carbine "Z-15". The 10.5 ”(266 mm) free-standing barrel is made of stainless steel. The contour is facilitated, type (length of exhaust system) - "Carbine". Receivers are made by forging and subsequent processing on CNC machines. Material - aluminum 7075-T6. The coating is a solid black anode. The carbine uses low-profile adjustable steel gas. block with fastening on tightening screws (not on pins). The carbine automation is adjusted to work with a muzzle device type " Pig " (mounted on a fixed thread clamp). Muzzle device " Pig " is designed for comfortable shooting and reduce muzzle flare. Due to the design of the funnel, it sends a shock wave in the direction from the shooter.The 9.5 "(240 mm) lightweight aluminum alloy stream allows you to comfortably hold the weapon and does not interfere with the cooling of the barrel. The stream has an integrated 12-hour picket bar with the possibility of installing additional bars for 3.6 or 9 hours. Accessories from the American manufacturer Bravo Company: - Lightweight and durable Mil-Spec buttstock with rubber back, designed to prevent the protruding parts of the butt from getting caught in clothing or equipment. Belt fastening for example: a traditional slot for a belt and two sockets for quick-release antabok QD. The example is recorded to maintain the minimum total length of the carbine - 800 mm. -Tube of the Mil-Spec standard, antabka also with the QD socket. 
        - Reduced angle fire control handle. The textured surface allows you to confidently control the weapon. The handle is equipped with a compartment for storing batteries or other small parts. The carbine is equipped with a single-stage shock-trigger mechanism "ALG Defense" or "BCM PNT" (USA), adjustable gas. block, muzzle device " Pig " (mounted on a fixed thread clamp), metal magazine for 10 rounds and / or two plastic transparent stores Lancer L5AWM (USA), storage and carrying case. Sand-colored cover, material combined: 1000d / nylon cordura. * Warranty period is 2 years from the date of sale or 10,000 shots. The complete set and appearance of a product can change. The product warranty applies only to the use of high-quality factory hunting ammunition. The muzzle device is mounted on a fixed thread clamp. Self-disassembly of the muzzle device can lead to the destruction of the carbine! Given the complete set of the product with a stainless steel barrel, the use of cartridges with a bimetallic ball can significantly reduce the life of the barrel. In this case, the critical wear of the barrel can not be regarded as a warranty case.`
      },
      {
        name: 'Z-15 12,5" SSB',
        image: Z1512,
        spec: {
          Caliber: '.223 rem',
          Barrel: '12.5 (317 mm) stainless',
          'Thread Pitch': '1: 7“',
          Accuracy: '< 2 MOA',
          Weight: '2.760 kg (without store)',
          Length: '815mm'
        },
        desc: `Hunting self-loading carbine "Zbroyar Z-15". The 12.5 ”(317 mm) free-standing barrel is made of stainless steel. The contour is facilitated, type (length of exhaust system) - "Carbine". Receivers are made by forging and subsequent processing on CNC machines. Material - aluminum 7075-T6. The coating is a solid black anode. The carbine uses low-profile adjustable steel gas. block with fastening on tightening screws (not on pins). Carbine automation can be adjusted to work with a standard flame arrester / muzzle brake or with a sound moderator "Zbroyar Monocore".The 11 "(280 mm) lightweight aluminum alloy stream and KeyMod mounting system allows you to comfortably hold the weapon and does not interfere with cooling the barrel. Accessories from the American manufacturer Bravo Company: - Lightweight and durable Mil-Spec buttstock with rubber back, designed to prevent the protruding parts of the butt from getting caught in clothing or equipment. Belt fastening for example: a traditional slot for a belt and two sockets for quick-release antabok QD. Assembly of the butt is limited to maintain a minimum total length of the carbine - 800 mm. - Butt pipe of the Mil-Spec standard, antabka also with the QD socket. - Reduced angle fire control handle. The textured surface allows you to confidently control the weapon. The handle is equipped with a compartment for storing batteries or other small parts. - The fire transfer handle on the trickle has a slight incline for a comfortable grip. It is established by means of the KeyMod system, with an inclination to the shooter and with an inverse inclination, for strengthening of capture and pressure to a shoulder. The carbine is equipped with a single-stage shock-trigger mechanism "ALG Defense" or "BCM PNT" (USA), adjustable gas. a block, a A2 flame arrester mounted on a one-piece thread retainer, a metal magazine for 10 rounds and / or two plastic transparent Lancer L5AWM magazines (USA), a storage and carrying case. Sand-colored cover, material combined: 1000d / nylon cordura. * Warranty period is 2 years from the date of sale or 10,000 shots. The complete set and appearance of a product can change. The product warranty applies only to the use of high-quality 
        factory hunting ammunition. The muzzle device is mounted on a fixed thread clamp. Self-disassembly of the muzzle device can lead to the destruction of the carbine! Given the complete set of the product with a stainless steel barrel, the use of cartridges with a bimetallic ball can significantly reduce the life of the barrel. In this case, the critical wear of the barrel can not be regarded as a warranty case.`
      },
      {
        name: 'Z-15 16" SS5',
        image: Z1516,
        spec: {
          Caliber: '.223 rem',
          Barrel: '16 "(406 mm) stainless',
          'Thread Pitch': '1: 7“',
          Accuracy: '< 2 MOA',
          Weight: '3.22kg',
          Length: '860 mm'
        },
        desc: `Hunting self-loading carbine "Z-15". Free-hanging barrel length 16 "(406 mm), made of stainless steel, lightweight contour, type (length of the exhaust system) -" Mid - Leng th " . Thread pitch 1: 7 ". Muzzle thread 1/2 "x28. Receivers are made by forging and subsequent processing on CNC machines. Material - aluminum 7075-T6. The coating is a solid black anode. The carbine uses low-profile adjustable steel gas. block with fastening on tightening screws (not on pins).Carbine automation can be adjusted to work with a standard flame arrester / muzzle brake or with a sound moderator "Monocore". The 15 "(381 mm) lightweight aluminum alloy stream with KeyMod mounting system allows you to comfortably hold the weapon and does not interfere with cooling the barrel. The carbine is equipped with an A5 type butt system with an adjustable BCM Stock Mod1 buttstock. The carbine is equipped with a two-stage Zbroyar trigger mechanism , adjustable gas block, three-chamber muzzle brake compensator, double-sided reloading handle, one magazine for 10 rounds or, optionally, two Magpul Gen 3 magazines with a window, for a set of BC KeyMod Rail Panel Kit 5.5 inch, BCM KAG KeyMod fire transfer handle, storage and carrying case. Sand-colored cover, material combined: 1000d / nylon cordura. * Warranty period is 2 years from the date of sale or 10,000 shots. The complete set and appearance of a product can change. The product warranty applies only to the use of high-quality factory hunting ammunition. Given the completeness of the product with a stainless steel barrel, the use of cartridges with a bimetallic ball can significantly reduce the life of the barrel. In this case, the critical wear of the barrel can not be regarded as a warranty case.`
      },
      {
        name: 'Z-15 16" SS Sport',
        image: Z1516S,
        spec: {
          Caliber: '.223 rem',
          Barrel: '16 "(406 mm) stainless',
          'Thread Pitch': '1: 7“',
          Accuracy: '< 2 MOA',
          Weight: '3.6 kg. (without shop)',
          Length: '920 mm'
        },
        desc: `Hunting self-loading carbine "Z-15". Free-hanging barrel with a length of 16 "(406 mm) is made of stainless steel. Match contour, type (length of the exhaust system) -" Mid-Leng th ". Thread pitch 1: 7 " Receivers are made by forging and subsequent processing on CNC machines. Material - aluminum 7075-T6. The coating is a solid black anode. The carbine uses low-profile adjustable steel gas. block with fastening on tightening screws (not on pins). Carbine automation can be adjusted to work with a standard flame arrester / muzzle brake or with a sound moderator "Zbroyar Monocore". The 15 "(381 mm) lightweight aluminum alloy stream and KeyMod mounting system allows you to comfortably hold the weapon and does not interfere with cooling the barrel. The carbine is equipped with an unregulated example of SRS 1 type " Rifle " The carbine is equipped with a two-stage Zbroyar trigger mechanism , adjustable gas block, three-chamber muzzle brake compensator, one magazine for 10 rounds or, optionally, two Lancer L 5 AWM magazines , a case for storage and carrying. Sand-colored cover, material combined: 1000d / nylon cordura. * Warranty period is 2 years from the date of sale or 10,000 shots. The complete set and appearance of a product can change. The product warranty applies only to the use of high-quality factory hunting ammunition. Given the completeness of the product with a stainless steel barrel, the use of cartridges with a bimetallic ball can significantly reduce the life of the barrel. In this case, the critical wear of the barrel can not be regarded as a warranty case.`
      },
      {
        name: 'Z-15 14.5" SSB',
        image: Z1514,
        spec: {
          Caliber: '.223 rem',
          Barrel: '16 "(406 mm) stainless',
          'Thread Pitch': '1: 7“',
          Accuracy: '< 2 MOA',
          Weight: '3.08 kg. (without shop)',
          Length: '815-860 mm'
        },
        desc: `Hunting self-loading carbine "Z-15". Free-hanging barrel with a length of 16 "(406 mm) is made of stainless steel. Match contour, type (length of the exhaust system) -" Mid-Leng th ". Thread pitch 1: 7 " Receivers are made by forging and subsequent processing on CNC machines. Material - aluminum 7075-T6. The coating is a solid black anode. The carbine uses low-profile adjustable steel gas. block with fastening on tightening screws (not on pins). Carbine automation can be adjusted to work with a standard flame arrester / muzzle brake or with a sound moderator "Zbroyar Monocore". The 15 "(381 mm) lightweight aluminum alloy stream and KeyMod mounting system allows you to comfortably hold the weapon and does not interfere with cooling the barrel. The carbine is equipped with an unregulated example of SRS 1 type " Rifle " The carbine is equipped with a two-stage Zbroyar trigger mechanism , adjustable gas block, three-chamber muzzle brake compensator, one magazine for 10 rounds or, optionally, two Lancer L 5 AWM magazines , a case for storage and carrying. Sand-colored cover, material combined: 1000d / nylon cordura. * Warranty period is 2 years from the date of sale or 10,000 shots. The complete set and appearance of a product can change. The product warranty applies only to the use of high-quality factory hunting ammunition. Given the completeness of the product with a stainless steel barrel, the use of cartridges with a bimetallic ball can significantly reduce the life of the barrel. In this case, the critical wear of the barrel can not be regarded as a warranty case.`
      },
      {
        name: 'Z-15 7.62x35 (.300AAC)',
        image: Z157,
        spec: {
          Caliber: '.300 AAS / .300 BlackOut (7.62x35 mm)',
          Barrel: '10.5 "(266 mm); 12.5" (317 mm) stainless steel',
          'Thread Pitch': '1: 8“',
          Accuracy: '< 2 MOA',
          Weight: '10.5 "-2.9 kg. (Without magazine, with muzzle device Pig); 12.5" -3.02 kg.',
          Length: '(without store, with Pig muzzle) 10.5 "-800 mm; 12.5" -845mm (with Pig muzzle)'
        },
        desc: `Version of the hunting self-loading carbine " Zbroyar Z-15" for low-noise cartridge .300 AAS / .300 Blackout (7.62x35 mm). Free-hanging barrel length 10.5 "(266 mm) or 12.5" (317 mm) is made of stainless steel. Match contour, type (length of the exhaust system) - "Pistol". Receivers are made by forging and subsequent processing on CNC machines. Material - aluminum 7075-T6. The coating is a solid black anode. The carbine uses low-profile adjustable steel gas. block with fastening on tightening screws (not on pins). The 9.5 "(240 mm) or 11" (280 mm) lightweight aluminum alloy stream allows you to comfortably hold the weapon and does not interfere with cooling the barrel. The stream has an integrated Picatinny bar for 12 hours with the possibility of installing additional bars for 3, 6 or 9 hours. Accessories from the American manufacturer Bravo Company: - Lightweight and durable Mil-Spec buttstock with rubber back, designed to prevent the protruding parts of the butt from getting caught in clothing or equipment. Belt fastening for example: a traditional slot for a belt and two sockets for quick-release antabok QD. The example is recorded to maintain the minimum total length of the carbine - 800 mm. - Mil-Spec butt pipe, antabka also with QD connector. - Reduced angle fire control handle. The textured surface allows you to confidently control the weapon. The handle is equipped with a compartment for storing batteries or other small parts. The carbine is equipped with a two-stage trigger " ZBROYAR ", double-sided reloading handle "ZBROYAR" with a channel for removing excess powder gases away from the face of the shooter (this makes shooting with a sound moderator more comfortable), muzzle ), a metal magazine for 10 cartridges and / or two plastic transparent stores Lancer L5AWMB made in the USA (these stores are designed specifically for the use of .300BLK cartridges and have some design differences from conventional stores for cartridges 223Rem), sound moderator, storage and carrying case. Sand-colored cover, material combined: 1000d / nylon cordura. * Warranty period is 2 years from the date of sale or 10,000 shots. The complete set and appearance of a product can change. The product warranty applies only 
        to the use of high-quality factory hunting ammunition. The muzzle device is mounted on a fixed thread clamp. Self-disassembly of the muzzle device can lead to the destruction of the carbine! Given the complete set of the product with a stainless steel barrel, the use of cartridges with a bimetallic ball can significantly reduce the life of the barrel. In this case, the critical wear of the barrel can not be regarded as a warranty case.`
      }
    ],
    "Z-0008": [
      {
        name: 'Zbroyar Z-008 gen III Precision',
        image: Z08,
        spec: {
          Caliber: '.308win',
          Barrel: '24 "- 26" (609-660 mm) stainless',
          'Thread Pitch': '1:10 ", 1:11"',
          Accuracy: '0.5 MOA',
          Receiver: 'aviation alloy 7075-T6; milled ("billet")',
          Weight: '4-5.5 kg (without store)',
          Length: '1090-1140 mm'
        },
        desc: `Carbine version Z-008-III for accurate shooting at long distances. Stainless steel barrel. Available in barrel lengths 20 ”24” and 26 ” (510mm, 610mm and 660mm respectively). It is possible to install an adjustable buttstock. Lightweight, reliable, accurate bolt carabiner, with ergonomics of the AR-15/10 platform and the precision of a classic bolt. Features of a design: Alloy receiver (milled from aluminum 7075 - T6). Locking the shutter on the clutch mounts mounted directly on the barrel. Free-hanging trunk. Stream with picatini bar for 12 hours and the possibility of installing additional bars for 3, 6 and 9 hours. Technical characteristics and complete set: stainless barrel (twist 1:10 "; 1:11 " ; 1:12 "); barrel length 20 ", 24", 26 "; sound moderator "Zbroyar Monocore", DHA (optional); weight from 4 kg to 5.5 kg; total length 1050 mm -1140 mm; accuracy 0.5 MOA; adjustable trigger (0.8 - 1.5 kg); accessories Luth - AR (USA); shop for 10 rounds (AR-10 compatible); Cerakote coating: black, green or sand. Warranty 2 years or 7000 shots. The complete set and appearance of a product can change. The product warranty applies only to the use of high-quality factory hunting ammunition. Given the complete set of the product with a stainless steel barrel, the use of cartridges with a bimetallic ball can significantly reduce the life of the barrel. In this case, the critical wear of the barrel can not be regarded as a warranty case.`
      }
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
                  Object.keys(listIppSet).map((key, keyIdx) => (
                    <Tab eventKey={key} title={key} key={keyIdx}>
                      <div className="row">
                        {
                          listIppSet[key].map((ippSet, ippSetIdx) => (
                            <div className="col-12 col-md-6 col-lg-4" key={ippSetIdx}>
                              <Link to="/products/soldier-defense-equipment/product-details" state={ippSet}>
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