import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://restaurationdesfamilles.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Restauration des Familles | Église Chrétienne",
    template: "%s | Restauration des Familles",
  },
  description: "L'Église Restauration des Familles - Une Église, Une Famille, Un Amour. Rejoignez-nous pour vivre une expérience spirituelle transformante avec le Prophète Philippe Mukoma Wetu.",
  keywords: ["église", "restauration", "familles", "chrétienne", "philippe mukoma", "culte", "prière", "foi", "gabon", "libreville"],
  authors: [{ name: "Restauration des Familles" }],
  creator: "Restauration des Familles",
  publisher: "Restauration des Familles",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Restauration des Familles",
    title: "Restauration des Familles | Église Chrétienne",
    description: "Une Église, Une Famille, Un Amour. Rejoignez-nous pour vivre une expérience spirituelle transformante.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Restauration des Familles - Église Chrétienne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Restauration des Familles | Église Chrétienne",
    description: "Une Église, Une Famille, Un Amour. Rejoignez-nous pour vivre une expérience spirituelle transformante.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
