import { useState } from "react";

import Badge from "./components/badge/Badge";
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

  const banners = [
    {
      status: "success",
      title: "Congratulations!",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.",
    },
    {
      status: "warning",
      title: "Attention",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.",
    },
    {
      status: "error",
      title: "There is a problem with your application",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.",
    },
    {
      status: "neutral",
      title: "Update available",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.",
    },
  ];

  const bannerVariants = ["multiline", "single"];

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
                  key={`badge-${shapeVariant}-${color}`}
                />
              ))}
            </div>
          </div>
        ))}
        {/* --- Banners --- */}
        {/* Display multiline and single banners */}
        {bannerVariants.map((lineVariant) => (
          <div>
            <h2 className="component-title">
              {lineVariant.charAt(0).toUpperCase() + lineVariant.slice(1)}{" "}
              Banners
            </h2>
            <div className="banner-grid">
              {banners.map((banner) => (
                <Banner
                  variant={lineVariant}
                  status={banner.status}
                  title={banner.title}
                  {...(lineVariant === "multiline"
                    ? { message: banner.message }
                    : {})}
                  key={`banner-${lineVariant}-${banner.status}`}
                />
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
