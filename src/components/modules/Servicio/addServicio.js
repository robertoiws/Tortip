import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { addServicio } from "../../../actions/addServicioAction";
import MetaData from "../../layout/MetaData";
import "../module.css";

const AddServicio = () => {
  const navigate = useNavigate();
  const [servicio, setServicio] = useState({
    nombre: "",
    descripcion: "",
    estado: "",
    direccion: "",
    ciudad: "",
    colonia: "",
    cp: "",
    fk_TipoServicio: "", // Make sure this matches your data structure
  });

  const alert = useAlert();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    const jsonData = {
      nombre: servicio.nombre,
      descripcion: servicio.descripcion,
      estado: servicio.estado,
      direccion: servicio.direccion,
      ciudad: servicio.ciudad,
      colonia: servicio.colonia,
      cp: servicio.cp,
      fk_TipoServicio: servicio.fk_TipoServicio,
    };

    dispatch(addServicio(jsonData)).then(() => {
      navigate("/addService"); // Redirect to the desired location after adding a service
    });
  };

  const onChange = (e) => {
    setServicio({ ...servicio, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <MetaData titulo={"Agregar Servicio"} />
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <form onSubmit={submitHandler}>
              {/* Your form inputs here */}
              <div className="form-group">
                <label>Nombre:</label>
                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  placeholder="Ingresa el nombre"
                  value={servicio.nombre}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label>descripcion:</label>
                <input
                  type="text"
                  className="form-control"
                  name="descripcion"
                  placeholder="Ingresa la descripcion"
                  value={servicio.descripcion}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label>estado:</label>
                <input
                  type="text"
                  className="form-control"
                  name="estado"
                  placeholder="Ingresa el estado"
                  value={servicio.estado}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label>direccion:</label>
                <input
                  type="text"
                  className="form-control"
                  name="direccion"
                  placeholder="Ingresa la direccion"
                  value={servicio.direccion}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label>ciudad:</label>
                <input
                  type="text"
                  className="form-control"
                  name="ciudad"
                  placeholder="Ingresa la ciudad"
                  value={servicio.ciudad}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label>colonia:</label>
                <input
                  type="text"
                  className="form-control"
                  name="colonia"
                  placeholder="Ingresa la colonia"
                  value={servicio.colonia}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label>cp:</label>
                <input
                  type="text"
                  className="form-control"
                  name="cp"
                  placeholder="Ingresa el cp"
                  value={servicio.cp}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label>fk_TipoServicio:</label>
                <input
                  type="text"
                  className="form-control"
                  name="fk_TipoServicio"
                  placeholder="Ingresa el fk_TipoServicio"
                  value={servicio.fk_TipoServicio}
                  onChange={onChange}
                />
              </div>
              {/* Other input fields go here */}

              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-lg">
                  Agregar Nuevo Servicio
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddServicio;
