export interface Testimonial {
  id: number
  name: string
  photo: string
  rating: number
  text: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ana Beatriz",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    rating: 5,
    text: "Melhor restaurante da cidade! A picanha é simplesmente impecável, o ambiente é sofisticado e o atendimento nota 10. Recomendo de olhos fechados.",
  },
  {
    id: 2,
    name: "Carlos Eduardo",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    rating: 5,
    text: "Carnes impecáveis e ambiente fantástico. A costela defumada é de outro nível. Virei cliente fiel!",
  },
  {
    id: 3,
    name: "Juliana Mendes",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    rating: 5,
    text: "Experiência que vale cada visita. Desde a entrada até a sobremesa, tudo é pensado nos mínimos detalhes. O burger premium é sensacional!",
  },
  {
    id: 4,
    name: "Rafael Oliveira",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
    rating: 5,
    text: "Ambiente elegante e aconchegante ao mesmo tempo. Perfeito para um jantar especial. O Tomahawk é imperdível!",
  },
  {
    id: 5,
    name: "Larissa Costa",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80",
    rating: 5,
    text: "Fiz uma reserva para o aniversário do meu marido e foi simplesmente perfeito. A equipe é extremamente atenciosa. Voltaremos sempre!",
  },
  {
    id: 6,
    name: "Fernando Lima",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    rating: 5,
    text: "Para quem aprecia uma boa carne, esse é o lugar certo. O Ancho Angus derrete na boca. E a carta de vinhos é excelente.",
  },
]
