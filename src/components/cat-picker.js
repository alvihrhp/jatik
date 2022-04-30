import * as React from "react";
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby";


const CatPicker = ({ children }) => {
  return (
    <div className="flex-row gap-3 d-flex">
      <Link to="/products/weapon" className="cat" activeClassName="cat-active">
        <div className="cat-picker">
          <StaticImage src="../images/weapon.jpg" alt="weapon" className="cat-image"/>
          <div className="bg-overlay"></div>
          <div className="info justify-content-center align-items-center position-absolute w-100">
            <h5>Weapon</h5>
          </div>
        </div>
      </Link>
      <Link to="/products/sound-moderators" className="cat" activeClassName="cat-active">
        <div className="cat-picker">
          <StaticImage src="../images/sound.jpg" alt="sound and moderators" className="cat-image"/>
          <div className="bg-overlay"></div>
          <div className="info justify-content-center align-items-center position-absolute w-100">
            <h5>Sound & Moderators</h5>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CatPicker