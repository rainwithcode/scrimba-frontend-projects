import { useState } from "react";

import Badge from "./components/badges/Badge";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";

import "./App.css";

export default function App() {
  const badgeColors = [
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
  ];

  const badgeTypes = ["square", "pill"];

  return (
    <div className="container">
      <Header />
      <main>
        {/* --- Badges --- */}
        {/* Display square and pill badges */}
        {badgeTypes.map((shape) => (
          <div>
            <h2 className="component-title">
              {shape.charAt(0).toUpperCase() + shape.slice(1)} Badges
            </h2>
            <div className="badge-grid">
              {badgeColors.map((color) => (
                <Badge shape={shape} color={color} key={`${color}-${shape}`} />
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
