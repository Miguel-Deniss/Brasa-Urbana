import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { testimonials } from "../data/testimonials"
import ScrollReveal from "./ScrollReveal"

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent((prev) => (prev + 1) % testimonials.length), [])
  const prev = useCallback(() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length), [])

  useEffect(() => {
    const interval = setInterval(next, 6000)
    return () => clearInterval(interval)
  }, [next])

  const t = testimonials[current]

  return (
    <section id="depoimentos" className="section-padding bg-dark-900">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-brand-400 font-semibold text-sm tracking-[0.2em] uppercase">Depoimentos</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mt-3 leading-tight">
              O que nossos{" "}
              <span className="gradient-text">clientes dizem</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute -top-8 left-0 text-brand-500/10">
            <Quote className="w-20 h-20 sm:w-24 sm:h-24" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="text-center px-4"
            >
              <div className="flex items-center justify-center gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-fire-400 text-fire-400" />
                ))}
              </div>

              <blockquote className="text-lg sm:text-xl lg:text-2xl text-white font-heading leading-relaxed mb-8 italic">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-500/30"
                />
                <div className="text-left">
                  <div className="text-white font-semibold">{t.name}</div>
                  <div className="text-dark-400 text-sm">Cliente Brasa Urbana</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-white/10 hover:border-brand-500/50 text-dark-300 hover:text-white transition-all"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "bg-brand-500 w-6" : "bg-dark-600 hover:bg-dark-500"
                  }`}
                  aria-label={`Ir para depoimento ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 rounded-full border border-white/10 hover:border-brand-500/50 text-dark-300 hover:text-white transition-all"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
