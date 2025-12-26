import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faire un don",
  description: "Soutenez l'oeuvre de Dieu a travers l'Eglise Restauration des Familles. Vos dons permettent de poursuivre notre mission d'evangelisation et d'action humanitaire.",
  openGraph: {
    title: "Faire un don | Restauration des Familles",
    description: "Soutenez l'oeuvre de Dieu et participez a la restauration des familles.",
  },
};

export default function DonsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
