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
    <div className="flex z-0 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-pink-50">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-pink-50 sm:items-start bg-gray-600 shadow-lg shadow-gray-500/50 ...">
        {children}
      </main>
    </div>

    </body>
    </html>
  );
}
