import Image from "next/image";
import AboutImg from "../../public/about-1.png";
import { Check } from "lucide-react";
import { WhatsappLogo, MapPin } from "@phosphor-icons/react/dist/ssr";

export default function About() {
    return (
        <section 
            className="
                bg-amber-50
                container
                mx-auto
                px-10
                py-10 
                md:py-16
                grid
                grid-cols-1
                lg:grid-cols-2
                justify-center
                items-center
                gap-12
            ">
            <div className="relative w-full h-[400">
                <Image 
                    src={AboutImg} 
                    alt="foto do cachorro e do gato." 
                    className="rounded-3xl hover:scale-110 duration-300"
                />
            </div>
            <div className="space-y-4">
                <h2 className="text-4xl font-bold">
                    Sobre
                </h2>
                <p className="text-xl p-2 leading-8">
                    Em 2017, nasceu nosso Pet Shop, com uma missão simples:
                    💛 Tratar cada pet como se fosse nosso.
                </p>
                <ul className="space-y-4">
                    <li className="flex items-center gap-2">
                        <Check className="text-red-500" />
                        Veterianários 24h.
                    </li>
                    <li className="flex items-center gap-2">
                        <Check className="text-red-500" />
                        Equipe treianda constantemente.
                    </li>
                    <li className="flex items-center gap-2">
                        <Check className="text-red-500" />
                        100% dos nossos cliente aprovam nossos cuidados.
                    </li>
                </ul>
                <div className="md:flex md:gap-2">
                    <a 
                        href="#"
                        className="
                            flex
                            items-center
                            justify-center
                            w-fit
                            bg-red-500
                            hover:bg-red-700
                            font-semibold
                            rounded-md
                            px-5
                            py-2
                            gap-2
                            text-white
                            mb-4
                        ">
                        <WhatsappLogo />
                        <p>Contato via WhatsApp</p>
                    </a>
                    <a 
                        href="#"
                        className="
                            flex
                            items-center
                            justify-center
                            w-fit
                            font-semibold
                            rounded-md
                            hover:text-red-700
                            px-5
                            py-2
                            gap-2
                            mb-2
                        ">
                        <MapPin />
                        <p>Veja nossa localização</p>
                    </a>
                </div>
            </div>
        </section>
    );
}
