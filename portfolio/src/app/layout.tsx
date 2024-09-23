import type { Metadata } from "next";
import './globals.scss'; 

export const metadata: Metadata = {
  title: "Noé Plantier - Web & Mobile Developer",
  description: "Noé Plantier - Web & Mobile Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
