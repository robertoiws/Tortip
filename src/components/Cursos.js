import React, { Fragment, useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { getProductPagination, getProducts } from "../actions/productsAction";
import Loader from "./layout/Loader";
import MetaData from "./layout/MetaData";
import Product from "./Ecommerce/product/Product";
import Products from "./Ecommerce/products/Products";
import Pagination from "react-js-pagination";
import {
  setPageIndex,
  updateCategory,
  updatePrecio,
  updateRating,
} from "../slices/productPaginationSlice";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import HeroSlider from "./layout/HeroSlider";
import Search from "./layout/Search";
import SliderCursos from "./slider/SliderCursos";
import "./index.css";

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const Cursos = () => {
  const [precio, setPrecio] = useState([1, 10000]);
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.category);

  //const { products, loading, error } = useSelector((state) => state.products);
  const {
    products,
    count,
    pageIndex,
    loading,
    error,
    resultByPage,
    search,
    pageSize,
    precioMax,
    precioMin,
    category,
    rating,
  } = useSelector((state) => state.productPagination);

  const alert = useAlert();

  useEffect(() => {
    if (error != null) {
      return alert.error(error);
    }

    dispatch(
      getProductPagination({
        pageIndex: pageIndex,
        pageSize: pageSize,
        search: search,
        precioMax: precioMax,
        precioMin: precioMin,
        categoryId: category,
        rating: rating,
      })
    );
  }, [
    dispatch,
    error,
    alert,
    search,
    pageSize,
    pageIndex,
    precioMax,
    precioMin,
    category,
    rating,
  ]);

  function setCurrentPageNo(pageNumber) {
    dispatch(setPageIndex({ pageIndex: pageNumber }));
  }

  function onChangePrecio(precioEvent) {
    setPrecio(precioEvent);
  }

  function onAfterChange(precioEvent) {
    dispatch(updatePrecio({ precio: precioEvent }));
  }

  function onChangeCategory(ctg) {
    dispatch(updateCategory({ category: ctg.id }));
  }

  function onChangeStar(star) {
    dispatch(updateRating({ rating: star }));
  }
  const [showPrice, setShowPrice] = useState(false);

  function onChangePrecio(precioEvent) {
    setPrecio(precioEvent);
    setShowPrice(true); // Mostrar el precio cuando la barra se mueve
  }

  function onAfterChange(precioEvent) {
    dispatch(updatePrecio({ precio: precioEvent }));
    setShowPrice(false); // Ocultar el precio cuando la barra está inmóvil
  }

  return (
    <Fragment>
      <MetaData titulo={"Tienda en Linea"} />
      <div
        className="pagina hero-slider"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "60vh",
        }}
      >
        <HeroSlider
          imageSrc="/images/slide3.jpg"
          title="Nuevos Cursos"
          text="los mas votados"
          style={{ maxWidth: "100%", position: "relative", zIndex: 1 }}
        />
      </div>

      <section id="products" className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <div className="filters-container">
              <div className="filter-item">
                <Search />
              </div>
              <div className="filter-item">
                <h4>Precio</h4>
                <Range
                  marks={{ 1: `$1`, 10000: `$10000` }}
                  min={1}
                  max={10000}
                  defaultValue={[1, 10000]}
                  tipFormatter={(value) => `$${value}`}
                  value={precio}
                  tipProps={{ placement: "top", visible: showPrice }}
                  onChange={onChangePrecio}
                  onAfterChange={onAfterChange}
                />
              </div>

              <hr className="my-5" />

              <div className="filter-item">
                <h4>Categorías</h4>
                <ul className="category-list pl-0">
                  {categories.map((ctg) => (
                    <li key={ctg.id} onClick={() => onChangeCategory(ctg)}>
                      {ctg.nombre}
                    </li>
                  ))}
                </ul>
              </div>

              <hr className="my-5" />

              <div className="filter-item">
                <h4>Ratings</h4>
                <ul className="rating-list pl-0">
                  {[5, 4, 3, 2, 1].map((star) => (
                    <li key={star} onClick={() => onChangeStar(star)}>
                      <div className="rating-outer">
                        <div
                          className="rating-inner"
                          style={{ width: `${star * 20}%` }}
                        ></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <section class="col-md-9 mx-auto text-center ">
            <div className="row">
              <div class="col-sm-12 col-md-6 col-lg-4 my-3">
                <div class="card p-3 rounded">
                  <img
                    class="card-img-top mx-auto c-tera"
                    src="./images/cursoterapia.jpeg"
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      <a href="#">Nombre del Curso</a>
                    </h5>
                    <p class="card-text">
                      Descripción del curso. Este curso te ayudara a practicar
                      la meditación de forma correcta.
                    </p>
                    <div class="ratings">
                      <div class="rating-outer">
                        <div class="rating-inner"></div>
                      </div>
                      <span id="no_of_reviews">(0 Reviews)</span>
                    </div>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                      <div class="especialidades-box">
                        <p>Ponente: Luis Lopez</p>
                        <p>Duración: 2 horas</p>
                        <p>Costo: $100.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm-12 col-md-6 col-lg-4 my-3">
                <div class="card p-3 rounded">
                  <img
                    class="card-img-top mx-auto c-tera"
                    src="./images/cursoterapia.jpeg"
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      <a href="#">Nombre del Curso</a>
                    </h5>
                    <p class="card-text">
                      Descripción del curso. Este curso te ayudara a practicar
                      la meditación de forma correcta.
                    </p>
                    <div class="ratings">
                      <div class="rating-outer">
                        <div class="rating-inner"></div>
                      </div>
                      <span id="no_of_reviews">(0 Reviews)</span>
                    </div>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                      <div class="especialidades-box">
                        <p>Ponente: Luis Lopez</p>
                        <p>Duración: 2 horas</p>
                        <p>Costo: $100.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm-12 col-md-6 col-lg-4 my-3">
                <div class="card p-3 rounded">
                  <img
                    class="card-img-top mx-auto c-tera"
                    src="./images/cursoterapia.jpeg"
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      <a href="#">Nombre del Curso</a>
                    </h5>
                    <p class="card-text">
                      Descripción del curso. Este curso te ayudara a practicar
                      la meditación de forma correcta.
                    </p>
                    <div class="ratings">
                      <div class="rating-outer">
                        <div class="rating-inner"></div>
                      </div>
                      <span id="no_of_reviews">(0 Reviews)</span>
                    </div>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                      <div class="especialidades-box">
                        <p>Ponente: Luis Lopez</p>
                        <p>Duración: 2 horas</p>
                        <p>Costo: $100.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <div className="d-flex justify-content-center mt-5">
        <Pagination
          activePage={pageIndex}
          itemsCountPerPage={pageSize}
          totalItemsCount={count}
          onChange={setCurrentPageNo}
          nextPageText={">"}
          prevPageText={"<"}
          firstPageText={"<<"}
          lastPageText={">>"}
          item-class="page-item"
          linkClass="page-link"
        />
      </div>

      <section id="products" className="container mt-5">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-9">
            <div className="row">
              <h4>Conoce a los ponentes</h4>
              <SliderCursos />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Cursos;
