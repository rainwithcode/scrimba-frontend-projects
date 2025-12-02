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

  const badgeVariants = ["square", "pill"];

  return (
    <div className="container">
      <Header />
      <main>
        {/* --- Badges --- */}
        {/* Display square and pill badges */}
        {badgeVariants.map((shapeVariant) => (
          <div>
            <h2 className="component-title">
              {shapeVariant.charAt(0).toUpperCase() + shapeVariant.slice(1)}{" "}
              Badges
            </h2>
            <div className="badge-grid">
              {badgeColors.map((color) => (
                <Badge
                  shapeVariant={shapeVariant}
                  color={color}
                  key={`${color}-${shapeVariant}`}
                />
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
