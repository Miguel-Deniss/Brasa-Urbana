import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, UtensilsCrossed } from "lucide-react"

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#sobre", label: "Sobre" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#galeria", label: "Galeria" },
  { href: "#depoimentos", label: "Avaliações" },
  { href: "#contato", label: "Contato" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    setTimeout(() => {
      window.location.hash = href
    }, 10)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-dark-950/95 backdrop-blur-md shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button onClick={() => handleNavClick("#hero")} className="flex items-center gap-2 group cursor-pointer">
            <UtensilsCrossed className="w-6 h-6 text-brand-500 group-hover:text-fire-400 transition-colors" />
            <span className="font-heading text-xl md:text-2xl font-bold text-white tracking-wide">
              Brasa<span className="text-brand-500">Urbana</span>
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-dark-300 hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-500 after:transition-all hover:after:w-full cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva%20no%20Brasa%20Urbana."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-brand-600/30 active:scale-95"
            >
              Reservar Mesa
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              aria-label="Abrir menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark-950/98 backdrop-blur-md border-t border-white/5 overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-6 gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-dark-300 hover:text-white py-3 px-4 rounded-lg hover:bg-white/5 transition-colors text-sm font-medium text-left cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva%20no%20Brasa%20Urbana."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-brand-600 hover:bg-brand-500 text-white py-3 px-4 rounded-xl text-center text-sm font-semibold transition-all"
              >
                Reservar Mesa
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
