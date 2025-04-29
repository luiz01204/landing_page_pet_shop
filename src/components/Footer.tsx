import Image from "next/image";
import logo_1 from "../../public/primier.png";
import logo_2 from "../../public/royal.png";
import logo_3 from "../../public/whiskas.png";
import logo_4 from "../../public/golden.png";
import { WhatsappLogo, MapPin } from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  return (
    <section className="bg-red-500 py-10 md:py-16 text-white">
        <div className="container mx-auto px-4 flex flex-col items-center gap-8">
            <h2 className="text-3xl font-bold text-center">
                Marcas que trabalhamos:
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
                <Image  
                    src={logo_1}       
                    alt="Logo Premier" 
                    className="w-full h-auto object-contain rounded-2xl" 
                />
                <Image src={logo_2} 
                    alt="Logo Royal Canin" 
                    className="w-full h-auto object-contain rounded-2xl" 
                />
                <Image
                    src={logo_3} 
                    alt="Logo Whiskas" 
                    className="w-full h-auto object-contain rounded-2xl" 
                />
                <Image 
                    src={logo_4} 
                    alt="Logo Golden"   
                    className="w-full h-auto object-contain rounded-2xl" 
                />
            </div>

            <a 
                href="https://wa.me/556799998800"
                target="_blank"
                className="
                    flex
                    items-center
                    justify-center
                    bg-green-500
                    hover:bg-green-600
                    text-white
                    font-semibold
                    rounded-md
                    px-10
                    py-5
                    gap-2
                    transition-all
                "
                >
                <WhatsappLogo className="w-5 h-5" />
                <p>Contato via WhatsApp</p>
            </a>

            <footer className="pt-8 border-t border-white/30 w-full text-center text-sm">
                <p className="flex justify-center items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Rua dos Pets Felizes, 123 - Petlândia, MS
                </p>
                <p className="mt-2 text-white/70">
                    &copy; {new Date().getFullYear()} PetShop Amor & Cuidado. Todos os direitos reservados.
                </p>
            </footer>
        </div>
    </section>
  );
}
