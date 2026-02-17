import HeroSlider from "@/components/HeroSlider";
import LogoMarquesina from "@/components/LogoMarquesina";
import Identity from "@/components/identity";

export default function Home() {
  return (
    <main className="min-h-screen">

      <div className="bg-primary">
        <HeroSlider />
      </div>

      <div className="bg-white py-20">
        <LogoMarquesina />
      </div>

    </main>
  );
}