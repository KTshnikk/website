// --- ДАННЫЕ КОМАНДЫ ---
const teamMembers = [
    {
        name: "Иван Иванов",
        role: "Team Lead / Backend",
        photo: "images/member1.jpg", // Если нет фото, оставь null или ""
        initials: "ИИ"
    },
    {
        name: "Петр Петров",
        role: "Frontend Developer",
        photo: null,
        initials: "ПП"
    },
    {
        name: "Алексей Сидоров",
        role: "System Analyst / Technical Writer",
        photo: null,
        initials: "АС"
    },
    {
        name: "Анна Смирнова",
        role: "UI/UX Designer",
        photo: null,
        initials: "АС"
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
                <div class="col-md-6 col-lg-3">
                    <div class="team-card-horizontal">
                        ${avatarHtml}
                        <div class="overflow-hidden">
                            <div class="text-white fw-semibold text-truncate">${member.name}</div>
                            <div class="text-secondary small text-truncate">${member.role}</div>
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