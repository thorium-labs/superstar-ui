import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

const Home = React.lazy(() => import("./pages/Home"));
const BuyTicket = React.lazy(() => import("./pages/BuyTicket"));
const About = React.lazy(() => import("./pages/About"));

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
