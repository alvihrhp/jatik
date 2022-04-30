import * as React from "react";
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "react-bootstrap";

// markup
const BottomInquiry = () => {
  return (
    <section className="bottom-inquiry">
      <div className="text-overlay">
        <StaticImage src="../images/bottom-inquiry.jpg" alt="inquiry background" className="bg-overlay"/>
        <div className="position-absolute w-100">
          <div className="container">
            <div className="row">
              <div className="col d-flex justify-content-between align-items-center">
                <h4>Make a request for your guns needs</h4>
                <Button href="/contacts" variant="light">Send Inquiry</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BottomInquiry