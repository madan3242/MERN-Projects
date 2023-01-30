import { combineReducers } from "@reduxjs/toolkit";
import alertReducer from "./layout/layout.reducer";
import userReducer from "./users/user.reducer";

let rootReducer = combineReducers({
    userData: userReducer,
    alert: alertReducer,
});

export { rootReducer };