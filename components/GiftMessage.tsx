'use client'

import { motion } from 'framer-motion'
import { BirdIcon, FireIcon } from './Icons3D'

const GIFT_IDEAS = [
  { icon: '🧷', name: 'EQ Diaper (L)' },
  { icon: '🥛', name: 'Milk (Lactum 1-3)' },
  { icon: '👕', name: 'Clothes' },
  { icon: '🧸', name: 'Toys (3+)' },
]

const DRESS_CODE_COLORS = [
  { name: 'Brown', color: '#5D4037' },
  { name: 'Tan', color: '#8B7355' },
  { name: 'Beige', color: '#C4A77D' },
  { name: 'Cream', color: '#E8DCC4' },
  { name: 'White', color: '#FAF8F5' },
]

export default function GiftMessage() {
  return (
    <div className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark to-[#0a0f1a]" />
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-games-gold/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Gift Ideas */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="text-center mb-8">
              <span className="text-4xl mb-3 block">🎁</span>
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Gift Ideas
              </h3>
              <p className="font-body text-sm text-white/50">
                If you wish to bless Ansel with a gift
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {GIFT_IDEAS.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <span className="text-3xl mb-2">{item.icon}</span>
                  <span className="font-body text-sm text-white/80 text-center">{item.name}</span>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-6 font-body text-sm text-white/40 italic"
            >
              Your presence is the greatest gift of all 💛
            </motion.p>
          </motion.div>

          {/* Dress Code */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="text-center mb-8">
              <span className="text-4xl mb-3 block">👔</span>
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Dress Code
              </h3>
              <p className="font-body text-sm text-white/50">
                Earth tones to match our theme
              </p>
            </div>
            
            <div className="flex justify-center gap-3 mb-6">
              {DRESS_CODE_COLORS.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: 'spring' }}
                  className="group relative"
                >
                  <div
                    className="w-12 h-12 rounded-full shadow-lg ring-2 ring-white/20 group-hover:ring-white/40 transition-all group-hover:scale-110"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-body text-xs text-white/50 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {item.name}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-white/10">
              <p className="font-body text-center text-white/60 text-sm">
                Semi-formal attire in warm, natural colors
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10">
            <BirdIcon className="w-5 h-5 opacity-60" animate={false} />
            <span className="font-body text-sm text-white/60">
              May the odds be ever in your favor
            </span>
            <FireIcon className="w-5 h-5 opacity-60" animate={false} />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
