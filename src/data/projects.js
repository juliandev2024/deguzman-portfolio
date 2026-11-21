import calculator from '../assets/projects/calculator.webp'
import tripwise from '../assets/projects/tripwise.webp'
import motoguide from '../assets/projects/motoguide.webp'

// Add `liveUrl` and/or `repoUrl` to a project and the card shows the matching buttons.
export const projects = [
  {
    id: 'calculator',
    title: 'Calculator',
    description:
      'A functional calculator application designed to perform basic and advanced mathematical operations with a simple and user-friendly interface.',
    image: calculator,
    alt: 'Dark-themed calculator with number keys, operators and scientific functions such as log, square root and factorial',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'tripwise',
    title: 'TripWise',
    description:
      'A smart travel planning website designed to help users explore tourist destinations in Zambales, create itineraries, and estimate travel expenses based on their budget.',
    image: tripwise,
    alt: 'TripWise home page with the headline "Plan Smarter Trips Across Zambales" and cards for Admin, Traveler and Business Partner',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'motoguide',
    title: 'MotoGuide',
    description:
      'A motorcycle parts information website that provides details, descriptions, and functions of different motorcycle components to help users understand their motorcycles better.',
    image: motoguide,
    alt: 'MotoGuide home page for the Yamaha Mio Gear 125 with a search bar and cards for engine, transmission, fuel, electrical, chassis, control, exhaust and cooling parts',
    tags: ['HTML', 'CSS'],
  },
]
