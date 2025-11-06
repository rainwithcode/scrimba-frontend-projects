import { useState } from "react";
import "./App.css";
import Info from "./components/Info";
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
    </div>
  );
}

export default App;
