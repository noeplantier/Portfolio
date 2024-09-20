import type { Metadata } from "next";
import './globals.scss'; // Remplace les styles globaux par tes propres fichiers SASS

export const metadata: Metadata = {
  title: "Mon Site Personnalisé",
  description: "Mon site créé avec Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
