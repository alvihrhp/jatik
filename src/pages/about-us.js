import * as React from "react";
import Layout from "../components/layout";
import BottomInquiry from "../components/bottom-inquiry";
import {Helmet} from "react-helmet";
import { StaticImage } from "gatsby-plugin-image"

const AboutUs = ({ children }) => {
  return (
    <Layout>
      <Helmet>
        <title itemProp="name" lang="en">About us</title>
      </Helmet>

      <section className="about-us">
        <div className="container main-layout">
          <div className="row">
            <div className="col">
              <h6 className="page-title">About Jatik</h6>
              <h5>JATIK is a specialized group encompassing the entire spectrum of Defence, Security and Intelligence Technologies.</h5>
              <StaticImage
                alt="About us hero image"
                src="../images/headline.png"
                className="about-hero"
              />
              <div className="body-text">
                <p>
                PT Jatik Cakra Nanggal is a fully independent Indonesian owned and operated trading company. JATIK is a specialized group encompassing the entire spectrum of Defence, Security and Intelligence Technologies. JATIK was established to provide Government Agencies with specialist bespoke Sourcing, Procurement and Support Services especially that all foreign suppliers do need a local partner in order to supply the Indonesian armed forces and Police.
                </p>
                <p>JATIK is totally independent and has no affiliation with any of the coalition force countries or any insurance companies, which we believe is very important at this time.</p>
                <p>JATIK is currently has running supply contract with Indonesia Ministry of Defence for various products.</p>
                <ul>
                  <li>Remote controlled weapon station for Armored Personal Carrier</li>
                  <li>An Amphibious vehicle for Indonesia Armed forces.</li>
                </ul>
                <p>We foresee a good future in cooperation between our companies for Indonesian market, therefore we would be very happy to present your product to our different end users and we are open to explore any possibilities of cooperation between our companies in Indonesia.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BottomInquiry></BottomInquiry>
    </Layout>
  )
}

export default AboutUs