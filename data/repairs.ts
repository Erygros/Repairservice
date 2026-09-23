export type RepairCategory = {
  category: string
  description: string
  items: string[]
}

export const REPAIRS: RepairCategory[] = [
  {
    category: 'Kameras',
    description: 'Digitalkameras, Camcorder und Objektive',
    items: ['Digitalkamera', 'Camcorder', 'Objektiv']
  },
  {
    category: 'Audio & HiFi',
    description: 'Player, Receiver und Verstärker',
    items: ['DVD-Player', 'Blu-ray-Player', 'VHS', 'Receiver', 'Verstärker', 'CD-Player']
  },
  {
    category: 'Netzteile & Strom',
    description: 'Netzteile und Stromversorgungen',
    items: ['Netzteil', 'Netzteil (Kleingeräte)', 'Stromversorgungen']
  },
  {
    category: 'Elektronik & Platinen',
    description: 'Steuerplatinen, Displays und Anschlüsse',
    items: ['Elektronische Baugruppen', 'Platinen', 'Steuerplatinen', 'Displays', 'USB-Anschlüsse', 'DC-Buchsen', 'Audio-Buchsen']
  },
  {
    category: 'Bedienelemente',
    description: 'Schalter, Taster und Bedienelemente',
    items: ['Schalter', 'Taster', 'Bedienelemente']
  }
]
