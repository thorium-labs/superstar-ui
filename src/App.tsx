import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import Layout from "./components/Layout";
import AppProvider from "./providers/AppProvider";

const App: React.FC = () => {
  return (
    <AppProvider>
      <Suspense fallback={"loading..."}>
        <BrowserRouter>
          <Layout>
            <AppRouter />
          </Layout>
        </BrowserRouter>
      </Suspense>
    </AppProvider>
  );
};

export default App;
