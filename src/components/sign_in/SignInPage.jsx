import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SignIn = () => {
  return (
    <div className="container-fluid vh-100 d-flex p-0">
      {/* Left side with image and ROHARY name */}
      <div className="col-md-6 d-none d-md-flex bg-dark text-white align-items-center justify-content-center position-relative">
        <div className="text-center">
        <img
          src="https://picsum.photos/400/400"
          alt="ROHARY branding"
          className="img-fluid mb-4 rounded"
          style={{ maxWidth: "250px" }}
        />
          <h1 className="display-4 fw-bold">ROHARY</h1>
        </div>
      </div>

      {/* Right side form */}
      <div className="col-md-6 d-flex align-items-center justify-content-center bg-light">
        <div className="w-75">
          <h2 className="mb-4 fw-bold text-center">Sign In</h2>
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

            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-lg">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
