// #region Local Imports
import { GET_HOSPITALS, GET_HOSPITAL } from "@actions";

const INITIAL_STATE = {
    hospital: {
        version: 1,
    },
    image: {
        url: "",
    },
};

export const HospitalReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_HOSPITALS:
            return {
                ...state,
                ...action.payload,
            };

        case GET_HOSPITAL:
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
};
