const WA_NUMBER = '4915563535989'
const WA_LINK = `https://wa.me/${WA_NUMBER}`

function WhatsAppIcon({className='w-5 h-5'}: {className?: string}){
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M20.52 3.48a11.98 11.98 0 10-17 17L3 21l2.64-.7A12 12 0 0020.52 3.48z" stroke="#25D366" strokeWidth="0" fill="#25D366"/>
      <path d="M17.472 14.382c-.297-.149-1.757-.867-2.03-.967-.273-.1-.472-.149-.672.149-.197.297-.768.967-.94 1.166-.173.197-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.884-.788-1.48-1.761-1.652-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.1-.198.05-.372-.025-.521-.074-.149-.672-1.618-.92-2.218-.242-.583-.487-.504-.672-.513l-.573-.01c-.197 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.064 2.876 1.213 3.076c.149.198 2.095 3.2 5.077 4.487 2.98 1.29 2.98.861 3.517.807.538-.049 1.757-.718 2.006-1.413.248-.694.248-1.289.173-1.414-.074-.126-.273-.198-.57-.347z" fill="#fff"/>
    </svg>
  )
}

export default function WhatsAppButton({label='WhatsApp', message, className=''}:{label?:string; message?:string; className?:string}){
  const href = message ? `${WA_LINK}?text=${encodeURIComponent(message)}` : WA_LINK
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 bg-[#25D366] text-black font-semibold px-4 py-2 rounded shadow ${className}`}>
      <WhatsAppIcon />
      <span>{label}</span>
    </a>
  )
}
