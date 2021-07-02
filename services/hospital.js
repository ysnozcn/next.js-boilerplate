// #region Global Imports
import "isomorphic-unfetch";
import { stringify } from "query-string";


const BaseUrl = `${process.env.apiUrl}`;
export const Http = {
  Request: (methodType, url, params, body, headers) => {

    return new Promise((resolve, reject) => {
      const query = params
        ? `?${stringify({
          ...params
        })}`
        : "";

      const body = (methodType === "POST") ? stringify(body) : null;
      fetch(`${BaseUrl}${url}${query}`, {
        body: body,
        cache: "no-cache",
        headers: {
          "content-type": "application/json",
          "Accept-Language": headers.locale,
          "Authorization": process.env.token,
        },
        method: `${methodType}`,
      })
        .then(async (response) => {
          if (response.status === 200) {
            return response.json().then(resolve);
          }
          return reject(response);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
};
