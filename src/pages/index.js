import * as React from "react";
import Layout from "../components/layout";
import BottomInquiry from "../components/bottom-inquiry";
import ProdRange from "../components/product-range";
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "react-bootstrap";
import { Link } from "gatsby";
import bgVideo from "../video/video-bg.mp4";

const Homepage = ({ children }) => {
  return (
    <Layout>
      <section className="hero">
        <div className="text-overlay">
          <StaticImage src="../images/hero.jpg" alt="hero" className="bg-overlay"/>
          <div className="position-absolute w-100 bottom-fix">
            <div className="container">
              <div className="row">
                <div className="col">
                  <h4>Tincidunt nec mattis habitant tristique et.</h4>
                  <Button href="/contacts" variant="light">Explore More</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="logos">
        <StaticImage src="../images/zbroyar-bw.png" alt="zbroyar" className="logos-homepage"/>
        <StaticImage src="../images/archer-bw.png" alt="archer" className="logos-homepage archer"/>
        <StaticImage src="../images/berikat-bw.png" alt="berikat" className="logos-homepage"/>
        <StaticImage src="../images/rama-bw.png" alt="rama" className="logos-homepage"/>
      </section>

      <ProdRange></ProdRange>

      <section className="about-us-home">
        <video autoPlay muted loop className="video-bg">
          <source src={bgVideo} type="video/mp4"/>
        </video>
        <div className="container main-layout">
          <div className="row">
            <div className="col">
              <StaticImage
                alt="Jatik.id Logo"
                src="../images/jatik.png"
                className="brand-logo"
              />
              <h5>JATIK is a specialized group encompassing the entire spectrum of Defence, Security and Intelligence Technologies.</h5>
              <p>JATIK was established to provide Government Agencies with specialist bespoke Sourcing, Procurement and Support Services especially that all foreign suppliers do need a local partner in order to supply the Indonesian armed forces and Police.</p>
              <Link to="/contacts" className="btn-solid">Read More</Link>
            </div>
          </div>
        </div>
      </section>
      
      <BottomInquiry></BottomInquiry>
    </Layout>
  )
}

export default Homepage