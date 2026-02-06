'use client'

import { motion } from 'framer-motion'
import { CrossIcon, HeartIcon } from './Icons3D'

const ninangs = [
  'Jeng', 'Jersey', 'Dee', 'Dennise', 'Angelica', 
  'Mariz', 'Sheine', 'Dessa', 'Ria', 'Rica'
]

const ninongs = [
  'Jared', 'Justin', 'Royhette', 'Renzo', 'Jedel', 
  'Jun', 'Karl', 'Jayson', 'Niño', 'Ryan', 'Rupert'
]

export default function Godparents() {
  return (
    <section id="godparents" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-medium to-brand-dark" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <CrossIcon className="w-14 h-14 mx-auto mb-4" />
          <h2 className="font-script text-4xl sm:text-5xl text-gradient-gold mb-4">
            My Ninongs & Ninangs
          </h2>
          <p className="font-body text-earth-cream/70 text-lg max-w-xl mx-auto">
            &ldquo;These special people will guide me in my faith journey. I&apos;m so blessed to have them!&rdquo;
          </p>
        </motion.div>

        {/* Godparents sections */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Ninangs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 sm:p-8"
          >
            <h3 className="font-display text-2xl text-earth-gold text-center mb-6">
              👸 My Ninangs
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {ninangs.map((name, index) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-earth-brown/20 rounded-xl p-3 text-center border border-earth-gold/10 hover:border-earth-gold/30 transition-colors"
                >
                  <span className="font-body text-earth-cream">{name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Ninongs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6 sm:p-8"
          >
            <h3 className="font-display text-2xl text-earth-gold text-center mb-6">
              🤴 My Ninongs
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {ninongs.map((name, index) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-earth-brown/20 rounded-xl p-3 text-center border border-earth-gold/10 hover:border-earth-gold/30 transition-colors"
                >
                  <span className="font-body text-earth-cream">{name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Message from Ansel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 text-earth-sand/60">
            <HeartIcon className="w-6 h-6" />
            <span className="font-body text-sm italic">Thank you for being part of my life!</span>
            <HeartIcon className="w-6 h-6" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
