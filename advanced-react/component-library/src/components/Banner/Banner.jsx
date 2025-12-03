import ErrorIcon from "../../assets/error-icon.svg";
import InfoIcon from "../../assets/info-icon.svg";
import SuccessIcon from "../../assets/success-icon.svg";
import WarningIcon from "../../assets/warning-icon.svg";

import "./banner.css";

const defaultIcons = {
  error: ErrorIcon,
  neutral: InfoIcon,
  success: SuccessIcon,
  warning: WarningIcon,
};

export default function Banner({
  children,
  layout = "single",
  status = "neutral",
  title = "Update available",
}) {
  return (
    <div className={`banner ${layout} ${status}`}>
      <div className="banner-header">
        <img src={defaultIcons[status]} aria-hidden="true" />
        <span className="banner-title">{title}</span>
      </div>
      {children && <p className="banner-message">{children}</p>}
    </div>
  );
}
