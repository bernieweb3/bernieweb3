'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export function CurrentlyBuilding() {
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

  const projects = [
    {
      title: 'AirDAO',
      position: 'Decentralized Environmental Data Cooperative on Sui',
      core: [
        'Hardware → OCR → Human review → On-chain record',
        'Revenue-sharing dataset ownership (no token speculation)',
        'Rotating advisory council governance',
        'District leaderboard',
        'Clean Streak behavioral incentive model',
      ],
      vision: 'Pre-seed startup pitch: Creating aligned ownership in environmental monitoring through incentive design.',
    },
    {
      title: 'AtWork Simulator',
      position: 'AI-Powered Tech Workplace Simulation',
      core: [
        'Gather-inspired interface for immersive learning',
        'Real-world internship scenarios',
        'Anxiety reduction through safe practice',
        'AI-driven feedback system',
        'Career readiness assessment',
      ],
      vision: 'Reducing student anxiety before internships through realistic, supportive simulation environments.',
    },
  ];

  return (
    <section className="py-section px-6 bg-card border-t border-border">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="font-heading text-4xl md:text-5xl mb-16 text-foreground text-center"
        >
          Currently Building
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full bg-background border border-border rounded-3xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="font-heading text-2xl text-primary mb-2">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-6 uppercase tracking-wide">
                  {project.position}
                </p>

                <div className="mb-6 space-y-3">
                  {project.core.map((point, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-primary font-bold flex-shrink-0 mt-0.5">
                        →
                      </span>
                      <p className="font-body text-sm text-foreground leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="font-body text-xs text-muted-foreground mb-2 uppercase tracking-wide">
                    Vision
                  </p>
                  <p className="font-body text-sm text-foreground leading-relaxed italic">
                    {project.vision}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
