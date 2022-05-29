import * as React from "react";
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby";


const SoldierCatPicker = ({ children }) => {
  return (
    // <div className="flex-row gap-3 d-flex">
    //   <Link to="/products/weapon" className="cat" activeClassName="cat-active">
    //     <div className="cat-picker">
    //       <StaticImage src="../images/weapon.jpg" alt="weapon" className="cat-image"/>
    //       <div className="bg-overlay"></div>
    //       <div className="info justify-content-center align-items-center position-absolute w-100">
    //         <h5>Weapon</h5>
    //       </div>
    //     </div>
    //   </Link>
    //   <Link to="/products/sound-moderators" className="cat" activeClassName="cat-active">
    //     <div className="cat-picker">
    //       <StaticImage src="../images/sound.jpg" alt="sound and moderators" className="cat-image"/>
    //       <div className="bg-overlay"></div>
    //       <div className="info justify-content-center align-items-center position-absolute w-100">
    //         <h5>Sound & Moderators</h5>
    //       </div>
    //     </div>
    //   </Link>
    // </div>
    <div className="cat-categories">
      <p className="picker-title">Pick a category</p>
      <div className="flex-row gap-3 overflow-auto d-flex align-items-center scrolling-section">
        <Link to="/products/ballistic-helmet" className="cat" activeClassName="cat-active">
          <div className="cat-picker">
            <div className="info w-100">
              <h5>Ballistic Helmet</h5>
            </div>
          </div>
        </Link>
        <p className="dot-divider">•</p>
        <Link to="/products/ballistic-vest" className="cat" activeClassName="cat-active">
          <div className="cat-picker">
            <div className="info w-100">
              <h5>Ballistic Vest</h5>
            </div>
          </div>
        </Link>
        <p className="dot-divider">•</p>
        <Link to="/products/ipp-set" className="cat" activeClassName="cat-active">
          <div className="cat-picker">
            <div className="info w-100">
              <h5>IPP-SET (Integrated Personnel Protection)</h5>
            </div>
          </div>
        </Link>
        <p className="dot-divider">•</p>
        <Link to="/products/ppe" className="cat" activeClassName="cat-active">
          <div className="cat-picker">
            <div className="info w-100">
              <h5>PPE (Personal Protective Equipment)</h5>
            </div>
          </div>
        </Link>
        <p className="dot-divider">•</p>
        <Link to="/products/tactical-backpack" className="cat" activeClassName="cat-active">
          <div className="cat-picker">
            <div className="info w-100">
              <h5>Tactical Backpack</h5>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default SoldierCatPicker