import { useState } from "react";
import "./App.css";
import Info from "./components/Info";
import avatarUrl from "./assets/images/rain.jpg";

function App() {
  return (
    <>
      <Info
        avatar={avatarUrl}
        name="Rain"
        website="https://rainkalugdan.vercel.app/"
        email="rainkalugdan@gmail.com"
        linkedin="linkedin.com/in/rain-kalugdan-98a457301"
      />
    </>
  );
}

export default App;
