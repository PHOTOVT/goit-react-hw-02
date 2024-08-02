import React from "react";
import css from "./Feedback.module.css";

const Feedback = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedback,
  feedbackClass,
}) => {
  return (
    <div className={css[feedbackClass]}>
      <ul className={css.feedbackList}>
        <li className={css.feedbackGood}>Good: {good}</li>
        <li className={css.feedbackNeutral}>Neutral: {neutral}</li>
        <li className={css.feedbackBad}>Bad: {bad}</li>
        <li className={css.feedbackTotal}>Total: {totalFeedback}</li>
        <li className={css.feedbackPositive}>Positive: {positiveFeedback}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
