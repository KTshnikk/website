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

// --- ИСХОДНЫЕ ДАННЫЕ БЛОГА РАЗРАБОТКИ (ПОЛНЫЙ ТЕКСТ) ---
const defaultBlogPosts = [
    {
        date: "04.09.2026 – 06.09.2026",
        role: "Проект-менеджер",
        title: "Концепция проекта и расчеты по методике COCOMO II",
        authors: "Леонова Анастасия — Проект-менеджер",
        text: "Разработана концепция интерактивной карты «PiN» для поиска малопопулярных локаций и построения маршрутов. Определена целевая аудитория (творческая молодежь, исследователи, горожане). Произведен расчет трудоемкости и длительности проекта по методике COCOMO II: общая трудоемкость составила 26.4 чел./мес. (4013 человеко-часов), а расчетная длительность — 4.2 месяца при штате из 11 человек. Сформирован детальный план работ и распределение ресурсов."
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
        text: "Спроектирована даталогическая модель базы данных, состоящая из 7 взаимосвязанных таблиц (User, Location, Route, Route_Location, Media, Comment, Verification) с индексами на внешних ключах. Определены входные и выходные данные, разработаны структурные схемы приложения и черновой прототип пользовательского интерфейса в сдержанной цветовой палитре."
    },
    {
        date: "17.09.2026 – 20.09.2026",
        role: "Аналитик + Тестировщик",
        title: "Приемочное тестирование и критерии готовности",
        authors: "Герасимов Дмитрий, Климов Артем, Ямщиков Юрий — Тестировщики и Аналитики",
        text: "Определены качественные и количественные критерии оценки готовности будущего приложения. Разработаны детальные тест-кейсы и чек-листы для приемочного пользовательского тестирования (UAT), охватывающие проверку интерактивной карты, фильтрации по уединенности, двухуровневой модерации и интеграции с внешними навигаторами."
    }
];

// --- ИСХОДНЫЕ ФУНКЦИОНАЛЬНЫЕ МОДУЛИ ---
const defaultModules = [
    {
        number: "Модуль 01",
        title: "Сервис и Интерактивная карта",
        badge: "В разработке",
        badgeClass: "bg-warning bg-opacity-10 text-warning border-warning",
        desc: "Ключевой клиентский блок приложения для поиска, визуализации и работы с локациями.",
        features: ["Интерактивная карта с метками объектов", "Фильтрация по категориям и уровню уединённости", "Построение авторских прогулочных маршрутов"]
    },
    {
        number: "Модуль 02",
        title: "Авторизация и Права доступа",
        badge: "Активно",
        badgeClass: "bg-success bg-opacity-10 text-success border-success",
        desc: "Подсистема управления пользователями, сессиями и разграничением прав доступа (RBAC).",
        features: ["Регистрация, аутентификация и личный кабинет", "Роли: Гость, Пользователь, Администратор", "Нейросетевая фильтрация текста и отзывов"]
    }
];

// --- ИНИЦИАЛИЗАЦИЯ LOCALSTORAGE ---
if (!localStorage.getItem('pin_blog_posts')) {
    localStorage.setItem('pin_blog_posts', JSON.stringify(defaultBlogPosts));
}
if (!localStorage.getItem('pin_modules')) {
    localStorage.setItem('pin_modules', JSON.stringify(defaultModules));
}

// --- УПРАВЛЕНИЕ АВТОРИЗАЦИЕЙ (ЛОГИН / ПАРОЛЬ) ---
function handleLogin(event) {
    event.preventDefault();
    const login = document.getElementById('login-input').value.trim();
    const password = document.getElementById('password-input').value.trim();
    const errorDiv = document.getElementById('login-error');

    if (login === 'admin' && password === 'admin') {
        localStorage.setItem('user_role', 'admin');
        localStorage.setItem('username', login);
        errorDiv.style.display = 'none';
        closeModalAndRefresh();
    } else if (login.length > 0 && password.length > 0) {
        localStorage.setItem('user_role', 'user');
        localStorage.setItem('username', login);
        errorDiv.style.display = 'none';
        closeModalAndRefresh();
    } else {
        errorDiv.textContent = 'Введите логин и пароль!';
        errorDiv.style.display = 'block';
    }
}

function handleLogout() {
    localStorage.setItem('user_role', 'guest');
    localStorage.removeItem('username');
    closeModalAndRefresh();
}

function closeModalAndRefresh() {
    const modalEl = document.getElementById('authModal');
    const modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();
    updateUIForRole();
}

function updateUIForRole() {
    const role = localStorage.getItem('user_role') || 'guest';
    const username = localStorage.getItem('username') || '';
    const roleDisplay = document.getElementById('current-role-display');
    const adminPanel = document.getElementById('admin-panel');
    const adminNavLink = document.getElementById('admin-nav-link');
    const authBtnText = document.getElementById('auth-btn-text');
    const loginForm = document.getElementById('login-form');
    const loggedInView = document.getElementById('logged-in-view');

    if (role === 'admin') {
        if (roleDisplay) roleDisplay.textContent = `Администратор (${username})`;
        if (authBtnText) authBtnText.textContent = 'Админ';
        if (adminPanel) adminPanel.style.display = 'block';
        if (adminNavLink) adminNavLink.style.display = 'block';
        if (loginForm) loginForm.style.display = 'none';
        if (loggedInView) loggedInView.style.display = 'block';
    } else if (role === 'user') {
        if (roleDisplay) roleDisplay.textContent = `Пользователь (${username})`;
        if (authBtnText) authBtnText.textContent = username;
        if (adminPanel) adminPanel.style.display = 'none';
        if (adminNavLink) adminNavLink.style.display = 'none';
        if (loginForm) loginForm.style.display = 'none';
        if (loggedInView) loggedInView.style.display = 'block';
    } else {
        if (roleDisplay) roleDisplay.textContent = 'Гость (Без авторизации)';
        if (authBtnText) authBtnText.textContent = 'Войти';
        if (adminPanel) adminPanel.style.display = 'none';
        if (adminNavLink) adminNavLink.style.display = 'none';
        if (loginForm) loginForm.style.display = 'block';
        if (loggedInView) loggedInView.style.display = 'none';
    }

    // ВАЖНО: гарантированно обновляем блоки при каждом изменении роли
    renderBlogPosts();
    renderModules();
}

// --- CRUD: ДОБАВЛЕНИЕ И УДАЛЕНИЕ ЗАПИСЕЙ БЛОГА И МОДУЛЕЙ ---
function handleAddNewBlog(event) {
    event.preventDefault();
    const date = document.getElementById('blog-date').value;
    const role = document.getElementById('blog-role').value;
    const title = document.getElementById('blog-title').value;
    const authors = document.getElementById('blog-authors').value;
    const text = document.getElementById('blog-text').value;

    let posts = JSON.parse(localStorage.getItem('pin_blog_posts')) || defaultBlogPosts;
    posts.unshift({ date, role, title, authors, text });
    localStorage.setItem('pin_blog_posts', JSON.stringify(posts));

    document.getElementById('add-blog-form').reset();
    alert('Новая запись успешно добавлена в блог разработки!');
    renderBlogPosts();
}

function deleteBlogPost(index) {
    if (confirm('Вы уверены, что хотите удалить эту запись из блога разработки?')) {
        let posts = JSON.parse(localStorage.getItem('pin_blog_posts')) || defaultBlogPosts;
        posts.splice(index, 1);
        localStorage.setItem('pin_blog_posts', JSON.stringify(posts));
        renderBlogPosts();
    }
}

function handleAddNewModule(event) {
    event.preventDefault();
    const title = document.getElementById('mod-title').value;
    const desc = document.getElementById('mod-desc').value;
    const featuresRaw = document.getElementById('mod-features').value;
    const features = featuresRaw.split(/[\n;]+/).map(f => f.trim()).filter(f => f.length > 0);

    let modules = JSON.parse(localStorage.getItem('pin_modules')) || defaultModules;
    modules.push({
        number: `Модуль 0${modules.length + 1}`,
        title: title,
        badge: "В разработке",
        badgeClass: "bg-warning bg-opacity-10 text-warning border-warning",
        desc: desc,
        features: features
    });
    localStorage.setItem('pin_modules', JSON.stringify(modules));

    document.getElementById('add-module-form').reset();
    alert('Функциональный модуль успешно добавлен на сайт!');
    renderModules();
}

function deleteModule(index) {
    if (confirm('Вы уверены, что хотите удалить этот функциональный модуль?')) {
        let modules = JSON.parse(localStorage.getItem('pin_modules')) || defaultModules;
        modules.splice(index, 1);
        localStorage.setItem('pin_modules', JSON.stringify(modules));
        renderModules();
    }
}

// --- ОТРИСОВКА БЛОГА И МОДУЛЕЙ НА СТРАНИЦЕ ---
function renderBlogPosts() {
    const blogContainer = document.getElementById("blog-container");
    const posts = JSON.parse(localStorage.getItem('pin_blog_posts')) || defaultBlogPosts;
    const isAdmin = localStorage.getItem('user_role') === 'admin';

    if (blogContainer) {
        blogContainer.innerHTML = posts.map((post, index) => `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="glass-panel">
                    <div class="d-flex justify-content-between align-items-center mb-2 flex-wrap gap-2">
                        <div>
                            <span class="text-secondary small fw-bold me-2"><i class="bi bi-calendar-event me-1"></i> ${post.date}</span>
                            <span class="badge" style="background: rgba(99, 102, 241, 0.15); color: #818cf8; border: 1px solid rgba(99, 102, 241, 0.25);">${post.role}</span>
                        </div>
                        ${isAdmin ? `<button class="btn btn-sm btn-outline-danger py-0 px-2" onclick="deleteBlogPost(${index})" title="Удалить запись"><i class="bi bi-trash"></i></button>` : ''}
                    </div>
                    <h5 class="text-white mb-1">${post.title}</h5>
                    <div class="small mb-3" style="color: var(--accent-cyan);">${post.authors}</div>
                    <p class="text-secondary m-0" style="line-height: 1.6;">${post.text}</p>
                </div>
            </div>
        `).join('');
    }
}

function renderModules() {
    const container = document.getElementById("modules-container");
    const modules = JSON.parse(localStorage.getItem('pin_modules')) || defaultModules;
    const isAdmin = localStorage.getItem('user_role') === 'admin';

    if (container) {
        container.innerHTML = modules.map((mod, index) => `
            <div class="col-lg-6">
                <div class="glass-panel h-100 position-relative">
                    <div class="d-flex justify-content-between align-items-start mb-3">
                        <div>
                            <span class="section-tag d-block mb-1">${mod.number}</span>
                            <h3 class="text-white h4 m-0">${mod.title}</h3>
                        </div>
                        <div class="d-flex align-items-center gap-2">
                            <span class="badge ${mod.badgeClass} border border-opacity-25 px-2 py-1">
                                <i class="bi bi-clock-history me-1"></i> ${mod.badge}
                            </span>
                            ${isAdmin ? `<button class="btn btn-sm btn-outline-danger py-0 px-2" onclick="deleteModule(${index})" title="Удалить модуль"><i class="bi bi-trash"></i></button>` : ''}
                        </div>
                    </div>
                    <p class="text-secondary small mb-4">${mod.desc}</p>
                    <div class="text-white small fw-semibold mb-2">Функционал:</div>
                    <ul class="list-unstyled text-secondary small m-0 d-flex flex-column gap-2">
                        ${mod.features.map(f => `
                            <li class="d-flex align-items-center gap-2">
                                <i class="bi bi-check2-circle" style="color: var(--accent-indigo);"></i>
                                <span>${f}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `).join('');
    }
}

// --- ОБЩАЯ ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ ---
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

    // 2. Инициализация интерфейса и рендер контента
    updateUIForRole();
});