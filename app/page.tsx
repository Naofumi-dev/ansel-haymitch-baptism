'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import EventDetails from '@/components/EventDetails'
import PhotoGallery from '@/components/PhotoGallery'
import Godparents from '@/components/Godparents'
import GiftMessage from '@/components/GiftMessage'
import RSVPForm from '@/components/RSVPForm'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-brand-dark">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navigation />
          <HeroSection />
          <EventDetails />
          <PhotoGallery />
          <Godparents />
          <GiftMessage />
          <RSVPForm />
          <Footer />
        </>
      )}
    </main>
  )
}
