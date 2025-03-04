import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Things from "./pages/Things";
import Event from "./pages/Event";
import About from "./pages/About";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/thingsToDO" element={<Things />} />
        <Route path="/festivelsAndEvents" element={<Event />} />
        <Route path="/AboutPokhara" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
