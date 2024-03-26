// ProductSlider.js
import React from "react";
import Slider from "react-slick";
import Product from "./Product";

const ProductSlider = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Establece la cantidad de productos a mostrar por slide
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {products.map((product) => (
        <div key={product._id}>
          <Product product={product} />
        </div>
      ))}
    </Slider>
  );
};

export default ProductSlider;
