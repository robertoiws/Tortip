import React, { useState, Fragment } from "react";
import MetaData from "../../layout/MetaData";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../../actions/userAction";
import { Container, Row, Col, Form, Button, Breadcrumb } from "react-bootstrap";

const Register = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [user, setUser] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    username: "",
    password: "",
  });

  const { nombre, apellido, password, telefono, email, username } = user;

  const [avatar, setAvatar] = useState("");

  const [avatarPreview, setAvatarPreview] = useState(
    "images/default_avatar.jpg"
  );

  const alert = useAlert();
  const dispatch = useDispatch();

  const { errores, isAuthenticated } = useSelector((state) => state.security);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("nombre", nombre);
    formData.set("apellido", apellido);
    formData.set("telefono", telefono);
    formData.set("email", email);
    formData.set("username", username);
    formData.set("password", password);
    formData.set("foto", avatar);

    dispatch(register(formData));
  };

  const onChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(e.target.files[0]);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  return (
    <Fragment>
      <MetaData titulo={"Registro"} />
      <Container className="mt-4">
        <Breadcrumb>
          <Breadcrumb.Item active={step === 1} onClick={() => setStep(1)}>
            Información Básica
          </Breadcrumb.Item>
          <Breadcrumb.Item active={step === 2} onClick={() => setStep(2)}>
            Información de Contacto
          </Breadcrumb.Item>
          <Breadcrumb.Item active={step === 3} onClick={() => setStep(3)}>
            Estudios
          </Breadcrumb.Item>
          <Breadcrumb.Item active={step === 4} onClick={() => setStep(4)}>
            Plantilla
          </Breadcrumb.Item>
        </Breadcrumb>

        <Row>
          <Col md={6}>
            {step === 1 && (
              <Form>
                <Row>
                  <Col md={6}>
                    <div className="form-group">
                      <label htmlFor="nombre_field">Nombre</label>
                      <input
                        type="text"
                        id="nombre_field"
                        className="form-control"
                        value={nombre}
                        name="nombre"
                        placeholder="Ingresa tu nombre"
                        onChange={onChange}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <label htmlFor="apellido_field">Apellido</label>
                      <input
                        type="text"
                        id="apellido_field"
                        className="form-control"
                        value={apellido}
                        name="apellido"
                        placeholder="Ingresa tu apellido"
                        onChange={onChange}
                      />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col md={12}>
                    <div className="form-group">
                      <label htmlFor="telefono_field">Curp</label>
                      <input
                        type="text"
                        id="telefono_field"
                        className="form-control"
                        value={telefono}
                        name="telefono"
                        placeholder="Ingresa tu Curp"
                        onChange={onChange}
                      />
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="form-group">
                      <label htmlFor="username_field">Calle y Número</label>
                      <input
                        type="text"
                        id="username_field"
                        className="form-control"
                        value={username}
                        name="username"
                        placeholder="Ingresa tu dirección"
                        onChange={onChange}
                      />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <div className="form-group">
                      <label htmlFor="email_field">Ciudad</label>
                      <input
                        type="email"
                        id="email_field"
                        className="form-control"
                        value={email}
                        name="email"
                        placeholder="Ingresa tu ciudad"
                        onChange={onChange}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <label htmlFor="password_field">Colonia</label>
                      <input
                        type="password"
                        id="password_field"
                        className="form-control"
                        value={password}
                        name="password"
                        placeholder="Ingresa tu colonia"
                        onChange={onChange}
                      />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <div className="form-group">
                      <label htmlFor="cp_field">CP</label>
                      <input
                        type="password"
                        id="cp_field"
                        className="form-control"
                        value={password}
                        name="password"
                        placeholder="Ingresa tu código postal"
                        onChange={onChange}
                      />
                    </div>
                  </Col>
                </Row>

                <Button
                  variant="primary"
                  onClick={handleNext}
                  className="btn-lg mx-auto"
                >
                  Siguiente
                </Button>
              </Form>
            )}

            {step === 2 && (
              <Form>
                <Row>
                  <Col md={6}>
                    <div className="form-group">
                      <label htmlFor="nombre_field">Correo Electronico</label>
                      <input
                        type="text"
                        id="nombre_field"
                        className="form-control"
                        value={nombre}
                        name="nombre"
                        placeholder="Ingresa tu nombre"
                        onChange={onChange}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <label htmlFor="apellido_field">Correo Alternativo</label>
                      <input
                        type="text"
                        id="apellido_field"
                        className="form-control"
                        value={apellido}
                        name="apellido"
                        placeholder="Ingresa tu apellido"
                        onChange={onChange}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <label htmlFor="nombre_field">Contraseña</label>
                      <input
                        type="text"
                        id="nombre_field"
                        className="form-control"
                        value={nombre}
                        name="nombre"
                        placeholder="Ingresa tu nombre"
                        onChange={onChange}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <label htmlFor="apellido_field">
                        Confirma tu contraseña
                      </label>
                      <input
                        type="text"
                        id="apellido_field"
                        className="form-control"
                        value={apellido}
                        name="apellido"
                        placeholder="Ingresa tu apellido"
                        onChange={onChange}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <label htmlFor="nombre_field">Teléfono</label>
                      <input
                        type="text"
                        id="nombre_field"
                        className="form-control"
                        value={nombre}
                        name="nombre"
                        placeholder="Ingresa tu nombre"
                        onChange={onChange}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <label htmlFor="apellido_field">RFC</label>
                      <input
                        type="text"
                        id="apellido_field"
                        className="form-control"
                        value={apellido}
                        name="apellido"
                        placeholder="Ingresa tu apellido"
                        onChange={onChange}
                      />
                    </div>
                  </Col>
                </Row>

                <Button
                  variant="secondary"
                  onClick={handlePrev}
                  className="mr-2"
                >
                  Anterior
                </Button>
                <Button variant="primary" onClick={handleNext}>
                  Siguiente
                </Button>
              </Form>
            )}

            {step === 3 && (
              <Form>
                <Row>
                  <Col md={8}>
                    <div className="form-group">
                      <label htmlFor="nombre_field">
                        Certificado de Consultor
                      </label>
                      <input
                        type="text"
                        id="nombre_field"
                        className="form-control"
                        value={nombre}
                        name="nombre"
                        placeholder="Ingresa el certificado"
                        onChange={onChange}
                      />
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="form-group">
                      <label htmlFor="archivo_field">Subir Archivo</label>
                      <input
                        type="file"
                        id="archivo_field"
                        className="form-control-file"
                        onChange={onChange}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={8}>
                    <div className="form-group">
                      <label htmlFor="nombre_field">
                        Certificado de Consultor
                      </label>
                      <input
                        type="text"
                        id="nombre_field"
                        className="form-control"
                        value={nombre}
                        name="nombre"
                        placeholder="Ingresa el certificado"
                        onChange={onChange}
                      />
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="form-group">
                      <label htmlFor="archivo_field">Subir Archivo</label>
                      <input
                        type="file"
                        id="archivo_field"
                        className="form-control-file"
                        onChange={onChange}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={8}>
                    <div className="form-group">
                      <label htmlFor="nombre_field">
                        Certificado de Consultor
                      </label>
                      <input
                        type="text"
                        id="nombre_field"
                        className="form-control"
                        value={nombre}
                        name="nombre"
                        placeholder="Ingresa el certificado"
                        onChange={onChange}
                      />
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="form-group">
                      <label htmlFor="archivo_field">Subir Archivo</label>
                      <input
                        type="file"
                        id="archivo_field"
                        className="form-control-file"
                        onChange={onChange}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={5}>
                    {/* Div para la vista previa de la imagen */}
                    <div className="form-group">
                      <label htmlFor="avatar_upload">Avatar</label>
                      <div className="d-flex align-items-center">
                        <div>
                          <figure className="avatar item-rtl">
                            <img
                              src={avatarPreview}
                              className="rounded-circle"
                              alt="Imagen Previa"
                            />
                          </figure>
                        </div>
                      </div>
                    </div>

                    {/* Div para el botón de carga del archivo */}
                    <div className="form-group">
                      <label htmlFor="avatar_upload">Subir Avatar</label>
                      <div className="custom-file">
                        <input
                          type="file"
                          name="avatar"
                          className="custom-file-input"
                          id="customFile"
                          accept="images/*"
                          onChange={onChange}
                        />
                        <label
                          className="custom-file-label"
                          htmlFor="customFile"
                        >
                          Elegir Avatar
                        </label>
                      </div>
                    </div>
                  </Col>
                  <Col md={5}>
                    {/* Div para la vista previa de la imagen */}
                    <div className="form-group">
                      <label htmlFor="avatar_upload">Avatar</label>
                      <div className="d-flex align-items-center">
                        <div>
                          <figure className="avatar item-rtl">
                            <img
                              src={avatarPreview}
                              className="rounded-circle"
                              alt="Imagen Previa"
                            />
                          </figure>
                        </div>
                      </div>
                    </div>

                    {/* Div para el botón de carga del archivo */}
                    <div className="form-group">
                      <label htmlFor="avatar_upload">Subir Avatar</label>
                      <div className="custom-file">
                        <input
                          type="file"
                          name="avatar"
                          className="custom-file-input"
                          id="customFile"
                          accept="images/*"
                          onChange={onChange}
                        />
                        <label
                          className="custom-file-label"
                          htmlFor="customFile"
                        >
                          Elegir Avatar
                        </label>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Button
                  variant="secondary"
                  onClick={handlePrev}
                  className="mr-2"
                >
                  Anterior
                </Button>
                <Button variant="primary" onClick={handleNext}>
                  Siguiente
                </Button>
              </Form>
            )}
          </Col>
          <Col
            md={6}
            className={`text-center ${step === 4 ? "d-none" : ""}`}
            id="body-login"
          >
            <h2 className="titulo">
              Bienvenido al portal de medicina alternativa
            </h2>
            <img
              className="img-fluid img-footer"
              src="/images/login.svg"
              alt="Bienvenido"
            />
          </Col>
        </Row>

        {step === 4 && (
          // Contenido adicional para el paso 4 (ocupa toda la pantalla)
          <Row className="mt-4">
            <Col md={12} className="text-center">
              <Form onSubmit={submitHandler}>
                {/* Campos de subida de documentos */}
                {/* ... */}
                <Button
                  variant="secondary"
                  onClick={handlePrev}
                  className="mr-2"
                >
                  Anterior
                </Button>
                <Button variant="primary" type="submit">
                  Enviar Registro
                </Button>
              </Form>
            </Col>
          </Row>
        )}
      </Container>
    </Fragment>
  );
};

export default Register;
