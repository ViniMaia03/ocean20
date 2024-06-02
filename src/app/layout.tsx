import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Ocean 20",
  description: "Site para conscientização da poluição marinha.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
