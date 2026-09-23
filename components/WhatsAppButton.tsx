import { SiWhatsapp } from 'react-icons/si'

const WA_NUMBER = '4915563535989'
const WA_LINK = `https://wa.me/${WA_NUMBER}`

export default function WhatsAppButton({label='WhatsApp', message, className='', onClick}:{label?:string; message?:string; className?:string; onClick?: () => void}){
  const href = message ? `${WA_LINK}?text=${encodeURIComponent(message)}` : WA_LINK
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick} className={`whatsapp-button inline-flex items-center gap-2 font-semibold px-4 py-2 shadow ${className}`}>
      <SiWhatsapp aria-hidden="true" className="whatsapp-icon" />
      <span>{label}</span>
    </a>
  )
}
