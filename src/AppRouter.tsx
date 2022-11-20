import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));
const BuyTicket = React.lazy(() => import("./pages/BuyTicket"));
const About = React.lazy(() => import("./pages/About"));

const AppRouter: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ticket" element={<BuyTicket />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
