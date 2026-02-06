'use client'

import { motion } from 'framer-motion'
import { GiftIcon, HeartIcon } from './Icons3D'

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
          
          <div className="space-y-4 font-body text-earth-cream/80 text-lg leading-relaxed">
            <p>
              &ldquo;Mommy and Daddy say the best gift is your presence on my special day!&rdquo;
            </p>
            <p className="text-earth-sand/70">
              But if you wish to bless me with something extra, 
              monetary gifts would help with my future needs. 
              Thank you for your love and generosity!
            </p>
          </div>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 my-8">
            <div className="w-16 h-px bg-earth-gold/30" />
            <HeartIcon className="w-8 h-8" />
            <div className="w-16 h-px bg-earth-gold/30" />
          </div>

          {/* GCash info (optional) */}
          <div className="bg-earth-brown/20 rounded-xl p-6 border border-earth-gold/20">
            <p className="font-body text-earth-sand/60 text-sm mb-2">For monetary gifts:</p>
            <p className="font-display text-earth-cream text-lg">GCash: 0917-XXX-XXXX</p>
            <p className="font-body text-earth-sand/60 text-sm mt-1">Account Name: Parent Name</p>
          </div>

          <p className="font-body text-earth-sand/50 text-sm mt-6 italic">
            Your love and prayers mean the world to us 💛
          </p>
        </motion.div>
      </div>
    </section>
  )
}
