/* ============================================
   NAVIGATION.JS - Функции навигации
   (Оригинальная версия, обернутая в функцию)
   ============================================ */

function initializeAllNavigationFeatures() {

    // Плавный скролл по якорям
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Проверка, чтобы не мешать другим кнопкам
            if (!href || href === '#' || !document.querySelector(href)) {
                return;
            }

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Анимация элементов при скролле
    try {
        const observer = new IntersectionObserver(function(entries, self) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    self.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.card, .activity-card, .review-card').forEach(el => {
            observer.observe(el);
        });
    } catch (e) {
        console.warn('IntersectionObserver не поддерживается или не найдены элементы для анимации.');
    }

    console.log('✅ Оригинальные функции из navigation.js успешно инициализированы.');
}
