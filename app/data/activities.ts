export const WEEK_HOURS = 168

export const activityCategories = [
  { id: 'social', label: 'Social', caption: 'Les liens dans ma semaine', icon: 'i-lucide-heart-handshake', color: '#0d9488' },
  { id: 'loisirs', label: 'Loisirs', caption: 'Les activités que je souhaite retrouver', icon: 'i-lucide-sparkles', color: '#8b5cf6' },
  { id: 'sante', label: 'Santé & bien-être', caption: 'La place du soin et du repos', icon: 'i-lucide-sprout', color: '#2563eb' },
  { id: 'travail', label: 'Travail', caption: 'Le temps de ma vie professionnelle', icon: 'i-lucide-briefcase-business', color: '#ea580c' },
  { id: 'corvees', label: 'Corvées', caption: 'Le quotidien, lui aussi, prend de la place', icon: 'i-lucide-house', color: '#a16207' }
] as const

export type ActivityCategory = typeof activityCategories[number]['id']
export interface Activity {
  id: string
  category: ActivityCategory
  label: string
  hours: number | null
}

// Durées reprises de la page d'origine. La lecture n'y était pas chiffrée.
export const initialActivities: Activity[] = [
  { id: 'papa', category: 'social', label: 'Papa', hours: 7 },
  { id: 'famille', category: 'social', label: 'Famille', hours: 3 },
  { id: 'amis', category: 'social', label: 'Amis', hours: 4 },
  { id: 'vie-sentimentale', category: 'social', label: 'Vie sentimentale', hours: null },
  { id: 'jeu-de-role', category: 'loisirs', label: 'Jeu de rôle', hours: 2 },
  { id: 'ecriture', category: 'loisirs', label: 'Écriture', hours: 1.5 },
  { id: 'culture', category: 'loisirs', label: 'Sorties culturelles / spectacles', hours: 1 },
  { id: 'film', category: 'loisirs', label: 'Films, séries, vidéos', hours: 1 },
  { id: 'social-media', category: 'loisirs', label: 'Réseaux sociaux', hours: 1 },
  { id: 'lecture', category: 'loisirs', label: 'Lecture', hours: null },
  { id: 'sante-mentale', category: 'sante', label: 'Santé mentale', hours: 1 },
  { id: 'sport', category: 'sante', label: 'Sport, Activité physique', hours: null },
  { id: 'repos', category: 'sante', label: 'Repos / dormir', hours: 40 },
  { id: 'travail', category: 'travail', label: 'Travail', hours: 32 },
  { id: 'quotidien', category: 'corvees', label: 'Quotidien (ménage, administratif personnel…)', hours: 21 }
]

export const workOptions = [
  { label: '4/5', description: '32 h / semaine', value: 32 },
  { label: 'Plein temps', description: '38 h / semaine', value: 38 },
  { label: 'Entrepreneur', description: '50 h / semaine', value: 50 }
]

export function formatHours(value: number) {
  return new Intl.NumberFormat('fr-BE', { maximumFractionDigits: 1 }).format(value)
}
