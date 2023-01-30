import { configureStore, applyMiddleware} from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

import { composeWithDevTools } from "@redux-devtools/extension";

import { logger } from "redux-logger";
import thunk from "redux-thunk";

let middleware = [logger, thunk];

let store = configureStore({
    reducer: rootReducer,
}, composeWithDevTools(applyMiddleware(...middleware)));

export { store }