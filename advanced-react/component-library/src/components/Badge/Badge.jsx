import "./badge.css";

export default function Badge({ children, shape = "square", color = "gray" }) {
  return <span className={`badge ${color} ${shape}`}>{children}</span>;
}
