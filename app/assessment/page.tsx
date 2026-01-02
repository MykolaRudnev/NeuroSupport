"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { useProfile } from "@/contexts/ProfileContext";

export default function AssessmentPage() {
    const { lang } = useLanguage();
    const { updateProfile } = useProfile();
    const router = useRouter();
    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        age: "",
        speech: "",
        sensory: ""
    });

    const handleSelect = (key: string, value: string) => {
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    const nextStep = () => {
        if (step < 3) setStep(step + 1);
        else handleFinish();
    };

    const handleFinish = () => {
        updateProfile({
            age: formData.age as any,
            speechLevel: formData.speech as any,
            sensoryProfile: formData.sensory as any,
            hasCompletedAssessment: true
        });
        router.push('/exercises');
    };

    const questions = {
        en: [
            {
                id: "age",
                title: "How old is your child?",
                options: [
                    { label: "2-3 Years (Toddler)", value: "2-3" },
                    { label: "4-5 Years (Preschool)", value: "4-5" },
                    { label: "6-8 Years (Early School)", value: "6-8" }
                ]
            },
            {
                id: "speech",
                title: "Current Speech Ability",
                options: [
                    { label: "Non-verbal / Sounds only", value: "non-verbal" },
                    { label: "Single words (Mama, Ball)", value: "single-words" },
                    { label: "Simple sentences", value: "sentences" }
                ]
            },
            {
                id: "sensory",
                title: "Sensory Profile",
                options: [
                    { label: "Seeker (Loves crashes, spin, loud)", value: "seeker" },
                    { label: "Avoider (Covers ears, picky eater)", value: "avoider" },
                    { label: "Mixed / Unsure", value: "mixed" }
                ]
            }
        ],
        ru: [
            {
                id: "age",
                title: "Сколько лет ребенку?",
                options: [
                    { label: "2-3 Года (Малыш)", value: "2-3" },
                    { label: "4-5 Лет (Дошкольник)", value: "4-5" },
                    { label: "6-8 Лет (Школьник)", value: "6-8" }
                ]
            },
            {
                id: "speech",
                title: "Текущий уровень речи",
                options: [
                    { label: "Невербальный / Звуки", value: "non-verbal" },
                    { label: "Отдельные слова", value: "single-words" },
                    { label: "Простые фразы", value: "sentences" }
                ]
            },
            {
                id: "sensory",
                title: "Сенсорный Профиль",
                options: [
                    { label: "Ищет (Любит бегать, шум, объятия)", value: "seeker" },
                    { label: "Избегает (Закрывает уши, разборчив в еде)", value: "avoider" },
                    { label: "Смешанный / Не знаю", value: "mixed" }
                ]
            }
        ],
        pl: [
            {
                id: "age",
                title: "Ile lat ma Twoje dziecko?",
                options: [
                    { label: "2-3 Lata (Maluch)", value: "2-3" },
                    { label: "4-5 Lat (Przedszkolak)", value: "4-5" },
                    { label: "6-8 Lat (Wczesnoszkolny)", value: "6-8" }
                ]
            },
            {
                id: "speech",
                title: "Obecne umiejętności mowy",
                options: [
                    { label: "Niewerbalne / Tylko dźwięki", value: "non-verbal" },
                    { label: "Pojedyncze słowa (Mama, Piłka)", value: "single-words" },
                    { label: "Proste zdania", value: "sentences" }
                ]
            },
            {
                id: "sensory",
                title: "Profil Sensoryczny",
                options: [
                    { label: "Poszukiwacz (Lubi hałas, kręcenie)", value: "seeker" },
                    { label: "Unikający (Zatyka uszy, wybredny)", value: "avoider" },
                    { label: "Mieszany / Niepewny", value: "mixed" }
                ]
            }
        ],
        uk: [
            {
                id: "age",
                title: "Скільки років дитині?",
                options: [
                    { label: "2-3 Років (Малюк)", value: "2-3" },
                    { label: "4-5 Років (Дошкільня)", value: "4-5" },
                    { label: "6-8 Років (Школяр)", value: "6-8" }
                ]
            },
            {
                id: "speech",
                title: "Поточний рівень мовлення",
                options: [
                    { label: "Невербальний / Тільки звуки", value: "non-verbal" },
                    { label: "Окремі слова (Мама, М'яч)", value: "single-words" },
                    { label: "Прості речення", value: "sentences" }
                ]
            },
            {
                id: "sensory",
                title: "Сенсорний Профіль",
                options: [
                    { label: "Шукач (Любить шум, кружляти)", value: "seeker" },
                    { label: "Уникаючий (Затуляє вуха, перебірливий)", value: "avoider" },
                    { label: "Змішаний / Не впевнений", value: "mixed" }
                ]
            }
        ]
    };

    const currentQ = questions[lang][step - 1];

    const getHeader = () => {
        if (lang === 'en') {
            if (step === 1) return "Let's personalize.";
            if (step === 2) return "Communication.";
            if (step === 3) return "Sensory Needs.";
        }
        if (lang === 'ru') {
            if (step === 1) return "Давайте настроим.";
            if (step === 2) return "Коммуникация.";
            if (step === 3) return "Сенсорика.";
        }
        if (lang === 'pl') {
            if (step === 1) return "Spersonalizujmy.";
            if (step === 2) return "Komunikacja.";
            if (step === 3) return "Potrzeby Sensoryczne.";
        }
        if (lang === 'uk') {
            if (step === 1) return "Давайте налаштуємо.";
            if (step === 2) return "Комунікація.";
            if (step === 3) return "Сенсорика.";
        }
        return "Assessment";
    };

    return (
        <div className="min-h-[calc(100vh-64px)] bg-gray-50 flex items-center justify-center p-4">
            <div className="bg-white max-w-lg w-full rounded-2xl p-8 shadow-xl border border-gray-100">

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 h-2 rounded-full mb-8">
                    <div
                        className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(step / 3) * 100}%` }}
                    ></div>
                </div>

                <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                    {getHeader()}
                </h1>
                <p className="text-gray-500 text-center mb-8">{currentQ.title}</p>

                <div className="space-y-3">
                    {currentQ.options.map((opt) => (
                        <button
                            key={opt.value}
                            onClick={() => handleSelect(currentQ.id, opt.value)}
                            className={`w-full p-4 rounded-xl border-2 text-left transition-all ${formData[currentQ.id as keyof typeof formData] === opt.value
                                ? 'border-primary-500 bg-primary-50 text-primary-900 font-semibold'
                                : 'border-gray-200 hover:border-primary-200 hover:bg-gray-50'
                                }`}
                        >
                            {opt.label}
                        </button>
                    ))}
                </div>

                <div className="mt-8 flex justify-end">
                    <button
                        onClick={nextStep}
                        disabled={!formData[currentQ.id as keyof typeof formData]}
                        className="px-8 py-3 bg-primary-600 text-white rounded-xl font-semibold shadow-lg shadow-primary-500/30 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-700 transition-all flex items-center gap-2"
                    >
                        {/* Simple logic for button text, can be optimized later */}
                        {step === 3 ? "Generate Plan" : "Next"}
                        <span>&rarr;</span>
                    </button>
                </div>

            </div>
        </div>
    );
}
