import HeroSlider from "@/components/HeroSlider";
import LogoMarquesina from "@/components/LogoMarquesina";
import QuienesSomos from "@/components/QuienesSomos";
import Link from "next/link";
import { ClockIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

import { HomeContainer, HomeItem, FadeInHero } from "@/components/HomeClientAnimator";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">

      {/* 1. Sección Hero: Aparece inmediatamente al cargar */}
      <FadeInHero className="bg-primary">
        <HeroSlider />
      </FadeInHero>

      {/* 2. Cuerpo de la página con Stagger al hacer scroll */}
      <HomeContainer>

        <div className="bg-slate-50 relative overflow-hidden py-24">

          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-[120px]"></div>
            <div className="absolute bottom-[20%] right-[-5%] w-[35%] h-[40%] rounded-full bg-blue-200/30 blur-[100px]"></div>
            <div className="absolute top-[40%] left-[20%] w-[25%] h-[25%] rounded-full bg-secondary/10 blur-[80px]"></div>
          </div>

          <div className="relative z-10 space-y-32">
            {/* Sección Quienes Somos */}
            <HomeItem className="px-4 md:px-6">
              <div className="bg-white/60 backdrop-blur-md rounded-[3rem] shadow-xl shadow-blue-900/5 border border-white p-8 md:p-16 max-w-7xl mx-auto">
                <QuienesSomos />
              </div>
            </HomeItem>

            {/* Sección Marquesina de Logos */}
            <HomeItem>
              <LogoMarquesina />
            </HomeItem>

            {/* 3. Tarjeta de Invitación a Hitos Históricos */}
            <HomeItem className="max-w-4xl mx-auto px-4 md:px-6">
              <Link href="/nosotros/hitos" className="block focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-white rounded-[2rem]">
                <div className="group relative overflow-hidden rounded-[2rem] px-8 py-16 md:px-12 md:py-20 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border border-blue-900/30 flex flex-col md:flex-row items-center gap-8 min-h-[350px] md:min-h-[400px]">

                  <div className="absolute inset-0 z-0">
                    <img
                      src="/images/slider/Imagen15.webp"
                      alt="Hitos de la Corporación"
                      className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/60 to-transparent transition-colors duration-500"></div>
                  </div>

                  <div className="shrink-0 w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex justify-center items-center shadow-inner group-hover:scale-110 transition-transform duration-500 z-10">
                    <ClockIcon className="w-10 h-10 text-secondary" />
                  </div>

                  <div className="flex-grow text-center md:text-left z-10">
                    <h3 className="text-white text-2xl md:text-3xl font-black uppercase tracking-tight mb-2 drop-shadow-md">50 Años de Historia</h3>
                    <p className="text-blue-100/90 font-medium text-lg leading-relaxed drop-shadow-sm">
                      Descubre los hitos más importantes que han marcado nuestra trayectoria aportando al desarrollo regional.
                    </p>
                  </div>

                  <div className="shrink-0 z-10">
                    <div className="w-14 h-14 rounded-full bg-secondary flex justify-center items-center text-primary group-hover:bg-white transition-colors duration-300 shadow-lg">
                      <ArrowRightIcon className="w-6 h-6 font-bold group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                </div>
              </Link>
            </HomeItem>
          </div>

        </div>
      </HomeContainer>
    </main>
  );
}