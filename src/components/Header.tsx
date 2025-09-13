// Header.tsx
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sun, Moon, Globe, Menu } from 'lucide-react';

import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { useTheme } from '../contexts/ThemeContext';
import { useI18n } from '../contexts/I18nContext';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { t, toggleLanguage, isRTL, language } = useI18n();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [response, setResponse] = useState('');

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.apply'), href: '/apply' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  const callOpenAI = async () => {
    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer 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', // 🔥 INSECURE for production!
        },
        body: JSON.stringify({
          model: 'gpt-5',
          messages: [
            {
              role: 'user',
              content: 'Write a one-sentence bedtime story about a unicorn.',
            },
          ],
        }),
      });

      const data = await res.json();
      setResponse(data.choices?.[0]?.message?.content || 'No response');
    } catch (error) {
      console.error('OpenAI Error:', error);
      setResponse('Error getting response.');
    }
  };

  useEffect(() => {
    // callOpenAI();
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground"
            >
              <span className="font-bold">S</span>
            </motion.div>
            <span className="hidden font-bold sm:inline-block">
              Support Portal
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`relative px-3 py-2 rounded-md transition-colors ${isActive(item.href)
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
                  }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-md bg-accent"
                    style={{ zIndex: -1 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* Show OpenAI Response */}
            <span className="text-xs text-muted-foreground hidden md:inline-block max-w-xs truncate">
              {response}
            </span>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label={t('aria.toggle_theme')}
              className="hover:bg-accent"
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {theme === 'light' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </motion.div>
            </Button>

            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              aria-label={t('aria.toggle_language')}
              className="hover:bg-accent"
            >
              <Globe className="h-5 w-5" />
              <span className="ml-1 text-xs">{language.toUpperCase()}</span>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden hover:bg-accent"
                  aria-label={t('aria.menu')}
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side={isRTL ? 'left' : 'right'} className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2 rounded-md transition-colors ${isActive(item.href)
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                        }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
