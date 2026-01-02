"use client";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SupportPage() {
    const { t } = useLanguage();
    const s = t.support;

    return (
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h1 className="text-3xl font-bold text-foreground mb-4">{s.title}</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {s.intro}
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* CRISIS TOOLKIT */}
                <div className="bg-red-50 p-8 rounded-2xl border border-red-100 col-span-1 md:col-span-2">
                    <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center gap-3">
                        <span>🚨</span> {s.toolkit_title}
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {s.toolkit_steps.map((step, i) => (
                            <div key={i} className="bg-white p-4 rounded-xl shadow-sm">
                                <h3 className="font-bold text-red-900 mb-2">{step.title}</h3>
                                <p className="text-sm text-red-800">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* MENTAL HEALTH */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">{s.mental_title}</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        {s.mental_desc}
                    </p>
                    <div className="bg-blue-50 p-4 rounded-xl">
                        <p className="font-medium text-blue-900 mb-2"> Affirmation for today:</p>
                        <p className="text-blue-800 italic">{s.affirmation}</p>
                    </div>
                </div>

                {/* BREAKS */}
                <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">{s.break_title}</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        {s.break_desc}
                    </p>
                    <div className="bg-green-50 p-4 rounded-xl text-center">
                        <p className="font-medium text-green-800">{s.break_quote}</p>
                    </div>
                </section>
            </div>

            {/* RESOURCES LIST */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">{s.resources_title}</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {s.resources.map((res, i) => (
                        <ResourceLink key={i} title={res.title} desc={res.desc} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function ResourceLink({ title, desc }: { title: string, desc: string }) {
    return (
        <div className="p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
            <h3 className="font-bold text-primary-700">{title}</h3>
            <p className="text-sm text-gray-600">{desc}</p>
        </div>
    )
}
