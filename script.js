// --- ДАННЫЕ КОМАНДЫ ---
const teamMembers = [
    {
        name: "Леонова Анастасия",
        role: "Проект-менеджер-разработчик (ПИЭ-23)",
        photo: "images/leonova.jpg",
        initials: "АЛ"
    },
    {
        name: "Вадим Алимов",
        role: "Младший ПМ (МОАИС-25)",
        photo: "images/alimov.jpg",
        initials: "ВА"
    },
    {
        name: "Ямщиков Юрий",
        role: "Аналитик (ПМИб-23)",
        photo: "images/yamshikov.jpg",
        initials: "ЮЯ"
    },
    {
        name: "Исаев Никита",
        role: "Аналитик (ПМИб-25)",
        photo: "images/isaev.jpg",
        initials: "НИ"
    },
    {
        name: "Лялин Олег",
        role: "Проектировщик (ИВТ-24)",
        photo: "images/lalin.jpg",
        initials: "ОЛ"
    },
    {
        name: "Леонов Елисей",
        role: "Проектировщик (МОАИС-25)",
        photo: "images/elisey.jpg",
        initials: "ЕЛ"
    },
    {
        name: "Герасимов Дмитрий",
        role: "Тестировщик (МОАИС-24)",
        photo: "images/gerasimov.jpg",
        initials: "ДГ"
    },
    {
        name: "Климов Артем",
        role: "Тестировщик (ПМИб-25)",
        photo: "images/klimov.jpg",
        initials: "АК"
    },
    {
        name: "Смирнова Ангелина",
        role: "Разработчик-ПМ (ПИЭ-23)",
        photo: "images/angelina.jpg",
        initials: "АС"
    },
    {
        name: "Дорофеев Игорь",
        role: "Разработчик (МОАИС-23)",
        photo: "images/dorofeef.jpg",
        initials: "ИД"
    },
    {
        name: "Шаплов Данил",
        role: "Разработчик (ПМИб-25)",
        photo: "images/shaplov.jpg",
        initials: "ДШ"
    }
];

// --- ДАННЫЕ БЛОГА С ПОДРОБНЫМИ ЭТАПАМИ ПРОЕКТА ---
const blogPosts = [
    {
        date: "04.09.2026 – 06.09.2026",
        role: "Проект-менеджер",
        title: "Концепция проекта и расчеты по методике COCOMO II",
        authors: "Леонова Анастасия — Проект-менеджер",
        text: "Разработана концепция интерактивной карты «PiN» для поиска малопопулярных локаций и построения маршрутов[cite: 4, 6]. Определена целевая аудитория (творческая молодежь, исследователи, горожане)[cite: 4, 6]. Произведен расчет трудоемкости и длительности проекта по методике COCOMO II: общая трудоемкость составила 26.4 чел./мес. (4013 человеко-часов), а расчетная длительность — 4.2 месяца при штате из 11 человек[cite: 6]. Сформирован детальный план работ и распределение ресурсов."
    },
    {
        date: "04.09.2026 – 10.09.2026",
        role: "Аналитик",
        title: "Предпроектное обследование и спецификация требований",
        authors: "Ямщиков Юрий, Исаев Никита — Аналитики",
        text: "Произведено описание предметной области геоинформационных веб-сервисов. Выбран метод сбора требований (интервью с заказчиком) и проведен детальный анализ рыночных аналогов (Komoot, WalksWays, Clio), позволивший выделить сильные стороны социального взаимодействия и оффлайн-режима. Сформирована подробная спецификация функциональных и нефункциональных требований к сервису."
    },
    {
        date: "11.09.2026 – 16.09.2026",
        role: "Аналитик + Проектировщик",
        title: "Проектирование структуры БД и архитектуры",
        authors: "Ямщиков Юрий, Исаев Никита, Лялин Олег, Леонов Елисей — Аналитики и Проектировщики",
        text: "Спроектирована даталогическая модель базы данных, состоящая из 7 взаимосвязанных таблиц (User, Location, Route, Route_Location, Media, Comment, Verification) с индексами на внешних ключах[cite: 6]. Определены входные и выходные данные, разработаны структурные схемы приложения и черновой прототип пользовательского интерфейса в сдержанной цветовой палитре[cite: 6]."
    },
    {
        date: "17.09.2026 – 20.09.2026",
        role: "Аналитик + Тестировщик",
        title: "Приемочное тестирование и критерии готовности",
        authors: "Герасимов Дмитрий, Климов Артем, Ямщиков Юрий — Тестировщики и Аналитики",
        text: "Определены качественные и количественные критерии оценки готовности будущего приложения[cite: 7]. Разработаны детальные тест-кейсы и чек-листы для приемочного пользовательского тестирования (UAT), охватывающие проверку интерактивной карты, фильтрации по уединенности, двухуровневой модерации и интеграции с внешними навигаторами[cite: 7]."
    }
];

// --- ОТРИСОВКА НА СТРАНИЦЕ ---
document.addEventListener("DOMContentLoaded", () => {
    // 1. Отрисовка команды
    const teamContainer = document.getElementById("team-container");
    const teamCountElement = document.getElementById("team-count");

    if (teamCountElement) {
        teamCountElement.textContent = teamMembers.length;
    }

    if (teamContainer) {
        teamContainer.innerHTML = teamMembers.map(member => {
            const avatarHtml = member.photo 
                ? `<img src="${member.photo}" alt="${member.name}" class="avatar-badge" style="object-fit: cover;">`
                : `<div class="avatar-badge">${member.initials}</div>`;

            return `
                <div class="col-md-6 col-lg-4">
                    <div class="team-card-horizontal">
                        ${avatarHtml}
                        <div class="overflow-hidden">
                            <div class="text-white fw-semibold text-truncate">${member.name}</div>
                            <div class="text-secondary small text-truncate" title="${member.role}">${member.role}</div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // 2. Отрисовка блога в новом красивом формате
    const blogContainer = document.getElementById("blog-container");

    if (blogContainer) {
        blogContainer.innerHTML = blogPosts.map(post => `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="glass-panel">
                    <div class="d-flex justify-content-between align-items-center mb-2 flex-wrap gap-2">
                        <span class="text-secondary small fw-bold"><i class="bi bi-calendar-event me-1"></i> ${post.date}</span>
                        <span class="badge" style="background: rgba(99, 102, 241, 0.15); color: #818cf8; border: 1px solid rgba(99, 102, 241, 0.25); font-weight: 500;">${post.role}</span>
                    </div>
                    <h5 class="text-white mb-1">${post.title}</h5>
                    <div class="small mb-3" style="color: var(--accent-cyan); font-weight: 500;">${post.authors}</div>
                    <p class="text-secondary m-0" style="line-height: 1.6;">${post.text}</p>
                </div>
            </div>
        `).join('');
    }
});