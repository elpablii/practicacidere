import React from "react";

const Identity = () => {
    const data = [
        {
            id: "mision",
            title: "Misión",
            desc: "Velar por los intereses de nuestros asociados y las necesidades de la Región de Coquimbo, impulsando el desarrollo sostenible con impacto económico, social y con sensibilidad medioambiental, a través de la articulación entre el sector privado, público y academia.",
            icon: ""
        },
        {
            id: "vision",
            title: "Visión",
            desc: "Ser la corporación que lidera la transformación de la Región de Coquimbo, combinando data, tecnología y alianzas para impulsar iniciativas que mejoren la calidad de vida de las personas de la región y fortalezcan la identidad del territorio.",
            icon: ""
        },
        {
            id: "valores",
            title: "Propuesta de Valor",
            desc: "CIDERE impulsa la conexión y visibilidad del ecosistema empresarial con la academia y el sector público de la Región de Coquimbo, entregando a sus socios información oportuna, redes y espacios de encuentro que fortalecen su posicionamiento, oportunidades de crecimiento y vínculo con el territorio. Nuestra trayectoria, junto a un equipo multidisciplinario comprometido con la excelencia y una base de socios multisectoriales, nos permiten generar iniciativas de alto impacto que promueven la colaboración, la innovación y la sostenibilidad para contribuir al desarrollo integral y a la mejora en la calidad de vida de quienes habitan nuestra región.",
            icon: ""
        }
    ];

    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {data.map((item) => (
                        <div key={item.id} id={item.id} className="scroll-mt-32 p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                            <div className="text-4xl mb-6">{item.icon}</div>
                            <h2 className="text-primary text-2xl font-bold mb-4">{item.title}</h2>
                            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Identity;