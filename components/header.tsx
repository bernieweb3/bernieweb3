'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-sm bg-background/80 border-b border-border/50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="#" className="font-heading text-sm text-primary hover:text-primary/80 transition-colors">
          BernieWeb3
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#projects"
            className="font-body text-sm text-foreground hover:text-primary transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="font-body text-sm text-foreground hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>

        <Button
          size="icon"
          variant="ghost"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="rounded-lg"
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </Button>
      </div>
    </motion.header>
  );
}
