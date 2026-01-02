"use client";
import { useLanguage } from "@/contexts/LanguageContext";

export default function RoutinesPage() {
    const { t } = useLanguage();
    const r = t.routines;

    return (
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-foreground mb-4">{r.title}</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {r.intro}
                </p>
            </div>

            <div className="grid gap-12">
                {/* Why Routines Matter */}
                <section className="bg-orange-50 rounded-2xl p-8 border border-orange-100">
                    <h2 className="text-2xl font-bold text-orange-900 mb-4">{r.why_title}</h2>
                    <p className="text-orange-800 leading-relaxed">
                        {r.why_desc}
                    </p>
                </section>

                {/* Morning Routine Example */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <span>☀️</span> {r.morning_title}
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <RoutineCard step="1" title={r.steps_morning[0]} emoji="🛌" />
                        <RoutineCard step="2" title={r.steps_morning[1]} emoji="🚽" />
                        <RoutineCard step="3" title={r.steps_morning[2]} emoji="🪥" />
                        <RoutineCard step="4" title={r.steps_morning[3]} emoji="👕" />
                    </div>
                    <p className="mt-4 text-gray-600 text-sm">
                        {r.tip}
                    </p>
                </section>

                {/* Evening Routine Example */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <span>🌙</span> {r.evening_title}
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <RoutineCard step="1" title={r.steps_evening[0]} emoji="🍽️" />
                        <RoutineCard step="2" title={r.steps_evening[1]} emoji="🛁" />
                        <RoutineCard step="3" title={r.steps_evening[2]} emoji="📖" />
                        <RoutineCard step="4" title={r.steps_evening[3]} emoji="💤" />
                    </div>
                </section>

                {/* Transition Tips */}
                <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{r.transition_title}</h2>
                    <p className="text-gray-700 mb-4">{r.transition_desc}</p>
                    <ul className="space-y-4">
                        {r.transition_list.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="bg-primary-100 text-primary-700 font-bold px-2 py-1 rounded text-sm">{i + 1}</span>
                                <span className="text-gray-700"><strong>{item.title}:</strong> {item.desc}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
}

function RoutineCard({ step, title, emoji }: { step: string, title: string, emoji: string }) {
    return (
        <div className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col items-center text-center shadow-sm">
            <span className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest">Step {step}</span>
            <div className="text-5xl mb-3">{emoji}</div>
            <h3 className="font-bold text-gray-800">{title}</h3>
        </div>
    )
}
