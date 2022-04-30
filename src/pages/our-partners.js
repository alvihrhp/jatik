import * as React from "react";
import Layout from "../components/layout";
import BottomInquiry from "../components/bottom-inquiry";
import { StaticImage } from "gatsby-plugin-image"

const ourPartners = ({ children }) => {
  return (
    <Layout>
      <section className="about-us">
        <div className="container main-layout">
          <h6 className="page-title">Jatik's Parners</h6>
            <div className="partner-list">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="partner-card">
                    <StaticImage
                      alt="Zbroyar logo"
                      src="../images/zbroyar.png"
                      className="partner-logo"
                    />
                    <h6>Zbroyar</h6>
                    <p>We foresee a good future in cooperation between our companies for Indonesian market, therefore we would be very happy to present your product to our different end users and we are open to explore any possibilities of cooperation between our companies in Indonesia.</p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="partner-card">
                    <StaticImage
                      alt="Archer logo"
                      src="../images/archer.png"
                      className="partner-logo archer"
                    />
                    <h6>Archer</h6>
                    <p>We foresee a good future in cooperation between our companies for Indonesian market, therefore we would be very happy to present your product to our different end users and we are open to explore any possibilities of cooperation between our companies in Indonesia.</p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="partner-card">
                    <StaticImage
                      alt="Berikat logo"
                      src="../images/berikat.png"
                      className="partner-logo"
                    />
                    <h6>PT. Berikat Nusantara Perkasa</h6>
                    <p>We foresee a good future in cooperation between our companies for Indonesian market, therefore we would be very happy to present your product to our different end users and we are open to explore any possibilities of cooperation between our companies in Indonesia.</p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="partner-card">
                    <StaticImage
                      alt="Rama logo"
                      src="../images/rama.png"
                      className="partner-logo"
                    />
                    <h6>PT. Ridho Agung Mitra Abadi</h6>
                    <p>We foresee a good future in cooperation between our companies for Indonesian market, therefore we would be very happy to present your product to our different end users and we are open to explore any possibilities of cooperation between our companies in Indonesia.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
      <BottomInquiry></BottomInquiry>
    </Layout>
  )
}

export default ourPartners