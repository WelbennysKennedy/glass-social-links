import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import SocialLinksCard from "./components/SocialLinksCard";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<SocialLinksCard />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
