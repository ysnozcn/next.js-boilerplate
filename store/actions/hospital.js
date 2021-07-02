// import { API } from "@services";

export const GET_HOSPITALS = "GET_HOSPITALS";
export const GET_HOSPITAL = "GET_HOSPITAL";

import { Dispatch } from "redux";

export const HospitalActions = {
    GetHospitals: (payload) => async (dispatch) => {
        console.log(payload);
        // const result = await PlanetaryService.GetPlanetImage({
        //     params: payload.params,
        // });

        let result = "sss";

        console.log(payload);

        dispatch({
            payload: {
                image: result,
            },
            type: GET_HOSPITALS,
        });
    },
};
