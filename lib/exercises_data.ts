export type Exercise = {
    id: string;
    title: { en: string; ru: string; pl: string; uk: string };
    category: 'speech' | 'oral' | 'sensory' | 'emotional' | 'motor';
    age: ('2-3' | '4-5' | '6-8')[];
    level: 'beginner' | 'intermediate' | 'advanced';
    goal: { en: string; ru: string; pl: string; uk: string };
    steps: { en: string[]; ru: string[]; pl: string[]; uk: string[] };
    refusal: { en: string; ru: string; pl: string; uk: string };
};

export const exercisesData: Exercise[] = [
    // =========================================================================
    // SPEECH & COMMUNICATION (30 exercises)
    // =========================================================================
    {
        id: "naming_choices",
        title: { en: "Naming with Choices", ru: "Выбор с называнием", pl: "Wybór z nazywaniem", uk: "Вибір з назвою" },
        category: "speech",
        age: ["2-3", "4-5"],
        level: "beginner",
        goal: { en: "Encourage choosing and vocalizing", ru: "Стимуляция выбора и вокализации", pl: "Zachęcanie do wyboru i wokalizacji", uk: "Стимуляція вибору та вокалізації" },
        steps: {
            en: ["Hold two items (e.g., Apple vs Cookie).", "Ask 'Apple or Cookie?'", "Wait 10s."],
            ru: ["Держите два предмета (Яблоко или Печенье).", "Спросите 'Яблоко или Печенье?'", "Ждите 10 сек."],
            pl: ["Pokaż dwa przedmioty (Jabłko czy Ciastko).", "Zapytaj 'Jabłko czy Ciastko?'", "Czekaj 10 sek."],
            uk: ["Тримайте два предмети (Яблуко чи Печиво).", "Запитайте 'Яблуко чи Печиво?'", "Чекайте 10 сек."]
        },
        refusal: { en: "Just hold one item.", ru: "Держите только один предмет.", pl: "Pokaż tylko jeden przedmiot.", uk: "Тримайте лише один предмет." }
    },
    {
        id: "animal_sounds",
        title: { en: "Animal Sounds", ru: "Звукоподражание", pl: "Naśladowanie Zwierząt", uk: "Наслідування Тварин" },
        category: "speech",
        age: ["2-3"],
        level: "beginner",
        goal: { en: "Imitating vowels", ru: "Имитация гласных", pl: "Naśladowanie samogłosek", uk: "Імітація голосних" },
        steps: {
            en: ["Show toy.", "Say 'Mooo!'", "Pause."],
            ru: ["Покажите игрушку.", "Скажите 'Мууу!'", "Пауза."],
            pl: ["Pokaż zabawkę.", "Powiedz 'Muu!'", "Pauza."],
            uk: ["Покажіть іграшку.", "Скажіть 'Муу!'", "Пауза."]
        },
        refusal: { en: "Use a mirror.", ru: "Используйте зеркало.", pl: "Użyj lustra.", uk: "Використовуйте дзеркало." }
    },
    {
        id: "ready_set_go",
        title: { en: "Ready, Set, Go!", ru: "На старт, Внимание, Марш!", pl: "Gotowi, Start!", uk: "На старт, Увага, Руш!" },
        category: "speech",
        age: ["2-3", "4-5"],
        level: "beginner",
        goal: { en: "Anticipation & Impulse Control", ru: "Ожидание и контроль", pl: "Oczekiwanie i kontrola impulsu", uk: "Очікування та контроль" },
        steps: {
            en: ["Pause before 'Go'.", "Tickle on 'Go'."],
            ru: ["Пауза перед 'Марш'.", "Щекотка на 'Марш'."],
            pl: ["Pauza przed 'Start'.", "Połaskocz na 'Start'."],
            uk: ["Пауза перед 'Руш'.", "Лоскотати на 'Руш'."]
        },
        refusal: { en: " Shorter wait.", ru: "Меньше ждать.", pl: "Krótsze czekanie.", uk: "Менше чекати." }
    },
    {
        id: "song_fill_in",
        title: { en: "Song Fill-in", ru: "Допоем песню", pl: "Dokończ piosenkę", uk: "Доспівай пісню" },
        category: "speech",
        age: ["2-3", "4-5"],
        level: "intermediate",
        goal: { en: "Verbal completion", ru: "Договаривание слов", pl: "Uzupełnianie słów", uk: "Доповнення слів" },
        steps: {
            en: ["Sing a favorite song.", "Stop at the last word.", "Wait for them to say it."],
            ru: ["Пойте любимую песню.", "Остановитесь на последнем слове.", "Ждите слова."],
            pl: ["Śpiewaj ulubioną piosenkę.", "Zatrzymaj się na ostatnim słowie.", "Czekaj aż dopowie."],
            uk: ["Співайте улюблену пісню.", "Зупиніться на останньому слові.", "Чекайте слова."]
        },
        refusal: { en: "Whisper the word first.", ru: "Прошепчите слово сами.", pl: "Wyszepcz słowo.", uk: "Прошепотіть слово." }
    },
    {
        id: "microphone_play",
        title: { en: "Microphone Fun", ru: "Игра в микрофон", pl: "Zabawa z mikrofonem", uk: "Гра в мікрофон" },
        category: "speech",
        age: ["2-3", "4-5"],
        level: "beginner",
        goal: { en: "Vocalization confidence", ru: "Уверенность в голосе", pl: "Pewność siebie w głosie", uk: "Впевненість у голосі" },
        steps: {
            en: ["Use a toy echo mic.", "Make funny noises.", "Pass it to child."],
            ru: ["Возьмите эхо-микрофон.", "Издавайте звуки.", "Передайте ребенку."],
            pl: ["Użyj mikrofonu echo.", "Rób śmieszne dźwięki.", "Podaj dziecku."],
            uk: ["Візьміть ехо-мікрофон.", "Видавайте звуки.", "Передайте дитині."]
        },
        refusal: { en: "Sing into a cup.", ru: "Пойте в чашку.", pl: "Śpiewaj do kubka.", uk: "Співайте в чашку." }
    },
    {
        id: "phone_call",
        title: { en: "Toy Phone Call", ru: "Телефонный разговор", pl: "Rozmowa telefoniczna", uk: "Телефонна розмова" },
        category: "speech",
        age: ["2-3", "4-5"],
        level: "intermediate",
        goal: { en: "Conversational turns", ru: "Диалог по очереди", pl: "Naprzemienność w rozmowie", uk: "Діалог по черзі" },
        steps: {
            en: ["Ring the toy phone.", "Say 'Hello! Who is it?'", "Hand to child."],
            ru: ["Позвоните игрушке.", "Скажите 'Алло! Кто это?'", "Дайте ребенку."],
            pl: ["Zadzwoń zabawkowym telefonem.", "Powiedz 'Halo?'", "Podaj dziecku."],
            uk: ["Подзвоніть іграшці.", "Скажіть 'Алло! Хто це?'", "Дайте дитині."]
        },
        refusal: { en: "Talk to a puppet.", ru: "Говорите с куклой.", pl: "Rozmawiaj z lalką.", uk: "Говоріть з лялькою." }
    },
    {
        id: "action_imitation",
        title: { en: "Do What I Do", ru: "Делай как я", pl: "Rób to co ja", uk: "Роби як я" },
        category: "speech",
        age: ["2-3", "4-5"],
        level: "beginner",
        goal: { en: "Motor imitation", ru: "Моторная имитация", pl: "Naśladowanie ruchowe", uk: "Моторна імітація" },
        steps: {
            en: ["Clap hands.", "Say 'Clap!'", "Wait for child."],
            ru: ["Хлопайте.", "Скажите 'Хлоп!'", "Ждите."],
            pl: ["Klaszcz.", "Powiedz 'Klap!'", "Czekaj."],
            uk: ["Плескайте.", "Скажіть 'Хлоп!'", "Чекайте."]
        },
        refusal: { en: "Guide their hands.", ru: "Возьмите их руки.", pl: "Pomóż ich rękami.", uk: "Візьміть їхні руки." }
    },
    {
        id: "prepositions_box",
        title: { en: "Where is the Cat?", ru: "Где кошка?", pl: "Gdzie jest kot?", uk: "Де кішка?" },
        category: "speech",
        age: ["4-5", "6-8"],
        level: "intermediate",
        goal: { en: "Prepositions (In/On/Under)", ru: "Предлоги (В/На/Под)", pl: "Przyimki (W/Na/Pod)", uk: "Прийменники (В/На/Під)" },
        steps: {
            en: ["Put toy IN box.", "Ask 'Where is it?'", "Say 'IN the box'."],
            ru: ["Игрушка В коробке.", "Спросите 'Где?'", "Скажите 'В коробке'."],
            pl: ["Zabawka W pudełku.", "Zapytaj 'Gdzie?'", "Powiedz 'W pudełku'."],
            uk: ["Іграшка В коробці.", "Запитайте 'Де?'", "Скажіть 'В коробці'."]
        },
        refusal: { en: "Let them hide it.", ru: "Пусть прячут сами.", pl: "Niech same chowają.", uk: "Нехай ховають самі." }
    },
    {
        id: "yes_no_game",
        title: { en: "Yes/No Game", ru: "Игра Да/Нет", pl: "Gra Tak/Nie", uk: "Гра Так/Ні" },
        category: "speech",
        age: ["4-5", "6-8"],
        level: "advanced",
        goal: { en: "Answering questions", ru: "Ответы на вопросы", pl: "Odpowiadanie na pytania", uk: "Відповіді на питання" },
        steps: {
            en: ["Show a Banana.", "Ask 'Is this a Car?'", "Encourage head shake/nod."],
            ru: ["Покажите Банан.", "Спросите 'Это машина?'", "Ждите кивка/мотания."],
            pl: ["Pokaż Banan.", "Zapytaj 'To auto?'", "Czekaj na gest."],
            uk: ["Покажіть Банан.", "Запитайте 'Це авто?'", "Чекайте на жест."]
        },
        refusal: { en: "Model the answer.", ru: "Покажите ответ.", pl: "Pokaż odpowiedź.", uk: "Покажіть відповідь." }
    },
    {
        id: "gimme_five",
        title: { en: "High Five", ru: "Дай пять", pl: "Przybij piątkę", uk: "Дай п'ять" },
        category: "speech",
        age: ["2-3", "4-5"],
        level: "beginner",
        goal: { en: "Social gesture", ru: "Социальный жест", pl: "Gest społeczny", uk: "Соціальний жест" },
        steps: {
            en: ["Raise hand.", "Say 'High five!'", "Wait for contact."],
            ru: ["Поднимите руку.", "Скажите 'Дай пять!'", "Ждите."],
            pl: ["Podnieś rękę.", "Powiedz 'Piątka!'", "Czekaj."],
            uk: ["Підніміть руку.", "Скажіть 'Дай п'ять!'", "Чекайте."]
        },
        refusal: { en: "Touch their hand gently.", ru: "Коснитесь их руки.", pl: "Dotknij lekko ręki.", uk: "Торкніться їхньої руки." }
    },
    {
        id: "simon_says",
        title: { en: "Simon Says", ru: "Саймон говорит", pl: "Szymon mówi", uk: "Саймон каже" },
        category: "speech",
        age: ["4-5", "6-8"],
        level: "advanced",
        goal: { en: "Listening rules", ru: "Слушать правила", pl: "Słuchanie zasad", uk: "Слухати правила" },
        steps: {
            en: ["'Simon says touch nose'.", "Do it.", "'Touch nose' (don't do it)."],
            ru: ["'Саймон: тронь нос'.", "Делай.", "'Тронь нос' (не делай)."],
            pl: ["'Szymon: dotknij nosa'.", "Rób.", "'Dotknij nosa' (nie rób)."],
            uk: ["'Саймон: торкнись носа'.", "Роби.", "'Торкнись носа' (не роби)."]
        },
        refusal: { en: "Play without the trick part.", ru: "Без подвоха.", pl: "Bez podstępu.", uk: "Без підступу." }
    },
    {
        id: "picture_match",
        title: { en: "Picture Matching", ru: "Найди пару", pl: "Dopasuj obrazki", uk: "Знайди пару" },
        category: "speech",
        age: ["2-3", "4-5"],
        level: "beginner",
        goal: { en: "Visual matching", ru: "Визуальное совпадение", pl: "Dopasowanie wizualne", uk: "Візуальне співпадіння" },
        steps: {
            en: ["Put 3 pictures on floor.", "Give child matching card.", "Say 'Match!'"],
            ru: ["3 карты на пол.", "Дайте ребенку пару.", "Скажите 'Найди!'"],
            pl: ["3 karty na podłogę.", "Daj parę.", "Powiedz 'Dopasuj!'"],
            uk: ["3 картки на підлогу.", "Дайте пару.", "Скажіть 'Знайди!'"]
        },
        refusal: { en: "Start with 1 option.", ru: "Начните с 1 карты.", pl: "Start z 1 kartą.", uk: "Почніть з 1 карти." }
    },
    {
        id: "big_small",
        title: { en: "Big vs Small", ru: "Большой и Маленький", pl: "Duży i Mały", uk: "Великий і Маленький" },
        category: "speech",
        age: ["2-3", "4-5"],
        level: "beginner",
        goal: { en: "Concepts of size", ru: "Понятие размера", pl: "Pojęcie wielkości", uk: "Поняття розміру" },
        steps: {
            en: ["Big ball vs Small ball.", "Ask 'Give me BIG'.", "Then 'Give me SMALL'."],
            ru: ["Большой мяч и малый.", "Просите 'Дай БОЛЬШОЙ'.", "Потом малый."],
            pl: ["Duża piłka i mała.", "Poproś 'Daj DUŻĄ'.", "Potem małą."],
            uk: ["Великий м'яч і малий.", "Просіть 'Дай ВЕЛИКИЙ'.", "Потім малий."]
        },
        refusal: { en: "Exaggerate voice (Deep vs High).", ru: "Меняйте голос (Бас vs Писк).", pl: "Zmieniaj głos.", uk: "Змінюйте голос." }
    },
    {
        id: "go_stop_sign",
        title: { en: "Stop & Go Signs", ru: "Знак Стоп и Иди", pl: "Znak Stop i Idź", uk: "Знак Стоп і Йди" },
        category: "speech",
        age: ["4-5", "6-8"],
        level: "intermediate",
        goal: { en: "Visual rules", ru: "Визуальные правила", pl: "Zasady wizualne", uk: "Візуальні правила" },
        steps: {
            en: ["Hold Red paper (Stop).", "Hold Green paper (Go).", "Walk accordingly."],
            ru: ["Красная бумага (Стоп).", "Зеленая (Иди).", "Ходите по команде."],
            pl: ["Czerwony (Stop).", "Zielony (Idź).", "Chodźcie wg koloru."],
            uk: ["Червоний (Стоп).", "Зелений (Йди).", "Ходіть по команді."]
        },
        refusal: { en: "Use toy cars.", ru: "Катайте машинки.", pl: "Użyj aut.", uk: "Катайте машинки." }
    },
    {
        id: "whats_in_bag",
        title: { en: "Mystery Bag", ru: "Волшебный мешочек", pl: "Tajemniczy worek", uk: "Чарівний мішечок" },
        category: "speech",
        age: ["2-3", "4-5", "6-8"],
        level: "intermediate",
        goal: { en: "Tactile naming", ru: "Называние на ощупь", pl: "Nazywanie dotykiem", uk: "Називання на дотик" },
        steps: {
            en: ["Put toy in opaque bag.", "Let child feel it.", "Ask 'What is it?'"],
            ru: ["Игрушка в мешке.", "Пусть ощупает.", "Спросите 'Что это?'"],
            pl: ["Zabawka w worku.", "Niech dotknie.", "Zapytaj 'Co to?'"],
            uk: ["Іграшка в мішку.", "Нехай обмацає.", "Запитайте 'Що це?'"]
        },
        refusal: { en: "Peek inside.", ru: "Подглядывайте.", pl: "Podglądaj.", uk: "Підглядайте." }
    },

    // =========================================================================
    // ORAL & RESPIRATION (25 exercises)
    // =========================================================================
    {
        id: "blowing_bubbles",
        title: { en: "Blowing Bubbles", ru: "Мыльные Пузыри", pl: "Bańki Mydlane", uk: "Мильні Бульбашки" },
        category: "oral",
        age: ["2-3", "4-5", "6-8"],
        level: "beginner",
        goal: { en: "Lip rounding", ru: "Округление губ", pl: "Zaokrąglanie ust", uk: "Округлення губ" },
        steps: {
            en: ["Blow slow bubbles.", "Catch them.", "Pop them."],
            ru: ["Дуйте медленно.", "Ловите их.", "Лопайте."],
            pl: ["Dmuchaj powoli.", "Łapcie je.", "Przebijaj."],
            uk: ["Дуйте повільно.", "Ловіть їх.", "Лопайте."]
        },
        refusal: { en: "Pop them with finger.", ru: "Лопайте пальцем.", pl: "Przebijaj palcem.", uk: "Лопайте пальцем." }
    },
    {
        id: "straw_drinking",
        title: { en: "Thick Shake", ru: "Густой коктейль", pl: "Gęsty koktajl", uk: "Густий коктейль" },
        category: "oral",
        age: ["2-3", "4-5", "6-8"],
        level: "intermediate",
        goal: { en: "Cheek strength", ru: "Сила щек", pl: "Siła policzków", uk: "Сила щік" },
        steps: {
            en: ["Make thick smoothie.", "Use thin straw.", "Drink hard."],
            ru: ["Густой смузи.", "Тонкая трубка.", "Сильно тянуть."],
            pl: ["Gęste smoothie.", "Cienka słomka.", "Mocno ciągnij."],
            uk: ["Густий смузі.", "Тонка трубка.", "Сильно тягнути."]
        },
        refusal: { en: "Thinner liquid.", ru: "Жиже напиток.", pl: "Rzadszy płyn.", uk: "Рідший напій." }
    },
    {
        id: "tongue_jam",
        title: { en: "Tasty Corners", ru: "Вкусные уголки", pl: "Smaczne kąciki", uk: "Смачні куточки" },
        category: "oral",
        age: ["2-3", "4-5"],
        level: "beginner",
        goal: { en: "Tongue lateralization", ru: "Движение языка", pl: "Ruchy języka", uk: "Рухи язика" },
        steps: {
            en: ["Jam on corner of mouth.", "Lick it off.", "Repeat other side."],
            ru: ["Варенье в уголок рта.", "Слизнуть.", "Повторить."],
            pl: ["Dżem w kącik ust.", "Zliż.", "Powtórz."],
            uk: ["Варення в куточок рота.", "Злизнути.", "Повторити."]
        },
        refusal: { en: "Use mirror.", ru: "Зеркало.", pl: "Lustro.", uk: "Дзеркало." }
    },
    {
        id: "cotton_race",
        title: { en: "Cotton Race", ru: "Гонки ваты", pl: "Wyścig waty", uk: "Перегони вати" },
        category: "oral",
        age: ["4-5", "6-8"],
        level: "advanced",
        goal: { en: "Controlled airflow", ru: "Контроль воздуха", pl: "Kontrola wydechu", uk: "Контроль повітря" },
        steps: {
            en: ["Cotton ball on table.", "Blow to finish line.", "No hands."],
            ru: ["Вата на столе.", "Дуть до финиша.", "Без рук."],
            pl: ["Wata na stole.", "Dmuchaj do mety.", "Bez rąk."],
            uk: ["Вата на столі.", "Дути до фінішу.", "Без рук."]
        },
        refusal: { en: "Use a straw.", ru: "Через трубку.", pl: "Przez słomkę.", uk: "Через трубку." }
    },
    {
        id: "fish_face",
        title: { en: "Fish Face", ru: "Рыбка", pl: "Rybka", uk: "Рибка" },
        category: "oral",
        age: ["2-3", "4-5"],
        level: "beginner",
        goal: { en: "Cheek suction", ru: "Втягивание щек", pl: "Wciąganie policzków", uk: "Втягування щік" },
        steps: {
            en: ["Suck cheeks in.", "Pop them.", "Make noise."],
            ru: ["Втяни щеки.", "Чмокни.", "Сделай звук."],
            pl: ["Wciągnij policzki.", "Cmoknij.", "Zrób hałas."],
            uk: ["Втягни щоки.", "Чмокни.", "Зроби звук."]
        },
        refusal: { en: "Touch cheeks.", ru: "Трогать щеки.", pl: "Dotknij policzków.", uk: "Чіпати щоки." }
    },
    {
        id: "ice_cube",
        title: { en: "Ice Play", ru: "Игра со льдом", pl: "Zabawa lodu", uk: "Гра з льодом" },
        category: "oral",
        age: ["4-5", "6-8"],
        level: "advanced",
        goal: { en: "Oral sensory awareness", ru: "Оральная чувствительность", pl: "Świadomość jamy ustnej", uk: "Оральна чутливість" },
        steps: {
            en: ["Rub ice on lips.", "Lick it.", "Feel the cold."],
            ru: ["Лед на губы.", "Лизни.", "Почувствуй холод."],
            pl: ["Lód na usta.", "Poliż.", "Poczuj zimno."],
            uk: ["Лід на губи.", "Лизни.", "Відчуй холод."]
        },
        refusal: { en: "Use cold spoon.", ru: "Холодная ложка.", pl: "Zimna łyżka.", uk: "Холодна ложка." }
    },
    {
        id: "crunchy_food",
        title: { en: "Captain Crunch", ru: "Капитан Хруст", pl: "Kapitan Chrup", uk: "Капітан Хрускіт" },
        category: "oral",
        age: ["2-3", "4-5"],
        level: "beginner",
        goal: { en: "Jaw stability", ru: "Стабильность челюсти", pl: "Stabilność żuchwy", uk: "Стабільність щелепи" },
        steps: {
            en: ["Eat carrot stick.", "Listen to cronch.", "Chew 5 times."],
            ru: ["Ешь морковь.", "Слушай хруст.", "Жуй 5 раз."],
            pl: ["Zjedz marchew.", "Słuchaj chrupania.", "Żuj 5 razy."],
            uk: ["Їж моркву.", "Слухай хрускіт.", "Жуй 5 разів."]
        },
        refusal: { en: "Pretzels.", ru: "Сушки.", pl: "Precle.", uk: "Сушки." }
    },
    {
        id: "lip_hold",
        title: { en: "Lip Holder", ru: "Держатель", pl: "Trzymacz", uk: "Тримач" },
        category: "oral",
        age: ["4-5", "6-8"],
        level: "intermediate",
        goal: { en: "Lip seal", ru: "Смыкание губ", pl: "Domknięcie ust", uk: "Змикання губ" },
        steps: {
            en: ["Hold paper between lips.", "Don't use teeth.", "Hold for 5s."],
            ru: ["Бумага губами.", "Без зубов.", "Держи 5 с."],
            pl: ["Papier wargami.", "Bez zębów.", "Trzymaj 5s."],
            uk: ["Папір губами.", "Без зубів.", "Тримай 5 с."]
        },
        refusal: { en: "Hold a thick stick.", ru: "Палочку.", pl: "Patyczek.", uk: "Паличку." }
    },
    {
        id: "frog_tongue",
        title: { en: "Frog Tongue", ru: "Язык лягушки", pl: "Język żaby", uk: "Язик жаби" },
        category: "oral",
        age: ["2-3", "4-5"],
        level: "beginner",
        goal: { en: "Tongue protrusion", ru: "Высовывание языка", pl: "Wysuwanie języka", uk: "Висування язика" },
        steps: {
            en: ["Stick tongue out.", "Try to touch chin.", "Try to touch nose."],
            ru: ["Язык наружу.", "Тронь подбородок.", "Тронь нос."],
            pl: ["Język na zewnątrz.", "Dotknij brody.", "Dotknij nosa."],
            uk: ["Язик назовні.", "Торкнися підборіддя.", "Торкнися носа."]
        },
        refusal: { en: "Lick a lollipop.", ru: "Лижи чупа-чупс.", pl: "Liż lizaka.", uk: "Лижи чупа-чупс." }
    },
    {
        id: "harmonica",
        title: { en: "Harmonica", ru: "Гармошка", pl: "Harmonijka", uk: "Гармошка" },
        category: "oral",
        age: ["4-5", "6-8"],
        level: "advanced",
        goal: { en: "Respiratory control", ru: "Дыхание", pl: "Kontrola oddechu", uk: "Дихання" },
        steps: {
            en: ["Blow out.", "Suck in.", "Make music."],
            ru: ["Выдох.", "Вдох.", "Музыка."],
            pl: ["Wydech.", "Wdech.", "Muzyka."],
            uk: ["Видих.", "Вдих.", "Музика."]
        },
        refusal: { en: "Whistle.", ru: "Свисток.", pl: "Gwizek.", uk: "Свисток." }
    },

    // =========================================================================
    // SENSORY REGULATION (25 exercises)
    // =========================================================================
    {
        id: "burrow",
        title: { en: "The Burrow", ru: "Нора", pl: "Norka", uk: "Нора" },
        category: "sensory",
        age: ["2-3", "4-5", "6-8"],
        level: "beginner",
        goal: { en: "Deep Pressure", ru: "Давление", pl: "Głęboki docisk", uk: "Глибокий тиск" },
        steps: {
            en: ["Pile pillows.", "Hide under them."],
            ru: ["В кучу подушек.", "Спрячься."],
            pl: ["Stos poduszek.", "Schowaj się."],
            uk: ["На купу подушок.", "Сховайся."]
        },
        refusal: { en: "Blanket wrap.", ru: "Одеяло.", pl: "Koc.", uk: "Ковдра." }
    },
    {
        id: "joint_squeeze",
        title: { en: "Bear Hugs", ru: "Медвежьи объятия", pl: "Niedźwiedzi uścisk", uk: "Ведмежі обійми" },
        category: "sensory",
        age: ["2-3", "4-5", "6-8"],
        level: "beginner",
        goal: { en: "Proprioception", ru: "Проприоцепция", pl: "Propriocepcja", uk: "Пропріоцепція" },
        steps: {
            en: ["Hug tight.", "Squeeze arms.", "Squeeze legs."],
            ru: ["Крепко обнять.", "Сжать руки.", "Сжать ноги."],
            pl: ["Mocno przytul.", "Ściśnij ręce.", "Ściśnij nogi."],
            uk: ["Міцно обійняти.", "Стиснути руки.", "Стиснути ноги."]
        },
        refusal: { en: "Self-hug.", ru: "Сам себя.", pl: "Sam siebie.", uk: "Сам себе." }
    },
    {
        id: "towel_roll",
        title: { en: "Hot Dog Roll", ru: "Сосиска в тесте", pl: "Hot Dog", uk: "Сосиска в тісті" },
        category: "sensory",
        age: ["2-3", "4-5"],
        level: "intermediate",
        goal: { en: "Vestibular & Touch", ru: "Вестибулярный", pl: "Przedsionkowy", uk: "Вестибулярний" },
        steps: {
            en: ["Lay on blanket.", "Roll them up tight.", "Pretend to eat."],
            ru: ["Лечь на одеяло.", "Закатать.", "Понарошку съесть."],
            pl: ["Leż na kocu.", "Zawiń.", "Udawaj że jesz."],
            uk: ["Лягти на ковдру.", "Закатати.", "Ніби з'їсти."]
        },
        refusal: { en: "Just cover up.", ru: "Просто укрыть.", pl: "Tylko przykryj.", uk: "Просто накрити." }
    },
    {
        id: "rice_play",
        title: { en: "Sensory Bin", ru: "Коробка с рисом", pl: "Pudełko z ryżem", uk: "Коробка з рисом" },
        category: "sensory",
        age: ["2-3", "4-5"],
        level: "beginner",
        goal: { en: "Tactile desensitization", ru: "Тактильность", pl: "Odwrażliwianie dotyku", uk: "Тактильність" },
        steps: {
            en: ["Bin with rice.", "Hide cars.", "Dig w/ hands."],
            ru: ["Рис в коробке.", "Спрятать авто.", "Копать руками."],
            pl: ["Ryż w pudełku.", "Schowaj auto.", "Kop rękami."],
            uk: ["Рис у коробці.", "Сховати авто.", "Копати руками."]
        },
        refusal: { en: "Use spoon.", ru: "Ложкой.", pl: "Łyżką.", uk: "Ложкою." }
    },
    {
        id: "shaving_cream",
        title: { en: "Shaving Cream", ru: "Пена для бритья", pl: "Pianka do golenia", uk: "Піна для гоління" },
        category: "sensory",
        age: ["4-5", "6-8"],
        level: "advanced",
        goal: { en: "Messy play", ru: "Пачкаться", pl: "Brudna zabawa", uk: "Бруднитися" },
        steps: {
            en: ["Spray on table.", "Draw letters.", "Clap hands."],
            ru: ["На стол.", "Рисуй буквы.", "Хлопай."],
            pl: ["Na stół.", "Rysuj litery.", "Klaszcz."],
            uk: ["На стіл.", "Малюй літери.", "Плескай."]
        },
        refusal: { en: "Put in ziploc bag.", ru: "В пакет.", pl: "Do worka.", uk: "У пакет." }
    },
    {
        id: "wall_push",
        title: { en: "Wall Push", ru: "Толкай стену", pl: "Pchaj ścianę", uk: "Штовхай стіну" },
        category: "sensory",
        age: ["4-5", "6-8"],
        level: "intermediate",
        goal: { en: "Heavy work", ru: "Тяжелая работа", pl: "Ciężka praca", uk: "Важка робота" },
        steps: {
            en: ["Hands on wall.", "Push HARD.", "Count to 10."],
            ru: ["Руки на стену.", "Толкай СИЛЬНО.", "Счет до 10."],
            pl: ["Ręce na ścianę.", "Pchaj MOCNO.", "Licz do 10."],
            uk: ["Руки на стіну.", "Штовхай СИЛЬНО.", "Рахунок до 10."]
        },
        refusal: { en: "Push palms.", ru: "Ладони в ладони.", pl: "Dłonie w dłonie.", uk: "Долоні в долоні." }
    },
    {
        id: "swing_blanket",
        title: { en: "Hammock", ru: "Гамак", pl: "Hamak", uk: "Гамак" },
        category: "sensory",
        age: ["2-3", "4-5"],
        level: "intermediate",
        goal: { en: "Vestibular", ru: "Вестибулярный", pl: "Przedsionkowy", uk: "Вестибулярний" },
        steps: {
            en: ["2 adults hold blanket.", "Child inside.", "Swing gently."],
            ru: ["2 взрослых держат.", "Ребенок внутри.", "Качать."],
            pl: ["2 dorosłych trzyma.", "Dziecko w środku.", "Huśtać."],
            uk: ["2 дорослих тримають.", "Дитина всередині.", "Гойдати."]
        },
        refusal: { en: "Chair rocking.", ru: "Стул качалка.", pl: "Fotel bujany.", uk: "Стілець гойдалка." }
    },
    {
        id: "animal_walks",
        title: { en: "Animal Walks", ru: "Звериная ходьба", pl: "Chód zwierząt", uk: "Звірина хода" },
        category: "sensory",
        age: ["4-5", "6-8"],
        level: "intermediate",
        goal: { en: "Core strength", ru: "Сила кора", pl: "Siła tułowia", uk: "Сила кору" },
        steps: {
            en: ["Bear crawl.", "Crab walk.", "Frog jump."],
            ru: ["Медведь.", "Краб.", "Лягушка."],
            pl: ["Niedźwiedź.", "Krab.", "Żaba."],
            uk: ["Ведмідь.", "Краб.", "Жаба."]
        },
        refusal: { en: "Just stomp.", ru: "Просто топать.", pl: "Tupanie.", uk: "Просто тупотіти." }
    },
    {
        id: "lights_down",
        title: { en: "Cave Time", ru: "Время пещеры", pl: "Czas jaskini", uk: "Час печери" },
        category: "sensory",
        age: ["2-3", "4-5", "6-8"],
        level: "beginner",
        goal: { en: "Visual reduction", ru: "Меньше света", pl: "Redukcja bodźców", uk: "Менше світла" },
        steps: {
            en: ["Turn off lights.", "Use flashlight.", "Whisper."],
            ru: ["Выключи свет.", "Фонарик.", "Шепот."],
            pl: ["Wyłącz światło.", "Latarka.", "Szept."],
            uk: ["Вимкни світло.", "Ліхтарик.", "Шепіт."]
        },
        refusal: { en: "Dim lights only.", ru: "Приглушить.", pl: "Przygaś.", uk: "Приглушити." }
    },
    {
        id: "wheelbarrow",
        title: { en: "Wheelbarrow", ru: "Тачка", pl: "Taczka", uk: "Тачка" },
        category: "sensory",
        age: ["4-5", "6-8"],
        level: "advanced",
        goal: { en: "Upper body strength", ru: "Сила рук", pl: "Siła rąk", uk: "Сила рук" },
        steps: {
            en: ["Hold ankles.", "Walk on hands.", "Go to sofa."],
            ru: ["Держи лодыжки.", "Иди на руках.", "До дивана."],
            pl: ["Trzymaj kostki.", "Idź na rękach.", "Do kanapy."],
            uk: ["Тримай щиколотки.", "Йди на руках.", "До дивану."]
        },
        refusal: { en: "Hold hips.", ru: "За бедра.", pl: "Za biodra.", uk: "За стегна." }
    },

    // =========================================================================
    // EMOTIONAL & SOCIAL (25 exercises)
    // =========================================================================
    {
        id: "mirror_emotions",
        title: { en: "Mirror Emotions", ru: "Эмоции в зеркале", pl: "Emocje w lustrze", uk: "Емоції в дзеркалі" },
        category: "emotional",
        age: ["4-5", "6-8"],
        level: "intermediate",
        goal: { en: "Identifying feelings", ru: "Определение чувств", pl: "Nazywanie uczuć", uk: "Визначення почуттів" },
        steps: {
            en: ["Make Sad face.", "Make Happy face.", "Child copies."],
            ru: ["Грустное лицо.", "Веселое.", "Повторяй."],
            pl: ["Smutna twarz.", "Wesoła.", "Powtórz."],
            uk: ["Сумне обличчя.", "Веселе.", "Повторюй."]
        },
        refusal: { en: "Draw faces.", ru: "Рисуй лица.", pl: "Rysuj twarze.", uk: "Малюй обличчя." }
    },
    {
        id: "breathing_w_toy",
        title: { en: "Teddy Breath", ru: "Дыхание с Мишкой", pl: "Oddech Misia", uk: "Дихання з Ведмедиком" },
        category: "emotional",
        age: ["2-3", "4-5"],
        level: "beginner",
        goal: { en: "Visualizing breath", ru: "Видеть дыхание", pl: "Wizualizacja oddechu", uk: "Бачити дихання" },
        steps: {
            en: ["Toy on stomach.", "Make it rise.", "Make it fall."],
            ru: ["Игрушку на живот.", "Поднять.", "Опустить."],
            pl: ["Zabawka na brzuch.", "Góra.", "Dół."],
            uk: ["Іграшку на живіт.", "Підняти.", "Опустити."]
        },
        refusal: { en: "Hand on stomach.", ru: "Руку на живот.", pl: "Ręka na brzuch.", uk: "Руку на живіт." }
    },
    {
        id: "angry_paper",
        title: { en: "Angry Paper", ru: "Злая бумага", pl: "Zły papier", uk: "Злий папір" },
        category: "emotional",
        age: ["4-5", "6-8"],
        level: "beginner",
        goal: { en: "Release aggression", ru: "Выплеск злости", pl: "Uwolnienie złości", uk: "Виплеск злості" },
        steps: {
            en: ["Give old paper.", "Crumple it hard!", "Throw it in bin."],
            ru: ["Дай бумагу.", "Сомни сильно!", "Брось в урну."],
            pl: ["Daj papier.", "Zgnieć mocno!", "Wyrzuć do kosza."],
            uk: ["Дай папір.", "Зімни сильно!", "Кинь у смітник."]
        },
        refusal: { en: "Rip it.", ru: "Рви.", pl: "Podrzyj.", uk: "Рви." }
    },
    {
        id: "turn_taking_roll",
        title: { en: "Ball Roll", ru: "Кати мяч", pl: "Turlanie", uk: "Коти м'яч" },
        category: "emotional",
        age: ["2-3", "4-5"],
        level: "beginner",
        goal: { en: "Sharing", ru: "Делиться", pl: "Dzielenie się", uk: "Ділитися" },
        steps: {
            en: ["Sit apart.", "Roll ball.", "Say 'My Turn'."],
            ru: ["Сесть напротив.", "Кати.", "'Моя очередь'."],
            pl: ["Usiądźcie naprzeciw.", "Turlaj.", "'Moja kolej'."],
            uk: ["Сядьте навпроти.", "Коти.", "'Моя черга'."]
        },
        refusal: { en: "Use car.", ru: "Машинка.", pl: "Auto.", uk: "Машинка." }
    },
    {
        id: "social_story",
        title: { en: "Waiting Story", ru: "История про ожидание", pl: "Historyjka o czekaniu", uk: "Історія про чекання" },
        category: "emotional",
        age: ["4-5", "6-8"],
        level: "intermediate",
        goal: { en: "Understanding norms", ru: "Понимание норм", pl: "Rozumienie norm", uk: "Розуміння норм" },
        steps: {
            en: ["Draw stick figures.", "Show Waiting.", "Show Playing."],
            ru: ["Нарисуй людей.", "Ожидание.", "Игра."],
            pl: ["Rysuj Iudziki.", "Czekanie.", "Zabawa."],
            uk: ["Налюй людей.", "Чекання.", "Гра."]
        },
        refusal: { en: "Act it out.", ru: "Сыграть сценку.", pl: "Odegraj scenkę.", uk: "Зіграти сценку." }
    },
    {
        id: "comfort_box",
        title: { en: "Calm Box", ru: "Коробка Спокойствия", pl: "Pudełko Spokoju", uk: "Коробка Спокою" },
        category: "emotional",
        age: ["4-5", "6-8"],
        level: "intermediate",
        goal: { en: "Self-regulation tool", ru: "Инструмент самопомощи", pl: "Narzędzie samoregulacji", uk: "Інструмент самодопомоги" },
        steps: {
            en: ["Decorate a box.", "Put fidgets inside.", "Use when sad."],
            ru: ["Укрась коробку.", "Фиджеты внутрь.", "Когда грустно."],
            pl: ["Ozdób pudełko.", "Fidgety do środka.", "Gdy smutno."],
            uk: ["Прикрась коробку.", "Фіджети всередину.", "Коли сумно."]
        },
        refusal: { en: "Calm corner.", ru: "Уголок.", pl: "Kącik.", uk: "Куточок." }
    },
    {
        id: "gentle_hands",
        title: { en: "Gentle Hands", ru: "Нежные ручки", pl: "Delikatne rączki", uk: "Ніжні ручки" },
        category: "emotional",
        age: ["2-3", "4-5"],
        level: "beginner",
        goal: { en: "Empathy & Control", ru: "Эмпатия", pl: "Empatia", uk: "Емпатія" },
        steps: {
            en: ["Pet a stuffed animal.", "Say 'Gentle'.", "Do it slow."],
            ru: ["Гладь игрушку.", "'Нежно'.", "Медленно."],
            pl: ["Głaszcz pluszaka.", "'Delikatnie'.", "Powoli."],
            uk: ["Гладь іграшку.", "'Ніжно'.", "Повільно."]
        },
        refusal: { en: "Pet your arm.", ru: "Свою руку.", pl: "Swoją rękę.", uk: "Свою руку." }
    },
    {
        id: "feelings_chart",
        title: { en: "Feelings Chart", ru: "Карта Эмоций", pl: "Mapa Uczuć", uk: "Карта Емоцій" },
        category: "emotional",
        age: ["6-8"],
        level: "advanced",
        goal: { en: "Communication of state", ru: "Сообщить состояние", pl: "Komunikacja stanu", uk: "Повідомити стан" },
        steps: {
            en: ["Red = Mad.", "Blue = Sad.", "Point to color."],
            ru: ["Красный = Злой.", "Синий = Грусть.", "Покажи цвет."],
            pl: ["Czerwony = Zły.", "Niebieski = Smutny.", "Pokaż kolor."],
            uk: ["Червоний = Злий.", "Синій = Сум.", "Покажи колір."]
        },
        refusal: { en: "Thumbs up/down.", ru: "Палец вверх/вниз.", pl: "Kciuk w górę/dół.", uk: "Палець вгору/вниз." }
    },
    {
        id: "check_in",
        title: { en: "Daily Check-in", ru: "Как дела?", pl: "Jak leci?", uk: "Як справи?" },
        category: "emotional",
        age: ["6-8"],
        level: "intermediate",
        goal: { en: "Reflection", ru: "Рефлексия", pl: "Refleksja", uk: "Рефлексія" },
        steps: {
            en: ["Ask 'Best part of day?'.", "Listen.", "Share yours."],
            ru: ["'Лучшее за день?'.", "Слушай.", "Расскажи свое."],
            pl: ["'Co najlepsze?'.", "Słuchaj.", "Opowiedz swoje."],
            uk: ["'Найкраще за день?'.", "Слухай.", "Розкажи своє."]
        },
        refusal: { en: "Draw it.", ru: "Нарисуй.", pl: "Narysuj.", uk: "Намалюй." }
    },
    {
        id: "safe_space_build",
        title: { en: "Build a Fort", ru: "Строим форт", pl: "Buduj bazę", uk: "Будуємо форт" },
        category: "emotional",
        age: ["4-5", "6-8"],
        level: "intermediate",
        goal: { en: "Safety creation", ru: "Создание безопасности", pl: "Tworzenie bezpieczeństwa", uk: "Створення безпеки" },
        steps: {
            en: ["Blankets on chairs.", "Bring flashlight.", "Hide."],
            ru: ["Одеяла на стулья.", "Фонарик.", "Прячься."],
            pl: ["Koce na krzesła.", "Latarka.", "Schowaj się."],
            uk: ["Ковдри на стільці.", "Ліхтарик.", "Ховайся."]
        },
        refusal: { en: "Under table.", ru: "Под стол.", pl: "Pod stół.", uk: "Під стіл." }
    }
];

export const getExercises = (lang: 'en' | 'ru' | 'pl' | 'uk', filters?: { age?: string[], category?: string }) => {
    let filtered = exercisesData;
    if (filters?.category && filters.category !== 'all') {
        filtered = filtered.filter(e => e.category === filters.category);
    }
    if (filters?.age && filters.age.length > 0) {
        filtered = filtered.filter(e => e.age.some(a => filters.age?.includes(a)));
    }

    return filtered.map(e => ({
        ...e,
        title: e.title[lang],
        goal: e.goal[lang],
        steps: e.steps[lang],
        refusal: e.refusal[lang]
    }));
};
