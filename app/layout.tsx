import type { Metadata } from "next";
import { Inter, Playfair_Display, Prompt } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const prompt = Prompt({
  weight: ['300', '400', '500', '600'],
  variable: "--font-prompt",
  subsets: ["thai", "latin"],
});

export const metadata: Metadata = {
  title: "Panalee Palasri - UX/UI Designer",
  description: "Portfolio of Panalee Palasri, a UX/UI Designer specializing in user-centered digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${prompt.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
