import React, { useState, Fragment, useEffect } from "react";
import MetaData from "../layout/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import { updateProfilebyGuidId } from "../../actions/ConsultorAction";

const EditCServicio = () => {
  const navigate = useNavigate();
  const [terapeuta, setTerapeuta] = useState({
    Nombre: "",
    RFC: "",
    Curp: "",
    email: "",
    usrKey: "",
    Telefono: "",
    Descripcion: "",
    emailAlternativo: "",
    Avatarx16: "",
    Avatarx32: "",
    Avatarx64: "",
    Certificado1: "",
    Certificado2: "",
    Certificado3: "",
    platilla: "",
    cTwitter: "",
    cFacebook: "",
    cLinkedin: "",
    cInstagram: "",
    urlmapa: "",
    cWhatsapp: "",
  });

  const alert = useAlert();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    const jsonData = {
      Nombre: terapeuta.Nombre,
      RFC: terapeuta.RFC,
      Curp: terapeuta.Curp,
      email: terapeuta.email,
      usrKey: terapeuta.usrKey,
      emailAlternativo: terapeuta.emailAlternativo,
      Avatarx16: terapeuta.Avatarx16,
      Avatarx32: terapeuta.Avatarx32,
      Avatarx64: terapeuta.Avatarx64,
      Certificado1: terapeuta.Certificado1,
      Certificado2: terapeuta.Certificado2,
      Certificado3: terapeuta.Certificado3,
      Descripcion: terapeuta.Descripcion,
      Apellido: terapeuta.Apellido,
      Telefono: terapeuta.Telefono,
      plantilla: terapeuta.platilla,
      cTwitter: terapeuta.cTwitter,
      cFacebook: terapeuta.cFacebook,
      cInstagram: terapeuta.cInstagram,
      cLinkedin: terapeuta.cLinkedin,
      cWhatsapp: terapeuta.cWhatsapp,
      urlmapa: terapeuta.urlmapa,
    };

    dispatch(updateProfilebyGuidId(jsonData))
      .then((data) => {
        // Manejar la respuesta JSON exitosa aquí
        navigate("/");
      })
      .catch((error) => {
        console.error("Error al procesar la respuesta:", error);
        alert.error(`Error al procesar la solicitud: ${error.message}`);

        if (error.response && error.response.data) {
          // Si hay una respuesta del servidor y contiene 'data'
          console.error(
            "Detalles de la respuesta del servidor:",
            error.response.data
          );
          alert.error(
            `Detalles adicionales: ${JSON.stringify(error.response.data)}`
          );
        } else {
          // Si no hay 'data' en la respuesta del servidor
          alert.error(
            "Detalles adicionales: No hay información adicional disponible."
          );
        }
      });
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    // Convertir el valor a un booleano si es necesario
    const newValue = name === "IsActive" ? value === "true" : value;

    // Actualizar el estado con el nuevo valor
    setTerapeuta((prevTerapeuta) => ({
      ...prevTerapeuta,
      [name]: newValue,
    }));
  };
  return (
    <Fragment>
      <MetaData titulo={"Registro Terapeuta"} />
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <form onSubmit={submitHandler}>
              <div className="form-group">
                <label>Nombre:</label>
                <input
                  type="text"
                  className="form-control"
                  name="Nombre"
                  placeholder="Ingresa el nombre"
                  value={terapeuta.Nombre}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label>RFC:</label>
                <input
                  type="text"
                  className="form-control"
                  name="RFC"
                  placeholder="Ingresa el RFC"
                  value={terapeuta.RFC}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label>Curp:</label>
                <input
                  type="text"
                  className="form-control"
                  name="Curp"
                  placeholder="Ingresa el Curp"
                  value={terapeuta.Curp}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label>email:</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="Ingresa el email"
                  value={terapeuta.email}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label>usrKey:</label>
                <input
                  type="text"
                  className="form-control"
                  name="usrKey"
                  placeholder="Ingresa el usrKey"
                  value={terapeuta.usrKey}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label>Apellido:</label>
                <input
                  type="text"
                  className="form-control"
                  name="Apellido"
                  placeholder="Ingresa el Apellido"
                  value={terapeuta.Apellido}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label>Telefono:</label>
                <input
                  type="text"
                  className="form-control"
                  name="Telefono"
                  placeholder="Ingresa el Telefono"
                  value={terapeuta.Telefono}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label>emailAlternativo:</label>
                <input
                  type="text"
                  className="form-control"
                  name="emailAlternativo"
                  placeholder="Ingresa el emailAlternativo"
                  value={terapeuta.emailAlternativo}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label>Avatarx16:</label>
                <input
                  type="text"
                  className="form-control"
                  name="Avatarx16"
                  placeholder="Ingresa el Avatarx16"
                  value={terapeuta.Avatarx16}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label>Avatarx32:</label>
                <input
                  type="text"
                  className="form-control"
                  name="Avatarx32"
                  placeholder="Ingresa el Avatarx32"
                  value={terapeuta.Avatarx32}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label>Avatarx64:</label>
                <input
                  type="text"
                  className="form-control"
                  name="Avatarx64"
                  placeholder="Ingresa el Avatarx64"
                  value={terapeuta.Avatarx64}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label>Certificado1:</label>
                <input
                  type="text"
                  className="form-control"
                  name="Certificado1"
                  placeholder="Ingresa el Certificado1"
                  value={terapeuta.Certificado1}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label>Certificado2:</label>
                <input
                  type="text"
                  className="form-control"
                  name="Certificado2"
                  placeholder="Ingresa el Certificado2"
                  value={terapeuta.Certificado2}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label>Certificado3:</label>
                <input
                  type="text"
                  className="form-control"
                  name="Certificado3"
                  placeholder="Ingresa el Certificado3"
                  value={terapeuta.Certificado3}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label>Descripcion:</label>
                <input
                  type="text"
                  className="form-control"
                  name="Descripcion"
                  placeholder="Ingresa el nombre"
                  value={terapeuta.Descripcion}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label>Plantilla:</label>
                <input
                  type="text"
                  className="form-control"
                  name="Plantilla"
                  placeholder="Cambia la plantilla"
                  value={terapeuta.plantilla}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label>Contacto X:</label>
                <input
                  type="text"
                  className="form-control"
                  name="cTwitter"
                  placeholder="Ingresa el Apellido"
                  value={terapeuta.cTwitter}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label>Contacto Facebook:</label>
                <input
                  type="text"
                  className="form-control"
                  name="cFacebook"
                  placeholder="Ingresa email"
                  value={terapeuta.cFacebook}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label>Contacto Instagram:</label>
                <input
                  type="text"
                  className="form-control"
                  name="cInstagram"
                  placeholder="Ingresa emailAlternativo"
                  value={terapeuta.cInstagram}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label>Contacto Linkedin:</label>
                <input
                  type="text"
                  className="form-control"
                  name="cLinkedin"
                  placeholder="Ingresa Telefono"
                  value={terapeuta.cLinkedin}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label>Contacto Whatsapp:</label>
                <input
                  type="text"
                  className="form-control"
                  name="cWhatsapp"
                  placeholder="Ingresa el Curp"
                  value={terapeuta.cWhatsapp}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label>URL Consultorio:</label>
                <input
                  type="text"
                  className="form-control"
                  name="urlmapa"
                  placeholder="Ingresa el RFC"
                  value={terapeuta.urlmapa}
                  onChange={onChange}
                />
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-lg">
                  Agregar Nuevo terapeuta
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditCServicio;
