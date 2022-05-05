import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import {Helmet} from "react-helmet"

// markup
const NotFoundPage = () => {
  return (
    <section className="maintenance">
      <Helmet defaultTitle="Jatik.id - Under maintenance"></Helmet>

      <div className="row">
        <div className="col maintenance-body">
          <StaticImage src="../images/maintenance.jpg" className="maintenance-image" alt="maintenance image"></StaticImage>
          <Link to="/">Home</Link>
        </div>
      </div>
    </section>
  )
}

export default NotFoundPage
