import React, { Suspense } from "react";
import AppRouter from "./AppRouter";

const App: React.FC = () => {
  return (
    <Suspense fallback={"loading..."}>
      <AppRouter />
    </Suspense>
  );
};

export default App;
