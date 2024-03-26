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
import FilterComponent from "./filtrado/FilterComponent";

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

const Tiendas = () => {
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

  return (
    <Fragment>
      <MetaData titulo={"Clientes de Servicio"} />

      <div className="container mt-5">
        <div className="row"></div>

        <section class="col-md-5">
          {userLocation && (
            <Fragment>
              <Map
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDeXpxB4lQnkEhPNrdT5QSXNQJZRnt7CmM&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `300px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                lat={userLocation.lat}
                lng={userLocation.lng}
              />
            </Fragment>
          )}
        </section>

        <section className="col-md-4"></section>
      </div>
      <FilterComponent />
      <section class="col-md-9 mx-auto text-center ">
        <div className="row">
          <div class="col-sm-12 col-md-6 col-lg-4 my-3">
            <div class="card p-3 rounded">
              <img
                class="card-img-top mx-auto c-tera"
                src="./images/Tiendas.jpg"
              />
              <div class="card-body">
                <h5 class="card-title">
                  <a href="#">Nombre de la tienda</a>
                </h5>
                <p class="card-text">
                  Descripción de la locacion de la tienda.
                </p>
                <p class="card-text"> 5566778899</p>
                <p class="card-text">Calle Madero, Zocalo Municipal, CDMX</p>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4 my-3">
            <div class="card p-3 rounded">
              <img
                class="card-img-top mx-auto c-tera"
                src="./images/Tiendas.jpg"
              />
              <div class="card-body">
                <h5 class="card-title">
                  <a href="#">Nombre de la tienda</a>
                </h5>
                <p class="card-text">
                  Descripción de la locacion de la tienda.
                </p>
                <p class="card-text"> 5566778899</p>
                <p class="card-text">Calle Madero, Zocalo Municipal, CDMX</p>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4 my-3">
            <div class="card p-3 rounded">
              <img
                class="card-img-top mx-auto c-tera"
                src="./images/Tiendas.jpg"
              />
              <div class="card-body">
                <h5 class="card-title">
                  <a href="#">Nombre de la tienda</a>
                </h5>
                <p class="card-text">
                  Descripción de la locacion de la tienda.
                </p>
                <p class="card-text"> 5566778899</p>
                <p class="card-text">Calle Madero, Zocalo Municipal, CDMX</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Tiendas;
