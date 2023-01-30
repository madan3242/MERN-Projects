import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REG_USER_REQUEST,
    REG_USER_FAILURE,
    REG_USER_SUCCESS,
    GET_USER_INFO_REQUEST,
    GET_USER_INFO_FAILURE,
    GET_USER_INFO_SUCCESS,
    USER_LOGOUT,
} from "./user.action"

let initialState = {
    loading: false,
    user: null,
    token: null,
    isAuthenticated: false,
    errorMessage: null,
};

let userReducer = (state = initialState, action) => {
    let {type, payload} = action;
    switch (type) {
        case REG_USER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case REG_USER_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case REG_USER_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: payload,
            };
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case LOGIN_SUCCESS:
            localStorage.setItem("token", payload.token);
            return {
                ...state,
                loading: false,
                token: payload.token,
                isAuthenticated: true,
            };
        case LOGIN_FAILURE:
            localStorage.removeItem("token");
            return {
                ...state,
                loading: false,
                token: null,
                isAuthenticated: false,
                errorMessage: payload,
            }
        case USER_LOGOUT:
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            return {
                ...state,
                loading: false,
                token: null,
                isAuthenticated: false,
                user: null,
            }
        case GET_USER_INFO_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GET_USER_INFO_SUCCESS:
            localStorage.setItem("user", JSON.stringify(payload));
            return {
                ...state,
                loading: false,
                user: payload,
                isAuthenticated: true
            }
        case GET_USER_INFO_FAILURE:
            localStorage.removeItem("user");
            return {
                ...state,
                loading: false,
                errorMessage:payload,
                user: null,
            };
        default:
            return state;
    }
}

export default userReducer;