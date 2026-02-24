'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto px-6 text-center z-10"
      >
        <motion.h1
          variants={itemVariants}
          className="font-heading text-6xl md:text-7xl text-white mb-6 leading-tight"
        >
          BERNIEWEB3
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="font-body text-lg md:text-xl text-white/90 mb-6"
        >
          Building Coordination Systems on Sui
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="font-body text-base md:text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Web3 Infrastructure & Tooling Builder focused on object-centric architecture, AI systems, and incentive-driven coordination models.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-semibold rounded-2xl px-8"
          >
            <Link href="#projects">View Projects</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10 font-semibold rounded-2xl px-8"
          >
            <Link href="#contact">Contact</Link>
          </Button>
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-white rounded-full filter blur-3xl"></div>
      </div>
    </section>
  );
}
