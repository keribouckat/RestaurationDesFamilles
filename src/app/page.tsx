import { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Pastor from "@/components/Pastor";
import Ministries from "@/components/Ministries";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Accueil | Restauration des Familles",
  description: "Bienvenue a l'Eglise Restauration des Familles - Une Eglise, Une Famille, Un Amour. Decouvrez nos cultes, ministeres et enseignements avec le Prophete Philippe Mukoma Wetu.",
  openGraph: {
    title: "Restauration des Familles | Eglise Chretienne",
    description: "Une Eglise, Une Famille, Un Amour. Rejoignez-nous pour vivre une experience spirituelle transformante.",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Pastor />
        <Ministries />
      </main>
      <Footer />
    </>
  );
}
