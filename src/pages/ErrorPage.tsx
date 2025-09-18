import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { AlertTriangle, RefreshCw, Home, Wifi, Database, Server } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Alert, AlertDescription } from '../components/ui/alert';
import { useI18n } from '../hooks/useI18n';
import { ERROR_TYPES, ErrorType } from '../constants/constant';

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

export default function ErrorPage({ error, errorType = ERROR_TYPES.GENERIC }: ErrorPageProps) {
  const { t } = useI18n();
  const navigate = useNavigate();

  const errorConfigs: Record<ErrorType, ErrorConfig> = {
    [ERROR_TYPES.STORAGE]: {
      icon: Database,
      title: t('error.storage.title'),
      description: t('error.storage.description'),
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-950/20',
      suggestions: [
        t('error.storage.suggestion1'),
        t('error.storage.suggestion2'),
        t('error.storage.suggestion3'),
        t('error.storage.suggestion4'),
      ],
    },
    [ERROR_TYPES.API]: {
      icon: Wifi,
      title: t('error.api.title'),
      description: t('error.api.description'),
      color: 'text-red-600',
      bgColor: 'bg-red-50 dark:bg-red-950/20',
      suggestions: [
        t('error.api.suggestion1'),
        t('error.api.suggestion2'),
        t('error.api.suggestion3'),
        t('error.api.suggestion4'),
      ],
    },
    [ERROR_TYPES.SERVER]: {
      icon: Server,
      title: t('error.500.title'),
      description: t('error.500.description'),
      color: 'text-red-600',
      bgColor: 'bg-red-50 dark:bg-red-950/20',
      suggestions: [
        t('error.500.suggestion1'),
        t('error.500.suggestion2'),
        t('error.500.suggestion3'),
        t('error.500.suggestion4'),
      ],
    },
    [ERROR_TYPES.NETWORK]: {
      icon: Wifi,
      title: t('error.network.title'),
      description: t('error.network.description'),
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50 dark:bg-yellow-950/20',
      suggestions: [
        t('error.network.suggestion1'),
        t('error.network.suggestion2'),
        t('error.network.suggestion3'),
        t('error.network.suggestion4'),
      ],
    },
    [ERROR_TYPES.GENERIC]: {
      icon: AlertTriangle,
      title: t('error.generic.title'),
      description: error?.message || t('error.generic.description'),
      color: 'text-gray-600',
      bgColor: 'bg-gray-50 dark:bg-gray-950/20',
      suggestions: [
        t('error.generic.suggestion1'),
        t('error.generic.suggestion2'),
        t('error.generic.suggestion3'),
        t('error.generic.suggestion4'),
      ],
    },
  };

  const config = errorConfigs[errorType];
  const IconComponent = config.icon;

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

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
                <strong>{t("technical_detail")}:</strong>
                <br />
                {error.stack}
              </AlertDescription>
            </Alert>
          </motion.div>
        )}

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button onClick={handleRefresh} size="lg" className="group">
            <RefreshCw className="mr-2 h-4 w-4 transition-transform group-hover:rotate-180" />
            {t("refresh_page")}
          </Button>

          <Button onClick={handleGoHome} variant="ghost" size="lg">
            <Home className="mr-2 h-4 w-4" />
            {t("go_home")}
          </Button>
        </motion.div>
      </div>
    </main>
  );
}