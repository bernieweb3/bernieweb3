'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function SelectedProjects() {
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
      title: 'Orlim',
      subtitle: 'Advanced Limit Order Infrastructure on Sui',
      description:
        'Object-centric DeFi layer where each limit order is an independent Sui object. Exploits parallel transaction model via partial fills through Move resource consumption and atomic execution via Programmable Transaction Blocks.',
      stack: ['Sui Move', 'DeepBook', 'React', 'TypeScript'],
      achievement: 'Runner-up — Sui Bootcamp HCMC 2025',
      outcome: 'Led to Software Engineer Intern role at CommandOSS (Vietnamese Branch of Mysten Labs)',
      order: 1,
    },
    {
      title: 'Mekong Doctor',
      subtitle: 'Climate-Aware Agricultural Intelligence',
      description:
        'Addresses saltwater intrusion in Mekong Delta through edge-first architecture. Features geo-based code splitting, offline-first service worker caching, and 70% reduction in initial JS payload. Strict TypeScript domain modeling ensures data integrity.',
      stack: ['React', 'Supabase', 'OpenRouter', 'Vercel'],
      achievement: 'Top 4 — Greenbio Global Idea Bridge Lab 2025',
      outcome: 'Supported by Startup Vietnam Foundation, Ministry of Education & NRF Korea',
      order: 2,
    },
  ];

  return (
    <section id="projects" className="py-section px-6 bg-background">
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
          Selected Projects
        </motion.h2>

        <div className="space-y-12">
          {projects.map((project) => (
            <motion.div
              key={project.order}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border border-border rounded-3xl p-8 md:p-10 bg-card hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-heading text-2xl md:text-3xl text-primary mb-2">
                      {project.title}
                    </h3>
                    <p className="font-body text-lg text-muted-foreground">
                      {project.subtitle}
                    </p>
                  </div>
                  <span className="text-4xl font-heading text-muted opacity-30">
                    {String(project.order).padStart(2, '0')}
                  </span>
                </div>

                <p className="font-body text-base leading-relaxed text-foreground mb-6">
                  {project.description}
                </p>

                <div className="mb-6">
                  <p className="font-body text-sm text-muted-foreground mb-3 uppercase tracking-wide">
                    Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="rounded-full px-3 py-1 text-xs font-semibold"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="border-t border-border pt-6 space-y-4">
                  <div>
                    <p className="font-body text-sm text-muted-foreground mb-1 uppercase tracking-wide">
                      Recognition
                    </p>
                    <p className="font-body text-base font-semibold text-primary">
                      {project.achievement}
                    </p>
                  </div>
                  <div>
                    <p className="font-body text-sm text-muted-foreground mb-1 uppercase tracking-wide">
                      Outcome
                    </p>
                    <p className="font-body text-base text-foreground">
                      {project.outcome}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
