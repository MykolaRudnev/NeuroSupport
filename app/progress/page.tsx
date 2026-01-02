"use client";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ProgressPage() {
    const [wins, setWins] = useState<string[]>([]);
    const [input, setInput] = useState("");
    const { t } = useLanguage();
    const p = t.progress;

    const addWin = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;
        setWins([input, ...wins]);
        setInput("");
    };

    return (
        <div className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-foreground mb-4">{p.title}</h1>
                <p className="text-lg text-gray-600">
                    {p.intro}
                </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-primary-100 mb-12">
                <h2 className="text-xl font-bold text-gray-800 mb-6">{p.q_title}</h2>
                <form onSubmit={addWin} className="flex gap-4 mb-8">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={p.input_placeholder}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow"
                    />
                    <button
                        type="submit"
                        className="bg-primary-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-600 transition-colors"
                        style={{ minWidth: "120px" }}
                    >
                        {p.btn_add}
                    </button>
                </form>

                <div className="space-y-4">
                    {wins.length === 0 && (
                        <div className="text-center py-8 text-gray-400">
                            <p>{p.empty_state}</p>
                        </div>
                    )}
                    {wins.map((win, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 bg-primary-50 rounded-xl animate-fade-in">
                            <span className="text-xl mt-0.5">🌟</span>
                            <p className="text-primary-900">{win}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-white rounded-xl border border-gray-200">
                    <h3 className="font-bold text-gray-900 mb-3">{p.reflect_title}</h3>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                        {p.reflect_list.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
                <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                    <h3 className="font-bold text-blue-900 mb-3">{p.specialist_title}</h3>
                    <p className="text-sm text-blue-800 leading-relaxed">
                        {p.specialist_desc}
                    </p>
                </div>
            </div>
        </div>
    );
}
