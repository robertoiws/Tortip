import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCity,
  setPopularity,
  setSearchTerm,
} from "../../slices/filterSlice";
import "./filtros.css";

const FilterComponent = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const handleCityChange = (e) => {
    dispatch(setCity(e.target.value));
  };

  const handlePopularityChange = (e) => {
    dispatch(setPopularity(e.target.value));
  };

  const handleSearchTermChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div className="container mt-4 justify-content-center filtros">
      <div className="row">
        <div className="col-md-3 d-flex">
          <div className="ml-2">
            <span className="input-group-text base">
              <i class="bi bi-crosshair2"></i>
            </span>
          </div>
          <select
            id="citySelect"
            className="form-select"
            value={filter.city}
            onChange={handleCityChange}
          >
            {/* Opciones de ciudades desde la base de datos */}
          </select>
        </div>

        <div className="col-md-3 d-flex">
          <div className="ml-2">
            <span className="input-group-text base">
              <i class="bi bi-patch-check-fill"></i>
            </span>
          </div>
          <select
            id="popularitySelect"
            className="form-select"
            value={filter.popularity}
            onChange={handlePopularityChange}
          >
            <option value="popular">Más populares</option>
            <option value="visited">Más visitadas</option>
          </select>
        </div>

        <div className="col-md-3 d-flex">
          <div className="ml-2">
            <span className="input-group-text base">
              <i className="bi bi-search"></i>
            </span>
          </div>
          <input
            type="text"
            id="searchInput"
            className="form-control"
            placeholder="Buscar..."
            value={filter.searchTerm}
            onChange={handleSearchTermChange}
          />
        </div>

        <div className="col-md-1 d-flex align-items-center">
          <h3>
            <i className="bi bi-filter-square-fill"></i>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
