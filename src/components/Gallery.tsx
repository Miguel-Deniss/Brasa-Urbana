import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { galleryItems } from "../data/gallery"
import ScrollReveal from "./ScrollReveal"

const categories = [
  { id: "all", label: "Todas" },
  { id: "pratos", label: "Pratos" },
  { id: "ambiente", label: "Ambiente" },
  { id: "equipe", label: "Equipe" },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = activeCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const goNext = () => {
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex + 1) % filtered.length)
  }
  const goPrev = () => {
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length)
  }

  return (
    <section id="galeria" className="section-padding bg-dark-900">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-brand-400 font-semibold text-sm tracking-[0.2em] uppercase">Galeria</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mt-3 leading-tight">
              Fotos do{" "}
              <span className="gradient-text">Brasa Urbana</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
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
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
          >
            {filtered.map((item, index) => (
              <motion.button
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => openLightbox(index)}
                className="relative group aspect-square rounded-xl overflow-hidden bg-dark-800"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-dark-900/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-sm font-medium bg-brand-600/80 px-3 py-1 rounded-full">
                    {item.alt}
                  </span>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-dark-950/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/60 hover:text-white p-2 transition-colors z-10"
              aria-label="Fechar"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goPrev() }}
              className="absolute left-4 text-white/60 hover:text-white p-2 transition-colors z-10"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => { e.stopPropagation(); goNext() }}
              className="absolute right-4 text-white/60 hover:text-white p-2 transition-colors z-10"
              aria-label="Próximo"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              {lightboxIndex + 1} / {filtered.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
