import React, { Suspense } from "react";
import AppRouter from "./AppRouter";
import AppProvider from "./providers/AppProvider";

const App: React.FC = () => {
  return (
    <AppProvider>
      <Suspense fallback={"loading..."}>
        <AppRouter />
      </Suspense>
    </AppProvider>
  );
};

export default App;
