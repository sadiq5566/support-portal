import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useI18n } from '../hooks/useI18n';

export default function NotFoundPage() {
  const { t } = useI18n();

  return (
    <main className="flex-1 flex items-center justify-center px-4 py-16">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative">
            <motion.h1
              className="text-9xl font-bold text-primary/20 select-none"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              404
            </motion.h1>

            {/* Floating elements */}
            <motion.div
              className="absolute top-4 left-1/4 w-8 h-8 bg-primary/10 rounded-full"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: 0.5,
              }}
            />

            <motion.div
              className="absolute bottom-4 right-1/4 w-6 h-6 bg-accent rounded-full"
              animate={{
                y: [0, -15, 0],
                rotate: [0, -180, -360],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                delay: 1,
              }}
            />
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold mb-4">
            {t('error.404.title')}
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            {t('error.404.description')}
          </p>
          <p className="text-muted-foreground">
            {t('error.404.additionalInfo')}
          </p>
        </motion.div>


        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button asChild size="lg" className="group">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              {t('error.404.goHome')}
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="group">
            <Link to="javascript:history.back()">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              {t('error.404.goBack')}
            </Link>
          </Button>
        </motion.div>

        {/* Help Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 pt-8 border-t"
        >
          <p className="text-sm text-muted-foreground mb-4">
            {t('error.404.popularPages')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="text-sm text-primary hover:underline transition-colors"
            >
              {t('error.404.home')}
            </Link>
            <Link
              to="/apply"
              className="text-sm text-primary hover:underline transition-colors"
            >
              {t('error.404.apply')}
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
