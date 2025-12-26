import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez l'Eglise Restauration des Familles. Horaires des cultes, adresse a Libreville, et formulaire de contact.",
  openGraph: {
    title: "Contact | Restauration des Familles",
    description: "Contactez-nous pour toute question ou demande de priere. Nous sommes la pour vous accompagner.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
