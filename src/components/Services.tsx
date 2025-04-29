"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock } from 'lucide-react'
import { WhatsappLogo } from '@phosphor-icons/react'

const services = [
  {
    title: "Banho & Tosa",
    description: "Inclui banho com produtos específicos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada).",
    icon: <Scissors />,
  },
  {
    title: "Consulta Veterinária",
    description: "Oferece atendimento clínico básico ou especializado para cuidar da saúde do animal. Inclui diagnóstico de doenças, aplicação de vacinas obrigatórias.",
    icon: <Syringe />,
  },
  {
    title: "Táxi Pet",
    description: "Serviço de transporte para levar e buscar os pets no petshop, clínicas veterinárias ou outros locais. Ideal para tutores que não têm tempo ou transporte adequado para locomover os animais.",
    icon: <CarTaxiFront />,
  },
  {
    title: "Hotel para pets",
    description: "Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alguns dias. Os pets ficam acomodados em espaços seguros, confortáveis.",
    icon: <Hotel />,
  },
]

export default function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  })

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="bg-white py-10 md:py-16">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">
                Serviços:
            </h2>

            <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {services.map(({ title, description, icon }, index) => (
                            <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                                <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                    <div className="flex-1 flex gap-3 items-start justify-between">
                                        <span className="text-3xl">{icon}</span>
                                        <div>
                                            <h3 className="font-bold text-xl my-1">{title}</h3>
                                            <p className="text-gray-400 text-sm select-none">{description}</p>
                                        </div>
                                    </div>

                                    <footer className="border-t border-gray-700 pt-4 flex items-center justify-center text-sm">
                                        <a
                                            target="_blank"
                                            href={`https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações sbore ${title}`}
                                            className="flex items-center gap-2 hover:bg-red-500 px-4 py-1 rounded-md duration-300"
                                        >
                                            <WhatsappLogo className="w-5 h-5" />
                                            Entrar em contato
                                        </a>
                                    </footer>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Botões de navegação */}
                <button
                    className="
                        bg-white 
                        flex items-center 
                        justify-center 
                        rounded-full 
                        shadow-lg w-10 
                        h-10 absolute 
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

                <button
                    className="
                        bg-white 
                        flex items-center 
                        justify-center 
                        rounded-full 
                        shadow-lg w-10 
                        h-10 absolute 
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
    </section>
  );
}
