// --- ДАННЫЕ КОМАНДЫ ---
const teamMembers = [
    { name: "Леонова Анастасия", role: "Проект-менеджер-разработчик (ПИЭ-23)", photo: "images/leonova.jpg", initials: "АЛ" },
    { name: "Вадим Алимов", role: "Младший ПМ (МОАИС-25)", photo: "images/alimov.jpg", initials: "ВА" },
    { name: "Ямщиков Юрий", role: "Аналитик (ПМИб-23)", photo: "images/yamshikov.jpg", initials: "ЮЯ" },
    { name: "Исаев Никита", role: "Аналитик (ПМИб-25)", photo: "images/isaev.jpg", initials: "НИ" },
    { name: "Лялин Олег", role: "Проектировщик (ИВТ-24)", photo: "images/lalin.jpg", initials: "ОЛ" },
    { name: "Леонов Елисей", role: "Проектировщик (МОАИС-25)", photo: "images/elisey.jpg", initials: "ЕЛ" },
    { name: "Герасимов Дмитрий", role: "Тестировщик (МОАИС-24)", photo: "images/gerasimov.jpg", initials: "ДГ" },
    { name: "Климов Артем", role: "Тестировщик (ПМИб-25)", photo: "images/klimov.jpg", initials: "АК" },
    { name: "Смирнова Ангелина", role: "Разработчик-ПМ (ПИЭ-23)", photo: "images/angelina.jpg", initials: "АС" },
    { name: "Дорофеев Игорь", role: "Разработчик (МОАИС-23)", photo: "images/dorofeef.jpg", initials: "ИД" },
    { name: "Шаплов Данил", role: "Разработчик (ПМИб-25)", photo: "images/shaplov.jpg", initials: "ДШ" }
];

// --- ДАННЫЕ БЛОГА РАЗРАБОТКИ ---
const blogPosts = [
    {
        date: "04.09.2026 – 06.09.2026",
        role: "Проект-менеджер",
        title: "Концепция проекта и расчеты COCOMO II",
        authors: "Леонова Анастасия",
        text: "Сформирована концепция «PiN», произведен расчет трудоемкости (4013 чел/час, 4.2 месяца на 11 человек) по модели COCOMO II."
    },
    {
        date: "04.09.2026 – 10.09.2026",
        role: "Аналитик",
        title: "Предпроектное обследование и анализ аналогов",
        authors: "Ямщиков Юрий, Исаев Никита",
        text: "Проведен анализ сервисов Komoot, WalksWays, Clio и составлена спецификация функциональных требований."
    },
    {
        date: "11.09.2026 – 16.09.2026",
        role: "Аналитик + Проектировщик",
        title: "Проектирование базы данных и UI",
        authors: "Ямщиков Юрий, Исаев Никита, Лялин Олег, Леонов Елисей",
        text: "Разработана даталогическая модель базы данных из 7 таблиц (User, Location, Route и др.) и макеты интерфейса."
    },
    {
        date: "17.09.2026 – 20.09.2026",
        role: "Аналитик + Тестировщик",
        title: "Приемочное тестирование (UAT)",
        authors: "Герасимов Дмитрий, Климов Артем, Ямщиков Юрий",
        text: "Сформирована программа приемочного тестирования, чек-листы и количественные критерии готовности приложения."
    }
];

// --- ИНИЦИАЛИЗАЦИЯ ДЕМО-БАЗЫ ДАННЫХ (LOCALSTORAGE) ---
let initialRequests = [
    { id: 1, title: "Панорамная крыша у реки", author: "Пользователь #12", type: "Метка", status: "На модерации" },
    { id: 2, title: "Маршрут по тихим дворам центра", author: "Пользователь #05", type: "Маршрут", status: "На модерации" }
];

if (!localStorage.getItem('pin_requests')) {
    localStorage.setItem('pin_requests', JSON.stringify(initialRequests));
}

// --- УПРАВЛЕНИЕ РОЛЯМИ И АВТОРИЗАЦИЕЙ ---
function getRole() {
    return localStorage.getItem('user_role') || 'guest';
}

function setRole(role) {
    localStorage.setItem('user_role', role);
    updateUIForRole();
}

function updateUIForRole() {
    const role = getRole();
    const roleDisplay = document.getElementById('current-role-display');
    const adminPanel = document.getElementById('admin-panel');
    const adminNavLink = document.getElementById('admin-nav-link');
    const authBtnText = document.getElementById('auth-btn-text');

    if (role === 'admin') {
        if (roleDisplay) roleDisplay.textContent = 'Администратор';
        if (authBtnText) authBtnText.textContent = 'Админ';
        if (adminPanel) adminPanel.style.display = 'block';
        if (adminNavLink) adminNavLink.style.display = 'block';
        renderAdminRequests();
    } else if (role === 'user') {
        if (roleDisplay) roleDisplay.textContent = 'Авторизованный пользователь';
        if (authBtnText) authBtnText.textContent = 'Пользователь';
        if (adminPanel) adminPanel.style.display = 'none';
        if (adminNavLink) adminNavLink.style.display = 'none';
    } else {
        if (roleDisplay) roleDisplay.textContent = 'Гость (Без авторизации)';
        if (authBtnText) authBtnText.textContent = 'Войти';
        if (adminPanel) adminPanel.style.display = 'none';
        if (adminNavLink) adminNavLink.style.display = 'none';
    }
}

// --- ФУНКЦИИ АДМИН-ПАНЕЛИ (МОДЕРАЦИЯ И CRUD) ---
function renderAdminRequests() {
    const listContainer = document.getElementById('admin-requests-list');
    if (!listContainer) return;

    let requests = JSON.parse(localStorage.getItem('pin_requests')) || [];

    if (requests.length === 0) {
        listContainer.innerHTML = '<div class="text-secondary small">Все заявки проверены!</div>';
        return;
    }

    listContainer.innerHTML = requests.map(req => `
        <div class="d-flex justify-content-between align-items-center p-3 rounded border border-secondary bg-dark text-white">
            <div>
                <span class="badge bg-info text-dark mb-1">${req.type}</span>
                <div class="fw-bold">${req.title}</div>
                <div class="text-secondary small">Автор: ${req.author} | Статус: <span class="text-warning">${req.status}</span></div>
            </div>
            <div class="d-flex gap-2">
                <button class="btn btn-sm btn-success" onclick="moderateRequest(${req.id}, 'Одобрено')"><i class="bi bi-check-lg"></i> Одобрить</button>
                <button class="btn btn-sm btn-danger" onclick="moderateRequest(${req.id}, 'Отклонено')"><i class="bi bi-x-lg"></i> Отклонить</button>
            </div>
        </div>
    `).join('');
}

function moderateRequest(id, status) {
    let requests = JSON.parse(localStorage.getItem('pin_requests')) || [];
    requests = requests.filter(r => r.id !== id);
    localStorage.setItem('pin_requests', JSON.stringify(requests));
    renderAdminRequests();
    alert(`Заявка #${id} переведена в статус: ${status}`);
}

// --- ОТРИСОВКА СТРАНИЦЫ ---
document.addEventListener("DOMContentLoaded", () => {
    // 1. Отрисовка команды
    const teamContainer = document.getElementById("team-container");
    const teamCountElement = document.getElementById("team-count");

    if (teamCountElement) teamCountElement.textContent = teamMembers.length;

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
                    <div class="d-flex justify-content-between align-items-center mb-2 flex-wrap gap-2">
                        <span class="text-secondary small fw-bold"><i class="bi bi-calendar-event me-1"></i> ${post.date}</span>
                        <span class="badge" style="background: rgba(99, 102, 241, 0.15); color: #818cf8; border: 1px solid rgba(99, 102, 241, 0.25);">${post.role}</span>
                    </div>
                    <h5 class="text-white mb-1">${post.title}</h5>
                    <div class="small mb-3" style="color: var(--accent-cyan);">${post.authors}</div>
                    <p class="text-secondary m-0" style="line-height: 1.6;">${post.text}</p>
                </div>
            </div>
        `).join('');
    }

    // Обновляем UI ролей при загрузке
    updateUIForRole();
});