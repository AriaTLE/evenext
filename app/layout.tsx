import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/components/NavBar/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EveVolved first people first network.",
  description: "Where the money doesn't drive the motivation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >

    <NavBar />
    {/*<Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>*/}
    {/*    EveVolved*/}
    {/*</Text>*/}
    {children}
    </body>
    </html>
  );
}
