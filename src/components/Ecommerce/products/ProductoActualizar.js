import React, { Component, Fragment} from 'react';
import MetaData from "../../layout/MetaData";
import { Link, useNavigate } from "react-router-dom";

const ProductoActualizar = () => {
   
    
  return (
    <Fragment>
    <MetaData titulo={"Actualizar Producto"} />
    <div className="container-fluid"> 
        <div className="row">
            <div className="col-10 mx-auto">
            <form >
                    <h4 className="mb-3">Actualizar producto</h4>
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
                                <label>Estado:</label>
                                <input
                                    type="text"
                                    className="form-control form_F"
                                    name="estado"
                                    placeholder='Selecciona el estado'
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Precio:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="precio"
                                    placeholder='Ingresa el precio'
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Descripción:</label>
                        <textarea
                            className="form-control"
                            name="descripcion"
                            placeholder='Escribe una pequeña descripcion'
                        />
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Vendedor:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="fechaRegistro"
                                    placeholder='nombre del vendedor'
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Stock:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="fechaActualizacion"
                                    placeholder=''
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Categoria:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="catalogo"
                                    placeholder='Selecciona la categoria'
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Imagen:</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    name="imagen"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="text-center"> {/* Centrar el botón */}
                        <button type="submit" className="btn btn-primary btn-lg"> {/* Aplicar clases btn-lg para hacerlo más grande */}
                            Actualizar producto
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</Fragment>

  )
}

export default ProductoActualizar