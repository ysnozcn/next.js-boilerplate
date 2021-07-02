import React from "react";

import "@styles/app.scss";
import "@styles/global.scss";

import { Provider } from "react-redux";
import { store } from "@redux";

export function reportWebVitals(metric) {
  console.log(metric)
}


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
