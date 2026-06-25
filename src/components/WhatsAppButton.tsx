import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva%20no%20Brasa%20Urbana."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-600/40 flex items-center justify-center transition-all"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </motion.a>
  )
}
