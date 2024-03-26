import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { logout } from "../../slices/securitySlice";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./header.css";

const Header = () => {
  const { shoppingCartItems } = useSelector((state) => state.cart);
  const { user, loading } = useSelector((state) => state.security);
  const dispatch = useDispatch();
  const alert = useAlert();

  const logoutHandler = () => {
    dispatch(logout());
    alert.success("Salió de sesión exitosamente");
  };

  return (
    <Fragment>
      <Navbar
        collapseOnSelect
        expand="md"
        bg="light"
        variant="light"
        className="shadow navbar mx-3"
      >
        <Navbar.Brand className="d-flex align-items-center mx-3">
          <Link to="/">
            <img src="/images/logo_vaxi.png" alt="Logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto justify-content-center">
            <Nav.Link as={Link} to="/terapeutas">
              Terapeuta
            </Nav.Link>
            <Nav.Link as={Link} to="/ecommerce">
              Tienda Online
            </Nav.Link>
            <Nav.Link as={Link} to="/cursos">
              Cursos
            </Nav.Link>
            <Nav.Link as={Link} to="/tiendas">
              Tiendas
            </Nav.Link>
          </Nav>
          <Nav className="align-items-center">
            <Link to="/cart" className="mr-3">
              <span id="cart">
                <i className="bi bi-cart-fill"></i>
              </span>
              <span className="ml-1" id="cart_count">
                {shoppingCartItems.length}
              </span>
            </Link>
            {user ? (
              <NavDropdown
                title={
                  <div className="lign-items-center">
                    <figure className="avatar avatar-nav">
                      <img
                        src={user && user.avatar}
                        alt={user && user.nombre}
                        className="rounded-circle"
                      />
                    </figure>
                    <span className="Nombre-nav">{user && user.nombre}</span>
                  </div>
                }
                id="collapsible-nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/me">
                  <i className="bi bi-person"></i>Perfil
                </NavDropdown.Item>
                {user && user.roles.includes("ADMIN") && (
                  <NavDropdown.Item as={Link} to="/pruebaaddproduct">
                    <i className="bi bi-person"></i>Agregar Productos
                  </NavDropdown.Item>
                )}
                {user && user.roles.includes("ADMIN") && (
                  <Link className="dropdown-item" to="/administrarproducto">
                    <i className="bi bi-person"></i>Administrar Productos
                  </Link>
                )}
                {user && user.roles.includes("ADMIN") && (
                  <Link className="dropdown-item" to="/administrarcatalogo">
                    <i className="bi bi-person"></i>Administrar Catálogos
                  </Link>
                )}
                {user && user.roles.includes("ADMIN") && (
                  <Link className="dropdown-item" to="/administrarrecursoweb">
                    <i className="bi bi-person"></i>Administrar Recursos
                  </Link>
                )}
                <NavDropdown.Item as={Link} to="/order">
                  <i className="bi bi-person"></i> Ordenes
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/" onClick={logoutHandler}>
                  <i className="bi bi-person"></i>Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              !loading && (
                <div class="dropdown show">
                  <a
                    className="btn btn-secondary dropdown-toggle"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Ingresar
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <a className="dropdown-item" href="/login">
                      Iniciar Sesion
                    </a>
                    <a className="dropdown-item" href="/inforegistro">
                      Registro
                    </a>
                  </div>
                </div>
              )
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

export default Header;
