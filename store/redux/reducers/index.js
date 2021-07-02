// #region Global Imports
import { combineReducers } from "redux";
// #endregion Global Imports

// #region Local Imports
import { HospitalReducer } from "./hospitals";
// #endregion Local Imports

export default combineReducers({
    hospital: HospitalReducer,
});
