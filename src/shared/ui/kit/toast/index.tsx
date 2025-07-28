import React from "react";
import { ToastContentProps } from "react-toastify";

import styles from "./toast.module.scss";
import Icon from "../icon";

export type ToastState = "info" | "warning" | "success" | "error";

export interface ToastProps {
  state: ToastState;
  text: string;
}

const Toast = ({ text, state, closeToast }: ToastProps & ToastContentProps) => {
  const handleClose = () => {
    if (closeToast) {
      closeToast();
    }
  };

  return (
    <div className={styles.toast}>
      <Icon name={state} className={styles.toast__icon} />
      <div className={styles.toast__text}>{text}</div>
      <hr className={styles.toast__separator} />
      <button
        className={styles.toast__closeButton}
        onClick={handleClose}
        type="button"
        aria-label="Закрыть уведомление"
      >
        <Icon name="closeCross" className={styles.toast__closeButton__icon} />
      </button>
    </div>
  );
};

export default Toast;
