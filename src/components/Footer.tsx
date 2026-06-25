import { UtensilsCrossed, MessageCircle, Phone, MapPin, Camera, Globe, Video, ArrowUp } from "lucide-react"

const quickLinks = [
  { href: "#hero", label: "Home" },
  { href: "#sobre", label: "Sobre" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#galeria", label: "Galeria" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
]

const contactLinks = [
  { icon: MessageCircle, label: "(11) 99999-9999", href: "https://wa.me/5511999999999" },
  { icon: Phone, label: "(11) 3000-0000", href: "tel:+551130000000" },
  { icon: MapPin, label: "Rua Oscar Freire, 900", href: "https://maps.google.com" },
]

const socialLinks = [
  { icon: Camera, label: "Instagram", href: "#" },
  { icon: Globe, label: "Facebook", href: "#" },
  { icon: Video, label: "YouTube", href: "#" },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-dark-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#hero" className="flex items-center gap-2 mb-4">
              <UtensilsCrossed className="w-6 h-6 text-brand-500" />
              <span className="font-heading text-xl font-bold text-white">
                Brasa<span className="text-brand-500">Urbana</span>
              </span>
            </a>
            <p className="text-dark-400 text-sm leading-relaxed mb-4">
              O sabor da brasa elevado a outro nível. Carnes premium, ambiente sofisticado e
              uma experiência gastronômica inesquecível.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-dark-800/50 border border-white/5 flex items-center justify-center text-dark-400 hover:bg-brand-600 hover:text-white transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-dark-400 hover:text-brand-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contato</h4>
            <ul className="space-y-3">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-dark-400 hover:text-brand-400 transition-colors text-sm"
                  >
                    <link.icon className="w-4 h-4 flex-shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Funcionamento</h4>
            <div className="text-dark-400 text-sm space-y-2">
              <p>Terça a Sábado: 18h às 00h</p>
              <p>Domingo: 12h às 22h</p>
              <p className="pt-2 text-dark-500">Segunda: Fechado</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dark-500 text-xs text-center sm:text-left">
            Projeto conceito desenvolvido para fins de portfólio. &copy; {new Date().getFullYear()} Brasa Urbana.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-dark-400 hover:text-brand-400 text-sm transition-colors"
          >
            Voltar ao topo <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
