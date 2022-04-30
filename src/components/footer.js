import * as React from "react";
import { StaticImage } from "gatsby-plugin-image"

// markup
const JatikFooter = () => {
  return (
    <footer>
      <div className="text-overlay">
        <StaticImage src="../images/basemap.png" alt="SEA map" className="sea-map"/>
        <h4>We’re The Leader of Southeast Asia Army Equipments Supply</h4>
      </div>
      <div className="container footer-info">
        <div className="row align-items-start">
          <div className="col-12 col-md-1 me-4 mb-4">
            <StaticImage src="../images/jatik.png" alt="Jatik.id" className="logo-footer"/>
          </div>
          <div className="col-6 col-sm-12 col-md-4 me-4">
            <p className="fw-bold mb-2">Address</p>
            <p>PIK 2 Ruko GOLF ISLAND GOLD No. 222 - Pantai Indah Kapuk - Kamal Muara, Penjaringan Jakarta Utara 14470</p>
          </div>
          <div className="col-6 col-sm-12 col-md-4">
            <p className="fw-bold mb-2">Contact</p>
            <div className="d-flex align-items-center mb-2">
              <StaticImage src="../images/icons/envelope.png" alt="mail icon" className="icon-footer"/>
              <p className="mb-0 ms-2"><a href="mailto:info@jatik.co.id">info@jatik.co.id</a></p>
            </div>
            <div className="d-flex align-items-center">
              <StaticImage src="../images/icons/phone.png" alt="mail icon" className="icon-footer"/>
              <p className="mb-0 ms-2"><a href="tel:+62811807909">+62 811-807-909</a></p>
            </div>
          </div>
        </div>
      </div>
      <div className="container footer-info">
        <div className="row align-items-start">
          <div className="col d-flex justify-content-center">
            <p className="copyright">Copyright © 2022 | PT. Jatik Cakra Nanggala. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default JatikFooter