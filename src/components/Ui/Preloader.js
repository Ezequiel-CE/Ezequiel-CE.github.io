import React from "react";
import styles from "./Preloader.module.css";
import spinner from "../../assets/spinner.svg";

const Preloader = ({ load }) => {
  return (
    <div id={load ? styles.preloader : styles.preloaderNone}>
      <img className="spinner" src={spinner} alt="spinner" />
    </div>
  );
};

export default Preloader;
