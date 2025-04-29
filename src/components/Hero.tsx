import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import HeroDogImage from "../../public/hero-dog.webp";
import Image from "next/image";

export default function Hero() {
    return (
        <section 
            className="
                bg-red-500 
                text-white 
                relative 
                overflow-hidden
                mx-auto
                px-10
                pt-10
                grid 
                grid-cols-1 
                lg:grid-cols-2 
                gap-8
            ">
            <div className="space-y-6">
                <h1 
                    className="
                        text-3xl
                        md:text-4xl
                        lg:text-5xl
                        font-bold
                        leading-10
                    ">
                    Seu pet merece cuidado, carinho e atenção especial! 
                </h1>
                <p 
                    className="
                        lg:text-lg
                    ">
                    Oferecemos os melhores serviço para garantir o bem-estar e a felicidade do seu melhor amigo de quatro patas.
                </p>
                <a 
                    href="#"
                    className="
                        flex
                        items-center
                        justify-center
                        w-fit
                        bg-green-500
                        hover:bg-green-700
                        font-semibold
                        rounded-md
                        px-10
                        py-5
                        gap-2
                    ">
                    <WhatsappLogo />
                    <p>Contato via WhatsApp</p>
                </a>
                <p className="pb-16">
                    <span className="bg-black rounded-md px-2 py-1 font-bold">5%</span> de desconto na primeira compra!
                </p>
            </div>
            <div className="hidden md:block h-full relative">
                <Image 
                    src={HeroDogImage} 
                    alt="Foto do cachorro." 
                    className="object-contain"
                    fill
                    quality={100}
                    priority
                />
            </div>
        </section>
    );
}
