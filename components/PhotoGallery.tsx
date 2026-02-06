'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { BabyIcon } from './Icons3D'

const photos = [
  { src: '/images/ansel1.jpg', caption: 'My first smile!' },
  { src: '/images/ansel2.jpg', caption: 'Naptime is the best' },
  { src: '/images/ansel3.jpg', caption: 'Just chilling' },
  { src: '/images/ansel4.jpg', caption: 'With my favorite toy' },
  { src: '/images/ansel5.jpg', caption: 'Happy baby!' },
  { src: '/images/ansel6.jpg', caption: 'Exploring the world' },
  { src: '/images/ansel7.jpg', caption: 'Cozy moments' },
  { src: '/images/ansel8.jpg', caption: 'Bath time fun' },
  { src: '/images/ansel9.jpg', caption: 'Sleepy head' },
  { src: '/images/ansel10.jpg', caption: 'Growing so fast!' },
  { src: '/images/ansel11.jpg', caption: 'Curious little one' },
  { src: '/images/ansel12.jpg', caption: 'Sweet dreams' },
]

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)

  return (
    <section id="gallery" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-medium to-brand-dark" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <BabyIcon className="w-16 h-16 mx-auto mb-4" />
          <h2 className="font-script text-4xl sm:text-5xl text-gradient-gold mb-4">
            My Little Moments
          </h2>
          <p className="font-body text-earth-cream/70 text-lg max-w-2xl mx-auto">
            &ldquo;Mommy takes so many photos of me! Here are some of my favorites.&rdquo;
          </p>
        </motion.div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedPhoto(index)}
            >
              <div className="aspect-square overflow-hidden rounded-2xl border-2 border-earth-gold/20 transition-all duration-300 group-hover:border-earth-gold/60 group-hover:shadow-lg group-hover:shadow-earth-gold/20">
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="font-body text-earth-cream text-sm">{photo.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedPhoto !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-brand-dark/95 flex items-center justify-center p-4"
              onClick={() => setSelectedPhoto(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={photos[selectedPhoto].src}
                  alt={photos[selectedPhoto].caption}
                  width={1200}
                  height={1200}
                  className="max-h-[80vh] w-auto rounded-2xl border-4 border-earth-gold/30 object-contain"
                />
                <p className="text-center font-body text-earth-cream mt-4 text-lg">
                  {photos[selectedPhoto].caption}
                </p>
                
                {/* Navigation arrows */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedPhoto(prev => prev !== null ? (prev - 1 + photos.length) % photos.length : null)
                  }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-3 rounded-full bg-earth-gold/20 hover:bg-earth-gold/40 transition-colors"
                >
                  <svg className="w-6 h-6 text-earth-cream" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedPhoto(prev => prev !== null ? (prev + 1) % photos.length : null)
                  }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-3 rounded-full bg-earth-gold/20 hover:bg-earth-gold/40 transition-colors"
                >
                  <svg className="w-6 h-6 text-earth-cream" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Close button */}
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute top-0 right-0 translate-x-4 -translate-y-4 p-2 rounded-full bg-earth-gold/20 hover:bg-earth-gold/40 transition-colors"
                >
                  <svg className="w-6 h-6 text-earth-cream" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
