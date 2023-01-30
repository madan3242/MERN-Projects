import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getRegistration } from "../../redux/users/user.action";

const Register = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  let [userError, setUserError] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
  });

  let nameHandler = (event) => {
    setUser({ ...user, name: event.target.value });
    let regExp = /^[a-zA-Z0-9]{5,10}$/;
    if (regExp.test(event.target.value)) {
      setUserError({ ...userError, nameError: "" });
    } else {
      setUserError({ ...userError, nameError: "Enter a proper Name" });
    }
  };

  let emailHandler = (event) => {
    setUser({ ...user, email: event.target.value });
    let regExp = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
    if (regExp.test(event.target.value)) {
      setUserError({ ...userError, emailError: "" });
    } else {
      setUserError({ ...userError, emailError: "Enter a proper Email" });
    }
  };

  let passwordHandler = (event) => {
    setUser({ ...user, password: event.target.value });
    let regExp = /^[a-zA-Z]\w{3,14}$/;
    if (regExp.test(event.target.value)) {
      setUserError({ ...userError, passwordError: "" });
    } else {
      setUserError({ ...userError, passwordError: "Enter a proper Password" });
    }
  };

  let registrationHandler = (event) => {
    event.preventDefault();
    dispatch(getRegistration(user, navigate));
  };

  return (
    <Fragment>
      <section className="p-3 bg-warning">
        <div className="container">
          <div className="row animated flipInY">
            <div className="col">
              <div className="h3">
                <p>
                  <i className="fa fa-sign-in-alt mr-2" />
                  Register
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-4 m-auto">
              <div className="card animated jello">
                <div className="card-header bg-dark">
                  <h4 className="text-white">Register Here</h4>
                </div>
                <div className="card-body">
                  <form onSubmit={registrationHandler}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        required
                        name="name"
                        value={user.name}
                        onChange={nameHandler}
                      />
                      {userError.nameError ? (
                        <small className="text-danger">
                          {userError.nameError}
                        </small>
                      ) : (
                        ""
                      )}
                      {1 ? "" : ""}
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        name="email"
                        value={user.email}
                        onChange={emailHandler}
                      />
                      {userError.emailError ? (
                        <small className="text-danger">
                          {userError.emailError}
                        </small>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        required
                        name="password"
                        value={user.password}
                        onChange={passwordHandler}
                      />
                      {userError.passwordError ? (
                        <small className="text-danger">
                          {userError.passwordError}
                        </small>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        value="Register"
                        className="form-control btn btn-primary"
                      />
                    </div>
                  </form>

                  <small className="font-weight-bold">
                    Have Account ! ?{" "}
                    <Link to="/users/login">
                      <i className="fa fa-sign-n-alt mr-2" />
                      Login
                    </Link>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Register;
