import { motion } from "framer-motion"
import { Flame, Users, Star, ChefHat } from "lucide-react"
import ScrollReveal from "./ScrollReveal"

const stats = [
  { icon: Flame, value: "7+", label: "Anos de Experiência" },
  { icon: Users, value: "15K+", label: "Clientes Atendidos" },
  { icon: Star, value: "4.9", label: "Avaliação Média" },
  { icon: ChefHat, value: "50+", label: "Cortes Especiais" },
]

export default function About() {
  return (
    <section id="sobre" className="section-padding bg-dark-900">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal>
            <div className="space-y-6">
              <span className="text-brand-400 font-semibold text-sm tracking-[0.2em] uppercase">
                Nossa História
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight">
                Uma paixão pela{" "}
                <span className="gradient-text">gastronomia</span> que virou tradição
              </h2>
              <div className="space-y-4 text-dark-300 leading-relaxed">
                <p>
                  O Brasa Urbana nasceu da paixão pela boa carne e do desejo de criar um espaço
                  onde a tradição da churrascaria se encontra com a sofisticação da gastronomia
                  contemporânea.
                </p>
                <p>
                  Desde 2018, selecionamos pessoalmente cada corte, cada ingrediente e cada
                  detalhe do nosso ambiente para proporcionar uma experiência que vai muito
                  além de uma simples refeição.
                </p>
                <p>
                  Aqui, a brasa é mais que uma técnica — é uma filosofia. Cada prato é preparado
                  com respeito ao ingrediente e paixão pelo que fazemos.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-500/10 to-fire-500/10 rounded-2xl blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=85"
                alt="Equipe Brasa Urbana"
                className="relative rounded-2xl w-full h-[400px] sm:h-[500px] object-cover shadow-2xl"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16 lg:mt-24">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="relative group bg-dark-800/50 border border-white/5 rounded-2xl p-6 sm:p-8 text-center hover:border-brand-500/20 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-brand-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 rounded-xl bg-brand-500/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 text-brand-400" />
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-dark-400 text-xs sm:text-sm">{stat.label}</div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
