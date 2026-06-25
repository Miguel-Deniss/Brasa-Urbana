import { motion } from "framer-motion"
import { MessageCircle, ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="gradient-overlay absolute inset-0" />
        <div className="absolute inset-0 bg-dark-950/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-6xl font-heading font-bold text-white leading-tight mb-4"
        >
          Reserve sua mesa agora.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg sm:text-xl text-dark-300 max-w-2xl mx-auto mb-8 sm:mb-10"
        >
          Garanta uma experiência gastronômica única no Brasa Urbana.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva%20no%20Brasa%20Urbana."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-brand-600 hover:bg-brand-500 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold transition-all hover:shadow-2xl hover:shadow-brand-600/40"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          Reservar pelo WhatsApp
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.a>
      </div>
    </section>
  )
}
