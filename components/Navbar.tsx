"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
    const { t, lang, setLang } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: t.nav.understand, href: "/understand" },
        { name: t.nav.exercises, href: "/exercises" },
        { name: t.nav.routines, href: "/routines" },
        { name: t.nav.support, href: "/support" },
    ];

    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center gap-2">
                            <span className="text-2xl">🌿</span>
                            <span className="font-bold text-xl text-primary-700 tracking-tight">{t.nav.brand}</span>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:ml-10 md:flex md:space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-500 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        {/* <Link
                            href="/chat"
                            className="bg-primary-100 text-primary-700 hover:bg-primary-200 px-4 py-2 rounded-full text-sm font-semibold transition-colors flex items-center gap-2"
                        >
                            <span>🤖</span> {t.nav.chat}
                        </Link> */}

                        {/* Desktop Language Switcher */}
                        <div className="hidden md:flex items-center gap-2 border-l pl-6 border-gray-200 ml-2">
                            <button onClick={() => setLang('en')} className={`text-xl hover:scale-110 transition-transform ${lang === 'en' ? 'opacity-100' : 'opacity-40 grayscale hover:opacity-100 hover:grayscale-0'}`} title="English">🇺🇸</button>
                            <button onClick={() => setLang('ru')} className={`text-xl hover:scale-110 transition-transform ${lang === 'ru' ? 'opacity-100' : 'opacity-40 grayscale hover:opacity-100 hover:grayscale-0'}`} title="Russian">🇷🇺</button>
                            <button onClick={() => setLang('pl')} className={`text-xl hover:scale-110 transition-transform ${lang === 'pl' ? 'opacity-100' : 'opacity-40 grayscale hover:opacity-100 hover:grayscale-0'}`} title="Polish">🇵🇱</button>
                            <button onClick={() => setLang('uk')} className={`text-xl hover:scale-110 transition-transform ${lang === 'uk' ? 'opacity-100' : 'opacity-40 grayscale hover:opacity-100 hover:grayscale-0'}`} title="Ukrainian">🇺🇦</button>
                        </div>
                    </div>

                    {/* Mobile Menu Button & Language */}
                    <div className="md:hidden flex items-center gap-4">
                        <div className="flex gap-2">
                            <button onClick={() => setLang('en')} className={`text-xl ${lang === 'en' ? 'opacity-100' : 'opacity-40 grayscale'}`}>🇺🇸</button>
                            <button onClick={() => setLang('ru')} className={`text-xl ${lang === 'ru' ? 'opacity-100' : 'opacity-40 grayscale'}`}>🇷🇺</button>
                            <button onClick={() => setLang('pl')} className={`text-xl ${lang === 'pl' ? 'opacity-100' : 'opacity-40 grayscale'}`}>🇵🇱</button>
                            <button onClick={() => setLang('uk')} className={`text-xl ${lang === 'uk' ? 'opacity-100' : 'opacity-40 grayscale'}`}>🇺🇦</button>
                        </div>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-gray-900 p-2"
                        >
                            {isOpen ? "✕" : "☰"}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-4 shadow-lg">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="block text-gray-600 font-medium py-2"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    {/* <Link
                        href="/chat"
                        className="block w-full text-center bg-primary-100 text-primary-700 font-semibold py-3 rounded-xl mt-4"
                        onClick={() => setIsOpen(false)}
                    >
                        {t.nav.chat}
                    </Link> */}
                </div>
            )}
        </nav>
    );
}
