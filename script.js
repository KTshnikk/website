// --- ДАННЫЕ КОМАНДЫ (11 ЧЕЛОВЕК) ---
const teamMembers = [
    {
        name: "Леонова Анастасия",
        role: "Проект-менеджер-разработчик (ПИЭ-23)",
        photo: null,
        initials: "АЛ"
    },
    {
        name: "Вадим Алимов",
        role: "Младший ПМ (МОАИС-25)",
        photo: null,
        initials: "ВА"
    },
    {
        name: "Ямщиков Юрий",
        role: "Аналитик (ПМИб-23)",
        photo: null,
        initials: "ЮЯ"
    },
    {
        name: "Исаев Никита",
        role: "Аналитик (ПМИб-25)",
        photo: null,
        initials: "НИ"
    },
    {
        name: "Лялин Олег",
        role: "Проектировщик (ИВТ-24)",
        photo: null,
        initials: "ОЛ"
    },
    {
        name: "Леонов Елисей",
        role: "Проектировщик (МОАИС-25)",
        photo: null,
        initials: "ЕЛ"
    },
    {
        name: "Герасимов Дмитрий",
        role: "Тестировщик (МОАИС-24)",
        photo: null,
        initials: "ДГ"
    },
    {
        name: "Климов Артем",
        role: "Тестировщик (ПМИб-25)",
        photo: null,
        initials: "АК"
    },
    {
        name: "Смирнова Ангелина",
        role: "Разработчик-ПМ (ПИЭ-23)",
        photo: null,
        initials: "АС"
    },
    {
        name: "Дорофеев Игорь",
        role: "Разработчик (МОАИС-23)",
        photo: null,
        initials: "ИД"
    },
    {
        name: "Шаплов Данил",
        role: "Разработчик (ПМИб-25)",
        photo: null,
        initials: "ДШ"
    }
];

// --- ЭТАПЫ И БЛОГ РАЗРАБОТКИ ---
const blogPosts = [
    {
        title: "Расчет COCOMO II и планирование",
        date: "06.09.2026",
        text: "Проведен расчет трудоемкости (4013 человеко-часов) и длительности проекта (4.2 месяца), распределены ресурсы команды."
    },
    {
        title: "Предпроектное обследование и анализ аналогов",
        date: "10.09.2026",
        text: "Сформированы требования на основе интервью с заказчиком и обзора рыночных аналогов (Komoot, WalksWays, Clio)."
    },
    {
        title: "Проектирование схемы данных и архитектуры",
        date: "16.09.2026",
        text: "Разработана даталогическая модель базы данных (7 таблиц с индексами) и структурные схемы приложения."
    },
    {
        title: "Приемочное тестирование и тест-кейсы",
        date: "20.09.2026",
        text: "Подготовлены качественные и количественные критерии приемки, а также сценарии UAT-тестирования."
    }
];

// --- ОТРИСОВКА НА СТРАНИЦЕ ---
document.addEventListener("DOMContentLoaded", () => {
    // 1. Отрисовка команды
    const teamContainer = document.getElementById("team-container");
    const teamCountElement = document.getElementById("team-count");
    const teamCountBtn = document.getElementById("team-count-btn");

    if (teamCountElement) teamCountElement.textContent = teamMembers.length;
    if (teamCountBtn) teamCountBtn.textContent = teamMembers.length;

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

    // 2. Отрисовка блога и этапов
    const blogContainer = document.getElementById("blog-container");

    if (blogContainer) {
        blogContainer.innerHTML = blogPosts.map(post => `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="glass-panel">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <h5 class="text-white m-0">${post.title}</h5>
                        <span class="badge bg-dark border border-secondary text-secondary">${post.date}</span>
                    </div>
                    <p class="text-secondary m-0">${post.text}</p>
                </div>
            </div>
        `).join('');
    }
});