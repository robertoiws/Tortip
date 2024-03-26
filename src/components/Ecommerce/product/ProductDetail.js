import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../../../actions/productsAction";
import { useAlert } from "react-alert";
import Loader from "../../layout/Loader";
import { Carousel } from "react-bootstrap";
import { addItemShoppingCart } from "../../../actions/cartAction";

const ProductDetail = () => {
  const { shoppingCartId, shoppingCartItems } = useSelector(
    (state) => state.cart
  );

  const [quantity, setQuantity] = useState(1);
  const [comentarioText, setComentarioText] = useState("");
  const [ratingText, setRatingText] = useState("");
  const [nombreText, setNombreText] = useState("");

  const dispatch = useDispatch();
  const alert = useAlert();
  const { id } = useParams();
  const { loading, error, product } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductById(id));
    if (error != null) {
      alert.error(error);
    }
  }, [dispatch, alert, error, id]);

  if (!product || loading) {
    return <Loader />;
  }

  const increaseQty = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    const item = {
      cantidad: quantity,
      imagen: product.images[0].url,
      precio: product.precio,
      productId: product.id,
      producto: product.nombre,
      stock: product.stock,
    };

    const params = {
      cantidad: quantity,
      productId: id,
      shoppingCartItems,
      shoppingCartId,
      item,
    };

    dispatch(addItemShoppingCart(params));
    alert.success("El producto fue agregado al carrito");
  };

  const submitReview = async () => {
    try {
      const token = localStorage.getItem("token");

      console.log("Datos de la reseña a enviar:", {
        productId: product.id,
        nombre: nombreText,
        rating: ratingText,
        comentario: comentarioText,
      });
      const response = await fetch("http://localhost:5000/api/v1/Review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          productId: product.id,
          nombre: nombreText,
          rating: ratingText,
          comentario: comentarioText,
        }),
      });
      if (response.ok) {
        alert.success("Reseña enviada con éxito");
        setComentarioText(""); // Limpiar el campo de texto después de enviar la reseña
      } else {
        throw new Error("Error al enviar la reseña");
      }
    } catch (error) {
      console.error(error);
      alert.error("Error al enviar la reseña");
    }
  };

  return (
    <div className="row f-flex justify-content-around">
      <div className="col-12 col-lg-5 img-fluid" id="product_image">
        <Carousel pause="hover">
          {product.images.map((image) => (
            <Carousel.Item key={image.id}>
              <img
                className="d-block w-100"
                src={image.url}
                alt={product.nombre}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="col-12 col-lg-5 mt-5">
        <h3>{product.nombre}</h3>
        <p id="product_id">Product # {product.id}</p>

        <hr />

        <div className="rating-outer">
          <div
            className="rating-inner"
            style={{ width: `${(product.rating / 5) * 100}%` }}
          ></div>
        </div>
        <span id="no_of_reviews">( {product.numeroReviews} Reviews)</span>

        <hr />

        <p id="product_price">$ {product.precio}</p>
        <div className="stockCounter d-inline">
          <span className="btn btn-danger minus" onClick={decreaseQty}>
            -
          </span>

          <input
            type="number"
            className="form-control count d-inline"
            value={quantity}
            readOnly
          />

          <span className="btn btn-primary plus" onClick={increaseQty}>
            +
          </span>
        </div>
        <button
          type="button"
          id="cart_btn"
          className="btn btn-primary d-inline ml-4"
          onClick={addToCart}
        >
          Agregar al Carrito
        </button>

        <hr />

        <p>
          Status:
          <span
            id="stock_status"
            className={product.stock > 0 ? "greenColor" : "redColor"}
          >
            {product.stock > 0 ? "En Stock" : "Fuera de Stock"}
          </span>
        </p>

        <hr />

        <h4 className="mt-2">Descripcion</h4>

        <p>{product.descripcion}</p>

        <hr />
        <p id="product_seller mb-3">
          Vendedor: <strong> {product.vendedor} </strong>
        </p>

        <hr />

        <h4>Reseñas:</h4>
        <ul>
          {product.reviews.map((review) => (
            <li key={review.id}>
              <div className="rating-outer">
                <div
                  className="rating-inner"
                  style={{ width: `${(product.rating / 5) * 100}%` }}
                ></div>
              </div>
              <span id="no_of_reviews">( {product.numeroReviews} Reviews)</span>
              <p>{review.comentario}</p>
            </li>
          ))}
        </ul>
        <hr />

        <button
          id="review_btn"
          type="button"
          className="btn btn-primary mt-4"
          data-toggle="modal"
          data-target="#ratingModal"
        >
          Subir Reseña
        </button>

        <div className="row mt-2 mb-5">
          <div className="rating w-50">
            <div
              className="modal fade"
              id="ratingModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="ratingModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="ratingModalLabel">
                      Submit Review
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <input
                      name="nombre"
                      id="nombre"
                      className="form-control mt-3"
                      value={nombreText}
                      onChange={(e) => setNombreText(e.target.value)}
                    ></input>
                    <input
                      name="rating"
                      id="rating"
                      className="form-control mt-3"
                      value={ratingText}
                      onChange={(e) => setRatingText(e.target.value)}
                    ></input>
                    <textarea
                      name="comentario"
                      id="comentario"
                      className="form-control mt-3"
                      value={comentarioText}
                      onChange={(e) => setComentarioText(e.target.value)}
                    ></textarea>

                    <button
                      className="btn my-3 float-right review-btn px-4 text-white"
                      onClick={submitReview}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
