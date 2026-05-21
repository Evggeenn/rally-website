export interface CarData {
  name: string
  year: string
  engine: string
  power: string
  drive: string
  wins: number
  titles: number
  image?: string
}

export interface DriverData {
  name: string
  era: string
  badge: string
  titles: string
  description: string
  image?: string
}

export interface EraData {
  id: string
  period: string
  title: string
  badge: string
  cars: { name: string; year: string }[]
  info: string[]
  stats: { number: string; label: string }[]
  highlights: { year: string; text: string }[]
  teams: { name: string; description: string }[]
}

export interface GalleryItem {
  src: string
  alt: string
  caption: string
}
