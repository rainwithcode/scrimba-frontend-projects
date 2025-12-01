import { useState } from "react";

import Header from "./components/header/Header";
import Badge from "./components/badges/Badge";
import Banner from "./components/banner/Banner";

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

  return (
    <div className="container">
      <Header />
      <main>
        {/* --- Badges --- */}
        <div>
          <h2 className="component-title">Square Badges</h2>
          <div className="badge-grid">
            {badgeColors.map((color) => (
              <Badge shape="square" color={color} key={`${color}-square`} />
            ))}
          </div>
          <h2 className="component-title">Pill Badges</h2>
          <div className="badge-grid">
            {badgeColors.map((color) => (
              <Badge shape="pill" color={color} key={`${color}-pill`} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
