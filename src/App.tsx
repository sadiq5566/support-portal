import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { I18nProvider } from './contexts/I18nContext';
import { Toaster } from './components/ui/sonner';
import { AnimatePresence } from 'motion/react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import Loader from './components/ui/Loader';
import Layout from './layout/Layout';
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
                  <Suspense fallback={<Loader />}>
                    <Routes>
                      <Route element={<Layout />}>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/apply" element={<ApplicationWizard />} />
                        <Route path="/error" element={<ErrorPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                      </Route>
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