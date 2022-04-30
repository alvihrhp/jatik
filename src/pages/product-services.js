import * as React from "react";
import Layout from "../components/layout";
import BottomInquiry from "../components/bottom-inquiry";
import ProdRange from "../components/product-range";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const productService = ({ children }) => {
  return (
    <Layout>
      <ProdRange></ProdRange>
      <BottomInquiry></BottomInquiry>
    </Layout>
  )
}

export default productService