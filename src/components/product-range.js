import * as React from "react";
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby";

const ProdRange = ({ children }) => {
  return (
    <section className="product-range product-range-page">
      <p className="product-title">Explore our products range</p>
      <div className="flex-row d-flex">
        <div className="product-cat-list d-flex justify-content-center">
          <Link to="/products/weapon" className="product-cat">
            <StaticImage src="../images/weapon.jpg" alt="weapon"/>
            <div className="bg-overlay"></div>
            <div className="info justify-content-between align-items-center position-absolute w-100">
              <p>Weapon & <br/> Sound Moderator </p>
              <StaticImage src="../images/icons/red-arrow.png" alt="red arrow" className="hover-arrow"/>
            </div>
          </Link>
        </div>
        <div className="product-cat-list d-flex justify-content-center">
          <Link to="/products/product-list" className="product-cat">
            <StaticImage src="../images/thermal.jpg" alt="thermal"/>
            <div className="bg-overlay"></div>
            <div className="info justify-content-between align-items-center position-absolute w-100">
              <p>Thermal Vision Technologies</p>
              <StaticImage src="../images/icons/red-arrow.png" alt="red arrow" className="hover-arrow"/>
            </div>
          </Link>
        </div>
        <div className="product-cat-list d-flex justify-content-center">
          <Link to="/products/product-list" className="product-cat">
            <StaticImage src="../images/armour.jpg" alt="armour"/>
            <div className="bg-overlay"></div>
            <div className="info justify-content-between align-items-center position-absolute w-100">
              <p>Armouring, Special & Tracked Vehicle</p>
              <StaticImage src="../images/icons/red-arrow.png" alt="red arrow" className="hover-arrow"/>
            </div>
          </Link>
        </div>
        <div className="product-cat-list d-flex justify-content-center">
          <Link to="/products/product-list" className="product-cat">
            <StaticImage src="../images/soldier.jpg" alt="soldier"/>
            <div className="bg-overlay"></div>
            <div className="info justify-content-between align-items-center position-absolute w-100">
              <p>Soldier Defense Equipment</p>
              <StaticImage src="../images/icons/red-arrow.png" alt="red arrow" className="hover-arrow"/>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProdRange