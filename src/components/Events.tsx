import { motion } from "framer-motion"
import { PartyPopper, Briefcase, Cake, Users } from "lucide-react"
import ScrollReveal from "./ScrollReveal"

const events = [
  { icon: PartyPopper, title: "Jantares Especiais", description: "Noites temáticas com menus exclusivos preparados pelo nosso chef." },
  { icon: Briefcase, title: "Eventos Corporativos", description: "Estrutura completa para confraternizações e reuniões de negócios." },
  { icon: Cake, title: "Aniversários", description: "Celebre seu momento especial com um menu personalizado." },
  { icon: Users, title: "Encontros Familiares", description: "Ambiente acolhedor para reunir a família e compartilhar bons momentos." },
]

export default function Events() {
  return (
    <section className="section-padding bg-dark-950">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal>
            <div className="space-y-6">
              <span className="text-brand-400 font-semibold text-sm tracking-[0.2em] uppercase">Eventos</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight">
                Recebemos{" "}
                <span className="gradient-text">seu evento</span>
              </h2>
              <p className="text-dark-300 leading-relaxed">
                Seja um jantar romântico, uma comemoração especial ou um evento corporativo,
                o Brasa Urbana tem a estrutura e o cardápio perfeitos para tornar seu momento inesquecível.
              </p>

              <div className="space-y-4">
                {events.map((event) => (
                  <motion.div
                    key={event.title}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-dark-800/30 border border-white/5"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <event.icon className="w-5 h-5 text-brand-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">{event.title}</h4>
                      <p className="text-dark-400 text-sm">{event.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <a
                href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20solicitar%20uma%20reserva%20no%20Brasa%20Urbana."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-all hover:shadow-xl hover:shadow-brand-600/30 active:scale-95"
              >
                Solicitar Reserva
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-500/10 to-fire-500/10 rounded-2xl blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=85"
                alt="Evento Brasa Urbana"
                className="relative rounded-2xl w-full h-[400px] sm:h-[500px] object-cover shadow-2xl"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
