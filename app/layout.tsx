import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ProfileProvider } from "@/contexts/ProfileContext";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Autism Support Assistant",
  description: "A supportive neuro-speech therapist assistant for parents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans antialiased bg-background min-h-screen flex flex-col`}>
        <LanguageProvider>
          <ProfileProvider>
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <footer className="bg-white py-8 border-t border-gray-100 mt-auto">
              <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500">
                <p className="mb-2">Made with 💚 for neurodiverse families.</p>
                <p className="text-xs max-w-lg mx-auto leading-relaxed">
                  Disclaimer: This platform does not replace professional medical or therapeutic care.
                  It is designed to support parents at home.
                </p>
              </div>
            </footer>
          </ProfileProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
