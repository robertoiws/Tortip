import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../../layout/Loader";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import Calendar from "react-calendar";
import Select from "react-select";
import "react-calendar/dist/Calendar.css";

const MapWithAMarker = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: props.lat, lng: props.lng }}
    >
      <Marker position={{ lat: props.lat, lng: props.lng }} />
    </GoogleMap>
  ))
);
const Consultorio = () => {
  const { user, loading } = useSelector((state) => state.security);

  if (loading) {
    return <Loader />;
  }

  // Obtén las coordenadas del consultorio desde la base de datos o cualquier fuente
  const consultorioLat = 37.7749; // Reemplaza con la latitud del consultorio
  const consultorioLng = -122.4194; // Reemplaza con la longitud del consultorio

  return (
    <Fragment>
      {/* Contenido del Módulo Consultorio */}
      <h3>Consultorio</h3>

      {/* Mapa del Consultorio */}
      <div style={{ height: "400px", width: "100%" }}>
        <MapWithAMarker
          lat={consultorioLat}
          lng={consultorioLng}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDeXpxB4lQnkEhPNrdT5QSXNQJZRnt7CmM`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </Fragment>
  );
};
const Reserva = () => {
  const { user, loading } = useSelector((state) => state.security);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);

  if (loading) {
    return <Loader />;
  }

  // Obtén los horarios disponibles desde la base de datos o cualquier fuente
  const horariosDisponibles = [
    { value: "10:00 AM", label: "10:00 AM" },
    { value: "11:00 AM", label: "11:00 AM" },
    { value: "12:00 PM", label: "12:00 PM" },
    // ... (agrega más horarios según sea necesario)
  ];

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Aquí podrías cargar los horarios disponibles para la fecha seleccionada
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
    // Aquí podrías manejar la lógica para reservar la cita
  };

  return (
    <Fragment>
      {/* Contenido del Módulo Reserva */}
      <h3>Reserva</h3>

      {/* Calendario */}
      <div className="mb-4">
        <h4>Seleccione la fecha:</h4>
        <Calendar onChange={handleDateChange} value={selectedDate} />
      </div>

      {/* Seleccionador de Horarios */}
      <div>
        <h4>Seleccione el horario:</h4>
        <Select
          options={horariosDisponibles}
          value={selectedTime}
          onChange={(selectedOption) => handleTimeChange(selectedOption)}
        />
      </div>
    </Fragment>
  );
};
const Plantilla1 = () => {
  const { user, loading } = useSelector((state) => state.security);
  const [activeModule, setActiveModule] = useState("consultorio");

  const heroStyle = {
    backgroundImage: `url("/images/fondo_Plantilla.png")`, // Reemplaza con la ruta de tu imagen de fondo
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "15px",
  };

  const handleModuleChange = (module) => {
    setActiveModule(module);
  };

  return (
    <Fragment>
      <div className="container mt-2 p-2 text-center">
        <div className="row">
          <div className="col-md-12 p-4" style={heroStyle}>
            <img
              className="profile-picture img-fluid rounded-circle"
              src="./images/terap.png"
              alt="Foto_Usuario"
            />
          </div>
          <div className="col-md-3 mt-5">
            <div>
              <h4 className="mb-3">Servicios</h4>
              <p>Prueba</p>
              <p>Prueba</p>
              <p>Prueba</p>
              <p>Prueba</p>
              <p>Prueba</p>
            </div>
            <div>
              <h4 className="mb-3">Enfermedades</h4>
              <p>Prueba</p>
              <p>Prueba</p>
              <p>Prueba</p>
              <p>Prueba</p>
              <p>Prueba</p>
            </div>
          </div>

          <div className="col-md-6 mt-5">
            {/* Columna del Centro para Información de Contacto y Módulos */}
            <div>
              <h2 className="mt-3">Rian Garcia</h2>
              <p>
                Un terapeuta de Reiki suele trabajar en un entorno tranquilo y
                relajado, creando un espacio propicio para la curación. Durante
                una sesión típica, el terapeuta colocará sus manos en diferentes
                posiciones sobre el cuerpo del cliente, permitiendo que la
                energía fluya y trabaje en áreas específicas que puedan
                necesitar atención.
              </p>
              <h5>WhatsApp</h5>
              <div className="text-center mt-2">
                <button className="btn btn-primary" id="view_btn">
                  <i className="bi bi-whatsapp"></i> WhatsApp
                </button>
              </div>

              {/* Sección de Módulos con Barra de Navegación */}
              <Nav
                fill
                variant="tabs"
                activeKey={activeModule}
                onSelect={handleModuleChange}
                className="mt-4"
              >
                <Nav.Item>
                  <Nav.Link eventKey="consultorio">Consultorio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="reserva">Reserva</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="resenas">Reseñas</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="productos">Productos</Nav.Link>
                </Nav.Item>
              </Nav>

              {/* Contenido de los Módulos */}
              {activeModule === "consultorio" && (
                <div className="mt-5">
                  {activeModule === "consultorio" && <Consultorio />}
                  {/* ... (resto de los módulos) */}
                </div>
              )}
              {activeModule === "reserva" && (
                <div className="col-md-6">
                  {activeModule === "reserva" && <Reserva />}
                  {/* ... (resto de los módulos) */}
                </div>
              )}
              {activeModule === "resenas" && (
                <div>
                  {/* Contenido del Módulo Reseñas */}
                  <h3>Reseñas</h3>
                  {/* ... (resto del contenido para Reseñas) */}
                </div>
              )}
              {activeModule === "productos" && (
                <div>
                  {/* Contenido del Módulo Productos */}
                  <h3>Productos</h3>
                  {/* ... (resto del contenido para Productos) */}
                </div>
              )}
            </div>
          </div>

          <div className="col-md-3 mt-5">
            {/* Columna de la Derecha para Datos de Contacto y Redes Sociales */}
            <div className="text-center">
              <h4 className="mt-3">Dirección</h4>
              <p className="mb-5">
                Mario Pani 400-piso 1, Lomas de Santa Fe, Contadero, Cuajimalpa
                de Morelos, 05300 Ciudad de México, CDMX
              </p>
              <h5>prueba@gmail.com</h5>
              <h5>5566009457</h5>
              <h5>5566009457</h5>

              <div className="text-center mt-2">
                <i className="bi bi-whatsapp mr-2"></i>
                <i className="bi bi-facebook mr-2"></i>
                <i className="bi bi-instagram mr-2"></i>
                <i className="bi bi-twitter-x mr-2"></i>
                <i className="bi bi-linkedin"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Plantilla1;
