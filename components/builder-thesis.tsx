'use client';

import { motion } from 'framer-motion';

export function BuilderThesis() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const theses = [
    'Systems over apps—infrastructure compounds.',
    'Coordination beats feature shipping.',
    'Sui object model enables parallel execution.',
    'Design for incentive alignment, not speculation.',
    'MVPs ship in 12–15 hours.',
  ];

  return (
    <section className="py-section px-6 bg-background">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="font-heading text-4xl md:text-5xl mb-12 text-foreground text-center"
        >
          Builder Thesis
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="bg-card border border-border rounded-3xl p-8 md:p-12"
        >
          <ul className="space-y-6">
            {theses.map((thesis, idx) => (
              <motion.li
                key={idx}
                variants={itemVariants}
                className="flex items-start gap-4"
              >
                <span className="text-primary font-bold text-xl mt-1 flex-shrink-0">
                  ✓
                </span>
                <p className="font-body text-lg leading-relaxed text-foreground">
                  {thesis}
                </p>
              </motion.li>
            ))}
          </ul>

          <motion.p
            variants={itemVariants}
            className="font-body text-base leading-relaxed text-muted-foreground mt-8 pt-8 border-t border-border"
          >
            Building on Sui means leveraging the object-centric data model to design systems where coordination, not just state management, is the differentiator. Every system I build is designed around incentive-aligned architecture, where participants benefit from collective outcomes.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
