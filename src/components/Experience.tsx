import { motion } from "framer-motion"
import { Calendar, ClipboardCheck, Sparkles, Heart } from "lucide-react"
import ScrollReveal from "./ScrollReveal"

const steps = [
  {
    icon: Calendar,
    title: "Escolha sua mesa",
    description: "Selecione o melhor horário e a mesa ideal para seu momento.",
    color: "from-brand-500/20 to-brand-600/10",
  },
  {
    icon: ClipboardCheck,
    title: "Faça sua reserva",
    description: "Confirme sua presença e garanta uma experiência personalizada.",
    color: "from-fire-500/20 to-fire-600/10",
  },
  {
    icon: Sparkles,
    title: "Aproveite o ambiente",
    description: "Deixe-se envolver pela atmosfera única do Brasa Urbana.",
    color: "from-brand-400/20 to-brand-500/10",
  },
  {
    icon: Heart,
    title: "Viva a experiência",
    description: "Saboreie cada detalhe de uma noite inesquecível.",
    color: "from-fire-400/20 to-fire-500/10",
  },
]

export default function Experience() {
  return (
    <section className="section-padding bg-dark-950">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-brand-400 font-semibold text-sm tracking-[0.2em] uppercase">Experiência</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mt-3 leading-tight">
              Sua experiência{" "}
              <span className="gradient-text">começa aqui</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/40 via-fire-500/20 to-transparent -translate-x-1/2" />

          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {steps.map((step, index) => (
              <ScrollReveal key={step.title} delay={index * 0.15}>
                <div className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-6 lg:gap-12`}>
                  <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"} text-center`}>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-dark-400 leading-relaxed max-w-md mx-auto lg:mx-0">{step.description}</p>
                  </div>

                  <div className="relative flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br ${step.color} border border-white/10 flex items-center justify-center relative z-10`}
                    >
                      <step.icon className="w-7 h-7 sm:w-8 sm:h-8 text-brand-400" />
                    </motion.div>
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-full left-1/2 -translate-x-1/2 w-px h-8 sm:h-12 bg-gradient-to-b from-brand-500/30 to-transparent" />
                    )}
                  </div>

                  <div className="flex-1 hidden lg:block" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
