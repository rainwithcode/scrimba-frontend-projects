import { useState } from "react";
import "./App.css";
import Info from "./components/Info";
import About from "./components/About";
import avatarUrl from "./assets/images/rain.jpg";

function App() {
  return (
    <div className="container">
      <Info
        avatar={avatarUrl}
        name="Rain"
        website="https://rainkalugdan.vercel.app/"
        email="rainkalugdan@gmail.com"
        linkedin="https://www.linkedin.com/in/rain-kalugdan-98a457301/"
      />
      <About
        description="As a frontend developer, I’m passionate about creating accessible, minimalist web experiences that make everyday life simpler. 
      I believe that organized systems are essential for productivity and growth, and I’m always looking for new ways to make digital experiences easier and more enjoyable."
      />
    </div>
  );
}

export default App;
