import React, { Component, Fragment} from 'react';
import MetaData from "../layout/MetaData";
import { Link, useNavigate } from "react-router-dom";
import './module.css'; 
import Search from "../layout/Search";
import CatalogoUp from './CatalogoActualizar';

const CatalogoAdmin = () => {
   
    
  return (
    <Fragment>
    <MetaData titulo={"Administrar Catalogo"} />
    <div className="container-fluid"> 
        <div className="row">
            <div className="col-10 mx-auto">
                
            <h4 className="mb-3">Administrar Catalogo</h4>
                    <div className="row">
                        <div className="col-md-4">
                        <Search />
                        </div>
                        <div className="col-md-4  offset-md-4">
                        <button type="submit"   className="btn btn-primary btn-lg"> {/* Aplicar clases btn-lg para hacerlo más grande */}
                        <Link  to="/agregarcatalogo" style={{ color: 'white', textDecoration: 'none' }}> Agregar Nuevo Catálogo </Link>
                        </button>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row row-cols-6">
                            <div className="col">Nombre</div>
                            <div className="col">Estado</div>
                            <div className="col">Descripción</div>
                            <div className="col">Fecha de registro</div>
                            <div className="col">Fecha de actualización</div>
                            <div className="col">Opciones</div>
                        </div>
                        <div className="row row-cols-6">
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col">
                            <Link  to="/actualizarcatalogo" style={{ textDecoration: 'none' }}> Actualizar </Link> / Eliminar
                            </div>
                        </div>
                        
                    </div>
            </div>
        </div>
    </div>
</Fragment>

  )
}

export default CatalogoAdmin