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

        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-6 maintenance-body">
            <StaticImage src="../images/maintenance.jpg" className="maintenance-image" alt="maintenance image"></StaticImage>
            <h6>This page is under maintenance</h6>
            <p>We're sincerely apologize for the inconvenience. The content you looking for is not present at the moment, please contact us at: <a href="mailto:info@jatik.co.id">info@jatik.co.id</a> for further information.
            <br/><br/>
            Thank you for your patience, meanwhile you can come back to our homepage</p>
            <Link to="/" className="btn-solid">Back to home</Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default NotFoundPage
