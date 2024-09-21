import type { Metadata } from "next";
import './globals.scss'; 

export const metadata: Metadata = {
  title: "Noé Plantier - Web & Mobile Developer",
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
