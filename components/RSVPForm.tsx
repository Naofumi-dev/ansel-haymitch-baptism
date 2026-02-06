'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HeartIcon, DoveIcon } from './Icons3D'

interface FormData {
  name: string
  email: string
  guests: string
  attending: string
  message: string
}

export default function RSVPForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    guests: '1',
    attending: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}
    
    if (!formData.name.trim()) newErrors.name = 'Please tell me your name!'
    if (!formData.email.trim()) {
      newErrors.email = 'I need your email to send updates!'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Hmm, that email looks funny...'
    }
    if (!formData.attending) newErrors.attending = 'Will you come? Please let me know!'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString()
        })
      })
      
      const result = await response.json()
      
      if (result.success) {
        setIsSubmitted(true)
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Submission error:', error)
      alert('Failed to submit. Please check your connection.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  if (isSubmitted) {
    return (
      <section id="rsvp" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-medium to-brand-dark" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 max-w-lg mx-auto px-4 text-center"
        >
          <div className="glass-card-light p-10">
            <DoveIcon className="w-20 h-20 mx-auto mb-6" />
            <h3 className="font-script text-4xl text-earth-brown mb-4">
              Yay! Thank You!
            </h3>
            <p className="font-body text-brand-dark/80 text-lg mb-6">
              I&apos;m so happy you&apos;re coming! Mommy and Daddy will send you more details soon. Can&apos;t wait to see you!
            </p>
            <HeartIcon className="w-12 h-12 mx-auto" />
            <motion.button
              onClick={() => {
                setIsSubmitted(false)
                setFormData({ name: '', email: '', guests: '1', attending: '', message: '' })
              }}
              className="mt-6 text-earth-gold hover:text-earth-brown transition-colors font-body"
            >
              Submit another response →
            </motion.button>
          </div>
        </motion.div>
      </section>
    )
  }

  return (
    <section id="rsvp" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-medium to-brand-dark" />
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-earth-gold/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <HeartIcon className="w-14 h-14 mx-auto mb-4" />
          <h2 className="font-script text-4xl sm:text-5xl text-gradient-gold mb-4">
            Will You Come?
          </h2>
          <p className="font-body text-earth-cream/70 text-lg mb-4">
            &ldquo;Please tell me if you can make it! I&apos;ll be counting the days!&rdquo;
          </p>
          
          {/* 50 Pax Limit Notice */}
          <div className="inline-flex items-center gap-2 bg-earth-gold/20 border border-earth-gold/40 rounded-full px-4 py-2">
            <span className="text-lg">👥</span>
            <span className="font-body text-earth-cream text-sm">
              Limited to <strong className="text-earth-gold">50 guests</strong> only
            </span>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass-card p-8 sm:p-10"
        >
          {/* Name field */}
          <div className="mb-6">
            <label className="block font-body text-earth-cream mb-2 text-sm">
              What&apos;s your name? ✨
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="input-field"
            />
            <AnimatePresence>
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-2 text-sm text-red-400 font-body"
                >
                  {errors.name}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Email field */}
          <div className="mb-6">
            <label className="block font-body text-earth-cream mb-2 text-sm">
              Your email address 📧
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@email.com"
              className="input-field"
            />
            <AnimatePresence>
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-2 text-sm text-red-400 font-body"
                >
                  {errors.email}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Attendance buttons */}
          <div className="mb-6">
            <label className="block font-body text-earth-cream mb-3 text-sm">
              So... are you coming? 🥺
            </label>
            <div className="flex gap-3 flex-wrap">
              {[
                { value: 'yes', label: "Yes, I'll be there!", emoji: '🎉' },
                { value: 'maybe', label: 'Maybe...', emoji: '🤔' },
                { value: 'no', label: "Sorry, I can't", emoji: '😢' },
              ].map((option) => (
                <motion.button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    setFormData(prev => ({ ...prev, attending: option.value }))
                    if (errors.attending) setErrors(prev => ({ ...prev, attending: undefined }))
                  }}
                  className={`flex-1 min-w-[120px] py-3 px-4 rounded-xl font-body text-sm transition-all ${
                    formData.attending === option.value
                      ? 'bg-gradient-gold text-brand-dark shadow-lg'
                      : 'bg-earth-brown/30 text-earth-cream hover:bg-earth-brown/50 border border-earth-gold/20'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="mr-2">{option.emoji}</span>
                  {option.label}
                </motion.button>
              ))}
            </div>
            <AnimatePresence>
              {errors.attending && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-2 text-sm text-red-400 font-body"
                >
                  {errors.attending}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Number of guests */}
          <AnimatePresence>
            {formData.attending === 'yes' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-6"
              >
                <label className="block font-body text-earth-cream mb-2 text-sm">
                  How many of you are coming? 👨‍👩‍👧‍👦
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="input-field appearance-none cursor-pointer"
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num} className="bg-brand-dark">
                      {num} {num === 1 ? 'guest' : 'guests'}
                    </option>
                  ))}
                </select>
                <p className="mt-2 text-xs text-earth-sand/60 font-body">
                  ⚠️ Please limit to 5 guests per family as we only have 50 slots
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Message field */}
          <div className="mb-8">
            <label className="block font-body text-earth-cream mb-2 text-sm">
              Any message for me? 💌 (optional)
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write something sweet..."
              rows={3}
              className="input-field resize-none"
            />
          </div>

          {/* Submit button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full text-lg flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? (
              <>
                <motion.div
                  className="w-5 h-5 border-2 border-brand-dark/30 border-t-brand-dark rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                />
                Sending...
              </>
            ) : (
              <>
                Send My RSVP
                <span>💛</span>
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
