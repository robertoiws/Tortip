import React from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import Loader from '../../layout/Loader';
import { Link } from "react-router-dom";
import "./security.css"

const Profile = () => {
  const { user, loading } = useSelector((state) => state.security);

  if (loading) {
    return <Loader />;
  }

  return (
    <Fragment>
      <h2 className="mt-5 ml-5">Mi Perfil</h2>
      <div className="m-5">
        <div className="text-right">
        <Link to="/password/update" className="btn btn-primary mt-3">
        Cambiar Contraseña</Link>
        <Link to="/me/update" className="btn btn-primary mt-3 ml-2">
        Editar Perfil</Link>
        </div>
        </div>
      <div className="row mt-5">
        <div className="col-md-3">
          <div className="card col">
          <img
          className="card-img-top rounded-pill img-fluid mx-auto m-4"
          src={user && user.avatar}
          alt="Foto_Usuario"
          />
            <ul className="list-group list-group-flush text-center">
              {user.roles.includes("ADMIN") && (
                <Link to="/me" className="list-group-item">
                  Información del perfil
                </Link>
                
              )}
              {user.roles.includes("ADMIN") && (
                <Link to="/approvals" className="list-group-item">
                  Aprobaciones
                </Link>
              )}
              {user.roles.includes("ADMIN") && (
                <Link to="/reports" className="list-group-item">
                  Reportes
                </Link>
              )}
              {user.roles.includes("ADMIN") && (
                <Link to="/agregaradmin" className="list-group-item">
                  Agregar administrador
                </Link>
              )}
              {user && user.roles.includes("ADMIN") && (
                  <Link className="list-group-item" to="/administrarproducto">
                  Administrar Productos
                </Link>
                )}
                {user && user.roles.includes("ADMIN") && (
                  <Link className="list-group-item" to="/administrarcatalogo">
                  Administrar Catálogos
                </Link>
                )}
                {user && user.roles.includes("ADMIN") && (
                  <Link className="list-group-item" to="/administrarrecursoweb">
                  Administrar Recursos
                </Link>
                )}
              {user.roles.includes("SERVICIO") && (
                <Link to="/me" className="list-group-item">
                  Información de perfil
                </Link>
              )}
              {user.roles.includes("SERVICIO") && (
                <Link to="/my-payments" className="list-group-item">
                  Mis pagos
                </Link>
              )}
              {user.roles.includes("SERVICIO") && (
                <Link to="/my-appointments" className="list-group-item">
                  Mis citas
                </Link>
              )}
              {user.roles.includes("SERVICIO") && (
                <Link to="/my-sales" className="list-group-item">
                  Mis ventas
                </Link>
              )}
              {user.roles.includes("USER") && (
                <Link to="/me" className="list-group-item">
                  Información de perfil
                </Link>
              )}
              {user.roles.includes("USER") && (
                <Link to="/my-payment-methods" className="list-group-item">
                  Mis métodos de pago
                </Link>
              )}
              {user.roles.includes("USER") && (
                <Link to="/my-payments" className="list-group-item">
                  Mis pagos
                </Link>
              )}
              {user.roles.includes("USER") && (
                <Link to="/my-orders" className="list-group-item">
                  Mis ordenes
                </Link>
              )}
              {user.roles.includes("USER") && (
                <Link to="/my-appointments" className="list-group-item">
                  Mis citas
                </Link>
              )}
            </ul>
          </div>
        </div>
        <div className="col-md-5 ">
          <h4>Nombre</h4>
          <p>{user && user.nombre}</p>
          <h4>Apellido</h4>
          <p>{user && user.apellido}</p>
          <h4>Telefono</h4>
          <p>{user && user.telefono}</p>
          <h4>Username</h4>
          <p>{user && user.username}</p>
          <h4>Email</h4>
          <p>{user && user.email}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
