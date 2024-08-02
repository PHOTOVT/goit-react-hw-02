import React from "react";
import css from "./Options.module.css";

const Options = ({ updateFeedback, buttonResetClass, resetFeedback }) => {
  return (
    <div className={css.optionsContainer}>
      <ul className={css.optionsList}>
        <li>
          <button
            className={css.optionGood}
            type="button"
            onClick={() => updateFeedback("good")}
          >
            Good
          </button>
        </li>
        <li>
          <button
            className={css.optionNeutral}
            type="button"
            onClick={() => updateFeedback("neutral")}
          >
            Neutral
          </button>
        </li>
        <li>
          <button
            className={css.optionBad}
            type="button"
            onClick={() => updateFeedback("bad")}
          >
            Bad
          </button>
        </li>
        <li>
          <button
            className={css[buttonResetClass]}
            type="button"
            onClick={resetFeedback}
          >
            Reset
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Options;
