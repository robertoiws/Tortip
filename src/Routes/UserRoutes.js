import React from "react";
import "../App.css"
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../components/route/ProtectedRoute";
import Profile from "../components/security/Profile";
import UpdatePassword from "../components/security/UpdatePassword";
import UpdateProfile from "../components/security/UpdateProfile";
import Shipping from "../components/cart/Shipping";
import ConfirmOrder from "../components/cart/ConfirmOrder";
import Payment from "../components/cart/Payment";
import OrderSuccess from "../components/cart/OrderSuccess";
import AddProduct from "../components/security/AddProduct";
import Order from "../components/security/Order";

const UserRoutes = () => {
  return (
    <div className="App">
    <Routes>
      <Route path="/me" element={<ProtectedRoute />}>
        <Route path="/me" element={<Profile />} />
      </Route>
      <Route path="/password/update" element={<ProtectedRoute />}>
        <Route path="/password/update" element={<UpdatePassword />} />
      </Route>
      <Route path="/me/update" element={<ProtectedRoute />}>
        <Route path="/me/update" element={<UpdateProfile />} />
      </Route>
      <Route path="/shipping" element={<ProtectedRoute />}>
        <Route path="/shipping" element={<Shipping />} />
      </Route>
      <Route path="/order/confirm" element={<ProtectedRoute />}>
        <Route path="/order/confirm" element={<ConfirmOrder />} />
      </Route>
      <Route path="/payment" element={<ProtectedRoute />}>
        <Route path="/payment" element={<Payment />} />
      </Route>
      <Route path="/success" element={<ProtectedRoute />}>
        <Route path="/success" element={<OrderSuccess />} />
      </Route>
      <Route path="/addproduct" element={<ProtectedRoute />}>
        <Route path="/addproduct" element={<AddProduct />} />
      </Route>
      <Route path="/order" element={<ProtectedRoute />}>
        <Route path="/order" element={<Order />} />
      </Route>
    </Routes>
    </div>
  );
};

export default UserRoutes;
