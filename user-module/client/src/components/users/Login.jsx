import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getLogin } from "../../redux/users/user.action";

const Login = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [user, setUser] = useState({
    email: "",
    password: "",
  });

  let inputHandler = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };
  let submitHandler = (event) => {
    event.preventDefault();
    dispatch(getLogin(user, navigate));
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
                  Login
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
                  <h4 className="text-white">Login Here</h4>
                </div>
                <div className="card-body">
                  <form onSubmit={submitHandler}>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="form-control"
                        onChange={inputHandler}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        onChange={inputHandler}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        value="Login"
                        className="form-control btn btn-primary"
                      />
                    </div>
                  </form>

                  <small className="font-weight-bold">
                    Don't ! ?{" "}
                    <Link to="/users/register">
                      <i className="fa fa-sign-n-alt mr-2" />
                      Register
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

export default Login;
