import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { categories, menuItems } from "../data/menu"
import ScrollReveal from "./ScrollReveal"

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filtered = activeCategory === "all" ? menuItems : menuItems.filter((item) => item.category === activeCategory)

  return (
    <section id="cardapio" className="section-padding bg-dark-900">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-brand-400 font-semibold text-sm tracking-[0.2em] uppercase">Cardápio</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mt-3 leading-tight">
              Nossos{" "}
              <span className="gradient-text">Pratos</span>
            </h2>
            <p className="text-dark-400 mt-4 max-w-2xl mx-auto">
              Explorando sabores que vão da brasa ao paladar, cada prato é uma obra-prima.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-10 lg:mb-14">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-brand-600 text-white shadow-lg shadow-brand-600/30"
                    : "bg-dark-800/50 text-dark-300 hover:text-white hover:bg-dark-700/50 border border-white/5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {filtered.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group bg-dark-800/30 border border-white/5 rounded-2xl overflow-hidden hover:border-brand-500/20 hover:bg-dark-800/50 transition-all"
              >
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-base sm:text-lg font-semibold text-white">{item.name}</h3>
                    <span className="text-brand-400 font-bold text-sm sm:text-base whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-dark-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
