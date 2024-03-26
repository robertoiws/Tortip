import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, updateProduct } from "../../../actions/productsAction";
import { Modal, Button } from "react-bootstrap";

const ViewProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [updatedProductData, setUpdatedProductData] = useState({
    id: "",
    nombre: "",
    precio: "",
    descripcion: "",
    vendedor: "",
    stock: "",
    categoryId: "",
  });

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setUpdatedProductData({
      ...product,
      id: product.id,
    });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    setUpdatedProductData({
      ...updatedProductData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveChanges = () => {
    console.log("ID del producto a actualizar:", selectedProduct.id);
    console.log("Datos actualizados del producto:", updatedProductData);

    dispatch(updateProduct(selectedProduct.id, updatedProductData))
      .then(() => {
        // Actualización exitosa, cierra el modal y recarga la lista de productos
        setShowModal(false);
        dispatch(getProducts());
      })
      .catch((error) => {
        console.error("Error al actualizar el producto:", error);
      });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Lista de Productos</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Descripción</th>
            <th scope="col">Vendedor</th>
            <th scope="col">Stock</th>
            <th scope="col">Categoría</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.nombre}</td>
              <td>${product.precio}</td>
              <td>{product.descripcion}</td>
              <td>{product.vendedor}</td>
              <td>{product.stock}</td>
              <td>{product.categoryId}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleEdit(product)}
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label>ID del Producto:</label>
              <input
                type="text"
                name="id"
                className="form-control"
                value={selectedProduct ? selectedProduct.id : ""}
                readOnly
              />
            </div>
            <div className="form-group">
              <label>Nombre del Producto:</label>
              <input
                type="text"
                name="nombre"
                className="form-control"
                value={updatedProductData.nombre}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Precio:</label>
              <input
                type="number"
                name="precio"
                className="form-control"
                value={updatedProductData.precio}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Descripción:</label>
              <input
                type="text"
                name="descripcion"
                className="form-control"
                value={updatedProductData.descripcion}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Vendedor:</label>
              <input
                type="text"
                name="vendedor"
                className="form-control"
                value={updatedProductData.vendedor}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Stock:</label>
              <input
                type="number"
                name="stock"
                className="form-control"
                value={updatedProductData.stock}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Categoría:</label>
              <input
                type="text"
                name="categoryId"
                className="form-control"
                value={updatedProductData.categoryId}
                onChange={handleChange}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ViewProducts;
