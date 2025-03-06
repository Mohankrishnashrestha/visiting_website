import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Destination from "./pages/Destination";
import Things from "./pages/Things";
import Event from "./pages/Event";
import About from "./pages/About";
import Header from "./components/Header";
import InnerHome from "./pages/home/InnerHome";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />
        <Route path="/home/:slug" element={<InnerHome />} />

        <Route path="/destination" element={<Destination />} />
        <Route path="/thingsToDO" element={<Things />} />
        <Route path="/festivelsAndEvents" element={<Event />} />
        <Route path="/AboutPokhara" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
