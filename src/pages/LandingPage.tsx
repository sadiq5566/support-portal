import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, CheckCircle, Sparkles, Shield, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ImageWithFallback } from '../components/fallback/ImageWithFallback';
import { useI18n } from '../hooks/useI18n';

export default function LandingPage() {
  const { t } = useI18n();
  const prefersReducedMotion = useReducedMotion();

  const features = [
    {
      icon: CheckCircle,
      title: t('features.step_by_step.title'),
      description: t('features.step_by_step.description'),
      image:
        'https://images.unsplash.com/photo-1552864471-e1f28411e2bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Sparkles,
      title: t('features.ai_help.title'),
      description: t('features.ai_help.description'),
      image:
        'https://images.unsplash.com/photo-1646583288948-24548aedffd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Shield,
      title: t('features.secure.title'),
      description: t('features.secure.description'),
      image:
        'https://images.unsplash.com/photo-1746370636321-7cf8cb49326c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Section */}
      <section
        role="banner"
        aria-label={t('landing.features_heading')}
        className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/20"
      >
        <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            {/* Hero Content */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.h1
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
              >
                {t('landing.features_heading')}
              </motion.h1>

              <motion.p
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mt-6 text-lg text-muted-foreground sm:text-xl"
              >
                {t('landing.features_subheading')}
              </motion.p>

              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
              >
                <Button asChild size="lg" className="group">
                  <Link to="/apply" aria-label="Start your application">
                    {t('hero.cta')}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={scrollToFeatures}
                  className="group"
                  aria-label="Learn more about our features"
                >
                  {t('hero.learn_more')}
                  <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1618218138128-8dc84f1ccc22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Illustration of financial support assistance"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                  aria-hidden="true"
                />
              </div>

              {/* Floating Cards */}
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -top-4 -right-4 bg-white dark:bg-card p-4 rounded-lg shadow-lg border"
                role="status"
                aria-label={t('landing.application_approved')}
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" aria-hidden="true" />
                  <span className="text-sm font-medium">{t('landing.application_approved')}</span>
                </div>
              </motion.div>

              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -bottom-4 -left-4 bg-white dark:bg-card p-4 rounded-lg shadow-lg border"
                role="status"
                aria-label={t('landing.ai_assistant_active')}
              >
                <div className="flex items-center space-x-2">
                  <Sparkles className="h-5 w-5 text-blue-500" aria-hidden="true" />
                  <span className="text-sm font-medium">{t('landing.ai_assistant_active')}</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        role="region"
        aria-labelledby="features-heading"
        className="py-20 bg-muted/30"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 id="features-heading" className="text-3xl font-bold sm:text-4xl">
              {t('landing.features_heading')}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t('landing.features_subheading')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="group h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="mb-4 overflow-hidden rounded-lg">
                      <ImageWithFallback
                        src={feature.image}
                        alt={`Feature: ${feature.title}`}
                        className="aspect-[16/9] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex items-center space-x-3 mb-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <feature.icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h3 className="font-semibold">{feature.title}</h3>
                    </div>

                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        role="complementary"
        aria-label="Call to action"
        className="py-20 bg-primary text-primary-foreground"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">
              {t('landing.cta_title')}
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              {t('landing.cta_description')}
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="group"
              >
                <Link to="/apply" aria-label="Start your application">
                  {t('hero.cta')}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
