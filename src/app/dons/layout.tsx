import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faire un don",
  description: "Soutenez l'œuvre de Dieu à travers l'Église Restauration des Familles. Vos dons permettent de poursuivre notre mission d'évangélisation et d'action humanitaire.",
  openGraph: {
    title: "Faire un don | Restauration des Familles",
    description: "Soutenez l'œuvre de Dieu et participez à la restauration des familles.",
  },
};

export default function DonsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
