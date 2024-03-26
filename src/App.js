import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import ProductDetail from "./components/Ecommerce/product/ProductDetail";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCategories } from "./actions/categoryAction";
import Login from "./components/User/security/Login";
import Register from "./components/User/security/Register";
import Profile from "./components/User/security/Profile";
import ProtectedRoute from "./components/route/ProtectedRoute";
import { loadUser } from "./actions/userAction";
import UpdateProfile from "./components/User/security/UpdateProfile";
import ForgotPassword from "./components/User/security/ForgotPassword";
import NewPassword from "./components/User/security/NewPassword";
import UpdatePassword from "./components/User/security/UpdatePassword";
import { getShoppingCart } from "./actions/cartAction";
import Cart from "./components/Ecommerce/cart/Cart";
import { getCountries } from "./actions/countryAction";
import Shipping from "./components/Ecommerce/cart/Shipping";
import ConfirmOrder from "./components/Ecommerce/cart/ConfirmOrder";
import Payment from "./components/Ecommerce/cart/Payment";
import OrderSuccess from "./components/Ecommerce/cart/OrderSuccess";
import AddProduct from "./components/User/security/AddProduct";
import Order from "./components/User/security/Order";
import LoginRegister from "./components/User/security/LoginRegister";
import TiendaO from "./components/TiendaO";
import Servicioup from "./components/modules/Servicioup";
import Terapeutas from "./components/Nav/Terapeutas";
import Aviso from "./components/Footer/aviso";
import AddAdmin from "./components/User/admin/addAdmin";
import RegisterServicio from "./components/User/security/RegisterServicio";
import CatalogoUp from "./components/modules/CatalogoUp";
import CatalogoAdmin from "./components/modules/CatalogoAdmin";
import CatalogoActualizar from "./components/modules/CatalogoActualizar";
import ProductoActualizar from "./components/Ecommerce/products/ProductoActualizar";
import ProductoAdmin from "./components/Ecommerce/products/ProductoAdmin";
import RecursoUp from "./components/modules/RecursosWebAlta";
import RecursoAdmin from "./components/modules/RecursosWebAdmin";
import RecursoActualizar from "./components/modules/RecursosWebActualizar";
import ClientesSer from "./components/ClientesSer";
import Plantilla1 from "./components/Terapeutas/Plantilla/Plantilla1";
import Plantilla2 from "./components/Terapeutas/Plantilla/Plantilla2";
import Plantilla3 from "./components/Terapeutas/Plantilla/Plantilla3";
import NotFound from "./components/modules/NotFound";
import Cursos from "./components/Cursos";
import Tiendas from "./components/Tiendas";
import Consejos from "./components/Consejos/Consejos";
import Experto from "./components/Experto/Experto";
import Blog from "./components/Blog/Blog";
import BlogDetail from "./components/Blog/BlogDetail";
import Planes from "./components/Footer/Planes";
import Anunciate from "./components/Footer/Anunciate";
import TerapeutaP from "./components/prueba/TerapeutaP";
import TipoServicio from "./components/modules/TipoServicio";
import SelectTipoServicio from "./components/modules/ModTipoServicio/selectTipoServicio";
import AddServicio from "./components/modules/Servicio/addServicio";
import CalendarioServicio from "./components/Terapeutas/ADTerapeutas/CalendarioServicio";
import EditCServicio from "./components/Terapeutas/EditCServicio";
import ViewTerapeutas from "./components/prueba/ViewTerapeutas";
import Detail from "./components/prueba/Detail";
import ViewAdmin from "./components/prueba/ViewAdmin";
import Abuela from "./components/prueba/Abuela";
import ViewAbuela from "./components/prueba/ViewAbuela";
import ExpertoAdd from "./components/prueba/ExpertoAdd";
import ViewExperto from "./components/prueba/ViewExperto";
import ViewExpertoDetail from "./components/prueba/Mod/viewExpertoDetail";
import RespuestaExperto from "./components/prueba/Mod/RespuestaExperto";
import LicenciaAdmin from "./components/prueba/Pago/LicenciaAdmin";
import ViewLicencia from "./components/prueba/Pago/viewLicencia";
import Pago from "./components/prueba/P/Pago";
import Calendar from "./components/prueba/calendar";
import Cad1 from "./components/prueba/Calendary/Cad1";
import Citas from "./components/prueba/Calendary/Citas";
import ProductAdd from "./components/User/Prueba/ProductAdd";
import ViewProducts from "./components/User/Prueba/viewProducts";
import ProductUpdate from "./components/User/Prueba/ProductUpdate";
import OrderAdmin from "./components/Ecommerce/order/OrderAdmin";
import OrderPrueba from "./components/Ecommerce/order/OrderPrueba";

function App() {
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(getCategories({}));
    dispatch(getShoppingCart({}));
    dispatch(getCountries({}));

    if (token) {
      dispatch(loadUser({}));
    }
  }, [dispatch, token]);

  return (
    <Router>
      <div className="App">
        <Header />

        <div>
          <Routes>
            // Rutas Generales
            <Route path="/" element={<Home />} />
            <Route path="/ecommerce" element={<TiendaO />} />
            <Route path="/inforegistro" element={<LoginRegister />} />
            <Route path="/Cursos" element={<Cursos />} />
            <Route path="/Tiendas" element={<Tiendas />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/terapeutas" element={<ClientesSer />} />
            // User
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/password/forgot" element={<ForgotPassword />} />
            <Route path="/password/reset/:token" element={<NewPassword />} />
            // Ecommerce
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/administrarproducto" element={<ProductoAdmin />} />
            // Solo Funciones
            <Route path="/registerServicio" element={<RegisterServicio />} />
            <Route path="/viewTerapeutas" element={<ViewTerapeutas />} />
            <Route path="/viewAdmin" element={<ViewAdmin />} />
            <Route path="/respuetaExperto" element={<RespuestaExperto />} />
            <Route path="/pruebaDetails/:GuidId" element={<Detail />} />
            <Route
              path="/viewExpertoDetail/:id"
              element={<ViewExpertoDetail />}
            />
            <Route path="/registerPrueba" element={<TerapeutaP />} />
            <Route path="/abuelaPrueba" element={<Abuela />} />
            <Route path="/expertoPrueba" element={<ExpertoAdd />} />
            <Route path="/calendario" element={<CalendarioServicio />} />
            <Route path="/licenciaAdd" element={<LicenciaAdmin />} />
            <Route path="/licenciaView" element={<ViewLicencia />} />
            <Route path="/pagoAdd" element={<Pago />} />
            <Route path="/tiposervicioPrueba" element={<TipoServicio />} />
            <Route
              path="/selecttiposervicio"
              element={<SelectTipoServicio />}
            />
            <Route path="/addService" element={<AddServicio />} />
            <Route path="/agregarservicio" element={<Servicioup />} />
            <Route path="/agregarservicio" element={<Servicioup />} />
            <Route path="/agregarcatalogo" element={<CatalogoUp />} />
            <Route path="/viewAbuela" element={<ViewAbuela />} />
            <Route path="/viewExperto" element={<ViewExperto />} />
            <Route path="/administrarcatalogo" element={<CatalogoAdmin />} />
            // Admin
            <Route path="/agregaradmin" element={<AddAdmin />} />
            // Footer
            <Route path="/avisodeprivacidad" element={<Aviso />} />
            <Route path="/Planes" element={<Planes />} />
            <Route path="/Anunciate" element={<Anunciate />} />
            <Route path="/Consejos" element={<Consejos />} />
            <Route path="/Experto" element={<Experto />} />
            <Route path="/EditProfile" element={<EditCServicio />} />
            // Vistas - Sin Funciones
            <Route path="/cad" element={<Calendar />} />
            <Route path="/cad1" element={<Cad1 />} />
            <Route path="/cad2" element={<Citas />} />
            <Route path="/viewProducts" element={<ViewProducts />} />
            <Route path="/products/:id/update" element={<ProductUpdate />} />
            <Route path="/ordes" element={<OrderPrueba />} />
            <Route path="/ordesAdmin" element={<OrderAdmin />} />
            <Route
              path="/actualizarcatalogo"
              element={<CatalogoActualizar />}
            />
            <Route
              path="/actualizarproducto"
              element={<ProductoActualizar />}
            />
            <Route path="/agregarrecursoweb" element={<RecursoUp />} />
            <Route
              path="/actualizarrecursoweb"
              element={<RecursoActualizar />}
            />
            <Route path="/administrarrecursoweb" element={<RecursoAdmin />} />
            // Terapeutas
            <Route path="/perfilClientes" element={<Plantilla1 />} />
            <Route path="/perfilClientes1" element={<Plantilla2 />} />
            <Route path="/perfilClientes2" element={<Plantilla3 />} />
            // Blog
            <Route path="/Blog" element={<Blog />} />
            <Route path="/BlogDetail" element={<BlogDetail />} />
            // Vistas Protegidas
            <Route exact path="/me" element={<ProtectedRoute />}>
              <Route path="/me" element={<Profile />} />
            </Route>
            <Route exact path="/password/update" element={<ProtectedRoute />}>
              <Route path="/password/update" element={<UpdatePassword />} />
            </Route>
            <Route exact path="/me/update" element={<ProtectedRoute />}>
              <Route path="/me/update" element={<UpdateProfile />} />
            </Route>
            <Route exact path="/shipping" element={<ProtectedRoute />}>
              <Route path="/shipping" element={<Shipping />} />
            </Route>
            <Route exact path="/order/confirm" element={<ProtectedRoute />}>
              <Route path="/order/confirm" element={<ConfirmOrder />} />
            </Route>
            <Route exact path="/payment" element={<ProtectedRoute />}>
              <Route path="/payment" element={<Payment />} />
            </Route>
            <Route exact path="/success" element={<ProtectedRoute />}>
              <Route path="/success" element={<OrderSuccess />} />
            </Route>
            <Route exact path="/addproduct" element={<ProtectedRoute />}>
              <Route path="/addproduct" element={<AddProduct />} />
            </Route>
            <Route exact path="/pruebaaddproduct" element={<ProtectedRoute />}>
              <Route path="/pruebaaddproduct" element={<ProductAdd />} />
            </Route>
            <Route exact path="/order" element={<ProtectedRoute />}>
              <Route path="/order" element={<Order />} />
            </Route>
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
