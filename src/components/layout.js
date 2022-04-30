import * as React from "react";
import MenuBar from "./navbar";
import JatikFooter from "./footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.scss"

const Layout = ({ children }) => {
  return (
    <>
      {/*Header*/}
      <MenuBar></MenuBar>

      {children}

      {/*Footer*/}
      <JatikFooter></JatikFooter>
    </>
  )
}

export default Layout