/* ============================================
   NAVIGATION.JS - Функции навигации
   (Версия-помощник, без самозапуска)
   ============================================ */

function initializeAllNavigationFeatures() {
    
    // 1. Плавный скролл по якорям
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // Игнорируем пустые якоря, чтобы не ломать другие кнопки
            if (!href || href === '#') {
                return;
            }
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault(); // Предотвращаем резкий скачок
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 2. Анимация появления элементов при скролле (если нужна)
    try {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver(function(entries, self) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    self.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.card, .activity-card, .review-card').forEach(el => {
            observer.observe(el);
        });
    } catch (e) {
        console.warn('IntersectionObserver не поддерживается или не найдены элементы для анимации.');
    }

    console.log('✅ Функции из navigation.js успешно инициализированы.');
}
