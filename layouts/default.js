import React, { Fragment } from "react";
import NextNprogress from 'nextjs-progressbar';
import Header from "@components/Header";
import Footer from "@components/Footer";

export const Layout = ({ children }) => {
  return (
    <Fragment>
      <NextNprogress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
        showOnShallow={true}
      />
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </Fragment>
  );
};