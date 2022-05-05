import * as React from "react"
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import {Helmet} from "react-helmet"

import { Navbar } from "react-bootstrap"

// markup
const NotFoundPage = ({ children }) => {
  return (
    <Layout>
      <section className="maintenance">
        <Helmet defaultTitle="Jatik.id - Under maintenance"></Helmet>

        <div className="row">
          <div className="col maintenance-body">
            <StaticImage src="../images/maintenance.jpg" className="maintenance-image" alt="maintenance image"></StaticImage>
            <h6>This page is under maintenance</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in viverra quisque et viverra volutpat. Tempor ultrices eleifend orci cras augue condimentum dui. Libero viverra amet bibendum congue eu fermentum. Metus, vitae at augue id etiam ultricies consequat, massa.</p>
            <Link to="/" className="btn-solid">Back to home</Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default NotFoundPage
