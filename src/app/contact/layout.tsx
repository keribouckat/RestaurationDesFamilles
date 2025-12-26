import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez l'Église Restauration des Familles. Horaires des cultes, adresse à Libreville, et formulaire de contact.",
  openGraph: {
    title: "Contact | Restauration des Familles",
    description: "Contactez-nous pour toute question ou demande de prière. Nous sommes là pour vous accompagner.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
