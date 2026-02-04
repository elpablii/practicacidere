import Hero from "@/components/hero";

export default function Home() {
  return (
    <>
      {/* Esta es la sección de impacto que acabamos de programar */}
      <Hero />

      {/* Aquí iremos agregando las siguientes secciones 
          como los Pilares Estratégicos (Tarea 3) y Socios (Tarea 4) 
      */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-primary text-3xl md:text-4xl font-bold mb-4">
            Nuestros Ejes de Acción
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Trabajamos activamente en el fortalecimiento de la Región de Coquimbo a través de la articulación y la innovación.
          </p>
        </div>
      </section>
    </>
  );
}