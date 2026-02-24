'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export function EcosystemRecognition() {
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

  const categories = [
    {
      title: 'Web3 & Blockchain',
      achievements: [
        {
          award: 'Runner-up',
          event: 'Sui Bootcamp HCMC 2025',
          project: 'Project: Orlim',
        },
        {
          award: 'Top 8',
          event: 'Algorand Vietnam Hackathon 2024',
          project: 'Build on Algorand Track, Project: NFTicket',
        },
        {
          award: 'Top 10 Finalist',
          event: 'Web3 & AI Ideathon 2025',
          project: 'VBI Academy x GFI Ventures x Ho Chi Minh City Dept. of Science & Technology, Project: Alt30',
        },
      ],
    },
    {
      title: 'Startup & Innovation',
      achievements: [
        {
          award: 'Top 4',
          event: 'Greenbio Global Idea Bridge Lab 2025',
          project: 'Startup Vietnam Foundation, Ministry of Education & NRF Korea, Project: Mekong Doctor',
        },
        {
          award: 'Á quân',
          event: 'TLS-Innovation 2025',
          project: 'Team DevPros, Project: Achievo',
        },
        {
          award: 'Top 30',
          event: 'UEH Startup Zone 2025',
          project: 'Team DevPros, Project: DeGreenSci',
        },
        {
          award: 'Top 8 Finalist',
          event: 'SEA Ideathon 2025',
          project: 'Organized by SciLabs, Project: Mosaical',
        },
      ],
    },
    {
      title: 'Professional Outcomes',
      achievements: [
        {
          award: 'Software Engineer Intern',
          event: 'CommandOSS (Vietnamese Branch of Mysten Labs)',
          project: 'Outcome directly following Orlim performance at Sui Bootcamp',
        },
      ],
    },
  ];

  return (
    <section className="py-section px-6 bg-background">
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
          Ecosystem & Recognition
        </motion.h2>

        <div className="space-y-12">
          {categories.map((category, catIdx) => (
            <motion.div key={catIdx} variants={itemVariants}>
              <h3 className="font-heading text-2xl text-primary mb-6">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.achievements.map((achievement, achIdx) => (
                  <motion.div
                    key={achIdx}
                    variants={itemVariants}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="bg-card border border-border rounded-2xl p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <span className="inline-block bg-primary text-white text-xs font-bold rounded-full px-3 py-1">
                            {achievement.award}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-heading text-lg text-foreground">
                            {achievement.event}
                          </p>
                          <p className="font-body text-sm text-muted-foreground mt-1">
                            {achievement.project}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-16 pt-12 border-t border-border"
        >
          <p className="font-body text-center text-foreground leading-relaxed max-w-3xl mx-auto">
            Trajectory: 2024–2025 shows consistent growth from Web3 hackathons → startup innovation competitions → professional infrastructure roles. Focus shifts progressively toward systemic problems in coordination, governance, and incentive design.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
