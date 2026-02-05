import { NextRequest, NextResponse } from 'next/server'

interface RSVPData {
  name: string
  email: string
  guests: string
  attending: string
  message?: string
  timestamp?: string
}

function validateRSVP(data: RSVPData): { valid: boolean; errors: string[] } {
  const errors: string[] = []
  if (!data.name || data.name.trim().length < 2) errors.push('Name is required')
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.push('Valid email is required')
  if (!data.attending || !['yes', 'no', 'maybe'].includes(data.attending)) errors.push('Please indicate attendance')
  return { valid: errors.length === 0, errors }
}

export async function POST(request: NextRequest) {
  try {
    const body: RSVPData = await request.json()
    const validation = validateRSVP(body)
    
    if (!validation.valid) {
      return NextResponse.json({ success: false, errors: validation.errors }, { status: 400 })
    }

    // Google Sheets Integration via Google Apps Script Web App
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL
    
    if (GOOGLE_SCRIPT_URL) {
      try {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: body.name,
            email: body.email,
            guests: body.guests,
            attending: body.attending,
            message: body.message || '',
            timestamp: body.timestamp || new Date().toISOString()
          })
        })
      } catch (sheetError) {
        console.error('Google Sheets error:', sheetError)
        // Continue even if sheets fails - don't block the user
      }
    }

    // Log RSVP for backup
    console.log('RSVP received:', {
      ...body,
      timestamp: body.timestamp || new Date().toISOString()
    })

    return NextResponse.json({
      success: true,
      message: 'RSVP received! May the odds be ever in your favor!'
    })
  } catch (error) {
    console.error('RSVP error:', error)
    return NextResponse.json({ success: false, errors: ['Something went wrong'] }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ status: 'active', message: 'RSVP API is running' })
}
