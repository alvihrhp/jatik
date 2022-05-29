import * as React from "react";
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby";


const ArmoringCatPicker = ({ children }) => {
  return (
    // <div className="flex-row gap-3 d-flex">
    //   <Link to="/products/armouring" className="cat" activeClassName="cat-active">
    //     <div className="cat-picker">
    //       <StaticImage src="../images/weapon.jpg" alt="weapon" className="cat-image"/>
    //       <div className="bg-overlay"></div>
    //       <div className="info justify-content-center align-items-center position-absolute w-100">
    //         <h5>Armouring</h5>
    //       </div>
    //     </div>
    //   </Link>
    //   <Link to="/products/special-vehicle" className="cat" activeClassName="cat-active">
    //     <div className="cat-picker">
    //       <StaticImage src="../images/tracked.jpg" alt="sound and moderators" className="cat-image"/>
    //       <div className="bg-overlay"></div>
    //       <div className="info justify-content-center align-items-center position-absolute w-100">
    //         <h5>Special Vehicle</h5>
    //       </div>
    //     </div>
    //   </Link>
    //   <Link to="/products/tracked-vehicle" className="cat" activeClassName="cat-active">
    //     <div className="cat-picker">
    //       <StaticImage src="../images/sound.jpg" alt="sound and moderators" className="cat-image"/>
    //       <div className="bg-overlay"></div>
    //       <div className="info justify-content-center align-items-center position-absolute w-100">
    //         <h5>Tracked Vehicle</h5>
    //       </div>
    //     </div>
    //   </Link>
    // </div>
    <div className="cat-categories">
      <p className="picker-title">Pick a category</p>
      <div className="flex-row gap-3 overflow-auto d-flex align-items-center">
        <Link to="/products/armoring-vehicle" className="cat" activeClassName="cat-active">
          <div className="cat-picker">
            <div className="info w-100">
              <h5>Armoring Vehicle</h5>
            </div>
          </div>
        </Link>
        
        <p className="dot-divider">•</p>
        
        <Link to="/products/special-vehicle" className="cat" activeClassName="cat-active">
          <div className="cat-picker">
            <div className="info w-100">
              <h5>Special Vehicle</h5>
            </div>
          </div>
        </Link>
        
        <p className="dot-divider">•</p>

        <Link to="/products/tracked-vehicle" className="cat" activeClassName="cat-active">
          <div className="cat-picker">
            <div className="info w-100">
              <h5>Tracked Vehicle</h5>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ArmoringCatPicker