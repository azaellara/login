import React from "react";

const Formulario = () => {
  return (
    <section className="container border border-primary rounded-2 p-3 ">
      <div>
        <div>
          <h2 className="text-center p-2">LOGIN</h2>
        </div>
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="User"
              name="user"
            />
          </div>
          <div className="row mb-3">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                name="firstName"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                name="lastName"
              />
            </div>
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email address"
              name="email"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Repeat password"
              name="repeatPassword"
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Formulario;
