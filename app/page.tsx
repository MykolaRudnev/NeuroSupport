"use client";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-6 animate-fade-in-up">
              {t.home.hero_tag}
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight mb-6 leading-tight">
              {t.home.hero_title} <br />
              <span className="text-primary-500 relative">
                {t.home.hero_title_accent}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary-500 opacity-40" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7501 2.49987 89.2841 -2.71221 198.001 2.49988" stroke="currentColor" strokeWidth="3"></path></svg>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              {t.home.hero_desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/exercises"
                className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-xl text-lg font-semibold shadow-lg shadow-primary-500/30 transition-all transform hover:-translate-y-1 block sm:inline-block"
              >
                {t.home.btn_start}
              </Link>
              <Link
                href="/understand"
                className="px-8 py-4 bg-white hover:bg-gray-50 text-foreground border border-gray-200 rounded-xl text-lg font-semibold shadow-sm transition-all block sm:inline-block"
              >
                {t.home.btn_learn}
              </Link>
            </div>
          </div>
        </div>

        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-0 opacity-40 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-[10%] right-[-5%] w-80 h-80 bg-secondary-500 rounded-full blur-3xl opacity-20"></div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">{t.home.features_title}</h2>
            <p className="text-gray-500 max-w-xl mx-auto">{t.home.features_subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              emoji="🧠"
              title={t.home.card_understand_title}
              desc={t.home.card_understand_desc}
              link="/understand"
              color="bg-primary-50"
            />
            <FeatureCard
              emoji="🎲"
              title={t.home.card_exercises_title}
              desc={t.home.card_exercises_desc}
              link="/exercises"
              color="bg-purple-50"
            />
            <FeatureCard
              emoji="📅"
              title={t.home.card_routines_title}
              desc={t.home.card_routines_desc}
              link="/routines"
              color="bg-orange-50"
            />
            <FeatureCard
              emoji="💚"
              title={t.home.card_support_title}
              desc={t.home.card_support_desc}
              link="/support"
              color="bg-green-50"
            />
            <FeatureCard
              emoji="📈"
              title={t.home.card_progress_title}
              desc={t.home.card_progress_desc}
              link="/progress"
              color="bg-blue-50"
            />
            <FeatureCard
              emoji="🤖"
              title={t.home.card_chat_title}
              desc={t.home.card_chat_desc}
              link="/chat"
              color="bg-yellow-50"
            />
          </div>
        </div>
      </section>

      {/* Reassurance Section */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-primary-800 mb-6">{t.home.reassurance_title}</h3>
          <p className="text-lg text-primary-700 mb-8 leading-relaxed">
            {t.home.reassurance_desc}
          </p>
          <Link href="/support" className="text-primary-600 font-semibold hover:text-primary-800 hover:underline">
            {t.home.reassurance_link}
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ emoji, title, desc, link, color }: { emoji: string, title: string, desc: string, link: string, color: string }) {
  return (
    <Link href={link} className={`block p-8 rounded-2xl ${color} hover:shadow-md transition-shadow duration-300 border border-transparent hover:border-black/5`}>
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-4">{desc}</p>
      <span className="text-sm font-semibold text-gray-900 opacity-60">Explore &rarr;</span>
    </Link>
  );
}
