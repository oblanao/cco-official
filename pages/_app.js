import React from "react";
import { AppHead } from "../components";
import "../css/index.css";

const Root = (props) => {
  const { Component, pageProps } = props;
  return (
    <>
      <AppHead />
      <Component {...pageProps} />
    </>
  );
};

export default Root;
