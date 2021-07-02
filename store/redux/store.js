// #region Global Imports
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
// #endregion Global Imports

// #region Local Imports
import Reducers from "./reducers";
// #endregion Local Imports

export const store = createStore(
    Reducers,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
);
