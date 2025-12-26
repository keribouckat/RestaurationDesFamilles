import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Streaming",
  description: "Suivez les cultes et enseignements de l'Eglise Restauration des Familles en direct. Dimanche 10h, Mercredi et Vendredi 19h.",
  openGraph: {
    title: "Live Streaming | Restauration des Familles",
    description: "Rejoignez-nous en direct pour les cultes et enseignements, ou revisionnez nos messages precedents.",
  },
};

export default function LiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
