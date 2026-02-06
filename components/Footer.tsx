'use client'

import { motion } from 'framer-motion'
import { CrossIcon, HeartIcon, DoveIcon } from './Icons3D'

export default function Footer() {
  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-brand-dark" />
      
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-earth-gold/30 to-transparent" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-4 mb-8"
        >
          <DoveIcon className="w-10 h-10" animate={false} />
          <CrossIcon className="w-12 h-14" animate={false} />
          <DoveIcon className="w-10 h-10" animate={false} />
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <p className="font-display text-earth-cream/80 text-lg italic mb-2">
            &ldquo;For this child I prayed, and the Lord has granted me my petition.&rdquo;
          </p>
          <p className="font-body text-earth-sand/60 text-sm">
            — 1 Samuel 1:27
          </p>
        </motion.div>

        {/* Thank you message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <p className="font-script text-3xl text-gradient-gold mb-2">
            Thank You!
          </p>
          <p className="font-body text-earth-cream/60">
            We are so blessed to have you in our lives.
          </p>
        </motion.div>

        {/* Love signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <span className="font-body text-earth-sand/50 text-sm">With love,</span>
          <HeartIcon className="w-5 h-5" />
          <span className="font-display text-earth-cream">The Vivas Family</span>
        </motion.div>

        {/* Divider */}
        <div className="w-24 h-px bg-earth-gold/20 mx-auto mb-6" />

        {/* Copyright */}
        <p className="font-body text-earth-sand/40 text-xs">
          © 2026 Ansel Haymitch M. Vivas&apos; Baptism • Made with 💛
        </p>
      </div>
    </footer>
  )
}
