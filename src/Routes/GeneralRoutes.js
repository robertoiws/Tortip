import React from "react";
import "../App.css"
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import TiendaO from "../components/TiendaO";
import ProductDetail from "../components/product/ProductDetail";
import Login from "../components/security/Login";
import Register from "../components/security/Register";
import Cart from "../components/cart/Cart";
import ForgotPassword from "../components/security/ForgotPassword";
import NewPassword from "../components/security/NewPassword";
import LoginRegister from "../components/security/LoginRegister";
import Servicioup from "../components/modules/Servicioup";
import Terapeutas from "../components/Nav/Terapeutas";
import Aviso from "../components/Footer/aviso";
import AddAdmin from "../components/admin/addAdmin";


const GeneralRoutes = () => {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ecommerce" element={<TiendaO />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/password/forgot" element={<ForgotPassword />} />
      <Route path="/password/reset/:token" element={<NewPassword />} />
      <Route path="/inforegistro" element={<LoginRegister />} />
      <Route path="/agregarservicio" element={<Servicioup />} />
      <Route path="/terapeutas" element={<Terapeutas />} />
      <Route path="/avisodeprivacidad" element={<Aviso />} />
      <Route path="/agregaradmin" element={<AddAdmin />} />
    </Routes>
    </div>
  );
};

export default GeneralRoutes;
