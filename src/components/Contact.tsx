import { Phone, MessageCircle, MapPin, Clock, Camera, Globe, Video } from "lucide-react"
import ScrollReveal from "./ScrollReveal"

const contactInfo = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "(11) 99999-9999",
    href: "https://wa.me/5511999999999",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "(11) 3000-0000",
    href: "tel:+551130000000",
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: "Rua Oscar Freire, 900 - Jardim Paulista, São Paulo - SP",
    href: "https://maps.google.com",
  },
  {
    icon: Clock,
    label: "Horário de Funcionamento",
    value: "Ter-Sáb: 18h às 00h | Dom: 12h às 22h",
    href: null,
  },
]

const socialLinks = [
  { icon: Camera, label: "Instagram", href: "#" },
  { icon: Globe, label: "Facebook", href: "#" },
  { icon: Video, label: "YouTube", href: "#" },
]

export default function Contact() {
  return (
    <section id="contato" className="section-padding bg-dark-900">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-brand-400 font-semibold text-sm tracking-[0.2em] uppercase">Contato</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mt-3 leading-tight">
              Entre em{" "}
              <span className="gradient-text">contato</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <ScrollReveal key={info.label} delay={index * 0.1}>
                {info.href ? (
                  <a
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-xl bg-dark-800/30 border border-white/5 hover:border-brand-500/20 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500/20 transition-colors">
                      <info.icon className="w-5 h-5 text-brand-400" />
                    </div>
                    <div>
                      <div className="text-dark-400 text-xs uppercase tracking-wider">{info.label}</div>
                      <div className="text-white font-medium">{info.value}</div>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-dark-800/30 border border-white/5">
                    <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-brand-400" />
                    </div>
                    <div>
                      <div className="text-dark-400 text-xs uppercase tracking-wider">{info.label}</div>
                      <div className="text-white font-medium">{info.value}</div>
                    </div>
                  </div>
                )}
              </ScrollReveal>
            ))}

            <ScrollReveal delay={0.4}>
              <div className="flex items-center gap-3 pt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-dark-800/50 border border-white/10 flex items-center justify-center text-dark-300 hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-500/10 to-fire-500/10 rounded-2xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden h-[350px] sm:h-[400px] border border-white/5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197493880627!2d-46.6640!3d-23.5610!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzM5LjYiUyA0NsKwMzknNTAuNCJX!5e0!3m2!1spt-BR!2sbr!4v1"
                  title="Localização Brasa Urbana"
                  className="w-full h-full"
                  style={{ filter: "invert(0.9) hue-rotate(180deg) saturate(0.5)" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
