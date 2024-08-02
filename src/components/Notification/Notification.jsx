import React from "react";
import css from "./Notification.module.css";

const Notification = ({ notificationClass }) => {
  return (
    <div className={css[notificationClass]}>
      <p>No feedback yet</p>
    </div>
  );
};

export default Notification;
