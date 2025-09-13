import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { AlertTriangle, RefreshCw, Home, Wifi, Database, Server } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Alert, AlertDescription } from '../components/ui/alert';
import { useI18n } from '../contexts/I18nContext';

type ErrorType = 'storage' | 'api' | 'server' | 'network' | 'generic';

interface ErrorPageProps {
  error?: Error;
  errorType?: ErrorType;
}

interface ErrorConfig {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  suggestions: string[];
}

export default function ErrorPage({ error, errorType = 'generic' }: ErrorPageProps) {
  const { t } = useI18n();

  const errorConfigs: Record<ErrorType, ErrorConfig> = {
    storage: {
      icon: Database,
      title: t('error.storage.title'),
      description: t('error.storage.description'),
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-950/20',
      suggestions: [
        'Check if local storage is enabled in your browser',
        'Clear your browser cache and cookies',
        'Try using an incognito/private browsing window',
        'Disable browser extensions that might block storage'
      ]
    },
    api: {
      icon: Wifi,
      title: t('error.api.title'),
      description: t('error.api.description'),
      color: 'text-red-600',
      bgColor: 'bg-red-50 dark:bg-red-950/20',
      suggestions: [
        'Check your internet connection',
        'Try refreshing the page',
        'Wait a few minutes and try again',
        'Contact support if the problem persists'
      ]
    },
    server: {
      icon: Server,
      title: t('error.500.title'),
      description: t('error.500.description'),
      color: 'text-red-600',
      bgColor: 'bg-red-50 dark:bg-red-950/20',
      suggestions: [
        'Try refreshing the page',
        'Wait a few minutes and try again',
        'Check our status page for service updates',
        'Contact support if the issue continues'
      ]
    },
    network: {
      icon: Wifi,
      title: 'Network Error',
      description: 'Unable to connect to the internet. Please check your network connection.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50 dark:bg-yellow-950/20',
      suggestions: [
        'Check your WiFi or ethernet connection',
        'Try switching to mobile data',
        'Restart your router or modem',
        'Contact your internet service provider'
      ]
    },
    generic: {
      icon: AlertTriangle,
      title: 'Something Went Wrong',
      description: error?.message || 'We encountered an unexpected error. Please try again.',
      color: 'text-gray-600',
      bgColor: 'bg-gray-50 dark:bg-gray-950/20',
      suggestions: [
        'Try refreshing the page',
        'Clear your browser cache',
        'Try again in a few minutes',
        'Contact support if the problem continues'
      ]
    }
  };

  const config = errorConfigs[errorType];
  const IconComponent = config.icon;

  const handleRefresh = () => window.location.reload();
  const handleRetry = () => (window.history.length > 1 ? window.history.back() : (window.location.href = '/'));

  return (
    <main className="flex-1 flex items-center justify-center px-4 py-16">
      <div className="text-center max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} className="mb-8">
          <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full ${config.bgColor} mb-6`}>
            <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
              <IconComponent className={`h-12 w-12 ${config.color}`} />
            </motion.div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mb-8">
          <h1 className="text-3xl font-bold mb-4">{config.title}</h1>
          <p className="text-lg text-muted-foreground mb-6">{config.description}</p>
        </motion.div>

        {error?.stack && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mb-8">
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="text-left">
                <strong>Technical Details:</strong>
                <br />
                {error.stack}
              </AlertDescription>
            </Alert>
          </motion.div>
        )}

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button onClick={handleRefresh} size="lg" className="group">
            <RefreshCw className="mr-2 h-4 w-4 transition-transform group-hover:rotate-180" />
            Refresh Page
          </Button>

          <Button onClick={handleRetry} variant="outline" size="lg">
            Try Again
          </Button>

          <Button asChild variant="ghost" size="lg">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
        </motion.div>
      </div>
    </main>
  );
}
