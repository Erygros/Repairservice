import Link from 'next/link'

export default function Footer(){
  return (
    <footer className="mt-12 border-t border-gray-800 text-gray-400 py-8">
      <div className="container flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="font-semibold text-white">[UNTERNEHMENSNAME EINTRAGEN]</div>
          <div className="text-sm mt-1">[ANSCHRIFT EINTRAGEN] · [EMAIL EINTRAGEN]</div>
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-sm text-gray-300">Impressum</a>
          <a href="#" className="text-sm text-gray-300">Datenschutz</a>
        </div>
      </div>
    </footer>
  )
}
