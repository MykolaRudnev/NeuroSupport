export type Content = typeof content.en;

export const content = {
    en: {
        nav: {
            brand: "NeuroSupport",
            understand: "Understand",
            exercises: "Exercises",
            routines: "Routines",
            support: "Support",
            chat: "Ask AI",
            menuOpen: "Open menu",
            menuClose: "Close menu",
        },
        home: {
            hero_tag: "🌿 You are not alone on this journey",
            hero_title: "Support Your Child’s",
            hero_title_accent: "Unique Potential",
            hero_desc: "A gentle, digital neuro-speech therapist assistant to help you understand your child’s needs, build daily routines, and celebrate every small win.",
            btn_start: "Start Daily Exercises",
            btn_learn: "Learn About Autism",
            features_title: "How we help you today",
            features_subtitle: "Practical tools designed for parents, focusing on emotional safety and consistency.",
            card_understand_title: "Understand My Child",
            card_understand_desc: "Simple explanations for speech delays, sensory sensitivities, and emotional overload.",
            card_exercises_title: "Daily Exercises",
            card_exercises_desc: "Fun, 5-minute activities for speech, oral-motor, and emotional skills.",
            card_routines_title: "Routines & Structure",
            card_routines_desc: "Build predictable days with visual schedules to reduce anxiety and meltdowns.",
            card_support_title: "Parent Support",
            card_support_desc: "Burnout prevention, guilt reassurance, and reminders that you are doing enough.",
            card_progress_title: "Track Progress",
            card_progress_desc: "Celebrate small wins and notice patterns over time. Progress is not linear.",
            card_chat_title: "AI Assistant",
            card_chat_desc: "Ask questions and get gentle, non-judgmental guidance tailored to your child.",
            reassurance_title: "\"Is it okay if my child refuses?\"",
            reassurance_desc: "Absolutely. Our core principle is connection over compliance. If an activity causes stress, stop. We offer alternatives and focus on emotional safety first. Every child blooms at their own pace.",
            reassurance_link: "Read more about our gentle approach →"
        },
        exercises: {
            title: "Daily Exercises Library",
            subtitle: "A growing collection of neuro-speech therapy tasks.",
            note: "🌱 Pick just 1 or 2 per day. Do not overdo it.",
            tabs: {
                speech: "Communication Steps",
                oral: "Oral-Motor & Breath",
                sensory: "Sensory Regulation",
                emotional: "Social & Emotional"
            }
        },
        understand: {
            title: "Understanding Your Child",
            intro: "Autism is not a sickness. It is a different way of seeing, hearing, and feeling the world.",
            what_title: "What is Autism? (Simply)",
            what_desc: "Imagine an operating system that processes information differently. Autistic brains are often highly sensitive to details that others might miss. It impacts how they communicate, interact, and perceive sensory input.",
            what_list: ["It is specialized: Great focus on things they love.", "It is sensitive: Lights might be brighter, sounds louder.", "It is unique: No two autistic children are exactly alike."],
            speech_title: "Why is speech delayed?",
            speech_desc: "Speech requires many systems to work together: hearing, processing, imitation, and motor skills. For many autistic children, the \"social motivation\" to speak is different. They may not see the need to share attention in the same way.",
            speech_tip: "Tip: Communication is more than words. Gestures, leading you by the hand, and sounds are all communication. Celebrate them!",
            sensory_title: "Sensory Sensitivity",
            sensory_desc: "The world can feel \"too much\" (hypersensitive) or \"not enough\" (hyposensitive).",
            hyper_title: "Hypersensitive (Avoids)",
            hyper_list: ["Covers ears at loud noises", "Avoids sticky textures/foods", "Dislikes bright lights"],
            hypo_title: "Hyposensitive (Seeks)",
            hypo_list: ["Seeks deep pressure / hugs", "Makes loud noises", "Spins or jumps frequently"],
            meltdown_title: "Meltdowns vs. Tantrums",
            meltdown_desc: "A meltdown is NOT bad behavior. It is an involuntary reaction to being overwhelmed.",
            tantrum_name: "Tantrum",
            tantrum_desc: "\"I want that cookie.\" Stops when they get it or are distracted. Goal-driven.",
            meltdown_name: "Meltdown",
            meltdown_def_desc: "\"I can't cope anymore.\" Continues even if needs are met. Needs safety & calm."
        },
        routines: {
            title: "Routines & Structure",
            intro: "Anxiety often comes from not knowing \"what comes next\". Predictability creates safety. Safety creates calm.",
            why_title: "Why use visual schedules?",
            why_desc: "Auditory information (speech) vanishes instantly. Visual information stays. Using pictures gives your child time to process what is happening.",
            morning_title: "Morning Routine Example",
            steps_morning: ["Wake Up", "Toilet", "Brush Teeth", "Get Dressed"],
            tip: "*Tip: Use real photos of your child doing these things for better understanding.",
            evening_title: "Evening Routine Example",
            steps_evening: ["Dinner", "Bath Time", "Story", "Sleep"],
            transition_title: "Mastering Transitions (Stopping an activity)",
            transition_desc: "Moving from a fun activity (iPad) to a boring one (Dinner) is the hardest part of the day.",
            transition_list: [
                { title: "The 5-Minute Warning", desc: "Don't just snatch it away. Say \"5 more minutes.\"" },
                { title: "Use a Timer", desc: "A visual timer (red shrinking circle) helps them \"see\" time passing." },
                { title: "First/Then Language", desc: "\"First shoes, Then park.\" Simple and logic-based." }
            ]
        },
        support: {
            title: "Parent Support & Resources",
            intro: "You cannot pour from an empty cup. Taking care of yourself is taking care of your child. Here is your toolkit for the hard days.",
            toolkit_title: "Crisis Toolkit (Meltdown in progress)",
            toolkit_steps: [
                { title: "1. Safety First", desc: "Move objects that can be thrown. Move the child to a soft surface if possible." },
                { title: "2. Low Arousal", desc: "Stop talking. Stop asking questions. Dim lights. Your calm presence is the anchor." },
                { title: "3. Wait it Out", desc: "Meltdowns are like storms. You cannot stop them, you can only weather them. Stay close." }
            ],
            mental_title: "Handling Guilt & Grief",
            mental_desc: "Many parents feel guilty. \"Did I cause this?\" It is also okay to grieve the future you imagined. That is not \"bad parenting\", it is human.",
            affirmation: "\"I am the best expert on my child. I am doing my best with the resources I have.\"",
            break_title: "When to take a break",
            break_desc: "If you feel your patience snapping, walk away. Using a \"Safe Room\" where you can leave them for 2 minutes is safer than losing your temper.",
            break_quote: "\"A calm 5 minutes is better than an angry hour.\"",
            resources_title: "Recommended Resources",
            resources: [
                { title: "Hanen Centre (Speech)", desc: "Incredible programs for parents." },
                { title: "Ross Greene (Behavior)", desc: "Collaborative & Proactive Solutions approach." },
                { title: "Sensory Processing Disorder Foundation", desc: "Understanding the 'why' behind sensory behaviors." },
                { title: "Local Support Groups", desc: "Find other parents. They are the only ones who truly get it." }
            ]
        },
        progress: {
            title: "Track Small Wins",
            intro: "In autism development, the small wins are the big wins. Eye contact for 2 seconds. Trying a new food. A new sound.",
            q_title: "What went well this week?",
            input_placeholder: "e.g., Looked at me when I called his name...",
            btn_add: "Add Win",
            empty_state: "No wins recorded yet. Add one above! 🌱",
            reflect_title: "Questions to reflect on:",
            reflect_list: ["What sensory activities calmed them down?", "Which exercise caused frustration?", "Did they sleep better on days we did 'Heavy Work'?"],
            specialist_title: "When to see a specialist?",
            specialist_desc: "If you notice regression (losing skills they had), self-injury, or no response to name by 18 months, please consult a pediatrician."
        },
        chat: {
            title: "AI Assistant",
            welcome: "Hello! I'm your neuro-speech therapist assistant. How can I support you and your child today? (You can ask about speech, sleep, sensory issues, or just vent.)",
            placeholder: "Ask about speech, sensory, or emotions...",
            disclaimer: "Reminder: I am an AI assistant, not a doctor.",
            loading: "Thinking..."
        }
    },
    ru: {
        nav: {
            brand: "NeuroSupport",
            understand: "Понимание",
            exercises: "Упражнения",
            routines: "Режим",
            support: "Поддержка",
            chat: "Чат с ИИ",
            menuOpen: "Открыть меню",
            menuClose: "Закрыть меню",
        },
        home: {
            hero_tag: "🌿 Вы не одни на этом пути",
            hero_title: "Раскройте Потенциал",
            hero_title_accent: "Вашего Ребенка",
            hero_desc: "Ваш цифровой нейрологопед-помощник. Мы поможем понять потребности ребенка, наладить режим и радоваться каждой маленькой победе.",
            btn_start: "Начать Упражнения",
            btn_learn: "Узнать об Аутизме",
            features_title: "Как мы можем помочь",
            features_subtitle: "Практические инструменты для родителей, основанные на эмоциональной безопасности.",
            card_understand_title: "Понять Ребенка",
            card_understand_desc: "Простые объяснения задержки речи, сенсорной чувствительности и перерузок.",
            card_exercises_title: "Ежедневные Упражнения",
            card_exercises_desc: "Веселые 5-минутные задания для речи, моторики рта и эмоций.",
            card_routines_title: "Режим и Структура",
            card_routines_desc: "Визуальные расписания для снижения тревожности и истерик.",
            card_support_title: "Поддержка Родителей",
            card_support_desc: "Профилактика выгорания, борьба с чувством вины и поддержка.",
            card_progress_title: "Дневник Успехов",
            card_progress_desc: "Отмечайте маленькие победы. Прогресс не бывает линейным.",
            card_chat_title: "ИИ Ассистент",
            card_chat_desc: "Задайте вопрос и получите бережный, профессиональный совет.",
            reassurance_title: "\"А если ребенок отказывается?\"",
            reassurance_desc: "Это нормально. Наш принцип — связь важнее послушания. Если занятие вызывает стресс, остановитесь. Мы предлагаем альтернативы.",
            reassurance_link: "Подробнее о нашем мягком подходе →"
        },
        exercises: {
            title: "Библиотека Упражнений",
            subtitle: "Коллекция нейрологопедических заданий.",
            note: "🌱 Выберите 1-2 задания в день. Не переусердствуйте.",
            tabs: {
                speech: "Развитие Речи",
                oral: "Логомассаж и Дыхание",
                sensory: "Сенсорика",
                emotional: "Эмоции"
            }
        },
        understand: {
            title: "Понимание Вашего Ребенка",
            intro: "Аутизм — это не болезнь. Это другой способ видеть, слышать и чувствовать мир.",
            what_title: "Что такое аутизм? (Просто)",
            what_desc: "Представьте операционную систему, которая обрабатывает информацию иначе. Мозг аутиста часто гиперчувствителен к деталям. Это влияет на общение и восприятие.",
            what_list: ["Сфокусированность: Глубокий интерес к любимым темам.", "Чувствительность: Свет ярче, звуки громче.", "Уникальность: Нет двух одинаковых детей с аутизмом."],
            speech_title: "Почему задержка речи?",
            speech_desc: "Речь требует работы многих систем: слуха, подражания, моторики. У многих детей с РАС снижена 'социальная мотивация' к речи. Они могут не видеть смысла делиться вниманием.",
            speech_tip: "Совет: Общение — это не только слова. Жесты, взгляд, звуки — это тоже общение. Радуйтесь им!",
            sensory_title: "Сенсорная Чувствительность",
            sensory_desc: "Мир может казаться 'слишком громким' (гипер) или 'блеклым' (гипо).",
            hyper_title: "Гиперчувствительность (Избегает)",
            hyper_list: ["Закрывает уши при шуме", "Не любит липкую еду", "Избегает яркого света"],
            hypo_title: "Гипочувствительность (Ищет)",
            hypo_list: ["Ищет крепкие объятия", "Издает громкие звуки", "Кружится или прыгает"],
            meltdown_title: "Мелтдаун (Срыв) или Истерика?",
            meltdown_desc: "Мелтдаун — это НЕ плохое поведение. Это непроизвольная реакция на перегрузку.",
            tantrum_name: "Истерика (Каприз)",
            tantrum_desc: "\"Хочу печенье\". Прекращается, если дать желаемое. Есть цель.",
            meltdown_name: "Мелтдаун (Срыв)",
            meltdown_def_desc: "\"Я больше не могу\". Продолжается, даже если всё дали. Нужна безопасность и тишина."
        },
        routines: {
            title: "Режим и Структура",
            intro: "Тревога часто возникает от незнания 'что будет дальше'. Предсказуемость дает чувство безопасности.",
            why_title: "Зачем визуальное расписание?",
            why_desc: "Слова исчезают мгновенно. Картинки остаются. Это дает время на обработку информации.",
            morning_title: "Пример Утреннего Режима",
            steps_morning: ["Подъем", "Туалет", "Чистить зубы", "Одеваться"],
            tip: "*Совет: Используйте реальные фото ребенка для лучшего понимания.",
            evening_title: "Пример Вечернего Режима",
            steps_evening: ["Ужин", "Ванна", "Сказка", "Сон"],
            transition_title: "Переходы (Смена деятельности)",
            transition_desc: "Переход от веселья (планшет) к скуке (ужин) — самое сложное время.",
            transition_list: [
                { title: "Предупреждение за 5 минут", desc: "Не забирайте резко. Скажите 'Еще 5 минут'." },
                { title: "Таймер", desc: "Визуальный таймер (красный круг) помогает 'видеть' время." },
                { title: "Правило Сначала/Потом", desc: "'Сначала ботинки, ПОТОМ парк'. Логика успокаивает." }
            ]
        },
        support: {
            title: "Поддержка Родителей",
            intro: "Нельзя налить из пустой чашки. Забота о себе — это забота о ребенке.",
            toolkit_title: "Скорая Помощь (При Срыве)",
            toolkit_steps: [
                { title: "1. Безопасность", desc: "Уберите опасные предметы. Переместитесь на мягкое. Не время 'воспитывать'." },
                { title: "2. Тишина", desc: "Меньше слов. Приглушите свет. Ваше спокойствие — это якорь." },
                { title: "3. Ждать", desc: "Срыв — это шторм. Его нельзя выключить, можно только переждать. Будьте рядом." }
            ],
            mental_title: "Вина и Горе",
            mental_desc: "Многие чувствуют вину. 'Я виноват?' Это нормально — горевать о будущем, которое вы представляли. Это не делает вас плохим родителем.",
            affirmation: "\"Я лучший эксперт по своему ребенку. Я делаю всё возможное.\"",
            break_title: "Когда нужен перерыв",
            break_desc: "Если чувствуете, что срываетесь — уйдите. Оставить ребенка в безопасной комнате на 2 минуты лучше, чем накричать.",
            break_quote: "\"Спокойные 5 минут лучше, чем час криков.\"",
            resources_title: "Полезные Ресурсы",
            resources: [
                { title: "Центр Хэнкен (Речь)", desc: "Программы для родителей детей с задержкой речи." },
                { title: "Росс Грин (Поведение)", desc: "Метод совместных решений (CPS)." },
                { title: "Фонд Сенсорной Интеграции", desc: "Понимание сенсорных проблем." },
                { title: "Группы Поддержки", desc: "Ищите других родителей. Только они поймут по-настоящему." }
            ]
        },
        progress: {
            title: "Дневник Успехов",
            intro: "В развитии при аутизме маленькие шаги — это огромные победы. Взгляд глаза-в-глаза. Попробовал новую еду.",
            q_title: "Что получилось на этой неделе?",
            input_placeholder: "Например: Посмотрел на меня, когда я позвала...",
            btn_add: "Добавить",
            empty_state: "Пока нет записей. Добавьте первую! 🌱",
            reflect_title: "Вопросы для размышления:",
            reflect_list: ["Какие сенсорные игры успокаивали?", "Какое задание вызвало злость?", "Лучше ли спал после физнагрузки?"],
            specialist_title: "Когда к специалисту?",
            specialist_desc: "Если есть регресс (утрата навыков), самоагрессия или нет реакции на имя к 18 месяцам — обратитесь к врачу."
        },
        chat: {
            title: "ИИ Ассистент",
            welcome: "Здравствуйте! Я ваш виртуальный нейрологопед. Чем могу помочь? (Спросите про речь, сон, еду или просто выговоритесь).",
            placeholder: "Спросите про сенсорику или эмоции...",
            disclaimer: "Напоминание: Я ИИ, а не врач.",
            loading: "Думаю..."
        }
    },
    pl: {
        nav: {
            brand: "NeuroWsparcie",
            understand: "Zrozumienie",
            exercises: "Ćwiczenia",
            routines: "Rutyna",
            support: "Wsparcie",
            chat: "Zapytaj AI",
            menuOpen: "Otwórz menu",
            menuClose: "Zamknij menu",
        },
        home: {
            hero_tag: "🌿 Nie jesteś sam w tej podróży",
            hero_title: "Wspieraj unikalny potencjał",
            hero_title_accent: "swojego dziecka",
            hero_desc: "Twój cyfrowy asystent neurologopedyczny. Pomożemy Ci zrozumieć potrzeby dziecka, zbudować codzienne rutyny i cieszyć się każdym małym sukcesem.",
            btn_start: "Zacznij ćwiczenia",
            btn_learn: "Dowiedz się o autyzmie",
            features_title: "Jak możemy Ci pomóc",
            features_subtitle: "Praktyczne narzędzia dla rodziców oparte na bezpieczeństwie emocjonalnym.",
            card_understand_title: "Zrozum Dziecko",
            card_understand_desc: "Proste wyjaśnienia opóźnienia mowy, wrażliwości sensorycznej i przeciążeń.",
            card_exercises_title: "Codzienne Ćwiczenia",
            card_exercises_desc: "Zabawne, 5-minutowe zadania na rozwój mowy, motoryki i emocji.",
            card_routines_title: "Rutyna i Struktura",
            card_routines_desc: "Wizualne plany dnia zmniejszające lęk i wybuchy złości.",
            card_support_title: "Wsparcie dla Rodziców",
            card_support_desc: "Zapobieganie wypaleniu, radzenie sobie z winą i przypomnienia.",
            card_progress_title: "Dziennik Postępów",
            card_progress_desc: "Świętuj małe sukcesy. Rozwój nie jest liniowy.",
            card_chat_title: "Asystent AI",
            card_chat_desc: "Zadaj pytanie i uzyskaj łagodną, fachową poradę.",
            reassurance_title: "\"Co jeśli dziecko odmawia?\"",
            reassurance_desc: "To normalne. Naszą zasadą jest relacja ponad posłuszeństwo. Jeśli ćwiczenie stresuje, przerwij. Oferujemy alternatywy.",
            reassurance_link: "Więcej o naszym podejściu →"
        },
        exercises: {
            title: "Biblioteka Ćwiczeń",
            subtitle: "Rosnąca kolekcja zadań neurologopedycznych.",
            note: "🌱 Wybierz 1-2 zadania dziennie. Nie przesadzaj.",
            tabs: {
                speech: "Komunikacja",
                oral: "Logopedia i Oddech",
                sensory: "Sensoryka",
                emotional: "Emocje"
            }
        },
        understand: {
            title: "Zrozumieć Swoje Dziecko",
            intro: "Autyzm to nie choroba. To inny sposób widzenia, słyszenia i odczuwania świata.",
            what_title: "Czym jest autyzm? (Prosto)",
            what_desc: "Wyobraź sobie system operacyjny, który inaczej przetwarza dane. Mózg autystyczny jest często nadwrażliwy na detale. Wpływa to na komunikację i zmysły.",
            what_list: ["Specjalizacja: Skupienie na ulubionych tematach.", "Wrażliwość: Światło jaśniejsze, dźwięki głośniejsze.", "Unikalność: Nie ma dwojga takich samych dzieci."],
            speech_title: "Dlaczego mowa jest opóźniona?",
            speech_desc: "Mowa wymaga współpracy wielu systemów: słuchu, naśladownictwa, motoryki. Wiele dzieci z ASD ma inną 'motywację społeczną'.",
            speech_tip: "Wskazówka: Komunikacja to więcej niż słowa. Gesty i dźwięki to też rozmowa. Ciesz się nimi!",
            sensory_title: "Wrażliwość Sensoryczna",
            sensory_desc: "Świat może być 'zbyt głośny' (nadwrażliwość) lub 'zbyt cichy' (niedowrażliwość).",
            hyper_title: "Nadwrażliwość (Unika)",
            hyper_list: ["Zatyka uszy", "Unika klejącego jedzenia", "Mruży oczy"],
            hypo_title: "Niedowrażliwość (Szuka)",
            hypo_list: ["Szuka mocnego uścisku", "Hałasuje", "Kręci się"],
            meltdown_title: "Meltdown (Załamanie) czy Histeria?",
            meltdown_desc: "Meltdown to NIE złe zachowanie. To reakcja na przeciążenie systemu nerwowego.",
            tantrum_name: "Histeria (Wymuszenie)",
            tantrum_desc: "\"Chcę ciastko\". Przestaje, gdy dostanie. Ma cel.",
            meltdown_name: "Meltdown (Przeciążenie)",
            meltdown_def_desc: "\"Nie daję rady\". Trwa nawet po spełnieniu pragnień. Potrzebuje ciszy i bezpieczeństwa."
        },
        routines: {
            title: "Rutyna i Struktura",
            intro: "Lęk bierze się z niewiedzy 'co będzie dalej'. Przewidywalność to bezpieczeństwo.",
            why_title: "Po co plan wizualny?",
            why_desc: "Słowa znikają. Obrazki zostają. To daje czas na przetworzenie informacji.",
            morning_title: "Przykład Poranka",
            steps_morning: ["Pobudka", "Toaleta", "Zęby", "Ubranie"],
            tip: "*Wskazówka: Użyj prawdziwych zdjęć dziecka.",
            evening_title: "Przykład Wieczoru",
            steps_evening: ["Kolacja", "Kąpiel", "Bajka", "Sen"],
            transition_title: "Zmiana Aktywności",
            transition_desc: "Przejście z zabawy do nudy to najtrudniejszy moment.",
            transition_list: [
                { title: "Ostrzeżenie 5 min", desc: "Zawsze uprzedzaj o końcu zabawy." },
                { title: "Minutnik", desc: "Wizualny zegar pomaga 'zobaczyć' czas." },
                { title: "Najpierw/Potem", desc: "'Najpierw buty, POTEM park'. Logika uspokaja." }
            ]
        },
        support: {
            title: "Wsparcie dla Rodziców",
            intro: "Nie nalejesz z pustego dzbanka. Dbając o siebie, dbasz o dziecko.",
            toolkit_title: "Apteczka Ratunkowa (Podczas ataku)",
            toolkit_steps: [
                { title: "1. Bezpieczeństwo", desc: "Usuń niebezpieczne przedmioty. To nie czas na wychowywanie." },
                { title: "2. Cisza", desc: "Mniej słów. Przygaś światło. Twój spokój to kotwica." },
                { title: "3. Czekaj", desc: "Meltdown to burza. Musisz ją przeczekać będąc blisko." }
            ],
            mental_title: "Wina i Żałoba",
            mental_desc: "Masz prawo czuć żal za utraconymi wyobrażeniami o rodzicielstwie. To ludzkie.",
            affirmation: "\"Jestem najlepszym ekspertem od mojego dziecka.\"",
            break_title: "Kiedy zrobić przerwę",
            break_desc: "Lepiej wyjść na 2 minuty do bezpiecznego pokoju niż nakrzyczeć.",
            break_quote: "\"Spokojne 5 minut jest lepsze niż godzina złości.\"",
            resources_title: "Zasoby",
            resources: [
                { title: "Metoda Hanen", desc: "Wspieranie komunikacji." },
                { title: "Ross Greene", desc: "Rozwiązywanie problemów przez współpracę." },
                { title: "Integracja Sensoryczna", desc: "Zrozumienie zmysłów." },
                { title: "Grupy wsparcia", desc: "Poszukaj innych rodziców." }
            ]
        },
        progress: {
            title: "Śledzenie Postępów",
            intro: "Małe kroki to wielkie zwycięstwa. Kontakt wzrokowy. Nowy dźwięk.",
            q_title: "Co się udało w tym tygodniu?",
            input_placeholder: "Np.: Spojrzał na mnie, gdy zawołałam...",
            btn_add: "Dodaj sukces",
            empty_state: "Brak wpisów. Dodaj pierwszy! 🌱",
            reflect_title: "Pytania:",
            reflect_list: ["Co go uspokoiło?", "Co wywołało frustrację?", "Czy spał lepiej po spacerze?"],
            specialist_title: "Kiedy do specjalisty?",
            specialist_desc: "Jeśli nastąpi regres (utrata umiejętności) lub brak reakcji na imię do 18 miesiąca."
        },
        chat: {
            title: "Asystent AI",
            welcome: "Cześć! Jestem Twoim wirtualnym asystentem. Jak mogę Ci pomóc? (Pytaj o mowę, sen, czy emocje).",
            placeholder: "Zapytaj o sensorykę...",
            disclaimer: "Przypomnienie: Jestem AI, nie lekarzem.",
            loading: "Myślę..."
        }
    },
    uk: {
        nav: {
            brand: "NeuroSupport",
            understand: "Розуміння",
            exercises: "Вправи",
            routines: "Режим",
            support: "Підтримка",
            chat: "Чат з ШІ",
            menuOpen: "Відкрити меню",
            menuClose: "Закрити меню",
        },
        home: {
            hero_tag: "🌿 Ви не одні на цьому шляху",
            hero_title: "Розкрийте Потенціал",
            hero_title_accent: "Вашої Дитини",
            hero_desc: "Ваш цифровий нейрологопед-помічник. Ми допоможемо зрозуміти потреби дитини і радіти кожній маленькій перемозі.",
            btn_start: "Почати Вправи",
            btn_learn: "Дізнатись про Аутизм",
            features_title: "Як ми можемо допомогти",
            features_subtitle: "Практичні інструменти, засновані на емоційній безпеці.",
            card_understand_title: "Зрозуміти Дитину",
            card_understand_desc: "Прості пояснення затримки мови та сенсорної чутливості.",
            card_exercises_title: "Щоденні Вправи",
            card_exercises_desc: "Веселі 5-хвилинні завдання для мови та емоцій.",
            card_routines_title: "Режим і Структура",
            card_routines_desc: "Візуальні розклади для зниження тривожності.",
            card_support_title: "Підтримка Батьків",
            card_support_desc: "Профілактика вигорання та боротьба з почуттям провини.",
            card_progress_title: "Щоденник Успіхів",
            card_progress_desc: "Відзначайте маленькі перемоги. Прогрес не буває лінійним.",
            card_chat_title: "ШІ Асистент",
            card_chat_desc: "Задайте питання і отримайте професійну пораду.",
            reassurance_title: "\"А якщо дитина відмовляється?\"",
            reassurance_desc: "Це нормально. Зв'язок важливіший за слухняність. Якщо заняття викликає стрес, зупиніться.",
            reassurance_link: "Детальніше про наш підхід →"
        },
        exercises: {
            title: "Бібліотека Вправ",
            subtitle: "Колекція нейрологопедичних завдань.",
            note: "🌱 Оберіть 1-2 завдання на день. Не перестарайтеся.",
            tabs: {
                speech: "Розвиток Мови",
                oral: "Логомасаж і Дихання",
                sensory: "Сенсорика",
                emotional: "Емоції"
            }
        },
        understand: {
            title: "Розуміння Вашої Дитини",
            intro: "Аутизм — це не хвороба. Це інший спосіб бачити і відчувати світ.",
            what_title: "Що таке аутизм?",
            what_desc: "Уявіть операційну систему, яка обробляє інформацію інакше. Мозок аутиста часто гіперчутливий до деталей.",
            what_list: ["Сфокусованість: Глибокий інтерес до улюблених тем.", "Чутливість: Світло яскравіше, звуки гучніші.", "Унікальність: Немає двох однакових дітей."],
            speech_title: "Чому затримка мови?",
            speech_desc: "Мова вимагає роботи багатьох систем. У багатьох дітей з РАС знижена 'соціальна мотивація' до мови.",
            speech_tip: "Порада: Спілкування — це не тільки слова. Жести і звуки — це теж спілкування.",
            sensory_title: "Сенсорна Чутливість",
            sensory_desc: "Світ може здаватися 'занадто гучним' (гіпер) або 'тьмяним' (гіпо).",
            hyper_title: "Гіперчутливість (Уникає)",
            hyper_list: ["Затуляє вуха", "Не любить липку їжу", "Уникає світла"],
            hypo_title: "Гіпочутливість (Шукає)",
            hypo_list: ["Шукає міцні обійми", "Видає гучні звуки", "Кружляє"],
            meltdown_title: "Мелтдаун (Зрив) чи Істерика?",
            meltdown_desc: "Мелтдаун — це НЕ погана поведінка. Це мимовільна реакція на перевантаження.",
            tantrum_name: "Істерика (Каприз)",
            tantrum_desc: "\"Хочу печиво\". Припиняється, якщо дати бажане.",
            meltdown_name: "Мелтдаун (Зрив)",
            meltdown_def_desc: "\"Я більше не можу\". Триває, навіть якщо все дали. Потрібна тиша."
        },
        routines: {
            title: "Режим і Структура",
            intro: "Тривога виникає від незнання 'що буде далі'. Передбачуваність дає безпеку.",
            why_title: "Навіщо візуальний розклад?",
            why_desc: "Слова зникають. Картинки залишаються. Це дає час на обробку інформації.",
            morning_title: "Приклад Ранку",
            steps_morning: ["Підйом", "Туалет", "Чистити зуби", "Одягатися"],
            tip: "*Порада: Використовуйте реальні фото дитини.",
            evening_title: "Приклад Вечора",
            steps_evening: ["Вечеря", "Ванна", "Казка", "Сон"],
            transition_title: "Переходи (Зміна діяльності)",
            transition_desc: "Перехід від веселощів до нудьги — найскладніший час.",
            transition_list: [
                { title: "Попередження за 5 хвилин", desc: "Не забирайте різко. Скажіть 'Ще 5 хвилин'." },
                { title: "Таймер", desc: "Візуальний таймер допомагає 'бачити' час." },
                { title: "Спочатку/Потім", desc: "'Спочатку черевики, ПОТІМ парк'." }
            ]
        },
        support: {
            title: "Підтримка Батьків",
            intro: "Не можна налити з порожньої чашки. Турбота про себе — це турбота про дитину.",
            toolkit_title: "Швидка Допомога (При Зриві)",
            toolkit_steps: [
                { title: "1. Безпека", desc: "Приберіть небезпечні предмети. Не час 'виховувати'." },
                { title: "2. Тиша", desc: "Менше слів. Приглушіть світло." },
                { title: "3. Чекати", desc: "Зрив — це шторм. Його треба перечекати." }
            ],
            mental_title: "Провина і Горе",
            mental_desc: "Багато хто відчуває провину. Це нормально — сумувати за майбутнім, яке ви уявляли.",
            affirmation: "\"Я найкращий експерт зі своєї дитини.\"",
            break_title: "Коли потрібна перерва",
            break_desc: "Краще піти на 2 хвилини, ніж накричати.",
            break_quote: "\"Спокійні 5 хвилин краще, ніж година криків.\"",
            resources_title: "Корисні Ресурси",
            resources: [
                { title: "Центр Хенкена", desc: "Програми для батьків." },
                { title: "Росс Грін", desc: "Метод спільних рішень." },
                { title: "Фонд Сенсорної Інтеграції", desc: "Розуміння сенсорики." },
                { title: "Групи Підтримки", desc: "Шукайте інших батьків." }
            ]
        },
        progress: {
            title: "Щоденник Успіхів",
            intro: "Маленькі кроки — це величезні перемоги. Погляд очі-в-очі. Новий звук.",
            q_title: "Що вийшло цього тижня?",
            input_placeholder: "Наприклад: Подивився на мене...",
            btn_add: "Додати",
            empty_state: "Поки немає записів. Додайте перший! 🌱",
            reflect_title: "Питання для роздумів:",
            reflect_list: ["Які ігри заспокоювали?", "Що викликало злість?", "Чи краще спав після фізнавантаження?"],
            specialist_title: "Коли до спеціаліста?",
            specialist_desc: "Якщо є регрес або немає реакції на ім'я до 18 місяців."
        },
        chat: {
            title: "ШІ Асистент",
            welcome: "Вітаю! Я ваш віртуальний нейрологопед. Чим можу допомогти?",
            placeholder: "Запитайте про сенсорику...",
            disclaimer: "Нагадування: Я ШІ, а не лікар.",
            loading: "Думаю..."
        }
    }
};
