import React from "react";

import { Link } from "react-router-dom";

const Products = ({items}) => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          {items.map((product) => { 
            return (
              <>
              <div className="col-lg-4 my-3 text-center">
                <div className="card" style={{ width: "18rem" }}>
                <Link to={`/product/${product.id}`}>
                  <img src={product.imgSrc} className="card-img-top" alt="..." />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">
                     {product.description}
                    </p>
                    
                  
                  <button className=" btn btn-primary">{product.price}₹</button>
                  <button className="btn btn-primary mx-3 btn-warning">add to cart</button>
                  </div>

                </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
