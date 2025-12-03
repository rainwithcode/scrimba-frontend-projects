import DeployIcon from "../../assets/deploy-icon.svg";
import "./card.css";

export default function Card({ children, title }) {
  return (
    <div className="card">
      <img className="card-icon" src={DeployIcon} />
      <span className="card-title">{title}</span>
      <p className="card-content">{children}</p>
    </div>
  );
}
