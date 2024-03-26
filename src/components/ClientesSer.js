import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductPagination } from "../actions/productsAction";
import Loader from "./layout/Loader";
import MetaData from "./layout/MetaData";
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
import Search from "./layout/Search";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
} from "react-google-maps";
import "./index.css";

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const Map = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: props.lat, lng: props.lng }}
    >
      <Marker position={{ lat: props.lat, lng: props.lng }} />
    </GoogleMap>
  ))
);

const ClientesSer = () => {
  const dispatch = useDispatch();
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }, []);

  const { categories } = useSelector((state) => state.category);

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

  useEffect(() => {
    dispatch(
      getProductPagination({
        pageIndex,
        pageSize,
        search,
        precioMax,
        precioMin,
        categoryId: category,
        rating,
      })
    );
  }, [
    dispatch,
    search,
    pageSize,
    pageIndex,
    precioMax,
    precioMin,
    category,
    rating,
  ]);

  const setCurrentPageNo = (pageNumber) => {
    dispatch(setPageIndex({ pageIndex: pageNumber }));
  };

  const onChangePrecio = (precioEvent) => {
    dispatch(updatePrecio({ precio: precioEvent }));
  };

  const onAfterChange = (precioEvent) => {
    dispatch(updatePrecio({ precio: precioEvent }));
  };

  const onChangeCategory = (ctg) => {
    dispatch(updateCategory({ category: ctg.id }));
  };

  const onChangeStar = (star) => {
    dispatch(updateRating({ rating: star }));
  };

  return (
    <Fragment>
      <MetaData titulo={"Clientes de Servicio"} />
      <div>
        {userLocation && (
          <Fragment>
            <Map
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDeXpxB4lQnkEhPNrdT5QSXNQJZRnt7CmM&v=3.exp&libraries=geometry,drawing,places`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              lat={userLocation.lat}
              lng={userLocation.lng}
            />
          </Fragment>
        )}
      </div>
      <div className="container mt-5">
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
                  value={[precioMin, precioMax]}
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
          <div className="col-md-9">
            {loading ? (
              <Loader />
            ) : (
              <Fragment>
                <div className="row">
                  <div class="col-sm-12 col-md-6 col-lg-4 my-3">
                    <div class="card p-3 rounded">
                      <img
                        class="card-img-top mx-auto c-tera"
                        src="./images/tera.png"
                      />
                      <div class="card-body d-flex flex-column">
                        <div class="d-flex justify-content-between align-items-center">
                          <h5 class="card-title">
                            <a href="">Luis Lopez</a>
                          </h5>
                          <div class="especialidades-box">
                            <p>Especialidades</p>
                          </div>
                        </div>

                        <div class="ratings mt-auto">
                          <div class="rating-outer">
                            <div class="rating-inner"></div>
                          </div>
                          <span id="no_of_reviews">(5 Reviews)</span>
                        </div>

                        <p class="card-text">
                          Aquí va el contenido del párrafo. Este párrafo ocupará
                          todo el ancho de la card.
                        </p>

                        <div class="d-flex justify-content-between mt-auto">
                          <a href="#" class="btn btn-primary">
                            <i class="bi bi-calendar-check-fill"></i>
                          </a>
                          <a href="/perfilClientes" class="btn btn-secondary">
                            Ver Detalles
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-6 col-lg-4 my-3">
                    <div class="card p-3 rounded">
                      <img
                        class="card-img-top mx-auto c-tera"
                        src="./images/terap.png"
                      />
                      <div class="card-body d-flex flex-column">
                        <div class="d-flex justify-content-between align-items-center">
                          <h5 class="card-title">
                            <a href="">Rian Garcia</a>
                          </h5>
                          <div class="especialidades-box">
                            <p>Especialidades</p>
                          </div>
                        </div>

                        <div class="ratings mt-auto">
                          <div class="rating-outer">
                            <div class="rating-inner"></div>
                          </div>
                          <span id="no_of_reviews">(5 Reviews)</span>
                        </div>

                        <p class="card-text">
                          Aquí va el contenido del párrafo. Este párrafo ocupará
                          todo el ancho de la card.
                        </p>

                        <div class="d-flex justify-content-between mt-auto">
                          <a href="#" class="btn btn-primary">
                            <i class="bi bi-calendar-check-fill"></i>
                          </a>
                          <a href="/perfilClientes1" class="btn btn-secondary">
                            Ver Detalles
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-6 col-lg-4 my-3">
                    <div class="card p-3 rounded">
                      <img
                        class="card-img-top mx-auto c-tera"
                        src="./images/tera.png"
                      />
                      <div class="card-body d-flex flex-column">
                        <div class="d-flex justify-content-between align-items-center">
                          <h5 class="card-title">
                            <a href="">Ivan Chavez</a>
                          </h5>
                          <div class="especialidades-box">
                            <p>Especialidades</p>
                          </div>
                        </div>

                        <div class="ratings mt-auto">
                          <div class="rating-outer">
                            <div class="rating-inner"></div>
                          </div>
                          <span id="no_of_reviews">(5 Reviews)</span>
                        </div>

                        <p class="card-text">
                          Aquí va el contenido del párrafo. Este párrafo ocupará
                          todo el ancho de la card.
                        </p>

                        <div class="d-flex justify-content-between mt-auto">
                          <a href="#" class="btn btn-primary">
                            <i class="bi bi-calendar-check-fill"></i>
                          </a>
                          <a href="/perfilClientes2" class="btn btn-secondary">
                            Ver Detalles
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ClientesSer;
