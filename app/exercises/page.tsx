"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useProfile } from "@/contexts/ProfileContext";
import { getExercises } from "@/lib/exercises_data";
import Link from "next/link";

export default function ExercisesPage() {
    const { t, lang } = useLanguage();
    const { profile, toggleExerciseCompletion, isExerciseCompleted } = useProfile();
    const [activeTab, setActiveTab] = useState<'speech' | 'oral' | 'sensory' | 'emotional'>('speech');
    const [showAll, setShowAll] = useState(false);

    // Filter exercises based on profile (unless showAll is true)
    const filters = showAll
        ? { category: activeTab }
        : { category: activeTab, age: [profile.age] };

    const exercises = getExercises(lang, filters);

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Header */}
            <div className="bg-white border-b border-gray-100 pt-12 pb-8 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{t.exercises.title}</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">{t.exercises.subtitle}</p>
                    <div className="mt-4 inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                        {t.exercises.note}
                    </div>
                </div>
            </div>

            {/* Assessment Banner / Toggles */}
            <div className="max-w-[1240px] mx-auto px-4 mt-6">
                {!profile.hasCompletedAssessment ? (
                    <div className="bg-primary-50 border border-primary-100 rounded-xl p-6 text-center mb-8">
                        <h3 className="text-lg font-bold text-primary-800 mb-2"> personalize your experience!</h3>
                        <p className="text-primary-600 mb-4">Tell us your child's age and needs to get recommended exercises.</p>
                        <Link href="/assessment" className="inline-block bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition">
                            Start Quiz
                        </Link>
                    </div>
                ) : (
                    <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm mb-6 gap-4">
                        <div className="text-sm text-gray-500">
                            Showing recommendations for: <span className="font-bold text-gray-900">{profile.name} ({profile.age})</span>
                        </div>
                        <label className="flex items-center cursor-pointer gap-2">
                            <div className="relative">
                                <input
                                    type="checkbox"
                                    className="sr-only"
                                    checked={showAll}
                                    onChange={() => setShowAll(!showAll)}
                                />
                                <div className={`block w-10 h-6 rounded-full transition-colors ${showAll ? 'bg-primary-500' : 'bg-gray-300'}`}></div>
                                <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${showAll ? 'transform translate-x-4' : ''}`}></div>
                            </div>
                            <span className="text-sm font-medium text-gray-700">Show All Exercises</span>
                        </label>
                    </div>
                )}

                {/* Categories */}
                <div className="flex overflow-x-auto pb-2 gap-2 mb-8 no-scrollbar">
                    {(['speech', 'oral', 'sensory', 'emotional'] as const).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-shrink-0 px-6 py-3 rounded-full text-sm font-bold transition-all ${activeTab === tab
                                ? 'bg-gray-900 text-white shadow-lg scale-105'
                                : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-200'
                                }`}
                        >
                            {t.exercises.tabs[tab]}
                        </button>
                    ))}
                </div>

                {/* Exercises Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {exercises.length === 0 ? (
                        <div className="col-span-full text-center py-12 text-gray-400">
                            No exercises found for this category and age group. Try switching tabs or "Show All".
                        </div>
                    ) : (
                        exercises.map((ex) => {
                            const isDone = isExerciseCompleted(ex.id);
                            return (
                                <div key={ex.id} className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 transition-all hover:shadow-md ${isDone ? 'opacity-60 bg-gray-50' : ''}`}>
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <div className="flex gap-2 mb-2">
                                                <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider ${ex.level === 'beginner' ? 'bg-green-100 text-green-700' :
                                                    ex.level === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                                                        'bg-red-100 text-red-700'
                                                    }`}>
                                                    {ex.level}
                                                </span>
                                                <span className="px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-600">
                                                    {ex.age.join(", ")} y.o.
                                                </span>
                                            </div>
                                            <h3 className={`text-xl font-bold text-gray-900 ${isDone ? 'line-through decoration-2 decoration-gray-300' : ''}`}>{ex.title}</h3>
                                            <p className="text-sm text-primary-600 font-medium mt-1">Goal: {ex.goal}</p>
                                        </div>
                                        <button
                                            onClick={() => toggleExerciseCompletion(ex.id)}
                                            className={`p-2 rounded-full transition-colors ${isDone ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'}`}
                                            title="Mark as Done"
                                        >
                                            {isDone ? "✓" : "○"}
                                        </button>
                                    </div>

                                    <div className="bg-slate-50 rounded-xl p-4 mb-4">
                                        <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm">
                                            {ex.steps.map((step, i) => (
                                                <li key={i} className="leading-relaxed">{step}</li>
                                            ))}
                                        </ol>
                                    </div>

                                    <div className="flex items-start gap-3 bg-orange-50 p-3 rounded-lg">
                                        <span className="text-lg">💡</span>
                                        <div className="text-xs text-orange-800">
                                            <span className="font-bold">If they refuse:</span> {ex.refusal}
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </div>
    );
}
