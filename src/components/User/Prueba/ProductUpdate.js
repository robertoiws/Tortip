import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById, updateProduct } from "../../../actions/productsAction";

const ProductUpdate = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [productData, setProductData] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
    vendedor: "",
    stock: "",
    categoryId: "",
  });

  const product = useSelector((state) => state.products.product);

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (product) {
      setProductData(product); // Establece productData solo si product no es nulo
    }
  }, [product]);

  const handleChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(id, productData));
  };

  return (
    <div className="container mt-4">
      <h2>Actualizar Producto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre del Producto:</label>
          <input
            type="text"
            name="nombre"
            className="form-control"
            value={productData.nombre}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Precio:</label>
          <input
            type="number"
            name="precio"
            className="form-control"
            value={productData.precio}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Descripción:</label>
          <input
            type="text"
            name="descripcion"
            className="form-control"
            value={productData.descripcion}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Vendedor:</label>
          <input
            type="text"
            name="vendedor"
            className="form-control"
            value={productData.vendedor}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Stock:</label>
          <input
            type="number"
            name="stock"
            className="form-control"
            value={productData.stock}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Categoría:</label>
          <input
            type="text"
            name="categoryId"
            className="form-control"
            value={productData.categoryId}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Actualizar Producto
        </button>
      </form>
    </div>
  );
};

export default ProductUpdate;
