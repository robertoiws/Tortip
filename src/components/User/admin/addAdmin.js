import React, { Component, Fragment} from 'react';
import MetaData from "../../layout/MetaData";

const addAdmin = () => {
  return (
    <Fragment>
    <MetaData titulo={"Agregar Administrador"} />
    <div className="container-fluid"> 
        <div className="row">
            <div className="col-10 mx-auto pt-5">
                <form >
                    <h4 className="mb-3">Agregar Administrador</h4>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Nombre:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="nombre"
                                    placeholder='Ingresa Nombre'
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Apellidos:</label>
                                <input
                                    type="text"
                                    className="form-control form_F"
                                    name="apellidos"
                                    placeholder='Ingresar Apellido'
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>CURP:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="CURP"
                                    placeholder='Ingresa la CURP'
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Calle y Número:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="Calle y Número"
                                    placeholder='Calle y Número'
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Ciudad</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="Ciudad"
                                    placeholder='Selecciona la ciudad'
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Colonia:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="colonia"
                                    placeholder='Selecciona la colonia'
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>CP:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="codigopostal"
                                    placeholder='Selecciona el CP'
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Correo Electronico:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    placeholder='Ingrese el correo electronico'
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Correo Alternativo:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="email2"
                                    placeholder='Ingrese el correo electronico'
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Teléfono:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="telefono"
                                    placeholder='Ingrese el teléfono'
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Contraseña:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="password"
                                    placeholder='Ingrese la contraseña'
                                />
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-4"> 
                        <button type="submit" className="btn btn-primary btn-lg">
                            Agregar Nuevo Administrador
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</Fragment>
  )
}

export default addAdmin