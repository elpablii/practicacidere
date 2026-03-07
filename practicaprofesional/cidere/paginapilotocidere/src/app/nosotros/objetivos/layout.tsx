import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Nuestros Ejes - CIDERE",
    description: "Objetivos y ejes estratégicos de CIDERE para el desarrollo regional.",
};

export default function ObjetivosLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
