import React, { Component, Fragment} from 'react';
import MetaData from "../layout/MetaData";
import { Link, useNavigate } from "react-router-dom";
import './module.css'; 

const CatalogoActualizar = () => {
   
    
  return (
    <Fragment>
    <MetaData titulo={"Actualizar Catalogo"} />
    <div className="container-fluid"> 
        <div className="row">
            <div className="col-10 mx-auto">
                <form >
                    <h4 className="mb-3">Actualizar Catálogo</h4>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Nombre:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="nombre"
                                    placeholder='Ingresa el nombre'
                                />
                            </div>
                        </div>
                        <div className="col-md-4  offset-md-4">
                            <div className="form-group">
                                <label>Estado:</label>
                                <input
                                    type="text"
                                    className="form-control form_F"
                                    name="estado"
                                    placeholder='Selecciona el estado'
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Descripción:</label>
                        <textarea
                            className="form-control"
                            name="descripcion"
                            placeholder='Escribe una pequeña descripcion del catálogo'
                        />
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Fecha de Registro:</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="fechaRegistro"
                                    placeholder='DD/MM/AAAA'
                                />
                            </div>
                        </div>
                        <div className="col-md-4  offset-md-4">
                            <div className="form-group">
                                <label>Fecha de Actualización:</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="fechaActualizacion"
                                    placeholder='DD/MM/AAAA'
                                />
                            </div>
                        </div>
                    </div>
                    <div className="text-center"> {/* Centrar el botón */}
                        <button type="submit" className="btn btn-primary btn-lg"> {/* Aplicar clases btn-lg para hacerlo más grande */}
                            Actualizar Catálogo
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</Fragment>

  )
}

export default CatalogoActualizar