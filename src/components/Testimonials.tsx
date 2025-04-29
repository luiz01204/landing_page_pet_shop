"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    photo: "/tutor2.jpg",
    content:
      "Desde que comecei a levar a Luna para banho e tosa aqui, ela nunca esteve tão feliz! O atendimento é impecável, os profissionais são super cuidadosos e sempre deixam minha peluda linda e cheirosa. Recomendo de olhos fechados!",
    author: "Mariana Souza",
    role: "Tutora da Luna (Golden Retriever)",
  },
  {
    photo: "/tutor1.png",     
    content:
      "O serviço de hotel para pets foi uma experiência incrível! Precisei viajar e fiquei tranquilo sabendo que o Thor estava sendo bem cuidado. Recebi fotos e atualizações diárias, e ele voltou para casa super feliz! Sem dúvida, o melhor petshop da região.",
    author: "Rafael",
    role: "Tutor do Thor (Bulldog Francês)",
  },
  {
    photo: "/tutor3.jpg",
    content:
      "Meus gatos nunca gostaram de sair de casa, mas o atendimento nesse petshop fez toda a diferença. A equipe é muito paciente e cuidadosa, e o serviço de banho especializado para felinos foi maravilhoso! Agora sei onde confiar o cuidado deles.",
    author: "Camila Fernandes",
    role: "Tutora da Mel e do Max",
  },
]

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  return (
    <section className="bg-yellow-400 py-10 md:py-16">
      <div className="container mx-auto px-4 md:flex md:flex-col md:items-center">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Depoimentos:
        </h2>

        <div className="relative max-w-4xl">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 px-3"
                >
                  <article className="bg-[#1e293b] text-white rounded-2xl p-10 space-y-4 h-full flex flex-col items-center text-center">
                    <Image 
                      src={item.photo} 
                      alt="foto tutor"
                      width={160}
                      height={160}
                      className="rounded-full"    
                    />
                    <p className="text-gray-200">{item.content}</p>
                    <div>
                      <p className="font-bold">{item.author}</p>
                      <p className="text-sm text-gray-400">{item.role}</p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Botões de navegação coladinhos no carrossel */}
          <div className="absolute inset-y-0 left-0 flex items-center px-2 z-10">
            <button
              className="
                bg-white 
                flex items-center 
                justify-center 
                rounded-full 
                shadow-lg 
                w-10 h-10 
                absolute 
                left-3 
                -translate-y-1/2 
                -translate-x-1/2 
                top-1/2 
                z-10
                cursor-pointer"
              onClick={scrollPrev}
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center px-2 z-10">
            <button
              className="
                bg-white 
                flex items-center 
                justify-center 
                rounded-full 
                shadow-lg 
                w-10 h-10 
                absolute 
                -right-6 
                -translate-y-1/2 
                -translate-x-1/2 
                top-1/2 
                z-10
                cursor-pointer"
              onClick={scrollNext}
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );  
}
