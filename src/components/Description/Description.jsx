import React from "react";
import css from "./Description.module.css";

const Description = () => {
  return (
    <div className={css.descriptionContainer}>
      <h1 className={css.cafeName}>Sip Happens Café</h1>
      <p className={css.cafeDescription}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Description;
