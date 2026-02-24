'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export function CommunitiesBuilt() {
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

  const communities = [
    {
      name: 'DevPros',
      description: 'Competitive tech team with 10+ competition participations',
      focus: 'Multi-disciplinary problem solving across hackathons and innovation challenges',
      impact: 'Ecosystem multiplier through shared learning and execution capability',
    },
    {
      name: 'HackOn Team',
      description: 'Global hackathon student team with international reach',
      focus: 'Cross-border collaboration and rapid prototyping',
      impact: 'Built network spanning Asia-Pacific tech ecosystem',
    },
    {
      name: 'Phu Nhuan Builder',
      description: 'Builder club in Ho Chi Minh City focused on infrastructure',
      focus: 'Local infrastructure & Web3 knowledge transfer',
      impact: "Strengthening Ho Chi Minh City's tech builder culture",
    },
  ];

  return (
    <section className="py-section px-6 bg-card border-y border-border">
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
          Communities Built
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {communities.map((community, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full bg-background border border-border rounded-3xl p-6 hover:shadow-lg transition-shadow flex flex-col">
                <h3 className="font-heading text-xl text-primary mb-3">
                  {community.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-4 italic">
                  {community.description}
                </p>

                <div className="space-y-4 flex-1">
                  <div>
                    <p className="font-body text-xs text-muted-foreground uppercase tracking-wide mb-1">
                      Focus
                    </p>
                    <p className="font-body text-sm text-foreground">
                      {community.focus}
                    </p>
                  </div>
                  <div>
                    <p className="font-body text-xs text-muted-foreground uppercase tracking-wide mb-1">
                      Impact
                    </p>
                    <p className="font-body text-sm text-foreground">
                      {community.impact}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-12 p-8 bg-background border border-border rounded-3xl"
        >
          <p className="font-body text-center text-foreground leading-relaxed">
            Community building is ecosystem design. Every group I've been part of has been intentional—bringing together people who can execute, learn from each other, and contribute back to their local tech communities.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
