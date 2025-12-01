import React from "react";
import "./badge.css";

export default function Badge({
  shape = "square",
  color = "gray",
  text = "Badge",
}) {
  return <span className={`badge ${color} ${shape}`}>{text}</span>;
}
