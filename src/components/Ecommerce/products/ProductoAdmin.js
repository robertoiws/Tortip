import React, { Component, Fragment} from 'react';
import MetaData from "../../layout/MetaData";
import { Link, useNavigate } from "react-router-dom";
import Search from "../../layout/Search";
const ProductoAdmin = () => {
   
    
  return (
    <Fragment>
    <MetaData titulo={"Administrar Producto"} />
    <div className="container-fluid"> 
        <div className="row">
            <div className="col-10 mx-auto">
                
            <h4 className="mb-3">Administrar Producto</h4>
                    <div className="row">
                        <div className="col-md-4">
                        <Search />
                        </div>
                        <div className="col-md-4  offset-md-4">
                        <button type="submit"   className="btn btn-primary btn-lg"> {/* Aplicar clases btn-lg para hacerlo más grande */}
                        <Link  to="/addproduct" style={{ color: 'white', textDecoration: 'none' }}> Agregar Nuevo Producto</Link>
                        </button>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row row-cols-7">
                            <div className="col">Nombre</div>
                            <div className="col">Estado</div>
                            <div className="col">Descripción</div>
                            <div className="col">Vendedor</div>
                            <div className="col">Stock</div>
                            <div className="col">Categoria</div>
                            <div className="col">Opciones</div>
                        </div>
                        <div className="row row-cols-7">
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col">
                            <Link  to="/actualizarproducto" style={{ textDecoration: 'none' }}> Actualizar </Link> / Eliminar
                            </div>
                        </div>
                        
                    </div>
            </div>
        </div>
    </div>
</Fragment>

  )
}

export default ProductoAdmin