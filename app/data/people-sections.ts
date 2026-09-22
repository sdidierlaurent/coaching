import { am, admin, front, pm, design, back, training, mentor, inspi } from './people'

export const peopleSections = [
  { id: 'prospection', label: 'Prospection / Account manager', shortLabel: 'Prospection', icon: 'i-lucide-messages-square', people: am.value },
  { id: 'administratif', label: 'Administratif', shortLabel: 'Administratif', icon: 'i-lucide-folder-open', people: admin.value },
  { id: 'front-end', label: 'Développeur front-end', shortLabel: 'Front-end', icon: 'i-lucide-code-xml', people: front.value },
  { id: 'gestion-de-projet', label: 'Project manager', shortLabel: 'Gestion de projet', icon: 'i-lucide-waypoints', people: pm.value },
  { id: 'design', label: 'Design', shortLabel: 'Design', icon: 'i-lucide-pen-tool', people: design.value },
  { id: 'back-end', label: 'Développeur back-end', shortLabel: 'Back-end', icon: 'i-lucide-database', people: back.value },
  { id: 'formation', label: 'Formation / Coaching', shortLabel: 'Formation / Coaching', icon: 'i-lucide-sprout', people: training.value },
  { id: 'mentorat', label: 'Mentor', shortLabel: 'Mentorat', icon: 'i-lucide-compass', people: mentor.value },
  { id: 'inspiration', label: 'Inspiration', shortLabel: 'Inspiration', icon: 'i-lucide-sparkles', people: inspi.value }
]

export const peopleCount = new Set(peopleSections.flatMap(section => section.people.map(person => person.name.trim()))).size
