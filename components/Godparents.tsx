'use client'

import { motion } from 'framer-motion'
import { CrossIcon, HeartIcon } from './Icons3D'

const godparents = [
  { name: 'Ninong Name', role: 'Godfather', relation: 'Uncle' },
  { name: 'Ninang Name', role: 'Godmother', relation: 'Auntie' },
  { name: 'Ninong Name', role: 'Godfather', relation: 'Family Friend' },
  { name: 'Ninang Name', role: 'Godmother', relation: 'Cousin' },
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

        {/* Godparents grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {godparents.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 text-center"
            >
              {/* Avatar placeholder */}
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-earth-sand to-earth-caramel flex items-center justify-center">
                <span className="font-display text-2xl text-brand-dark">
                  {person.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              
              <h3 className="font-display text-lg text-earth-cream mb-1">
                {person.name}
              </h3>
              <p className="font-body text-earth-gold text-sm mb-1">
                {person.role}
              </p>
              <p className="font-body text-earth-sand/60 text-xs">
                {person.relation}
              </p>
            </motion.div>
          ))}
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
