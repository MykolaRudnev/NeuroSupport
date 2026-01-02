"use client";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type Message = {
    role: 'user' | 'assistant';
    content: string;
};

export default function ChatPage() {
    const { t, lang } = useLanguage();
    const c = t.chat;

    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'assistant',
            content: c.welcome
        }
    ]);

    // Reset chat when language changes
    useEffect(() => {
        setMessages([{ role: 'assistant', content: c.welcome }]);
    }, [c.welcome]);

    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = input;
        setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
        setInput("");
        setIsLoading(true);

        // Mock API logic with simple responses based on language
        setTimeout(() => {
            let response = lang === 'en'
                ? "That sounds challenging. Every child develops at their own pace. Have you tried simplifying the activity? I am here to listen."
                : "Это звучит непросто. Каждый ребенок развивается в своем темпе. Вы пробовали упростить задачу? Я здесь, чтобы выслушать.";

            const lowerInput = userMsg.toLowerCase();

            // Simple keyword detection for demo purposes
            if (lowerInput.includes("speech") || lowerInput.includes("talk") || lowerInput.includes("речь") || lowerInput.includes("говорит")) {
                response = lang === 'en'
                    ? "For speech, try narrating what you do. 'I am washing the cup.' use one or two words only. 'Wash cup'. This makes it easier for them to imitate."
                    : "Для развития речи попробуйте комментировать свои действия. 'Я мою чашку'. Используйте 1-2 слова: 'Мою чашку'. Так ребенку проще повторять.";
            } else if (lowerInput.includes("sleep") || lowerInput.includes("bed") || lowerInput.includes("сон") || lowerInput.includes("спать")) {
                response = lang === 'en'
                    ? "Sleep struggles are common. Try a deep pressure massage or a warm bath 30 minutes before bed to lower their sensory arousal level."
                    : "Проблемы со сном часты. Попробуйте глубокий массаж или теплую ванну за 30 минут до сна, чтобы снизить сенсорное возбуждение.";
            } else if (lowerInput.includes("meltdown") || lowerInput.includes("scream") || lowerInput.includes("срыв") || lowerInput.includes("кричит")) {
                response = lang === 'en'
                    ? "During a meltdown, less is more. Less talking, less touching. Just stay close to ensure safety and wait for the storm to pass. You are their safe harbor."
                    : "Во время срыва (мелтдауна) — чем меньше, тем лучше. Меньше слов, меньше касаний. Просто будьте рядом для безопасности и ждите, пока шторм утихнет. Вы — тихая гавань.";
            }

            setMessages(prev => [...prev, { role: 'assistant', content: response }]);
            setIsLoading(false);
        }, 1500);
    };

    return (
        <div className="max-w-4xl mx-auto h-[calc(100vh-64px)] flex flex-col">
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
                {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div
                            className={`max-w-[80%] rounded-2xl p-5 ${msg.role === 'user'
                                    ? 'bg-primary-600 text-white rounded-br-none'
                                    : 'bg-white border border-gray-200 shadow-sm rounded-bl-none text-gray-800'
                                }`}
                        >
                            {msg.role === 'assistant' && <span className="text-xl block mb-2">🤖</span>}
                            <p className="leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex justify-start">
                        <div className="bg-gray-100 rounded-2xl p-4 flex gap-2 items-center">
                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-white border-t border-gray-200">
                <form onSubmit={handleSubmit} className="relative max-w-4xl mx-auto">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={c.placeholder}
                        className="w-full pl-6 pr-14 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm text-lg"
                    />
                    <button
                        type="submit"
                        disabled={isLoading || !input.trim()}
                        className="absolute right-2 top-2 p-2 bg-primary-500 text-white rounded-full hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                        </svg>
                    </button>
                </form>
                <p className="text-center text-xs text-gray-400 mt-2">
                    {c.disclaimer}
                </p>
            </div>
        </div>
    );
}
