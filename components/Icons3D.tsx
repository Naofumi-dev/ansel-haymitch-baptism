'use client'

import { motion } from 'framer-motion'

interface IconProps {
  className?: string
  animate?: boolean
}

// 3D Golden Cross Icon
export function CrossIcon({ className = 'w-12 h-12', animate = true }: IconProps) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={className}
      animate={animate ? { y: [0, -5, 0] } : undefined}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    >
      <defs>
        <linearGradient id="crossGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#B8860B" />
          <stop offset="100%" stopColor="#8B7355" />
        </linearGradient>
        <linearGradient id="crossHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5E6C8" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
        <filter id="crossShadow">
          <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#5D4037" floodOpacity="0.4"/>
        </filter>
      </defs>
      <g filter="url(#crossShadow)">
        <rect x="42" y="10" width="16" height="80" rx="3" fill="url(#crossGold)" />
        <rect x="25" y="25" width="50" height="14" rx="3" fill="url(#crossGold)" />
        <rect x="44" y="12" width="4" height="76" rx="2" fill="url(#crossHighlight)" opacity="0.6" />
        <rect x="27" y="27" width="46" height="3" rx="1" fill="url(#crossHighlight)" opacity="0.6" />
      </g>
    </motion.svg>
  )
}

// 3D Dove Icon (Holy Spirit)
export function DoveIcon({ className = 'w-12 h-12', animate = true }: IconProps) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={className}
      animate={animate ? { y: [0, -8, 0], rotate: [0, 3, -3, 0] } : undefined}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <defs>
        <linearGradient id="doveBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FAF8F5" />
          <stop offset="50%" stopColor="#E8DCC4" />
          <stop offset="100%" stopColor="#D4C4A8" />
        </linearGradient>
        <linearGradient id="doveWing" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FAF8F5" />
          <stop offset="100%" stopColor="#C4A77D" />
        </linearGradient>
        <filter id="doveShadow">
          <feDropShadow dx="2" dy="3" stdDeviation="2" floodColor="#5D4037" floodOpacity="0.3"/>
        </filter>
      </defs>
      <g filter="url(#doveShadow)">
        <ellipse cx="50" cy="55" rx="20" ry="15" fill="url(#doveBody)" />
        <circle cx="65" cy="45" r="10" fill="url(#doveBody)" />
        <path d="M75 45 L85 47 L75 49 Z" fill="#D4AF37" />
        <circle cx="68" cy="43" r="2" fill="#5D4037" />
        <path d="M30 40 Q20 25 35 20 Q50 15 55 35 Q45 40 30 40 Z" fill="url(#doveWing)" />
        <path d="M45 55 Q30 45 25 30 Q35 35 50 50 Z" fill="url(#doveWing)" opacity="0.8" />
        <path d="M30 55 Q15 50 10 60 Q20 58 30 60 Z" fill="url(#doveWing)" />
        <path d="M82 50 Q90 55 95 52" stroke="#8B7355" strokeWidth="1.5" fill="none" />
        <ellipse cx="92" cy="50" rx="4" ry="2" fill="#A67B5B" transform="rotate(-20 92 50)" />
      </g>
    </motion.svg>
  )
}

// 3D Baby Icon
export function BabyIcon({ className = 'w-12 h-12', animate = true }: IconProps) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={className}
      animate={animate ? { scale: [1, 1.05, 1] } : undefined}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    >
      <defs>
        <linearGradient id="babySkin" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5DEB3" />
          <stop offset="100%" stopColor="#DEB887" />
        </linearGradient>
        <linearGradient id="babyBlanket" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FAF8F5" />
          <stop offset="50%" stopColor="#E8DCC4" />
          <stop offset="100%" stopColor="#D4C4A8" />
        </linearGradient>
        <filter id="babyShadow">
          <feDropShadow dx="2" dy="3" stdDeviation="3" floodColor="#5D4037" floodOpacity="0.3"/>
        </filter>
      </defs>
      <g filter="url(#babyShadow)">
        <ellipse cx="50" cy="60" rx="30" ry="25" fill="url(#babyBlanket)" />
        <circle cx="50" cy="35" r="20" fill="url(#babySkin)" />
        <path d="M40 18 Q50 10 60 18" stroke="#8B7355" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M42 33 Q45 35 48 33" stroke="#5D4037" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M52 33 Q55 35 58 33" stroke="#5D4037" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="38" cy="38" r="4" fill="#E8B4B8" opacity="0.5" />
        <circle cx="62" cy="38" r="4" fill="#E8B4B8" opacity="0.5" />
        <path d="M46 42 Q50 46 54 42" stroke="#C4A77D" strokeWidth="2" fill="none" strokeLinecap="round" />
        <ellipse cx="50" cy="15" rx="15" ry="5" fill="none" stroke="#D4AF37" strokeWidth="2" opacity="0.6" />
      </g>
    </motion.svg>
  )
}

// 3D Church Icon
export function ChurchIcon({ className = 'w-12 h-12', animate = true }: IconProps) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={className}
      animate={animate ? { y: [0, -3, 0] } : undefined}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <defs>
        <linearGradient id="churchWall" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FAF8F5" />
          <stop offset="100%" stopColor="#D4C4A8" />
        </linearGradient>
        <linearGradient id="churchRoof" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B7355" />
          <stop offset="100%" stopColor="#5D4037" />
        </linearGradient>
        <filter id="churchShadow">
          <feDropShadow dx="2" dy="3" stdDeviation="2" floodColor="#5D4037" floodOpacity="0.4"/>
        </filter>
      </defs>
      <g filter="url(#churchShadow)">
        <rect x="25" y="50" width="50" height="40" fill="url(#churchWall)" />
        <path d="M20 50 L50 25 L80 50 Z" fill="url(#churchRoof)" />
        <rect x="42" y="15" width="16" height="20" fill="url(#churchWall)" />
        <path d="M40 15 L50 5 L60 15 Z" fill="url(#churchRoof)" />
        <rect x="48" y="2" width="4" height="10" fill="#D4AF37" />
        <rect x="46" y="4" width="8" height="3" fill="#D4AF37" />
        <path d="M42 90 L42 70 Q50 65 58 70 L58 90 Z" fill="#5D4037" />
        <circle cx="35" cy="65" r="5" fill="#D4AF37" opacity="0.6" />
        <circle cx="65" cy="65" r="5" fill="#D4AF37" opacity="0.6" />
        <circle cx="50" cy="40" r="6" fill="#D4AF37" opacity="0.7" />
      </g>
    </motion.svg>
  )
}

// 3D Water Drop Icon (Baptism)
export function WaterDropIcon({ className = 'w-12 h-12', animate = true }: IconProps) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={className}
      animate={animate ? { y: [0, 5, 0], scale: [1, 0.95, 1] } : undefined}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    >
      <defs>
        <linearGradient id="waterDrop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8DCC4" />
          <stop offset="30%" stopColor="#D4C4A8" />
          <stop offset="100%" stopColor="#C4A77D" />
        </linearGradient>
        <linearGradient id="waterHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FAF8F5" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
        <filter id="waterShadow">
          <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#5D4037" floodOpacity="0.3"/>
        </filter>
      </defs>
      <g filter="url(#waterShadow)">
        <path d="M50 10 Q70 40 70 60 Q70 85 50 90 Q30 85 30 60 Q30 40 50 10 Z" fill="url(#waterDrop)" />
        <ellipse cx="40" cy="50" rx="8" ry="15" fill="url(#waterHighlight)" opacity="0.6" />
        <circle cx="38" cy="40" r="3" fill="#FAF8F5" opacity="0.8" />
      </g>
    </motion.svg>
  )
}

// 3D Heart Icon
export function HeartIcon({ className = 'w-12 h-12', animate = true }: IconProps) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={className}
      animate={animate ? { scale: [1, 1.1, 1] } : undefined}
      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <defs>
        <linearGradient id="heartGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#B8860B" />
          <stop offset="100%" stopColor="#A67B5B" />
        </linearGradient>
        <filter id="heartShadow">
          <feDropShadow dx="2" dy="3" stdDeviation="3" floodColor="#5D4037" floodOpacity="0.4"/>
        </filter>
      </defs>
      <g filter="url(#heartShadow)">
        <path 
          d="M50 85 Q20 60 20 40 Q20 20 35 20 Q50 20 50 35 Q50 20 65 20 Q80 20 80 40 Q80 60 50 85 Z" 
          fill="url(#heartGold)" 
        />
        <path 
          d="M35 30 Q40 25 45 30" 
          stroke="#FAF8F5" 
          strokeWidth="3" 
          fill="none" 
          strokeLinecap="round"
          opacity="0.6"
        />
      </g>
    </motion.svg>
  )
}

// 3D Gift Box Icon
export function GiftIcon({ className = 'w-12 h-12', animate = true }: IconProps) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={className}
      animate={animate ? { rotate: [-2, 2, -2] } : undefined}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    >
      <defs>
        <linearGradient id="giftBox" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8DCC4" />
          <stop offset="100%" stopColor="#D4C4A8" />
        </linearGradient>
        <linearGradient id="giftRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <filter id="giftShadow">
          <feDropShadow dx="2" dy="3" stdDeviation="2" floodColor="#5D4037" floodOpacity="0.3"/>
        </filter>
      </defs>
      <g filter="url(#giftShadow)">
        <rect x="18" y="35" width="64" height="15" rx="3" fill="url(#giftBox)" />
        <rect x="22" y="50" width="56" height="40" rx="3" fill="url(#giftBox)" />
        <rect x="46" y="35" width="8" height="55" fill="url(#giftRibbon)" />
        <rect x="22" y="60" width="56" height="8" fill="url(#giftRibbon)" />
        <ellipse cx="40" cy="28" rx="12" ry="8" fill="url(#giftRibbon)" />
        <ellipse cx="60" cy="28" rx="12" ry="8" fill="url(#giftRibbon)" />
        <circle cx="50" cy="30" r="6" fill="#B8860B" />
      </g>
    </motion.svg>
  )
}

// 3D Calendar Icon
export function CalendarIcon({ className = 'w-12 h-12', animate = true }: IconProps) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={className}
      animate={animate ? { y: [0, -3, 0] } : undefined}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    >
      <defs>
        <linearGradient id="calendarBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FAF8F5" />
          <stop offset="100%" stopColor="#E8DCC4" />
        </linearGradient>
        <linearGradient id="calendarTop" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#B8860B" />
          <stop offset="100%" stopColor="#8B7355" />
        </linearGradient>
        <filter id="calendarShadow">
          <feDropShadow dx="2" dy="3" stdDeviation="2" floodColor="#5D4037" floodOpacity="0.3"/>
        </filter>
      </defs>
      <g filter="url(#calendarShadow)">
        <rect x="15" y="25" width="70" height="65" rx="5" fill="url(#calendarBody)" />
        <rect x="15" y="25" width="70" height="18" rx="5" fill="url(#calendarTop)" />
        <rect x="28" y="18" width="6" height="15" rx="2" fill="#5D4037" />
        <rect x="66" y="18" width="6" height="15" rx="2" fill="#5D4037" />
        <text x="50" y="72" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#5D4037" fontFamily="Georgia">15</text>
        <text x="50" y="55" textAnchor="middle" fontSize="10" fill="#8B7355" fontFamily="Georgia">FEB</text>
      </g>
    </motion.svg>
  )
}

// 3D Location Pin Icon
export function LocationIcon({ className = 'w-12 h-12', animate = true }: IconProps) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={className}
      animate={animate ? { y: [0, -5, 0] } : undefined}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    >
      <defs>
        <linearGradient id="pinBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8B7355" />
        </linearGradient>
        <filter id="pinShadow">
          <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#5D4037" floodOpacity="0.4"/>
        </filter>
      </defs>
      <g filter="url(#pinShadow)">
        <path d="M50 90 L30 50 Q20 30 50 15 Q80 30 70 50 Z" fill="url(#pinBody)" />
        <circle cx="50" cy="40" r="12" fill="#FAF8F5" />
        <circle cx="50" cy="40" r="5" fill="#B8860B" />
      </g>
    </motion.svg>
  )
}

// 3D Leaf/Branch Icon
export function LeafIcon({ className = 'w-12 h-12', animate = true }: IconProps) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={className}
      animate={animate ? { rotate: [-5, 5, -5] } : undefined}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    >
      <defs>
        <linearGradient id="leafGreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A67B5B" />
          <stop offset="50%" stopColor="#8B7355" />
          <stop offset="100%" stopColor="#6D4C41" />
        </linearGradient>
        <filter id="leafShadow">
          <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="#5D4037" floodOpacity="0.3"/>
        </filter>
      </defs>
      <g filter="url(#leafShadow)">
        <path d="M50 90 Q45 70 50 50" stroke="#6D4C41" strokeWidth="3" fill="none" />
        <path d="M50 50 Q30 40 25 55 Q30 70 50 60" fill="url(#leafGreen)" />
        <path d="M50 50 Q70 40 75 55 Q70 70 50 60" fill="url(#leafGreen)" />
        <path d="M50 50 Q35 30 30 40 Q35 55 50 45" fill="url(#leafGreen)" />
        <path d="M50 50 Q65 30 70 40 Q65 55 50 45" fill="url(#leafGreen)" />
        <path d="M50 50 Q50 25 50 20 Q60 30 50 45 Q40 30 50 20" fill="url(#leafGreen)" />
      </g>
    </motion.svg>
  )
}
