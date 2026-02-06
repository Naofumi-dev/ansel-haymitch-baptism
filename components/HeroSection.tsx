'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { CrossIcon, DoveIcon, LeafIcon } from './Icons3D'

const EVENT_DATE = new Date('2026-02-15T11:00:00')

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = EVENT_DATE.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  const scrollToRSVP = () => {
    document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with warm gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-medium to-brand-dark" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <LeafIcon className="w-24 h-24" />
      </div>
      <div className="absolute top-40 right-16 opacity-20">
        <LeafIcon className="w-20 h-20" />
      </div>
      <div className="absolute bottom-40 left-20 opacity-15">
        <DoveIcon className="w-28 h-28" />
      </div>
      
      {/* Warm ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-earth-gold/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-earth-caramel/10 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pt-20">
        
        {/* Cross icon */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <CrossIcon className="w-16 h-20" />
        </motion.div>

        {/* Ansel's photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="photo-frame w-36 h-36 sm:w-44 sm:h-44 glow-gold">
            <Image
              src="/images/ansel17.jpg"
              alt="Baby Ansel"
              width={176}
              height={176}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Greeting from Ansel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6"
        >
          <p className="font-body text-earth-sand text-lg mb-2">Hi there! I&apos;m</p>
          <h1 className="font-script text-5xl sm:text-7xl lg:text-8xl text-gradient-gold mb-2">
            Ansel Haymitch
          </h1>
          <p className="font-display text-xl sm:text-2xl text-earth-cream/80 italic">
            and I&apos;m inviting you to my Baptism!
          </p>
        </motion.div>

        {/* Speech bubble message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto mb-10"
        >
          <div className="speech-bubble">
            <p className="font-body text-brand-dark text-base sm:text-lg leading-relaxed">
              &ldquo;I can&apos;t wait to meet you on my special day! Mommy and Daddy are so excited to celebrate this blessed moment with our family and friends. Will you come?&rdquo;
            </p>
          </div>
        </motion.div>

        {/* Date announcement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-8"
        >
          <div className="divider-leaf mb-4">
            <span className="font-display text-earth-gold text-sm tracking-widest uppercase">Save the Date</span>
          </div>
          <p className="font-display text-2xl sm:text-3xl text-earth-cream">
            Sunday, February 15, 2026
          </p>
          <p className="font-body text-earth-sand mt-1">
            at 11:00 in the morning
          </p>
        </motion.div>

        {/* Countdown timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-3 sm:gap-5 mb-10"
        >
          {[
            { value: timeLeft.days, label: 'Days' },
            { value: timeLeft.hours, label: 'Hours' },
            { value: timeLeft.minutes, label: 'Minutes' },
            { value: timeLeft.seconds, label: 'Seconds' },
          ].map((item) => (
            <motion.div
              key={item.label}
              className="glass-card p-3 sm:p-5 min-w-[65px] sm:min-w-[85px]"
              whileHover={{ scale: 1.05, y: -3 }}
            >
              <motion.span
                key={item.value}
                initial={{ y: -5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="block font-display text-2xl sm:text-3xl font-bold text-gradient-gold"
              >
                {String(item.value).padStart(2, '0')}
              </motion.span>
              <span className="block text-xs text-earth-sand/70 uppercase tracking-wider mt-1">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            onClick={scrollToRSVP}
            className="btn-primary text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Yes, I&apos;ll Be There!
          </motion.button>
          
          <motion.button
            onClick={() => document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Details
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-earth-sand/40 cursor-pointer"
            onClick={() => document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-xs tracking-widest mb-2 uppercase font-body">Scroll Down</span>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-dark to-transparent" />
    </div>
  )
}
