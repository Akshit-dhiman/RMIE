export const BRANDS = [
  { id: 1, name: 'TE Connectivity', slug: 'te-connectivity', logo: '/brand-logos/te-connectivity.svg' },
  { id: 2, name: 'Molex', slug: 'molex', logo: '/brand-logos/molex-logo.svg' },
  { id: 3, name: 'JST', slug: 'jst', logo: '' }, // No logo file found
  { id: 4, name: 'KET', slug: 'ket', logo: '' }, // No logo file found
  { id: 5, name: 'Aptiv', slug: 'aptiv', logo: '/brand-logos/aptiv-logo.svg' },
  { id: 6, name: 'HRS', slug: 'hrs', logo: '' }, // No logo file found
  { id: 7, name: 'Sumitomo', slug: 'sumitomo', logo: '/brand-logos/Sumitomo_Corporation-Logo.wine.svg' },
  { id: 8, name: 'Amphenol', slug: 'amphenol', logo: '/brand-logos/Amphenol-Logo.wine.svg' },
  { id: 9, name: 'Yazaki', slug: 'yazaki', logo: '/brand-logos/yazaki-company-logo.svg' },
]

export const CATEGORIES = [
  'Automotive Connectors',
  'Wire-to-Wire Connectors',
  'Wire-to-Board Connectors',
  'Terminals & Housings',
  'Wire seal',
  'Cable Ties',
]

export const PRODUCTS = [
  {
    id: 1,
    brand: 'TE Connectivity',
    partNumber: 'TE-AMP-2.0-2',
    category: 'Automotive Connectors',
    description: 'High-reliability 2.0mm pitch automotive connector with sealed contacts',
    image: '/placeholder.svg',
  },
  {
    id: 2,
    brand: 'Molex',
    partNumber: 'MX-503480-0800',
    category: 'Wire-to-Wire Connectors',
    description: 'Premium wire-to-wire connector for automotive applications, 8-pin configuration',
    image: '/placeholder.svg',
  },
  {
    id: 3,
    brand: 'JST',
    partNumber: 'JST-XH-2.54-04',
    category: 'Wire-to-Board Connectors',
    description: 'Compact 2.54mm pitch wire-to-board connector, 4-pin',
    image: '/placeholder.svg',
  },
  {
    id: 4,
    brand: 'KET',
    partNumber: 'KET-MG-645840',
    category: 'Terminals & Housings',
    description: 'Precision terminals and housings for industrial connectors',
    image: '/placeholder.svg',
  },
  {
    id: 5,
    brand: 'Aptiv',
    partNumber: 'APT-DTM-06',
    category: 'Automotive Connectors',
    description: 'Delphi Deutsch-style connector, sealed automotive grade',
    image: '/placeholder.svg',
  },
  {
    id: 6,
    brand: 'HRS',
    partNumber: 'HRS-DF13-3DS',
    category: 'Wire-to-Board Connectors',
    description: 'Hybrid connector for automotive and industrial applications',
    image: '/placeholder.svg',
  },
  {
    id: 7,
    brand: 'Sumitomo',
    partNumber: 'SUM-6098-4123',
    category: 'Wire-to-Wire Connectors',
    description: 'Sealed automotive connectors with integrated locking mechanism',
    image: '/placeholder.svg',
  },
  {
    id: 8,
    brand: 'Amphenol',
    partNumber: 'AMP-MS27487-4-06',
    category: 'Cable Ties',
    description: 'Military-grade cable management and connector solutions',
    image: '/placeholder.svg',
  },
]

export const FEATURES = [
  {
    title: '24 Hour Quotation Response',
    description: 'Get competitive pricing on any connector product within 24 hours',
    icon: '⚡',
  },
  {
    title: '70% In-Stock Availability',
    description: 'Extensive inventory ensures faster delivery and reduced lead times',
    icon: '📦',
  },
  {
    title: 'Global Sourcing Network',
    description: 'Access to premium manufacturers worldwide with authentic products',
    icon: '🌍',
  },
  {
    title: 'Quality Guarantee',
    description: 'All products certified authentic with comprehensive quality assurance',
    icon: '✓',
  },
  {
    title: '50+ Factory Network',
    description: 'Direct relationships with 50+ manufacturing facilities globally',
    icon: '🏭',
  },
]

export const CORE_OFFERINGS = [
  {
    title: 'Automotive Connectors',
    description: 'Industry-leading connectors for automotive applications',
    category: 'Automotive Connectors',
  },
  {
    title: 'Wire-to-Wire Connectors',
    description: 'Reliable connectors for wire-to-wire connections',
    category: 'Wire-to-Wire Connectors',
  },
  {
    title: 'Wire-to-Board Connectors',
    description: 'Precision connectors for PCB and board applications',
    category: 'Wire-to-Board Connectors',
  },
  {
    title: 'Terminals & Housings',
    description: 'Complete range of terminals and housing solutions',
    category: 'Terminals & Housings',
  },
  {
    title: 'Wire seal',
    description: 'Reliable wire sealing solutions for insulation and environmental protection',
    category: 'Wire seal',
  },
]
