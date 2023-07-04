// import { useState } from 'react'
import "./style.css";
import 'bootstrap/dist/css/bootstrap.css';

const Login = () => {
    
  const loginSubmit = () => {
    console.log("login clicked");
  };

  return (
    <>
      <section className="login-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 image-area">
              <img
                src="/images/login.jpg"
                alt="Login"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 form-area">
              <h2>Login</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <button
                  type="submit"
                  onClick={loginSubmit}
                  className="btn btn-primary w-100 mt-4"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
