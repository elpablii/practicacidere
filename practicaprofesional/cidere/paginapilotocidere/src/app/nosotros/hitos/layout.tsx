import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Hitos emblemáticos - CIDERE',
    description: 'Conoce los hitos más emblemáticos en la historia de CIDERE Región de Coquimbo desde su fundación.',
};

export default function HitosLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
