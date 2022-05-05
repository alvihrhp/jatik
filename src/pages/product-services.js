import * as React from "react";
import Layout from "../components/layout";
import BottomInquiry from "../components/bottom-inquiry";
import ProdRange from "../components/product-range";
import { Helmet } from "react-helmet";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const productService = ({ children }) => {
  return (
    <Layout>
      <Helmet>
        <title itemProp="name" lang="en">Product and services</title>
      </Helmet>

      <ProdRange></ProdRange>
      <BottomInquiry></BottomInquiry>
    </Layout>
  )
}

export default productService