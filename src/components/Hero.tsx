import { motion } from "framer-motion"
import { Check, ArrowRight, ChevronDown } from "lucide-react"

const indicators = [
  "Carnes Premium",
  "Ambiente Sofisticado",
  "Atendimento Especializado",
  "Ingredientes Selecionados",
]

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden scroll-mt-20">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=85"
          alt="Ambiente Brasa Urbana"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="gradient-overlay-hero absolute inset-0" />
        <div className="absolute inset-0 bg-dark-950/40" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-brand-400 font-semibold text-sm tracking-[0.2em] uppercase mb-4 border border-brand-500/30 rounded-full px-4 py-1.5"
          >
            Desde 2018
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            O sabor da brasa
            <br />
            <span className="gradient-text">elevado a outro nível.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-dark-300 max-w-xl mb-8 leading-relaxed"
          >
            Carnes selecionadas, ingredientes premium e uma experiência gastronômica inesquecível.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12"
          >
            <a
              href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva%20no%20Brasa%20Urbana."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold transition-all hover:shadow-xl hover:shadow-brand-600/30 active:scale-95"
            >
              Reservar Agora
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <button
              onClick={() => scrollTo("#cardapio")}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-white/50 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold transition-all active:scale-95"
            >
              Ver Cardápio
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-x-6 gap-y-2"
          >
            {indicators.map((item) => (
              <span key={item} className="flex items-center gap-2 text-dark-300 text-sm">
                <span className="w-4 h-4 rounded-full bg-brand-500/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-2.5 h-2.5 text-brand-400" />
                </span>
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => scrollTo("#sobre")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  )
}
