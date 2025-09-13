import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { I18nProvider } from './contexts/I18nContext';
import { Toaster } from './components/ui/sonner';
import { AnimatePresence } from 'motion/react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Layout from './components/Layout';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { Loader2 } from 'lucide-react';
const LandingPage = lazy(() => import('./pages/LandingPage'));
const ApplicationWizard = lazy(() => import('./pages/ApplicationWizard'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
export default function App() {
  return (

    <Provider store={store}>
      <I18nProvider>
        <Router>
          <ErrorBoundary>
            <ThemeProvider>
              <div className="size-full min-h-screen bg-background text-foreground">
                <AnimatePresence mode="wait">
                  <Suspense
                    fallback={
                      <div className="flex flex-col items-center justify-center min-h-screen">
                        <Loader2 className="h-8 w-8 animate-spin text-blue-500 mb-3" />
                        <p className="text-sm text-muted-foreground">Loading...</p>
                      </div>
                    }
                  >
                    <Routes>
                      <Route element={<Layout />}>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/apply" element={<ApplicationWizard />} />
                        <Route path="/error" element={<ErrorPage />} />
                      </Route>
                      <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                  </Suspense>

                </AnimatePresence>
                <Toaster />
              </div>
            </ThemeProvider>
          </ErrorBoundary>
        </Router>
      </I18nProvider>
    </Provider>

  );
}