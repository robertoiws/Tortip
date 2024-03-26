// En tu componente SliderProduct.js
import React, { useEffect } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "../../layout/Loader";
import { getProducts } from "../../../actions/productsAction";
import Card from "../../Ecommerce/product/Product";
import "./SliderProduct.css";

const SliderProduct = ({ getProducts, products, loading }) => {
  useEffect(() => {
    // Llama a la función para obtener los productos
    getProducts();
  }, [getProducts]);

  if (loading) {
    return <Loader />;
  }

  // Configuración del slider para mostrar 3 tarjetas a la vez
  const sliderSettings = {
    slidesToShow: 3, // Muestra 3 tarjetas a la vez, puedes ajustar según sea necesario
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2, // Ajusta el número de tarjetas a mostrar en pantallas más pequeñas
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // En pantallas más pequeñas, muestra solo 1 tarjeta a la vez
        },
      },
    ],
    // Puedes agregar más configuraciones según tus necesidades
  };

  return (
    <div className="slider-container">
      <Slider {...sliderSettings}>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </Slider>
    </div>
  );
};

// Conecta el componente a Redux para acceder a los productos y funciones necesarias
export default connect(
  (state) => ({
    products: state.products.products,
    loading: state.products.loading,
  }),
  { getProducts }
)(SliderProduct);
