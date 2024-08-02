import { useState, useEffect } from "react";

import "./App.css";

import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

function App() {
  const [options, setOptions] = useState(() => ({
    good: Number(localStorage.getItem("good")) ?? 0,
    neutral: Number(localStorage.getItem("neutral")) ?? 0,
    bad: Number(localStorage.getItem("bad")) ?? 0,
  }));

  useEffect(() => {
    localStorage.setItem("good", options.good);
    localStorage.setItem("neutral", options.neutral);
    localStorage.setItem("bad", options.bad);
  }, [options]);

  const updateFeedback = (feedbackType) => {
    setOptions({ ...options, [feedbackType]: options[feedbackType] + 1 });
  };

  const resetFeedback = () => {
    setOptions({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = options.good + options.neutral + options.bad;
  const positiveFeedback = Math.round((options.good / totalFeedback) * 100);

  const feedbackClass = totalFeedback > 0 ? "showFeedback" : "hideFeedback";
  const notificationClass =
    totalFeedback > 0 ? "hideNotification" : "showNotification";
  const buttonResetClass = totalFeedback > 0 ? "showButton" : "hideButton";

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        buttonResetClass={buttonResetClass}
        resetFeedback={resetFeedback}
      />
      <Feedback
        good={options.good}
        neutral={options.neutral}
        bad={options.bad}
        totalFeedback={totalFeedback}
        feedbackClass={feedbackClass}
        positiveFeedback={positiveFeedback}
      />
      <Notification notificationClass={notificationClass} />
    </>
  );
}

export default App;
