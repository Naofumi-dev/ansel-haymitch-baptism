'use client'

import { motion } from 'framer-motion'
import { GiftIcon, HeartIcon } from './Icons3D'

const giftSuggestions = [
  { emoji: '🍼', name: 'Milk', description: 'Lactum 1-3 years old' },
  { emoji: '👶', name: 'Diapers', description: 'Size: Large' },
  { emoji: '👕', name: 'Clothes', description: 'Baby outfits & onesies' },
  { emoji: '🧸', name: 'Toys', description: 'Educational or plush toys' },
]

export default function GiftMessage() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark to-brand-medium" />
      
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 sm:p-12 text-center"
        >
          <GiftIcon className="w-20 h-20 mx-auto mb-6" />
          
          <h2 className="font-script text-3xl sm:text-4xl text-gradient-gold mb-6">
            A Little Note About Gifts
          </h2>
          
          <div className="space-y-4 font-body text-earth-cream/80 text-lg leading-relaxed mb-8">
            <p>
              &ldquo;Mommy and Daddy say the best gift is your presence on my special day!&rdquo;
            </p>
            <p className="text-earth-sand/70">
              But if you wish to bless me with something, here are some things I could use:
            </p>
          </div>

          {/* Gift suggestions grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {giftSuggestions.map((gift, index) => (
              <motion.div
                key={gift.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-earth-brown/30 rounded-2xl p-4 border border-earth-gold/20 hover:border-earth-gold/40 transition-all"
              >
                <span className="text-4xl mb-2 block">{gift.emoji}</span>
                <h4 className="font-display text-earth-cream text-lg mb-1">{gift.name}</h4>
                <p className="font-body text-earth-gold text-xs font-medium">{gift.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 my-8">
            <div className="w-16 h-px bg-earth-gold/30" />
            <HeartIcon className="w-8 h-8" />
            <div className="w-16 h-px bg-earth-gold/30" />
          </div>

          <p className="font-body text-earth-sand/50 text-sm italic">
            Your love and prayers mean the world to us 💛
          </p>
        </motion.div>
      </div>
    </section>
  )
}
