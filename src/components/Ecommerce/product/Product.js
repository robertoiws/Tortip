import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product, col }) => {
  const default_image = "./images/default_product.png";

  return (
    <div className={`col-sm-12 col-md-${col} my-3`}>
      <div className="card p-3 rounded">
        <img
          className="card-img-top"
          src={product.images[0] ? product.images[0].url : default_image}
          alt={product.nombre}
          style={{ width: "100%", height: "200px", objectFit: "contain" }}
        />
        <div className="card-body d-flex flex-column">
          <h5
            className="card-title"
            style={{ height: "80px", overflow: "hidden" }}
          >
            <Link to={`/product/${product.id}`} className="text-dark">
              {product.nombre}
            </Link>
          </h5>
          <div className="ratings mt-auto">
            <div className="rating-outer">
              <div
                className="rating-inner"
                style={{ width: `${(product.rating / 5) * 100}%` }}
              ></div>
            </div>
            <span className="pl-1">{product.numeroReviews} Reviews</span>
          </div>
          <p className="card-text">$ {product.precio}</p>
          <Link
            id="view_btn"
            className="btn btn-primary btn-block"
            to={`/product/${product.id}`}
          >
            Ver Detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
