'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

export function Contact() {
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

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'bernie.web3@gmail.com',
      href: 'mailto:bernie.web3@gmail.com',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      value: '@BernieWeb3',
      href: 'https://twitter.com/iambernieweb3',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Bernie Nguyen',
      href: 'https://linkedin.com/in/bernieweb3',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'BernieWeb3',
      href: 'https://github.com/bernieweb3',
    },
  ];

  return (
    <section id="contact" className="py-section px-6 bg-background">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-3xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="font-heading text-4xl md:text-5xl mb-6 text-foreground text-center"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="font-body text-lg text-center text-muted-foreground mb-12"
        >
          Building at the intersection of infrastructure, systems, and incentive design. Open to collaborations, partnerships, and discussions about the future of Web3 coordination.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contacts.map((contact, idx) => {
            const Icon = contact.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <Button
                  asChild
                  variant="ghost"
                  className="w-full h-auto p-6 rounded-2xl border border-border hover:bg-card hover:shadow-md transition-all justify-start"
                >
                  <a href={contact.href} target="_blank" rel="noopener noreferrer">
                    <Icon className="w-5 h-5 mr-4 text-primary flex-shrink-0" />
                    <div className="text-left">
                      <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                        {contact.label}
                      </p>
                      <p className="font-semibold text-foreground">{contact.value}</p>
                    </div>
                  </a>
                </Button>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          variants={itemVariants}
          className="text-center pt-8 border-t border-border"
        >
          <p className="font-body text-sm text-muted-foreground">
            Based in Ho Chi Minh City, Vietnam. Currently building the next wave of Web3 infrastructure on Sui.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
