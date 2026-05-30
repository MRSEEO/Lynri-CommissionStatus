// =========================================================
// 1. ГЕНЕРАЦИЯ ЗВЁЗД
// =========================================================
function createStars() {
    const container = document.getElementById('stars-container');
    if (!container) return; // Если контейнера нет на странице, выходим
    const count = 120;
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 3 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.setProperty('--duration', (Math.random() * 3 + 2) + 's');
        star.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(star);
    }
}

// =========================================================
// 2. ЛАЙТБОКС (если есть модальное окно на странице)
// =========================================================
function initLightbox() {
    const modal = document.getElementById('lightbox-modal');
    if (!modal) return; // Если модалки нет, ничего не делаем

    const modalImg = document.getElementById('lightbox-image');
    const images = document.querySelectorAll('.image-side img, .image-item img');

    // Открытие по клику
    images.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'flex';
            modalImg.src = this.src;
        });
    });

    // Закрытие по клику на фон или крестик
    modal.addEventListener('click', function(e) {
        if (e.target === this || e.target.tagName === 'SPAN') {
            this.style.display = 'none';
        }
    });

    // Закрытие по Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modal.style.display = 'none';
        }
    });
}

// =========================================================
// 3. ПОДСВЕТКА АКТИВНОЙ СТРАНИЦЫ В НАВИГАЦИИ
// =========================================================
function highlightActivePage() {
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll('.main-nav ul li a');

    links.forEach(link => {
        const linkPath = link.getAttribute('href');
        // Если ссылка ведёт на эту же страницу
        if (currentPath.endsWith(linkPath) && linkPath !== '../index.html' && linkPath !== '#contact') {
            link.classList.add('active');
        }
        // Особый случай для главной страницы (index.html)
        if ((currentPath.endsWith('index.html') || currentPath.endsWith('/')) && linkPath === '../index.html') {
            link.classList.add('active');
        }
    });
}

// =========================================================
// 4. ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
// =========================================================
document.addEventListener('DOMContentLoaded', function() {
    createStars();
    initLightbox();
    highlightActivePage();
});