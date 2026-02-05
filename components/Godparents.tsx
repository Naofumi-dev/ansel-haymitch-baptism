'use client'

import { motion } from 'framer-motion'
import { BirdIcon } from './Icons3D'

const GODPARENTS = {
  ninangs: ['Jeng', 'Jersey', 'Rica', 'Ria', 'Dee', 'Dennise', 'Angelica', 'Mariz', 'Dessa', 'Sheine'],
  ninongs: ['Jared', 'Justin', 'Royhette', 'Renzo', 'Jedel', 'Jun', 'Karl', 'Jayson', 'Rupert'],
}

export default function Godparents() {
  return (
    <div className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-[#0a0f1a] to-brand-dark" />
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-games-gold/5 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-driver-red/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-games-gold" />
            <BirdIcon className="w-8 h-8" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-games-gold" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            The Godparents
          </h2>
          <p className="font-body text-lg text-white/60">
            Ansel&apos;s guides and protectors in faith
          </p>
        </motion.div>

        {/* Godparents grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Ninangs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="text-center mb-6">
              <span className="text-3xl mb-2 block">👩</span>
              <h3 className="font-display text-2xl font-bold text-games-gold">
                Ninang&apos;s
              </h3>
              <p className="font-body text-sm text-white/50">Godmothers</p>
            </div>
            <ul className="space-y-3">
              {GODPARENTS.ninangs.map((name, index) => (
                <motion.li
                  key={name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 group"
                >
                  <span className="w-2 h-2 rounded-full bg-games-gold/50 group-hover:bg-games-gold transition-colors" />
                  <span className="font-body text-white/80 group-hover:text-white transition-colors">
                    {name}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Ninongs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="text-center mb-6">
              <span className="text-3xl mb-2 block">👨</span>
              <h3 className="font-display text-2xl font-bold text-driver-red">
                Ninong&apos;s
              </h3>
              <p className="font-body text-sm text-white/50">Godfathers</p>
            </div>
            <ul className="space-y-3">
              {GODPARENTS.ninongs.map((name, index) => (
                <motion.li
                  key={name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 group"
                >
                  <span className="w-2 h-2 rounded-full bg-driver-red/50 group-hover:bg-driver-red transition-colors" />
                  <span className="font-body text-white/80 group-hover:text-white transition-colors">
                    {name}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Decorative bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <div className="flex items-center gap-2">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-games-gold/30" />
            <span className="text-games-gold/30">✦</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-games-gold/30" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
