import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductPagination } from "../../../actions/orderAction";
import Loader from "../../layout/Loader";

const OrderPrueba = () => {
  const dispatch = useDispatch();
  const { loading, orders, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductPagination());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Órdenes</h1>
      <table>
        <thead>
          <tr>
            <th>Orden Id</th>
            <th>Número de Items</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.orderId}>
              <td>{order.orderId}</td>
              <td>{order.numberOfItems}</td>
              <td>{order.total}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderPrueba;
