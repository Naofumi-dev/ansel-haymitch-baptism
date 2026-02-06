'use client'

import { motion } from 'framer-motion'
import { ChurchIcon, CalendarIcon, LocationIcon, WaterDropIcon, LeafIcon } from './Icons3D'

const eventDetails = {
  ceremony: {
    title: "My Christening Ceremony",
    message: "This is where I'll receive God's blessing!",
    time: "11:00 AM",
    venue: "Parish of the Immaculate Heart of Mary",
    address: "Brgy. Muzon, San Jose Del Monte, Bulacan"
  },
  reception: {
    title: "Let's Celebrate Together!",
    message: "After the ceremony, let's have fun and feast!",
    time: "12:30 PM onwards",
    venue: "Mendoza Residence",
    address: "Block 5 Lot 15, Villa Belissa, San Jose Del Monte, Bulacan"
  }
}

export default function EventDetails() {
  return (
    <section id="details" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-medium to-brand-dark" />
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 opacity-10">
        <LeafIcon className="w-32 h-32" animate={false} />
      </div>
      <div className="absolute bottom-10 left-10 opacity-10">
        <LeafIcon className="w-28 h-28" animate={false} />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <WaterDropIcon className="w-16 h-16 mx-auto mb-4" />
          <h2 className="font-script text-4xl sm:text-5xl text-gradient-gold mb-4">
            Here&apos;s What&apos;s Happening
          </h2>
          <p className="font-body text-earth-cream/70 text-lg max-w-2xl mx-auto">
            &ldquo;Mommy helped me plan everything! Here are the details so you won&apos;t get lost.&rdquo;
          </p>
        </motion.div>

        {/* Event cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Ceremony Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <ChurchIcon className="w-14 h-14 flex-shrink-0" />
              <div>
                <h3 className="font-display text-2xl text-earth-cream mb-1">
                  {eventDetails.ceremony.title}
                </h3>
                <p className="font-body text-earth-sand/80 text-sm italic">
                  {eventDetails.ceremony.message}
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <CalendarIcon className="w-10 h-10 flex-shrink-0" animate={false} />
                <div>
                  <p className="font-body text-earth-sand/60 text-sm uppercase tracking-wider">When</p>
                  <p className="font-display text-earth-cream text-lg">
                    February 15, 2026 • {eventDetails.ceremony.time}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <LocationIcon className="w-10 h-10 flex-shrink-0" animate={false} />
                <div>
                  <p className="font-body text-earth-sand/60 text-sm uppercase tracking-wider">Where</p>
                  <p className="font-display text-earth-cream text-lg">
                    {eventDetails.ceremony.venue}
                  </p>
                  <p className="font-body text-earth-sand/70 text-sm">
                    {eventDetails.ceremony.address}
                  </p>
                </div>
              </div>
            </div>

            <motion.a
              href="https://maps.google.com/?q=Parish+of+the+Immaculate+Heart+of+Mary+Muzon+San+Jose+Del+Monte+Bulacan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-earth-gold hover:text-earth-gold-light transition-colors font-body"
              whileHover={{ x: 5 }}
            >
              <span>Get Directions</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Reception Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center">
                <span className="text-4xl">🎉</span>
              </div>
              <div>
                <h3 className="font-display text-2xl text-earth-cream mb-1">
                  {eventDetails.reception.title}
                </h3>
                <p className="font-body text-earth-sand/80 text-sm italic">
                  {eventDetails.reception.message}
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <CalendarIcon className="w-10 h-10 flex-shrink-0" animate={false} />
                <div>
                  <p className="font-body text-earth-sand/60 text-sm uppercase tracking-wider">When</p>
                  <p className="font-display text-earth-cream text-lg">
                    {eventDetails.reception.time}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <LocationIcon className="w-10 h-10 flex-shrink-0" animate={false} />
                <div>
                  <p className="font-body text-earth-sand/60 text-sm uppercase tracking-wider">Where</p>
                  <p className="font-display text-earth-cream text-lg">
                    {eventDetails.reception.venue}
                  </p>
                  <p className="font-body text-earth-sand/70 text-sm">
                    {eventDetails.reception.address}
                  </p>
                </div>
              </div>
            </div>

            <motion.a
              href="https://maps.google.com/?q=Villa+Belissa+San+Jose+Del+Monte+Bulacan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-earth-gold hover:text-earth-gold-light transition-colors font-body"
              whileHover={{ x: 5 }}
            >
              <span>Get Directions</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>

        {/* Dress code section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="glass-card max-w-2xl mx-auto p-8">
            <h3 className="font-display text-2xl text-earth-cream mb-4">
              &ldquo;Please Wear Earth Tones!&rdquo;
            </h3>
            <p className="font-body text-earth-sand/80 mb-6">
              Mommy says we&apos;ll all look beautiful in these colors together
            </p>
            
            {/* Color swatches */}
            <div className="flex justify-center gap-3 flex-wrap">
              {[
                { color: '#5D4037', name: 'Brown' },
                { color: '#8B7355', name: 'Tan' },
                { color: '#A67B5B', name: 'Caramel' },
                { color: '#D4C4A8', name: 'Beige' },
                { color: '#E8DCC4', name: 'Cream' },
                { color: '#FAF8F5', name: 'Ivory' },
              ].map((swatch) => (
                <motion.div
                  key={swatch.name}
                  className="flex flex-col items-center gap-2"
                  whileHover={{ scale: 1.1 }}
                >
                  <div 
                    className="w-12 h-12 rounded-full border-2 border-earth-gold/30 shadow-lg"
                    style={{ backgroundColor: swatch.color }}
                  />
                  <span className="font-body text-xs text-earth-sand/60">{swatch.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
