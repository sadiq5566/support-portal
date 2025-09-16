import { motion } from 'motion/react';
import { useI18n } from '../hooks/useI18n';

export default function Footer() {
  const { t } = useI18n();


  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="border-t bg-background"
    >
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="flex flex-col items-center space-y-2 md:items-start">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <span className="font-bold">S</span>
              </div>
              <span className="font-bold">{t('supportPortal')}</span>
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              {t('hero.subtitle')}
            </p>
          </div>

        </div>

        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {t('rightsReserved')}
          </p>
        </div>
      </div>
    </motion.footer>
  );
}