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

// --- ДАННЫЕ БЛОГА ---
const blogPosts = [
    {
        title: "Запуск первого спринта и выбор стека",
        date: "10.09.2026",
        text: "Сформировали состав команды, утвердили архитектурные требования и начали верстку презентационной страницы."
    },
    {
        title: "Проектирование схемы данных",
        date: "12.09.2026",
        text: "Разработали диаграмму сущностей и определили ключевые сценарии взаимодействия с интерактивной картой."
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

    // 2. Отрисовка блога
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