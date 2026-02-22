import HeroSlider from "@/components/HeroSlider";
import LogoMarquesina from "@/components/LogoMarquesina";
import QuienesSomos from "@/components/QuienesSomos";
import EjesEstrategicos from "@/components/EjesEstrategicos";
import Identity from "@/components/identity";

export default function Home() {
  return (
    <main className="min-h-screen">

      <div className="bg-primary">
        <HeroSlider />
      </div>

      <div className="bg-white py-20">
        <QuienesSomos />
        <LogoMarquesina />
      </div>

    </main>
  );
}