import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Hazte Socio - CIDERE",
    description: "Únete a la red empresarial multisectorial con más trayectoria de la región.",
};

export default function HazteSocioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
