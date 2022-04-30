import * as React from "react";
import Layout from "../components/layout";
import { Form, Button } from "react-bootstrap";

const Contacts = ({ children }) => {
  return (
    <Layout>
      <section className="contact-us">
        <div className="container main-layout">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6">
                <h6 className="page-title">Contact us</h6>
                <p className="contact-title">Get a quote</p>
                <p className="contact-sub">Fill up the form and our team will get back to you within 24 hours.</p>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                  </Form.Group>
                  
                  <Form.Group className="mb-3" controlId="formBasicCompany">
                    <Form.Label>Company</Form.Label>
                    <Form.Control type="text" placeholder="Enter company" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicCountry">
                    <Form.Label>Country</Form.Label>
                    <Form.Select>
                      <option>Select your Country</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="textarea" placeholder="Enter Message" />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Send Inquiry
                  </Button>
                </Form>
              </div>
              <div className="col-12 col-lg-6 d-none d-lg-block d-xl-none">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.2912528360966!2d106.74249201476844!3d-6.091411695589047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1d274fa2ffc9%3A0x99601805bbc59dfc!2sGolf%20Island!5e0!3m2!1sid!2sid!4v1649586478313!5m2!1sid!2sid" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="jatik location map"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contacts