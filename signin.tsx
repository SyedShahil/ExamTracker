import React, { useState } from "react";
function Signin() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className="sign">
        <div className={`wrapper ${isActive ? "active" : ""}`}>
          <span className="bg-animate"></span>
          <span className="bg-animate2"></span>
          <div className="form-box login">
            <h2
              className="animation"
              style={{ "--i": 0, "--j": 21 } as React.CSSProperties}
            >
              Login
            </h2>
            <form action="#">
              <div
                className="input-box animation"
                style={{ "--i": 1, "--j": 22 } as React.CSSProperties}
              >
                <input type="text" required />
                <label>Username</label>
                <i className="bx bxs-user"></i>
              </div>
              <div
                className="input-box animation"
                style={{ "--i": 2, "--j": 23 } as React.CSSProperties}
              >
                <input type="password" required />
                <label>Password</label>
                <i className="bx bxs-lock-alt"></i>
              </div>
              <button
                type="submit"
                className="btn animation"
                style={{ "--i": 3, "--j": 24 } as React.CSSProperties}
              >
                Login
              </button>
              <div
                className="logreg-link animation"
                style={{ "--i": 4, "--j": 25 } as React.CSSProperties}
              >
                <p>
                  Don't have an account?{" "}
                  <a
                    href="#"
                    className="register-link"
                    onClick={() => setIsActive(true)}
                  >
                    Sign-Up
                  </a>
                </p>
              </div>
            </form>
          </div>
          <div className="info-text login">
            <h2
              className="animation"
              style={{ "--i": 0, "--j": 20 } as React.CSSProperties}
            >
              Welcome Back!
            </h2>
            <p
              className="animation"
              style={{ "--i": 1, "--j": 21 } as React.CSSProperties}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing.
            </p>
          </div>

          <div className="form-box register">
            <h2
              className="animation"
              style={{ "--i": 17, "--j": 0 } as React.CSSProperties}
            >
              Sign Up
            </h2>
            <form action="#">
              <div
                className="input-box animation"
                style={{ "--i": 18, "--j": 1 } as React.CSSProperties}
              >
                <input type="text" required />
                <label>Username</label>
                <i className="bx bxs-user"></i>
              </div>
              <div
                className="input-box animation"
                style={{ "--i": 19, "--j": 2 } as React.CSSProperties}
              >
                <input type="email" required />
                <label>Email</label>
                <i className="bx bxs-envelope"></i>
              </div>
              <div
                className="input-box animation"
                style={{ "--i": 20, "--j": 3 } as React.CSSProperties}
              >
                <input type="password" required />
                <label>Password</label>
                <i className="bx bxs-lock-alt"></i>
              </div>
              <button
                type="submit"
                className="btn animation"
                style={{ "--i": 21, "--j": 4 } as React.CSSProperties}
              >
                Sign Up
              </button>
              <div
                className="logreg-link animation"
                style={{ "--i": 22, "--j": 5 } as React.CSSProperties}
              >
                <p>
                  Already have an account?
                  <a
                    href="#"
                    className="register-link"
                    onClick={() => setIsActive(false)}
                  >
                    Login
                  </a>
                </p>
              </div>
            </form>
          </div>
          <div className="info-text register">
            <h2
              className="animation"
              style={{ "--i": 17, "--j": 0 } as React.CSSProperties}
            >
              Welcome Back!
            </h2>
            <p
              className="animation"
              style={{ "--i": 18, "--j": 1 } as React.CSSProperties}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Signin;
