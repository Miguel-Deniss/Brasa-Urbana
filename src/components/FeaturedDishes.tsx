import { motion } from "framer-motion"
import { Star, ArrowRight } from "lucide-react"
import ScrollReveal from "./ScrollReveal"

const dishes = [
  {
    name: "Picanha Brasa Urbana",
    description: "Nossa picanha premium grelhada na brasa, servida com farofa especial e vinagrete.",
    price: "R$ 129,00",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=85",
    rating: 5,
  },
  {
    name: "Costela Defumada",
    description: "Costela bovina defumada por 12 horas, com barbecue artesanal da casa.",
    price: "R$ 139,00",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=85",
    rating: 5,
  },
  {
    name: "Burger Premium",
    description: "Hambúrguer angus 200g, cheddar envelhecido, bacon e molho especial.",
    price: "R$ 54,00",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=85",
    rating: 5,
  },
  {
    name: "Parrilla Especial",
    description: "Seleção de cortes argentinos grelhados na parrilla para duas pessoas.",
    price: "R$ 219,00",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&q=85",
    rating: 5,
  },
]

export default function FeaturedDishes() {
  return (
    <section className="section-padding bg-dark-950">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-brand-400 font-semibold text-sm tracking-[0.2em] uppercase">Destaques</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mt-3 leading-tight">
              Pratos em{" "}
              <span className="gradient-text">Destaque</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {dishes.map((dish, index) => (
            <ScrollReveal key={dish.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group relative bg-dark-800/30 border border-white/5 rounded-2xl overflow-hidden hover:border-brand-500/20 transition-all"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="relative w-full sm:w-48 h-56 sm:h-auto overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-dark-900/40 to-transparent" />
                  </div>
                  <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-1 mb-2">
                      {Array.from({ length: dish.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-fire-400 text-fire-400" />
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{dish.name}</h3>
                    <p className="text-dark-400 text-sm leading-relaxed mb-4">{dish.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-brand-400">{dish.price}</span>
                      <motion.button
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-1 text-sm text-dark-300 hover:text-brand-400 transition-colors"
                      >
                        Pedir <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
