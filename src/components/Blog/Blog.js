import React, { Fragment } from "react";
import SliderBlog from "../slider/SliderBlog";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import HeroSlider from "../layout/HeroSlider";
import MetaData from "../layout/MetaData";
import FilterComponent from "../filtrado/FilterComponent";

const Blog = () => {
  return (
    <Fragment>
      <MetaData titulo={"Tienda en Linea"} />
      <div
        className="pagina hero-slider"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "90vh",
        }}
      >
        <HeroSlider
          imageSrc="/images/slide3.jpg"
          title="BLOG"
          text=""
          style={{ maxWidth: "100%", position: "relative", zIndex: 1 }}
        />
      </div>
      <section id="Blog" className="container mt-5">
        <div className="row">
          <div className="col-md-18">
            <FilterComponent />
          </div>
          <div className="col-md-12 mt-5">
            <h3>Recomendados</h3>
            <SliderBlog />
          </div>
          <div className="col-md-12">
            <h3>Mas visitados</h3>
            <SliderBlog />
          </div>
          <div className="col-md-12">
            <h3>Últimos agregados</h3>
            <SliderBlog />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Blog;
