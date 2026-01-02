"use client";
import { useLanguage } from "@/contexts/LanguageContext";

export default function UnderstandPage() {
    const { t } = useLanguage();
    const u = t.understand;

    return (
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-foreground mb-4">{u.title}</h1>
                <p className="text-lg text-gray-600">
                    {u.intro}
                </p>
            </div>

            <div className="space-y-12">
                {/* Section 1: What is Autism */}
                <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <div className="flex items-start gap-4">
                        <div className="text-4xl bg-primary-50 p-3 rounded-xl">🧩</div>
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{u.what_title}</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                {u.what_desc}
                            </p>
                            <ul className="space-y-2 text-gray-600 list-disc list-inside">
                                {u.what_list.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Section 2: Speech Delay */}
                <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <div className="flex items-start gap-4">
                        <div className="text-4xl bg-blue-50 p-3 rounded-xl">🗣️</div>
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{u.speech_title}</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                {u.speech_desc}
                            </p>
                            <div className="bg-blue-50 p-4 rounded-xl text-blue-800 text-sm">
                                <strong>{u.speech_tip}</strong>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Sensory Sensitivity */}
                <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <div className="flex items-start gap-4">
                        <div className="text-4xl bg-purple-50 p-3 rounded-xl">🎧</div>
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{u.sensory_title}</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                {u.sensory_desc}
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                <div className="p-4 bg-gray-50 rounded-xl">
                                    <h3 className="font-semibold text-gray-900 mb-2">{u.hyper_title}</h3>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        {u.hyper_list.map((item, i) => <li key={i}>• {item}</li>)}
                                    </ul>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl">
                                    <h3 className="font-semibold text-gray-900 mb-2">{u.hypo_title}</h3>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        {u.hypo_list.map((item, i) => <li key={i}>• {item}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4: Meltdowns */}
                <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <div className="flex items-start gap-4">
                        <div className="text-4xl bg-red-50 p-3 rounded-xl">🌪️</div>
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{u.meltdown_title}</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                {u.meltdown_desc}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex-1 border-l-4 border-red-300 pl-4 py-2">
                                    <span className="block font-bold text-gray-900">{u.tantrum_name}</span>
                                    <span className="text-sm text-gray-600">{u.tantrum_desc}</span>
                                </div>
                                <div className="flex-1 border-l-4 border-primary-500 pl-4 py-2">
                                    <span className="block font-bold text-gray-900">{u.meltdown_name}</span>
                                    <span className="text-sm text-gray-600">{u.meltdown_def_desc}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
