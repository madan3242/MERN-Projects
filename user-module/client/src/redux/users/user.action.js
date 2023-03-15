import axios from "axios";
import { setAlert } from "../layout/layout.action";
import { setAuthToken } from "../auth/setAuthToken";

const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";

const REG_USER_REQUEST = "REG_USER_REQUEST";
const REG_USER_SUCCESS = "REG_USER_SUCCESS";
const REG_USER_FAILURE = "REG_USER_FAILURE";

const GET_USER_INFO_REQUEST = "GET_USER_INFO_REQUEST";
const GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS";
const GET_USER_INFO_FAILURE = "GET_USER_INFO_FAILURE";

const USER_LOGOUT = "USER_LOGOUT";

let getLogin = (user, navigate) => {
    return async (dispatch) => {
        try {
            dispatch({ type: LOGIN_REQUEST });
            let config = {
                headers: {
                    "content-type": "application/json",
                },
            };
            let response = await axios.post(
                `http://127.0.0.1:4000/user/login`,
                JSON.stringify(user),
                config
            );
            dispatch({ type: LOGIN_SUCCESS, payload: response.data });

            dispatch(setAlert("Login Success", "success"));

            if (localStorage.token) {
                dispatch(getUserInfo());
            }

            navigate("/");
        } catch (error) {
            dispatch({ type: LOGIN_FAILURE, payload: error });
        }
    }
}

let getRegistration = (user, navigate) => {
    //return type and payload
    return async (dispatch) => {
        try {
            dispatch({ type: REG_USER_REQUEST});
            //We need to consume backend api
            let config = {
                headers: {
                    "content-type": "application/json",
                },
            };
            let response = await axios.post(
                `http://127.0.0.1:4000/user/register`,
                JSON.stringify(user),
                config
            );

            dispatch({ type: REG_USER_SUCCESS, payload: response.data });
            //setAlert Action will invoke
            dispatch(setAlert("Registration Success", "success"));

            navigate("/users/login");
        } catch (error) {
            dispatch({ type: REG_USER_FAILURE, payload: error });
        }
    }
}

let logoutAction = (navigate) => {
    return (dispatch) => {
        dispatch({ type: USER_LOGOUT });
        navigate(`/users/login`);
    }
}

let getUserInfo = () => {
    return async (dispatch) => {
        try {
            if (localStorage.token) {
                setAuthToken(localStorage.getItem("token"));
            }
            dispatch({ type: GET_USER_INFO_REQUEST });
            let response = await axios.get(`http://127.0.0.1:4000/user/`);

            dispatch({ type: GET_USER_INFO_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: GET_USER_INFO_FAILURE, payload: error });
        }
    }
}

export {
    getRegistration,
    getLogin,
    USER_LOGOUT,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REG_USER_FAILURE,
    REG_USER_REQUEST,
    REG_USER_SUCCESS,
    GET_USER_INFO_FAILURE,
    GET_USER_INFO_REQUEST,
    GET_USER_INFO_SUCCESS,
    getUserInfo,
    logoutAction,
};