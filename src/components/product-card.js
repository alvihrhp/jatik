import * as React from "react";

// markup
const ProductCard = ({ data }) => {
  
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={data.image} alt="weapon" className="prod-image"/>
        <div className="bg-overlay"></div>
        <div className="info">
          <h6>{data.name}</h6>
        </div>
      </div>
      <div className="product-info">
        <div className="row">
          {
            Object.keys(data.spec).map((key, keyIdx) => (
              <div className="col-12 row-info" key={keyIdx}>
                <p className="info-label">{key}</p>
                <p className="info-body">{data.spec[key]}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ProductCard