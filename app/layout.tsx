import './globals.css'
import { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Elektronik Reparatur – Diagnose & Reparatur deutschlandweit',
  description: 'Elektronik reparieren lassen: Kameras, Audio-/Videogeräte, Netzteile, Platinen und weitere Kleingeräte. 20 € Arbeitszeit pro Stunde. Deutschlandweiter Versand.',
  openGraph: {
    title: 'Elektronik Reparatur – Diagnose & Reparatur deutschlandweit',
    description: 'Elektronik reparieren lassen: Kameras, Audio-/Videogeräte, Netzteile, Platinen und weitere Kleingeräte. 20 € Arbeitszeit pro Stunde. Deutschlandweiter Versand.'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="de">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
