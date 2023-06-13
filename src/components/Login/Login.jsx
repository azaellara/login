import React from "react";
import logo from "../../assets/logo-pestaña.png";
import facebook from "../../assets/facebook.png";
import google from "../../assets/google.png";
import background from "../../assets/background.webp";

const Login = () => {
  return (
    <div className="container w-75 bg-dark mt-5 rounded shadow">
      <div className="row align-items-stretch">
        <div
          className="col d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded"
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="col bg-dark p-5 rounded-end ">
          <div className="text-end">
            <img src={logo} width="30" alt="logo" />
          </div>
          <h2 className="fw-bold text-center py-5 text-light">Welcome</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="form-label text-light">
                Email
              </label>
              <input type="email" className="form-control " name="email" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="form-label text-light">
                Password
              </label>
              <input
                type="password"
                className="form-control "
                name="password"
              />
            </div>
            <div className="mb-4 form-check">
              <input
                type="checkbox"
                name="connected"
                className="form-check-input text-light"
                id=""
              />
              <label
                htmlFor="connected"
                className="form-check-label text-light"
              >
                Mantenerme conectado
              </label>
            </div>
            <div className="d-grid">
              <button type="submid" className="btn btn-primary">
                Iniciar sesión
              </button>
              <div className="my-3">
                <span className="text-light">
                  No tienes cuenta? <a href="#"> Regístrate</a>
                </span>
                <br />
                <span>
                  <a href="#">Recuperar Password</a>
                </span>
              </div>
            </div>
          </form>
          <div className="container w-100 my-5">
            <div className="row text-center">
              <div className="col-12 text-light">Iniciar sesión</div>
            </div>
            <div className="row">
              <div className="col">
                <button className="btn btn-outline-primary w-100 my-1">
                  <div className="row align-items-center">
                    <div className="col-2 d-none d-md-block">
                      <img src={facebook} alt="facebook" />
                    </div>
                    <div className="col-12 col-md-10 text-center">Facebook</div>
                  </div>
                </button>
              </div>
              <div className="col">
                <button className="btn btn-outline-danger w-100 my-1">
                  <div className="row align-items-center">
                    <div className="col-2 d-none d-md-block">
                      <img src={google} alt="google" />
                    </div>
                    <div className="col-12 col-md-10 text-center">Google</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
