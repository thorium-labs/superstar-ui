import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';
import Layout from './components/Layout';
import { Spinner } from './components/Spinner';
import AppProvider from './providers/AppProvider';
import { Toaster } from 'react-hot-toast';

const App: React.FC = () => {
  return (
    <Suspense fallback={<Spinner className="min-w-screen min-h-screen" />}>
      <AppProvider>
        <BrowserRouter>
          <Layout>
            <AppRouter />
            <Toaster />
          </Layout>
        </BrowserRouter>
      </AppProvider>
    </Suspense>
  );
};

export default App;
