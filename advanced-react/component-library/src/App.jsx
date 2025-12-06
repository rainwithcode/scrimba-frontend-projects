import { useState } from "react";

import Badge from "./components/Badge/Badge";
import Banner from "./components/Banner/Banner";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Testimonial from "./components/Testimonial/Testimonial";

import testimonialDesktopUrl from "./assets/testimonial-desktop.png";
import testimonialMobileUrl from "./assets/testimonial-mobile.png";
import workcationLogoUrl from "./assets/workcation-logo.png";

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

  const testimonial = {
    imageMobile: testimonialMobileUrl,
    imageDesktop: testimonialDesktopUrl,
    author: "May Andersons",
    company: "Workcation",
    role: "CTO",
    companyLogo: workcationLogoUrl,
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.",
  };

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
                  shape={shapeVariant}
                  color={color}
                  key={`badge-${shapeVariant}-${color}`}
                >
                  Badge
                </Badge>
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
                  layout={lineVariant}
                  status={banner.status}
                  title={banner.title}
                  key={`banner-${lineVariant}-${banner.status}`}
                >
                  {lineVariant === "multiline" ? banner.message : null}
                </Banner>
              ))}
            </div>
          </div>
        ))}
        {/* --- Card --- */}
        {/* Display card in default and hover state */}
        <h2 className="component-title">Responsive Card</h2>
        <Card title="Easy Deployment">
          Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
          magna sit morbi lobortis.
        </Card>
        {/* --- Testimonials --- */}
        {/* Display testimonials with and without photos */}
        <h2 className="component-title">Testimonials</h2>
        <Testimonial
          imageMobile={testimonial.imageMobile}
          imageDesktop={testimonial.imageDesktop}
          author={testimonial.author}
          company={testimonial.company}
          role={testimonial.role}
        >
          {testimonial.testimonial}
        </Testimonial>
      </main>
    </div>
  );
}
