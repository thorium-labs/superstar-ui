import React from "react";
import { Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("./modules/Home"));
const BuyTicket = React.lazy(() => import("./modules/BuyTicket"));
const About = React.lazy(() => import("./modules/About"));
const Results = React.lazy(() => import("./modules/Results"));

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ticket" element={<BuyTicket />} />
      <Route path="/results" element={<Results />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRouter;
