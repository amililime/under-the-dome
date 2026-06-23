import type { Metadata } from "next";
import {
  Playfair_Display,
  Inter,
  Cormorant_Garamond,
} from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-hero",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Barranco Domos — Refugio de lujo en San Gregorio de Polanco",
  description:
    "Domos exclusivos frente a la playa El Barranco en San Gregorio de Polanco, Uruguay. Naturaleza, lujo y desconexión a cielo abierto.",
  keywords: [
    "Barranco Domos",
    "domos Uruguay",
    "San Gregorio de Polanco",
    "glamping Uruguay",
    "alojamiento Tacuarembó",
  ],
  openGraph: {
    title: "Barranco Domos — Refugio de lujo en San Gregorio de Polanco",
    description:
      "Domos exclusivos frente a la playa El Barranco. Naturaleza, lujo y desconexión.",
    type: "website",
    locale: "es_UY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${cormorant.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
