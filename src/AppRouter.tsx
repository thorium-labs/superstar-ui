import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

const Home = React.lazy(() => import("./modules/Home"));
const BuyTicket = React.lazy(() => import("./modules/BuyTicket"));
const About = React.lazy(() => import("./modules/About"));

const AppRouter: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ticket" element={<BuyTicket />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default AppRouter;
