import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      <footer className="py-3 text-dark">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-3">
              <h5>Servicios</h5>
              <ul className="list-unstyled">
                <li>
                  <Link id="footerlist" to="/Consejos">
                    Preguntale a la abuela
                  </Link>
                </li>
                <li>
                  <Link id="footerlist" to="/Experto">
                    Pregúntale al experto
                  </Link>
                </li>
                <li>
                  <Link id="footerlist" to="/blog">
                    Blog
                  </Link>
                </li>
              </ul>
              <div className="social-media">
                <i class="bi bi-facebook"></i>
                <i class="bi bi-twitter-x"></i>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-linkedin"></i>
              </div>
            </div>

            <div className="col-md-3">
              <h5>Clientes</h5>
              <ul className="list-unstyled">
                <li>
                  <Link id="footerlist" to="/citas">
                    Citas
                  </Link>
                </li>
                <li>
                  <Link id="footerlist" to="/order">
                    Mis compras
                  </Link>
                </li>
                <li>
                  <Link id="footerlist" to="/Terapias">
                    Terapias
                  </Link>
                </li>
                <li>
                  <Link id="footerlist" to="/avisodeprivacidad">
                    Aviso de Privacidad
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 justify-content-center">
              <h5>Colaborador</h5>
              <ul className="list-unstyled">
                <li>
                  <Link id="footerlist" to="/planes">
                    Planes y servicios
                  </Link>
                </li>
                <li>
                  <Link id="footerlist" to="/Anunciate">
                    Anúnciate con nosotros
                  </Link>
                </li>
                <li>
                  <Link id="footerlist" to="/Cursos">
                    Cursos
                  </Link>
                </li>
                <li>
                  <Link id="footerlist" to="/Ecommerce">
                    Vende tus productos
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <img className="img-footer" src="/images/footer.svg" />
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
