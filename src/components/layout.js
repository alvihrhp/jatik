import * as React from "react";
import {Helmet} from "react-helmet";

import MenuBar from "./navbar";
import JatikFooter from "./footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet defaultTitle="Jatik.id" titleTemplate="Jatik.id - %s">
        <html lang="en" amp />

        {/* title attributes and value */}
        {/* <title itemProp="name" lang="en">Jatik.id</title> */}

        {/* multiple meta elements */}
        <meta name="description" content="Jatik.id website" />

        {/* multiple link elements */}
        {/* <link
          rel="icon"
          type="image/png"
          href="https://icons.duckduckgo.com/ip3/www.google.com.ico"
          sizes="16x16"
        /> */}
        <link rel="apple-touch-icon" sizes="180x180" href="../images/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="../images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="../images/favicon-16x16.png"/>
        <link rel="manifest" href="../images/site.webmanifest"/>
      </Helmet>

      {/*Header*/}
      <MenuBar></MenuBar>

      {children}

      {/*Footer*/}
      <JatikFooter></JatikFooter>
    </>
  )
}

export default Layout