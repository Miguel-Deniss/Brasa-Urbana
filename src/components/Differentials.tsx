import { motion } from "framer-motion"
import { Beef, Leaf, Wind, Users, Wine, Heart } from "lucide-react"
import ScrollReveal from "./ScrollReveal"

const items = [
  { icon: Beef, title: "Carnes Selecionadas", description: "Cortes premium maturados e selecionados dos melhores produtores." },
  { icon: Leaf, title: "Ingredientes Frescos", description: "Produtos sazonais e orgânicos vindos diretamente de pequenos produtores." },
  { icon: Wind, title: "Ambiente Climatizado", description: "Espaço climatizado com design sofisticado e acústica planejada." },
  { icon: Users, title: "Equipe Especializada", description: "Chefs renomados e sommeliers prontos para orientar sua escolha." },
  { icon: Wine, title: "Carta de Bebidas", description: "Seleção de vinhos, cervejas artesanais e drinks autorais." },
  { icon: Heart, title: "Atendimento Premium", description: "Serviço personalizado com foco em cada detalhe da sua experiência." },
]

export default function Differentials() {
  return (
    <section className="section-padding bg-dark-950">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-brand-400 font-semibold text-sm tracking-[0.2em] uppercase">Diferenciais</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mt-3 leading-tight">
              Por que escolher o{" "}
              <span className="gradient-text">Brasa Urbana</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {items.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                className="group bg-dark-800/30 border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-brand-500/20 hover:bg-dark-800/50 transition-all"
              >
                <div className="w-12 h-12 mb-5 rounded-xl bg-brand-500/10 flex items-center justify-center group-hover:bg-brand-500/20 transition-colors">
                  <item.icon className="w-6 h-6 text-brand-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-dark-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
