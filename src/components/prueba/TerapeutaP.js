import React, { useState, Fragment, useEffect } from "react";
import MetaData from "../layout/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import { addTerapeuta } from "../../actions/ConsultorAction";

const TerapeutaP = () => {
  const navigate = useNavigate();
  const [terapeuta, setTerapeuta] = useState({
    Nombre: "",
    usrKey: "",
    confirmUsrKey: "",
    Apellido: "",
    email: "",
    emailAlternativo: "",
    Telefono: "",
    Curp: "",
    RFC: "",
    Certificado1: "",
    Certificado2: "",
    Certificado3: "",
    plantilla: "",
    Membresia: "",
    Avatarx16: "", // Representación base64 de la imagen
    Avatarx32: "", // Representación base64 de la imagen
    Avatarx64: "", // Representación base64 de la imagen
    IsActive: false,
    FechaIngreso: new Date().toISOString(),
  });

  const [uniqueEmails, setUniqueEmails] = useState([]);
  const [uniqueCurps, setUniqueCurps] = useState([]);
  const [uniqueRfcs, setUniqueRfcs] = useState([]);
  const alert = useAlert();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    // Realizar todas las validaciones necesarias antes de enviar el formulario
    // Validar que las contraseñas coincidan
    if (
      terapeuta.usrKey.length < 8 ||
      terapeuta.usrKey !== terapeuta.confirmUsrKey
    ) {
      alert.error(
        "Las contraseñas no coinciden o tienen menos de 8 caracteres"
      );
      return;
    }
    // Verificar si se han cargado los archivos de avatar
    if (!terapeuta.Avatarx16 || !terapeuta.Avatarx32 || !terapeuta.Avatarx64) {
      // Mostrar una alerta indicando que faltan cargar los avatares
      alert.error("Por favor, sube los tres avatares (16x16, 32x32 y 64x64)");
      return;
    }
    // Verificar si se han cargado los archivos de certificados
    if (
      !terapeuta.Certificado1 ||
      !terapeuta.Certificado2 ||
      !terapeuta.Certificado3
    ) {
      // Mostrar una alerta indicando que faltan cargar los certificados
      alert.error("Por favor, sube los tres certificados");
      return;
    }
    if (
      !validateEmail(terapeuta.email) ||
      !validateEmail(terapeuta.emailAlternativo)
    ) {
      alert.error("Ingresa correos electrónicos válidos");
      return;
    }

    if (terapeuta.Curp.length !== 18) {
      alert.error("El CURP debe tener exactamente 18 caracteres");
      return;
    }

    if (terapeuta.RFC.length !== 13) {
      alert.error("El RFC debe tener exactamente 13 caracteres");
      return;
    }
    // Verificar que el correo electrónico no se repita
    if (uniqueEmails.includes(terapeuta.email)) {
      alert.error("El correo electrónico ya está en uso");
      return;
    }

    // Verificar que el CURP no se repita
    if (uniqueCurps.includes(terapeuta.Curp)) {
      alert.error("El CURP ya está en uso");
      return;
    }

    // Verificar que el RFC no se repita
    if (uniqueRfcs.includes(terapeuta.RFC)) {
      alert.error("El RFC ya está en uso");
      return;
    }

    const jsonData = {
      Nombre: terapeuta.Nombre,
      usrKey: terapeuta.usrKey,
      Apellido: terapeuta.Apellido,
      email: terapeuta.email,
      emailAlternativo: terapeuta.emailAlternativo,
      Telefono: terapeuta.Telefono,
      Curp: terapeuta.Curp,
      RFC: terapeuta.RFC,
      Certificado1: terapeuta.Certificado1,
      Certificado2: terapeuta.Certificado2,
      Certificado3: terapeuta.Certificado3,
      plantilla: terapeuta.plantilla,
      Membresia: terapeuta.Membresia,
      Avatarx16: terapeuta.Avatarx16, // Convertir imagen a base64 y asignarla aquí
      Avatarx32: terapeuta.Avatarx32, // Convertir imagen a base64 y asignarla aquí
      Avatarx64: terapeuta.Avatarx64, // Convertir imagen a base64 y asignarla aquí
      IsActive: terapeuta.IsActive,
      FechaIngreso: terapeuta.FechaIngreso,
    };
    console.log("jsonData:", jsonData);

    dispatch(addTerapeuta(jsonData))
      .then((data) => {
        alert.success("El terapeuta ha sido agregado correctamente");
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
  // Función para validar el correo electrónico
  const validateEmail = (email) => {
    // Expresión regular para validar el correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(String(email).toLowerCase());
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

  // Función para manejar la carga de archivos de imágenes
  const handleImageChange = (e, avatarSize) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      // Obtener la representación base64 de la imagen cargada
      let base64String = reader.result;

      // Quitar la parte "data:image/png;base64," del string base64
      base64String = base64String.replace(/^data:image\/[a-z]+;base64,/, "");

      setTerapeuta((prevTerapeuta) => ({
        ...prevTerapeuta,
        [`Avatarx${avatarSize}`]: base64String,
      }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <Fragment>
      <MetaData titulo={"Registro Terapeuta"} />
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
                  name="Nombre"
                  placeholder="Ingresa el nombre"
                  value={terapeuta.Nombre}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label>Contraseña:</label>
                <input
                  type="password"
                  className="form-control"
                  name="usrKey"
                  placeholder="Ingresa la Contraseña"
                  value={terapeuta.usrKey}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label>Confirmar Contraseña:</label>
                <input
                  type="password"
                  className="form-control"
                  name="confirmUsrKey"
                  placeholder="Confirma la Contraseña"
                  value={terapeuta.confirmUsrKey}
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
                <label>email:</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="Ingresa email"
                  value={terapeuta.email}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label>emailAlternativo:</label>
                <input
                  type="text"
                  className="form-control"
                  name="emailAlternativo"
                  placeholder="Ingresa emailAlternativo"
                  value={terapeuta.emailAlternativo}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label>Telefono:</label>
                <input
                  type="text"
                  className="form-control"
                  name="Telefono"
                  placeholder="Ingresa Telefono"
                  value={terapeuta.Telefono}
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
                <label>Certificado1:</label>
                <input
                  type="file"
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
                  type="file"
                  className="form-control"
                  name="Certificado2"
                  placeholder="Ingresa la Certificado2"
                  value={terapeuta.Certificado2}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label>Certificado3:</label>
                <input
                  type="file"
                  className="form-control"
                  name="Certificado3"
                  placeholder="Ingresa el Certificado3"
                  value={terapeuta.Certificado3}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label>plantilla:</label>
                <input
                  type="text"
                  className="form-control"
                  name="plantilla"
                  placeholder="Ingresa la plantilla"
                  value={terapeuta.plantilla}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label>Membresia:</label>
                <input
                  type="text"
                  className="form-control"
                  name="Membresia"
                  placeholder="Ingresa la Membresia"
                  value={terapeuta.Membresia}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label>Avatarx16:</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, 16)}
                />
              </div>
              <div className="form-group">
                <label>Avatarx32:</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, 32)}
                />
              </div>
              <div className="form-group">
                <label>Avatarx64:</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, 64)}
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

export default TerapeutaP;
